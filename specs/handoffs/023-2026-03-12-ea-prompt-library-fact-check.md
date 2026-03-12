# Session Handoff - 2026-03-12

## Context
Fact-checked a new EA prompt library (25 prompts, "Category N" framing) submitted for potential inclusion in the Blueprint SOP Section 7. Found multiple errors, conflicts with decisions made earlier in this session, and significant overlap with the existing EA1-EA23 library. No content was added to the SOP yet -- waiting on decision to proceed with cherry-picked additions.

## Completed

- **Full fact-check of 25-prompt EA library** -- 14 claims verified. Errors found:
  - "Grok Whisper" -- hallucination (doesn't exist). Real tool is OpenAI Whisper. Already corrected in EA1-EA23.
  - ESTA for Canadians -- wrong. Canadians need passport only, not ESTA. Already corrected in EA1-EA23.
  - 10× multiplier ("$80K EA does $800K work") -- not defensible. 3× is the verified standard.
  - "Build pays in 4 months" -- conflicts with standardized "3-6 months" from earlier this session.
  - "n8n automation bridge" for GHL -- conflicts with direct API decision from handoff 021.
  - "Category N" naming -- already renamed to "Category EA" in Blueprint SOP. EA SOP still has 7 stale "Category N" refs.
  - Automation percentages (70%/85%/60%) -- unsourced/inflated. McKinsey supports "up to 60%" for basic tasks.
  - Meeting volume (10-20/day) -- too high. Harvard CEO study: ~7-12/day.
  - Call volume (20-50/day) -- too high for 2025. Realistic: 5-15/day.
  - Experience tiers (0-3/3-7/7+) -- industry standard is 0-2/2-5/5-8/8+.

- **Identified 8 genuinely new prompts** not in existing EA1-EA23:
  - Vendor Contract Summary
  - Crisis Response Draft
  - Succession Onboarding Packet
  - Board Book Formatting
  - Investor Briefing Packet
  - Culture/Recognition
  - Exec Retreat Planning
  - Gift + Concierge

- **Found 7 stale "Category N" references** in `PVRPOSE_AI_OS_EA_SUPERPOWERS_SOP.md` (lines 382, 710, 766, 847, 1068, 1204, 1282, 1577) -- not yet fixed.

- **Handoff 022 created and pushed** -- full alignment session documented.

## In Progress

- **8 new prompts (EA24-EA31)** -- identified, not yet written or added to SOP. Waiting on Juan's go-ahead.

## Next Steps

1. **FIX: 7 "Category N" refs in EA SOP** -- rename to "Category EA" for consistency
   File: `PVRPOSE_AI_OS_EA_SUPERPOWERS_SOP.md`
   Lines: 382, 710, 766, 847, 1068, 1204, 1282, 1577

2. **ADD: EA24-EA31 to Blueprint SOP Section 7** (if Juan approves)
   - 8 new prompts cherry-picked from the 25-prompt library
   - Must include: correct tech mapping, defensible claims, ClaudeClaw LIVE vs future status
   - NO: Grok Whisper, ESTA, 10×, n8n, "Category N", inflated automation %

3. **BUILD: Airtable direct API skill** -- still blocked on Juan providing:
   1. Airtable personal access token (scopes: data.records:read/write, schema.bases:read)
   2. Base ID (from URL: airtable.com/appXXXXXXXX/...)
   3. Table names + key field names

4. **CRITICAL: Fill CLAUDE.md root placeholders** -- operational blocker
   Replace: `[YOUR ASSISTANT NAME]`, `[YOUR NAME]`, `[YOUR_OBSIDIAN_VAULT_PATH]`, `[PATH TO CLAUDECLAW]`
   Correct path: `C:\Users\Juan Gonzalez\Documents\PVRPOSE_AI\PVRPOSE_AI_OS\CLAUDE_CLAW\claudeclaw`

5. **CREATE: `data/prospects/` files** -- 5 files needed (clarify George Mills: CPA vs construction law first)

6. **BUILD: `data/tnc-members/`** -- 10 members, TNC lunch March 17 (check days remaining -- time-sensitive)

7. **DRAFT: Michael Schacter outreach** -- WhatsApp + email, overdue since March 11

8. **FIX: Google Calendar default timezone** -- `America/New_York` → `America/Toronto`

9. **RENAME: `run-claudeclaw.bat.txt`** → `run-claudeclaw.bat`

## Key Files

- `PVRPOSE_AI_OS_BLUEPRINT_SOP.md` -- master SOP. Section 7 has EA1-EA23. EA24-EA31 to be added here.
- `PVRPOSE_AI_OS_EA_SUPERPOWERS_SOP.md` -- EA SOP. Has 7 stale "Category N" refs to fix.
- `H:\My Drive\PVRPOSE_AI-BUSINESS_OPS_HUB\16 - WEBSITE & DIGITAL PRESENCE\index.html` -- **SOURCE OF TRUTH for landing page**
- `CLAUDE.md` (project root) -- CRITICAL: still has [BRACKETED] placeholders
- `scripts/airtable.js` -- TO BE CREATED
- `~/.claude/skills/airtable/SKILL.md` -- TO BE CREATED
- `data/prospects/` -- TO BE CREATED (5 files)
- `data/tnc-members/` -- TO BE CREATED (10 files, time-sensitive)

## Blockers / Notes

- **EA24-EA31 not yet written** -- Juan must approve before adding. Don't add the raw 25-prompt content -- it has errors.
- **"Category N" fix is a quick win** -- 7 find/replace operations in EA SOP, commit + push.
- **Automation % standards (verified):**
  - Basic tasks: up to 60% (McKinsey GenAI report)
  - Middle tasks: 40-50%
  - Advanced/CoS tasks: 20-30%
- **Defensible multiplier: 3×** (not 10×). Sources: BELAY Solutions, ExecutiveAssistant.com.
- **Payback period: 3-6 months** (standardized this session). "Under 4 months" language removed.
- **ESTA does not apply to Canadians** -- passport only for US travel.
- **Grok Whisper does not exist** -- use "OpenAI Whisper" or "Groq-hosted Whisper".
- **index.html deployment rule:** Google Drive is source of truth. Sync all 3 locations on every change: Google Drive → pvrpose-ai-landing-page repo → claudeclaw repo.
- **CRM strategy: direct API only** -- no n8n/Zapier/Make. Airtable first, then HubSpot, then GHL.
- **Product tier naming: PVRPOSE Solo / Growth / Enterprise** -- no "SUPERHUMAN" anywhere.
