# Session Handoff - 2026-03-13

## Context
Fixed all favicon sizes, OG image, and social sharing meta tags for pvrpose.ai -- aligning everything to the correct logo source (logos-ai-rez-01.jpg) and ensuring the WhatsApp/LinkedIn/social preview looks clean.

## Completed

- **Vercel deploy synced** -- CoachJuanGonzalez/pvrpose-ai-landing-page pushed with all landing page audit changes (from handoff 033)
- **All favicons regenerated** from logos-ai-rez-01.jpg (high-res source) with transparent background:
  - favicon.ico (16/32/48 multi-size)
  - favicon-16x16.png, favicon-32x32.png
  - apple-touch-icon.png (180x180)
  - android-chrome-192x192.png, android-chrome-512x512.png
  - mstile-150x150.png
  - All have dark #0a0a0f rounded square background with purple border so they pop on any surface
- **OG image fixed** -- logo only, centered on dark bg (1200x630). No text, no clutter. Readable at WhatsApp thumbnail size.
- **Meta tags updated** in index.html:
  - Title: "PVRPOSE EA -- The AI Executive Assistant That Runs Your Business | PVRPOSE AI"
  - og:title: "PVRPOSE EA -- The AI That Runs Your Business While You Run Your Life"
  - og:description: "Your AI executive assistant. Built in 6 weeks. Runs from your phone. Reclaim 10-20 hours/week..."
  - Twitter card: same
  - Theme color: #ec4899 --> #6d28d9
- **site.webmanifest updated** -- name, description, theme_color (#6d28d9), background_color (#0a0a0f)
- **browserconfig.xml updated** -- TileColor #6d28d9
- **All 3 locations synced and pushed**:
  - Google Drive source of truth
  - claudeclaw repo (ff956ae)
  - Vercel deploy repo (7f79790)

## In Progress

- Nothing -- all changes live on Vercel

## Next Steps

1. **Send Brad Wise outreach** -- WhatsApp first (514-867-8555), then email (brad.wise@manulifewealth.ca). Drafts in data/prospects/. Deadline: reply by 2026-03-16 for Zoom, before 2026-03-17 TNC lunch.
2. **TNC lunch prep** (2026-03-17 Tuesday) -- conversation starters for 11 TNC members
3. **Fix VPN + Groq** -- ExpressVPN split tunneling (exclude node.exe) or switch to OpenAI Whisper
4. **Proposal templates** -- pioneer-build-proposal.md, pioneer-audit-proposal.md, pioneer-build-agreement.md
5. **Google Calendar + Gmail OAuth setup**
6. **Delete old Slack app** (A0AKUPULCAK) at api.slack.com
7. **src/db.ts** -- add prospects + builds tables
8. **agents/ops, comms, content CLAUDE.md** -- update each agent
9. **content/** -- LinkedIn post drafts folder

## Key Files

- `H:\My Drive\PVRPOSE_AI-BUSINESS_OPS_HUB\16 - WEBSITE & DIGITAL PRESENCE\og-image.png` -- logo only on dark bg
- `H:\My Drive\PVRPOSE_AI-BUSINESS_OPS_HUB\16 - WEBSITE & DIGITAL PRESENCE\logos-ai-rez-01.jpg` -- SOURCE logo (high-res, 8958x6250)
- `H:\My Drive\PVRPOSE_AI-BUSINESS_OPS_HUB\16 - WEBSITE & DIGITAL PRESENCE\_logo-transparent.png` -- cached transparent PNG for favicon generation
- `H:\My Drive\PVRPOSE_AI-BUSINESS_OPS_HUB\16 - WEBSITE & DIGITAL PRESENCE\index.html` -- SOURCE OF TRUTH (meta tags updated)
- `H:\My Drive\PVRPOSE_AI-BUSINESS_OPS_HUB\16 - WEBSITE & DIGITAL PRESENCE\site.webmanifest` -- updated
- `data/prospects/brad-wise-outreach-whatsapp.md` -- ready to send
- `data/prospects/brad-wise-outreach-email.md` -- ready to send

## Blockers / Notes

- **WhatsApp caches OG images** -- user must share a fresh pvrpose.ai link in a new message to see the update. Deleting the old message and re-pasting forces a re-crawl.
- **LinkedIn** -- use Post Inspector to force re-crawl if needed
- **Brad Wise deadline** -- must reply by 2026-03-16 for Zoom, before 2026-03-17 TNC lunch. If no reply, offer goes to someone else.
- **George Mills** -- offer expired, do not re-engage
- **Nathalie McKenzie** -- Pioneer Audit ($2,500), not free build
- **VPN issue** -- Groq 403 with ExpressVPN on, voice only works VPN off
