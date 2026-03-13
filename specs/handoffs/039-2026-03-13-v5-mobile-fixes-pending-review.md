# Session Handoff - 2026-03-13

## Context
Continued iterating on the v5 landing page visual upgrade branch, fixing mobile issues reported via screenshots -- logo contrast, sideways scrolling, French bar overlap, and star particle visibility across all screen sizes.

## Completed

- **v5 branch fully built** -- phases 1-7 complete (CSS, dark hero, dark sections, scroll reveals, shadows, JS animations)
- **Logo white fix** -- CSS `filter: brightness(0) invert(1)` on `.nav-logo` forces pure white regardless of image file or browser cache
- **French bar fixed positioning** -- changed to `position: fixed`, now stacks correctly below nav
- **Dynamic bar stacking** -- JS `positionFixedBars()` measures actual heights of pioneer bar + nav + french bar, sets `top` values and `body.paddingTop` dynamically on load/resize -- no more hardcoded offsets
- **Sideways scroll fix** -- `* { box-sizing: border-box }` + `max-width: 100%` on all block elements
- **Stars dramatic upgrade** -- 120 mobile / 180 tablet / 260 desktop, min alpha 0.5, mix of small/medium/large, glow halos on large stars, purple + pink tinted variants, ambient orbs opacity doubled (0.35 purple, 0.25 pink)
- **All 3 locations synced** every commit -- claudeclaw, pvrpose-ai-landing-page, Google Drive

## In Progress

- **v5 still awaiting final review + merge approval** -- Coach Juan reviewing mobile on Vercel preview URL

## Next Steps

1. **Check preview on mobile** -- `https://pvrpose-ai-landing-page-nkmllb8lg-juan-7618s-projects.vercel.app`
   - Verify: logo is white, no sideways scroll, French bar visible below nav, stars clearly visible
   - If approved: merge `v5-landing-page-upgrade` → `main` on BOTH repos:
     - `cd claudeclaw && git checkout main && git merge v5-landing-page-upgrade && git push origin main`
     - `cd pvrpose-ai-landing-page && git checkout main && git merge v5-landing-page-upgrade && git push origin main`
2. **Send Brad Wise outreach** -- WhatsApp (514-867-8555) then email (brad.wise@manulifewealth.ca). Deadline: reply by 2026-03-16 for Zoom before 2026-03-17 TNC lunch
3. **TNC lunch prep** (2026-03-17) -- conversation starters for 11 members in `data/tnc-members/`
4. **Install Warp Terminal** -- `winget install --id Warp.Warp -e`
5. **Fix VPN + Groq** -- ExpressVPN causes 403; voice only works VPN off
6. **Proposal templates** -- `pioneer-build-proposal.md`, `pioneer-audit-proposal.md`, `pioneer-build-agreement.md`
7. **Google Calendar + Gmail OAuth setup**
8. **Delete old Slack app** (A0AKUPULCAK)

## Key Files

- `index.html` -- v5 branch, latest commit `4f36ec8` on claudeclaw / `fa7f8ea` on Vercel repo
- `H:\My Drive\PVRPOSE_AI-BUSINESS_OPS_HUB\16 - WEBSITE & DIGITAL PRESENCE\index.html` -- Google Drive source of truth (synced)
- `C:\Users\Juan Gonzalez\Documents\PVRPOSE_AI\PVRPOSE_AI_OS\pvrpose-ai-landing-page\index.html` -- Vercel deploy repo (synced, on v5 branch)
- `data/prospects/brad-wise-outreach-whatsapp.md` -- ready to send
- `data/prospects/brad-wise-outreach-email.md` -- ready to send

## Blockers / Notes

- **Vercel preview URL**: `https://pvrpose-ai-landing-page-nkmllb8lg-juan-7618s-projects.vercel.app`
- **Logo**: uses CSS filter invert -- works on any PNG. If logo ever needs color-accurate display on a light section, the filter will need to be scoped to `.main-nav .nav-logo` only (it already is via `.nav-logo` class)
- **positionFixedBars()**: called on DOMContentLoaded, load, and resize. If pioneer bar is dismissed/hidden in future, this function will auto-adjust
- **Stars**: canvas waits for `window.load` so section height is accurate after fonts/images load. On resize it debounces 150ms and cancels the active animation frame before reinit
- **Merge command reminder**:
  ```
  cd claudeclaw && git checkout main && git merge v5-landing-page-upgrade && git push origin main
  cd pvrpose-ai-landing-page && git checkout main && git merge v5-landing-page-upgrade && git push origin main
  ```
- **George Mills** -- offer expired, do not re-engage
- **Nathalie McKenzie** -- Pioneer Audit ($2,500 CAD), not free build
- **Brad Wise deadline** -- reply by 2026-03-16 for Zoom, before 2026-03-17 TNC lunch
