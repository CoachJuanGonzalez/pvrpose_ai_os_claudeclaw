# Session Handoff - 2026-03-10

## Context
Mapped the full ClaudeClaw repo structure against all 12 use cases. Produced a complete build plan showing exactly which files to create and update, in what order, and why. George and Nathalie final messages fully corrected and ready to send. Airtable integration strategy decided.

## Completed
- Finalized George Mills messages (WhatsApp + Email) -- corrected "deploying" to accurate framing, added 24-hour response deadline, removed all quote/markdown formatting artifacts
- Finalized Nathalie McKenzie messages (WhatsApp + Email) -- same corrections applied
- Read full repo structure (src/, agents/, skills/, store/, scripts/, specs/)
- Read src/db.ts in full -- confirmed existing tables: scheduled_tasks, sessions, memories, wa_message_map, wa_outbox, wa_messages, conversation_log, token_usage, slack_messages, hive_mind
- Confirmed what already works: scheduler, memory system, voice transcription, file sending markers, agents/comms, agents/content, agents/ops
- Decided Airtable strategy: Option A (markdown files) now, Option B (n8n sync) this week
- Produced complete build order for all 12 use cases

## In Progress
- Build plan is fully designed but NOT yet executed -- zero files have been created or modified
- George Mills messages: READY TO SEND, not yet sent by Juan
- Nathalie McKenzie messages: READY TO SEND, not yet sent by Juan
- Landing page 3-change prompt: still pending (in handoff 010)

## Next Steps
1. **RIGHT NOW:** Send George Mills WhatsApp + Email (final versions in handoff 012 Notes below)
2. **RIGHT NOW:** Send Nathalie McKenzie WhatsApp + Email (final versions in handoff 012 Notes below)
3. **START BUILD:** Add `prospects` and `builds` tables to `src/db.ts` (migration-safe addition to createSchema function)
4. **CREATE:** `data/prospects/` folder with 5 prospect markdown files (George, Nathalie, Andrea, Michael, James)
5. **CREATE:** `data/tnc-members/` folder with top 10 TNC member files (needed before Mar 17 lunch)
6. **CREATE:** `templates/` folder with 3 proposal templates (pioneer-build, pioneer-audit, pioneer-build-agreement)
7. **UPDATE:** `CLAUDE.md` -- add all 12 use case instructions (prospect tracker, morning digest, briefing format, voice rules, LinkedIn style, outreach rules, TNC intelligence, auto-pickup)
8. **UPDATE:** `agents/ops/CLAUDE.md`, `agents/comms/CLAUDE.md`, `agents/content/CLAUDE.md`
9. **SCHEDULE:** Morning digest cron at 7:30am weekdays
10. **APPLY:** 3-change landing page prompt to H: drive (prompt in handoff 010)
11. **TUESDAY MAR 11:** Write and send Michael Schacter message
12. **BEFORE MAR 17:** Populate all TNC member files

## Key Files

### Repo files to CREATE (in order):
- `src/db.ts` -- ADD prospects + builds tables via migration (do NOT rewrite, just add to runMigrations)
- `data/prospects/george-mills.md` -- CPA profile, Pioneer Build offer, messages sent status
- `data/prospects/nathalie-mckenzie.md` -- Family law profile, Pioneer Audit $2,500 offer
- `data/prospects/andrea-soueidan.md` -- Closed, keep warm, see Mar 17
- `data/prospects/michael-schacter.md` -- Pioneer Audit $2,500, send Tue Mar 11
- `data/prospects/james-hutchinson.md` -- Virtual CIO, secondary priority
- `data/tnc-members/` -- one .md per member (top 10 priority)
- `templates/pioneer-build-proposal.md` -- Free build template
- `templates/pioneer-audit-proposal.md` -- $2,500 audit template
- `templates/pioneer-build-agreement.md` -- Liability agreement (content in handoff 010)
- `proposals/` -- empty folder, generated proposals saved here
- `content/` -- empty folder, LinkedIn post drafts saved here
- `scripts/generate-pdf.py` -- reusable PDF generator (based on generate_bio.py)

### Repo files to UPDATE:
- `CLAUDE.md` -- major update, all 12 use case instructions
- `agents/ops/CLAUDE.md` -- morning digest, prospect tracking, pipeline management
- `agents/comms/CLAUDE.md` -- outreach rules, voice rules, proposal generation
- `agents/content/CLAUDE.md` -- LinkedIn style guide

### Reference files:
- `specs/handoffs/010-2026-03-10-landing-page-final-prompt-ready.md` -- 3-change landing page prompt + Pioneer Build Agreement draft
- `specs/handoffs/008-2026-03-10-george-message-sent-landing-page-prompt.md` -- original George messages (superseded by 012 Notes)
- `store/claudeclaw.db` -- SQLite DB, already has scheduler/memory/session tables
- `C:\Users\Juan Gonzalez\Downloads\generate_bio.py` -- PDF generation script to adapt for proposals

## Blockers / Notes

**GEORGE MILLS -- FINAL WHATSAPP (SEND NOW):**

Hey George!

Hope tax season is treating you well so far.

I came across your profile through TNC and have been meaning to reach out. Running a full CPA practice solo during tax season is no small thing. Personal tax, corporate, payroll, GST/QST, financial statements -- all of it landing on one desk while client emails keep coming in.

Over the last 2.5 years I built PVRPOSE AI OS for my own business. It runs my operations daily -- client communication, follow-ups, proposals, briefings, all of it handled from my phone. Before I open it up more broadly, I am personally building it for a small number of businesses I believe in. I have one free build spot remaining, and your practice is who I had in mind.

Here is what it means for you concretely:

Your clients get instant answers to intake questions, document checklists, and deadline reminders -- in your voice, 24/7, even during crunch time
Every client request gets automatically logged so you start each day knowing exactly what needs your attention
GST/QST and T4 deadline reminders go out automatically -- you stop being the reminder service
New referrals get a warm professional intake experience before you pick up the phone
Private infrastructure you control -- client financial data never touches a shared server

Your upfront cost: $0. Zero.

The build itself, which I will charge $15,000 to $25,000 CAD for once this pioneer phase is complete, is fully covered by me. The only ongoing cost is the AI infrastructure tooling -- roughly $100 to $200 per month. Think of it like a phone bill for your AI assistant.

What I ask in return: one short on-camera video sharing one measurable result once it is live, and one warm intro to someone in your network.

I would love to hear back from you within the next 24 hours -- after that I will need to move forward with the other conversation.

Worth a quick 20-minute call? Book directly here whenever it works for you:
https://calendly.com/coachjuan-pvrposeai/discovery-call

Juan

---

**GEORGE MILLS -- FINAL EMAIL (SEND NOW):**

Subject: George Mills CPA: Your Free AI Pioneer Build Spot

Hi George,

I came across your profile through TNC and have been meaning to reach out.

You are running a full-service CPA practice on your own -- personal and corporate tax, payroll, GST/QST, financial statements -- and right now you are in the middle of the most demanding stretch of the year. The actual accounting work is only half of it. The other half is client emails, document chasing, deadline reminders, and questions that come in at all hours. That does not stop just because your capacity does.

Over the last 2.5 years I built PVRPOSE AI OS for my own business. It runs my operations daily -- client communication, follow-ups, proposals, briefings, all of it handled from my phone. Before I open it up more broadly, I am personally building it for a small number of businesses I believe in. I have one free build spot remaining, and your practice is who I had in mind.

What the free Pioneer Build delivers:

24/7 client communication assistant. Your clients get instant responses to intake questions, document checklists, and deadline reminders in your voice, around the clock. Not a generic chatbot -- an AI trained specifically on how your practice communicates and operates.

Automatic request management. Every client request is categorized, logged, and organized. You stop starting each day triaging emails and start focusing on the work that actually requires a CPA.

Proactive deadline reminders. GST/QST filing dates, T4 submission windows, corporate year-end deadlines -- the system tracks them and notifies your clients automatically. You stop being the reminder service.

Referral intake on autopilot. When someone refers a new client, they get a warm professional intake experience immediately. You show up to the first call already knowing who they are and what they need.

Complete data privacy. The system runs on private infrastructure you control. Your clients' financial data never touches a shared server and never passes through a third-party platform. For a practice handling sensitive personal and corporate financial information, this is built in by design -- not bolted on as an afterthought.

Your upfront cost: $0. Zero.

The build itself, which I will charge $15,000 to $25,000 CAD for once this pioneer phase is complete, is fully covered by me. The only ongoing cost is the AI infrastructure tooling -- roughly $100 to $200 per month. Think of it like a phone bill for your AI assistant.

What I ask in return: one short on-camera video sharing one measurable result once the system is live, and one warm intro to a founder in your network who could benefit from the same.

I want to be straight with you, George. I have spent more than 2.5 years building this for my own business and I know exactly what it changes. To document that properly with real-world results outside my own practice, I am personally selecting my first external builds -- businesses I genuinely believe in. A solo CPA practice running at full capacity during tax season is exactly where this makes the most immediate, measurable difference.

I do need to hear back from you within the next 24 hours. I have one other conversation in motion and wanted to give you first right of refusal before I move forward.

Open to a 20-minute call today or tomorrow morning? Book directly at your convenience:
https://calendly.com/coachjuan-pvrposeai/discovery-call

Juan Gonzalez
AI Performance Strategist | PVRPOSE AI
juan@pvrpose.ai | +1 (514) 501-2740 | pvrpose.ai

---

**NATHALIE McKENZIE -- FINAL WHATSAPP (SEND NOW):**

Hi Nathalie,

I came across your profile through TNC and wanted to reach out directly.

Running a family law and mediation practice means every client conversation carries real emotional weight. Intake calls from people in the middle of separation, after-hours questions from clients who are anxious and scared, document collection spread across weeks -- all of it lands on your desk while the actual legal and mediation work is waiting.

Over the last 2.5 years I built PVRPOSE AI OS for my own business. It runs my operations daily -- intake, follow-ups, briefings, drafting, all handled from my phone. Before I open it up more broadly, I am personally building it for a small number of professional services firms I believe in. The Pioneer Audit is how we figure out if your practice is the right fit.

Here is what the audit includes:

A full mapping of your highest-friction workflows -- intake, document collection, client follow-up, mediation prep
A concrete AI implementation plan built around your practice, your voice, and CASL/PIPEDA compliance for sensitive client data
A clear ROI projection so you know exactly what changes and what it is worth

Investment: $2,500 CAD. Timeline: 2 weeks. If you decide to move forward with a full build, the audit fee comes off the total.

I would love to hear back from you within the next 24 hours -- after that I will need to move the spot to the next person on my list.

Would you be open to a 20-minute call to see if this is a fit?
https://calendly.com/coachjuan-pvrposeai/discovery-call

Juan Gonzalez
AI Performance Strategist | PVRPOSE AI

---

**NATHALIE McKENZIE -- FINAL EMAIL (SEND NOW):**

Subject: Letellier McKenzie: AI Systems Built for Family Law Practices

Hi Nathalie,

I came across your profile through TNC and wanted to reach out directly.

Family law and mediation is one of the most demanding communication environments in professional services. Your clients are not calling about transactions -- they are calling during some of the most difficult moments of their lives. Every intake conversation, every after-hours question, every document request carries emotional weight that most practices are not equipped to handle at scale.

Over the last 2.5 years I built PVRPOSE AI OS for my own business. It runs my operations daily -- intake, follow-ups, briefings, drafting, all handled from my phone. Before I open it up more broadly, I am personally building it for a small number of professional services firms I believe in. The Pioneer Audit is how we figure out if your practice is the right fit.

Here is what it does for a practice like yours:

Sensitive client intake. New clients get a warm, structured intake experience that collects what you need without putting the burden on your team. Available 24/7, in your voice, calibrated to the emotional tone your practice sets.

After-hours reassurance. Clients who reach out at 10pm because they are anxious get a response that acknowledges them and sets clear expectations -- without waking you up and without making them feel ignored until Monday.

Document collection. The back-and-forth of chasing documents is automated. The system tracks what has been received and what is outstanding and follows up on your behalf.

Mediation session prep. Clients arrive prepared. The system walks them through what to expect, what to bring, and how the process works -- reducing the time you spend on orientation during the session itself.

Full CASL and PIPEDA compliance. Every communication is built to Canadian privacy standards for sensitive client data. This is not an afterthought -- it is built into every layer of the system from day one.

Here is what the Pioneer Audit includes:

A full mapping of your highest-friction workflows
A concrete AI implementation plan built around your practice and your voice
A clear ROI projection with specific metrics

Investment: $2,500 CAD. Timeline: 2 weeks. If you decide to move forward with a full build, the audit fee comes off the total.

I work with legal professionals on compliance review throughout every build -- nothing goes live without your approval of every piece of content.

I do need to hear back from you within the next 24 hours. I have a limited number of Pioneer Audit spots and wanted to give you first right of refusal before I move forward.

Would you be open to a 20-minute call to see if this is a fit?
https://calendly.com/coachjuan-pvrposeai/discovery-call

Juan Gonzalez
AI Performance Strategist | PVRPOSE AI
juan@pvrpose.ai | +1 (514) 501-2740 | pvrpose.ai

---

**AIRTABLE INTEGRATION DECISION:**
- Option A (now): markdown files in data/prospects/ -- Claude reads these, you sync Airtable manually
- Option B (this week): n8n Airtable node watches base, auto-updates markdown files
- Option C (later): Claude calls Airtable API directly via bash script
- Start with A, move to B via n8n this week

**REPO BUILD ORDER (confirmed):**
1. src/db.ts -- add prospects + builds tables to runMigrations() only (safe)
2. data/prospects/ -- 5 files
3. data/tnc-members/ -- 10 files
4. templates/ -- 3 files
5. proposals/ and content/ -- empty folders
6. scripts/generate-pdf.py -- adapted from generate_bio.py
7. CLAUDE.md -- major update
8. agents/ops/CLAUDE.md, agents/comms/CLAUDE.md, agents/content/CLAUDE.md
9. Morning digest cron scheduled

**NORTH STAR POSITIONING (never deviate):**
Every action hits: Strategy + Systems + Humans
Title: AI Performance Strategist -- helping professional services firms operationalize AI through systems, culture, and measurable ROI

**CRITICAL REMINDER:**
Juan is NOT a lawyer. He works with legal professionals for compliance reviews. Never state or imply otherwise.
Juan is NOT yet deploying for external clients. He built PVRPOSE AI OS for his own business. Pioneer builds are the first external deployments.
