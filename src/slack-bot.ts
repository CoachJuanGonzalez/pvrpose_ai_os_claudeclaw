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

import { App, LogLevel } from '@slack/bolt';

import { runAgent, AgentProgressEvent } from './agent.js';
import { AGENT_ID, agentDefaultModel, agentSystemPrompt } from './config.js';
import { getSession, setSession } from './db.js';
import { logger } from './logger.js';
import { buildMemoryContext, saveConversationTurn } from './memory.js';
import { readEnvFile } from './env.js';
import { emitChatEvent, setProcessing } from './state.js';

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

  slackApp.message(async ({ message, say, client }) => {
    // Only handle regular user messages (not bot messages, edits, etc.)
    if (message.subtype) return;
    if (!('user' in message) || !('text' in message)) return;

    const userId = message.user!;
    const text = message.text || '';
    const channelId = message.channel;

    // Ignore our own messages
    if (userId === botUserId) return;

    // Security gate
    if (!isAuthorisedSlackUser(userId)) {
      logger.warn({ userId }, 'Rejected Slack message from unauthorised user');
      return;
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

      // Send response (split if long)
      const responseParts = splitSlackMessage(rawResponse);
      for (const part of responseParts) {
        await say(part);
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
