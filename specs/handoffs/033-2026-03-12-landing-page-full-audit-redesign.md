# Session Handoff - 2026-03-12

## Context
Full audit and redesign of the PVRPOSE AI landing page (pvrpose.ai) -- content accuracy, section reordering, color modernization, EA Scale Monday Morning scenario, SOP alignment verification, and consistency fixes.

## Completed

- **Full landing page audit** -- reviewed all ~3600 lines of index.html for content accuracy, relevance, and conversion optimization
- **Sections removed** -- "How Clients Find Us" (repeated hero stats), James Green testimonial card (duplicate of video), Darwin quote (filler)
- **Section reorder** -- Is This For You? moved up before Pull Quote; ROI Calculator moved up after Pull Quote; EA Superpowers moved after Product Tiers; Pioneer Section moved to close position after Pioneer FAQ
- **EA Scale Monday Morning scenario added** -- new dedicated multi-agent scenario (was reusing EA Amplify's). 4 timeline entries: Founder priorities, Ops agent tasks, Client services follow-ups, Finance agent invoices. EOD Scorecard: 5 agents / 0 dropped balls / 12+ hrs saved
- **JavaScript updated** -- setHeroTab() now handles 3 separate Monday scenarios (monday-solo, monday-ea, monday-scale)
- **Color modernization** -- deep-blue #7c3aed to #6d28d9, added accent-cyan #06b6d4, glass-dark blur 10px to 12px, dark sections bg-gray-900 to bg-[#0a0a0f], footer bg-black to bg-[#0a0a0f]
- **Consistency fix** -- "2-week post-delivery support" changed to "30-day" in process timeline; "2 weeks" to "30 days (60 days for EA Scale)" in Pioneer FAQ
- **SOP alignment verified** -- all pricing, features, timelines, support periods match PVRPOSE_AI_OS_EA_SUPERPOWERS_SOP.md v1.2
- **Committed and pushed** -- hash 0697e7c to main branch
- **Google Drive source of truth updated** -- H:\My Drive\PVRPOSE_AI-BUSINESS_OPS_HUB\16 - WEBSITE & DIGITAL PRESENCE\index.html
- **Claudeclaw repo copy synced** -- claudeclaw/index.html matches source of truth

## In Progress

- **Vercel deploy NOT synced** -- the `CoachJuanGonzalez/pvrpose-ai-landing-page` repo was not found locally. Updated index.html needs to be pushed there for pvrpose.ai to reflect changes.

## Next Steps

1. **Deploy to Vercel** -- clone or locate `CoachJuanGonzalez/pvrpose-ai-landing-page` repo, copy updated index.html, commit and push so pvrpose.ai goes live with changes
2. **Send Brad Wise outreach** by 2026-03-13 -- WhatsApp first (514-867-8555), then email (brad.wise@manulifewealth.ca). Drafts ready in data/prospects/
3. **TNC lunch prep** (2026-03-17 Tuesday) -- draft conversation starters for 11 TNC members
4. **Fix VPN + Groq** -- ExpressVPN split tunneling (exclude node.exe) or switch to OpenAI Whisper
5. **Proposal templates** -- pioneer-build-proposal.md, pioneer-audit-proposal.md, pioneer-build-agreement.md
6. **Google Calendar + Gmail OAuth setup**
7. **Delete old Slack app** (A0AKUPULCAK) at api.slack.com
8. **src/db.ts** -- add prospects + builds tables
9. **agents/ops, comms, content CLAUDE.md** -- update each agent
10. **content/** -- create LinkedIn post drafts folder

## Key Files

- `H:\My Drive\PVRPOSE_AI-BUSINESS_OPS_HUB\16 - WEBSITE & DIGITAL PRESENCE\index.html` -- SOURCE OF TRUTH, fully updated
- `H:\My Drive\PVRPOSE_AI-BUSINESS_OPS_HUB\16 - WEBSITE & DIGITAL PRESENCE\index-backup-pre-audit-2026-03-12.html` -- backup before audit
- `index.html` -- repo copy, synced with source of truth
- `PVRPOSE_AI_OS_EA_SUPERPOWERS_SOP.md` -- SOP v1.2, verified aligned with landing page
- `data/prospects/brad-wise.md` -- Brad Wise profile + offer
- `data/prospects/brad-wise-outreach-whatsapp.md` -- WhatsApp message (send 2026-03-13)
- `data/prospects/brad-wise-outreach-email.md` -- Email message (send 2026-03-13)

## Blockers / Notes

- **YOLO mode was active** this session
- **Vercel deploy is the critical gap** -- pvrpose.ai is still showing old content until the landing page repo is updated
- **Brad Wise deadline** -- must reply by Monday 2026-03-16 for Zoom demo, or before Tuesday lunch 2026-03-17. If no reply, offer goes to someone else at TNC lunch
- **George Mills** -- no reply, offer expired. Do not re-engage with free pioneer
- **Nathalie McKenzie** -- stays at Pioneer Audit ($2,500), not free build
- **VPN issue** -- Groq API returns 403 when ExpressVPN is on. Voice messages only work with VPN off
- **Final section order**: Pioneer Urgency Bar > Nav > Bill 96 > Hero > Monday Morning (3 tabs) > Is This For You? > Pull Quote > ROI Calculator > Social Proof > James Green Video > ILLUMMAA Written > James Evans Video > DIY vs Pro > Process Timeline > Urgency Trigger > Product Tiers > EA Superpowers > Credentials > PVRPOSE AI OS > About Founder > FAQ > Pioneer FAQ > Pioneer Section > Final CTA > Footer
