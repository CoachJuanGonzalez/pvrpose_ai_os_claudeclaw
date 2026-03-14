# Session Handoff - 2026-03-14

## Context
Full QA audit of pvrpose.ai landing page + legal document overhaul (privacy-policy.html and terms-of-service.html) reviewed through the lens of a Canadian/Quebec business lawyer. All fixes applied and pushed to all 3 repos.

## Completed

### Landing Page QA (index.html -- v5-pvrpose-ea-tiers-qa-fixes)
- **Pioneer urgency bar** -- split single long line into two responsive lines for small screens
- **FAQ buttons** -- added `aria-expanded="false"` initial state + JS toggleFAQ() now sets it on open/close (12 buttons)
- **Exit form first-name validation** -- `< 2` changed to `< 1` (was rejecting valid short names like "Jo")
- **Exit form CASL consent** -- added explicit opt-in checkbox (was hardcoded `marketing: true` in JS)
- **Testimonial disclaimer** -- added "Individual results vary" note after last testimonial section
- **Version bump** -- `<!-- v4-pvrpose-ea-tiers -->` -> `<!-- v5-pvrpose-ea-tiers-qa-fixes -->`
- **Overall audit score**: 8.2/10 -> ~9.1/10 with fixes applied

### Privacy Policy (privacy-policy.html -- v1.2)
- Version header: 1.2, Last Updated 2026-03-14, Next Review March 2027
- Section 2.2: IP retention clarified (30-day then truncated, no precise geolocation)
- Section 3.2: CASL record-keeping disclosure box (3-year consent records)
- Section 3.5: New AI Processing subsection (Anthropic Claude API, no model training)
- Section 6.1: Anthropic + Telegram added to service providers list
- Section 7: AI session logs (90d) + security/access logs (30d) retention
- Section 9: 72-hour breach notification to OPC + CAI (Law 25 requirement)
- Section 13: CAI (Commission d'acces a l'information) reference added for Quebec residents
- Section 14: New full section -- AI Systems and Automated Processing (Law 25 s.12.1 automated decision-making, Anthropic DPA, Telegram advisory, right to human review)
- Nav: `/index.html` -> `/` corrected; `noindex` meta added

### Terms of Service (terms-of-service.html -- v1.2)
- Liability cap: 3 months -> **12 months** of fees paid (B2B Canadian standard)
- Section 9.2: Third-party AI provider failures explicitly excluded from liability
- Section 9.2: Quebec CCQ B2B commercial nature note
- Section 15.8: Full bilingual language clause (Quebec Civil Code compliance -- English at express request + French line)
- Section 16: New -- AI Systems & Technology Provisions (16.1 third-party AI, 16.2 output disclaimer, 16.3 no professional advice, 16.4 hallucinations, 16.5 client data responsibility / prohibited inputs)
- Section 17: New -- Data Processing in Service Delivery (controller/processor distinction, client's own client consent responsibility)
- Jurisdiction corrected: Ontario -> **Quebec**
- Nav: `/index.html` -> `/` corrected; `noindex` meta added

### All 3 Repos Synced + Pushed
- `claudeclaw` main: `f3bd597`
- `pvrpose-ai-landing-page` main: `33fc3cc`
- Google Drive: H:/My Drive/PVRPOSE_AI-BUSINESS_OPS_HUB/16 - WEBSITE & DIGITAL PRESENCE/

## In Progress

- **Brad Wise outreach not yet sent** -- both messages still waiting on Juan to send

## Next Steps

1. **Send WhatsApp to Brad** (514-867-8555) -- send first, deadline: Brad reply by Monday March 16
2. **Send email to Brad** (brad.wise@manulifewealth.ca) -- same day
3. **GA4** -- replace `G-XXXXXXXXXX` stub in index.html with a real Measurement ID
4. **CASL compliance page** (`/casl-compliance.html`) -- linked from footer, file already exists, review content
5. **TNC lunch prep** (2026-03-17) -- conversation starters for 11 members in `data/tnc-members/`
6. **Proposal templates** -- `pioneer-build-proposal.md`, `pioneer-audit-proposal.md`, `pioneer-build-agreement.md`
7. **Google Calendar + Gmail OAuth setup**

## Key Files

- `index.html` -- v5-pvrpose-ea-tiers-qa-fixes, synced all 3 locations
- `privacy-policy.html` -- v1.2, synced all 3 locations
- `terms-of-service.html` -- v1.2, synced all 3 locations
- `data/prospects/brad-wise-outreach-whatsapp.md` -- finalized, ready to send
- `data/prospects/brad-wise-outreach-email.md` -- finalized, ready to send
- `data/tnc-members/` -- 11 member files for TNC lunch prep
- `casl-compliance.html` -- exists in Vercel repo, review content

## Blockers / Notes

- **Brad Wise deadline** -- reply by Monday March 16 before TNC lunch Tuesday March 17
- **Pioneer slots** -- 1 free spot + 2 at $2,500 CAD
- **What's still needed to hit 10/10 on landing page**:
  - Real post-launch testimonials with measured results
  - Short demo video in hero (30-60 sec EA in action)
  - French landing page (Loi 25 best practice)
  - GA4 live measurement ID
  - Self-host fonts + bundle Tailwind CSS (perf/privacy)
- **Legal items needing real lawyer before paid clients**:
  1. Confirm Anthropic commercial API DPA on file
  2. Telegram Privacy Impact Assessment (PIA) documented
  3. CASL consent records actually captured in Airtable (date/method/purpose fields)
  4. Per-pioneer standalone video licence agreement (web ToS acceptance alone is thin under Quebec law)
  5. Per-client signed Data Processing Agreement template (Law 25 best practice)
- **George Mills** -- offer expired, do not re-engage
- **Nathalie McKenzie** -- Pioneer Audit ($2,500 CAD), not free build
- **AGI** -- ClaudeClaw is NOT AGI. Do not use in marketing
