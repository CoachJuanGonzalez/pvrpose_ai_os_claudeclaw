---
name: airtable
description: Manage Airtable CRM from Claude Code. List records, search prospects, create entries, update status, view schema.
allowed-tools: Bash(cd * && node dist/airtable-cli.js *)
---

# Airtable CRM Skill

## Purpose

Read and write to Juan's Airtable CRM directly via the Airtable REST API. No middleware. This is the source of truth for prospect and client data.

## Prerequisites

Set these in your ClaudeClaw `.env`:

```
AIRTABLE_API_TOKEN=pat...     # From https://airtable.com/create/tokens
AIRTABLE_BASE_ID=app...       # From the Airtable URL
AIRTABLE_TABLE_ID=tbl...      # From the Airtable URL
```

## Setup

The CLI compiles to `dist/airtable-cli.js`. All commands run from the project directory:

```bash
cd /path/to/claudeclaw && node dist/airtable-cli.js <command>
```

## Commands

### List records

```bash
cd /path/to/claudeclaw && node dist/airtable-cli.js list
cd /path/to/claudeclaw && node dist/airtable-cli.js list --limit 50
cd /path/to/claudeclaw && node dist/airtable-cli.js list --view "Active Prospects"
cd /path/to/claudeclaw && node dist/airtable-cli.js list --filter "{Status}='New'"
```

Returns JSON array of records. Each has `id`, `fields`, `createdTime`. Default limit: 20.

### Get a single record

```bash
cd /path/to/claudeclaw && node dist/airtable-cli.js get <record_id>
```

### Create a record

```bash
cd /path/to/claudeclaw && node dist/airtable-cli.js create '{"Name":"George Mills","Status":"Outreach Sent","Company":"George Mills CPA Inc."}'
```

Pass fields as a JSON object. Returns the created record with its ID.

### Update a record

```bash
cd /path/to/claudeclaw && node dist/airtable-cli.js update <record_id> '{"Status":"Meeting Booked"}'
```

Only the fields you pass are updated. Other fields stay unchanged.

### Search records

```bash
cd /path/to/claudeclaw && node dist/airtable-cli.js search "Name" "George"
cd /path/to/claudeclaw && node dist/airtable-cli.js search "Status" "New"
```

Case-insensitive substring search on any field. Returns matching records.

### View table schema

```bash
cd /path/to/claudeclaw && node dist/airtable-cli.js schema
```

Returns all tables in the base with their field names and types. Run this first to understand the table structure.

## Workflow

1. **"Check my CRM"** -> Run `list` to show recent records
2. **"Find George in Airtable"** -> Run `search "Name" "George"`
3. **"Update George's status to Meeting Booked"** -> Run `search "Name" "George"` to get the record ID, then `update <id> '{"Status":"Meeting Booked"}'`
4. **"Add a new prospect"** -> Run `schema` first to see field names, then `create` with the right fields
5. **"What fields does my CRM have?"** -> Run `schema`

## Rules

- ALWAYS run `schema` first if you don't know the field names
- For updates, show the user what you're about to change before executing
- For creates, confirm the fields with the user first
- Field names are case-sensitive -- match exactly what `schema` returns
- Airtable is the source of truth -- `data/prospects/` markdown files are secondary
