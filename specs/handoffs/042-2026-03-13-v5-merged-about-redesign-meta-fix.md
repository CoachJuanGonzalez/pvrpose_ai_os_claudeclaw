# Session Handoff - 2026-03-13

## Context
Completed the v5 landing page visual upgrade -- merged to main on both repos, redesigned the About section, fixed meta tags, and had a strategic conversation about the 4-6 week EA build timeline.

## Completed

- **v5 branch merged to main** -- both repos (claudeclaw + pvrpose-ai-landing-page) fast-forward merged, pushed to origin/main. Vercel deploys from main automatically.

- **Mobile/tablet QA fixes (multiple rounds)**:
  - Nav background changed to solid `#0a0a0f` (was semi-transparent -- caused logo to appear dark on iOS)
  - Pioneer bar fixed to `height:40px; overflow:hidden; white-space:nowrap` -- no wrapping, CSS stacking is reliable
  - French bar: CSS `top:104px` desktop / `top:94px` mobile -- no JS dependency on first paint
  - `gradient-hero-dark::before` changed from `left:-50%; width:200%` to `inset:0` -- this was the sideways scroll root cause on iOS
  - JS `positionFixedBars()` simplified -- only refines after `window.load`, CSS is always correct first
  - Comprehensive mobile media query: heading sizes, card padding, section spacing, FAQ cards, timeline, ROI calculator
  - Nav tagline `hidden sm:block`, nav inner padding `px-3 py-2 md:px-6 md:py-4`
  - `-webkit-filter` prefix on all logo filter rules for iOS Safari

- **About section full redesign**:
  - Changed from plain white `bg-white` to `section-dark` (matches rest of page)
  - Photo with gradient glow border + ambient blur halo
  - Personal quote block with pink left border
  - 🏆 Award badge (Mindvalley 2024) -- gold-tinted card, links to LinkedIn proof
  - Quick stats grid: 15+ years, 130+ teams, Montreal 🇨🇦 with compliance callout
  - Credential pills: Ericsson, Ubisoft IT, Agile/SAFe, Claude/n8n, CASL/PIPEDA
  - 3-pillar framework (Strategy/Systems/Humans) in dark cards with staggered reveal
  - LinkedIn CTA button at bottom
  - Fully responsive: photo centers on mobile, stats 2-col, framework 1-col

- **Meta tags fixed** -- All 5 instances of "PVRPOSE EA" changed to "PVRPOSE AI":
  - Browser title tag
  - og:title (WhatsApp, LinkedIn, Facebook)
  - og:image:alt
  - twitter:title
  - twitter:image:alt

- **Latest commits on main**:
  - claudeclaw: `2c9fdca`
  - pvrpose-ai-landing-page: `0f1ca10`

- **Strategic context confirmed**: EA builds are 4-6 weeks from inception to delivery. Constraint is client responsiveness, not technical complexity. Infrastructure already proven. Pioneer clients get the benefit of a working system being configured, not built from scratch.

## In Progress

- Nothing active -- v5 is live on main

## Next Steps

1. **Send Brad Wise outreach** -- WhatsApp (514-867-8555) then email (brad.wise@manulifewealth.ca). Deadline: reply by 2026-03-16 for Zoom before 2026-03-17 TNC lunch
2. **TNC lunch prep** (2026-03-17 Tuesday) -- conversation starters for 11 members in `data/tnc-members/`
3. **Check live site** -- verify `pvrpose.ai` deployed correctly from main (Vercel auto-deploys on push to main)
4. **Install Warp Terminal** -- `winget install --id Warp.Warp -e`
5. **Fix VPN + Groq** -- ExpressVPN causes 403; voice only works VPN off
6. **Proposal templates** -- `pioneer-build-proposal.md`, `pioneer-audit-proposal.md`, `pioneer-build-agreement.md`
7. **Google Calendar + Gmail OAuth setup**
8. **Delete old Slack app** (A0AKUPULCAK)
9. **Airtable direct API skill** -- Option B from memory: `scripts/airtable.js` + skill file. Credentials in `.env`.

## Key Files

- `index.html` -- live on main, latest `2c9fdca` (claudeclaw) / `0f1ca10` (Vercel repo)
- `H:\My Drive\PVRPOSE_AI-BUSINESS_OPS_HUB\16 - WEBSITE & DIGITAL PRESENCE\index.html` -- Google Drive (synced)
- `C:\Users\Juan Gonzalez\Documents\PVRPOSE_AI\PVRPOSE_AI_OS\pvrpose-ai-landing-page\index.html` -- Vercel deploy repo (synced)
- `data/prospects/brad-wise-outreach-whatsapp.md` -- ready to send
- `data/prospects/brad-wise-outreach-email.md` -- ready to send
- `data/tnc-members/` -- 11 member profiles for TNC lunch prep

## Blockers / Notes

- **Mobile logo**: solid nav bg `#0a0a0f` is the fix. If ever reverting to transparent nav, must test logo on iOS Safari specifically
- **Sideways scroll**: `inset:0` on `gradient-hero-dark::before` is the permanent fix. Never use `left:-50%; width:200%` on pseudo-elements inside a section that needs to contain overflow on iOS
- **Bar stacking math**: pioneer=40px, nav≈64px desktop/54px mobile, french≈34px. CSS fallbacks are correct -- JS is just a refinement
- **George Mills** -- offer expired, do not re-engage
- **Nathalie McKenzie** -- Pioneer Audit ($2,500 CAD), not free build
- **Brad Wise deadline** -- reply by 2026-03-16 for Zoom, before 2026-03-17 TNC lunch
- **Build timeline confirmed**: 4-6 weeks inception to delivery. Client responsiveness is the constraint, not technical complexity.
