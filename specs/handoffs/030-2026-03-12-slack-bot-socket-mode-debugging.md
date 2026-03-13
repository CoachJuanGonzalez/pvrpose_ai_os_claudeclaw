# Session Handoff - 2026-03-12

## Context
Built real-time Slack bot (Socket Mode) for Sophie AI to live in Slack alongside Telegram. Bot connects and authenticates but DM events are not reaching the handler. Debugging in progress.

## Completed

- **Everything from handoff 029** -- tier architecture, docs, Airtable, prospects, TNC members, CLAUDE.md, .env
- **Slack real-time bot built** -- `src/slack-bot.ts` using @slack/bolt Socket Mode
  - Wired into `src/index.ts` -- starts alongside Telegram bot
  - Auth works: bot user `U0AL6RD80AH` (`claudeclaw_assistant`) on Sophie AI workspace
  - Session management: `slack:<userId>` chat IDs, separate from Telegram sessions
  - Security: `SLACK_ALLOWED_USER_IDS` set-based auth (same pattern as Telegram)
  - Message routing: messages go through `runAgent()` same as Telegram
  - `src/state.ts` updated: added `'slack'` to source type union
- **Slack CLI skill** -- still works for on-demand reading (User OAuth Token)
- **.env updated** -- SLACK_BOT_TOKEN, SLACK_APP_TOKEN, SLACK_ALLOWED_USER_IDS all set
- **CLAUDE.md updated** -- Slack and Airtable CLI instructions added inline
- **All committed and pushed** to GitHub (`f453801`)
- **Debug logging added** to slack-bot.ts -- logs raw events to identify where messages are dropped

## In Progress

- **BLOCKER: Slack DM events not reaching bot handler**
  - Socket Mode connects successfully
  - Bot authenticates (`auth.test` passes)
  - No `message` events appear in logs when user sends DM
  - Likely cause: Event Subscriptions not properly configured in the Slack app
  - Required bot events: `message.im`, `message.channels`, `message.groups`
  - User confirmed they added scopes and reinstalled, but events still not firing
  - Also confirmed: Messages Tab enabled in App Home, "Allow users to send..." checked
  - Bot scopes confirmed: channels:history, channels:read, chat:write, users:read, mpim:history, mpim:read, groups:history, im:history, im:read, im:write
  - **NEXT DEBUG STEP**: Have user screenshot Event Subscriptions page to verify `message.im` is listed under "Subscribe to bot events" (not "Subscribe to workspace events")

## Next Steps

1. **FIX: Slack DM events** -- verify Event Subscriptions in Slack app dashboard. The events MUST be under "Subscribe to **bot** events", not workspace events.
2. **If events still don't fire** -- try adding `app_mention` event and test by @mentioning the bot in a channel instead of DM
3. **After Slack works** -- test full round trip: DM → Claude → response in Slack
4. **Commit debug fix** once working
5. **Resume remaining items from handoff 029:**
   - TNC lunch prep (March 17)
   - Proposal templates
   - Google Calendar + Gmail OAuth setup
   - Real Slack bot display name rename to "Sophie AI"

## Key Files

- `src/slack-bot.ts` -- Slack Socket Mode bot (debug logging added)
- `src/index.ts` -- wires Slack bot startup alongside Telegram
- `src/state.ts` -- added 'slack' source type
- `.env` -- SLACK_BOT_TOKEN, SLACK_APP_TOKEN, SLACK_ALLOWED_USER_IDS
- `.env.example` -- template updated with Slack bot vars
- `store/startup.log` -- runtime logs (check for Slack events)

## Blockers / Notes

- **YOLO mode is active**
- **Port 3141** -- must kill old process before restarting (`taskkill //F //PID <pid>`)
- **Bot user**: `claudeclaw_assistant` (U0AL6RD80AH) -- user wants display name changed to "Sophie AI"
- **User's Slack user ID**: U0AKUKQN139 (set in SLACK_ALLOWED_USER_IDS)
- **Workspace**: sophie-ai-workspace.slack.com
