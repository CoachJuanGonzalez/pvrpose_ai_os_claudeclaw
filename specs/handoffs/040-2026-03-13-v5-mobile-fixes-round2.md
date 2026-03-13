# Session Handoff - 2026-03-13

## Context
Continued fixing v5 mobile issues reported by Coach Juan -- logo black/invisible, white bar on right, French bar clashing with nav, stars not dramatic enough. Round 2 of targeted fixes applied and pushed.

## Completed

- **overflow-x: clip** -- replaced `hidden` with `clip` on `html, body`. `clip` is stronger: it prevents child `overflow: auto` containers (FAQ table, comparison tables) from leaking out and causing the white bar on the right
- **Logo filter !important** -- added `!important` to `filter: brightness(0) invert(1)` on both base `.nav-logo` and mobile override. Logo can no longer be overridden by anything
- **Nav z-index raised to 1001** -- was 1000, now sits definitively above french bar (998) and below pioneer bar (1002)
- **Nav transition fixed** -- removed `transition: all 0.3s ease` which was animating the `top` property during `positionFixedBars()` causing a flash/jump. Now only transitions `box-shadow` and `border-bottom-color`
- **French bar darkened** -- from `#7c3aed` to `#4c1d95` (deeper purple), added `border-top: 1px solid rgba(255,255,255,0.15)` for visual separation from nav. z-index lowered to 998
- **positionFixedBars() called immediately** -- added call on script eval (not just DOMContentLoaded) so bars are correctly stacked on first paint, no flash
- **Stars: 160/220/300 counts** -- was 120/180/260. Min alpha raised to 0.5 (was 0.3) so stars never dim to near-invisible
- **All 3 locations synced** -- claudeclaw (3b11571), pvrpose-ai-landing-page (db10060), Google Drive
- **Model question answered** -- Coach Juan is already on Claude Sonnet 4.6, no switch needed

## In Progress

- **v5 still awaiting final review + merge approval** -- fixes pushed to Vercel, waiting for Coach Juan to check preview on mobile

## Next Steps

1. **Check preview on mobile** -- `https://pvrpose-ai-landing-page-nkmllb8lg-juan-7618s-projects.vercel.app`
   - Verify: logo WHITE and visible while scrolling up AND down, no white bar on right, French bar cleanly separated below nav, stars clearly visible on first glance
   - If approved: merge `v5-landing-page-upgrade` → `main` on BOTH repos:
     ```
     cd claudeclaw && git checkout main && git merge v5-landing-page-upgrade && git push origin main
     cd pvrpose-ai-landing-page && git checkout main && git merge v5-landing-page-upgrade && git push origin main
     ```
2. **Send Brad Wise outreach** -- WhatsApp (514-867-8555) then email (brad.wise@manulifewealth.ca). Deadline: reply by 2026-03-16 for Zoom before 2026-03-17 TNC lunch
3. **TNC lunch prep** (2026-03-17) -- conversation starters for 11 members in `data/tnc-members/`
4. **Install Warp Terminal** -- `winget install --id Warp.Warp -e`
5. **Fix VPN + Groq** -- ExpressVPN causes 403; voice only works VPN off
6. **Proposal templates** -- `pioneer-build-proposal.md`, `pioneer-audit-proposal.md`, `pioneer-build-agreement.md`
7. **Google Calendar + Gmail OAuth setup**
8. **Delete old Slack app** (A0AKUPULCAK)

## Key Files

- `index.html` -- v5 branch, latest commit `3b11571` (claudeclaw) / `db10060` (Vercel repo)
- `H:\My Drive\PVRPOSE_AI-BUSINESS_OPS_HUB\16 - WEBSITE & DIGITAL PRESENCE\index.html` -- Google Drive (synced)
- `C:\Users\Juan Gonzalez\Documents\PVRPOSE_AI\PVRPOSE_AI_OS\pvrpose-ai-landing-page\index.html` -- Vercel deploy repo (synced)
- `data/prospects/brad-wise-outreach-whatsapp.md` -- ready to send
- `data/prospects/brad-wise-outreach-email.md` -- ready to send

## Blockers / Notes

- **Vercel preview URL**: `https://pvrpose-ai-landing-page-nkmllb8lg-juan-7618s-projects.vercel.app`
- **Root cause of white bar**: `overflow-x: hidden` on parent doesn't block child `overflow: auto` scroll containers (the FAQ/comparison tables). `overflow-x: clip` fixes this properly
- **Root cause of logo disappearing**: CSS `transition: all` was animating `top` property changes from `positionFixedBars()`, causing nav to briefly jump. Removed -- transition now only applies to box-shadow and border
- **French bar z-index order**: pioneer bar 1002 > nav 1001 > french bar 998 > page content
- **Stars**: canvas still waits for `window.load` so section height is accurate. On resize: debounces 150ms, cancels active animation frame before reinit
- **George Mills** -- offer expired, do not re-engage
- **Nathalie McKenzie** -- Pioneer Audit ($2,500 CAD), not free build
- **Brad Wise deadline** -- reply by 2026-03-16 for Zoom, before 2026-03-17 TNC lunch
- **Model**: already on Claude Sonnet 4.6, no switch needed
