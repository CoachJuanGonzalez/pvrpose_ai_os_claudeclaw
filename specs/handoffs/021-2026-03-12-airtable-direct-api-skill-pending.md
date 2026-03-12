# Session Handoff - 2026-03-12

## Context
Completed brand color alignment on pvrpose.ai (pink + purple only, removed all deep blue), added fact-checked Category EA prompt library to SOP Section 7, and decided to build a direct Airtable API skill as the CRM integration strategy -- no n8n, no middleware.

## Completed

- **Brand color fix pushed to Vercel** -- commit `ae41fcf` on `pvrpose-ai-landing-page` repo
  - Removed all deep blue (#1E3A8A) -- replaced with logo purple (#7c3aed)
  - Removed blue-500 (#3b82f6) -- replaced with brand purple (#8b5cf6)
  - All Tailwind blue-* classes replaced with purple equivalents
  - Yellow (#fde68a) pioneer bar text replaced with pink-200 (#fbcfe8)
  - Page now uses exactly 2 brand colors (pink + purple) + black/white neutrals
  - Matches logo gradient precisely

- **EA tagline fix prompt provided** -- user has the prompt to fix "Your EA stays in control..." tagline (add "so they become 3× more effective" at the end). NOT YET APPLIED -- user has the prompt to do it manually.

- **Category EA prompt library added to SOP Section 7** -- commit `bc6a451` on claudeclaw repo
  - 23 fact-checked, production-ready EA prompts (EA1-EA23)
  - All errors from original analysis corrected: removed ESTA for Canadians, fixed "Grok Whisper" (doesn't exist), corrected call/meeting volume claims, replaced made-up automation percentages with McKinsey/PwC 2025 data
  - Every prompt has explicit ClaudeClaw status (LIVE vs future build)
  - Tech mapping table included
  - TNC demo script with defensible ROI (Robert Half 2026, McKinsey/PwC 2025)
  - Renamed Category N → Category EA throughout both SOPs

- **CRM connectivity audit completed** -- zero CRM code exists today. Full gap analysis documented.

- **Direct API skill architecture decided** -- no n8n/make.com/Zapier. Juan wants direct API skills for reliability and no failure points. Build order: Airtable first (source of truth), then HubSpot, then GHL.

## In Progress

- **Airtable direct API skill** -- WAITING ON JUAN for 3 required inputs:
  1. Airtable personal access token (airtable.com/create/tokens -- scopes needed: `data.records:read`, `data.records:write`, `schema.bases:read`)
  2. Base ID (from URL: `airtable.com/appXXXXXXXX/...`)
  3. Table names + key field names (e.g. "Prospects" table with Name, Status, Last Contact, Notes, Phone, Email fields)

## Next Steps

1. **BUILD: Airtable direct API skill** -- once Juan provides the 3 inputs above
   - Files to create:
     - `scripts/airtable.js` -- Node.js script, plain fetch, no SDK needed
     - `~/.claude/skills/airtable/SKILL.md` -- trigger phrases + instructions
     - Add to `.env`: `AIRTABLE_API_KEY`, `AIRTABLE_BASE_ID`
   - Capabilities: read records, filter/search, create record, update field, change status
   - After Airtable works: HubSpot and GHL follow same pattern (~1 day each)

2. **APPLY: EA tagline fix in index.html** -- find/replace both instances of:
   `Your EA stays in control. The AI handles repetitive work—in your exact voice.`
   with:
   `Your EA stays in control. The AI handles the repetitive work — in your exact voice — so they become 3× more effective.`
   Then push to `pvrpose-ai-landing-page` repo.

3. **CRITICAL: Fill in CLAUDE.md root placeholders** -- still the #1 operational blocker
   File: `CLAUDE.md` (project root)
   Replace: `[YOUR ASSISTANT NAME]`, `[YOUR NAME]`, `[YOUR_OBSIDIAN_VAULT_PATH]`, `[PATH TO CLAUDECLAW]`
   Correct path: `C:\Users\Juan Gonzalez\Documents\PVRPOSE_AI\PVRPOSE_AI_OS\CLAUDE_CLAW\claudeclaw`

4. **CREATE: `data/prospects/` files** -- 5 files needed:
   - `data/prospects/george-mills.md`
   - `data/prospects/nathalie-mckenzie.md`
   - `data/prospects/andrea-soueidan.md`
   - `data/prospects/michael-schacter.md`
   - `data/prospects/james-hutchinson.md`
   Template in SOP Section 8. Clarify George Mills role (CPA vs construction law) first.

5. **SET UP: Morning digest cron** (after prospect files exist):
   ```bash
   node dist/schedule-cli.js create "Read data/prospects/ and give me a morning pipeline summary: who needs follow-up today, who responded overnight, what is my priority action" "30 7 * * 1-5"
   ```

6. **BUILD: data/tnc-members/ files** -- 10 members, TNC lunch March 17 (5 days away -- time-sensitive)

7. **DRAFT: Michael Schacter outreach** -- WhatsApp + email, overdue since March 11

8. **FIX: Google Calendar default timezone** -- `America/New_York` → `America/Toronto` in `skills/google-calendar/SKILL.md` or `gcal.py`

9. **RENAME: `run-claudeclaw.bat.txt`** → `run-claudeclaw.bat` for Windows auto-start

10. **FUTURE: HubSpot direct API skill** -- same pattern as Airtable, after Airtable is live
11. **FUTURE: GHL direct API skill** -- same pattern, after HubSpot

## Key Files

- `PVRPOSE_AI_OS_BLUEPRINT_SOP.md` -- master SOP v3.0, Section 7 now includes Category EA (EA1-EA23)
- `PVRPOSE_AI_OS_EA_SUPERPOWERS_SOP.md` -- EA SOP v1.0, Category N renamed to Category EA
- `H:\My Drive\PVRPOSE_AI-BUSINESS_OPS_HUB\16 - WEBSITE & DIGITAL PRESENCE\index.html` -- landing page source of truth (Drive)
- `CLAUDE.md` (project root) -- CRITICAL: still has [BRACKETED] placeholders
- `scripts/airtable.js` -- TO BE CREATED
- `~/.claude/skills/airtable/SKILL.md` -- TO BE CREATED
- `data/prospects/` -- directory TO BE CREATED (5 files needed)
- `data/tnc-members/` -- directory TO BE CREATED (10 files, time-sensitive)
- `specs/handoffs/020-2026-03-11-ea-superpowers-landing-page-live.md` -- previous handoff

## Blockers / Notes

- **Airtable skill blocked on Juan providing credentials + base structure** -- cannot build without base ID, table names, and field names
- **EA tagline fix not yet applied** -- prompt was given to Juan but not yet executed in the Drive file
- **CLAUDE.md placeholders** remain the single most important operational blocker for convolife/checkpoint
- **George Mills role** -- some docs say CPA, some say construction law. Clarify before creating prospect file.
- **TNC lunch March 17** -- tnc-members/ files are time-sensitive. 5 days remaining.
- **SOP v3.0 + Category EA is the only master doc** -- EA SOP is additive, not a replacement
- **CRM integration decision: direct API only** -- no n8n, make.com, Zapier. Juan's explicit preference for reliability and minimal failure points.
- **Build order confirmed:** Airtable → HubSpot → GHL (all direct API skills, same pattern)
- **Both landing page repos exist:**
  - `CoachJuanGonzalez/pvrpose-ai-landing-page` -- Vercel source, push here for live site
  - `CoachJuanGonzalez/pvrpose_ai_os_claudeclaw` -- main repo, keep index.html in sync
