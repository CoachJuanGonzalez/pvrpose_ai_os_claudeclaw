# Session Handoff - 2026-03-11

## Context
Complete rewrite of PVRPOSE_AI_OS_BLUEPRINT_SOP.md into a single definitive v3.0 document. Previous version was a patchwork of appended parts across multiple sessions. v3.0 is one coherent document with no redundancy and no external dependencies.

## Completed

- **PVRPOSE_AI_OS_BLUEPRINT_SOP.md -- VERSION 3.0 -- COMPLETE**
  - 2,380 lines, 30 sections, fully integrated
  - All 28 confirmed V1/V2/V3 features covered
  - All 6 installed skills documented with full business cases (Gmail, Google Calendar, Slack, Timezone, Gemini, LinkedIn)
  - Airtable CRM data flow documented in full: Phase 1 (manual mirror), Phase 2 (n8n auto-sync), Phase 3 (direct API skill)
  - Complete business case library: categories A through M (~50 use cases) with exact trigger phrases and manual time replaced
  - Gemini video use cases: video briefing → action plan, whiteboard analysis, signed document reading, video-to-LinkedIn pipeline
  - LinkedIn skill use cases: post from voice note, post from video (Gemini + LinkedIn pipeline), carousel outlines, content repurposing
  - 20-minute demo script
  - 6-week build SOP day by day
  - Session management: convolife, checkpoint, /newchat, /respin, /stop, /model, /memory, /forget, context window, memory architecture
  - Day in the Life narrative (7:30am to 6pm)
  - Priority sequencing Tier 1-4
  - ROI framework by industry (4 industries with real numbers)
  - Competitive positioning table
  - Complete .env reference
  - Compliance: CASL, PIPEDA, Quebec Law 25
  - Skills setup replication checklist per client
  - Known issues and status (resolved issues marked, open items listed)
  - Version footer: v3.0, March 2026

- **Gemini skill installed** -- `~/.claude/skills/gemini-api-dev/SKILL.md` (previous session)
- **LinkedIn skill installed** -- `~/.claude/skills/linkedin/SKILL.md` (previous session, Juan's voice rules)
- **GOOGLE_API_KEY confirmed** -- real key in .env, Gemini fully active

## In Progress

Nothing started and abandoned.

## Next Steps

1. **CRITICAL -- Fill in CLAUDE.md root placeholders** (Section 30, Issue 1)
   File: `CLAUDE.md` (project root)
   Replace: `[YOUR ASSISTANT NAME]`, `[YOUR NAME]`, `[YOUR_OBSIDIAN_VAULT_PATH]`, `[PATH TO CLAUDECLAW]`
   Correct path: `C:\Users\Juan Gonzalez\Documents\PVRPOSE_AI\PVRPOSE_AI_OS\CLAUDE_CLAW\claudeclaw`
   This is the #1 blocker -- convolife and checkpoint use this path for SQLite queries

2. **Create data/prospects/ files** -- 5 files (use template in Section 8 of SOP):
   - `data/prospects/george-mills.md`
   - `data/prospects/nathalie-mckenzie.md`
   - `data/prospects/andrea-soueidan.md`
   - `data/prospects/michael-schacter.md`
   - `data/prospects/james-hutchinson.md`
   Note: Clarify with Juan whether George Mills is a CPA or construction law -- conflicting info across docs

3. **Set up morning digest cron** (Section 19, Tier 1):
   ```bash
   node dist/schedule-cli.js create "Read data/prospects/ and give me a morning pipeline summary: who needs follow-up today, who responded overnight, what is my priority action" "30 7 * * 1-5"
   ```

4. **Fix Google Calendar default timezone** (Section 30, Issue 2):
   Change from America/New_York to America/Toronto in gcal.py

5. **Build data/tnc-members/ files** -- 10 members before March 17 TNC lunch (6 days away)

6. **Draft Michael Schacter outreach** -- WhatsApp + email, overdue since March 11

7. **Apply 10 website changes to index.html** -- regenerate prompt from SOP Section 2 and Section 30 if needed

8. **Create agents/research/agent.yaml** -- copy from agents/research/agent.yaml.example

9. **Rename run-claudeclaw.bat.txt to run-claudeclaw.bat** (Section 30, Issue 6)

10. **Build Airtable skill (Phase 3)** -- `~/.claude/skills/airtable/SKILL.md` -- defer until Phase 1 and 2 are working

## Key Files

- `PVRPOSE_AI_OS_BLUEPRINT_SOP.md` -- THE MASTER DOCUMENT, v3.0, 30 sections, 2,380 lines. Single source of truth.
- `CLAUDE.md` -- CRITICAL: still has [BRACKETED] placeholders
- `~/.claude/skills/gemini-api-dev/SKILL.md` -- Gemini video/multimodal skill, active
- `~/.claude/skills/linkedin/SKILL.md` -- LinkedIn post skill, Juan's voice, active
- `skills/gmail/SKILL.md` -- Gmail skill, requires OAuth setup per client
- `skills/google-calendar/SKILL.md` -- Calendar skill, timezone needs fix (America/New_York → America/Toronto)
- `skills/slack/SKILL.md` -- Slack skill, requires xoxp- token per client
- `skills/timezone/SKILL.md` -- Timezone skill, updated for Juan's locations
- `agents/research/agent.yaml` -- MISSING (only .example exists)
- `run-claudeclaw.bat.txt` -- needs rename to .bat for Windows auto-start
- `specs/handoffs/017-2026-03-11-gemini-linkedin-skills-installed.md` -- previous handoff

## Blockers / Notes

- **SOP v3.0 is the only document to follow** -- all previous versions (v1.0, v1.2, v2.0, v2.1) are superseded. If any other doc contradicts the SOP, the SOP wins.
- **CLAUDE.md placeholders** remain the single most important operational blocker. Fix this first.
- **George Mills role** -- some docs say CPA, some say construction law. Needs clarification before creating his prospect file.
- **TNC lunch March 17** -- 6 days away. tnc-members/ files are time-sensitive.
- **Airtable Phase 1 starts immediately** -- create the 5 prospect files manually now; n8n sync (Phase 2) is a Week 2-3 priority.
- **convolife and checkpoint** work via natural language -- no slash command, Claude handles via CLAUDE.md instructions. Works once [PATH TO CLAUDECLAW] placeholder is filled in.
