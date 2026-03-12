# Session Handoff - 2026-03-12

## Context
Completed the full coordinated documentation update (tier architecture approved), configured ClaudeClaw end-to-end, built and tested the Airtable skill, connected Slack, and created all prospect and TNC member files.

## Completed

- **Tier architecture approved and all docs updated in one coordinated pass:**
  - `index.html` -- v4, 3-tier product cards, comparison table, 3-tab hero toggle (PVRPOSE EA / Amplify / Scale)
  - `PVRPOSE_AI_OS_EA_SUPERPOWERS_SOP.md` -- v1.2, full tier architecture added
  - `PVRPOSE_AI_OS_BLUEPRINT_SOP.md` -- v3.1, multi-user and tier updates
  - `CLAUDECLAW_MONETIZATION_STRATEGY_SONNET.md` -- v3.0, 3-tier pricing and CLV
- **index.html synced to all 3 locations** -- claudeclaw repo, Google Drive, Vercel (auto-deployed)
- **CLAUDE.md fully configured** -- assistant name: Sophie AI, user: Coach Juan, bio filled, ClaudeClaw path set, Obsidian TBD
- **Slack added to CLAUDE.md skills table** -- Sophie AI will now use the Slack skill when triggered
- **Airtable skill built and tested live** -- `src/airtable-cli.ts`, `skills/airtable/SKILL.md`, `src/config.ts` updated, all commands verified against real Airtable data
- **.env updated** -- ALLOWED_CHAT_ID → ALLOWED_CHAT_IDS, SLACK_USER_TOKEN added, AIRTABLE_* credentials added
- **Slack connected** -- `xoxp-` user token in .env, all 11 scopes confirmed, `list` and `send` tested and working. Fixed missing `mpim` scopes after reinstall.
- **`run-claudeclaw.bat.txt` renamed** to `run-claudeclaw.bat`
- **`data/prospects/`** -- 4 files created: george-mills.md, nathalie-mckenzie.md, andrea-soueidan.md, james-hutchinson.md
- **`data/tnc-members/`** -- 11 files created (all TNC members relevant for March 17 lunch)
- **Michael Schacter removed** from all files, MEMORY.md, and prospects
- **MEMORY.md updated** -- handoff 028 → 029, CLAUDE.md status, Airtable credentials noted
- **`user_identity.md` memory file created** -- Sophie AI name, Coach Juan, YOLO mode, ClaudeClaw path
- **Google Calendar timezone** -- SKILL.md confirmed as America/Toronto. gcal.py not deployed yet (no ~/.config/calendar/ directory)
- **Assistant renamed** -- San Miguel → Sophie → Sophie AI (CLAUDE.md + memory)

## In Progress

- **Sophie AI not yet receiving Slack messages** -- Slack is connected for sending/reading on-demand, but there is no real-time listener. Sophie AI reads Slack only when prompted via Telegram ("check my Slack").

## Next Steps

1. **Restart ClaudeClaw bot** -- so Sophie AI picks up the updated CLAUDE.md (Slack + Airtable skills now listed)
2. **TNC lunch prep (March 17 -- URGENT)** -- draft conversation starters / talking points for the 11 TNC member files before the lunch
3. **Build proposal templates** -- `templates/pioneer-build-proposal.md`, `templates/pioneer-audit-proposal.md`, `templates/pioneer-build-agreement.md`
4. **Generate proposals** -- for George Mills (Pioneer Build) and Nathalie McKenzie (Pioneer Audit) in `proposals/`
5. **Obsidian vault path** -- update CLAUDE.md when Juan has it
6. **Google Calendar + Gmail OAuth setup** -- `~/.config/calendar/` and `~/.config/gmail/` don't exist yet, needs OAuth flow on Juan's machine
7. **Real-time Slack listener (Option B)** -- build persistent socket mode listener so Sophie AI receives Slack messages proactively (bigger build)
8. **`src/db.ts`** -- add prospects + builds tables (migration-safe)
9. **`agents/ops/CLAUDE.md`, `agents/comms/CLAUDE.md`, `agents/content/CLAUDE.md`** -- update each agent
10. **`agents/research/agent.yaml`** -- only .example exists, needs to be created
11. **`scripts/generate-pdf.py`** -- reusable PDF generator for proposals
12. **`content/`** -- LinkedIn post drafts folder

## Key Files

- `CLAUDE.md` -- fully configured (Sophie AI, Coach Juan, all paths, Slack + Airtable in skills table)
- `src/airtable-cli.ts` -- Airtable CLI (list, get, create, update, search, schema)
- `skills/airtable/SKILL.md` -- Airtable skill definition
- `skills/slack/SKILL.md` -- Slack skill (mpim now included)
- `src/slack.ts` -- Slack core logic (mpim restored after scopes confirmed)
- `.env` -- all credentials: Telegram, Groq, Google, Airtable, Slack, Dashboard
- `data/prospects/` -- 4 prospect files
- `data/tnc-members/` -- 11 TNC member files
- `memory/user_identity.md` -- Coach Juan / Sophie AI identity memory
- `index.html` -- v4, synced to all 3 locations

## Blockers / Notes

- **YOLO mode is active** -- no confirmations needed until Coach Juan says otherwise
- **Verified claim standards (enforce always):** EA salary $63K-$98K CAD (Robert Half 2026), payback 3-6 months, 3x multiplier, 10-15 hrs/week reclaimed, up to 60% automation (McKinsey)
- **index.html sync rule:** Google Drive is SOURCE OF TRUTH → Vercel repo → claudeclaw repo. Always sync all 3.
- **No middleware** -- all integrations direct API only (no n8n, Zapier, Make)
- **Airtable table** contains leads/assessment signups (not prospects). Fields: full_name, first_name, email, status, score, top_priority, source, assessment_answers, document, submission_date, jurisdiction
- **Slack workspace:** Sophie AI workspace (sophie-ai-workspace.slack.com), user: juan (U0AKUKQN139)
- **Slack real-time** -- Sophie AI only reads Slack on-demand via Telegram. Real-time listener is a future build.
- **TNC lunch March 17** -- 5 days away, prep is time-sensitive
- **Pioneer pricing:** George Mills = Free Pioneer Build ($0), Nathalie McKenzie = Pioneer Audit ($2,500 CAD)
