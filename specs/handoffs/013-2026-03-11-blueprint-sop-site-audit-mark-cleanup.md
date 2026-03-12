# Session Handoff - 2026-03-11

## Context
Full session focused on three major deliverables: (1) complete website audit of pvrpose.ai against what ClaudeClaw actually does, (2) creation of the PVRPOSE AI OS Blueprint SOP document from scratch, (3) cleanup of all "Mark" / wrong-user references across the repo. Also confirmed Airtable as Juan's primary CRM and stored it in memory.

## Completed

- **Website audit** -- full fact-check of pvrpose.ai against confirmed ClaudeClaw capabilities. 7 critical claim fixes, 3 legal flags (Quebec LPC, Competition Act, CASL), 5 conversion gaps identified. Full prompt written for Claude Code to make all 10 changes to index.html.
- **PVRPOSE_AI_OS_BLUEPRINT_SOP.md** -- created from scratch, 24 parts covering: system architecture, what it can/cannot do, blueprint folder structure, 20-minute demo script, 6-week build SOP day by day, post-delivery support, replication checklist, pricing, qualification criteria, compliance (CASL/PIPEDA/Quebec Law 25), tools reference, all 4 skills (Gmail, Google Calendar, Slack, Timezone), all 9 EA commands, agent YAML system, voice pipeline (Groq + ElevenLabs + Gradium), WhatsApp bridge, web dashboard, Obsidian integration, complete .env reference, system health/status check, and complete known issues list.
- **CLAUDECLAW_JUNIOR_ENGINEER_GUIDE.md** -- fully rewritten. Removed wrong niche (coaching/fitness), wrong pricing ($497/month SaaS), wrong business models. Replaced with professional services focus, correct pricing ($15K-$25K CAD), pattern recognition by industry, correct deploy instructions.
- **Mark cleanup** -- replaced all hardcoded "Mark" / "marwankashef" references with "Coach Juan" across:
  - `agents/comms/agent.yaml` -- Obsidian vault path updated to Juan's Windows path
  - `agents/content/agent.yaml` -- same, folders updated to Content/ and LinkedIn/
  - `agents/ops/agent.yaml` -- same, folders kept as Finance/ and Inbox/
  - `skills/timezone/SKILL.md` -- completely rewritten for Montreal/Toronto/Vancouver/New York/London
  - `scripts/agent-create.sh` -- bot naming suggestions updated to "Coach Juan" and "coachjuan_"
- **Memory files updated** -- MEMORY.md and outreach-and-use-cases.md updated with Airtable as primary CRM, use cases 6-12 documented.

## In Progress

- **index.html website changes** -- 10-change prompt was written and given to Juan but NOT yet applied to the file. The prompt is in this session's conversation history. Juan needs to run it in a separate Claude Code session or paste it directly.
- **CLAUDE.md root file** -- still has template placeholders (`[YOUR ASSISTANT NAME]`, `[YOUR NAME]`, `[YOUR_OBSIDIAN_VAULT_PATH]`, `[PATH TO CLAUDECLAW]`). CRITICAL -- system will not work correctly until these are filled in.
- **agents/research/agent.yaml** -- no agent.yaml exists for research (only agent.yaml.example). Needs to be created like the other agents.

## Next Steps

1. **CRITICAL -- Fill in CLAUDE.md placeholders** -- open `CLAUDE.md` and replace all `[BRACKETED]` values with real ones. Assistant name, Juan's name, Obsidian vault path (or remove that section), ClaudeClaw path.
2. **Apply the 10 website changes** -- use the prompt from this session to update `index.html`. The prompt covers: remove "production-ready", fix "Satisfaction Guaranteed", add inline ROI disclaimers, move Monday Morning section up, reframe "1-2 automations", fix CTA hierarchy, fix 30d vs 2wk support conflict, add French hero copy, fix "network of legal advisors", add new FAQ entry.
3. **Build data/prospects/ files** -- create 5 markdown files (George Mills, Nathalie McKenzie, Andrea Soueidan, Michael Schacter, James Hutchinson) using the template in the SOP Part 3.
4. **Build data/tnc-members/ files** -- 10 member files before March 17 TNC lunch. Brief on each: NAME / BUSINESS / STATUS / WHAT TO SAY / WHAT NOT TO SAY.
5. **Set up morning digest cron** -- `node dist/schedule-cli.js create "Read data/prospects/ and give me a morning pipeline summary: who needs follow-up today, who responded overnight, what is my priority action" "30 7 * * 1-5"`
6. **Send George Mills messages** -- WhatsApp + email final versions are in handoff 012. Still not confirmed as sent.
7. **Send Nathalie McKenzie messages** -- same, in handoff 012.
8. **Michael Schacter outreach** -- due Tuesday Mar 11. Need to draft WhatsApp + email.
9. **Add prospects + builds tables to src/db.ts** -- migration-safe additions to runMigrations().
10. **Create research agent.yaml** -- copy from agents/research/agent.yaml.example, configure for Juan.

## Key Files

- `PVRPOSE_AI_OS_BLUEPRINT_SOP.md` -- new, 24-part strategy and SOP document (complete)
- `CLAUDECLAW_JUNIOR_ENGINEER_GUIDE.md` -- fully rewritten (complete)
- `CLAUDE.md` -- root config, STILL HAS PLACEHOLDERS (needs immediate fix)
- `agents/comms/agent.yaml` -- updated, Obsidian path set to Juan's Windows path
- `agents/content/agent.yaml` -- updated, folders: Content/, LinkedIn/
- `agents/ops/agent.yaml` -- updated, folders: Finance/, Inbox/
- `agents/research/agent.yaml` -- MISSING, only .example exists
- `skills/timezone/SKILL.md` -- rewritten for Montreal/Toronto/Vancouver/NYC/London
- `scripts/agent-create.sh` -- updated bot naming to Coach Juan
- `index.html` -- website, 10 changes NOT YET APPLIED (prompt in session history)
- `specs/handoffs/012-2026-03-10-use-case-build-plan-repo-map.md` -- previous build plan, still valid
- `C:\Users\Juan Gonzalez\.claude\projects\...\memory\MEMORY.md` -- updated with Airtable CRM note
- `C:\Users\Juan Gonzalez\.claude\projects\...\memory\outreach-and-use-cases.md` -- use cases 6-12

## Blockers / Notes

- **Obsidian vault path** -- set to `C:\Users\Juan Gonzalez\Documents\PVRPOSE_AI\notes` in all agent YAMLs. If Juan does not use Obsidian or uses a different path, these sections should be removed from agent.yaml files or the path corrected.
- **George and Nathalie messages** -- final versions are in handoff 012 (not this handoff). Check 012 for the exact copy before sending.
- **10 website changes prompt** -- was generated in this session but not saved to a file. If session context is lost, the audit findings are in this session and the SOP Part 16 known issues section. The full prompt can be regenerated from those.
- **Airtable as CRM** -- confirmed. All prospect tracking starts in Airtable, mirrored to data/prospects/ markdown files. n8n bridge to auto-sync is the Week 2 priority.
- **Pioneer phase** -- 3 spots: 1 free build, 2 audits at $2,500 CAD. George = free build candidate. Nathalie = audit candidate. Both outreach sent (per handoff 012 -- verify with Juan).
- **ClaudeClaw security** -- confirmed NOT production-ready for companies. Suitable for founders managing their own desktop setup. This distinction must be maintained in all client conversations and on the website.
