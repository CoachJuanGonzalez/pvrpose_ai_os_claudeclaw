# Session Handoff - 2026-03-13

## Context
Created a comprehensive, production-ready implementation plan for the pvrpose.ai landing page visual upgrade -- inspired by futurevisionxprize.com. Plan is saved and ready to build. Also fixed the status line showing wrong model (Sonnet instead of Opus).

## Completed

- **statusline.ps1 updated**: Now reads model from `~/.claude/settings.json` directly with a name mapping table (opus→Opus 4.6, sonnet→Sonnet 4.6, haiku→Haiku 4.5). Instant updates after /model switch.
- **settings.json fixed**: `"model"` was set to `"sonnet"` -- corrected to `"opus"`.
- **Landing page upgrade plan created**: `specs/todo/landing-page-visual-upgrade.md` -- 8-phase, 14-step implementation plan covering:
  - Phase 1: CSS foundation (~80 lines of new CSS -- reveal classes, dark hero, shadows, card glow, btn sweep, section transitions, dark section utilities, updated hover-lift, updated btn-primary, dark nav, reduced-motion safety)
  - Phase 2: Dark hero + dark nav conversion (~30 element changes)
  - Phase 3: 4 section conversions to dark (Is This For You, DIY Comparison, FAQ, Final CTA)
  - Phase 4: Scroll reveal classes applied to ~50 elements (staggered grids)
  - Phase 5: JS additions (Intersection Observer, nav scroll enhancement, stat counter animation)
  - Phase 6: Padding/spacing upgrades (Tailwind class changes)
  - Phase 7: Deep shadows + glow effects on cards and CTAs
  - Phase 8: Gradient section transitions (dark-to-light fades)
  - Full testing checklist (functionality, visual, responsive, accessibility, performance)
  - Sync protocol for all 3 locations
- **All repos pushed**: claudeclaw (34b0c71), Vercel (74bb4d0)

## In Progress

- **Landing page visual upgrade** -- plan COMPLETE, implementation NOT started

## Next Steps

1. **BUILD the landing page upgrade**: Run `/EA-build specs/todo/landing-page-visual-upgrade.md`
   - Start with Phase 1 (CSS) -- safe, additive, nothing breaks
   - Then Phase 2 (dark hero) -- highest visual impact
   - Then Phase 3 (section conversions)
   - Then Phase 4-8 (animations, spacing, shadows, transitions)
   - Sync all 3 locations and push at end
2. **Send Brad Wise outreach** -- WhatsApp (514-867-8555) then email (brad.wise@manulifewealth.ca). Deadline: reply by 2026-03-16 for Zoom, before 2026-03-17 TNC lunch.
3. **TNC lunch prep** (2026-03-17 Tuesday) -- 11 members in data/tnc-members/
4. **Install Warp Terminal** -- winget install procedure documented in handoff 036
5. **Fix VPN + Groq** -- ExpressVPN causes 403, voice only works VPN off
6. **Proposal templates** -- pioneer-build-proposal.md, pioneer-audit-proposal.md, pioneer-build-agreement.md
7. **Google Calendar + Gmail OAuth setup**
8. **Delete old Slack app** (A0AKUPULCAK)

## Key Files

- `specs/todo/landing-page-visual-upgrade.md` -- FULL BUILD PLAN (8 phases, 14 steps, testing checklist, sync protocol)
- `index.html` -- target file for upgrade (~3619 lines)
- `~/.claude/statusline.ps1` -- updated to read model from settings.json
- `~/.claude/settings.json` -- model set to "opus"
- `H:\My Drive\PVRPOSE_AI-BUSINESS_OPS_HUB\16 - WEBSITE & DIGITAL PRESENCE\index.html` -- Google Drive source of truth
- `C:\Users\Juan Gonzalez\Documents\PVRPOSE_AI\PVRPOSE_AI_OS\pvrpose-ai-landing-page\index.html` -- Vercel deploy repo copy
- `data/prospects/brad-wise-outreach-whatsapp.md` -- ready to send
- `data/prospects/brad-wise-outreach-email.md` -- ready to send

## Blockers / Notes

- **Landing page build constraints**: Single HTML file + Tailwind CDN, no build tools. All ~200 edits are additive class changes -- no content or structure changes. Must preserve all JS functionality.
- **George Mills** -- offer expired, do not re-engage
- **Nathalie McKenzie** -- Pioneer Audit ($2,500 CAD), not free build
- **VPN issue** -- Groq 403 with ExpressVPN on; voice only works VPN off
- **Brad Wise deadline** -- reply by 2026-03-16 for Zoom, before 2026-03-17 TNC lunch
- **Inspiration site**: futurevisionxprize.com (dark theme, scroll reveals, layered shadows, glow effects)
