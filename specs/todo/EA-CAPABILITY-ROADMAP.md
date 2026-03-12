# ClaudeClaw EA Capability Roadmap

**Created:** 2026-03-12
**Source:** Video audit -- (76) Claude Code con GoHighLevel, Obsidian, Drive... setup comparison
**Goal:** Build ALL missing capabilities to reach 100% feature parity with the "always-connected AI executive assistant" vision

---

## Priority Tiers

### TIER 1 -- HIGH PRIORITY (Juan's picks + quick wins)
These are the 4 capabilities Juan flagged as highest priority, plus items that unblock multiple downstream features.

### TIER 2 -- MEDIUM PRIORITY (marketing/agency engine)
CRM integrations and marketing automation that power the agency revenue model.

### TIER 3 -- FUTURE BUILDS (nice-to-have, build when needed)
Analytics dashboards, advanced workflows, and polish features.

---

## TIER 1 -- HIGH PRIORITY

### 1.1 Interactive Client Dashboard (upgrade existing)
**Current state:** `src/dashboard.ts` + `src/dashboard-html.ts` -- internal ops only (token usage, memory, tasks)
**Target:** Multi-tenant dashboard that serves both internal ops AND client-facing analytics
**Approach:**
- Add route: `/client/:clientId` -- renders client-specific dashboard
- Per-client config in `data/clients/<clientId>/dashboard.json` (branding, colors, logo, data sources)
- Pluggable data panels: Google Analytics, Search Console, Meta Ads, custom KPIs
- Dark mode already exists -- extend to client themes
- Chart.js already loaded -- add more chart types (line, bar, pie, comparison)
- Date range selector (this month / 6mo / 1yr / 3yr)
- Export to PDF option (depends on 1.4 PDF generation)
**Files to create/modify:**
- `src/dashboard-client.ts` -- client dashboard route handler
- `src/dashboard-client-html.ts` -- client dashboard template
- `data/clients/` -- per-client config directory
- Modify `src/dashboard.ts` -- add client routes
**Dependencies:** Google Analytics skill (2.5), Search Console skill (2.6) for real data
**Estimate:** Can scaffold with mock data first, plug in real APIs later

### 1.2 Team Coordination System (upgrade hive mind)
**Current state:** `hive_mind` SQLite table exists, agents log actions -- no people tracking
**Target:** Full team management with task assignment, status tracking, and notifications
**Approach:**
- New SQLite table: `team_members` (id, name, role, telegram_id, email, active)
- New SQLite table: `team_tasks` (id, assignee_id, title, description, status, priority, due_date, created_by, created_at, completed_at)
- Skill: `skills/team/SKILL.md` -- trigger phrases for task assignment, status checks, team overview
- Morning digest integration: include team task summary
- Telegram notifications: optional ping when tasks assigned/overdue
- Dashboard panel: team overview with task counts per person
**Files to create/modify:**
- `src/team.ts` -- team CRUD operations
- `skills/team/SKILL.md` -- skill definition
- `src/db.ts` -- add migration for team tables
- `src/dashboard-html.ts` -- add team panel

### 1.3 Google Drive Integration
**Current state:** Zero code
**Target:** Read/write files to Google Drive folders, organize client deliverables
**Approach:**
- Google Drive API v3 via OAuth (reuse existing Google OAuth pattern from Gmail/Calendar)
- Python CLI wrapper: `~/.config/gdrive/gdrive.py` (consistent with gmail.py / gcal.py pattern)
- Operations: list files, read file, create file, upload file, create folder, move file, share file
- Skill: `skills/google-drive/SKILL.md`
- Key use case: content agent creates deliverables, uploads to client's Drive folder
- Per-client Drive folder mapping in `data/clients/<clientId>/config.json`
**Files to create:**
- `~/.config/gdrive/gdrive.py` -- CLI wrapper
- `skills/google-drive/SKILL.md` -- skill definition
- Google OAuth scope addition: `https://www.googleapis.com/auth/drive`
**Dependencies:** Google OAuth credentials (may need to add Drive scope to existing project)

### 1.4 Content Generation System (upgrade content agent)
**Current state:** `agents/content/CLAUDE.md` -- 26 lines of scaffolding, no workflow
**Target:** Full content creation pipeline: research -> draft -> review -> publish-ready
**Approach:**
- Content types: LinkedIn posts, blog posts, ad copy, email campaigns, video scripts
- Per-client voice/style config: `data/clients/<clientId>/brand-voice.md`
- Content calendar: SQLite table `content_calendar` (client_id, type, topic, status, scheduled_date, platform, content_path)
- Workflow:
  1. Research phase (web search, competitor analysis)
  2. Draft phase (generate content matching brand voice)
  3. Review phase (save to Drive or local, notify Juan)
  4. Publish phase (manual or auto-post when trust is established)
- Output: save to `content/<clientId>/YYYY-MM-DD-slug.md` and optionally upload to Drive
- Cron: weekly content batch (e.g., Monday 8am -- generate week's content)
- Skill: `skills/content/SKILL.md` -- trigger phrases for content requests
**Files to create/modify:**
- `agents/content/CLAUDE.md` -- full rewrite with detailed instructions
- `skills/content/SKILL.md` -- skill definition
- `src/db.ts` -- add content_calendar table
- `content/` directory structure
- `data/clients/<clientId>/brand-voice.md` -- per-client voice templates
**Dependencies:** Google Drive (1.3) for deliverable uploads

---

## TIER 2 -- MEDIUM PRIORITY

### 2.1 GoHighLevel CRM Integration
**Current state:** Zero code
**Target:** Full GHL API integration -- contacts, pipelines, opportunities, workflows, email campaigns
**Approach:**
- GHL API v2 via REST (API key auth)
- Node.js CLI: `scripts/ghl.js` (plain fetch, no SDK -- consistent with Airtable strategy)
- Operations: list/search contacts, get pipeline stages, move opportunities, trigger workflows, send emails, get analytics
- Skill: `skills/ghl/SKILL.md`
- Key use cases:
  - "Show me hot leads in pipeline X"
  - "Move contact Y to stage Z"
  - "Send reactivation email to all leads inactive 30+ days"
  - "Create email campaign for segment X"
**Files to create:**
- `scripts/ghl.js` -- GHL API wrapper
- `skills/ghl/SKILL.md` -- skill definition
- `.env` additions: `GHL_API_KEY`, `GHL_LOCATION_ID`
**Dependencies:** GHL API key and location ID from Juan
**Note:** This is the BIG one for agency operations -- unlocks email campaigns (2.3) and lead workflows (2.4)

### 2.2 Airtable CRM Integration
**Current state:** Design complete, blocked on credentials
**Target:** Direct API read/write to Airtable bases
**Approach:** Already planned in handoff 021/024
- `scripts/airtable.js` -- Node.js, plain fetch
- `skills/airtable/SKILL.md`
- `.env`: `AIRTABLE_API_KEY`, `AIRTABLE_BASE_ID`
**Status:** READY TO BUILD -- just needs credentials

### 2.3 Email Campaign System
**Current state:** Gmail is point-to-point only
**Target:** Bulk email campaigns via GHL (not Gmail -- Gmail has sending limits)
**Approach:**
- Leverage GHL API for bulk sends (2.1 dependency)
- Campaign builder: segment contacts, write copy (using content system 1.4), schedule send
- Template system: `templates/email/` with reusable HTML templates
- Tracking: open rates, click rates via GHL webhooks
- Skill: `skills/email-campaigns/SKILL.md`
**Dependencies:** GoHighLevel integration (2.1)

### 2.4 Lead Reactivation Workflows
**Current state:** Zero code
**Target:** Automated detection of cold leads + follow-up sequences
**Approach:**
- Scheduled cron: scan GHL pipeline for leads inactive X days
- Auto-generate personalized follow-up email (using content system 1.4)
- Escalation: after N attempts with no response, notify Juan
- Dashboard panel: reactivation funnel stats
**Dependencies:** GoHighLevel (2.1), Content system (1.4)

### 2.5 Google Analytics Integration
**Current state:** Zero code
**Target:** Read GA4 data for client reporting dashboards
**Approach:**
- Google Analytics Data API v1 (GA4)
- Python CLI: `~/.config/ga/ga.py` (consistent pattern)
- Metrics: sessions, users, pageviews, bounce rate, traffic sources, conversions
- Date range support: daily, weekly, monthly, custom
- Skill: `skills/google-analytics/SKILL.md`
- Feeds into: client dashboard (1.1)
**Dependencies:** Google OAuth with Analytics scope, GA4 property IDs per client

### 2.6 Google Search Console Integration
**Current state:** Zero code
**Target:** SEO performance data for client dashboards
**Approach:**
- Search Console API
- Python CLI: `~/.config/gsc/gsc.py`
- Metrics: impressions, clicks, CTR, avg position, top queries, top pages
- Skill: `skills/search-console/SKILL.md`
- Feeds into: client dashboard (1.1)
**Dependencies:** Google OAuth with Search Console scope, site URLs per client

### 2.7 Image Generation (DALL-E 3)
**Current state:** Zero code
**Target:** Generate images for social media, ads, blog posts
**Approach:**
- OpenAI API for DALL-E 3
- Node.js wrapper: `scripts/dalle.js`
- Skill: `skills/image-gen/SKILL.md`
- Save generated images to `content/<clientId>/images/`
- Optional: upload to Google Drive (1.3)
**Dependencies:** OpenAI API key
**Note:** Could also add Gemini Imagen as alternative (Google API key already exists)

### 2.8 Morning Briefing / Daily Digest
**Current state:** Scheduler exists, no pre-built digest
**Target:** Automated 8am briefing via Telegram
**Approach:**
- Create cron job with comprehensive prompt that:
  1. Reads Google Calendar for today's meetings
  2. Scans Obsidian for today's tasks
  3. Checks CRM for hot leads / follow-ups due
  4. Reviews team tasks due today
  5. Prioritizes everything against Juan's objectives
  6. Sends formatted Telegram message
- Prompt template: `templates/morning-digest.md`
- Setup: `node dist/schedule-cli.js create "$(cat templates/morning-digest.md)" "0 8 * * *"`
**Dependencies:** Calendar (exists), Obsidian (exists), CRM (2.1/2.2), Team (1.2)
**Note:** Can build a basic version NOW with Calendar + Obsidian, enhance later

---

## TIER 3 -- FUTURE BUILDS

### 3.1 Meta Ads Management
**Current state:** Zero code
**Target:** Read Meta Ads performance, manage campaigns
**Approach:**
- Meta Marketing API
- `scripts/meta-ads.js` -- campaign CRUD, reporting
- `skills/meta-ads/SKILL.md`
- Feeds into: client dashboard (1.1)
**Dependencies:** Meta Business Manager access, app credentials

### 3.2 YouTube Analytics
**Current state:** Zero code
**Target:** Pull video performance data, generate content insights
**Approach:**
- YouTube Data API v3 + YouTube Analytics API
- Python CLI: `~/.config/youtube/yt.py`
- Metrics: views, watch time, subscribers, top videos, audience retention
- Content suggestions based on performance
- `skills/youtube/SKILL.md`
**Dependencies:** Google OAuth with YouTube scope

### 3.3 HubSpot CRM Integration
**Current state:** Zero code
**Target:** Alternative CRM for clients not on GHL
**Approach:**
- HubSpot API v3
- `scripts/hubspot.js`
- `skills/hubspot/SKILL.md`
**Dependencies:** HubSpot API key
**Priority:** Build after GHL (2.1) -- same patterns, different API

### 3.4 Client Project Folders
**Current state:** No per-client context loading
**Target:** Structured client context that agents automatically load
**Approach:**
- Directory structure: `data/clients/<clientId>/`
  - `config.json` -- client metadata, API keys, Drive folder IDs
  - `brand-voice.md` -- tone, style, vocabulary
  - `brand-guidelines.md` -- colors, fonts, logo usage
  - `objectives.md` -- current goals and KPIs
  - `history.md` -- engagement history, key decisions
  - `dashboard.json` -- dashboard config
- Auto-context: when client referenced, agent loads their folder
**Dependencies:** None -- can build standalone
**Note:** This is foundational -- should arguably be built earlier

### 3.5 PDF Generation
**Current state:** `scripts/generate-pdf.py` does not exist
**Target:** Generate professional PDFs (proposals, reports, invoices)
**Approach:**
- Python + WeasyPrint or Playwright for HTML-to-PDF
- Templates: `templates/pdf/` with HTML/CSS templates
- `scripts/generate-pdf.py` -- accepts template + data, outputs PDF
- `skills/pdf/SKILL.md`
- Use cases: proposals, client reports, invoices, agreements
**Dependencies:** Python + WeasyPrint/Playwright installed on server

### 3.6 Google My Business Integration
**Current state:** Zero code
**Target:** Read GMB data for local SEO clients
**Approach:**
- Google Business Profile API
- Metrics: views, searches, actions, reviews
- `skills/gmb/SKILL.md`
**Dependencies:** Google OAuth with GMB scope

### 3.7 Stripe Integration
**Current state:** Listed in ops agent CLAUDE.md but zero code
**Target:** Invoice generation, payment tracking
**Approach:**
- Stripe API
- `scripts/stripe.js`
- `skills/stripe/SKILL.md`
**Dependencies:** Stripe API key

---

## Build Order (Recommended Sequence)

```
Phase 1 -- Foundation (can start NOW)
  1.4  Content Generation System (upgrade content agent)
  3.4  Client Project Folders (foundational structure)
  2.8  Morning Digest (basic version with Calendar + Obsidian)
  1.2  Team Coordination System

Phase 2 -- Google Ecosystem
  1.3  Google Drive Integration
  2.5  Google Analytics
  2.6  Search Console
  3.2  YouTube Analytics

Phase 3 -- Dashboard Upgrade
  1.1  Client Dashboard (plug in GA + SC data from Phase 2)
  3.5  PDF Generation (for dashboard exports)

Phase 4 -- CRM + Marketing Engine
  2.2  Airtable (waiting on credentials)
  2.1  GoHighLevel
  2.3  Email Campaigns
  2.4  Lead Reactivation

Phase 5 -- Creative + Ads
  2.7  Image Generation (DALL-E 3)
  3.1  Meta Ads Management

Phase 6 -- Extended Integrations
  3.3  HubSpot CRM
  3.6  Google My Business
  3.7  Stripe
```

---

## Credentials Needed From Juan

| Integration | What's Needed | Status |
|------------|--------------|--------|
| Airtable | API token, Base ID, table names | WAITING |
| GoHighLevel | API key, Location ID | NOT REQUESTED YET |
| OpenAI (DALL-E) | API key | NOT REQUESTED YET |
| Google Analytics | GA4 Property IDs per client | NOT REQUESTED YET |
| Search Console | Site URLs per client | NOT REQUESTED YET |
| Meta Ads | Business Manager credentials | NOT REQUESTED YET |
| YouTube | Channel ID | NOT REQUESTED YET |
| HubSpot | API key | NOT REQUESTED YET |
| Stripe | API key | NOT REQUESTED YET |
| Google Drive | OAuth scope addition | Uses existing Google project |

---

## Architecture Notes

- **No middleware.** All integrations are direct API. No n8n, Zapier, or Make.
- **CLI wrapper pattern:** Python CLIs in `~/.config/<service>/` for Google APIs, Node.js `scripts/<service>.js` for REST APIs
- **Skills pattern:** Every integration gets a `skills/<service>/SKILL.md` for Claude Code invocation
- **Client context:** `data/clients/<clientId>/` is the universal client folder structure
- **Dashboard:** Hono + Chart.js + Tailwind, server-rendered HTML (no React/build step)
- **Database:** SQLite via better-sqlite3, migrations in `src/db.ts`
