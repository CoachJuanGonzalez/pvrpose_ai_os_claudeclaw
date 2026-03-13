# Session Handoff - 2026-03-13

## Context
Round 3 of v5 mobile fixes based on screenshot at 5:11pm -- logo dark, nav overlapping french bar, huge gap in hero, sideways scroll returned, eyebrow pill wrapping to 3 lines on mobile.

## Completed

- **Sideways scroll root cause found and fixed** -- `floatOrb` animation was using `translate(30px, -20px)` which pushed the right orb 30px past the right edge of viewport on iOS. Changed to `translateY(-20px)` only (vertical movement only). Also added `overflow:hidden; max-width:100vw` directly on the hero section element (not just via CSS class) to hard-contain all children on iOS Safari
- **Right orb pulled inward** -- changed from `right:8%` to `right:-5%` with `width:min(240px,45vw)` so it starts partially off-screen and can't push layout
- **Logo filter iOS fix** -- added `-webkit-filter` vendor prefix + `saturate(0)` to CSS. `-webkit-filter` is required for older iOS Safari. `saturate(0)` removes all color BEFORE brightness/invert, guaranteeing pure white on any logo color
- **French bar stacking** -- added CSS fallback `top:122px` (desktop) and `top:108px` (mobile) so bars are pre-positioned before JS runs. Reduced padding to `6px/5px` and font to `12px/11px` on mobile -- thinner bar
- **Huge gap in hero fixed** -- changed hero `py-20` to `py-8 md:py-20` -- mobile gets 32px padding instead of 80px
- **Eyebrow pill text shortened on mobile** -- mobile: "THE WINDOW IS NOW — FOR FOUNDERS & AGENCIES" (one line). Desktop: full text unchanged
- **overflow-x fix** -- reverted to `overflow-x: hidden` with explicit `width:100%` on both html and body (iOS Safari <16 doesn't support `overflow-x: clip`)
- **All 3 locations synced** -- claudeclaw (8990c2c), pvrpose-ai-landing-page (69e8664), Google Drive

## In Progress

- **v5 still awaiting final review + merge approval** -- waiting for Coach Juan to check new Vercel preview

## Next Steps

1. **Clear Vercel cache + check preview on mobile**
   - In Vercel dashboard: Deployments → 3-dot menu → Redeploy → uncheck "Use existing Build Cache"
   - Or test with `?v=3` appended to preview URL to bypass browser cache
   - Preview URL: `https://pvrpose-ai-landing-page-nkmllb8lg-juan-7618s-projects.vercel.app`
   - Verify: logo WHITE, no sideways scroll, french bar cleanly below nav (no overlap), hero content starts close to bars (no giant gap), eyebrow pill fits one line on mobile, stars visible
   - If approved: merge to main on BOTH repos:
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

- `index.html` -- v5 branch, latest commit `8990c2c` (claudeclaw) / `69e8664` (Vercel repo)
- `H:\My Drive\PVRPOSE_AI-BUSINESS_OPS_HUB\16 - WEBSITE & DIGITAL PRESENCE\index.html` -- Google Drive (synced)
- `C:\Users\Juan Gonzalez\Documents\PVRPOSE_AI\PVRPOSE_AI_OS\pvrpose-ai-landing-page\index.html` -- Vercel deploy repo (synced)
- `data/prospects/brad-wise-outreach-whatsapp.md` -- ready to send
- `data/prospects/brad-wise-outreach-email.md` -- ready to send

## Blockers / Notes

- **Vercel cache**: clear it before testing -- Redeploy with "Use existing Build Cache" unchecked
- **iOS Safari overflow**: `overflow-x: clip` NOT supported on iOS Safari <16. Must use `overflow-x: hidden` + `width:100%` on both html and body
- **iOS Safari filter**: must use `-webkit-filter` prefix. `saturate(0)` required before `brightness(0) invert(1)` to guarantee white on colored logos
- **floatOrb horizontal translate was the overflow culprit** -- only translateY now, no X movement
- **Bar z-index order**: pioneer bar 1002 > nav 1001 > french bar 998
- **French bar top**: CSS fallback 122px desktop / 108px mobile. JS `positionFixedBars()` runs immediately on script eval AND on DOMContentLoaded/load/resize
- **Hero py**: py-8 mobile / py-20 desktop. If content still feels tight, increase to py-10 or py-12
- **George Mills** -- offer expired, do not re-engage
- **Nathalie McKenzie** -- Pioneer Audit ($2,500 CAD), not free build
- **Brad Wise deadline** -- reply by 2026-03-16 for Zoom, before 2026-03-17 TNC lunch
