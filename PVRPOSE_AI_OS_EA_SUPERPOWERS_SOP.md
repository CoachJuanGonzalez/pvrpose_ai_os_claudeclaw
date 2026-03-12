# PVRPOSE AI OS — EA Superpowers SOP
## The Complete Guide to Building, Deploying, and Selling the EA Copilot Configuration

**Version:** v1.2 | March 2026
**Status:** Internal SOP — Not for distribution
**Author:** Juan Gonzalez, PVRPOSE AI — Montreal
**Parent Document:** PVRPOSE_AI_OS_BLUEPRINT_SOP.md v3.0 (supersedes nothing — this is an additive configuration layer)

---

> **How to use this document:**
> PVRPOSE AI OS ships as a 3-tier product line: **PVRPOSE EA** (Tier 1 -- solo founder), **PVRPOSE EA Amplify** (Tier 2 -- founder + human EA/VA/CoS), and **PVRPOSE EA Scale** (Tier 3 -- agency/firm with 3+ team members). This SOP is the single source of truth for the EA Superpowers configuration layer -- the capabilities and onboarding specific to Tiers 1 and 2. It is not a standalone document -- it extends the master SOP. All 28 features, all 6 skills, all infrastructure, and all compliance from the master SOP still apply. This document adds the EA-specific layer: the use cases, CLAUDE.md configuration, sales framing, demo script, and business cases. Tier 3 (Scale) is referenced here for pricing and positioning context but detailed in the EA Capability Roadmap.
>
> When this document says "see master SOP Section X," follow the cross-reference. Do not duplicate content that is already authoritative in the master document.

---

## TABLE OF CONTENTS

1. What This Configuration Is and Who It Is For
2. Strategic Positioning — The EA Superpowers Frame
3. EA Copilot Architecture — How the System Serves Two People
4. Complete EA Feature Mapping — All 28 Features Applied to the EA Context
5. Skills Reference — EA-Specific Usage
6. Airtable CRM Data Flow for EA Teams
7. EA Business Case Library — Categories A through M + Category EA
8. EA Blueprint Architecture — CLAUDE.md Configuration
9. EA Demo Strategy — The 20-Minute Demo Script
10. Pricing and Offer Structure (EA Context)
11. EA Client Qualification
12. The 6-Week Build SOP (EA Configuration)
13. Post-Delivery — 30-Day Support (EA Context)
14. EA Replication Checklist (Per Client)
15. Competitive Positioning — EA Market
16. ROI Framework — EA-Specific Numbers
17. Session Management (same as master SOP — no changes)
18. EA Day in the Life — The EA's Daily Use
19. Priority Sequencing (EA Configuration)
20. Multi-Agent Architecture for EA Teams
21. Voice Pipeline (EA Context)
22. WhatsApp Bridge (EA Context)
23. Web Dashboard (EA Access)
24. Obsidian Integration (EA Shared Vault)
25. File Handling — EA Workflows
26. Compliance — CASL, PIPEDA, Quebec Law 25 (EA Context)
27. Complete .ENV Reference (EA Additions)
28. System Health and Startup (EA Configuration)
29. EA Skills Setup Replication Checklist
30. Known Issues and Status (EA Configuration)

---

## SECTION 1: WHAT THIS CONFIGURATION IS AND WHO IT IS FOR

### What This Is

PVRPOSE AI OS ships as a 3-tier product line. "EA Superpowers" is the marketing frame for what the AI gives an EA -- it is not the product name. The three product tiers are:

| Tier | Product Name | Who It Serves | Users |
|---|---|---|---|
| 1 | **PVRPOSE EA** | Solo founder, no human EA | 1 |
| 2 | **PVRPOSE EA Amplify** | Founder WITH a human EA, VA, or Chief of Staff | 2 |
| 3 | **PVRPOSE EA Scale** | Agency or firm with 3+ team members | 3+ |

The underlying technology is identical across all tiers -- the same PVRPOSE AI OS documented in the master SOP. The differences are configuration depth, user count, onboarding scope, and pricing.

**This SOP specifically covers Tier 2 (Amplify) and the EA-relevant parts of Tier 1 (PVRPOSE EA).** Tier 3 (Scale) is referenced for pricing and positioning context but detailed in the EA Capability Roadmap.

Key differences across tiers:

- **PVRPOSE EA (Tier 1):** One user (the founder). CLAUDE.md configured for the founder's voice and workflows. Positioned as "your personal AI operating system." 6-week build. 10-15 hours/week reclaimed for the founder.
- **PVRPOSE EA Amplify (Tier 2):** Two users (founder + EA). CLAUDE.md knows both the founder's voice AND the EA's workflow patterns. Positioned as "give your EA AI superpowers." 6-week build with EA onboarding at Week 3. 24-32 hours/week of automatable EA time (up to 60% of routine tasks per McKinsey).
- **PVRPOSE EA Scale (Tier 3):** 3+ users. Dedicated agent bots per role. Positioned as "AI-powered operations layer." 8-12 week build. Detailed in the capability roadmap.

### Who This Is For (Tiers 1 and 2)

**The Buyer (Founder/Principal):**
- Tier 1 (PVRPOSE EA): Manages everything themselves, no support staff
- Tier 2 (PVRPOSE EA Amplify): Has a human EA, VA, or Chief of Staff currently employed or contracted
- Pays $63K–$98K CAD/year for that person's time (Robert Half 2026)
- Frustrated that their EA is bottlenecked by repetitive, low-judgment work
- Bills $200–$500+/hour and values their own time proportionally
- Sector: Legal, CPA, consulting, agency, advisory, modular construction

**The User (EA/Chief of Staff):**
- Manages the founder's inbox, calendar, communications, research, prep work
- Spends 60–80% of their time on tasks that follow predictable patterns
- Not technical — must not require technical knowledge to use the system
- Will become the internal champion for the system if onboarded correctly
- Telegram-literate or can learn in 30 minutes

**What Neither Wants:**
- The founder does not want to manage another tool
- The EA does not want to feel replaced or monitored
- Both want the same outcome: more done, less friction, same quality relationships

This SOP is designed so that by the end of a 6-week build, both people feel the system was built for them.

---

## SECTION 2: STRATEGIC POSITIONING — THE EA SUPERPOWERS FRAME

### The Core Insight

Every other AI tool on the market says "replace your assistant." PVRPOSE EA Amplify says "upgrade the assistant you already trust." For solo founders without an EA, PVRPOSE EA says "become your own chief of staff." For teams, PVRPOSE EA Scale says "stop scaling with headcount."

This positioning wins for three reasons:

**1. Removes the threat response.**
When you tell a founder "replace your EA," you trigger a loyalty response — especially for founders who have a long-standing relationship with their assistant. When you say "give your EA AI superpowers," you activate a different emotion: pride. Their EA becomes the hero of the story.

**2. Creates two internal buyers instead of one.**
The founder wants more output. The EA wants job security and to stop doing tedious work. Both get what they want. The EA becomes an advocate for the sale, not a silent objection.

**3. The ROI math is immediate.**
The founder is already paying $63K–$98K CAD/year for the EA (Robert Half 2026). A $20K build that makes that person 3× more productive is obvious math. Payback period is 3–6 months. No sophisticated financial modeling required.

### Three Tiers, One System

| | Tier 1 -- PVRPOSE EA | Tier 2 -- PVRPOSE EA Amplify | Tier 3 -- PVRPOSE EA Scale |
|---|---|---|---|
| **Who** | Solo founder, no support staff | Founder + EA, VA, or CoS | Agency/firm with 3+ team members |
| **First sentence** | "I build you a personal AI operating system" | "I give your EA AI superpowers" | "I build your team an AI operations layer" |
| **Primary pain** | Admin overload, no support | EA is bottlenecked, not leveraged | Coordination overhead, scaling people costs |
| **ROI framing** | 10-15 hrs/week reclaimed for founder | EA handles 3x volume, no new hire | Operational throughput at team level |
| **Objection** | "Is AI really ready for this?" | "Will this replace my EA?" | "Can it work across multiple people?" |
| **Answer** | "Yes -- see the demo" | "No -- it upgrades them" | "Yes -- each person gets a dedicated agent" |
| **Users** | 1 | 2 | 3+ |
| **Build timeline** | 6 weeks | 6 weeks + EA onboarding Week 3 | 8-12 weeks |

The underlying system is identical across all three tiers. Tier differences are configuration depth (CLAUDE.md complexity, number of agent bots), user count, onboarding scope, and pricing. "EA Superpowers" remains the marketing frame for what the AI gives a human EA -- it is not limited to one tier.

### The Positioning Statement

> "You don't replace the human who already knows your world. You upgrade them. PVRPOSE AI OS gives your EA AI superpowers — so they do in 20 minutes what used to take 3 hours. They stay in the driver's seat. The AI does the grinding work."

Use this verbatim in:
- Discovery calls (when the founder mentions they have an EA)
- TNC and network events (when someone says "I already have an assistant")
- pvrpose.ai landing page (EA Superpowers section)
- Proposals (opening paragraph)

---

## SECTION 3: EA COPILOT ARCHITECTURE — HOW THE SYSTEM SERVES TWO PEOPLE

### The Three Roles in an EA Configuration

**The Founder (Principal)**
- Receives briefings, approves decisions, reviews drafts
- Uses Telegram directly for high-level commands ("Brief me on Michael before my 2pm")
- Sets the voice and communication standards the system learns from
- Primary beneficiary of reclaimed strategic time

**The EA (Operator)**
- Primary daily user of the system in the EA configuration
- Uses Telegram to run workflows, draft communications, prep documents, triage inbox
- Becomes the expert on what the system can do — trains themselves over 30 days
- Career upside: becomes more valuable to the founder, not less

**PVRPOSE AI OS (the Copilot)**
- Serves both, but through different interaction patterns
- Knows the founder's voice, preferences, relationships, and history
- Knows the EA's workflow patterns and delegation logic
- Never sends anything without human approval — the EA (or founder) always has the final tap

### Access Architecture

**Option A: Shared Bot (Recommended for Pioneer Phase)**
Both founder and EA use the same main Telegram bot. They are both listed as ALLOWED_CHAT_IDs in the .env file. Claude knows who is sending based on context — if a message starts with "EA:" or comes from the EA's Telegram account, it routes accordingly.

Configuration in .env:
```
ALLOWED_CHAT_ID=founder_telegram_id
ALLOWED_CHAT_ID_2=ea_telegram_id
```

Configuration in CLAUDE.md (root):
```
## Team Access

Two people use this system:
- [FOUNDER NAME] — the principal. All drafts are in their voice. All decisions go to them.
- [EA NAME] — the operator. They run workflows, prep documents, triage communications.

When a message comes from [EA NAME], you are in EA mode:
- Draft in [FOUNDER NAME]'s voice, not [EA NAME]'s
- Surface output to [EA NAME] for review before the founder sees it
- When in doubt about a decision, escalate to [FOUNDER NAME]

When a message comes from [FOUNDER NAME], you are in principal mode:
- Execute directly
- Briefing-first responses
- Assume they have 30 seconds, not 3 minutes
```

**Option B: Dedicated EA Agent Bot (Recommended for Retainer Phase)**
The EA has their own dedicated Telegram bot connected to the `comms` or `ops` agent. The founder keeps the main bot. Each operates independently with separate contexts.

Configuration:
- EA uses `agents/comms/agent.yaml` bot with `COMMS_BOT_TOKEN`
- Founder uses main bot with `TELEGRAM_BOT_TOKEN`
- Both share the same `store/claudeclaw.db` database (shared memory)
- Separate CLAUDE.md context per agent governs behavior

### What the EA Can Do That the Founder Cannot (and Vice Versa)

**EA can:**
- Triage inbox and surface priority actions
- Draft all outbound communications for founder approval
- Prep meeting briefs before the founder's calls
- Manage calendar conflicts and scheduling
- Run research on prospects and update data files
- Queue WhatsApp and email messages for founder review
- Generate proposals for founder approval

**Founder can:**
- Approve, reject, or edit EA-generated drafts
- Issue high-level directives ("Handle Michael's follow-up today")
- Access briefings directly without EA intermediary
- Override EA-staged outputs with their own direction
- Run their own commands directly without EA involvement

**Both can:**
- Send voice notes and have them transcribed and acted on
- Ask "what's my pipeline today?"
- Request research, documents, or analysis
- Check calendar and inbox

---

## SECTION 4: COMPLETE EA FEATURE MAPPING — ALL 28 FEATURES APPLIED

The 28 confirmed features from the master SOP (Section 4) all apply in the EA configuration. Below is how each feature maps to the EA workflow specifically.

> For complete feature documentation, see master SOP Section 4. This section documents EA-specific usage patterns only.

| # | Feature | EA-Specific Usage Pattern |
|---|---|---|
| 1 | Telegram mobile interface | EA and founder both use Telegram. EA is the primary daily operator. |
| 2 | Claude AI engine (claude-sonnet-4-6) | All drafts are in the founder's voice, not the EA's. |
| 3 | Voice note transcription (Groq Whisper) | EA sends voice commands hands-free. Founder uses for approvals on the go. |
| 4 | Text-to-speech replies (ElevenLabs/Gradium) | Founder receives voice briefings when driving. EA gets text. |
| 5 | Private server infrastructure | EA data access is controlled by ALLOWED_CHAT_ID config. |
| 6 | Session management (convolife/checkpoint) | EA can run checkpoint at end of shift to preserve context. |
| 7 | /newchat command | EA starts fresh session each morning. Founder does same. |
| 8 | /respin command | EA reruns failed or rejected drafts with new direction. |
| 9 | /stop command | Either person can halt a running task. |
| 10 | /model switching | EA can switch to faster model for triage, slower for proposals. |
| 11 | Persistent memory (SQLite + FTS5) | System remembers the founder's preferences from EA interactions. |
| 12 | Semantic memory retrieval | "What did we discuss with Michael last week?" works from EA context. |
| 13 | Scheduled tasks (cron) | EA digest runs at 8:30am weekdays. Briefings auto-prep before key calls. |
| 14 | Multi-agent routing | EA primarily uses comms and ops agents. Founder uses all four. |
| 15 | Gmail skill | EA triages founder's inbox. Drafts replies. Sends on approval. |
| 16 | Google Calendar skill | EA manages calendar. Proposes schedules. Sends invites. |
| 17 | Slack skill | EA monitors Slack on behalf of founder. Surfaces what needs attention. |
| 18 | Timezone skill | EA uses for scheduling calls across time zones. |
| 19 | Gemini video analysis | EA sends founder videos or recordings. System transcribes for briefing prep. |
| 20 | LinkedIn skill | EA drafts LinkedIn posts in founder's voice. Founder approves and posts. |
| 21 | WhatsApp bridge | EA sees WhatsApp message history. Drafts replies. Founder sends. |
| 22 | Obsidian integration | Shared vault. EA can update notes. System reads tasks from both. |
| 23 | Web dashboard | EA monitors system health without needing server access. |
| 24 | File handling (inbound) | EA forwards documents (contracts, PDFs, photos) for analysis. |
| 25 | File handling (outbound — SEND_FILE) | Proposals and reports delivered to EA's Telegram for review then forwarding. |
| 26 | Airtable CRM sync | EA is the primary Airtable operator. System reads and updates via EA. |
| 27 | Morning digest cron | EA receives digest first. Briefs founder on priority actions. |
| 28 | Hive mind (cross-session memory) | Founder's preferences persist across EA sessions automatically. |

---

## SECTION 5: SKILLS REFERENCE — EA-SPECIFIC USAGE

All 6 skills from master SOP Section 5 apply. Below are EA-specific trigger phrases and workflows for each.

### Skill 1: Gmail (skills/gmail/SKILL.md)

**EA-mode trigger phrases:**
- "Check the inbox — what needs a response today?" → returns priority triage
- "Read the email from [name]" → returns full email content
- "Draft a reply to [name] saying [direction]" → draft in founder's voice, shown to EA for approval
- "Send the [proposal name] to [email] with the standard cover message" → EA confirms before send
- "Flag everything from [domain] as priority" → creates filter

**EA-specific rule:** EA never sends email without the founder seeing the draft first. The system always ends email drafts with: "Ready to send? Reply 'send' to confirm or give me edits."

### Skill 2: Google Calendar (skills/google-calendar/SKILL.md)

**EA-mode trigger phrases:**
- "What's on the CEO's calendar this week?" → full week view
- "Find a 45-minute slot for a discovery call with [name] this week" → returns 3 options
- "Book [time] with [name], send them a Google Meet invite at [email]" → EA confirms before creating
- "Block Thursday morning for deep work — no meetings" → creates block
- "Reschedule Friday's 2pm to Monday 11am and notify [name]" → EA confirms, system sends update
- "How much buffer does the CEO have before the 3pm call?" → calendar gap analysis

**Critical rule (from skill documentation):** Never assume date from day name without verification. Always confirm the exact date before creating or moving any event.

**EA-specific timezone:** Use America/Toronto for all Quebec and Ontario deployments.

### Skill 3: Slack (skills/slack/SKILL.md)

**EA-mode trigger phrases:**
- "Check Slack — what needs attention?" → sorted by channel, unread count
- "What did [person] say in #[channel] today?" → reads channel history
- "Draft a Slack message to [person]: [direction]" → shows draft before sending
- "Any mentions of [topic] in Slack this week?" → search across channels

**EA-specific rule:** All Slack messages drafted for the founder require explicit "send" confirmation. EA can read freely. EA cannot send from the founder's Slack account without explicit per-message approval.

### Skill 4: Timezone (skills/timezone/SKILL.md)

**EA-mode trigger phrases:**
- "What time is it in [city] right now?" → instant answer
- "Schedule a call with [name in London] at a time that works for both Montreal and London" → overlap analysis
- "Is 3pm Montreal good for a call with someone in Vancouver?" → yes/no with their local time

**EA dashboard command:**
- "Show timezone dashboard" → returns current times in Montreal, Toronto, Vancouver, New York, London

### Skill 5: Gemini Video Analysis (~/.claude/skills/gemini-api-dev/SKILL.md)

**EA-mode trigger phrases:**
- EA sends a recorded loom or voice memo from founder: "Transcribe this and extract the key action items"
- "Analyze this whiteboard photo from the strategy session and give me structured notes"
- "The CEO sent this voice note about the Schacter proposal — extract what they want changed"
- "Turn this recorded meeting summary into action items with owners and deadlines"
- "The CEO recorded a note about their LinkedIn post idea — transcribe and format it"

**EA-specific workflow:** Gemini receives the media file → transcribes or analyzes → EA receives structured output → EA acts on it or forwards summary to founder.

### Skill 6: LinkedIn (~/.claude/skills/linkedin/SKILL.md)

**EA-mode trigger phrases:**
- "The CEO recorded a voice note about today's Michael Schacter meeting. Turn it into a LinkedIn post."
- "Here's a situation the CEO described — write a LinkedIn post about it in their voice"
- "Draft a LinkedIn carousel outline: [topic]"
- "Turn this email thread into a LinkedIn post"

**EA-specific rule:** EA is the LinkedIn post operator. They trigger creation, review the draft, send to founder for one-tap approval, then post. All posts are saved to `content/linkedin-[YYYY-MM-DD]-[slug].md` before posting.

**Voice rules (from LinkedIn skill — non-negotiable):**
- No em dashes. Use double hyphen ( -- ) or rewrite.
- No AI clichés: "Certainly!", "Great question!", "game-changer", "dive into", "leverage", "unlock"
- Short sentences. One idea per sentence.
- Paragraphs of 1–3 lines. White space is a feature.
- Specific numbers > generic claims. Real situations > abstractions.

---

## SECTION 6: AIRTABLE CRM DATA FLOW FOR EA TEAMS

> For full Airtable integration documentation, see master SOP Section 6.

In the EA configuration, the Airtable data flow has one key change: the EA is the primary CRM operator, not the founder.

### Phase 1: Manual Mirror (EA Operates)

The EA is responsible for keeping the markdown prospect files in sync with Airtable.

**EA workflow:**
1. EA opens Airtable in the morning (standard practice)
2. For any status changes, new notes, or stage movements overnight, EA updates the corresponding markdown file:
   - "Update Michael Schacter's file — he's moved to proposal stage, last contact was yesterday, next action is follow up by Friday"
3. System updates `data/prospects/michael-schacter.md` with the new status, timestamped note, and next action

**Why the EA does this:** EA already updates Airtable as part of their daily workflow. Adding the markdown file update takes 30 seconds per record and ensures the PVRPOSE AI OS briefings reflect current CRM state.

### Phase 2: Direct API Skill (EA-Supervised)

When the Airtable direct API skill is active (Week 2–3 of client build), Claude reads and writes Airtable records on demand via REST API. No middleware, no sync delays.

**EA oversight role:**
- EA monitors that API calls are returning correct data via the web dashboard
- EA handles any API errors or field mapping issues flagged by the system
- EA is the human point of contact for Airtable schema changes

### Phase 3: Direct Airtable API Skill (EA as Query Operator)

When the Airtable skill is live, the EA can query and update Airtable directly from Telegram.

**EA trigger phrases:**
- "Show me all prospects in proposal stage" → reads from Airtable
- "Mark Michael Schacter as closed-won in Airtable" → updates record
- "Which deals have had no activity in the last 7 days?" → query with filter
- "Add a note to Nathalie's Airtable record: second follow-up sent, no response"

---

## SECTION 7: EA BUSINESS CASE LIBRARY — CATEGORIES A THROUGH M + CATEGORY EA

> Categories A through M are fully documented in master SOP Section 7 and all apply in the EA configuration. The trigger phrases and workflows are identical — they are now operated by the EA instead of the founder directly. Category EA (EA1–EA25) is also fully documented in the master SOP Section 7. This section provides the EA-specific workflow context for how Category EA use cases are operated within the two-person (founder + EA) architecture.

### How Categories A–M Map to EA Operations

Every use case in Categories A–M that was previously triggered by the founder can now be triggered by the EA on the founder's behalf.

**Examples:**

| Master SOP Use Case | EA Mode Version |
|---|---|
| A1: "Brief me on my pipeline for today" (founder) | EA sends at 8:30am, receives digest, prepares founder summary |
| A2: "Brief me on George before my 10am call" (founder) | EA prepares brief 15 min before call, sends to founder |
| B1: Draft WhatsApp to Michael Schacter (founder) | EA triggers draft, reviews tone, queues for founder approval |
| C1: Draft Pioneer Audit proposal (founder) | EA triggers draft with client details, reviews, sends to founder |
| D6: Voice note to LinkedIn post (founder) | EA intercepts founder voice note, triggers Gemini + LinkedIn pipeline |
| F1: Inbox triage (founder) | EA runs triage at 9am, surfaces top 3 priority actions to founder |

The system serves both — the trigger point shifts from founder to EA, but the output quality and voice remain the founder's.

---

### CATEGORY EA: EA-AUGMENTED WORKFLOW (NEW — EA CONFIGURATION ONLY)

These use cases only exist in the EA Superpowers configuration (PVRPOSE EA Amplify, Tier 2). They require the two-person access architecture documented in Section 3.

---

**EA1. EA Morning Briefing Prep**

Trigger (EA, 8:30am): "Prep the CEO's morning brief for today."

System:
1. Reads all `data/prospects/` files — surfaces who needs follow-up today, who is overdue, what the priority action is per deal
2. Reads Google Calendar — returns the day's events with buffer time analysis
3. Checks Gmail — returns any priority emails that arrived overnight requiring founder response
4. Compiles into a clean morning brief formatted for the founder's 30-second scan

EA receives:
```
CEO Morning Brief — [Date]

PIPELINE PRIORITY:
- Schacter: Proposal sent 3 days ago — follow up by 10am
- McKenzie: Awaiting signed agreement — nudge today
- Mills: Discovery scheduled 2pm — brief ready

CALENDAR TODAY:
- 10am: Call with James Hutchinson (45 min)
- 2pm: George Mills discovery call
- No conflicts. Deep work block holds until 10am.

INBOX: 2 emails need response — Nathalie (re: agreement) and bank re: wire

RECOMMENDED: You have 90 free minutes this morning before the 10am call.
```

EA forwards to founder on Telegram. Founder sees it before 9am.

Manual time replaced: EA spends 30–45 minutes every morning pulling from Airtable, Gmail, and Google Calendar separately. System produces the same brief in 45 seconds.

---

**EA2. Pre-Call Brief Preparation (EA-Triggered)**

Trigger (EA, 15 minutes before a call): "Prep the CEO's brief for the 2pm George Mills call."

System reads `data/prospects/george-mills.md` and returns:
- Name, company, role, practice type
- Pain point stated at discovery
- Last contact date and what was discussed
- Current offer stage
- One sharp opening question calibrated to their situation
- One thing to not bring up (if flagged in the file)

EA delivers the brief to founder's Telegram. Founder has everything they need before they pick up the phone.

Manual time replaced: 15 minutes of digging through email and CRM before every call, every day.

---

**EA3. Draft in Founder's Voice — Full Delegation Mode**

Trigger (EA): "Draft the CEO's response to Nathalie's email about the agreement timeline. She's asking for a 2-week extension."

System:
1. Reads the incoming email (Gmail skill)
2. Reads context from `data/prospects/nathalie-mckenzie.md`
3. Drafts a response in the founder's voice — not the EA's — that addresses the request, maintains relationship warmth, and sets a clear next step

EA reads the draft, makes any minor edits for tone, forwards to founder as:
"Here's the draft for Nathalie. Reply 'send' or give me edits."

Founder replies "send" from Telegram. EA sends from founder's Gmail.

Manual time replaced: EA writing the email themselves (15–20 minutes), founder rewriting it (10 minutes). System collapses this to EA reviewing a ready draft (2 minutes) + founder one-tap approval (30 seconds).

---

**EA4. Inbox Triage + Priority Routing**

Trigger (EA, 9am): "Triage the CEO's inbox for the last 24 hours. Flag by priority."

System returns:
```
URGENT (respond today):
- Michael Schacter: Questions about data security in the proposal
- Bank: Wire confirmation needed by end of day

NORMAL (respond this week):
- LinkedIn: 3 connection requests — review and decide
- James Green: Follow-up on the Dominion project status

LOW (can wait or archive):
- 12 newsletter subscriptions
- 4 automated receipts

DRAFTS READY: I've drafted responses for Michael and the bank. Reply 'show drafts' to review.
```

Manual time replaced: 20–30 minutes of EA scanning the inbox, deciding what matters, writing notes to the founder.

---

**EA5. Calendar Optimization and Deep-Work Protection**

Trigger (EA, Monday morning): "The CEO has 7 meeting requests this week. Optimize their schedule to protect deep-work blocks and flag any conflicts."

System:
1. Reads current Google Calendar events
2. Identifies conflicts, back-to-back meetings, and gaps where focus blocks could be inserted
3. Returns a restructured schedule proposal with reasoning

EA receives:
```
Current week — 7 meeting requests pending:

PROPOSED SCHEDULE:
- Monday: Deep work 8am–12pm (protect). Schacter call moved to 2pm.
- Tuesday: 3 meetings clustered 10am–1pm. Afternoon clear.
- Wednesday: Currently overloaded — 5 meetings. Recommend moving 2 to Thursday.
- Thursday: Currently light — good day to absorb moved meetings.
- Friday: Block 4pm–6pm for end-of-week review.

CONFLICTS: Tuesday 10am and 10:30am overlap (15 min). Suggest moving one to 11am.

ACTION: Reply 'approve and update calendar' or give me changes.
```

EA approves or adjusts, system updates Google Calendar and sends reschedule notifications.

Manual time replaced: 30–45 minutes of calendar Tetris every Monday morning.

---

**EA6. Prospect Research — Full Briefing Doc**

Trigger (EA, before a key meeting or dinner): "Research Michael Schacter — immigration lawyer, Montreal, solo practice. The CEO is meeting him for dinner Thursday. Prep a briefing doc."

System:
1. Reads `data/prospects/michael-schacter.md` for what is already known
2. Web search: practice focus, public LinkedIn info, recent activity, any published articles or commentary
3. Synthesizes into a structured briefing doc:
   - Professional background
   - Practice focus and typical client profile
   - Likely admin bottlenecks for that practice type
   - Conversation angles the CEO can use
   - What not to say (if anything flagged)
   - Recent industry news relevant to their practice

Output saved to `data/prospects/michael-schacter-dinner-brief-[date].md` and delivered to EA's Telegram via `[SEND_FILE:]`.

Manual time replaced: 1–2 hours of LinkedIn and Google research before a key meeting.

---

**EA7. EA Shift Handoff Notes**

Trigger (EA, end of shift): "Handoff notes for today. Summarize what was done, what is pending, and what the CEO needs to know."

System reads session context and returns a structured handoff:
```
EA HANDOFF — [Date] — End of Day

COMPLETED TODAY:
- Schacter proposal drafted and sent (PDF delivered 2:15pm)
- Nathalie follow-up sent via email (11:30am)
- George's calendar invite updated and confirmation sent

PENDING (for tomorrow):
- Michael Schacter response expected — check inbox 9am
- George Mills agreement not signed yet — follow up by 10am
- Andrea Soueidan cold outreach not sent — draft ready, waiting for CEO approval

CEO NEEDS TO KNOW:
- Nathalie asked for a 2-week extension on the agreement — draft response ready for your review
- Bank wire confirmation needed by 5pm tomorrow

FILES CREATED TODAY:
- proposals/schacter-pioneer-audit-2026-03-11.md
- content/linkedin-2026-03-11-proposal-time.md
```

EA saves this to a daily log file. Founder receives a summary Telegram message.

Manual time replaced: EA writing manual handoff notes (20 minutes). System produces in 30 seconds.

---

**EA8. Delegate-and-Track**

Trigger (founder, or EA on founder's behalf): "Delegate the Schacter follow-up to the EA system. Track it and remind me if not done by Thursday 5pm."

System:
1. Creates a tracked task in the SQLite `scheduled_tasks` table
2. Sets a Thursday 5pm reminder cron
3. If not marked done by Thursday 4:30pm, sends a Telegram alert to both founder and EA

Trigger (founder): "What tasks did I delegate this week that aren't done yet?"

System: Queries `scheduled_tasks` and returns all open delegated items with due dates and status.

Manual time replaced: Mental tracking of delegated tasks, follow-up reminders, the anxiety of "did that get done?". System makes delegation systematic and visible.

---

**EA9. EA-to-Founder Escalation**

Trigger (EA, when a situation exceeds their authority): "Flag this for the CEO: Schacter is asking for a 20% discount. I don't know how to handle this."

System:
1. Reads the email or context
2. Analyzes the situation
3. Drafts 2–3 response options for the founder at different levels of flexibility
4. Sends the options to the founder's Telegram with a clear recommendation

Founder receives:
```
ESCALATION — Schacter discount request

He's asking for $2,000 instead of $2,500 for the audit. Here are your options:

OPTION A (hold firm): "The $2,500 is the Pioneer rate — it's already 50% below standard. Happy to proceed when you're ready."
OPTION B (bridge): "I can credit the $500 against your first month's retainer if we kick off by April 1."
OPTION C (let it go): Accept the $2,000. Build the relationship. Upsell on the retainer.

RECOMMENDATION: Option A or B. Option C signals that the price was soft from the start.

Reply with your choice and I'll draft the full response.
```

Manual time replaced: EA hunting down the founder for a decision, founder interrupting deep work to assess context they don't have in front of them.

---

**EA10. Voice Note to Founder Brief**

Trigger (EA): EA sends a founder's voice note or recorded message to the system.

System (via Gemini):
1. Transcribes the voice note
2. Extracts key points, decisions, and action items
3. Returns structured notes

EA receives:
```
VOICE NOTE TRANSCRIPTION + SUMMARY — [timestamp]

RAW TRANSCRIPT:
"...talked to George today, he's good to go, wants to start April 1st, main concern was the WhatsApp setup but I explained how it works and he seemed comfortable. The priority is getting his agreement signed by end of week..."

KEY POINTS:
- George Mills confirmed start: April 1
- Main concern: WhatsApp setup (addressed, resolved)
- Next action: Get signed agreement by end of week

ACTION ITEMS:
1. Send George the agreement today
2. Follow up by Friday if not signed
3. Update his prospect file to: Active Client
```

Manual time replaced: EA listening to founder voice notes, writing notes manually, parsing instructions from rambling audio.

---

### EA11–EA25: ADDITIONAL EA USE CASES (Cross-Reference)

EA use cases EA11 through EA25 are fully documented in the master SOP (PVRPOSE_AI_OS_BLUEPRINT_SOP.md), Section 7, Category EA. They cover:

| Use Case | Description | EA Workflow Context |
|---|---|---|
| EA11 | Crisis Response Options | EA triggers when client complaint arrives. Founder selects response option. |
| EA12 | Onboarding Knowledge Transfer | EA generates handoff doc when new team member joins. |
| EA13 | Morning Exec Brief (6–7am) | System auto-generates. EA receives, reviews, forwards condensed version to founder. |
| EA14 | Pre-Meeting Briefing Engine | EA triggers 15 min before calls. Brief delivered to both EA and founder. |
| EA15 | EOD Critical Path | System generates end-of-day summary. EA reviews and adds notes before forwarding. |
| EA16 | Montreal -- Bilingual Communication | EA triggers French/English drafts. Founder approves before sending. |
| EA17 | Ottawa -- Government Calendar Sync | EA manages government meeting scheduling on founder's behalf. |
| EA18 | Vancouver -- Asia-Pacific Time Zone Coordination | EA handles cross-timezone scheduling. |
| EA19 | Toronto -- Investor Relations Prep | EA preps investor briefing docs. Founder reviews before meetings. |
| EA20 | Cross-Border Travel Logistics (Canada-US) | EA compiles travel docs and logistics. |
| EA21 | Exec Retreat Planning | EA manages full retreat logistics and agenda. |
| EA22 | Board Book Preparation | EA triggers board deck generation. Requires future PDF build. |
| EA23 | Investor Due Diligence Summary | EA compiles due diligence packages. Founder reviews. |
| EA24 | Gift and Concierge | EA manages personal/family gift and concierge tasks. |
| EA25 | Team Recognition and Awards | EA tracks team milestones and drafts recognition communications. |

> For full trigger phrases, system workflows, and status (LIVE vs. future build) for each of these, see master SOP Section 7, Category EA.

In the EA Superpowers configuration, all EA11–EA25 use cases follow the same two-person pattern: the EA triggers or receives the output, reviews it, and either acts on it directly or forwards to the founder for approval.

---

## SECTION 8: EA BLUEPRINT ARCHITECTURE — CLAUDE.MD CONFIGURATION

> For complete blueprint architecture documentation, see master SOP Section 8. This section covers EA-specific additions to CLAUDE.md only.

### Root CLAUDE.md — EA Additions

Add the following section to the standard CLAUDE.md root file when configuring a PVRPOSE EA Amplify (Tier 2) deployment:

```markdown
## EA Configuration

This system serves two people:

### [FOUNDER NAME] (Principal)
Role: Business owner and decision-maker. All communications, proposals, and content are in their voice.
Telegram ID: [FOUNDER_TELEGRAM_ID]
Working hours: [HOURS — e.g., 7am–7pm EST weekdays]
Preferred brief format: Short and direct. 5 bullets max. Lead with the most urgent thing.
Voice rules: [PASTE FROM LINKEDIN SKILL OR DOCUMENT HERE]

### [EA NAME] (Operator)
Role: Executive Assistant / Chief of Staff. They run daily operations, prep communications for founder approval, manage calendar, and are the primary daily user of this system.
Telegram ID: [EA_TELEGRAM_ID]
Working hours: [HOURS]

### Routing Logic

When a message comes from [EA_TELEGRAM_ID]:
- You are in EA mode.
- All drafts must be in [FOUNDER NAME]'s voice — never [EA NAME]'s.
- End every draft with: "Ready to send? Reply 'send' to confirm or give me edits."
- For any decision that affects pricing, client commitments, or relationship direction: escalate to [FOUNDER NAME] with options (see EA9 use case in this SOP, Section 7).
- For tasks that can be completed autonomously (research, briefing prep, document generation): complete them and deliver to EA for review.

When a message comes from [FOUNDER_TELEGRAM_ID]:
- You are in principal mode.
- Execute directly. No preamble.
- Lead with the output, not the plan.
- Assume 30 seconds of attention, not 3 minutes.

### What the EA is Empowered to Trigger

- All Category A–M use cases (pipeline management, communications, documents, content, scheduling, email, Slack, research, files, WhatsApp)
- All Category EA use cases (EA-specific workflows above)
- Morning digest cron (receives output first, forwards summary to founder)
- Pre-call brief preparation
- Checkpoint (end of shift handoff)

### What Requires Founder Confirmation

- Sending any email or WhatsApp message externally
- Booking, moving, or canceling any calendar events
- Generating and sending any proposal or agreement
- Posting to LinkedIn
- Any commitment to pricing, timeline, or scope
- Any response to a complaint or conflict

### Shared Memory Rules

When the EA learns something about a client or prospect that the founder should know persistently, save it to memory with: "Save this to memory: [content]."
When the founder updates a preference or rule, save it to memory: "Remember that I prefer [X]."
Both people contribute to the same memory pool. Either can retrieve it.
```

### agents/comms/CLAUDE.md — EA Additions

Add to the comms agent configuration:

```markdown
## EA Comms Rules

When the EA is drafting on behalf of the founder:
- Every external message draft ends with: "Review and send? Y/edit/cancel"
- Never send anything externally without this confirmation
- Format WhatsApp drafts as conversational text (no bullets, no formatting)
- Format email drafts with proper subject line, body, and signature
- For LinkedIn DMs: professional-casual, never salesy, never exceeds 150 words

Founder voice quick-reference:
- Direct and specific — uses real names, real numbers, real situations
- No em dashes, no AI clichés
- Short paragraphs. One idea per sentence.
- Never: "Hope this finds you well", "I wanted to reach out", "touching base"
- Yes: Gets to the point in sentence 1. Leaves the reader with one clear next step.
```

### agents/ops/CLAUDE.md — EA Additions

Add to the ops agent configuration:

```markdown
## EA Operations Rules

The EA is the primary operator of the pipeline tracking and CRM workflows.

Morning routine (EA triggers at 8:30am):
1. Read all data/prospects/ files
2. Read Google Calendar for the day
3. Check Gmail for overnight priority emails
4. Compile morning brief (see Category EA1 format)
5. Send to EA's Telegram
6. EA forwards condensed version to founder

End-of-day routine (EA triggers before 6pm):
1. Note what was completed today
2. Note what is pending tomorrow
3. Flag anything the founder needs to know
4. Save as a checkpoint

Delegation tracking:
- When the founder or EA creates a delegated task, log it with a due date
- If not marked done 30 minutes before due date, send reminder to both Telegram IDs
- Weekly: surface all open delegated tasks every Monday morning in the digest
```

### data/ea-team/ Folder (New for EA Configuration)

Create this folder in addition to the standard data/ structure:

```
data/ea-team/
├── [ea-name]-profile.md          ← EA working preferences, strengths, context
├── delegation-log.md             ← Running log of delegated tasks + status
└── founder-preferences.md        ← Founder's voice rules, decision patterns, preferences
```

**data/ea-team/[ea-name]-profile.md template:**

```markdown
# [EA NAME] — Profile

## Role
[Title — e.g., Executive Assistant / Chief of Staff]

## Responsibilities
- [Primary duty 1]
- [Primary duty 2]
- [Primary duty 3]

## Working Hours
[Hours and timezone]

## Preferred Telegram Format
[Brief / detailed / bullet points / narrative]

## Strengths
[What the EA handles exceptionally well — informs how to allocate tasks]

## Access Level
- Can trigger: All Category A–M + EA use cases
- Requires founder approval: [List from Section 8 above]

## Notes
[Anything the system should know about how the EA likes to work]
```

---

## SECTION 9: EA DEMO STRATEGY — THE 20-MINUTE DEMO SCRIPT

### Demo Setup

**Environment:** Your own Telegram bot, your own data files (Juan's real data), live on your phone or screen share from laptop.

**Who is watching:** A founder who has an EA, VA, or Chief of Staff. They are skeptical but curious. Their objection will be "my EA won't use this" or "this seems complicated."

**Your goal:** Show 3 real workflows that make the founder say "my EA would love this." Get to "when can we start the audit?" by minute 20.

---

### MINUTE 0–2: Frame the Demo

**Say (verbatim or close):**

> "I'm not going to show you slides. I'm going to show you my actual system, with my actual data, doing things I actually do every day. Your EA would be the one running most of this — I'll show you exactly how."

Pull up Telegram on your phone or laptop.

---

### MINUTE 2–7: The Morning Briefing (Category EA1)

Type in Telegram (or have EA type): "Prep the CEO's morning brief for today."

Show the output arriving in 15–20 seconds. Walk through it:

> "This is what my EA does every morning. Instead of opening Airtable, Gmail, and Google Calendar separately — they type one sentence and get everything in one place. This takes 30 seconds. Used to take 30–45 minutes."

**Pause.** Let the number land.

> "Your EA gets this to you before 9am. You wake up knowing exactly what your day looks like. No context-switching required."

---

### MINUTE 7–13: The Proposal Pipeline (Categories A2 + C1 + I5)

Type: "Brief me on [prospect name] before my 2pm call."

Show the brief arriving. Name, pain, last contact, opening question ready.

> "This is what the pre-call brief looks like. Your EA triggers this 15 minutes before every call. You arrive prepared. You never have to ask the client to remind you what they told you last time."

Then:

Type: "Draft a Pioneer Audit proposal for [prospect name]. Their pain is [real pain point from the brief]."

Show the proposal draft arriving (30–90 seconds). Walk through it briefly.

> "This is a full proposal, in my voice, tailored to their specific situation. Now watch what happens next."

Type: "Generate the PDF and send it to me."

Show the PDF arriving in Telegram via [SEND_FILE:].

> "EA reviews it, sends it directly to the client. What used to take 45 minutes of formatting — 4 minutes total."

---

### MINUTE 13–18: The Inbox + Draft Approval (Categories F1 + EA3)

Type: "Triage the inbox — what needs a response today?"

Show the triage output. Point to the priority flagging.

> "EA runs this at 9am. Instead of me scanning 80 emails, I see the 3 that matter. The rest wait."

Pick one email from the triage output. Type: "Draft a reply to [name] saying [brief direction]."

Show the draft arrive. Point to the confirmation prompt at the bottom.

> "Notice this always ends with 'ready to send, reply to confirm.' Nothing leaves without my approval. My EA reviews it, I tap confirm. The client gets a response that sounds exactly like me — because the system has been learning my voice for months."

---

### MINUTE 18–20: Close

> "What you just saw is what your EA's morning looks like with PVRPOSE AI OS. One Telegram bot. They type natural language. The system does the work. You get your time back.
>
> Your EA doesn't need to be technical. Telegram is the interface — they already know how to use it. Onboarding takes 30 minutes.
>
> We start with a 2-week audit at $2,500 — that's where we map your workflows, identify the 3 highest-ROI automations, and design exactly what we'd build. The $2,500 applies toward the full build if you proceed. Want to start there?"

---

### Demo Objections — Prepared Responses

**"My EA won't adopt this — she's resistant to new tools."**
> "Telegram is the only new thing. Everything else — email, calendar, Slack, proposals — still works the same way. She's not learning a new system. She's getting a shortcut inside a tool she already has on her phone."

**"What if the EA makes a mistake using the system?"**
> "Nothing sends without human approval. The system drafts, your EA reviews, you confirm. The EA cannot send an email, book a meeting, or post to LinkedIn without an explicit confirmation. It is designed for this."

**"Will the AI sound like my boss, or will it obviously be AI?"**
> "That is the core of what I build. The first two weeks of every build is dedicated entirely to learning the founder's voice — their specific phrases, their communication style, what they never say. The system writes in their voice, not generic AI language. James Green, one of my clients, said 'this sounds more like me than my EA does.' That's the goal."

**"This seems expensive for something my EA could learn to do herself."**
> "Your EA could theoretically build this herself — in 60–80 hours. At your EA's time cost, that's $20–40K in time alone, before getting to anything working. We deliver it in 6 weeks and it runs forever. The math is simple."

---

## SECTION 10: PRICING AND OFFER STRUCTURE (EA CONTEXT)

> For complete pricing documentation, see master SOP Section 10. This section covers the 3-tier pricing structure and EA-specific framing.

### 3-Tier Pricing Structure

| | PVRPOSE EA (Tier 1) | PVRPOSE EA Amplify (Tier 2) | PVRPOSE EA Scale (Tier 3) |
|---|---|---|---|
| **Audit/Discovery** | $2,500 pioneer / $5,000-$7,500 standard | $2,500 pioneer / $5,000-$7,500 standard | $7,500 discovery |
| **Build** | $15,000-$20,000 CAD | $18,000-$25,000 CAD | $25,000-$40,000 CAD |
| **Retainer** | From $2,500/month | From $3,000/month | From $5,000/month |
| **Build timeline** | 6 weeks | 6 weeks + EA onboarding Week 3 | 8-12 weeks |
| **Users** | 1 | 2 | 3+ |
| **Agent bots** | Main bot only | Main bot + shared EA access | Dedicated agent bots per role |

### How to Frame Pricing by Tier

**Tier 1 (PVRPOSE EA) -- Solo founder:**

| Pricing | ROI Frame |
|---|---|
| $2,500 audit | "Maps out exactly where you're losing 10-15 hours/week to admin work the AI can handle." |
| $15K-$20K build | "At $200-$500/hr for your time, reclaiming 10-15 hours/week pays this back in 3-6 months." |
| $2,500/month retainer | "Keeps the system optimized as your needs evolve. Less than one billable hour/week." |

**Tier 2 (PVRPOSE EA Amplify) -- Founder + EA:**

| Pricing | ROI Frame |
|---|---|
| $2,500 audit | "Your EA costs more than this per month. This maps out exactly how to make them 3x more productive." |
| $18K-$25K build | "At $63K-$98K/year for your EA (Robert Half 2026), this pays for itself in 3-6 months on output gains alone." |
| $3,000/month retainer | "Less than 1 week of your EA's monthly cost. Keeps the system optimized as your needs evolve." |

**Tier 3 (PVRPOSE EA Scale) -- Agency/firm:**

| Pricing | ROI Frame |
|---|---|
| $7,500 discovery | "Maps every team member's workflow and designs the multi-agent architecture before we build." |
| $25K-$40K build | "Replaces the coordination overhead of scaling -- more throughput without more headcount." |
| $5,000/month retainer | "Dedicated support for a multi-user system. Fraction of one additional hire." |

### What Changes Between Tiers

**Tier 1 to Tier 2 (Amplify) adds:**
- EA onboarding session (30 minutes, Week 3)
- Two-person ALLOWED_CHAT_ID configuration
- Additional agent configurations for EA-specific workflows (ops + comms get extra EA routing logic)
- `data/ea-team/` folder setup and documentation

**Tier 2 to Tier 3 (Scale) adds:**
- Discovery phase replaces audit (deeper workflow mapping across multiple roles)
- Dedicated agent bots per team member or role
- Extended build timeline (8-12 weeks)
- Multi-user access architecture with role-based routing
- Detailed in EA Capability Roadmap

---

## SECTION 11: EA CLIENT QUALIFICATION

> For complete qualification criteria, see master SOP Section 11. This section adds EA-specific qualification gates.

### EA-Specific Qualification Questions

Add these to the discovery call when the founder mentions they have an EA:

1. **"How long has your EA been with you?"**
   Looking for: 6+ months. If shorter, the EA may not have deep enough context to fully leverage the system yet. Still buildable — just note in the brief.

2. **"What does your EA spend most of their time on in a typical week?"**
   Looking for: Inbox management, scheduling, drafting communications, proposal prep, research, calendar management. These are all automatable. If the EA's primary work is physical, in-person, or judgment-heavy, the ROI is lower.

3. **"Is your EA comfortable learning new tools — not technical tools, just apps like Telegram?"**
   Looking for: Any yes. If the EA is actively resistant to all new tools, note this as an implementation risk.

4. **"How do you currently hand off tasks to your EA — verbal, email, shared doc?"**
   Looking for: Any method. This tells you the current delegation pattern — Telegram replaces or supplements it.

5. **"Would your EA be part of the onboarding process?"**
   Looking for: Yes. If the founder wants to keep the EA out of the system setup, this creates a risk — the EA won't adopt what they weren't involved in building.

### EA Qualification Scoring

| Criterion | Green | Yellow | Red |
|---|---|---|---|
| EA tenure | 6+ months | 2–6 months | Under 2 months |
| EA primary tasks | Inbox/calendar/drafting | Mix | Physical/judgment only |
| EA tech comfort | Open to new apps | Neutral | Actively resistant |
| Founder delegation habit | Regular, clear | Occasional | Never delegates |
| EA involved in onboarding? | Yes, enthusiastic | Founder will ask | No — wants to surprise them |

A Green or Yellow score across all criteria: proceed with EA configuration.
A Red on any criterion: note the risk, discuss with founder, consider starting with standard configuration and adding EA layer in month 2.

---

## SECTION 12: THE 6-WEEK BUILD SOP (EA CONFIGURATION)

> For complete 6-week build documentation, see master SOP Section 12. This section covers EA-specific additions only.
>
> **Tier note:** The 6-week timeline applies to Tier 1 (PVRPOSE EA) and Tier 2 (PVRPOSE EA Amplify). Amplify adds EA onboarding at Week 3. Tier 3 (PVRPOSE EA Scale) follows an 8-12 week timeline with extended discovery and multi-agent setup -- see the EA Capability Roadmap for the Scale build SOP.

### Pre-Build Checklist (EA Additions)

In addition to the standard pre-build checklist from master SOP Section 12, add:

- [ ] EA name and role confirmed
- [ ] EA's Telegram ID collected (ask EA to message @userinfobot)
- [ ] EA involved in the discovery call or has a separate 30-minute onboarding scheduled for Week 3
- [ ] Founder has confirmed EA will be onboarded and trained
- [ ] data/ea-team/ folder structure planned

### Week 1–2: AI OS Readiness Audit (EA Additions)

Add to the standard workflow mapping session:

**EA-Specific Discovery Questions:**
- What does the EA do first every morning?
- Where does the EA spend most of their time during the day?
- What does the EA do that requires the founder's involvement (approvals, decisions)?
- What does the EA struggle with most? (usually: "founder doesn't give enough context before calls/meetings")
- What would make the EA's job significantly easier? (usually: "knowing more before I start a task")

Document in `data/[clientname]-ea-workflow-map.md`.

### Week 3: EA Onboarding (New — EA Configuration Only)

**Day 15: EA Onboarding Session (30 minutes)**

Run this with the EA directly. Founder can be present or not.

1. Show the EA the Telegram bot. Send one test message together.
2. Walk through the 5 most common EA trigger phrases for their specific workflow.
3. Show the EA the draft confirmation prompt — "nothing sends without your review."
4. Show the EA how to send a voice note.
5. Demonstrate one full flow: EA triggers morning brief → brief arrives → EA forwards to founder.
6. Answer questions. Schedule a check-in for Day 20.

**Goal:** EA leaves the session feeling confident and in control. They must not feel like the system is watching them or replacing them.

**What to say to the EA:**
> "This system is here to make your work easier and to make you more valuable to [founder's name]. You're still the one who knows the business and the relationships. This just handles the repetitive parts so you can focus on the work that actually requires you."

### Week 4–5: EA-Specific QA Checklist

Add to the standard QA checklist from master SOP Section 12:

- [ ] EA morning briefing cron runs correctly at 8:30am weekdays
- [ ] EA can trigger pre-call brief and receive it within 30 seconds
- [ ] Draft confirmation prompt appears on every external-facing draft
- [ ] Founder approval flow works for email, calendar, LinkedIn, and WhatsApp
- [ ] EA escalation flow (EA9) works correctly — escalation reaches founder's Telegram
- [ ] data/ea-team/ files are created and accessible
- [ ] EA has been through the 30-minute onboarding session
- [ ] EA has successfully completed 5 real workflows without assistance

---

## SECTION 13: POST-DELIVERY SUPPORT (EA CONTEXT)

> For complete post-delivery support documentation, see master SOP Section 13.
>
> **Tier note:** Tiers 1 (PVRPOSE EA) and 2 (PVRPOSE EA Amplify) include 30-day post-delivery support. Tier 3 (PVRPOSE EA Scale) includes 60-day post-delivery support to account for the larger team onboarding and multi-agent stabilization period.

### EA-Specific 30-Day Support Activities (Tiers 1 and 2)

**Week 1 post-delivery:**
- Check in with EA (not just founder) — ask "what is working well and what is confusing?"
- The EA's feedback is more operationally accurate than the founder's — they use the system more
- Adjust CLAUDE.md routing logic based on EA feedback

**Week 2 post-delivery:**
- Review which Category EA use cases the EA is using most
- If the EA is not using the morning briefing cron: investigate and fix (usually a timezone or cron syntax issue)
- If the EA is bypassing the draft confirmation prompt: investigate why (usually the draft quality is low — fix the comms agent config)

**Week 3–4 post-delivery:**
- Identify which use cases from Categories A–M + EA have not been triggered yet
- Run a 30-minute "advanced features" session with EA to unlock unused capabilities
- If applicable: begin scoping Airtable direct API skill for Phase 2

---

## SECTION 14: EA REPLICATION CHECKLIST (PER CLIENT)

> For complete replication checklist, see master SOP Section 14. This section covers EA-specific additions.

When replicating the build for a new EA-configuration client, complete all items from the master SOP replication checklist plus:

### EA Configuration Additions

- [ ] EA name, Telegram ID, and working hours added to root CLAUDE.md
- [ ] ALLOWED_CHAT_ID_2 set in .env with EA's Telegram ID
- [ ] EA routing logic added to root CLAUDE.md (Section 8 template)
- [ ] EA voice and delegation rules added to agents/comms/CLAUDE.md
- [ ] EA operations rules added to agents/ops/CLAUDE.md
- [ ] data/ea-team/ folder created with ea-profile, delegation-log, founder-preferences files
- [ ] Morning briefing cron set to 8:30am weekdays (vs. 7:30am for solo founder)
- [ ] End-of-day summary cron set for 5:30pm weekdays
- [ ] Pre-call brief automated reminder set (15 minutes before all calendar events with external attendees)
- [ ] EA onboarding session scheduled and completed
- [ ] EA has sent 5 test commands and received correct responses
- [ ] Founder approval flow tested for all external-facing outputs

---

## SECTION 15: COMPETITIVE POSITIONING — EA MARKET

### The EA Copilot Market in 2026

**Market size:** The global virtual assistant market is projected at $21–30B by 2030. The EA software augmentation segment (tools specifically for human EAs) is underdeveloped and undifferentiated. No major player has built a custom, voice-aware, founder-specific copilot for EAs.

**Current landscape:**

| Competitor | What They Do | Their EA Angle | Gap PVRPOSE Fills |
|---|---|---|---|
| Microsoft Copilot | Office suite AI integration | Generic summarization | Not built around the founder's voice or workflow |
| Notion AI | Document-level AI in Notion | Page drafting | Not connected to calendar, email, WhatsApp, CRM |
| Superhuman (Grammarly) | AI-enhanced email + writing (40M+ users since Oct 2025 rebrand) | Inbox triage + writing | No calendar, no CRM, no multi-channel, no voice, no founder-specific config |
| Harvey AI | Legal document AI | Replaces junior staff | Not a personal OS, not mobile-first |
| Generic VA agencies | Human EAs + ChatGPT | DIY prompt use | Not custom-configured to a specific founder's voice |
| PVRPOSE AI OS | Custom founder+EA OS | Full stack, voice-aware, mobile-first | **This is the gap** |

### The Positioning White Space

Every competitor either:
1. Replaces the EA (threatening, triggers resistance)
2. Adds AI to a single tool (email, docs, scheduling — but not all three together)
3. Requires the EA to become a "prompt engineer" (friction, adoption failure)

PVRPOSE AI OS EA Superpowers does none of these. It:
- Augments the EA (no threat, triggers advocacy)
- Connects all tools in one Telegram interface (no app-switching)
- Requires zero prompt engineering — natural language commands work from day one
- Is custom-configured to the specific founder's voice — not generic output

**Use this positioning verbatim in competitive conversations:**

> "Everyone else is either replacing assistants or adding AI to one tool at a time. We build a custom operating system that connects everything — inbox, calendar, CRM, documents, communications — and puts it all in a single phone interface that speaks in the founder's exact voice. The EA uses it. The founder benefits from it. Nobody else is doing that."

---

## SECTION 16: ROI FRAMEWORK — EA-SPECIFIC NUMBERS

> For complete ROI framework, see master SOP Section 16. This section covers EA-specific ROI calculations.

### The EA ROI Equation

**Input (what the client is already spending):**
- EA salary: $63K–$98K CAD/year ($5,250–$8,170/month, Robert Half 2026)
- EA time on automatable tasks: 60–80% of their hours
- Automatable hours per week: 24–32 hours (of a 40-hour week)
- Cost of automatable EA time: $3,360–$6,240/month

**Output (what PVRPOSE AI OS delivers):**
- System replaces 60–80% of automatable task time
- EA now handles 2–3x more throughput in the same hours
- Founder reclaims 12–18 hours/week of interrupted strategic time
- Billing recovery: $600–$2,000/day in reclaimed high-value hours (at $300–$500/hr billing rate)

**Build investment payback:**

| Build Cost | Monthly EA Time Saving | Payback Period |
|---|---|---|
| $15,000 | $3,360/month (40% of $8,400) | 4.5 months |
| $20,000 | $4,200/month (50% of $8,400) | 4.8 months |
| $25,000 | $6,240/month (80% of $7,800) | 4.0 months |

**For the demo and discovery call, use this simple version:**

> "You're paying roughly $7,000/month for your EA's time. If the system saves 50% of the tasks that bottleneck her — that's $3,500/month in capacity freed up. At a $20,000 build, you've paid for it in 6 months. Every month after that is pure leverage."

### ROI by Profession (EA Configuration)

**Law Firm (Solo Partner with EA):**
- EA currently spends: 3–4 hours/day on client intake, proposal writing, scheduling, correspondence
- With PVRPOSE AI OS: Same output in 60–90 minutes
- Partner reclaims: 2–3 hours/day
- At $400/hr billing rate: $800–$1,200/day in reclaimed capacity
- Annual reclaimed value: $200K–$300K
- Build cost as % of annual reclaimed value: 5–10%

**CPA Firm (Principal with EA):**
- EA currently spends: 10+ hours/week on client communications, report prep, scheduling
- With PVRPOSE AI OS: Same output in 3–4 hours
- Principal reclaims: 6–8 hours/week
- At $300/hr billing rate: $1,800–$2,400/week in reclaimed capacity
- Build cost payback: Under 2 months at peak billing periods

**Consulting Firm (Principal with EA):**
- EA currently spends: Heavy proposal and client briefing prep (3–5 hours per proposal, 5–10 proposals/month)
- With PVRPOSE AI OS: Same output in 45 minutes per proposal
- EA time freed: 15–40 hours/month
- Principal reclaims: Reduced interruptions, faster client response cycle
- Build cost payback: 3–6 months

**Agency (Owner with EA or Operations Manager):**
- EA/Ops currently spends: Client communication, project briefing, weekly reporting
- With PVRPOSE AI OS: Automated briefing prep, voice-drafted client updates, LinkedIn content pipeline
- Owner reclaims: 10–15 hours/week
- Build cost payback: 4–6 months

---

## SECTION 17: SESSION MANAGEMENT

Identical to master SOP Section 17. No EA-specific changes.

`convolife`, `checkpoint`, `/newchat`, `/respin`, `/stop`, `/model`, `/memory`, `/forget` — all work the same way. The EA can use all of these. The checkpoint function is especially important for EA shift handoffs (see Category EA7).

---

## SECTION 18: EA DAY IN THE LIFE — THE EA'S DAILY USE

This narrative shows what the EA's actual workday looks like with PVRPOSE AI OS. Use as a training script for EA onboarding and for demos when the founder says "show me what my EA would actually do."

### 8:20 AM — EA Starts Their Day

[EA NAME] opens Telegram on their phone before sitting down at their desk. The morning briefing cron already ran at 8:30am. They have a full pipeline summary, calendar overview, and inbox priority list waiting.

They forward a condensed version to the founder: "Morning. Your priority today: Schacter follow-up by 10am, George agreement overdue, Michael call at 2pm. Inbox: 2 things need your attention. Brief is ready."

Founder responds: "Got it."

Total time for EA: 2 minutes to scan and forward. No Airtable, no Gmail, no Calendar opened separately.

### 9:15 AM — Inbox Triage

EA sends: "Triage the CEO's inbox for the last 24 hours."

System returns priority grouping. EA spots Nathalie's email asking for a 2-week extension on the agreement.

EA sends: "Draft a reply to Nathalie's extension request. Keep it professional. Suggest we still target her original date but offer a call to discuss."

Draft arrives in 20 seconds. EA reads it. Sounds exactly like the founder. EA forwards to founder: "Nathalie wants an extension. Here's the draft — looks good to me. Confirm?"

Founder: "Send it."

EA sends from founder's Gmail.

Total time for EA: 4 minutes. Old process: EA writes the draft (15 min), sends to founder for review (delays), founder edits (10 min), sends back to EA to send (more delays).

### 11:30 AM — Pre-Call Brief Preparation

George Mills call is at 2pm. EA sends at 1:45pm: "Prep the CEO's brief for the 2pm George Mills call."

Brief arrives in 25 seconds. EA reviews it — accurate, sharp, has the right opening question.

EA sends to founder's Telegram: "George brief ready. Main angle: weekend admin pain. Opening Q is in there."

Founder: "Thanks. On it."

Total time for EA: 90 seconds.

### 1:15 PM — Proposal Generation

EA sends: "Draft the Pioneer Audit proposal for Michael Schacter. Pain: proposals take 3–4 hours each. Emphasize data security — he's a lawyer."

Proposal arrives in 90 seconds. EA reads through. Accurate, professional, sounds like the founder.

EA sends: "Generate the PDF and send it to me."

PDF arrives via [SEND_FILE:]. EA opens it, confirms formatting is clean, forwards to Michael via email with: "Here's the proposal we discussed. Let me know if you have any questions."

Total time for EA: 8 minutes. Old time: 45–60 minutes of drafting, formatting, and back-and-forth with founder.

### 3:30 PM — Content Creation

Founder sent a 60-second voice note after their last call: "I want to do a LinkedIn post about the Schacter meeting. He told me he spends 36 hours a month on proposals. Write something around that."

EA sends the voice note to the bot: "Turn this into a LinkedIn post."

System transcribes, formats, delivers a complete post in founder's voice with hook, body, and CTA.

EA reads it. Tight, specific, no AI clichés. Sends to founder: "LinkedIn post ready. Strong hook. Want me to post it or any changes?"

Founder: "Post it."

EA posts.

Total time for EA: 5 minutes. Old time: 30–45 minutes of drafting and editing.

### 5:30 PM — End-of-Day Handoff

EA sends: "Handoff notes for today."

System produces the structured summary (Category EA7 format). EA reviews, adds one note ("Michael Schacter expected to respond by tomorrow morning — watch inbox at 9am"), and saves.

EA sends a one-line Telegram to founder: "Day wrapped. Nathalie reply sent, Schacter proposal delivered, George still needs to sign. Full notes saved."

Founder: "Good work. See you tomorrow."

Total time: 3 minutes.

---

## SECTION 19: PRIORITY SEQUENCING (EA CONFIGURATION)

> For complete priority sequencing, see master SOP Section 19. This section covers EA-specific sequencing.

### Tier 1 — Critical (First Week — EA Configuration)

In addition to the standard Tier 1 items from master SOP Section 19:

1. **Add EA's Telegram ID to ALLOWED_CHAT_ID_2 in .env** — without this, the EA cannot use the system at all.

2. **Add EA routing logic to root CLAUDE.md** — without this, the system does not know how to behave differently for EA vs. founder messages.

3. **Run EA onboarding session** (30 minutes) — without this, the EA will not use the system and the build will fail on adoption.

4. **Set up morning briefing cron at 8:30am** (EA-triggered):
```bash
node dist/schedule-cli.js create "Read data/prospects/ and give me a morning pipeline summary: who needs follow-up today, who responded overnight, what is my priority action. Format for EA handoff to CEO." "30 8 * * 1-5"
```

### Tier 2 — High Impact (Week 2 — EA Configuration)

In addition to standard Tier 2 items:

5. **Create data/ea-team/ folder with all three files** (ea-profile, delegation-log, founder-preferences).

6. **Set up pre-call brief automation** — automatic reminder 15 minutes before all external calendar events:
```bash
node dist/schedule-cli.js create "Check Google Calendar for the next 30 minutes. If there is an external meeting starting soon, prep a 2-minute brief for the CEO from the relevant prospect or client file and send it." "*/15 7-18 * * 1-5"
```

7. **Configure comms agent with EA-specific confirmation prompt** — all external drafts must end with the approval prompt.

### Tier 3 — Valuable (Week 3–4 — EA Configuration)

In addition to standard Tier 3 items:

8. **Set up end-of-day handoff cron at 5:30pm**:
```bash
node dist/schedule-cli.js create "Generate an EA end-of-day handoff: what was completed today, what is pending tomorrow, what the CEO needs to know. Save to data/ea-team/delegation-log.md and send to EA Telegram." "30 17 * * 1-5"
```

9. **Dedicated EA agent bot** (Option B from Section 3) — EA gets their own bot using `COMMS_BOT_TOKEN` connected to the comms agent.

---

## SECTION 20: MULTI-AGENT ARCHITECTURE FOR EA TEAMS

> For complete multi-agent documentation, see master SOP Section 20.

### EA-Optimized Agent Routing

In the EA configuration, the four agents are used differently than in the solo founder configuration:

| Agent | Solo Founder Use | EA Configuration Use |
|---|---|---|
| **comms** | Founder drafts their own outreach | EA is the primary user. All outreach drafted here, delivered to EA for founder approval. |
| **ops** | Founder tracks their own pipeline | EA runs morning briefings, pre-call preps, delegation tracking. Founder reads the output. |
| **content** | Founder generates their own content | EA triggers content creation from founder voice notes. Founder approves and posts. |
| **research** | Founder requests research | EA requests research for pre-meeting briefings. Founder receives the output. |

### Recommended Agent Setup for EA Clients

**Phase 1 (Pioneer Build):**
- Main bot only
- EA and founder share the same TELEGRAM_BOT_TOKEN
- EA routing handled by CLAUDE.md logic

**Phase 2 (Retainer — Month 2+):**
- EA gets dedicated comms agent bot (COMMS_BOT_TOKEN)
- Founder keeps main bot
- EA uses comms agent for all drafting
- Founder uses main bot for briefings and approvals

This separation creates cleaner context, better memory organization, and prevents conversation pollution between EA operational tasks and founder strategic queries.

---

## SECTION 21: VOICE PIPELINE (EA CONTEXT)

> For complete voice pipeline documentation, see master SOP Section 21.

### EA Voice Note Workflow

The EA's most powerful tool is the voice note. In practice, EAs use voice more than text because they are often moving between tasks.

**EA voice note patterns:**
- "Brief me on [client] before the 2pm call" (hands-free, walking to a meeting)
- "Draft a follow-up to [name], keep it short, we need a response by Friday" (between calls)
- "Schacter just confirmed the audit. Mark him as active, next step is agreement. Note that he starts April 1." (immediately after a call)
- "The CEO wants to reschedule Thursday's call with James to Monday 11am" (while taking a message)

All voice notes are transcribed by Groq Whisper in 1–2 seconds. Claude receives the transcription prefixed with `[Voice transcribed]:` and acts on it as a text command.

**TTS for EA:** Most EAs prefer text output, not voice replies. The ElevenLabs voice cloning (founder's voice) is primarily for the founder's own briefings while driving. Configure in CLAUDE.md:

```markdown
## Voice Output Rules

When message comes from [FOUNDER_TELEGRAM_ID]: Voice replies enabled for briefings and summaries.
When message comes from [EA_TELEGRAM_ID]: Text replies only (EA needs to read and review output, not hear it).
```

---

## SECTION 22: WHATSAPP BRIDGE (EA CONTEXT)

> For complete WhatsApp bridge documentation, see master SOP Section 22.

### EA WhatsApp Workflow

In the EA configuration, the WhatsApp bridge has an important two-person dynamic:

**The EA uses the system to:**
- Check what WhatsApp messages came in that need the founder's attention (WA1)
- Draft WhatsApp responses in the founder's voice for founder approval (WA2)
- Review the conversation history with a specific contact before a call (WA3)

**The founder does NOT:**
- Review raw WhatsApp manually — the EA triages first
- Draft their own WhatsApp messages — the EA drafts, founder approves
- Miss WhatsApp messages — the EA's morning triage catches everything

**CASL compliance note (Quebec/Canada):** All WhatsApp outreach drafts are queued, reviewed by EA, confirmed by founder before sending. No automated outbound WhatsApp. This is by design — it protects the client from CASL violations and keeps the human judgment layer intact. See master SOP Section 26 for full compliance documentation.

---

## SECTION 23: WEB DASHBOARD (EA ACCESS)

> For complete dashboard documentation, see master SOP Section 23.

### EA Dashboard Access

The web dashboard (`localhost:3141` or via Cloudflare Tunnel) is useful for the EA to:
- Monitor system health without SSH access
- View scheduled tasks (morning briefings, end-of-day crons, pre-call reminders)
- Check token usage and conversation history
- Verify that automations ran correctly (morning brief at 8:30am — did it send?)

**EA access:** Provide the DASHBOARD_TOKEN to the EA so they can access the dashboard remotely via Cloudflare Tunnel. They do not need server access.

**Founder access:** Optional. Most founders never need the dashboard. If they ask, give them the URL and token.

---

## SECTION 24: OBSIDIAN INTEGRATION (EA SHARED VAULT)

> For complete Obsidian integration documentation, see master SOP Section 24.

### EA Shared Vault Configuration

In the EA configuration, the Obsidian vault can serve as a shared workspace between the founder and EA.

**Recommended folder structure for EA teams:**
```
[Obsidian Vault]/
├── Inbox/                    ← Both can add tasks here
├── Client Work/              ← Active client notes (EA primary)
├── Meetings/                 ← Pre-call briefs and post-call notes
├── Content/                  ← LinkedIn drafts, YouTube scripts
├── Daily Notes/              ← Founder's personal notes (read-only for EA)
└── EA Operations/            ← EA-specific task tracking and handoffs
```

**Agent vault ownership in EA configuration:**
- `agents/comms/agent.yaml`: Obsidian `Inbox/` and `Client Work/`
- `agents/ops/agent.yaml`: Obsidian `EA Operations/` and `Meetings/`
- `agents/content/agent.yaml`: Obsidian `Content/`
- `agents/research/agent.yaml`: Obsidian `Client Work/` (read-only)

---

## SECTION 25: FILE HANDLING — EA WORKFLOWS

> For complete file handling documentation, see master SOP Section 25.

### EA File Workflows

**Documents the EA sends to the system:**
- Signed agreements (photo or PDF) → "Save this signed agreement from George to his client file"
- Client intake forms (PDF) → "Extract the key details from this intake form and update Andrea's prospect file"
- Founder's handwritten notes (photo) → "Transcribe these whiteboard notes from today's strategy session"
- Competitor research PDFs → "Summarize this report and identify what's relevant to our positioning"

**Documents the system sends to the EA:**
- Proposals (PDF via [SEND_FILE:]) → EA forwards to client
- Agreements (PDF via [SEND_FILE:]) → EA forwards to client for signature
- Research briefings (PDF or .md via [SEND_FILE:]) → EA reviews, sends to founder
- LinkedIn posts (saved to content/ folder) → EA reviews, sends to founder for approval

**EA file management rule:** All outbound files go through EA review before reaching clients or the founder. The system creates and delivers to EA's Telegram. EA is the quality gate.

---

## SECTION 26: COMPLIANCE — CASL, PIPEDA, QUEBEC LAW 25 (EA CONTEXT)

> For complete compliance documentation, see master SOP Section 26.

### EA-Specific Compliance Notes

**CASL (EA Outreach):**
The EA is often the one who sends outreach messages. All outreach drafted by the system and sent via EA must:
- Have explicit or implied consent from the recipient (see master SOP Section 26 for consent definitions)
- Include an identification block (sender name, company, contact info)
- Include an unsubscribe mechanism for commercial messages
- Never send automatically — EA must confirm before send

**PIPEDA (Two-Person Access):**
When the EA has access to the PVRPOSE AI OS (ALLOWED_CHAT_ID_2), they have access to client and prospect data stored in:
- data/prospects/ (prospect profiles, contact history)
- data/clients/ (client project details)
- store/claudeclaw.db (conversation history, memory)
- Gmail (founder's inbox via OAuth)

This constitutes data access under PIPEDA. Ensure:
- EA has signed a confidentiality agreement
- EA access is limited to authorized Telegram ID only
- Access can be revoked immediately by removing ALLOWED_CHAT_ID_2 from .env

**Quebec Law 25:**
Same as PIPEDA but with higher penalties. The EA's access to personal information (prospect and client data) must be documented in the client's privacy governance records.

---

## SECTION 27: COMPLETE .ENV REFERENCE (EA ADDITIONS)

> For complete .env reference, see master SOP Section 27. This section covers EA-specific additions only.

### EA Configuration Keys

| Key | What It Is | Required? |
|---|---|---|
| `ALLOWED_CHAT_ID_2` | EA's Telegram user ID | Required for EA access |
| `COMMS_BOT_TOKEN` | Dedicated Telegram bot for EA comms agent | Optional (Phase 2) |
| `EA_NAME` | EA's name (used in routing logic and briefings) | Recommended |
| `EA_WORKING_HOURS` | EA's working hours (e.g., "8am-6pm EST weekdays") | Optional |

### How to Get ALLOWED_CHAT_ID_2

Ask the EA to message @userinfobot on Telegram. The bot returns their numeric Telegram user ID. Paste this value as ALLOWED_CHAT_ID_2 in .env.

---

## SECTION 28: SYSTEM HEALTH AND STARTUP (EA CONFIGURATION)

> For complete system health documentation, see master SOP Section 28.

### EA-Specific Health Checks

In addition to the standard health checks from master SOP Section 28:

- [ ] EA can send a test message and receive a response
- [ ] EA Telegram ID is listed in ALLOWED_CHAT_ID_2
- [ ] Morning briefing cron ran today at 8:30am (check via web dashboard or `node dist/schedule-cli.js list`)
- [ ] End-of-day cron is scheduled and confirmed
- [ ] Pre-call brief automation is scheduled and confirmed
- [ ] data/ea-team/ folder exists and all three files are populated

### What to Do If the EA Says "The Bot Stopped Responding"

Most common causes:
1. The EA's Telegram ID was not added to ALLOWED_CHAT_ID_2 (check .env)
2. The CONTEXT_LIMIT was hit during a long session (/newchat to reset)
3. The server went down (check `pm2 status pvrpose-ai-os` on the VPS)
4. The ANTHROPIC_API_KEY hit its rate limit (check console.anthropic.com)

The EA should never need server access to resolve these. The founder or Juan handles server-level issues.

---

## SECTION 29: EA SKILLS SETUP REPLICATION CHECKLIST

> For complete skills setup replication checklist, see master SOP Section 29. This section covers EA-specific skill setup.

### Per-Client EA Skills Setup

In addition to the standard skills setup from master SOP Section 29:

- [ ] Gmail OAuth configured for founder's account (EA reads and drafts — founder's credentials, not EA's)
- [ ] Google Calendar OAuth configured for founder's calendar (EA manages — founder's credentials)
- [ ] Slack xoxp- token configured for founder's Slack workspace (EA monitors — founder's token)
- [ ] Timezone skill confirmed updated for client's timezone (Montreal/Toronto for Quebec clients)
- [ ] Gemini API key confirmed in .env (EA sends videos/voice notes for transcription)
- [ ] LinkedIn skill confirmed active in ~/.claude/skills/linkedin/SKILL.md with client's voice rules
- [ ] WhatsApp bridge enabled if client uses WhatsApp significantly (WHATSAPP_ENABLED=true)
- [ ] EA onboarding session completed and documented
- [ ] All Category EA use cases tested with EA in the seat

---

## SECTION 30: KNOWN ISSUES AND STATUS (EA CONFIGURATION)

> For complete known issues documentation, see master SOP Section 30.

### EA Configuration — Open Items

**Issue EA-1: ALLOWED_CHAT_ID_2 not in default .env.example**
File: .env.example
Problem: The second chat ID variable for EA access is not in the example file.
Fix: Add `ALLOWED_CHAT_ID_2=` with a comment explaining EA access.
Priority: Low — manual workaround is trivial.
Status: Open.

**Issue EA-2: No native role-based routing in core bot.ts**
File: src/bot.ts
Problem: The bot does not natively differentiate between ALLOWED_CHAT_ID and ALLOWED_CHAT_ID_2. Role differentiation is currently handled entirely through CLAUDE.md instructions.
Fix: CLAUDE.md routing logic is the correct approach for now. A future version could add Telegram ID-based context injection in bot.ts.
Priority: Low — CLAUDE.md routing works reliably.
Status: By design for Pioneer phase. May be revisited in a retainer optimization.

**Issue EA-3: Pre-call brief automation may trigger for internal meetings**
File: Scheduled cron (Section 19)
Problem: The 15-minute pre-call automation triggers for ALL calendar events, including internal calls with no external prospect.
Fix: Add filtering logic: "Only prep a brief if the event has external attendees (non-@[clientdomain].com emails)."
Priority: Medium — produces unnecessary alerts for internal meetings.
Status: Open. Workaround: Add this filtering instruction to the cron prompt.

**Issue EA-4: Google Calendar timezone needs update before EA deployment**
File: skills/google-calendar/SKILL.md
Problem: Default timezone is America/New_York (from master SOP Issue 2). For Quebec EA deployments, this creates wrong times.
Fix: Change to America/Toronto.
Priority: Medium for Quebec clients.
Status: Open (same as master SOP Issue 2 -- fix both at the same time).

**Issue EA-5: Missing integrations for full EA workflow coverage**
File: specs/todo/EA-CAPABILITY-ROADMAP.md
Problem: Several capabilities referenced in EA use cases (CRM pipelines, Google Drive content delivery, client dashboards, PDF generation, image generation) are not yet built. See the EA Capability Roadmap for the full prioritized build plan.
Priority: Tracked per-item in the roadmap. Top 4 priorities: Client Dashboard upgrade, Team Coordination system, Google Drive integration, Content Generation pipeline.
Status: Roadmap created 2026-03-12. Builds will be executed in phases.

---

## VERSION FOOTER

```
PVRPOSE AI OS EA SUPERPOWERS SOP
Version: v1.2
Date: March 2026
Parent Document: PVRPOSE_AI_OS_BLUEPRINT_SOP.md v3.0
Author: Juan Gonzalez, PVRPOSE AI — Montreal

This document is an additive configuration layer on top of the master SOP.
It does not replace, override, or supersede any section of the master SOP.
When conflict exists, the master SOP wins.

v1.2 changelog (2026-03-12):
- Architecture: Introduced 3-tier product naming -- PVRPOSE EA (Tier 1), PVRPOSE EA Amplify (Tier 2), PVRPOSE EA Scale (Tier 3)
- Updated: Section 1 -- full tier definitions, scope clarification (this SOP covers Tiers 1-2, Scale in roadmap)
- Updated: Section 2 -- "Two Doors" replaced with "Three Tiers" positioning table
- Updated: Section 10 -- complete 3-tier pricing structure with per-tier ROI framing
- Updated: Section 12 -- tier notes for build timelines (6 weeks for Tiers 1-2, 8-12 weeks for Scale)
- Updated: Section 13 -- tier-differentiated support (30-day for Tiers 1-2, 60-day for Scale)
- Clarified: "EA Superpowers" is the marketing frame for what AI gives an EA, not the product name
- Enforced: EA salary $63K-$98K CAD (Robert Half 2026), payback 3-6 months, 3x multiplier, up to 60% automation (McKinsey)

v1.1 changelog (2026-03-12):
- Fixed: All "Category N" references renamed to "Category EA" (N9->EA9, N3->EA3, A-N->A-M+EA)
- Fixed: EA salary range $40K-$94K -> $63K-$98K CAD (Robert Half 2026) in Section 1
- Added: EA11-EA25 cross-reference table in Section 7 (was missing -- only EA1-EA10 were detailed)
- Added: Issue EA-5 in Section 30 -- links to EA-CAPABILITY-ROADMAP.md for missing integrations
- Updated: TOC and section headers to reflect correct category naming
- Aligned: All figures match verified claim standards from capability audit

Next review: After first 3 EA configuration client builds.
Update trigger: Any change to multi-user access architecture, EA workflow patterns, or EA-specific pricing decisions.
```
