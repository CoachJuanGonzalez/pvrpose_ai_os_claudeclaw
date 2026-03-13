# Session Handoff - 2026-03-12

## Context
Fixed Slack Socket Mode (rebuilt app from scratch), added voice message support for Slack, added filesystem restrictions to CLAUDE.md, and drafted Brad Wise outreach for free PVRPOSE EA pioneer build.

## Completed

- **Slack Socket Mode FIXED** -- rebuilt app from scratch at api.slack.com/apps. New app ID: A0AM5PAG9Q8, new bot user: U0AL57D512P. Socket Mode events now working confirmed.
- **New tokens in .env** -- SLACK_BOT_TOKEN and SLACK_APP_TOKEN updated, bot running and responding
- **Debug logging turned off** -- LogLevel.WARN in slack-bot.ts
- **Voice message support for Slack** -- slack-bot.ts now handles file_share subtype, downloads audio from Slack, transcribes via Groq Whisper, routes to Claude
- **File upload support for Slack** -- [SEND_FILE:] markers in Claude responses now upload files to Slack via filesUploadV2
- **files:read + files:write scopes added** to new Slack app
- **Filesystem restrictions in CLAUDE.md** -- Sophie AI restricted to C:\Users\Juan Gonzalez\Documents\PVRPOSE_AI\ only
- **status.ts fixed** -- now recognizes ALLOWED_CHAT_IDS (plural)
- **Brad Wise prospect file created** -- data/prospects/brad-wise.md
- **Brad Wise outreach drafted** -- WhatsApp and email, both saved to data/prospects/
- **All committed and pushed** to GitHub (bd8f745)

## In Progress

- **Groq voice transcription blocked by VPN** -- works with VPN off, fails with VPN on (ExpressVPN blocks Groq API). Pending fix.

## Next Steps

1. **Send Brad Wise outreach tomorrow (2026-03-13)** -- WhatsApp first (514-867-8555), then email (brad.wise@manulifewealth.ca). Deadline: Monday Zoom or before Tuesday TNC lunch (March 17)
2. **Fix VPN + Groq** -- ExpressVPN split tunneling by app (exclude node.exe) OR switch to OpenAI Whisper
3. **TNC lunch prep** (March 17) -- draft conversation starters for 11 TNC members
4. **Proposal templates** -- pioneer-build-proposal.md, pioneer-audit-proposal.md, pioneer-build-agreement.md
5. **Google Calendar + Gmail OAuth setup** -- skills exist but OAuth not configured
6. **src/db.ts** -- add prospects + builds tables
7. **agents/ops, comms, content CLAUDE.md** -- update each agent
8. **content/** -- create LinkedIn post drafts folder
9. **Delete old Slack app** -- the broken one from before (A0AKUPULCAK) at api.slack.com/apps

## Key Files

- `src/slack-bot.ts` -- Slack bot with voice + file upload support
- `.env` -- new SLACK_BOT_TOKEN + SLACK_APP_TOKEN
- `CLAUDE.md` -- filesystem restrictions added
- `scripts/status.ts` -- ALLOWED_CHAT_IDS fix
- `data/prospects/brad-wise.md` -- Brad Wise profile + offer
- `data/prospects/brad-wise-outreach-whatsapp.md` -- WhatsApp message (send 2026-03-13)
- `data/prospects/brad-wise-outreach-email.md` -- Email message (send 2026-03-13)

## Blockers / Notes

- **YOLO mode active**
- **VPN issue** -- Groq API returns 403 when ExpressVPN is on. Voice messages only work with VPN off for now.
- **Brad Wise deadline** -- must reply by Monday (2026-03-16) for Zoom demo, or before Tuesday lunch (2026-03-17). If no reply, offer goes to someone else at TNC lunch.
- **George Mills** -- no reply, offer expired. Do not re-engage with free pioneer.
- **Nathalie McKenzie** -- stays at Pioneer Audit ($2,500), not free build.
- **Slack bot display name** -- shows as "Sophie AI" in workspace (confirmed)
- **Old Slack app** (A0AKUPULCAK) still exists at api.slack.com -- delete it to avoid confusion
- **ClaudeClaw running** -- PID in store/claudeclaw.pid, port 3141, Telegram + Slack + Dashboard all live
