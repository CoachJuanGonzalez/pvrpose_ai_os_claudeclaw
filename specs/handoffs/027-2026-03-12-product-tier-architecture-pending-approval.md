# Session Handoff - 2026-03-12

## Context
Full product tier architecture designed for PVRPOSE EA | PVRPOSE EA Amplify | PVRPOSE EA Scale. Naming confirmed by Juan. Tier content, pricing, 6-week delivery, and feature mapping all designed and presented. Awaiting Juan's final approval before any doc updates.

## Completed

- **Video capability audit** -- 16/35 features LIVE, 2 partial, 17 missing
- **EA Capability Roadmap created** -- `specs/todo/EA-CAPABILITY-ROADMAP.md` (19 capabilities, 6 phases)
- **EA Superpowers SOP updated to v1.1** -- all Category N refs killed, EA salary fixed, EA11-EA25 table added
- **Deep product naming analysis** -- Command/Amplify/Orchestra stress-tested, issues surfaced
- **Counter-analysis evaluated** -- "PEA problem" confirmed as overstated. Other issues (mixed metaphors, Orchestra saturation) confirmed as real.
- **Final naming confirmed by Juan:** PVRPOSE EA | PVRPOSE EA Amplify | PVRPOSE EA Scale
- **Full tier architecture designed** -- pricing, delivery timeline, feature mapping, comparison table all built

## Product Tier Architecture (CONFIRMED NAMING, CONTENT PENDING APPROVAL)

### PVRPOSE EA (Tier 1)
- Who: Solo founder, no human EA -- the AI IS the EA
- Audit: $2,500 pioneer / $5,000-$7,500 standard (2 weeks, credits toward build)
- Build: $15,000-$20,000 CAD (6 weeks)
- Retainer: from $2,500/month
- Delivery: 6 weeks (Audit -> Build -> Go-Live)
- Users: 1 (founder only)
- LIVE TODAY: Gmail, Calendar, voice, memory, morning digest, prospect files, research, Slack, Obsidian, dashboard
- NOT included: multi-user, CRM API, client dashboard, PDF generation, team coordination

### PVRPOSE EA Amplify (Tier 2)
- Who: Founder WITH a human EA, VA, or Chief of Staff -- AI amplifies the human
- Audit: $2,500 pioneer / $5,000-$7,500 standard (2 weeks)
- Build: $18,000-$25,000 CAD (6 weeks)
- Retainer: from $3,000/month
- Delivery: 6 weeks + EA onboarding session (Week 3)
- Users: 2 (founder + EA, separate Telegram IDs)
- LIVE TODAY: Everything in Tier 1 + EA routing logic (founder mode vs EA mode), EA morning briefing prep, pre-call brief engine, draft-approve flow, inbox triage, calendar optimization, research dossiers, shift handoff notes, delegate-and-track, escalation engine, LinkedIn pipeline, WhatsApp bridge, data/ea-team/ folder
- Use cases: EA1-EA25 all configured

### PVRPOSE EA Scale (Tier 3)
- Who: Agency owners, firms with 3+ team members, multi-location practices
- Discovery: $7,500 CAD (3 weeks -- more complex scoping)
- Build: $25,000-$40,000 CAD (8-12 weeks)
- Retainer: from $5,000/month
- Delivery: 8-12 weeks (Discovery + Build Phase 1 + Build Phase 2 + Go-Live)
- Users: 3+ (entire team, dedicated agent bots per role)
- REQUIRES ROADMAP BUILDS: Google Drive, GHL/HubSpot CRM API, client dashboards, PDF generation, image generation, team task tracking, email campaigns, lead reactivation
- LIVE TODAY: Everything in Amplify + multi-user access + dedicated agent bots

### Comparison Table Key Points
| | PVRPOSE EA | EA Amplify | EA Scale |
|---|---|---|---|
| Users | 1 | 2 | 3+ |
| Build | $15K-$20K | $18K-$25K | $25K-$40K |
| Retainer | from $2,500/mo | from $3,000/mo | from $5,000/mo |
| Build time | 6 weeks | 6 weeks | 8-12 weeks |
| CRM | Manual files | Manual + Airtable API | Full GHL/HubSpot |
| Client dashboard | No | No | Yes |
| PDF generation | No | No | Yes |
| Post-delivery support | 30 days | 30 days | 60 days |

## In Progress

- **AWAITING JUAN'S APPROVAL** on full tier architecture before any documentation updates

## Next Steps

1. **DECISION: Juan approves tier content, pricing, and delivery structure** -- or requests changes
2. **THEN: Update all docs in one pass:**
   - `PVRPOSE_AI_OS_EA_SUPERPOWERS_SOP.md` -- rename to reflect new tier naming, update Section 1 (who it's for), Section 2 (Two Doors -> Three Tiers), Section 10 (pricing), Section 12 (6-week build per tier)
   - `PVRPOSE_AI_OS_BLUEPRINT_SOP.md` -- update product tier references throughout
   - `index.html` -- update landing page: rename tabs "Solo Founder / EA Superpowers" -> "For You / For Your EA / For Your Team", update pricing section, update 6-week timeline per tier (ALL 3 locations: Google Drive, Vercel repo, claudeclaw repo)
   - `CLAUDECLAW_MONETIZATION_STRATEGY_SONNET.md` -- update tier names and pricing
   - `MEMORY.md` -- update product tier naming
3. **THEN: Resume operational next steps from handoff 025:**
   - Fill `CLAUDE.md` root placeholders (CRITICAL operational blocker)
   - Airtable skill (awaiting credentials: token, base ID, table names)
   - `data/prospects/` files -- 5 markdown files
   - Google Calendar timezone fix: `America/New_York` -> `America/Toronto`
   - Michael Schacter outreach (overdue since March 11)
   - `data/tnc-members/` -- 10 members, TNC lunch March 17 (5 days away -- urgent)

## Key Files

- `specs/todo/EA-CAPABILITY-ROADMAP.md` -- capability build plan, phase mapping for Scale tier features
- `PVRPOSE_AI_OS_EA_SUPERPOWERS_SOP.md` -- v1.1, will need major update once tier naming approved
- `PVRPOSE_AI_OS_BLUEPRINT_SOP.md` -- v3.0, will need tier naming update
- `index.html` -- landing page (3 locations must stay in sync -- see memory/reference_index_html_source.md)
- `CLAUDECLAW_MONETIZATION_STRATEGY_SONNET.md` -- pricing and projections doc
- `CLAUDE.md` (root) -- CRITICAL: still has [BRACKETED] placeholders

## Blockers / Notes

- **DO NOT update any docs until Juan approves tier content** -- all updates should happen in one coordinated pass
- **index.html sync rule:** Google Drive (`H:\My Drive\PVRPOSE_AI-BUSINESS_OPS_HUB\16 - WEBSITE & DIGITAL PRESENCE\index.html`) is SOURCE OF TRUTH. Then sync to Vercel repo (`CoachJuanGonzalez/pvrpose-ai-landing-page`) and claudeclaw repo.
- **Pioneer pricing still maps to Tier 1 (PVRPOSE EA)** -- pioneer clients at $0 or $2,500 get Tier 1 config. If they have an EA, upgrade to Amplify config at no extra cost during pioneer phase (CLAUDE.md changes only).
- **Scale tier requires roadmap builds** -- cannot be fully delivered today. Be transparent: Scale is "8-12 weeks because it includes CRM integration, client dashboards, and PDF generation that are in active development."
- **Verified claim standards (enforce always):**
  - EA salary: $63K-$98K CAD (Robert Half 2026)
  - Payback: 3-6 months
  - Hours reclaimed: 10-15/week (founder) or 24-32 hrs/week automatable EA time
  - Multiplier: 3x (not 10x)
  - Basic automation: up to 60% (McKinsey)
- **No middleware** -- all integrations direct API only
- **TNC lunch March 17** -- 5 days away, prospect/member files are time-sensitive regardless of naming decision
