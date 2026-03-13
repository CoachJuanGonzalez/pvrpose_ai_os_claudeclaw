# Session Handoff - 2026-03-13

## Context
Multi-topic session: fixed Wispr Flow dictation in Cursor (Warp Terminal workaround), fixed all favicons for browsers + social media, improved mobile responsiveness, created safari-pinned-tab.svg, fixed status line model display, and planned a major visual/UX upgrade for the landing page inspired by futurevisionxprize.com.

## Completed

- **Wispr Flow fix documented**: Wispr Flow doesn't work in Cursor's integrated terminal. Workaround: install Warp Terminal via `winget install --id Warp.Warp -e`, set as Cursor's external terminal, skip account, disable telemetry/AI. Full procedure fact-checked against Warp docs.
- **All favicons synced to deploy**: Root cause was favicon files existed in Google Drive but were never committed to repos. Copied all 9 files (favicon.ico, PNGs, webmanifest, browserconfig.xml) to both claudeclaw and Vercel repos.
- **favicon.ico rebuilt**: Regenerated as proper multi-size (16/32/48px) -- old was 511 bytes single-size, new is 5.3KB.
- **safari-pinned-tab.svg created**: Traced from 512px PNG using potrace. Clean single-color black silhouette, viewBox 0 0 16 16. Synced to all 3 locations.
- **Mobile responsive fixes**: Strategy/Systems/Humans framework, ROI calculator, pricing cards, pioneer section, urgency banner, cost comparison, Coach Juan heading, exit popup -- all scaled properly for small screens.
- **Status line fixed**: `settings.json` had `"model": "sonnet"` despite `/model` selecting Opus. Fixed to `"model": "opus"`. Updated `statusline.ps1` to read model from `settings.json` with a name mapping table (opus→Opus 4.6, sonnet→Sonnet 4.6, haiku→Haiku 4.5) instead of relying on JSON payload.
- **Landing page visual upgrade PLANNED**: Full 8-priority plan created inspired by futurevisionxprize.com. NOT YET IMPLEMENTED.
- **All repos pushed**: claudeclaw (a0717f9), Vercel (74bb4d0), Drive synced.

## In Progress

- **Landing page visual upgrade** -- plan is complete, implementation not started. See plan details below.

## Next Steps

1. **IMPLEMENT landing page visual upgrade** (8 priorities):
   - P1: Dark hero + dark nav (instant premium feel)
   - P2: Scroll-triggered reveal animations (Intersection Observer, ~15 lines JS)
   - P3: Deep layered shadows on cards (purple-tinted multi-layer)
   - P4: Dark/light section alternation (convert "Is This For You?", DIY Comparison, FAQ, Final CTA to dark)
   - P5: Enhanced button glow + hover sweep effect
   - P6: Generous padding (hero py-28→py-32, bigger section gaps)
   - P7: Gradient section transitions (smooth dark-to-light fades)
   - P8: Polish (card border glow, nav scroll state, stat counter animations)
   - Colors stay purple/pink brand -- NO cyan. Keep WCAG AA compliance.
   - Sync all 3 locations after implementation.
2. **Send Brad Wise outreach** -- WhatsApp first, then email. Deadline: reply by 2026-03-16 for Zoom, before 2026-03-17 TNC lunch.
3. **TNC lunch prep** (2026-03-17) -- conversation starters for 11 members
4. **Install Warp Terminal** -- Coach Juan needs to run the winget install procedure himself
5. **Fix VPN + Groq** -- ExpressVPN causes 403, voice only works VPN off
6. **Proposal templates** -- pioneer-build-proposal.md, pioneer-audit-proposal.md, pioneer-build-agreement.md
7. **Google Calendar + Gmail OAuth setup**
8. **Delete old Slack app** (A0AKUPULCAK)

## Key Files

- `~/.claude/settings.json` -- model set to "opus", status line command configured
- `~/.claude/statusline.ps1` -- reads model from settings.json with name mapping
- `index.html` -- all favicon refs, mobile responsive fixes applied
- `safari-pinned-tab.svg` -- potrace-generated logo silhouette
- `favicon.ico` -- multi-size 16/32/48px
- `site.webmanifest` -- PWA config, theme #6d28d9
- `browserconfig.xml` -- Windows tile config
- `H:\My Drive\PVRPOSE_AI-BUSINESS_OPS_HUB\16 - WEBSITE & DIGITAL PRESENCE\` -- Google Drive source of truth
- `data/prospects/brad-wise*.md` -- outreach drafts ready to send

## Blockers / Notes

- **Warp Terminal**: Coach Juan hasn't installed it yet. Procedure is documented in this session. No admin needed for winget per-user install.
- **George Mills** -- offer expired, do not re-engage
- **Nathalie McKenzie** -- Pioneer Audit ($2,500 CAD), not free build
- **VPN issue** -- Groq 403 with ExpressVPN on; voice transcription only works with VPN off
- **Landing page upgrade constraints**: Must stay single HTML file + Tailwind CDN. Must preserve all existing functionality. Must maintain mobile responsiveness. No build tools.
- **Brad Wise deadline** -- reply by 2026-03-16 for Zoom, before 2026-03-17 TNC lunch
