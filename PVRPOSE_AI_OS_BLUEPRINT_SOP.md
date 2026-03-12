# PVRPOSE AI OS -- Blueprint and Standard Operating Procedures
## Build Once. Demo. Replicate for Clients.

**Author:** Juan Gonzalez, PVRPOSE AI -- Montreal
**Version:** v3.0 | March 2026
**Status:** Internal SOP -- Not for distribution
**Source of truth for:** system architecture, capability inventory, business cases, build SOP, pricing, compliance

---

## SECTION 1: WHAT THIS DOCUMENT IS AND HOW TO USE IT

This is the single definitive reference for PVRPOSE AI OS. Everything is in here. There are no companion documents required to use this SOP -- the business cases, technical specs, pricing, compliance notes, skill references, and build checklists are all integrated into one document.

Three audiences, one document:

**Juan (owner and primary operator):** Sections 2-6 are your strategic foundation. Sections 7-26 are your operational reference. Use Section 18 (Day in the Life) and Section 17 (Session Management) daily. Use Section 19 (Priority Sequencing) to decide what to build next.

**Junior engineer or future contractor:** Start with Section 3 (what the system is), Section 8 (architecture), and Section 12 (6-Week Build SOP). The skills reference in Section 5 and the .env reference in Section 27 cover every configuration decision.

**Client (during onboarding):** Sections 9 (Demo Strategy), 16 (ROI Framework), and 18 (Day in the Life) are the most relevant. Do not hand them the full document -- excerpt what applies.

How to navigate: Use the section numbers. Every section is standalone. If you need the Airtable data flow, go to Section 6. If you need the business case for a specific use, go to Section 7. If something is broken, go to Section 30.

---

## SECTION 2: EXECUTIVE STRATEGY -- THE WHY

### The Problem PVRPOSE AI Solves

Professional service founders -- lawyers, CPAs, consultants, agency owners, construction firm owners -- spend 30-50% of their working week on admin that generates zero revenue. Not by choice. By default.

The cause is structural:
- Their tools (CRM, email, calendar, billing) are siloed. No tool talks to another without manual bridging.
- Generic AI tools (ChatGPT, Gemini, Claude.ai) are stateless -- they know nothing about this specific founder's voice, their clients, their pricing, their open deals. Every session starts from zero.
- Hiring a real EA costs $60,000-$90,000 CAD per year plus overhead, benefits, and management time.
- Automation agencies build n8n and Zapier workflows that are brittle, require maintenance, and give the founder no intelligent conversational interface.

The result: a founder billing $250-500/hour spends Monday morning doing things a $25/hour admin could do. They do not want to hire and manage an admin. They want the time back.

PVRPOSE AI OS gives the founder an intelligent personal operating system that runs from their phone, knows their business, and acts in their voice.

### Market Timing -- Why This Works in 2026

Three things converged that make this viable now and not two years ago:

**Claude 3.5/4.x quality.** Claude's ability to maintain context, follow complex instructions, and produce on-brand output improved enough to be trusted with client-facing drafts. Earlier models required too much editing to be worth the friction.

**1 million token context window.** The system holds an entire client history, all prospect files, all templates, and the owner's complete business context in a single conversation. Competing tools run out of context constantly.

**Telegram adoption.** Telegram crossed 950 million users in 2024. For professional services founders in Quebec and Ontario, it is already their default for client communication. The interface friction is zero.

The window is 18-24 months before Microsoft Copilot, Google Workspace AI, or a well-funded startup commoditizes this for SMBs. First-mover advantage is real but not permanent.

### Juan's Competitive Moat

Juan does not sell technology. He sells a configured outcome. The moat has three layers:

**Layer 1 -- Domain expertise baked into the config.** Juan's CLAUDE.md encodes 15+ years of sales, legal, compliance, and operations knowledge. A client cannot replicate this by cloning the repo. The configuration is the product.

**Layer 2 -- Implementation that actually works.** Getting ClaudeClaw from zero to "running my business" takes 40-80 hours of skilled configuration. Skills setup, agent tuning, data file creation, voice calibration, compliance review. Juan does this work. The client cannot do it themselves.

**Layer 3 -- Ongoing optimization.** The system gets smarter every month when the retainer relationship is active. A static n8n workflow built by a freelancer does not. The more Juan works with a client, the harder it is for a competitor to replace him.

### North Star Vision

**18 months:** PVRPOSE AI OS is the standard operating system for solo and small-team professional services founders in Quebec and Ontario who want to run a $500K-$1M practice from their phone.

**36 months:** PVRPOSE AI OS is a replicable deployment system that Juan licenses to a small network of trained AI integrators in Canada, each deploying to their own vertical (legal, accounting, construction, agencies).

The goal is not a SaaS product. The goal is to become the best in the world at one specific thing: turning a professional service founder's business context into a private AI operating system that saves 10-15 hours per week, then building a high-margin practice doing it for 20-30 clients per year.

---

## SECTION 3: WHAT PVRPOSE AI OS IS -- TECHNICALLY HONEST

### What It Actually Is

PVRPOSE AI OS is a configured instance of ClaudeClaw -- an open-source Telegram bot framework that connects Claude AI (by Anthropic) to a private server via a Telegram interface.

The system has four layers:

```
PHONE (Telegram) --> BOT LAYER (ClaudeClaw) --> CLAUDE AI ENGINE --> CLIENT'S BUSINESS CONTEXT
```

**Layer 1 -- Phone Interface (Telegram)**
The owner sends voice notes, text, or files via Telegram on their phone. No app to install beyond Telegram, which most people already have.

**Layer 2 -- Bot Layer (ClaudeClaw)**
Receives the message, authenticates the user, routes it to Claude. Handles file attachments, voice transcription, scheduled tasks, and memory. Runs on a private VPS or the client's own machine -- their infrastructure, their data.

**Layer 3 -- Claude AI Engine**
Anthropic's Claude processes the request using the client's full business context. This is what makes it intelligent -- not a generic chatbot but a configured AI that knows the client's workflows, voice, pricing, clients, and preferences.

**Layer 4 -- Business Context Layer (CLAUDE.md)**
The most important layer. A configuration file that tells Claude who the client is and what they do, their communication voice and style, their tools and CRM, their pricing and workflows, their agents (comms, content, ops, research), and their data files (prospects, templates, SOPs). The smarter the CLAUDE.md, the more powerful the system.

### What It Can Do Right Now (All 28 Confirmed Features)

- Voice notes in via Groq Whisper STT -- instant transcription and action
- Voice replies back via ElevenLabs or Gradium TTS in the owner's cloned voice
- Video analysis via Gemini (gemini-api-dev skill, GOOGLE_API_KEY confirmed in .env)
- Prospect and client briefings from stored profile files
- Outreach message drafting (WhatsApp and email) in the owner's voice
- Proposal drafting saved to file, sent as PDF via Telegram
- LinkedIn post creation from voice note, text prompt, or video (linkedin skill)
- Discovery call preparation from prospect files
- Pipeline status queries and morning digest
- Cross-session memory (checkpoint command and automatic semantic memory)
- Scheduled morning digest and reminders via cron scheduler
- Gmail inbox read, triage, reply, and send (gmail skill)
- Google Calendar check, book, update, and cancel (google-calendar skill)
- Slack read, message, and thread reply (slack skill)
- Timezone dashboard showing team and client times (timezone skill)
- WhatsApp bridge -- incoming message awareness and outbox queue (src/whatsapp.ts)
- Multi-agent routing -- comms, content, ops, research agents with own CLAUDE.md
- HiveMind shared memory table -- cross-agent action log in SQLite
- Cron scheduler per agent (schedule-cli.js)
- Web dashboard with real-time SSE (Hono, Cloudflare Tunnel)
- File send to bot (images, PDFs, documents, video notes -- Claude analyzes)
- File receive from bot ([SEND_FILE:] and [SEND_PHOTO:] markers)
- SQLite memory with semantic/episodic decay and salience scoring
- Obsidian task auto-injection per agent (src/obsidian.ts)
- /respin, /newchat, /stop, /model (opus/sonnet/haiku), /memory, /forget, /dashboard commands
- convolife and checkpoint natural language commands
- agent-create.sh for spinning new agents interactively
- EA-handoff, EA-pickup, EA-plan, EA-build, EA-prime Claude Code commands

### What It Cannot Do (Be Honest With Clients)

- Auto-send emails or WhatsApp messages without human approval -- drafts only, human approves and sends
- Pull live CRM data without a direct API skill -- Airtable direct API skill is needed separately (see Section 6)
- Multi-user support -- one owner, one instance per deployment, not a SaaS product
- Enterprise compliance audit logging -- not production-ready for regulated industries requiring full audit trails
- Guaranteed uptime SLA -- runs on private infrastructure, VPS reliability applies
- Replace a human EA entirely -- it handles drafting, briefing, research, and scheduling, not judgment calls that require relationship context

---

## SECTION 4: COMPLETE CAPABILITY INVENTORY -- ALL 28 FEATURES

Organized by function. Every feature listed is confirmed active in the current codebase.

### Voice and Media

| Feature | How It Works | Status |
|---|---|---|
| Voice note transcription (STT) | Groq Whisper API via src/media.ts. Record a voice note in Telegram, get a response in 15-30 seconds. | Active -- GROQ_API_KEY in .env |
| Voice reply (TTS) | ElevenLabs (primary) or Gradium AI (free tier). Claude's response is converted to audio in the owner's cloned voice. | Active -- ELEVENLABS keys in .env |
| Video analysis | Gemini receives the video via gemini-api-dev skill. Transcribes speech, reads visual content. | Active -- GOOGLE_API_KEY in .env |
| Video note (Telegram round video) | Same pipeline as video -- treated as video note, Gemini analyzes. | Active |
| Image/photo analysis | Claude receives photos via bot.ts image handler. Can read documents, whiteboards, handwritten notes. | Active |
| File attachment analysis | PDFs, Word docs, text files sent to Telegram -- Claude reads and processes. | Active |

### Communication Interface

| Feature | How It Works | Status |
|---|---|---|
| Telegram text messaging | Primary interface. Send text, receive response. | Active |
| WhatsApp bridge | src/whatsapp.ts -- QR code scan links WhatsApp. Incoming messages saved to SQLite. Outbox queue for approved sends. | Active -- enable WHATSAPP_ENABLED=true |
| File delivery to phone | [SEND_FILE:/path/file.pdf] and [SEND_PHOTO:/path/image.png] markers in Claude's response. Bot strips markers and delivers files as Telegram attachments. | Active |

### Memory and Session Management

| Feature | How It Works | Status |
|---|---|---|
| Semantic memory | "I prefer...", "I always...", "remember..." phrases trigger automatic storage in SQLite memories table. Survives /newchat. | Active |
| Episodic memory | Notable session events stored automatically. Decay via daily salience sweep. | Active |
| checkpoint command | Natural language. Claude saves a 3-5 bullet TLDR of the session to SQLite. Survives /newchat. | Active |
| convolife command | Natural language. Claude queries SQLite token_usage table and reports context %, turns, cost. | Active |
| /memory command | Returns all stored memories from the database. | Active |
| /forget command | Deletes memories matching the specified description. | Active |
| HiveMind table | SQLite hive_mind table logs every agent action across sessions. | Active |

### Session Commands

| Command | What It Does |
|---|---|
| /newchat | Clears conversation history. Starts fresh with CLAUDE.md context. Persisted memories survive. |
| /respin | Regenerates the last Claude response. Gets a different take on the same request. |
| /stop | Cancels the current Claude operation. |
| /model opus | Switches to claude-opus-4-6. Most capable, highest cost. |
| /model sonnet | Switches to claude-sonnet-4-6. Default. Best cost/quality ratio. |
| /model haiku | Switches to claude-haiku-4-5-20251001. Fastest, cheapest, simple tasks only. |
| /dashboard | Opens or shows the link to the web dashboard. |

### Scheduling

| Feature | How It Works | Status |
|---|---|---|
| Cron scheduler | schedule-cli.js manages tasks stored in SQLite scheduled_tasks table. Runs on the server. | Active |
| Per-agent scheduling | Each agent can have its own scheduled tasks independent of others. | Active |
| Morning digest | Standard cron task -- reads prospects, calendar, surfaces priorities. | Active once configured |

### Integrations and Skills

| Skill | Location | Triggers |
|---|---|---|
| gmail | skills/gmail/SKILL.md | "check my email", "read inbox", "draft reply", "send email" |
| google-calendar | skills/google-calendar/SKILL.md | "what's on my calendar", "book a call", "am I free", "reschedule" |
| slack | skills/slack/SKILL.md | "check my Slack", "message [name] on Slack", "what's in #channel" |
| timezone | skills/timezone/SKILL.md | "what time is it in", "timezone", "team times", "working hours" |
| gemini-api-dev | ~/.claude/skills/gemini-api-dev/SKILL.md | Any video sent to Telegram; "analyze this video" |
| linkedin | ~/.claude/skills/linkedin/SKILL.md | "LinkedIn post", "write a post", "draft for LinkedIn", "turn this into LinkedIn" |

### Infrastructure and Operations

| Feature | How It Works | Status |
|---|---|---|
| Web dashboard | Hono server on port 3141. Shows conversation history, memory stats, token costs, scheduled tasks, agent activity, real-time SSE. | Active -- set DASHBOARD_TOKEN in .env |
| Cloudflare Tunnel | Exposes local dashboard to a public URL. Remote access from any device. | Active -- cloudflared command |
| Obsidian integration | src/obsidian.ts scans vault folders for unchecked tasks, injects as context per agent. | Active -- configure in agent.yaml |
| agent-create.sh | Interactive script. Creates new agent from template, creates Telegram bot, saves token, builds project. | Active |
| Multi-agent system | Each agent has own CLAUDE.md, agent.yaml, optional dedicated Telegram bot token. | Active |

---

## SECTION 5: COMPLETE SKILLS REFERENCE

### SKILL 1: Gmail

**File:** skills/gmail/SKILL.md
**Global or project:** Project-level
**Triggers:** "check my email", "read my inbox", "reply to [name]", "send an email", "draft email to", "what needs a response"
**Requires:** Google OAuth credentials -- ~/.config/gmail/credentials.json and token.json. Keys in .env: GOOGLE_CREDS_PATH and GMAIL_TOKEN_PATH.

**What it does:**
- Lists full inbox grouped by thread, sorted by unread count
- Reads full email content by message ID
- Drafts and sends replies (always shows draft before sending -- non-negotiable)
- Sends new emails with or without file attachments
- Moves emails to labels (creates label if it does not exist)
- Creates Gmail filters for auto-sorting

**Business cases:**
- "Check my email and tell me what needs a response today" -- inbox triage in 30 seconds vs 20-30 minutes of manual scanning
- "Read the email from George Mills" -- read specific emails without switching apps
- "Draft a reply to Nathalie confirming the audit call Thursday at 10am" -- reply drafting in Juan's voice, shown for approval before sending
- "Send the Schacter proposal PDF to michael@example.com with the standard proposal cover" -- attach PDF from proposals/ folder and send
- "Move all newsletter emails to a Newsletter label" -- bulk organization

**One-time setup per client:**
1. Google Cloud Console -- create a project, enable Gmail API
2. Create OAuth 2.0 credentials (Desktop app type), download credentials.json to ~/.config/gmail/credentials.json
3. Run: `CLAUDECLAW_DIR=/path/to/claudeclaw ~/.venv/bin/python3 ~/.config/gmail/gmail.py auth`
4. Browser opens -- sign in and authorize
5. Add to .env: GOOGLE_CREDS_PATH and GMAIL_TOKEN_PATH paths
6. Test: send "check my email" -- inbox returns correctly

Setup time: 20 minutes per client. Each client needs their own Google Cloud project and credentials.

**Critical rule:** Claude always shows the draft before sending. Never sends without confirmation. Built into the skill -- cannot be bypassed.

---

### SKILL 2: Google Calendar

**File:** skills/google-calendar/SKILL.md
**Global or project:** Project-level
**Triggers:** "schedule a meeting", "check my calendar", "what's on my calendar", "book a call", "am I free", "reschedule", "cancel"
**Requires:** Same Google OAuth credentials as Gmail (no new project needed). GCAL_TOKEN_PATH in .env.

**What it does:**
- Lists upcoming events (next 10 or next N days)
- Creates events with Google Meet links and sends invite emails to attendees automatically
- Updates existing events -- reschedule, add attendees, change duration
- Cancels events and sends cancellation notices
- Checks free/busy status for a time range

**Business cases:**
- "What's on my calendar this week?" -- full week view in 5 seconds
- "Am I free Thursday at 10am?" -- instant availability check without opening a browser
- "Book a 30-minute discovery call with George for Friday at 2pm -- send him a Google Meet invite at george@example.com" -- creates event, generates Meet link, sends invite automatically
- "Reschedule the Nathalie call to Monday at 11am and notify her" -- updates event and sends update email
- "Block Monday from 9am to 12pm as deep work" -- creates blocked time immediately

**Critical rule the skill enforces:** Never assumes a date from a day name. If you say "next Thursday", Claude calculates the actual date and confirms the day of week before creating anything. Wrong invites go to real people.

**One-time setup per client:**
1. Uses the same credentials.json as Gmail -- no new Google project needed
2. Run: `CLAUDECLAW_DIR=/path/to/claudeclaw ~/.venv/bin/python3 ~/.config/calendar/gcal.py auth`
3. Add to .env: GCAL_TOKEN_PATH=~/.config/calendar/token.json
4. Change default timezone in gcal.py from America/New_York to America/Toronto for Quebec clients
5. Test: send "what's on my calendar this week" -- events return correctly

Setup time: 5 minutes if Gmail is already configured.

---

### SKILL 3: Slack

**File:** skills/slack/SKILL.md
**Global or project:** Project-level
**Triggers:** "check my Slack", "message [name] on Slack", "what's new in #channel", "read my Slack DMs"
**Requires:** Slack User OAuth Token (xoxp- prefix) in .env as SLACK_USER_TOKEN.

**What it does:**
- Lists all conversations sorted by unread count with recency
- Reads messages from any channel or DM (fuzzy search by name to find channel ID)
- Sends messages to channels or DMs -- always drafts and confirms before sending
- Replies to threads with thread timestamp

**Business cases:**
- "Check my Slack and tell me what needs attention" -- unread triage without opening Slack
- "Read my DMs with James Hutchinson" -- reads conversation history
- "Message the #clients channel: the proposal is ready for review" -- drafts message, confirms, sends
- "What's new in the #ops channel this morning?" -- returns recent messages with context

**One-time setup per client:**
1. api.slack.com/apps -- Create New App -- From scratch
2. Under OAuth and Permissions, add User Token Scopes (not Bot Token Scopes): channels:history, channels:read, chat:write, groups:history, groups:read, im:history, im:read, mpim:history, mpim:read, search:read, users:read
3. Install to Workspace -- click Allow
4. Copy the User OAuth Token (starts with xoxp-)
5. Add to .env: SLACK_USER_TOKEN=xoxp-your-token-here
6. Test: send "check my Slack" -- conversations return correctly

Setup time: 15 minutes. Only relevant if the client uses Slack. Skip for clients who do not.

**Rule:** Same as Gmail -- Claude always shows the draft before sending. Never sends without confirmation.

---

### SKILL 4: Timezone Dashboard

**File:** skills/timezone/SKILL.md
**Global or project:** Project-level
**Triggers:** "what time is it in", "timezone", "team times", "working hours"
**Requires:** Nothing -- no API keys.

**What it does:**
- Shows current local times across configured locations in a clean table
- Flags who is currently in working hours (9am-6pm local)

**Current configuration (Juan's deployment):** Montreal, Toronto, Vancouver, New York, London. Status: RESOLVED -- "Mark" references removed, locations updated. Ready to demo.

**Client replication:** Update skills/timezone/SKILL.md with the client's relevant locations -- their team, their clients, their partners. Edit the location list. 5-minute setup.

---

### SKILL 5: Gemini API Dev (Video and Multimodal Analysis)

**File:** ~/.claude/skills/gemini-api-dev/SKILL.md
**Global or project:** Globally installed -- available to all agents
**Triggers:** Any video sent to Telegram; "analyze this video"; "transcribe this video"; "what does this video say"
**Requires:** GOOGLE_API_KEY in .env (confirmed present -- real key, no setup needed)

**What it does:**
- Processes video files sent to Telegram -- transcribes speech, reads visual content, understands context
- Processes images -- reads documents, whiteboards, handwritten notes even in difficult conditions
- Processes audio files for transcription
- Returns structured analysis that Claude then acts on

**Models available:**
- gemini-3-flash-preview -- fast, balanced, multimodal (default for most tasks)
- gemini-3-pro-preview -- highest reasoning, complex analysis (use for strategic briefs)

**Business cases:**

K1. Video briefing to action plan -- Record yourself explaining a complex client situation while driving. Send to Telegram. Gemini transcribes and extracts key points. Claude produces a structured summary, top decisions, and drafts the implied output. Manual: 20-30 minutes. With Gemini: 90 seconds.

K2. Whiteboard or handwritten notes -- After a strategy session, photograph the whiteboard or your handwritten notes. Gemini reads content including diagrams and messy handwriting. Claude structures it into meeting notes, action items, or a follow-up email. Manual: 30-45 minutes.

K3. Signed document or paper form -- A client sends a photo of a signed agreement. Send to Telegram. Gemini reads it. Claude extracts signature date, key terms, client details, amounts, updates the relevant file. Manual: 10-15 minutes of data entry.

K4. Post-meeting video debrief -- After a discovery call, record a 90-second Telegram round video while walking to your car. Gemini transcribes. Claude updates the prospect file and sends the next action. Manual: 10 minutes.

K5. Competitor website screen recording -- Screen record yourself scrolling through a competitor's website or a prospect's LinkedIn profile. Gemini reads what is on screen. Claude produces a competitive brief or prospect intelligence summary. Manual: 30-45 minutes.

K6. LinkedIn post from a recorded video -- Record 60-90 seconds of yourself on camera talking through an insight. Send to Telegram. Gemini transcribes. LinkedIn skill reformats as a polished post in Juan's voice. Command after sending: "Turn this into a LinkedIn post." Manual: 30-45 minutes. With pipeline: 2 minutes.

K7. Presentation or slide deck review -- Screen record yourself scrolling through a draft deck. Gemini reads each slide. Claude gives feedback on what is missing, unclear, or out of order.

K8. Site assessment video (construction clients) -- Video walk of a job site from a client's phone. Gemini analyzes what it sees. Claude produces a preliminary assessment or observation checklist.

**Setup status:** No additional setup needed. Fully active.

---

### SKILL 6: LinkedIn Post Creation

**File:** ~/.claude/skills/linkedin/SKILL.md
**Global or project:** Globally installed -- available to all agents
**Triggers:** "LinkedIn post", "write a post", "draft for LinkedIn", "LinkedIn from this video/note", "turn this into LinkedIn"
**Requires:** Nothing beyond the skill being installed (confirmed)

**What it does:**
- Writes complete LinkedIn posts in Juan's exact voice from text prompts, voice note transcripts, or Gemini video transcripts
- Produces carousel outlines (slide-by-slide with copy and visual direction)
- Repurposes existing content (emails, messages, case study notes) into post format
- Saves every draft to content/linkedin-[YYYY-MM-DD]-[slug].md automatically

**Juan's voice rules encoded in the skill (enforced automatically):**
- No em dashes, no en dashes -- double hyphen or rewrite
- No AI clichés: "game-changer", "leverage", "unlock", "transformative", "dive into" -- all banned
- No passive voice
- No corporate jargon
- Short sentences. One idea per sentence. 1-3 line paragraphs. White space is a feature.
- Specific over generic: real numbers, real situations, real names when appropriate
- Slightly contrarian: challenges the obvious take
- Never ends with "DM me to learn more" or "Link in bio"

**Post structure the skill always produces:**
```
[HOOK -- 1 line, stops the scroll]
[BODY -- 3-5 short paragraphs, builds the idea]
[LANDING LINE -- the insight or the turn]
[CTA -- one specific question, not a sales ask]
[2-3 hashtags maximum]
```

**Three input modes:**

Mode 1: Text prompt -- "Write a LinkedIn post about the fact that a CPA I talked to spends 36 hours per month on proposals." Claude drafts the full post directly.

Mode 2: Voice note -- Record a voice note describing the insight or story. Groq Whisper transcribes it. Claude formats it as a LinkedIn post using the skill rules.

Mode 3: Video (Gemini + LinkedIn combined pipeline) -- Record a 60-90 second video. Telegram receives it. Gemini transcribes and extracts content. LinkedIn skill reformats into a post. Full multimodal pipeline: phone video -- Telegram -- Gemini -- Claude -- LinkedIn draft.

**Business cases:**

L1. Daily post from a prospect interaction -- After a discovery call with something surprising -- a specific number, an unexpected objection -- record a voice note. System produces a full post in under 60 seconds. Target: 1 post per day from real interactions, zero brainstorming sessions.

L2. Case study post from a client result -- "George's system is live. He said proposals now take 20 minutes instead of 3 hours. Write a LinkedIn post from that." Specific numbers, client's industry (without naming without permission), concrete before/after. Highest-converting content type for PVRPOSE AI's audience.

L3. Video-to-post workflow -- Record 60-90 second video, send to Telegram. Command: "Turn this into a LinkedIn post." Manual: 30-45 minutes. With the pipeline: 2 minutes.

L4. Carousel outline -- "Create a 7-slide carousel: How I build a custom AI operating system for a professional service founder in 6 weeks." Slide-by-slide with title, copy, visual direction. Manual: 45-60 minutes. With the skill: 90 seconds.

L5. Repurpose existing content -- "Turn this email I sent George into a LinkedIn post." / "Turn the proposal bottleneck section from the SOP into a LinkedIn post." System extracts core insight, rewrites from scratch (not paraphrase), applies all voice rules.

L6. Response to industry news -- "Write a LinkedIn post responding to [article]. Find the angle that makes PVRPOSE AI look like the smart read on this." System takes the contrarian or insight-forward position.

**Output storage:** content/linkedin-[YYYY-MM-DD]-[slug].md -- builds a searchable content library over time.

**Setup status:** No additional setup needed. Fully active. Juan's voice rules are encoded.

---

## SECTION 6: AIRTABLE CRM DATA FLOW

Airtable is Juan's primary CRM -- the single source of truth for all prospect and client data. This section documents exactly how data moves from Airtable into PVRPOSE AI OS at every phase.

### The Three-Phase Integration Strategy

**Phase 1 -- Manual Mirror (Now)**

Juan updates Airtable when a prospect status changes. Juan or Claude updates the corresponding data/prospects/[name].md file. Both systems stay in sync manually. This is the correct starting point -- simple, no infrastructure, 2-3 minutes per update.

What Claude can do in Phase 1:
- Read data/prospects/ for briefings, pipeline summaries, and follow-up drafts
- Update prospect markdown files when Juan tells it to (post-call voice note)
- Surface who needs follow-up based on Next Action dates in the files

**Phase 2 -- Direct API Skill (Week 2-3)**

A direct Airtable API skill (`scripts/airtable.js` + `~/.claude/skills/airtable/SKILL.md`) lets Claude read and write Airtable records directly via the Airtable REST API. No middleware (n8n, Zapier, Make) -- fewer failure points, direct reliability.

Architecture:
```
TRIGGER: Claude skill invocation (e.g., "Check George's status in Airtable")
         |
         v
ACTION: scripts/airtable.js -- fetch/update via Airtable REST API
        using AIRTABLE_API_KEY + AIRTABLE_BASE_ID from .env
         |
         v
RETURN: Record data to Claude for response / file update
```

What Claude can do in Phase 2:
- Everything from Phase 1
- Always working with real-time Airtable data
- Morning digest automatically reflects latest Airtable state without manual updates

**Phase 3 -- Direct API (Future)**

Claude calls the Airtable API directly via a custom skill (~/.claude/skills/airtable/SKILL.md). Claude can read, create, and update Airtable records on command -- no intermediate markdown files needed.

Example: "Update George Mills in Airtable to Active Client and set the start date to April 1." Claude calls the Airtable API directly.

To build Phase 3:
```bash
mkdir -p ~/.claude/skills/airtable
# Create ~/.claude/skills/airtable/SKILL.md with:
# - Airtable API key (from airtable.com/account)
# - Base ID (from Airtable URL: app[xxxxxxxx])
# - Table names and field mappings for Prospects base
# - REST API calls: https://api.airtable.com/v0/[base_id]/[table_name]
```

Add to .env:
```
AIRTABLE_API_KEY=pat_xxxxxxxxxxxxxxxx
AIRTABLE_BASE_ID=appxxxxxxxxxxxxxxxx
AIRTABLE_PROSPECTS_TABLE=Prospects
```

### What Data Lives Where

| Data | Source of Truth | How Claude Accesses It |
|---|---|---|
| Prospect status, stage, contact info | Airtable | data/prospects/[name].md (Phase 1-2) or direct API (Phase 3) |
| Client active work, deliverables | Airtable | data/clients/[name].md |
| Conversation history with prospect | Airtable notes + markdown | data/prospects/[name].md Conversation History section |
| Calendar events and availability | Google Calendar | Via google-calendar skill |
| Email threads | Gmail | Via gmail skill (reads threads live) |
| WhatsApp messages | ClaudeClaw SQLite wa_messages table | Via /wa command |
| Slack messages | Slack API | Via slack skill |
| Scheduled tasks | ClaudeClaw SQLite scheduled_tasks table | Via scheduler |
| Long-term memory and preferences | ClaudeClaw SQLite memories table | Injected automatically each session |

### Airtable Field Mapping -- Prospect File Template

Every Airtable record in the Prospects base maps to a markdown file:

```markdown
# [Prospect Full Name]

## Profile
- Company: [Airtable: Company field]
- Role: [Airtable: Title field]
- Industry: [Airtable: Industry field]
- Location: [Airtable: City, Province field]
- How we know them: [Airtable: Source field -- TNC, LinkedIn, referral]

## Business Context
- Revenue range: [Airtable: Revenue Range field]
- Team size: [Airtable: Team Size field]
- Main pain: [Airtable: Pain Point field]
- Current tools: [Airtable: Tools field]

## Our Offer
- Offer made: [Airtable: Offer field]
- Price: [Airtable: Price field]
- Date offered: [Airtable: Offer Date field]
- Stage: [Airtable: Stage field -- Cold / Contacted / Interested / Proposal / Active / Closed / Lost]

## Conversation History
- [Date]: [What was discussed or sent]

## Next Action
- [What needs to happen next and by when -- Airtable: Next Action + Due Date fields]
```

The Airtable base needs these fields for the sync to work: Name, Company, Title, Industry, City/Province, Revenue Range, Team Size, Pain Point (text), Tools (text), Offer (single select), Price (currency), Offer Date (date), Stage (single select), Next Action (text), Due Date (date), Notes (long text maps to Conversation History).

### Airtable Business Cases

**M1. Morning pipeline from Airtable (Phase 1)**
"What's my pipeline for today?" -- Claude reads all data/prospects/ files, surfaces who has a due Next Action date of today or earlier, returns a prioritized list.

**M2. Post-call Airtable update via voice note (Phase 1)**
After a call: "George confirmed the build. Start April 1. Update his file." -- Claude updates george-mills.md. Juan mirrors to Airtable manually (or direct API skill does it in Phase 2).

**M3. Direct Airtable query on demand (Phase 2)**
"What's George's current stage in Airtable?" -- Claude calls the Airtable direct API skill, pulls the live record, and returns the current status. No sync delay, no middleware.

**M4. Direct Airtable query (Phase 3)**
"How many prospects are in the Proposal stage right now?" -- Claude calls the Airtable API directly, counts records, returns the answer in 5 seconds.

**M5. Airtable-to-proposal generation**
"Pull George Mills from Airtable and generate his full build proposal." -- Claude reads the record (or markdown mirror), fills the proposal template, generates PDF, sends via Telegram. Manual: 45-60 minutes. With system: 2 minutes.

---

## SECTION 7: COMPLETE BUSINESS CASE LIBRARY

Every confirmed working use case. Organized by category A through M. Each case includes the exact trigger phrase, what the system does, and manual time replaced. Use this to script demos, train clients, and pitch ROI.

---

### CATEGORY A: PIPELINE AND PROSPECT MANAGEMENT

**A1. Morning pipeline briefing**
Trigger: "Brief me on my pipeline for today" or "What's my pipeline?"
System: Reads all data/prospects/ files, surfaces who needs follow-up today, who is overdue, what the next action is for each active deal. Returns a prioritized list.
Manual time replaced: 20-30 minutes of CRM scanning every morning.

**A2. Pre-call briefing**
Trigger: "Brief me on George Mills before my 10am call"
System: Reads data/prospects/george-mills.md. Returns name, company, pain point, offer made, last contact, and one sharp opening question calibrated to their situation.
Manual time replaced: 15 minutes of digging through email and notes before a call.

**A3. Post-call notes via voice note**
Trigger (voice): "George confirmed the Pioneer Build. He wants to start April 1. His main concern is the WhatsApp setup. Mark him as active client."
System: Updates the prospect file with new status, adds a timestamped note, surfaces the next action.
Manual time replaced: 10 minutes of CRM updating immediately after a call.

**A4. Prospect research**
Trigger: "Research Nathalie McKenzie -- immigration lawyer in Montreal, solo practice"
System: Web search plus synthesis. Returns practice focus, typical client profile, likely admin bottlenecks for that practice type, context Juan can use to open a conversation.
Manual time replaced: 30-45 minutes of LinkedIn and Google research.

**A5. Follow-up overdue surfacing**
Trigger: "Who haven't I followed up with in the last 5 days?"
System: Reads data/prospects/ files, checks Last Contact and Next Action dates, returns a list sorted by days overdue.
Manual time replaced: 20 minutes of scanning a CRM or inbox to find what is slipping.

**A6. Airtable to markdown sync (manual)**
Trigger: "George Mills just moved to proposal stage in Airtable. Update his prospect file."
System: Updates data/prospects/george-mills.md with the new status and any additional context provided.
Manual time replaced: 5 minutes per update. Direct API skill (Phase 2) removes this entirely.

---

### CATEGORY B: OUTREACH AND COMMUNICATION DRAFTING

**B1. WhatsApp outreach -- cold prospect**
Trigger: "Draft a WhatsApp message to Michael Schacter, immigration lawyer, TNC member, mutual contact is James Hutchinson"
System: Drafts a personalized, conversational WhatsApp message in Juan's voice -- no AI clichés, no bullet points, specific to their pain as an immigration lawyer, under 200 words.
Manual time replaced: 20-30 minutes of writing and editing.

**B2. Email outreach -- first contact**
Trigger: "Draft a first contact email to Andrea Soueidan, CPA firm owner in Montreal, found her through LinkedIn"
System: Drafts a targeted first contact email -- short, specific, no fluff, in Juan's voice.
Manual time replaced: 30-40 minutes.

**B3. Follow-up after no response**
Trigger (voice): "Draft a follow-up to George. It's been 3 days. Keep it short."
System: Reads what the last outreach said (from the prospect file conversation history), drafts a short follow-up that acknowledges the silence without being awkward.
Manual time replaced: 10-15 minutes.

**B4. Proposal delivery email**
Trigger: "Write the email to send with Nathalie's audit proposal. Keep it under 5 sentences."
System: Writes a tight email that frames the attached proposal correctly and sets expectations for the next step.
Manual time replaced: 20 minutes.

**B5. Post-discovery call follow-up**
Trigger: "Draft a follow-up email to Michael after our discovery call today. He's interested in the audit. His main pain was proposal drafting taking 3-4 hours each."
System: Writes a personalized follow-up referencing the specific pain point, reframes the value, suggests the next step.
Manual time replaced: 30-40 minutes.

**B6. LinkedIn message -- warm connection**
Trigger: "I just connected with James Hutchinson on LinkedIn. He runs a mid-size law firm in Toronto. Draft a first message."
System: Writes a short, non-salesy LinkedIn DM that opens a conversation without pitching.
Manual time replaced: 15 minutes.

**B7. Rejection recovery**
Trigger: "Nathalie said not right now, maybe next quarter. Draft a graceful reply that keeps the door open."
System: Writes a short professional response that acknowledges the timing, expresses genuine interest in reconnecting, and plants a future touchpoint.
Manual time replaced: 15-20 minutes of thinking about how not to sound desperate.

---

### CATEGORY C: PROPOSAL AND DOCUMENT GENERATION

**C1. Full proposal -- Pioneer Audit**
Trigger: "Draft a Pioneer Audit proposal for Michael Schacter, $2,500 CAD, immigration lawyer, pain is 3-4 hours per proposal"
System: Writes a full proposal using templates/proposal-audit.md, tailored to the specific client, their industry, and their stated pain. Saves to proposals/schacter-audit-[date].md.
Manual time replaced: 45-60 minutes.

**C2. Full proposal -- Full Build**
Trigger: "Draft a full build proposal for George Mills, Pioneer Free Build terms, construction law, pain is weekend admin"
System: Full proposal with Pioneer Build framing, includes what will be built, 6-week timeline, tooling costs, and what they own at the end.
Manual time replaced: 60-90 minutes.

**C3. PDF generation and delivery**
Trigger: "Generate the PDF for the Schacter proposal and send it to me"
System: Runs scripts/generate-pdf.py on the markdown file, creates formatted PDF, sends it via Telegram using [SEND_FILE:/path/to/pdf].
Manual time replaced: 15 minutes of formatting in Word or Google Docs.

**C4. Service agreement**
Trigger: "Generate the service agreement for George Mills, Pioneer Build, start April 1"
System: Fills templates/agreement.md with client details and terms. Saves to proposals/george-mills-agreement-[date].md.
Manual time replaced: 20-30 minutes.

**C5. Invoice drafting**
Trigger: "Draft invoice for $2,500 deposit from Nathalie McKenzie, Pioneer Audit, paid via e-transfer"
System: Creates a formatted invoice markdown file with amounts, payment reference, and terms.
Manual time replaced: 10 minutes.

---

### CATEGORY D: CONTENT CREATION

**D1. LinkedIn post from voice note**
Trigger: Record a 60-second voice note about an insight or client situation.
System: Groq transcribes, LinkedIn skill formats into a complete post in Juan's voice -- hook, body, CTA -- no AI clichés, saved to content/linkedin-[date]-[slug].md.
Manual time replaced: 30-45 minutes of drafting and editing.

**D2. LinkedIn post from an experience**
Trigger: "I had a discovery call today where the prospect spent 20 minutes explaining their problem and I already knew the answer. Write a LinkedIn post about that."
System: Drafts a post from that specific angle -- specific, credible, not generic.
Manual time replaced: 30-40 minutes.

**D3. YouTube script**
Trigger: "Script a 10-minute YouTube video: 5 Things I'd Do Differently If I Was Starting My AI Business Today"
System: Full script with hook, sections, transitions, and a strong closing CTA. Saved to content/ folder.
Manual time replaced: 2-3 hours.

**D4. Carousel outline**
Trigger: "Outline a 7-slide LinkedIn carousel: How I build an AI operating system for a client in 6 weeks"
System: Slide-by-slide outline with title, body copy, and visual direction for each slide.
Manual time replaced: 45-60 minutes.

**D5. Content repurposing**
Trigger: "Turn this LinkedIn post into a 3-tweet thread" or "Turn this email into a LinkedIn post"
System: Repackages the content for the new format while keeping the core message intact.
Manual time replaced: 20-30 minutes.

**D6. Video-to-LinkedIn post (full Gemini + LinkedIn pipeline)**
Trigger: Send 60-90 second video to Telegram, then "Turn this into a LinkedIn post."
System: Gemini transcribes video -- LinkedIn skill formats into post -- draft delivered to Telegram.
Manual time replaced: 30-45 minutes. With the pipeline: 2 minutes.

---

### CATEGORY E: SCHEDULING AND CALENDAR

**E1. Check availability**
Trigger: "Am I free Thursday at 10am for a discovery call?"
System: Queries Google Calendar, returns what is booked, confirms free/busy status.
Manual time replaced: 2 minutes. The value is doing it in the same Telegram thread without switching apps.

**E2. Book a call with calendar invite**
Trigger: "Book a 45-minute discovery call with Michael Schacter Friday at 2pm. Send him a Google Meet link at michael@example.com"
System: Creates the Google Calendar event, generates a Google Meet link, sends the invite email. Confirms the exact date before creating.
Manual time replaced: 10-15 minutes of back-and-forth calendar coordination.

**E3. Reschedule**
Trigger: "Reschedule my Thursday 10am with George to Monday 11am and notify him"
System: Updates the event, moves it, sends George an update email.
Manual time replaced: 10 minutes.

**E4. Weekly schedule overview**
Trigger: "What's on my calendar this week?"
System: Returns a clean list of all events for the current week with times and attendees.
Manual time replaced: 2-3 minutes of calendar scanning.

**E5. Block focus time**
Trigger: "Block Monday from 9am to 12pm as deep work -- no meetings"
System: Creates a blocked calendar event with a clear title so scheduling respects it.
Manual time replaced: 2 minutes. Value is doing it immediately without opening Google Calendar.

---

### CATEGORY F: EMAIL MANAGEMENT

**F1. Inbox triage**
Trigger: "Check my email and tell me what needs a response today"
System: Lists all unread emails grouped by thread, sorted by urgency, with a one-line summary of what each requires.
Manual time replaced: 20-30 minutes of inbox scanning.

**F2. Read a specific email**
Trigger: "Read the email from Nathalie McKenzie"
System: Returns the full email content.
Manual time replaced: Opens the email. Value is doing it on the phone without switching apps.

**F3. Draft a reply**
Trigger: "Draft a reply to George confirming our April 1 start date and asking for the signed agreement"
System: Reads George's last email, drafts a complete reply in Juan's voice, shows it before sending.
Manual time replaced: 10-15 minutes.

**F4. Send with attachment**
Trigger: "Send the Schacter audit proposal PDF to michael@example.com with the standard proposal email"
System: Attaches the PDF from proposals/, sends the email with the appropriate cover message.
Manual time replaced: 5-10 minutes.

---

### CATEGORY G: SLACK COMMUNICATION

**G1. Slack inbox check**
Trigger: "Check my Slack and tell me what needs attention"
System: Lists all unread channels and DMs sorted by unread count, with one-line context for each.
Manual time replaced: 15-20 minutes of Slack scanning.

**G2. Send a Slack message**
Trigger: "Message James on Slack: I'll have the update ready by end of day"
System: Drafts the message, shows it to Juan for confirmation, sends on approval.
Manual time replaced: 2 minutes. Value is not switching apps.

**G3. Read a Slack thread**
Trigger: "What's the latest in the #clients channel?"
System: Returns recent messages from that channel with context.
Manual time replaced: Varies. Value is not missing messages or switching apps.

---

### CATEGORY H: INTELLIGENCE AND RESEARCH

**H1. Competitive intelligence**
Trigger: "What are the top 3 AI consulting firms in Montreal right now? What are they charging and what are they selling?"
System: Web research plus synthesis. Returns a structured competitive brief with positioning, pricing if findable, and differentiation gaps.
Manual time replaced: 1-2 hours of web research.

**H2. Industry pain research**
Trigger: "What are the biggest admin pain points for solo immigration lawyers in Canada right now?"
System: Research synthesis from recent sources. Returns specific, actionable findings.
Manual time replaced: 1-2 hours.

**H3. Pre-meeting deep dive on multiple people**
Trigger: "I'm meeting the TNC group on March 17. Research 3 members: [names]. Give me what I need to have intelligent conversations with each."
System: Researches each person, returns a brief per person with business context, potential conversation angles, and what not to say.
Manual time replaced: 2-3 hours.

**H4. News briefing on a topic**
Trigger: "What is happening in AI regulation in Quebec and Canada right now?"
System: Web search plus synthesis. Returns current state with relevant implications for PVRPOSE AI clients.
Manual time replaced: 30-45 minutes of news reading.

---

### CATEGORY I: FILE HANDLING (BOTH DIRECTIONS)

**Sending files TO the bot (you send, Claude analyzes):**

**I1. Photo of a document**
Send a photo of a signed agreement, whiteboard, handwritten note, or printed invoice to Telegram. Claude reads the content and acts on it.
Example: "Here's a photo of the signed agreement from George." Claude reads the signature date, confirms terms, updates the client file.

**I2. PDF or document attachment**
Forward a PDF, Word doc, or text file to the bot. Claude reads its contents and answers questions or extracts information.
Example: "Here's Nathalie's current service agreement. Find the clause that covers termination."

**I3. Video note (Telegram round video)**
Record a short round video in Telegram and send it to the bot. Claude receives it, transcribes the speech via Gemini, and acts on it.

**I4. Voice note**
Standard Telegram voice note. Transcribed by Groq Whisper in 1-2 seconds. Claude receives the transcription prefixed with [Voice transcribed]: and acts on it as a text message.

**Receiving files FROM the bot (Claude sends to you):**

**I5. Proposal PDF delivery**
After generating a proposal, Claude sends: [SEND_FILE:/absolute/path/to/file.pdf|Schacter Audit Proposal]
The bot strips this marker, attaches the file, and delivers it to Telegram. You receive the PDF on your phone -- ready to forward to the client.

**I6. Report or document delivery**
Any file Claude creates (TNC brief, competitor analysis, LinkedIn post saved as .md, invoice) can be sent back via [SEND_FILE:].
Flow: Claude writes the file -- confirms it exists -- sends the file marker -- you receive it in Telegram.

**I7. Image or chart delivery**
Claude generates an image or saves a screenshot and sends it via [SEND_PHOTO:/path/to/image.png]. Delivered as an inline image in Telegram.

**File delivery rules:**
- Always use absolute paths in the SEND_FILE marker
- Claude creates the file first, then sends the marker
- Multiple files can be sent in a single response with multiple markers
- Max file size: 50MB (Telegram limit)
- Markers are stripped from message text -- response reads naturally

---

### CATEGORY J: GEMINI VIDEO ANALYSIS

All Gemini video use cases are documented in Section 5 (Skill 5) above. See cases K1 through K8.

---

### CATEGORY K: LINKEDIN CONTENT CREATION

All LinkedIn skill use cases are documented in Section 5 (Skill 6) above. See cases L1 through L6.

---

### CATEGORY L: AIRTABLE CRM INTEGRATION

All Airtable business cases are documented in Section 6 above. See cases M1 through M5.

---

### CATEGORY M: WHATSAPP BRIDGE

**WA1. WhatsApp inbox awareness**
Trigger: "What WhatsApp messages came in today that need a response?"
System: Reads the wa_messages table in SQLite. Returns a prioritized list of conversations with unread messages.
Manual time replaced: Opening WhatsApp and scanning conversations manually.

**WA2. Draft and queue WhatsApp outreach**
Trigger: "Draft my WhatsApp to George and queue it for sending."
System: Writes the message in Juan's voice, queues it in wa_outbox. Juan confirms via Telegram. Message sends automatically.
Manual time replaced: Drafting and sending separately. The queue system keeps CASL compliance intact -- human approves before anything sends.

**WA3. Contact message history**
Trigger: "What has Nathalie said to me on WhatsApp over the last 2 weeks?"
System: Reads message history from the wa_messages table, returns a summary of the conversation thread.
Manual time replaced: Scrolling through WhatsApp chat history manually.

---

### CATEGORY EA: EA-AUGMENTED WORKFLOW

**For founders with a human EA, VA, or Chief of Staff -- AI handles the repetitive grind, the human applies judgment and relationship intelligence.**

Context: EA salary in Canada ranges from $63,000-$98,000 CAD (national average ~$65,000; Toronto senior roles $74,000-$98,000 per Robert Half 2026). The ROI case is not "replace your EA" -- it is "your EA's output capacity doubles or triples, which means you get the equivalent of two EAs for the price of one, with zero additional headcount."

**What ClaudeClaw executes today vs what requires future build:**
- LIVE NOW: All prompts using Gmail, Google Calendar, Slack, memory/Obsidian, web research, voice transcripts, and document drafting
- REQUIRES DIRECT API SKILL (not yet live): GHL CRM scrubbing, automated inbox tagging at scale
- REQUIRES FUTURE BUILD: Receipt/PDF OCR for expense parsing, board book PDF export

---

#### BASIC TASKS -- HIGH REPETITION, HIGH AUTOMATION (entry-level EA, 0-3 years)

Realistic daily volume for a busy founder's EA: 50-150 emails processed, 3-8 meetings booked, 5-10 calls screened.

**EA1. INBOX TRIAGE**
Trigger: "Triage my inbox from the last 48 hours. Flag priorities: Hot (act today), Warm (this week), Cold (archive). Draft 3 replies in my voice."
System: Gmail skill reads inbox, applies priority logic against known contacts and open deals in memory, drafts replies in Juan's voice. EA reviews and approves before sending.
Manual time replaced: 45-90 minutes of manual inbox sorting and drafting.
ClaudeClaw status: LIVE -- Gmail skill + memory.

**EA2. CALENDAR CONFLICT SCANNER**
Trigger: "Scan my calendar for the next 7 days. Flag double-bookings, missing prep time before calls, and travel gaps. Propose 3 fixes."
System: Google Calendar skill reads the week, cross-references travel or location context in memory, returns a structured conflict report with proposed reschedules.
Manual time replaced: 20-40 minutes of manual calendar review.
ClaudeClaw status: LIVE -- Google Calendar skill.

**EA3. MEETING CONFIRMATION DRAFTS**
Trigger: "Draft confirmation replies for all meetings tomorrow in my voice. Include agenda line."
System: Reads calendar events for the next day, drafts a short confirmation email per meeting in Juan's voice, ready for EA to send.
Manual time replaced: 15-30 minutes of repetitive drafting.
ClaudeClaw status: LIVE -- Google Calendar + Gmail skill.

**EA4. EXPENSE CATEGORIZATION PREP**
Trigger: "Here are this week's receipts [paste text/amounts]. Categorize for Expensify: Client meals, Travel, Office. Total by vendor. Flag anything over $200."
System: Reads pasted receipt data, categorizes and totals, outputs a structured table ready for Expensify entry.
Manual time replaced: 20-30 minutes of manual data entry prep.
ClaudeClaw status: LIVE for text/pasted input. PDF/photo OCR requires future build.

---

#### MIDDLE TASKS -- JUDGMENT + SYSTEM ACCESS (senior EA, 3-7 years)

**EA5. PRE-MEETING EXECUTIVE BRIEFING**
Trigger: "Brief me for my 3pm call with Nathalie McKenzie. Pull everything -- CRM notes, past emails, Obsidian, LinkedIn research. 200 words max."
System: Reads data/prospects/nathalie-mckenzie.md, pulls relevant Gmail threads via Gmail skill, searches Obsidian memory, runs a web search for recent LinkedIn/news context. Delivers a tight 200-word brief.
Manual time replaced: 20-30 minutes of manual research and synthesis.
ClaudeClaw status: LIVE -- memory + Gmail + web search + prospect files.

**EA6. STAKEHOLDER SCHEDULE ALIGNMENT**
Trigger: "Find a time for me, George Mills, and Andrea Soueidan for a 45-minute call next week. Propose 3 options."
System: Reads Juan's Google Calendar for availability, cross-references known time preferences in prospect files, proposes 3 specific slots with draft invite text.
Manual time replaced: 15-30 minutes of back-and-forth scheduling.
ClaudeClaw status: LIVE -- Google Calendar skill + prospect files.

**EA7. VENDOR DOCUMENT SUMMARY**
Trigger: "Here's the caterer proposal [paste text]. Extract: price, terms, cancellation policy, key dates. Flag negotiation points."
System: Reads pasted vendor document, extracts structured summary, flags anything outside standard terms.
Manual time replaced: 20-40 minutes of document review.
ClaudeClaw status: LIVE for pasted text. PDF parsing requires future build.

**EA8. CRM REACTIVATION DRAFTS**
Trigger: "Here are 10 cold leads from Airtable untouched for 90+ days [paste names/context]. Draft personalized reactivation messages in my voice."
System: Reads pasted lead context, drafts 10 personalized outreach messages in Juan's voice using voice rules from CLAUDE.md.
Manual time replaced: 2-3 hours of manual drafting.
ClaudeClaw status: LIVE for pasted input. Auto-pull from GHL requires direct API skill (not yet live).

---

#### ADVANCED TASKS -- STRATEGIC, HIGH-TRUST (Chief of Staff level, 7+ years)

**EA9. PRE-MEETING RESEARCH DOSSIER**
Trigger: "Research James Hutchinson before dinner tonight. Company status, recent news, mutual connections, 3 talking points I can use."
System: Web search for recent news/LinkedIn, cross-references memory for any prior interaction notes, returns a structured 300-word dossier.
Manual time replaced: 20-45 minutes of manual research.
ClaudeClaw status: LIVE -- web search + memory + prospect files.

**EA10. DRAFT IN FOUNDER'S VOICE**
Trigger: "Draft a 500-word keynote opening for my TNC lunch on AI and the future of professional services. Use my voice."
System: Uses voice rules from CLAUDE.md + LinkedIn post history in memory to draft in Juan's exact tone, structure, and cadence.
Manual time replaced: 1-2 hours of writing.
ClaudeClaw status: LIVE -- memory + voice rules.

**EA11. CRISIS RESPONSE OPTIONS**
Trigger: "Client complaint just came in on LinkedIn [paste text]. Draft 3 response options: diplomatic, neutral, assertive. In my voice."
System: Reads complaint, drafts 3 responses calibrated by tone, each in Juan's voice. EA or founder selects and edits.
Manual time replaced: 30-60 minutes of careful drafting under pressure.
ClaudeClaw status: LIVE.

**EA12. ONBOARDING KNOWLEDGE TRANSFER**
Trigger: "New ops person starting Monday. Create a 1-page handoff doc: key clients, calendar rhythm, escalation paths, voice rules."
System: Reads prospect files, Obsidian notes, CLAUDE.md, and recent calendar patterns to compile a structured 1-page onboarding doc.
Manual time replaced: 2-4 hours of institutional knowledge documentation.
ClaudeClaw status: LIVE -- all data sources already in context.

---

#### DAILY EA COMMAND CENTER (rhythm prompts)

**EA13. MORNING EXEC BRIEF (EA runs at 6-7am)**
Trigger: "Generate the CEO's morning brief. Yesterday's closes, today's critical path, 3 priorities, 2 blockers, 1 decision needed. 1 page max."
System: Reads prospect files, yesterday's calendar, open Gmail threads, memory. Outputs a tight structured brief.
ClaudeClaw status: LIVE. Can be scheduled as a cron at 6:30am weekdays.

**EA14. PRE-MEETING BRIEFING ENGINE**
Trigger: "Prep me for my next 3 meetings today. Who, context, goals, risks, one talking point each."
System: Reads Google Calendar for next 3 meetings, pulls relevant context for each person from memory and prospect files.
ClaudeClaw status: LIVE.

**EA15. EOD CRITICAL PATH**
Trigger: "EOD wrap. What's unresolved today? Build tomorrow's must-do list, time-blocked, protecting deep work windows."
System: Reviews today's calendar and any open threads in memory, outputs a prioritized tomorrow plan with time blocks.
ClaudeClaw status: LIVE.

---

#### CANADIAN URBAN SPECIALTIES

**EA16. MONTREAL -- BILINGUAL COMMUNICATION**
Trigger: "Adapt this board email for our French board members. Keep my tone, ensure it's natural French -- not translated."
System: Rewrites in professional Quebec French, preserving Juan's directness and cadence. Bill 96 compliant -- French-first for all official communications.
ClaudeClaw status: LIVE -- Claude is fluent in Quebec French.
Note: Under Bill 96 (2025), all official Quebec workplace communications must be available in French. English can be used where the role requires it and is documented. EA must ensure French versions exist for all formal documents.

**EA17. OTTAWA -- GOVERNMENT CALENDAR SYNC**
Trigger: "Cross-reference my calendar with federal committee schedules for the next 30 days. Flag any conflicts with sessions relevant to [policy area]."
System: Web search for parliamentary committee schedule, cross-reference with Google Calendar, return a conflict and opportunity report.
ClaudeClaw status: LIVE -- web search + Google Calendar skill.

**EA18. VANCOUVER -- ASIA-PACIFIC TIME ZONE COORDINATION**
Trigger: "Propose 3 meeting times for me (PST) and 4 contacts in Tokyo, Singapore, and Seoul. Overlap window only. Include travel feasibility for Q3 offsite."
System: Timezone skill calculates overlap windows, returns 3 slots with local times for each participant, flags Q3 travel logistics.
ClaudeClaw status: LIVE -- Timezone skill.

**EA19. TORONTO -- INVESTOR RELATIONS PREP**
Trigger: "Prep me for my TSX investor call with [name]. Recent filings, news, any compliance flags, 3 questions to ask."
System: Web search for recent investor news and filings, cross-references memory for prior interaction, returns a structured prep doc.
ClaudeClaw status: LIVE -- web search + memory.

---

#### TRAVEL AND EVENTS

**EA20. CROSS-BORDER TRAVEL LOGISTICS (CANADA-US)**
Trigger: "Montreal-Toronto-New York trip next week. Propose flight options, ground transport, hotel zones. Flag anything I need for US entry."
System: Web search for travel options, returns a structured itinerary outline. Notes: Canadian citizens do not require ESTA for US travel -- only a valid passport and may require an eTA for air travel within Canada.
Manual time replaced: 1-2 hours of manual booking research.
ClaudeClaw status: LIVE for research and itinerary drafting. Actual booking requires human action.

**EA21. EXEC RETREAT PLANNING**
Trigger: "Plan a 25-person company retreat. Venue options under $15,000 CAD, 2-day agenda, CEO keynote slot. Montreal or Eastern Townships."
System: Web search for venue options, proposes agenda structure, drafts CEO keynote slot outline.
ClaudeClaw status: LIVE for research and drafting. Vendor calls require human follow-up.

---

#### BOARD AND INVESTORS

**EA22. BOARD BOOK PREPARATION**
Trigger: "Format this month's board update [paste content]. Structure: Exec summary, KPIs, key decisions needed, financials, next steps."
System: Structures pasted content into a clean board book format, outputs ready-to-paste or Markdown file.
Manual time replaced: 2-4 hours of formatting and structuring.
ClaudeClaw status: LIVE for structure and Markdown output. PDF export requires future build (scripts/generate-pdf.py -- not yet built).

**EA23. INVESTOR DUE DILIGENCE SUMMARY**
Trigger: "Summarize our Series A story: traction, team, market size, 3 risks with mitigations. 2 pages max, investor voice."
System: Reads memory and prospect/client files, drafts a structured 2-page DD summary.
ClaudeClaw status: LIVE.

#### PERSONAL AND FAMILY SUPPORT

**EA24. GIFT AND CONCIERGE**
Trigger: "Spouse's birthday next Friday. 3 gift options under $300 CAD, Toronto delivery, gift-wrapped. Include a personal note draft in my voice."
System: Web search for gift options matching criteria, proposes 3 options with pricing and delivery info, drafts a personal note in founder's voice.
Manual time replaced: 30-60 minutes of browsing and decision-making.
ClaudeClaw status: LIVE -- web search + voice rules.

---

#### CULTURE AND TEAM

**EA25. TEAM RECOGNITION AND AWARDS**
Trigger: "Q1 high-performer awards. List top 5 nominees from [team/department], their key achievements, and draft a 2-minute presentation script for the all-hands."
System: Uses pasted team data or memory context to identify top performers, structures achievements, and drafts a presentation script in founder's voice.
Manual time replaced: 1-2 hours of compiling achievements and writing scripts.
ClaudeClaw status: LIVE for drafting. Actual team data must be pasted or stored in memory/prospect files.

---

#### TECH MAPPING (what powers each prompt)

| Task type | ClaudeClaw component | Status |
|---|---|---|
| Email drafting and triage | skills/gmail/SKILL.md | LIVE |
| Calendar read and conflict detection | skills/google-calendar/SKILL.md | LIVE |
| Memory and context pull | store/claudeclaw.db + Obsidian | LIVE |
| Voice matching | CLAUDE.md voice rules + memory | LIVE |
| Web research and dossiers | Web search tool | LIVE |
| Bilingual (FR/EN) output | Claude native capability | LIVE |
| Timezone coordination | skills/timezone/SKILL.md | LIVE |
| Slack status and comms | skills/slack/SKILL.md | LIVE |
| Scheduled morning brief | dist/schedule-cli.js cron | LIVE |
| GHL CRM auto-pull | Direct API skill | NOT YET LIVE (Phase 2) |
| Receipt/PDF OCR | scripts/generate-pdf.py | NOT YET BUILT |
| Board book PDF export | scripts/generate-pdf.py | NOT YET BUILT |

---

#### TNC DEMO SCRIPT -- EA SUPERPOWERS (March 17, 2026)

Three prompts, live on phone, under 5 minutes:

1. "Brief me for my 3pm with Nathalie" -- 15 seconds -- returns 200-word brief pulling CRM + email + web research
2. "Triage my inbox last 48 hours" -- 20 seconds -- returns tagged priorities + 3 draft replies in Juan's voice
3. "Draft George Mills follow-up in my voice" -- 10 seconds -- returns ready-to-send message

Pitch line: "Your EA already does all of this. PVRPOSE EA Superpowers makes them do it in one-tenth the time. Same human judgment. Same relationship. 3× the output."

ROI frame (defensible): "A senior EA in Toronto costs $74,000-$98,000 CAD (Robert Half 2026). AI-assisted productivity gains of 40-55% (McKinsey/PwC 2025) mean your EA effectively delivers the work of 1.5 EAs for the same salary. The $15,000-$25,000 build pays back in 3-6 months."

---

## SECTION 8: THE BLUEPRINT ARCHITECTURE

Every client deployment follows this exact structure.

### Folder Structure

```
[clientname]-pvrpose-ai-os/
|-- CLAUDE.md                         <-- The brain. Client-specific configuration.
|-- agents/
|   |-- comms/
|   |   |-- CLAUDE.md                 <-- Communication drafting rules and voice style
|   |   `-- agent.yaml                <-- Technical config: bot token, model, Obsidian
|   |-- content/
|   |   |-- CLAUDE.md                 <-- Content creation rules and format
|   |   `-- agent.yaml
|   |-- ops/
|   |   |-- CLAUDE.md                 <-- Operations, pipeline, CRM instructions
|   |   `-- agent.yaml
|   |-- research/
|   |   |-- CLAUDE.md                 <-- Research style and sourcing rules
|   |   `-- agent.yaml
|   `-- _template/CLAUDE.md           <-- Starting template for new agents
|-- data/
|   |-- prospects/                    <-- One .md file per active prospect
|   |-- clients/                      <-- One .md file per active client
|   `-- [network-group]/              <-- e.g., tnc-members/ for Juan's network
|-- templates/
|   |-- proposal-pioneer-audit.md
|   |-- proposal-pioneer-build.md
|   |-- proposal-full-build.md
|   |-- follow-up-noresponse.md
|   `-- agreement.md
|-- proposals/                        <-- Generated proposals (dated, per client)
|-- content/                          <-- LinkedIn and content drafts
|-- scripts/
|   |-- notify.sh                     <-- Sends a Telegram notification mid-task
|   |-- generate-pdf.py               <-- Generates PDFs from markdown files
|   |-- schedule-cli.js               <-- Manages cron jobs
|   |-- agent-create.sh               <-- Interactive new agent creation
|   `-- wa-daemon.ts                  <-- WhatsApp bridge daemon
|-- src/                              <-- TypeScript source code (do not modify per client)
|   |-- index.ts                      <-- Entry point
|   |-- bot.ts                        <-- All Telegram message and command handling
|   |-- agent.ts                      <-- Runs Claude AI, feeds it context
|   |-- db.ts                         <-- All database read/write operations
|   |-- config.ts                     <-- Reads settings from .env
|   |-- media.ts                      <-- Voice notes, photos, files
|   |-- scheduler.ts                  <-- Runs cron jobs
|   |-- memory.ts                     <-- Saves and retrieves semantic memories
|   |-- obsidian.ts                   <-- Obsidian vault task injection
|   |-- whatsapp.ts                   <-- WhatsApp bridge
|   |-- dashboard.ts                  <-- Web dashboard backend
|   `-- dashboard-html.ts             <-- Dashboard frontend
|-- dist/                             <-- Compiled JavaScript (auto-generated, never edit)
|-- store/
|   `-- claudeclaw.db                 <-- SQLite: memory, sessions, scheduled tasks
|-- specs/
|   `-- handoffs/                     <-- Session handoff files for continuity
|-- skills/                           <-- Project-level skills (gmail, calendar, slack, timezone)
|-- .env                              <-- Secrets (never commit to git)
|-- CLAUDE.md                         <-- Root brain (this is the most important file)
`-- package.json
```

### The Three Configuration Files That Matter Most

**1. CLAUDE.md (root)**
This is 80% of the work. It defines who the client is, their business context, how they communicate, what tools they use, how agents are routed, what the scheduling patterns are, how memory works, and what special commands do. The better this file, the smarter the system. No shortcuts here.

**2. agents/comms/CLAUDE.md**
Outreach message rules (no dashes, no AI clichés), offer language standards, channel-specific format rules (WhatsApp vs email vs LinkedIn DM), follow-up sequences, and what never to say in a client message.

**3. agents/ops/CLAUDE.md**
Prospect tracking instructions, pipeline stages, milestone definitions, morning digest format, CRM source of truth (Airtable for Juan), and escalation rules for overdue follow-ups.

### The agent.yaml File

Each agent has an agent.yaml that controls the technical configuration -- separate from CLAUDE.md which controls behavior:

```yaml
name: Comms
description: All human communication -- outreach, follow-ups, proposals

telegram_bot_token_env: COMMS_BOT_TOKEN  # Which .env key holds this agent's bot token

model: claude-sonnet-4-6                  # Which Claude model this agent uses

obsidian:                                 # Optional Obsidian vault connection
  vault: C:\Users\Juan Gonzalez\Documents\PVRPOSE_AI\notes
  folders:
    - Inbox/
    - Client Work/
  read_only:
    - Daily Notes/
```

Each agent can have its own dedicated Telegram bot. You can text your Comms agent separately from your Ops agent. Each has a different bot token, a different username, a different conversation history. For most clients, start with just the main bot. Add dedicated agent bots in the retainer phase.

---

## SECTION 9: DEMO STRATEGY

### The Goal of the Demo

Not to show features. To make the prospect feel what Monday morning will be like.

The demo proves three things in under 20 minutes:
1. It works right now, live, on your phone
2. It knows your voice and your business -- not a generic bot
3. It saves real time on things you do every single day

### Demo Script (20 Minutes)

**Minutes 1-3: Context setting**

"Before I show you anything, let me tell you what this is not. It is not a chatbot you put on your website. It is not another tool you have to log into. It is an AI that runs your operations from your phone -- the same phone you already use all day."

**Minutes 4-8: Live demo -- the morning brief**

Open Telegram on your phone. Share screen.
Send: "Brief me on [use a real prospect name from the prospect's industry -- prep this before the call] before my call."

The system pulls the prospect's profile and returns:
- Who they are, their business, their pain
- What offer was made
- One sharp opening question for the call

Say: "That briefing took 8 seconds. Without this, that would have been 15 minutes of digging through notes and email."

**Minutes 9-13: Live demo -- outreach drafting**

Record a voice note (share screen so they see you recording it on the phone):
"Draft a WhatsApp message to a solo immigration lawyer, TNC member, 15 active clients, we've never met."

The system writes a complete outreach message in your voice -- no dashes, no AI clichés, specific pain points, correct offer language.

Say: "This is in my voice. Not ChatGPT voice. My voice. Because the system was built around how I actually communicate."

**Minutes 14-17: Live demo -- proposal drafting**

Send: "Draft a Pioneer Audit proposal for [prospect name], $2,500 CAD, [their industry], we talked about [their specific pain point]."

The system writes a complete proposal, saves it to proposals/, generates a PDF, and sends it back via Telegram.

Say: "That would have taken me 45 minutes. It took 90 seconds."

**Minutes 18-20: Positioning close**

"This is what I built for myself over 2.5 years. It runs my entire business from my phone. What I am offering you is a version of this built around how your business actually works -- your clients, your voice, your workflows. Not a template. A custom operating system."

### Demo Rules

- Always demo live. Never show a recording.
- Always use real prospect data in the demo brief. Prep it before the call.
- Always show the phone screen, not a laptop. The phone is the point.
- Run `npx tsx scripts/status.ts` within 1 hour before every demo. Never demo an unchecked system.
- If something breaks during the demo: "This is why the build takes 6 weeks -- we test everything. You are seeing me work in my own system, not a staged environment."
- Prepare 2-3 sentences in the prospect's exact voice before every demo call. When the system produces those, the conversation changes. "That sounds like me. How does it know that?" -- that is the moment that closes.

---

## SECTION 10: PRICING AND OFFER STRUCTURE

### Current Offers (Pioneer Phase -- March 2026)

**Pioneer 1 -- Free Full Build (1 spot)**
- Full audit plus full 6-week build at $0 upfront
- Client pays tooling only: $100-350/month (Anthropic API + optional VPS $10-20/month)
- Build value: $15,000-$25,000 CAD
- Exchange: one on-camera video testimonial (face visible, one specific measurable result) plus one warm introduction to a founder in their network
- Status: George Mills confirmed

**Pioneers 2 and 3 -- PVRPOSE AI OS Audit ($2,500 CAD each, 2 spots)**
- Full 2-week AI OS Readiness Audit as described in Section 12
- Includes: workflow mapping session, blueprint design, CLAUDE.md architecture, AI Readiness Report, ROI projection
- $2,500 credited in full toward the build if client proceeds
- Standard audit rate: $5,000-7,500 CAD (pioneer discount)

### Standard Pricing (Post-Pioneer)

| Offer | Price (CAD) | What It Is |
|---|---|---|
| PVRPOSE AI OS Audit | $5,000-7,500 | 2-week engagement. Workflow map, blueprint, Readiness Report, ROI projection. Credited toward build. |
| PVRPOSE AI OS Full Build | $15,000-$25,000 | 6-week engagement, one-time. Full system live on private infrastructure. 30-day support included. |
| AI Optimization Retainer | from $3,000/month | 1 new automation/month, optimization, monthly strategy call, async support. |

**What drives variance in build pricing:**
- Number of integrations (each skill setup adds time)
- Number of automations (standard is 2 during the build)
- Data complexity (50 active prospect files vs 5)
- Compliance requirements (Quebec Law 25 review adds scope)
- Training requirements (1 founder vs a small team)

**Retainer economics:**
The retainer requires 8-12 hours of work per client per month. At $3,000/month: 3 retainer clients = $9,000/month recurring, 5 = $15,000/month recurring. Target: every full build client converts to a retainer. Conversion target: 50%+.

**What this is NOT:**
Not a SaaS product. Not a white-label reseller model. Not a template you sell for $99. This is a custom-built, done-for-you professional service. Like hiring a contractor to build your office -- bespoke, owned by the client, maintained optionally.

### Financial Projections

**Pioneer Phase outcome:** 3 pioneers = $5,000 CAD minimum cash + 1 full build case study. If 2 of 3 convert to full builds: $30,000-$50,000 CAD additional.

**Year 1 Conservative (3 builds, 2 retainers):** $130,000-$145,000 CAD
**Year 1 Moderate (5 builds, 3 retainers):** $140,000-$163,500 CAD
**Year 2 (referral engine running, 6-8 builds, 5-6 retainers):** $345,000-$506,000 CAD

**Average client lifetime value (audit + build + 12 months retainer):** $53,500-$75,500 CAD

---

## SECTION 11: CLIENT QUALIFICATION

### Qualifies

- Registered business in Canada or USA
- $100K+ annual revenue, active operations (not pre-revenue)
- Professional services, construction, agencies, advisory, legal, accounting
- 10+ hours/week lost to admin, follow-ups, proposals, reporting
- Comfortable working in English
- Has Telegram or willing to install it
- Has an Anthropic account or willing to create one
- Decision-maker available for 2 hours/week during the build

### Disqualifies

- Pre-revenue or under $50K annually
- Wants to build and maintain it themselves (sell them the Audit, not the Build)
- Expects instant results (minimum 6 weeks to deliver real value)
- Needs multi-user enterprise access (not the right product yet)
- Operates in a heavily regulated industry requiring full compliance audit without first engaging legal counsel
- Not willing to invest in professional implementation

### Voice Style Differences by Industry (For CLAUDE.md Configuration)

| Industry | Voice Style | What They Never Say | Key Phrases |
|---|---|---|---|
| CPAs / Accountants | Precise, numbers-first, no fluff | "amazing", "excited", "thrilled" | "based on your file", "as per the deadline" |
| Lawyers | Formal but direct, structured | Colloquialisms, emojis | "pursuant to", "as discussed" |
| Consultants | Conversational, confident, personal | Passive voice, corporate jargon | "here is what I see", "let me be direct" |
| Construction / Trades | Direct, practical, zero nonsense | Over-explaining, hedging | "here is the number", "I need X by Y" |
| Agencies | Casual but polished | Jargon overload | "here is the plan", "I will handle it" |

### Common Objections and Responses

**"I'm not technical."**
"You don't need to be. You send voice notes from your phone. We handle everything on the backend. The most technical thing you will do is install Telegram."

**"Is this secure? My client data is sensitive."**
"Your data never leaves your infrastructure. It runs on a server you own and control. Nothing passes through any third-party service except Anthropic's API -- which has enterprise-grade security and data agreements. We cover all of this in the compliance review during the audit."

**"ChatGPT can do all this."**
"ChatGPT has no memory of your business between conversations. It does not know your clients, your voice, your pricing, your deals. Every session starts from zero. PVRPOSE AI OS knows your business the way a senior employee would -- and gets smarter about your business every month."

**"What happens if something breaks?"**
"The 30-day support period covers anything that breaks in normal use. After that, the retainer is your ongoing support. And because you own the system, if you choose not to retain us, the system keeps running -- it doesn't stop working when you stop paying."

**"That's expensive for an AI tool."**
"This is not a tool. This is a custom operating system built around your specific business, by a specialist, deployed on your private infrastructure. The comparable is hiring a developer to build you a custom CRM and workflow system -- which would cost $50K-$100K and would not be as intelligent."

---

## SECTION 12: THE 6-WEEK BUILD SOP

### Pre-Build Checklist (Before Signing)

- [ ] Client has a registered Canadian or US business
- [ ] Client revenue is $100K+ annually
- [ ] Client has active operations (not pre-revenue)
- [ ] Service agreement signed
- [ ] 50% deposit received (or Pioneer terms confirmed)
- [ ] Client comfortable working in English
- [ ] Discovery call completed and notes saved
- [ ] Client has Telegram installed on their phone (or will install before Week 1)

**What to collect at discovery:**
- Top 3 admin bottlenecks (specific, not general -- "proposals take 3 hours each", not "I'm too busy")
- Current tools (CRM, email, scheduling, billing)
- Communication style -- formal or casual, brief or detailed
- Key workflows to automate (intake, proposals, follow-ups, reporting)
- Data they want the system to know (clients, pricing, templates)

---

### Week 1-2: AI OS Readiness Audit

**Goal:** Fully map the client's workflows and design the blueprint. Deliver the CLAUDE.md architecture before touching code.

**Day 1-2: Workflow mapping session (2 hours)**

Run a structured discovery covering:
- A typical Monday morning -- what do they do first?
- Where do they lose the most time each week?
- What do they repeat that could be automated?
- What decisions do they make that always follow the same logic?
- What do they wish they had more time to do?

Document everything in data/[clientname]-workflow-map.md.

**Day 3-5: Blueprint design**

Write the first draft of CLAUDE.md for the client:
- Their identity section (who they are, what they do, how they think)
- Their agent configurations (comms, ops, content, research rules)
- Their tools inventory
- Their voice rules (specific phrases they use, things they never say)
- Their prospect and client context structure

**Day 6-8: Data file creation**

Create the data/ folder structure:
- One .md file per active prospect (pull from their CRM/Airtable using the template in Section 6)
- One .md file per active client
- Template files for their most common outputs (proposals, follow-ups)

**Day 9-10: Readiness Report delivery**

Deliver a written report covering:
- Top 3 automation opportunities with projected ROI (use Section 16 numbers)
- Custom PVRPOSE AI OS architecture blueprint
- Telegram mobile access plan
- Private infrastructure setup plan
- 6-week implementation roadmap

Present in a 60-minute video call. Get explicit approval before Week 3.

**Deliverables end of Week 2:**
- [ ] Workflow map document saved to data/
- [ ] CLAUDE.md first draft (client-approved)
- [ ] data/prospects/ files created
- [ ] Template files (at minimum: proposal + follow-up)
- [ ] AI Readiness Report delivered and approved
- [ ] Week 3 build kickoff scheduled

---

### Week 3-4: Core Build

**Goal:** Configure and deploy the working system on private infrastructure. First live demo by end of Week 4.

**Day 11-12: Infrastructure setup**

Option A -- Client's own machine (Windows/Mac):
```bash
# Install Node.js from nodejs.org
npm install -g @anthropic-ai/claude-code
git clone [repo URL] [clientname]-pvrpose-ai-os
cd [clientname]-pvrpose-ai-os
npm install
cp .env.example .env
# Fill in their tokens and keys
npm run build
npm start
```

Option B -- Private VPS (recommended for 24/7 availability):
```bash
# Provision VPS at Hetzner -- Ubuntu 22.04, CX11 ($4-6/month)
ssh root@[server-ip]
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs
npm install -g @anthropic-ai/claude-code
git clone [repo URL] pvrpose-ai-os
cd pvrpose-ai-os
npm install
npm run build
nano .env  # paste tokens and keys, Ctrl+X to save
npm install -g pm2
pm2 start dist/index.js --name "pvrpose-ai-os"
pm2 startup
pm2 save
```

Verify bot responds to /start from the client's phone before proceeding.

**Day 13-15: CLAUDE.md configuration**

Apply the approved blueprint from Week 2:
- Root CLAUDE.md with full client context
- agents/comms/CLAUDE.md with their outreach rules
- agents/ops/CLAUDE.md with their pipeline and CRM instructions
- agents/content/CLAUDE.md with their content style (if applicable)
- agents/research/CLAUDE.md (standard -- minimal customization)

Test each agent with 3-5 real scenarios from the workflow map.

**Day 16-17: First automation build**

Build the highest-ROI automation from the Readiness Report. Common choices:
- Prospect briefing system (data/prospects/ + briefing prompt)
- Outreach message drafting (comms agent + voice rules)
- Proposal generation (templates/ + generate-pdf.py)
- Morning digest cron

```bash
# Example: morning digest cron
node dist/schedule-cli.js create "Read data/prospects/ and give me a morning pipeline summary: who needs follow-up today, who responded overnight, what is my priority action" "30 7 * * 1-5"
```

**Day 18-20: Week 4 demo and feedback**

Prepare 3 live demo scenarios using the client's actual data.
Run the demo on a video call -- client shares Telegram on their phone.
Collect feedback. Adjust CLAUDE.md and agent configs based on feedback.
Document all feedback in a change log.

**Deliverables end of Week 4:**
- [ ] System live on private infrastructure
- [ ] All 4 agents configured and tested
- [ ] First automation working
- [ ] Week 4 live demo completed with client
- [ ] Feedback collected and logged
- [ ] Second automation scoped

---

### Week 5-6: Go-Live

**Goal:** Full QA, second automation live, training, handoff.

**Day 21-23: Second automation build**

Build the second-highest-ROI automation from the Readiness Report. Run QA on both automations -- test edge cases, voice accuracy, response quality.

**Day 24-25: Full system QA**

Test the complete system end-to-end:
- [ ] Voice note to Telegram -- correct response within 30 seconds
- [ ] Text command -- correct output
- [ ] Scheduled task running on time
- [ ] PDF generation working
- [ ] Memory and recall working (checkpoint, cross-session)
- [ ] All agent prompts producing on-brand outputs
- [ ] File delivery ([SEND_FILE:] markers working)
- [ ] Gmail skill: inbox returns correctly
- [ ] Google Calendar: events return correctly
- [ ] Status check: `npx tsx scripts/status.ts` -- all green

**Day 26-28: Team training**

Record a video walkthrough (screen + voice):
- How to send commands (text and voice)
- What each agent does and when to use it
- How to update prospect and client files
- How to save a checkpoint
- How to check context life (convolife)
- What to do if the bot stops responding (restart command)

Save videos to a shared Google Drive folder.
Run a live 60-90 minute training session with the client (and any team members).

**Day 29-30: Handoff**

Deliver final documentation package:
- System architecture overview (what was built and why)
- CLAUDE.md annotated (what each section does)
- Agent configuration summary
- Data file structure and how to update them
- Scheduled tasks list
- Maintenance instructions (restart, update, backup)
- Escalation path for technical issues

Confirm client can independently:
- Send a command and get a response
- Update a prospect file
- Run a proposal generation
- Check system health

**Deliverables end of Week 6:**
- [ ] Both automations live and QA'd
- [ ] Full system QA pass completed
- [ ] Video training library recorded (minimum 3 videos)
- [ ] Live training session completed
- [ ] Documentation package delivered
- [ ] Client can operate the system independently
- [ ] 30-day support period begins

---

## SECTION 13: POST-DELIVERY (30-DAY SUPPORT)

### Support Scope (Included)

- Bug fixes for anything that breaks in normal use
- Minor CLAUDE.md adjustments (voice tuning, new prospect files)
- Async support via email or Slack (response within 24 hours on weekdays)
- One 30-minute check-in call at the end of the support period

### Out of Scope (Billable at Retainer Rate)

- New automation builds not in the original scope
- CRM integration via direct API skills (quoted separately)
- Infrastructure migration
- Team expansion (additional users)

### Testimonial Request (Week 7)

At the end of the support period, request:
1. One 1-2 minute on-camera video. Face visible. One specific measurable result. Examples: "I save 3 hours a day", "I drafted 12 proposals in one week", "I never miss a follow-up now."
2. One warm introduction to a founder in their network who could benefit.

Do not ask for the testimonial earlier than Week 7. The system needs to be live long enough to produce a real result worth sharing. A warm introduction from a trusted colleague converts at 30-50%. This is the single highest-ROI acquisition channel.

---

## SECTION 14: REPLICATION CHECKLIST (PER CLIENT)

One copy per client. Store in their project folder. Check off as completed.

### Pre-Build
- [ ] Discovery call completed, notes saved
- [ ] Workflow map document created
- [ ] Service agreement signed
- [ ] Deposit received
- [ ] Telegram installed on client's phone
- [ ] Anthropic API key provisioned (client account or PVRPOSE AI account with billing pass-through)
- [ ] Telegram bot created via @BotFather, token secured
- [ ] Client chat ID obtained (message @userinfobot on Telegram)

### Week 1-2 (Audit)
- [ ] 2-hour workflow mapping session complete
- [ ] data/[client]-workflow-map.md saved
- [ ] CLAUDE.md first draft written
- [ ] agents/ CLAUDE.md files configured (all 4 agents)
- [ ] data/prospects/ files created (all active prospects)
- [ ] data/clients/ files created (all active clients)
- [ ] templates/ folder created (minimum: proposal + follow-up)
- [ ] AI Readiness Report written and delivered
- [ ] Report presented in 60-minute video call
- [ ] Client approval received
- [ ] Week 3 kickoff scheduled

### Week 3-4 (Build)
- [ ] Infrastructure provisioned (VPS or local machine)
- [ ] ClaudeClaw installed and running
- [ ] Bot responding to /start from client's phone
- [ ] Full CLAUDE.md applied
- [ ] All 4 agents configured with agent.yaml files
- [ ] Gmail skill setup (if client uses Gmail)
- [ ] Google Calendar skill setup
- [ ] Slack skill setup (if client uses Slack)
- [ ] Timezone skill updated with client's locations
- [ ] WhatsApp bridge enabled (if relevant for client)
- [ ] First automation built and tested
- [ ] Morning digest cron scheduled
- [ ] Week 4 demo completed
- [ ] Feedback logged and applied

### Week 5-6 (Go-Live)
- [ ] Second automation built and tested
- [ ] Full QA pass completed (all items in Section 12 QA list)
- [ ] Dashboard configured and accessible
- [ ] Video training library recorded (minimum 3 videos)
- [ ] Live training session completed
- [ ] Documentation package delivered
- [ ] Client independently operating the system
- [ ] 30-day support period active

### Post-Delivery
- [ ] Week 7 testimonial request sent
- [ ] Video testimonial received (face visible, specific result)
- [ ] Warm introduction received
- [ ] Case study drafted (internal use)
- [ ] Client files archived

### Skills Setup Checklist (Within Week 3-4)

**Gmail Skill**
- [ ] Google Cloud project created
- [ ] Gmail API enabled
- [ ] OAuth 2.0 credentials (Desktop app) downloaded to ~/.config/gmail/credentials.json
- [ ] Auth command run, browser authorized
- [ ] .env updated: GOOGLE_CREDS_PATH and GMAIL_TOKEN_PATH
- [ ] Test: "check my email" -- inbox returns correctly

**Google Calendar Skill**
- [ ] Calendar API enabled in same Google Cloud project as Gmail
- [ ] Auth command run for calendar separately
- [ ] .env updated: GCAL_TOKEN_PATH
- [ ] Timezone updated in gcal.py to client's local timezone (America/Toronto for Quebec)
- [ ] Test: "what's on my calendar this week" -- events return correctly

**Slack Skill** (only if client uses Slack)
- [ ] Slack app created at api.slack.com/apps
- [ ] All 11 User Token Scopes added (listed in Section 5, Skill 3)
- [ ] App installed to workspace, xoxp- token copied
- [ ] .env updated: SLACK_USER_TOKEN
- [ ] Test: "check my Slack" -- conversations return correctly

**Timezone Skill**
- [ ] skills/timezone/SKILL.md updated with client's relevant locations
- [ ] Test: "what time is it" -- correct locations and times shown

---

## SECTION 15: COMPETITIVE POSITIONING

| Competitor | What They Offer | Why PVRPOSE AI OS Wins |
|---|---|---|
| ChatGPT / Claude.ai | Generic AI chat, no memory, no business context | Stateless. Knows nothing about the client's business after each conversation. Every request starts from zero. No voice input. No file handling. No scheduling. |
| n8n / Zapier freelancers | Workflow automation for specific triggers and actions | No conversational interface. Rigid workflows break when reality changes. No voice input. No context. No memory. Requires constant maintenance. |
| Marketing / ops agencies | Done-for-you content and admin | $5K-$15K/month ongoing. Still requires the founder's input for everything non-standard. No AI memory. Humans make it fragile. Off at night. |
| Microsoft Copilot | AI in Office 365 tools | Enterprise-first. Requires M365 subscription. No private infrastructure. No Telegram. No voice-to-action. No custom business context. |
| Hiring an EA | Human executive assistant | $63K-$98K CAD/year (Robert Half 2026). Requires onboarding, management, vacation coverage. Does not work at 11pm. Cannot hold the entire company's context simultaneously. |
| DIY with Claude Code | Build it yourself | Requires 200+ hours to reach what PVRPOSE AI delivers in 6 weeks. No compliance review. No proven workflow. No voice pipeline. No agent architecture. |
| Generic AI chatbot vendors | Pre-built chatbot platforms with templates | Template-based, not custom. No private infrastructure. No voice. No CRM integration. No proposal generation. Not the founder's voice. |

**The pitch in one sentence:** The intelligence of a senior EA combined with the speed of AI and the security of private infrastructure, built specifically around how your business works.

---

## SECTION 16: ROI FRAMEWORK BY INDUSTRY

Use this when pitching the system. Conservative estimates based on actual workflow time. Always present these as "what we have seen in similar practices" -- never guarantee specific numbers. Add the disclaimer: "Actual time savings depend on how the system is configured and how consistently it is used."

### Solo Immigration Lawyer (like Nathalie McKenzie)

**Hours saved per week:** 10-15 hours

| Task | Before | After |
|---|---|---|
| Proposal drafting (8 proposals/month) | 3-4 hours/week | 20 minutes/week |
| Client follow-up drafting | 2 hours/week | 20 minutes/week |
| Calendar coordination | 1 hour/week | 10 minutes/week |
| Inbox triage and prioritization | 2 hours/week | 30 minutes/week |
| Pre-call research and prep | 3 hours/week | 30 minutes/week |

At $350-500/hour billing rate: $3,500-$7,500/week in recovered billable capacity.
PVRPOSE AI OS cost: $15,000-$25,000 CAD one-time.
Break-even: 2-6 weeks.
Year 1 ROI: 600-910%.

### Construction Law Firm or General Contractor (like George Mills)

**Hours saved per week:** 12-18 hours

| Task | Before | After |
|---|---|---|
| Contract and proposal generation | 4-5 hours/week | 45 minutes/week |
| Client communication drafting | 3 hours/week | 30 minutes/week |
| Subcontractor coordination messages | 2 hours/week | 20 minutes/week |
| Project status briefs for clients | 2 hours/week | 15 minutes/week |
| After-hours inbox and WhatsApp triage | 2 hours/week | 20 minutes/week |

At $300-450/hour billing rate: $3,600-$8,100/week in recovered capacity.

### CPA Firm Owner (2-10 person practice)

**Hours saved per week:** 8-12 hours (principal's time only)

| Task | Before | After |
|---|---|---|
| Client intake and onboarding documents | 2 hours/week | 20 minutes/week |
| Status updates and client communication | 3 hours/week | 30 minutes/week |
| Proposal and engagement letter drafting | 2 hours/week | 20 minutes/week |
| Internal team briefings | 1-2 hours/week | 15 minutes/week |

At $400-600/hour billing rate: $3,200-$7,200/week in recovered capacity.

### Marketing Agency Owner (5-20 person agency)

**Hours saved per week:** 10-15 hours (principal's time)

| Task | Before | After |
|---|---|---|
| New business proposals | 4-6 hours/week | 45 minutes/week |
| Client reporting and update emails | 3 hours/week | 30 minutes/week |
| Competitive research briefs | 2-3 hours/week | 20 minutes/week |
| LinkedIn and content creation | 2 hours/week | 30 minutes/week |

At $250-400/hour value rate: $2,500-$6,000/week in recovered capacity.

---

## SECTION 17: SESSION MANAGEMENT

### The Context Window

Every conversation with Claude uses context. The context is everything Claude "remembers" in the current session: the system prompt (CLAUDE.md), conversation history, all data files and information shared in the session.

ClaudeClaw uses a 1,000,000 token context window (configurable via CONTEXT_LIMIT in .env). This is enormous -- roughly 750,000 words -- but it fills up over long, heavy sessions.

**Automatic warning at 75% usage:** The system sends a Telegram message: "Context window is 75% full. Consider starting a new conversation soon with /newchat."

**What happens at 100%:** Claude becomes less coherent. Old context is evicted. The system compacts automatically but quality degrades.

### convolife (Context Health Check)

Type `convolife` at any time to get a status report.

How it works: Claude queries the SQLite token_usage table using the steps in CLAUDE.md. Returns:
```
Context: 34% (~340k / 1M available)
Turns: 47 | Compactions: 1 | Cost: $0.43
```

Calculation: context_limit = 1,000,000 (or CONTEXT_LIMIT from .env). baseline = first turn's context_tokens (system prompt overhead). available = context_limit - baseline. conversation_used = last_context - baseline. percent_used = conversation_used / available * 100.

Use convolife after long research sessions or heavy document generation to know when to /newchat.

### checkpoint (Session Memory Save)

Type `checkpoint` to save a TLDR of the current session to SQLite. It survives /newchat.

How it works: Claude writes a 3-5 bullet summary of key things discussed and decided in this session, finds the chat_id from the sessions table, inserts it into the memories table as a high-salience semantic memory (salience: 5.0). Confirms: "Checkpoint saved. Safe to /newchat."

When to checkpoint: before /newchat after an important session, after finalizing a deal or making a key decision, after completing a major milestone in a client build.

### /newchat

**What it does:** Clears conversation history. Starts fresh with only CLAUDE.md context. Persisted memories (checkpoint and semantic) survive. In-session conversation clears.

**When to use:** After a long document generation session. When shifting from one topic to something unrelated. At the start of each work day. Immediately after a context warning.

**Business workflow:** Start every morning with /newchat. Clean slate with full CLAUDE.md context but no stale conversation history from the day before.

### /respin

**What it does:** Regenerates the last Claude response. Gets a different take on the same request.

**When to use:** The proposal draft came out too formal. The LinkedIn post doesn't land. The research response was too surface-level.

**Rule:** Use once or twice. If the third version is still wrong, the problem is the prompt. Clarify what specifically did not work before asking again.

### /stop

**What it does:** Cancels the current Claude operation. Useful when a task is taking too long, you sent the wrong request, or the bot appears stuck.

### /model

**Command:** /model opus, /model sonnet, or /model haiku

| Model | When to Use | Relative Cost |
|---|---|---|
| opus (claude-opus-4-6) | Complex proposals needing legal or strategic nuance. Deep competitive research. Output going directly to a client without editing. | 4-5x Sonnet |
| sonnet (claude-sonnet-4-6) | Default. Everything else -- daily use, drafts, briefings, research, calendar. Best cost/quality ratio. | 1x (baseline) |
| haiku (claude-haiku-4-5-20251001) | Bulk simple tasks. Testing whether a prompt works. Quick calendar checks. Throwaway tasks. | ~0.1x Sonnet |

**Business rule:** Default to Sonnet. Switch to Opus only when writing something that goes to a client directly and the stakes are high. Use Haiku only for testing or throwaway tasks.

**Cost context:** At typical usage (5-10 heavy interactions per day): Sonnet = $5-15/month. Opus = $25-50/month. Haiku = under $1/month.

### /memory and /forget

**/memory:** Returns all stored memories from the SQLite memories table.

**Example output:**
```
Stored memories (7 items):
- I prefer short WhatsApp messages -- no more than 3 sentences
- I use Airtable as my CRM
- I never use em dashes or AI clichés in client messages
- My standard follow-up timing is 3 days
- Pioneer Audit price is $2,500 CAD, credited toward full build
- My home base is Montreal, clients across Quebec and Ontario
- I prefer voice notes over typing when on the move
```

**How memories are created automatically:** The system watches every message for semantic signal phrases -- "I prefer...", "I always...", "I never...", "remember that...", "my [thing] is...". When detected, it stores as a high-salience semantic memory.

**/forget [description]:** Finds memories matching the description and deletes them. Use when a preference changes, a client detail is outdated, or the system learned something incorrect.

**Example:** "/forget the Pioneer Audit pricing." Then: "My Pioneer Audit price is now $3,500 CAD." to store the correct version.

### Memory Architecture (Technical Reference)

**Two memory types:**

Semantic memories -- long-lived, salience 5.0. Triggered by "I am / I'm / I prefer / remember / always / never" patterns. These are facts about you, your business, your preferences. Decay: minimal. Stay until /forget.

Episodic memories -- shorter-lived, lower salience. Triggered by noteworthy session events. Capture what happened -- what was built, what was decided. Decay: daily salience sweep reduces score, eventually evicted if not accessed.

**How retrieval works:** When you send a message, the system runs two searches simultaneously:
1. FTS5 full-text search (top 3 results) -- finds memories containing the exact words used
2. Recency search (top 5 results) -- most recently accessed memories regardless of keyword match
Results are deduplicated. Up to 8 memories injected as context per turn.

---

## SECTION 18: DAY IN THE LIFE -- JUAN'S DAILY USE

This narrative shows what the system looks like in real daily practice. Use as a training script for demos and client onboarding.

### 7:30 AM -- Morning Coffee

Juan opens Telegram on his phone while making coffee. Sends /newchat to start a fresh session. Sends: "Morning. What's my pipeline for today and what's on my calendar?"

The system reads all data/prospects/ files, checks Google Calendar, and returns:
```
Pipeline:
- George Mills -- ACTIVE -- send agreement by end of today
- Nathalie McKenzie -- PROPOSAL SENT -- 4 days no response, follow up today
- Michael Schacter -- DISCOVERY SCHEDULED -- call Thursday 2pm
- Andrea Soueidan -- COLD -- initial outreach not sent yet

Calendar today:
- 10am: TNC pre-call prep (blocked)
- 2pm: Discovery call -- Michael Schacter
- 4pm: Free

Priority action: Send George's agreement. Draft Nathalie's follow-up.
```

Total time: 45 seconds. Juan knows exactly what the day looks like without opening Airtable, Gmail, or Google Calendar.

### 8:15 AM -- Driving to a Meeting

Juan records a voice note while driving:
"Draft a follow-up WhatsApp to Nathalie. It's been 4 days. Short, warm, no pressure."

Groq transcribes in 1.5 seconds. Claude drafts:
"Hey Nathalie, just following up on the audit proposal I sent Tuesday. Happy to jump on a quick call if you have questions about anything. Let me know what works for you."

Juan reads it at the next red light. It sounds like him. He sends it from WhatsApp directly. Total time: 3 minutes.

### 9:45 AM -- Pre-Call Preparation

15 minutes before the discovery call with Michael Schacter.
Juan sends: "Brief me on Michael Schacter. Our call is at 2pm."

System returns:
```
Michael Schacter -- Immigration lawyer, solo practice, Montreal
Pain: Proposal generation takes 3-4 hours per client. 8-12 proposals/month.
Context: Met through TNC. Mutual connection is James Hutchinson.
Last contact: Discovery call booked March 10.
Offer stage: Pre-proposal.
Opening question: "You mentioned proposals take 3-4 hours each -- is that because of the research, the writing, or the back-and-forth with clients for information?"
```

Juan is ready. Total time: 30 seconds.

### 12:30 PM -- Post-Call Notes (Voice Note)

Right after the Michael Schacter call.
"Michael is interested. He wants the audit. Main concern is whether his client data stays private. He mentioned he has 15-20 active files per month. Budget is not an issue -- $2,500 is reasonable. Next step is send the proposal today. Update his file."

Claude updates data/prospects/michael-schacter.md with the new status, notes, and next action. Total time: 90 seconds including voice recording.

### 1:15 PM -- Proposal Generation

"Draft the Pioneer Audit proposal for Michael Schacter. His main pain is proposal generation at 3-4 hours each. Emphasize the privacy and data security section. He's a lawyer -- that matters to him."

Claude drafts the full proposal in 90 seconds. Juan reviews, makes two small edits.
"Generate the PDF and send it to me."

PDF arrives in Telegram. Juan forwards it to Michael's email directly. Total time: 8 minutes for a proposal that would have taken 45 minutes.

### 3:30 PM -- LinkedIn Post

During a short break, Juan records a 60-second voice note:
"I want to write a LinkedIn post about today. A lawyer told me he spends 3-4 hours writing each proposal. He has 12 proposals a month. That's 36-48 hours a month just on proposals. Write something around that."

System drafts a sharp LinkedIn post with a strong hook, the specific numbers, and a CTA that is not a sales push. Juan approves it and posts. Total time: 4 minutes.

### 6:00 PM -- End of Day

Juan sends: "Checkpoint. Today: Nathalie follow-up sent, Michael Schacter proposal delivered, George agreement status still pending. Next: Michael response expected tomorrow, George expected to sign by end of week, Andrea outreach still not sent."

Checkpoint saved. Context preserved for tomorrow. Juan closes Telegram.

---

## SECTION 19: PRIORITY SEQUENCING

The order of operations for Juan's own build and the same sequence for every new client.

### Tier 1 -- Critical (Do These First, Week 1)

These block everything else. Without these, the system does not work correctly.

1. **Fill in CLAUDE.md root file** -- replace all [BRACKETED] placeholders with real values. This is the brain. Everything depends on it being configured.

2. **Create data/prospects/ files for active pipeline** -- create files for George Mills, Nathalie McKenzie, Andrea Soueidan, Michael Schacter, James Hutchinson. Use the template in Section 6. These are what the morning briefing and pre-call prep read from.

3. **Set up morning digest cron** -- runs every weekday forever after one setup command:
```bash
node dist/schedule-cli.js create "Read data/prospects/ and give me a morning pipeline summary: who needs follow-up today, who responded overnight, what is my priority action" "30 7 * * 1-5"
```

### Tier 2 -- High Impact (Week 2)

4. **Set up Gmail skill** -- email read/draft from Telegram. Without this, all email work is manual.

5. **Set up Google Calendar skill** -- calendar management from Telegram. Without this, scheduling requires leaving Telegram.

6. **Create templates/ folder with proposal templates** -- proposal-audit.md, proposal-fullbuild.md, follow-up-noresponse.md. Better templates = better output.

7. **Rename run-claudeclaw.bat.txt to run-claudeclaw.bat** (Windows only) -- allows auto-start on boot.

### Tier 3 -- Valuable (Week 3-4)

8. **Set up WhatsApp bridge** -- enable WHATSAPP_ENABLED=true, run wa-daemon. Now Claude can see WhatsApp message history and queue messages.

9. **Build Airtable direct API skill** -- `scripts/airtable.js` + `~/.claude/skills/airtable/SKILL.md`. Claude reads/writes Airtable directly via REST API. No middleware. Without: Juan updates files manually. With: Claude pulls and updates Airtable records on demand.

10. **Create agents/research/agent.yaml** -- copy from agent.yaml.example, configure, test. Enables the research agent properly.

11. **Set up ElevenLabs voice cloning** -- clone voice, add keys to .env. Bot replies in Juan's voice. High demo impact.

### Tier 4 -- Nice to Have (After Everything Else Works)

12. Set up Slack skill (if relevant clients use Slack)
13. Set up Cloudflare Tunnel for dashboard remote access
14. Add data/tnc-members/ files for the TNC network
15. Build custom /prospect-brief command for one-shot pre-call prep

### What NOT to Build First

- Do not set up TTS voice replies before Tier 1 and 2 are working
- Do not build the Airtable sync before the manual prospect files work
- Do not add Slack before Gmail and Calendar are confirmed working
- Do not optimize anything before the basic flows are tested with real data

---

## SECTION 20: AGENT SYSTEM -- MULTI-AGENT ARCHITECTURE

### The Four Agents

Each agent has its own CLAUDE.md (behavior configuration) and agent.yaml (technical configuration). Agents route automatically based on what you ask -- you do not call them manually.

**comms** -- handles all human communication: outreach drafts, follow-ups, email triage, LinkedIn DMs, proposal delivery emails.

**content** -- handles content creation: LinkedIn posts, YouTube scripts, carousel outlines, content repurposing.

**ops** -- handles operations: pipeline tracking, prospect status, morning digest, billing notes, CRM sync instructions.

**research** -- handles intelligence: prospect research, competitor analysis, industry briefings, market research.

### HiveMind Shared Memory

Every time an agent completes a meaningful action, it logs to the hive_mind table in SQLite. This creates a cross-session audit trail.

Example entry:
```
agent_id: comms
action: drafted_outreach
summary: Drafted WhatsApp + email for George Mills, Pioneer Build offer, sent for approval
timestamp: 2026-03-11T14:32:00Z
```

Ask "What did the comms agent do last week?" and get a real answer.

### How to Create a New Agent

```bash
bash scripts/agent-create.sh
```

This interactive script:
1. Asks which template to copy (comms, content, ops, research, or blank)
2. Asks for the agent ID (e.g. intake, billing, social)
3. Walks you through creating a Telegram bot via @BotFather
4. Saves the token to .env automatically
5. Creates the agent.yaml
6. Builds the project
7. Optionally starts the agent for a quick test

### How to Install an Agent as a Background Service

**macOS/Linux:**
```bash
bash scripts/agent-service.sh install comms
```
Installs as launchd plist (macOS) or systemd user unit (Linux). Auto-starts at login, auto-restarts on crash.
Logs: store/agent-comms.log (macOS) or `journalctl --user -u com.claudeclaw.agent-comms -f` (Linux)

**Windows (Juan's machine):** Use PM2 or add to the startup batch file.

---

## SECTION 21: VOICE PIPELINE

### Complete Pipeline

```
YOU RECORD VOICE NOTE IN TELEGRAM
         |
         v
GROQ WHISPER API (Speech-to-Text)
Converts audio to text in 1-2 seconds. Free tier. Fast. Accurate.
         |
         v
CLAUDE PROCESSES THE TRANSCRIBED TEXT
Acts on it exactly as if you typed it.
Transcript prefix "[Voice transcribed]:" is added so Claude knows it came from voice.
         |
         v
CLAUDE'S RESPONSE (Text)
Sent back to Telegram as text message.
         |
         v (optional -- if TTS is configured)
ELEVENLABS OR GRADIUM AI (Text-to-Speech)
Converts Claude's response back to audio in the owner's cloned voice.
Sends an audio message back to Telegram.
```

### Speech-to-Text: Groq Whisper (Required)

What it does: Converts voice notes to text before Claude processes them.
Cost: Free tier -- generous, sufficient for daily use.
Setup: Add GROQ_API_KEY to .env. Get key at console.groq.com (free account).

Business case for demos: You record a 10-second voice note while walking -- "Brief me on George Mills before my 10am call" -- 8 seconds later you have a full briefing on your phone. No typing. No laptop. This is the feature that makes the demo feel like magic.

### Text-to-Speech: ElevenLabs Voice Cloning (Optional)

What it does: Converts Claude's text responses to audio in your own cloned voice.
Cost: ElevenLabs paid plan (starts at ~$5/month).

Setup:
1. Create account at elevenlabs.io
2. Clone your voice (record 1-2 minutes of clear audio following their prompts)
3. Copy your Voice ID from the ElevenLabs dashboard
4. Add to .env: ELEVENLABS_API_KEY= and ELEVENLABS_VOICE_ID=

Business case: This is the "wow" moment in a demo that nothing else matches. The system responds in your voice. The psychological impact is immediate -- this is not a chatbot.

### Alternative TTS: Gradium AI (Free Tier)

- Free tier: 45,000 credits/month
- Setup: Get key at gradium.ai
- Add to .env: GRADIUM_API_KEY= and GRADIUM_VOICE_ID=

**Client replication decision:** TTS adds ~30 minutes of setup time for voice cloning but dramatically increases adoption -- clients who hear their own voice in responses use the system every day. Worth including in every full build.

---

## SECTION 22: WHATSAPP BRIDGE

### What It Does

When enabled, ClaudeClaw connects to WhatsApp via a QR code scan (same as WhatsApp Web). Once connected:
- Incoming messages: when a WhatsApp message arrives, ClaudeClaw sends a Telegram notification
- Message storage: every incoming message is saved to the SQLite wa_messages table
- Outbox system: Claude can queue WhatsApp messages for you to approve, then send automatically via the wa_outbox table
- Context access: "What did George last message me on WhatsApp?" -- Claude reads from the database

### How to Enable

In .env, set:
```
WHATSAPP_ENABLED=true
```

Run the WhatsApp daemon separately:
```bash
npx tsx scripts/wa-daemon.ts
```

On first run, a QR code appears in the terminal. Scan with WhatsApp (Settings > Linked Devices > Link a Device). Session is saved locally -- scan only once.

### Business Cases

See Section 7, Category M (WA1, WA2, WA3).

### Important Notes

- WhatsApp Web only supports one linked device per phone number at a time alongside your phone. If you already use WhatsApp Web on your computer, the daemon replaces that session.
- The wa-daemon runs separately from the main bot. Both run simultaneously.
- Windows: run the daemon in a separate terminal window.
- CASL compliance: the outbox system requires human approval before anything sends. This is by design and maintains CASL compliance.

**Client replication decision:** Not all clients need the WhatsApp bridge. Solo practitioners who do most client communication on WhatsApp (family lawyers, coaches, solo CPAs) benefit most. Agencies on Slack do not.

---

## SECTION 23: WEB DASHBOARD

### What the Dashboard Shows

- Conversation history -- full message log for every session, paginated
- Memory stats -- memories stored by sector, salience scores, top accessed
- Token usage -- cost per session, cumulative cost, context window usage over time
- Scheduled tasks -- all cron jobs with ability to pause, resume, and delete from browser
- Agent activity -- HiveMind log showing what each agent did and when
- System health -- Telegram connection status, bot info, active processing state
- Real-time streaming -- live updates as Claude processes a message (SSE)

### How to Enable

In .env:
```
DASHBOARD_TOKEN=your-secret-token-here
# Generate: node -e "console.log(require('crypto').randomBytes(24).toString('hex'))"
DASHBOARD_PORT=3141
DASHBOARD_URL=https://your-cloudflare-tunnel-url.trycloudflare.com
```

Access locally: http://localhost:3141?token=your-secret-token
Access remotely: via Cloudflare Tunnel URL.

### Cloudflare Tunnel (Remote Access)

```bash
# Install cloudflared (free) from:
# developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/

# Start a tunnel to the dashboard port:
cloudflared tunnel --url http://localhost:3141
```

Cloudflare gives a public URL like https://random-words.trycloudflare.com. Add to .env as DASHBOARD_URL. URL changes each tunnel restart unless you set up a named tunnel (free with a Cloudflare account).

### Business Use Cases

**Daily monitoring:** Open once a day to see how much the system cost yesterday, what memories were added, what scheduled tasks ran.

**Demo use:** Show the dashboard during a demo to prove the system is real and running. Live token usage and conversation history makes it tangible for skeptical prospects.

**Client handoff:** Show clients the dashboard in Week 6 training so they understand what is happening inside their system. Seeing the dashboard makes the owner feel in control.

**Cost tracking:** Each client build should have its own Anthropic API key so costs are tracked separately. Dashboard token usage makes this easy to report.

---

## SECTION 24: OBSIDIAN INTEGRATION

### What It Does

Every time you send a message to an agent with Obsidian configured, ClaudeClaw scans the specified Obsidian folders for markdown files, finds all unchecked tasks (lines starting with `- [ ]`), and injects them as context at the top of Claude's prompt.

The context looks like:
```
[Obsidian context]
  Inbox/
    Open: Follow up with George Mills (2026-03-11)
    Open: Send Pioneer Audit proposal to Nathalie (Client Work)
  Prompt Advisers/
    Open: Prepare TNC lunch briefing for March 17
[End Obsidian context]
```

Claude sees your open tasks and can proactively mention relevant ones in its response.

### Configuration

Each agent has its own Obsidian config in agent.yaml:

```yaml
obsidian:
  vault: C:\Users\Juan Gonzalez\Documents\PVRPOSE_AI\notes
  folders:
    - Inbox/
    - Client Work/
  read_only:
    - Daily Notes/
```

- folders: Claude can read and write tasks here
- read_only: Claude can read but not modify tasks here

**Current state (Juan's deployment):** comms, content, and ops agent.yaml files are set to C:\Users\Juan Gonzalez\Documents\PVRPOSE_AI\notes. If this path changes, update all three agent.yaml files.

### Client Replication

Clients who already use Obsidian can connect it directly. Clients who do not use Obsidian can use a simple folder of plain markdown files in data/ instead -- the integration reads any folder of .md files.

---

## SECTION 25: FILE HANDLING (BOTH DIRECTIONS)

### Files You Send TO the Bot

Any file you send to Telegram reaches Claude. Supported types: voice notes, video notes, photos, PDFs, Word documents, text files, video files.

**Voice notes:** Transcribed by Groq Whisper in 1-2 seconds. Treated as text.
**Video notes and video files:** Analyzed by Gemini via gemini-api-dev skill.
**Photos and images:** Claude receives them directly via bot.ts image handler.
**Document files:** Claude reads content directly.

### Files the Bot Sends TO You

Use these markers in Claude's response. The bot strips them and delivers the files as Telegram attachments.

```
[SEND_FILE:/absolute/path/to/file.pdf]
[SEND_FILE:/absolute/path/to/file.pdf|Optional caption here]
[SEND_PHOTO:/absolute/path/to/image.png]
```

**Rules:**
- Always use absolute paths
- Claude creates the file first, then includes the marker
- Multiple markers in one response = multiple files delivered
- Markers are stripped from the message text -- response reads normally
- Max file size: 50MB (Telegram limit)

**Business workflow:** Claude drafts the proposal, saves it to proposals/[name]-[date].md, runs scripts/generate-pdf.py to create the PDF, then sends [SEND_FILE:/path/to/pdf|Prospect Name Proposal]. You receive the PDF in Telegram, ready to forward to the client.

---

## SECTION 26: COMPLIANCE -- CASL, PIPEDA, QUEBEC LAW 25

Every build must address these. Non-negotiable regardless of client industry.

### CASL (Canada's Anti-Spam Legislation)

**What it requires:** Any automated message sent to a client or prospect requires express or implied consent.

**How the system is compliant:** The system drafts messages -- the human approves and sends. The AI assists, the human decides. This is the correct CASL-compliant architecture. Do NOT configure the system to auto-send commercial messages without human approval. The WhatsApp outbox system and Gmail skill both enforce this -- nothing sends without confirmation.

**What to tell clients:** "The system drafts. You approve. Nothing goes out without your explicit confirmation. This is how the system was built."

### PIPEDA / Quebec Law 25

**What it requires:** Personal information (client names, contact details, case details) must be handled with appropriate care. Quebec Law 25 adds stricter requirements for Quebec residents' data.

**How the system is compliant:**
- Client data stays on infrastructure the client controls (their VPS or their machine)
- No client data passes through PVRPOSE AI servers
- No client data stored in shared third-party systems
- All data files (data/prospects/, data/clients/) live on the client's private server
- The only third-party processors are: Anthropic API (for Claude processing), Groq API (for voice transcription), Google APIs (for Gmail and Calendar -- only if enabled)

**What clients should do:** Have a privacy policy that covers AI-assisted communications. Ensure their Anthropic API data processing agreement covers their jurisdiction.

**Data handling during the build:** Prospect and client files created during the build contain personal information. These files are stored only on the client's private infrastructure. Juan does not retain copies of client data after delivery. Service agreement must include a data handling clause.

### What PVRPOSE AI Is NOT Responsible For

- Compliance auditing of the client's existing business
- Legal review of client communications (recommend they engage legal counsel)
- GDPR compliance for EU-facing businesses (flag to client, recommend specialist)
- Enterprise compliance audit logging (the system is not production-ready for regulated industries requiring full audit trails)

---

## SECTION 27: COMPLETE .ENV REFERENCE

Every configurable key in the system. Use during client setup to ensure nothing is missed.

### Required (System Will Not Start Without These)

| Key | What It Is | Where to Get It |
|---|---|---|
| TELEGRAM_BOT_TOKEN | Main bot's token | @BotFather on Telegram |
| ALLOWED_CHAT_ID | Your Telegram user ID | Message @userinfobot on Telegram |

### Strongly Recommended

| Key | What It Is | Where to Get It |
|---|---|---|
| ANTHROPIC_API_KEY | Pay-per-token Claude billing | console.anthropic.com |
| GROQ_API_KEY | Voice note transcription (Whisper) | console.groq.com (free) |
| DASHBOARD_TOKEN | Protects the web dashboard | `node -e "console.log(require('crypto').randomBytes(24).toString('hex'))"` |

### Voice Reply (Optional)

| Key | What It Is | Where to Get It |
|---|---|---|
| ELEVENLABS_API_KEY | Text-to-speech (primary) | elevenlabs.io |
| ELEVENLABS_VOICE_ID | Your cloned voice ID | ElevenLabs dashboard after voice cloning |
| GRADIUM_API_KEY | Text-to-speech (free alternative) | gradium.ai |
| GRADIUM_VOICE_ID | Your voice ID on Gradium | Gradium dashboard |

### Integrations

| Key | What It Is | Where to Get It |
|---|---|---|
| GOOGLE_API_KEY | Gemini video analysis | aistudio.google.com -- confirmed in .env |
| SLACK_USER_TOKEN | Slack workspace access (xoxp- token) | api.slack.com/apps |
| WHATSAPP_ENABLED | Enable WhatsApp bridge | Set to true in .env |
| GOOGLE_CREDS_PATH | Gmail OAuth credentials path | Google Cloud Console download |
| GMAIL_TOKEN_PATH | Gmail auth token path | Auto-created after gmail auth run |
| GCAL_TOKEN_PATH | Calendar auth token path | Auto-created after calendar auth run |

### Dashboard and Advanced

| Key | What It Is | Default |
|---|---|---|
| DASHBOARD_PORT | Port the dashboard runs on | 3141 |
| DASHBOARD_URL | Public URL via Cloudflare Tunnel | Optional |
| CONTEXT_LIMIT | Max context tokens | 1000000 |

### Airtable (Phase 3 Direct API)

| Key | What It Is | Where to Get It |
|---|---|---|
| AIRTABLE_API_KEY | Airtable Personal Access Token | airtable.com/account |
| AIRTABLE_BASE_ID | Your Prospects base ID (appXXXXX format) | From Airtable URL |
| AIRTABLE_PROSPECTS_TABLE | Table name in Airtable | Your table name (e.g. "Prospects") |

### Per-Agent Bot Tokens (Optional -- One Per Agent)

| Key | What It Is |
|---|---|
| COMMS_BOT_TOKEN | Dedicated Telegram bot for comms agent |
| CONTENT_BOT_TOKEN | Dedicated Telegram bot for content agent |
| OPS_BOT_TOKEN | Dedicated Telegram bot for ops agent |
| RESEARCH_BOT_TOKEN | Dedicated Telegram bot for research agent |

These are optional. Agents fall back to the main TELEGRAM_BOT_TOKEN if their specific token is not set. Most clients start with just the main bot.

---

## SECTION 28: SYSTEM HEALTH AND STARTUP

### Status Check (Run Before Every Demo)

```bash
npx tsx scripts/status.ts
```

Output:
```
ClaudeClaw Status
-----------------
✓  Node v20.11.0
✓  Claude CLI 1.x.x
✓  Bot token: @YourBotUsername
✓  Chat ID: 123456789
✓  Voice STT: Groq (configured)
⚠  Voice TTS: not configured
✓  Service: running (PM2)
✓  Memory DB: 47 memories stored
-----------------
All systems go.
```

Green checkmarks = working. Yellow warnings = optional features not set up. Red X = blocking issue that must be fixed before use.

**Rule:** Run this within 1 hour before every demo. Never demo an unchecked system.

### Windows Startup (Juan's Machine)

The file run-claudeclaw.bat.txt is a Windows batch file. To use it:
1. Rename from run-claudeclaw.bat.txt to run-claudeclaw.bat
2. Double-click to start ClaudeClaw
3. Or add to Windows Task Scheduler for auto-start at login

Contents:
```bat
@echo off
cd /d "C:\Users\Juan Gonzalez\Documents\PVRPOSE_AI\PVRPOSE_AI_OS\CLAUDE_CLAW\claudeclaw"
npm start
pause
```

### Checking Logs

```bash
# PM2 real-time logs:
pm2 logs pvrpose-ai-os

# Last 100 lines:
pm2 logs pvrpose-ai-os --lines 100

# Restart the service:
pm2 restart pvrpose-ai-os

# Agent-specific logs:
cat store/agent-comms.log
```

### Common Issues and Fixes

**Bot is not responding:**
```bash
pm2 list
pm2 logs pvrpose-ai-os --lines 50
pm2 restart pvrpose-ai-os
```

**Claude giving generic answers (not knowing the business):**
Cause: CLAUDE.md has template [BRACKETED] placeholders still in it.
Fix: Search for [ in CLAUDE.md and replace all remaining placeholders. Send "Who am I talking to?" -- Claude should respond with the client's name and context.

**Voice notes not being transcribed:**
Cause: GROQ_API_KEY is missing or invalid.
Fix: Check the key in .env. Get a new one from console.groq.com if needed.

**Scheduled tasks not running:**
```bash
node dist/schedule-cli.js list
pm2 logs pvrpose-ai-os | grep scheduler
```

**Database errors:**
```bash
ls store/claudeclaw.db
# If missing, it gets created automatically on first run:
npm start
```

---

## SECTION 29: SKILLS SETUP REPLICATION CHECKLIST (PER CLIENT)

Use this during Week 3 infrastructure setup. Check off as each skill is configured and tested.

### Gmail Skill Setup
- [ ] Client has a Google account with Gmail
- [ ] Google Cloud project created (console.cloud.google.com)
- [ ] Gmail API enabled in the project
- [ ] OAuth 2.0 credentials (Desktop app type) created and downloaded to ~/.config/gmail/credentials.json
- [ ] Auth command run: `CLAUDECLAW_DIR=/path/to/claudeclaw ~/.venv/bin/python3 ~/.config/gmail/gmail.py auth`
- [ ] Browser authorized successfully
- [ ] .env updated: GOOGLE_CREDS_PATH=~/.config/gmail/credentials.json
- [ ] .env updated: GMAIL_TOKEN_PATH=~/.config/gmail/token.json
- [ ] Test passed: send "check my email" -- inbox returns correctly with real emails

### Google Calendar Skill Setup
- [ ] Uses same Google Cloud project as Gmail (no new project needed)
- [ ] Google Calendar API enabled in the same project
- [ ] Auth command run: `CLAUDECLAW_DIR=/path/to/claudeclaw ~/.venv/bin/python3 ~/.config/calendar/gcal.py auth`
- [ ] .env updated: GCAL_TOKEN_PATH=~/.config/calendar/token.json
- [ ] Timezone constant in gcal.py changed from America/New_York to America/Toronto (Quebec clients)
- [ ] Test passed: send "what's on my calendar this week" -- events return correctly

### Slack Skill Setup (Only If Client Uses Slack)
- [ ] Client confirmed they use Slack and want this integration
- [ ] Slack app created at api.slack.com/apps (From scratch)
- [ ] User Token Scopes added (NOT Bot Token Scopes): channels:history, channels:read, chat:write, groups:history, groups:read, im:history, im:read, mpim:history, mpim:read, search:read, users:read
- [ ] App installed to workspace, Allow clicked
- [ ] xoxp- token copied from OAuth & Permissions page
- [ ] .env updated: SLACK_USER_TOKEN=xoxp-your-token-here
- [ ] Test passed: send "check my Slack" -- conversations return correctly

### Timezone Skill Setup
- [ ] skills/timezone/SKILL.md updated with client's relevant locations (their city, their team cities, their key client cities)
- [ ] Any placeholder names (like "Mark") replaced with client's name or team member names
- [ ] Test passed: send "what time is it" -- correct locations and current times shown

### Gemini Video Skill (No Setup Needed)
- [ ] Confirmed: ~/.claude/skills/gemini-api-dev/SKILL.md exists globally
- [ ] Confirmed: GOOGLE_API_KEY is set in .env (real key, not placeholder)
- [ ] Test passed: send a short video to Telegram -- Gemini analyzes and Claude responds

### LinkedIn Skill (No Setup Needed)
- [ ] Confirmed: ~/.claude/skills/linkedin/SKILL.md exists globally with Juan's voice rules
- [ ] Test passed: send "write a LinkedIn post about [topic]" -- post produced in Juan's voice following all style rules

---

## SECTION 30: KNOWN ISSUES AND STATUS

### Critical -- Fix Before First Use

**Issue 1: CLAUDE.md root file has template placeholders**
File: CLAUDE.md (project root)
Problem: Contains [YOUR ASSISTANT NAME], [YOUR NAME], [YOUR_OBSIDIAN_VAULT_PATH], [PATH TO CLAUDECLAW] placeholders.
Fix: Replace all with real values for your deployment.
Priority: CRITICAL -- system gives wrong responses and cannot use correct paths until fixed.
Status: Pending -- must be done as first Tier 1 action.

### Before Demo -- Fix Before Showing to Prospects

**Issue 2: Google Calendar default timezone**
File: skills/google-calendar/SKILL.md (references gcal.py)
Problem: Default timezone is set to America/New_York.
Fix: Change to America/Toronto for Quebec-based deployments (same UTC offset but correct for Quebec).
Priority: Medium -- creates wrong event times for Quebec clients.
Status: Open.

### Resolved Issues

**Issue 3: Timezone skill -- RESOLVED**
File: skills/timezone/SKILL.md
Status: FIXED. Locations updated to Montreal, Toronto, Vancouver, New York, London. All "Mark" references removed. Ready to demo.

**Issue 4: Agent YAML Obsidian vault paths -- RESOLVED (comms/content/ops)**
Files: agents/comms/agent.yaml, agents/content/agent.yaml, agents/ops/agent.yaml
Status: FIXED. All three updated to C:\Users\Juan Gonzalez\Documents\PVRPOSE_AI\notes.
Note: agents/research/agent.yaml does not exist yet (only .example). Create it before using the research agent in production.

### Before Client Deployment

**Issue 5: WhatsApp bridge disabled by default**
File: .env
Problem: WHATSAPP_ENABLED is commented out.
Fix: Uncomment and set to true for clients who do significant WhatsApp communication.
Priority: Low -- only relevant for specific clients.
Status: By design -- disabled until explicitly needed.

**Issue 6: run-claudeclaw.bat.txt wrong file extension**
File: run-claudeclaw.bat.txt
Problem: File needs to be renamed to run-claudeclaw.bat to function as a Windows startup script.
Fix: Rename the file.
Priority: Low (Windows only) -- system starts manually via npm start without this.
Status: Open.

### Future Builds (Not Issues -- Planned Additions)

| Item | What It Is | When to Build |
|---|---|---|
| agent-browser skill | Browse websites, fill forms, scrape data | When a client needs web research automation |
| airtable skill (Phase 3) | Direct Airtable API read/write | Week 3-4 of Juan's own build |
| agents/research/agent.yaml | Research agent YAML (currently only .example) | Before using research agent in production |
| maestro skill | Parallel task orchestration | When scale requires parallel agents |

---

*Version v3.0 -- March 2026*
*Owner: Juan Gonzalez, PVRPOSE AI, Montreal*
*This is a living document -- update after every client build, every resolved issue, and every new confirmed capability.*
