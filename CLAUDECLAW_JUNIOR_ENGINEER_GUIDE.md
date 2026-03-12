# ClaudeClaw: A Complete Guide for Junior Engineers
## Understanding the System Like a 10-Year-Old (But Technically Precise)

**Last updated:** March 2026
**Niche:** Professional services, agencies, construction, advisory, legal, accounting
**Product:** PVRPOSE AI OS -- built on ClaudeClaw

---

## PART 1: WHAT IS CLAUDECLAW? (THE BIG PICTURE)

Imagine you have a super-smart robot called Claude who lives inside your computer. Claude is incredible at:
- Drafting emails, proposals, and messages in your exact voice
- Briefing you on a client before a call
- Researching prospects and competitors
- Managing your pipeline and reminders
- Writing LinkedIn posts from a voice note

**The Problem:** Claude only works from your computer's terminal -- the black screen where you type commands. You cannot talk to Claude from your phone while driving to a meeting or walking between calls.

**The Solution:** ClaudeClaw is a bridge. It connects your phone (via Telegram) to Claude running on your private computer or server. You send a voice note. Claude thinks. You get an answer back in seconds.

Think of it like this:

```
YOUR PHONE (Telegram)
       |
       v
CLAUDECLAW (The Bridge -- running on your private server)
       |
       v
CLAUDE AI ENGINE (The Brain -- Anthropic's Claude)
       |
       v
YOUR BUSINESS CONTEXT (CLAUDE.md -- the configuration that makes Claude know YOUR business)
```

The magic is not just Claude. The magic is Claude PLUS the business context you give it. A generic Claude is like a smart person who just met you. A configured ClaudeClaw is like a smart person who has worked with you for 2 years and knows everything about your business.

---

## PART 2: THE FOUR MAIN PIECES (HOW IT WORKS)

### Piece 1: Telegram Bot (Your Phone Interface)

Telegram is just the messenger app. Think of it like iMessage or WhatsApp -- but instead of texting a person, you are texting your AI assistant.

You can send:
- Text messages ("Brief me on George before my 10am call")
- Voice notes (recorded while driving -- Claude transcribes and acts on them)
- Files and photos (Claude can read and analyze them)
- Commands starting with / (like /start, /help)

**Key files that control this:**
- `src/bot.ts` -- this is where every Telegram message and command is handled
- When you send a message, bot.ts receives it, checks if you are authorized, and passes it along

### Piece 2: Claude AI Agent (The Brain)

This is the actual Claude AI made by Anthropic. It is running on your computer or VPS (private server). When your message arrives from Telegram, it goes here.

Claude reads your message PLUS all of your business context (from CLAUDE.md) and produces an intelligent response.

Important: Claude is not just answering -- it can actually DO things:
- Read and write files on your computer
- Run terminal commands
- Search the web
- Generate and save PDFs
- Update your prospect files
- Query your database

**Key files:**
- `src/agent.ts` -- this runs Claude and feeds it your message plus context
- `CLAUDE.md` -- this is loaded every session so Claude always knows your business

### Piece 3: SQLite Database (The Memory)

Every conversation, every decision, every scheduled task gets saved here. This is why ClaudeClaw remembers things between sessions.

The database lives at: `store/claudeclaw.db`

What it stores:
- `sessions` -- every conversation session
- `memories` -- semantic memory (things you checkpoint for Claude to remember)
- `scheduled_tasks` -- your cron jobs (morning digest, follow-up reminders)
- `token_usage` -- how much each session cost in API fees
- `conversation_log` -- full message history
- `hive_mind` -- what each agent did across sessions

**Key files:**
- `src/db.ts` -- all the database read/write operations

### Piece 4: CLAUDE.md (The Business Brain)

This is the most important file in the entire system. It is a plain text file that is loaded into every single Claude session. It tells Claude:

- Who you are and what your business does
- How you communicate (your voice, your style)
- What tools you use (Airtable, Telegram, n8n)
- What agents are available (comms, content, ops, research)
- Where your data files are (data/prospects/, templates/)
- Special commands (checkpoint, convolife)
- How to handle specific situations

The better your CLAUDE.md, the smarter your system. This is where 80% of the customization work happens for each client.

---

## PART 3: THE MESSAGE FLOW (STEP BY STEP)

Here is exactly what happens from the moment you send a voice note to when you get your answer:

```
STEP 1: You record a voice note on your phone in Telegram
        "Draft a WhatsApp message to George Mills, solo CPA, 24 hours no response"
        |
        v
STEP 2: Telegram sends the audio file to the ClaudeClaw bot running on your server
        |
        v
STEP 3: bot.ts receives it -- checks: are you the authorized user? (chat_id check)
        If yes, continues. If no, ignores the message.
        |
        v
STEP 4: media.ts transcribes the voice note to text using Groq's Whisper API
        Result: "[Voice transcribed]: Draft a WhatsApp message to George Mills..."
        |
        v
STEP 5: agent.ts takes the transcribed text + loads CLAUDE.md + loads recent memory
        Passes everything to Claude AI via the Anthropic Claude Code CLI
        |
        v
STEP 6: Claude reads the message, reads the business context, reads George's prospect file
        from data/prospects/george-mills.md
        Drafts a WhatsApp message in your voice, following your outreach rules
        |
        v
STEP 7: Claude saves the draft to a file and sends the response back to agent.ts
        |
        v
STEP 8: bot.ts formats the response (keeps it readable on a phone screen)
        Sends it back to you via Telegram
        |
        v
STEP 9: You see the complete WhatsApp draft on your phone in under 30 seconds.
        Copy, paste, send to George.
```

Total time: 15-30 seconds for most tasks.

---

## PART 4: KEY CONCEPTS EVERY ENGINEER MUST KNOW

### A. The .env File (Your Secrets Box)

This file holds all your private keys and passwords. It lives in the project root and is NEVER committed to git (it is in .gitignore).

Example contents:
```
TELEGRAM_BOT_TOKEN=1234567890:AAFxxxxxxxxxxxxxxxx
TELEGRAM_CHAT_ID=987654321
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxxxxxx
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxxxxx
GOOGLE_API_KEY=AIzaxxxxxxxxxxxxxxxxxxxxxxxx
```

Rule: If a secret leaks (someone sees it), rotate it immediately. Telegram token: regenerate via @BotFather. Anthropic key: regenerate in the Anthropic console.

### B. The Telegram Bot Token

This is a unique key that proves your bot is real to Telegram's servers. You get it from @BotFather on Telegram when you create a new bot.

Format: `1234567890:AAFxxxxxxxxxxxxxxxxxxxxxxxx`

Think of it like a username + password in one string. Never share it.

### C. The Chat ID

Your unique Telegram user ID. This is how ClaudeClaw knows that ONLY you can control the bot. If someone else finds your bot and sends it a message, it checks their chat_id against the authorized one in .env and ignores them.

How to find yours: message @userinfobot on Telegram.

### D. Agents (Specialized Sub-Brains)

ClaudeClaw has four sub-agents, each with their own CLAUDE.md:

- **comms** -- handles all human communication: outreach drafts, follow-ups, email triage, LinkedIn DMs
- **content** -- handles content creation: LinkedIn posts, YouTube scripts, carousel ideas
- **ops** -- handles operations: pipeline tracking, prospect status, morning digest, billing
- **research** -- handles intelligence: prospect research, competitor analysis, market briefs

Each agent is activated by the type of request you make. Claude routes automatically.

### E. The Hive Mind Table

Every time an agent completes a meaningful action, it logs it to the `hive_mind` table in SQLite. This creates a cross-session audit trail of what was done and when.

Example log entry:
```
agent_id: comms
action: drafted_outreach
summary: Drafted WhatsApp + email for George Mills, Pioneer Build offer, sent for approval
```

This means you can always ask: "What did the comms agent do last week?" and get a real answer.

### F. Skills

Skills are mini-programs installed globally in `~/.claude/skills/`. They extend what Claude can do.

Examples:
- `gmail` -- read and draft emails
- `google-calendar` -- check and create calendar events
- `agent-browser` -- browse websites, fill forms, scrape data

Skills are invoked automatically when the trigger words match. You do not have to call them manually.

---

## PART 5: THE COMPLETE FOLDER STRUCTURE

```
claudeclaw/
|-- src/                          <- TypeScript source code (the engine)
|   |-- index.ts                  <- Entry point -- starts the entire system
|   |-- bot.ts                    <- All Telegram message/command handling
|   |-- agent.ts                  <- Runs Claude AI, feeds it context
|   |-- db.ts                     <- All database read/write operations
|   |-- config.ts                 <- Reads settings from .env
|   |-- state.ts                  <- Tracks what is happening right now
|   |-- memory.ts                 <- Saves and retrieves semantic memories
|   |-- media.ts                  <- Handles voice notes, photos, files
|   |-- scheduler.ts              <- Runs cron jobs (morning digest, reminders)
|   |-- logger.ts                 <- Records system events for debugging
|   |-- dashboard.ts              <- Web dashboard backend
|   `-- dashboard-html.ts         <- What the dashboard looks like in browser
|
|-- dist/                         <- Compiled JavaScript (auto-generated from src/)
|                                    Never edit files here -- edit src/ instead
|
|-- agents/                       <- Sub-agent configurations
|   |-- comms/CLAUDE.md           <- Communication rules and voice style
|   |-- content/CLAUDE.md         <- Content creation rules and format
|   |-- ops/CLAUDE.md             <- Operations, pipeline, CRM instructions
|   |-- research/CLAUDE.md        <- Research style and sourcing rules
|   `-- _template/CLAUDE.md       <- Starting template for new agents
|
|-- data/                         <- Business data files (created per client)
|   |-- prospects/                <- One .md file per active prospect
|   `-- clients/                  <- One .md file per active client
|
|-- templates/                    <- Document templates
|   |-- proposal-pioneer-build.md
|   |-- proposal-pioneer-audit.md
|   `-- agreement.md
|
|-- proposals/                    <- Generated proposals (dated per client)
|-- content/                      <- LinkedIn and content drafts
|
|-- scripts/                      <- Utility scripts
|   |-- notify.sh                 <- Sends a Telegram notification mid-task
|   |-- generate-pdf.py           <- Generates PDFs from markdown files
|   `-- schedule-cli.js           <- Command-line tool to manage cron jobs
|
|-- store/
|   `-- claudeclaw.db             <- SQLite database (memory, sessions, tasks)
|
|-- specs/
|   `-- handoffs/                 <- Session handoff files (for continuity)
|
|-- CLAUDE.md                     <- THE BRAIN -- client-specific configuration
|-- .env                          <- Secrets (never commit to git)
|-- package.json                  <- Dependencies list
`-- README.md                     <- Setup instructions
```

---

## PART 6: HOW TO CUSTOMIZE FOR EACH CLIENT

This is the core skill. Every client gets the same ClaudeClaw engine. What changes is the configuration.

### Customization 1: CLAUDE.md (The Most Important File)

Replace the template placeholders with the client's real information.

**What to fill in:**
```markdown
## Who Is [CLIENT NAME]
[CLIENT NAME] runs [their business type].
Their main clients are [who they serve].
Their biggest admin bottlenecks are [what wastes their time].
They value [what they care about].

## Communication Style
- They write [formal/casual], [long/short] messages
- They never use [specific phrases or patterns to avoid]
- Their sign-off is always [how they end messages]
- Key phrases they use: [specific words or expressions]

## Their Tools
- CRM: [Airtable / HubSpot / GoHighLevel]
- Email: [Gmail / Outlook]
- Scheduling: [Calendly / other]
- Billing: [Stripe / Wave / QuickBooks]

## Their Offer
- Primary offer: [what they sell and at what price]
- How they position it: [their unique angle]
```

### Customization 2: agents/comms/CLAUDE.md

Add their outreach rules. Example for PVRPOSE AI clients:

```markdown
## Outreach Rules
- No em dashes, no en dashes -- use double hyphen or rewrite
- No AI clichés (never: "Certainly!", "Great question!", "I'd be happy to")
- Cold outreach: never imply a prior relationship that does not exist
- Discovery hook: "[How they know the prospect]"
- Offer language: use exact pricing, never hedge with "normally charge"
- WhatsApp: under 200 words, conversational, bullet points OK
- Email subject: "[Name] [Company]: [Offer] (deadline [date])"
```

### Customization 3: data/prospects/ Files

One markdown file per active prospect. Template:

```markdown
# [Prospect Full Name]

## Profile
- Company: [Company name]
- Role: [Their title]
- Industry: [Their industry]
- Location: [City, Province/State]
- How we know them: [TNC, LinkedIn, referral, etc.]

## Business Context
- Revenue range: [estimated]
- Team size: [number]
- Main pain: [specific problem they have]
- Current tools: [what they use now]

## Our Offer
- Offer made: [Pioneer Build / Pioneer Audit / Full Build]
- Price: [amount]
- Date offered: [date]

## Conversation History
- [Date]: [What was discussed or sent]
- [Date]: [What was discussed or sent]

## Next Action
- [What needs to happen next and by when]
```

### Customization 4: Adding a Custom Scheduled Task

Use the schedule-cli.js tool to create a morning digest that runs automatically:

```bash
node dist/schedule-cli.js create "Read data/prospects/ and give me a morning pipeline summary: who needs follow-up today, who responded overnight, what is my priority action" "30 7 * * 1-5"
```

That command creates a task that runs every weekday at 7:30am automatically.

Common cron patterns:
- `30 7 * * 1-5` -- weekdays at 7:30am
- `0 9 * * *` -- every day at 9am
- `0 9 * * 1` -- every Monday at 9am
- `0 */4 * * *` -- every 4 hours
- `0 18 * * 0` -- every Sunday at 6pm

---

## PART 7: HOW TO DEPLOY FOR A NEW CLIENT (STEP BY STEP)

### Step 1: Create Their Telegram Bot

1. Open Telegram on your phone
2. Search for @BotFather
3. Send: /newbot
4. Follow the prompts -- give the bot a name and username
5. Copy the token you receive (looks like: `1234567890:AAFxxxxxxxxxx`)
6. This token goes in the client's .env file as TELEGRAM_BOT_TOKEN

### Step 2: Get Their Telegram Chat ID

1. Have the client send a message to their new bot
2. Visit: `https://api.telegram.org/bot[TOKEN]/getUpdates`
3. Find the "id" field under "chat" -- that is their chat_id
4. Goes in .env as TELEGRAM_CHAT_ID

### Step 3: Set Up Their Infrastructure

**Option A -- Their own machine (Windows/Mac):**
```bash
# Install Node.js from nodejs.org
# Install Claude Code CLI:
npm install -g @anthropic-ai/claude-code

# Clone the repo:
git clone [repo URL] [clientname]-pvrpose-ai-os
cd [clientname]-pvrpose-ai-os

# Install dependencies:
npm install

# Create their .env from the template:
cp .env.example .env
# Fill in their tokens and keys

# Build:
npm run build

# Start:
npm start
```

**Option B -- Private VPS (recommended for 24/7 availability):**
```bash
# Provision a VPS at Hetzner (hetzner.com) -- cheapest reliable option
# Choose: Ubuntu 22.04, CX11 plan ($4-6/month)

# SSH into the server:
ssh root@[server-ip]

# Install Node.js:
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# Install Claude Code CLI:
npm install -g @anthropic-ai/claude-code

# Clone the repo:
git clone [repo URL] pvrpose-ai-os
cd pvrpose-ai-os
npm install
npm run build

# Create .env:
nano .env
# Paste their tokens and keys, save with Ctrl+X

# Set up auto-restart with PM2:
npm install -g pm2
pm2 start dist/index.js --name "pvrpose-ai-os"
pm2 startup  # follow the instructions it gives you
pm2 save

# Now it restarts automatically if the server reboots
```

### Step 4: Configure CLAUDE.md

Replace all template placeholders with the client's real information. See Part 6 above.

Test by sending: "Who am I talking to?" -- Claude should respond with the client's name and business context.

### Step 5: Configure the Agents

Update each agents/[name]/CLAUDE.md with client-specific rules. At minimum:
- `agents/comms/CLAUDE.md` -- their voice, outreach rules, offer language
- `agents/ops/CLAUDE.md` -- their pipeline structure, CRM instructions

### Step 6: Create Data Files

Create the data/prospects/ folder and add one .md file per active prospect using the template in Part 6.

### Step 7: Test Everything

Send these test messages via Telegram and verify the outputs:
1. "Brief me on [prospect name]" -- should pull from their prospect file
2. "Draft a follow-up to [prospect name], 3 days no response" -- should be in their voice
3. "What is my pipeline looking like?" -- should give accurate status
4. "checkpoint" -- should save a session summary to SQLite

### Step 8: Record Training Videos

Before handoff, record at minimum:
1. How to send basic commands (text and voice)
2. How to update a prospect file
3. How to create a scheduled task
4. What to do when the bot does not respond (restart command)

---

## PART 8: PATTERN RECOGNITION -- WHAT EVERY CLIENT HAS IN COMMON

After building for multiple clients, these patterns repeat. Use this to speed up each new build.

### Pattern 1: The Three Universal Pain Points

Every professional services business you will work with loses time to the same three things:
1. **Follow-up lag** -- they mean to follow up, they forget, leads go cold
2. **Proposal bottleneck** -- proposals take too long to write, they sound like work
3. **Context loss** -- they forget what was discussed in past calls, look unprepared

PVRPOSE AI OS solves all three immediately. The prospect briefing, proposal generation, and follow-up drafting are always the first three automations to build.

### Pattern 2: Voice Style Differences by Industry

| Industry | Voice Style | What They Never Say | Key Phrases |
|---|---|---|---|
| CPAs / Accountants | Precise, numbers-first, no fluff | "amazing", "excited", "thrilled" | "based on your file", "as per the deadline" |
| Lawyers | Formal but direct, structured | Colloquialisms, emojis | "pursuant to", "as discussed" |
| Coaches / Consultants | Conversational, confident, personal | Passive voice, corporate jargon | "here is what I see", "let me be direct" |
| Construction / Trades | Direct, practical, zero nonsense | Over-explaining, hedging | "here is the number", "I need X by Y" |
| Agencies | Casual but polished | Jargon overload | "here is the plan", "I will handle it" |

### Pattern 3: The CRM Bridge Is Always Needed

Every client uses a CRM (Airtable, HubSpot, GoHighLevel, even a spreadsheet). The data in that CRM needs to flow into ClaudeClaw's data/ files.

The pattern:
1. Start with manual sync (client updates both places)
2. Week 3: set up n8n to auto-sync CRM to markdown files
3. Week 5: test that Claude is reading fresh data

Always plan for the n8n bridge even if you do not build it in Week 1.

### Pattern 4: The Demo Moment That Always Closes

In every demo, there is one moment that lands differently than the rest. It is when Claude produces something in the client's exact voice that the client did not expect.

"That sounds like me. How does it know that?"

The answer: because you configured CLAUDE.md with their real communication style before the demo. Prepare 2-3 sentences in their voice before every demo call. When it produces those, the conversation changes.

---

## PART 9: CORRECT PRICING AND BUSINESS MODEL

### The Actual PVRPOSE AI Offer Structure

**Pioneer Phase (now -- 3 spots total):**
- Pioneer 1 (Free Full Build): $0 upfront, tooling ~$100-350/month, full value $15,000-25,000 CAD
- Pioneers 2 and 3 (Audit): $2,500 CAD each, credited toward build if they proceed

**Standard Pricing (after pioneer phase):**
- PVRPOSE AI OS Audit: $5,000-7,500 CAD
- PVRPOSE AI OS Full Build: $15,000-25,000 CAD (one-time)
- AI Optimization Retainer: from $3,000 CAD/month

**What the retainer includes:**
- 1 new automation per month
- Bug fixes and optimization
- Monthly 60-minute strategy call
- Unlimited async support (email/Slack)

### What This Is NOT

- NOT a SaaS product (no monthly subscription per user, no platform to build)
- NOT a white-label reseller model
- NOT a template you sell for $99-299
- NOT a freemium tool with tiers at $29/$99/$499 per month

This is a custom-built, done-for-you professional service. Like hiring a contractor to build your office -- bespoke, owned by the client, maintained optionally.

---

## PART 10: TECHNICAL SKILLS TO KNOW (BY PRIORITY)

### Must Know Right Now (to build and maintain)

1. **Edit CLAUDE.md** -- plain text, no code required. This is your primary tool.
2. **Run bash commands** -- npm run build, npm start, pm2 restart
3. **Read TypeScript** -- you do not need to write it, but you need to read src/bot.ts to understand what commands exist
4. **SQLite queries** -- basic SELECT statements to check the database
5. **n8n basics** -- creating a webhook trigger and a write-to-file action

### Good to Know (for client customization)

6. **REST APIs** -- how to call an API and use the response (for CRM integrations)
7. **Cron syntax** -- how to write `0 9 * * 1-5` patterns
8. **SSH basics** -- how to connect to a VPS and run commands
9. **PM2** -- how to start, stop, restart, and check logs for a Node.js process

### For Scale (future builds)

10. **PostgreSQL** -- when a client needs multi-user support or higher data volume
11. **Docker** -- containerizing the build for easier deployment
12. **GitHub Actions** -- automated deployment pipelines

---

## PART 11: COMMON ISSUES AND HOW TO FIX THEM

### Bot is not responding

```bash
# Check if the process is running:
pm2 list

# Check the logs for errors:
pm2 logs pvrpose-ai-os --lines 50

# Restart it:
pm2 restart pvrpose-ai-os
```

### Claude is giving generic answers (not knowing the client's business)

Cause: CLAUDE.md is not loading correctly, or it has template placeholders still in it.

Fix: Check that CLAUDE.md has no [BRACKETED] placeholders. Send "Who am I talking to?" -- Claude should respond with the client's name and context.

### Voice notes are not being transcribed

Cause: GROQ_API_KEY is missing or invalid in .env.

Fix: Check the key in .env. Get a new one from console.groq.com if needed.

### Scheduled tasks are not running

```bash
# Check what tasks are scheduled:
node dist/schedule-cli.js list

# Check the scheduler logs:
pm2 logs pvrpose-ai-os | grep scheduler
```

### Database errors

```bash
# Check the database exists:
ls store/claudeclaw.db

# If missing, it gets created automatically on first run:
npm start
```

---

## PART 12: SUMMARY -- WHY THIS SYSTEM WORKS FOR PROFESSIONAL SERVICES

ClaudeClaw works for professional services businesses because:

1. **The pain is universal and daily** -- every lawyer, CPA, consultant, and agency owner loses 2-4 hours per day to admin that requires no judgment, just execution

2. **The phone interface matches how they work** -- they are never at a desk for 8 hours. They are in meetings, on sites, driving between clients. Telegram on their phone means the system goes where they go.

3. **The voice configuration is the differentiator** -- a generic AI assistant produces generic outputs. A ClaudeClaw instance configured around how this specific CPA communicates produces outputs the CPA would have written themselves. That is the whole product.

4. **Private infrastructure is a compliance requirement, not a feature** -- lawyers, CPAs, and advisors have fiduciary and regulatory obligations around client data. The fact that data never leaves their infrastructure is not a nice-to-have. For some clients, it is the only acceptable option.

5. **The system grows with them** -- every interaction, every prospect file, every checkpoint makes the system smarter about that client's business. It compounds over time.

**Your ideal pitch to a prospect:**
"I will build you an AI operating system that runs your business from your phone. Your data stays on infrastructure you control. It knows your voice, your clients, your workflows. You approve everything before it sends. You own all of it."

That is the pitch. Everything else is proof.

---

*Document maintained by PVRPOSE AI -- update after every client build*
*For the full Blueprint and 6-Week Build SOP, see: PVRPOSE_AI_OS_BLUEPRINT_SOP.md*
