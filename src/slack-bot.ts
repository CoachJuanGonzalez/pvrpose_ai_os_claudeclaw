/**
 * ClaudeClaw Slack Bot — real-time listener via Socket Mode.
 *
 * Runs alongside the Telegram bot. Messages from authorised Slack users
 * are routed to Claude via runAgent() and responses sent back to the
 * same Slack channel/DM.
 *
 * Required env vars:
 *   SLACK_BOT_TOKEN   — Bot User OAuth Token (xoxb-...)
 *   SLACK_APP_TOKEN   — App-Level Token (xapp-...) for Socket Mode
 *   SLACK_ALLOWED_USER_IDS — comma-separated Slack user IDs (e.g. U0AKUKQN139)
 */

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { App, LogLevel } from '@slack/bolt';

import { runAgent, AgentProgressEvent } from './agent.js';
import { extractFileMarkers } from './bot.js';
import { AGENT_ID, agentDefaultModel, agentSystemPrompt } from './config.js';
import { getSession, setSession } from './db.js';
import { logger } from './logger.js';
import { buildMemoryContext, saveConversationTurn } from './memory.js';
import { readEnvFile } from './env.js';
import { emitChatEvent, setProcessing } from './state.js';
import { transcribeAudio, UPLOADS_DIR } from './voice.js';

// ── Config ──────────────────────────────────────────────────────────

const env = readEnvFile([
  'SLACK_BOT_TOKEN',
  'SLACK_APP_TOKEN',
  'SLACK_ALLOWED_USER_IDS',
]);

const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN || env.SLACK_BOT_TOKEN || '';
const SLACK_APP_TOKEN = process.env.SLACK_APP_TOKEN || env.SLACK_APP_TOKEN || '';
const rawAllowedSlackUsers = process.env.SLACK_ALLOWED_USER_IDS || env.SLACK_ALLOWED_USER_IDS || '';

const SLACK_ALLOWED_USER_IDS: ReadonlySet<string> = new Set(
  rawAllowedSlackUsers
    .split(',')
    .map((id) => id.trim())
    .filter(Boolean),
);

// Slack message limit (4000 chars for regular messages)
const SLACK_MAX_LENGTH = 3900;

// ── Helpers ─────────────────────────────────────────────────────────

function splitSlackMessage(text: string): string[] {
  if (text.length <= SLACK_MAX_LENGTH) return [text];
  const parts: string[] = [];
  let remaining = text;
  while (remaining.length > 0) {
    if (remaining.length <= SLACK_MAX_LENGTH) {
      parts.push(remaining);
      break;
    }
    // Try to split at a newline
    let splitAt = remaining.lastIndexOf('\n', SLACK_MAX_LENGTH);
    if (splitAt <= 0) splitAt = SLACK_MAX_LENGTH;
    parts.push(remaining.slice(0, splitAt));
    remaining = remaining.slice(splitAt).trimStart();
  }
  return parts;
}

function isAuthorisedSlackUser(userId: string): boolean {
  if (SLACK_ALLOWED_USER_IDS.size === 0) return false;
  return SLACK_ALLOWED_USER_IDS.has(userId);
}

// ── Session management ──────────────────────────────────────────────
// Use "slack:<userId>" as the chat ID so sessions are per-user and
// separate from Telegram sessions.

function slackChatId(userId: string): string {
  return `slack:${userId}`;
}

// ── Bot setup ───────────────────────────────────────────────────────

let slackApp: App | null = null;
let botUserId: string | null = null;

export function isSlackConfigured(): boolean {
  return !!(SLACK_BOT_TOKEN && SLACK_APP_TOKEN && SLACK_ALLOWED_USER_IDS.size > 0);
}

export async function startSlackBot(): Promise<void> {
  if (!SLACK_BOT_TOKEN || !SLACK_APP_TOKEN) {
    logger.info('Slack bot not configured (missing SLACK_BOT_TOKEN or SLACK_APP_TOKEN). Skipping.');
    return;
  }

  if (SLACK_ALLOWED_USER_IDS.size === 0) {
    logger.warn('SLACK_ALLOWED_USER_IDS not set. Slack bot will reject all messages.');
  }

  slackApp = new App({
    token: SLACK_BOT_TOKEN,
    appToken: SLACK_APP_TOKEN,
    socketMode: true,
    logLevel: LogLevel.WARN,
  });

  // Get our own bot user ID so we can ignore our own messages
  try {
    const authResult = await slackApp.client.auth.test({ token: SLACK_BOT_TOKEN });
    botUserId = authResult.user_id as string;
    logger.info({ botUserId }, 'Slack bot authenticated');
  } catch (err) {
    logger.error({ err }, 'Slack bot auth failed');
    return;
  }

  // ── Message handler ─────────────────────────────────────────────

  slackApp.event('message', async ({ event, say }) => {
    const message = event as unknown as Record<string, unknown>;

    logger.info({ messageEvent: JSON.stringify(message).slice(0, 500) }, 'Slack raw event received');

    // Allow regular messages and file_share (voice messages), skip everything else
    const subtype = message.subtype as string | undefined;
    if (subtype && subtype !== 'file_share') {
      logger.info({ subtype }, 'Slack message skipped (subtype)');
      return;
    }

    const userId = (message.user as string) || '';
    let text = (message.text as string) || '';
    const channelId = (message.channel as string) || '';

    // Ignore our own messages
    if (!userId || userId === botUserId) return;

    // Security gate
    if (!isAuthorisedSlackUser(userId)) {
      logger.warn({ userId }, 'Rejected Slack message from unauthorised user');
      return;
    }

    // Handle voice/audio files -- download and transcribe
    const files = message.files as Array<Record<string, unknown>> | undefined;
    if (files && files.length > 0) {
      const audioFile = files.find((f) => {
        const mime = (f.mimetype as string) || '';
        return mime.startsWith('audio/');
      });
      if (audioFile) {
        const downloadUrl = (audioFile.url_private_download || audioFile.url_private) as string;
        if (downloadUrl) {
          try {
            logger.info({ fileName: audioFile.name }, 'Downloading Slack voice message');
            const resp = await fetch(downloadUrl, {
              headers: { Authorization: `Bearer ${SLACK_BOT_TOKEN}` },
            });
            if (!resp.ok) throw new Error(`Download failed: ${resp.status}`);
            const buf = Buffer.from(await resp.arrayBuffer());
            const ext = path.extname((audioFile.name as string) || '.m4a') || '.m4a';
            const localPath = path.join(UPLOADS_DIR, `slack_${Date.now()}_${crypto.randomBytes(4).toString('hex')}${ext}`);
            fs.mkdirSync(UPLOADS_DIR, { recursive: true });
            fs.writeFileSync(localPath, buf);
            const transcription = await transcribeAudio(localPath);
            fs.unlinkSync(localPath);
            if (transcription) {
              text = `[Voice transcribed]: ${transcription}`;
              logger.info({ transcription: transcription.slice(0, 100) }, 'Slack voice transcribed');
            } else {
              await say("Couldn't transcribe the voice message. Try again or send text.");
              return;
            }
          } catch (err) {
            logger.error({ err }, 'Slack voice transcription failed');
            await say("Couldn't process the voice message. Try sending text instead.");
            return;
          }
        }
      }
    }

    // Skip empty messages
    if (!text.trim()) return;

    logger.info({ userId, channelId, messageLen: text.length }, 'Slack message received');

    const chatId = slackChatId(userId);

    // Show typing indicator
    emitChatEvent({ type: 'user_message', chatId, content: text, source: 'slack' });

    // Build memory context
    const memCtx = await buildMemoryContext(chatId, text);
    const parts: string[] = [];
    if (agentSystemPrompt) {
      parts.push(`[Agent role — follow these instructions]\n${agentSystemPrompt}\n[End agent role]`);
    }
    // Add source context so Claude knows this came from Slack
    parts.push('[Message received via Slack — respond here, not Telegram]');
    if (memCtx) parts.push(memCtx);
    parts.push(text);
    const fullMessage = parts.join('\n\n');

    const sessionId = getSession(chatId, AGENT_ID);

    setProcessing(chatId, true);

    try {
      const onProgress = (event: AgentProgressEvent) => {
        if (event.type === 'task_started' || event.type === 'task_completed') {
          emitChatEvent({ type: 'progress', chatId, description: event.description });
        }
      };

      const abortCtrl = new AbortController();

      const result = await runAgent(
        fullMessage,
        sessionId,
        () => {}, // No typing indicator refresh needed for Slack
        onProgress,
        agentDefaultModel,
        abortCtrl,
      );

      if (result.aborted) {
        setProcessing(chatId, false);
        await say('Stopped.');
        return;
      }

      if (result.newSessionId) {
        setSession(chatId, result.newSessionId, AGENT_ID);
        logger.info({ newSessionId: result.newSessionId }, 'Slack session saved');
      }

      const rawResponse = result.text?.trim() || 'Done.';

      // Save conversation turn
      saveConversationTurn(chatId, text, rawResponse, result.newSessionId ?? sessionId, AGENT_ID);

      // Emit to SSE
      emitChatEvent({ type: 'assistant_message', chatId, content: rawResponse, source: 'slack' });

      // Extract file markers ([SEND_FILE:...], [SEND_PHOTO:...])
      const { text: responseText, files: fileMarkers } = extractFileMarkers(rawResponse);

      // Upload any attached files to Slack
      for (const file of fileMarkers) {
        try {
          if (!fs.existsSync(file.filePath)) {
            await say(`Could not send file: ${file.filePath} (not found)`);
            continue;
          }
          await slackApp!.client.filesUploadV2({
            token: SLACK_BOT_TOKEN,
            channel_id: channelId,
            file: fs.readFileSync(file.filePath),
            filename: path.basename(file.filePath),
            initial_comment: file.caption || undefined,
          });
        } catch (fileErr) {
          logger.error({ err: fileErr, filePath: file.filePath }, 'Failed to upload file to Slack');
          await say(`Failed to send file: ${path.basename(file.filePath)}`);
        }
      }

      // Send text response (split if long)
      if (responseText) {
        const responseParts = splitSlackMessage(responseText);
        for (const part of responseParts) {
          await say(part);
        }
      }

      setProcessing(chatId, false);
    } catch (err) {
      setProcessing(chatId, false);
      logger.error({ err }, 'Slack agent error');

      const errMsg = err instanceof Error ? err.message : String(err);
      if (errMsg.includes('exited with code 1')) {
        await say('Context window full. Starting fresh session.');
        setSession(chatId, undefined as unknown as string, AGENT_ID);
      } else {
        await say('Something went wrong. Check the logs.');
      }
    }
  });

  // ── Start ─────────────────────────────────────────────────────────

  await slackApp.start();
  logger.info('Slack bot is running (Socket Mode)');
  console.log('  Slack bot online (Socket Mode)');
}

export async function stopSlackBot(): Promise<void> {
  if (slackApp) {
    await slackApp.stop();
    logger.info('Slack bot stopped');
  }
}
