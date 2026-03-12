#!/usr/bin/env node
/**
 * ClaudeClaw Airtable CLI
 *
 * Direct API wrapper for Airtable -- no middleware (n8n, Zapier, Make).
 * Reads credentials from .env via readEnvFile().
 *
 * Usage:
 *   node dist/airtable-cli.js list [--limit N] [--view NAME] [--filter FORMULA]
 *   node dist/airtable-cli.js get <record_id>
 *   node dist/airtable-cli.js create '{"Name":"Acme","Status":"New"}'
 *   node dist/airtable-cli.js update <record_id> '{"Status":"Contacted"}'
 *   node dist/airtable-cli.js search <field> <value>
 *   node dist/airtable-cli.js schema
 */

import { readEnvFile } from './env.js';

const env = readEnvFile([
  'AIRTABLE_API_TOKEN',
  'AIRTABLE_BASE_ID',
  'AIRTABLE_TABLE_ID',
]);

const TOKEN = env.AIRTABLE_API_TOKEN || '';
const BASE_ID = env.AIRTABLE_BASE_ID || '';
const TABLE_ID = env.AIRTABLE_TABLE_ID || '';

if (!TOKEN || !BASE_ID || !TABLE_ID) {
  console.error(
    'Missing Airtable credentials. Set AIRTABLE_API_TOKEN, AIRTABLE_BASE_ID, and AIRTABLE_TABLE_ID in .env',
  );
  process.exit(1);
}

const BASE_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`;
const META_URL = `https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables`;

const headers: Record<string, string> = {
  Authorization: `Bearer ${TOKEN}`,
  'Content-Type': 'application/json',
};

const [, , command, ...rest] = process.argv;

function parseFlag(args: string[], flag: string): string | undefined {
  const idx = args.indexOf(flag);
  if (idx === -1 || idx + 1 >= args.length) return undefined;
  return args[idx + 1];
}

async function airtableFetch(
  url: string,
  options?: RequestInit,
): Promise<unknown> {
  const res = await fetch(url, { headers, ...options });
  const body = await res.json();
  if (!res.ok) {
    const err = (body as { error?: { message?: string } }).error;
    throw new Error(
      `Airtable ${res.status}: ${err?.message || JSON.stringify(body)}`,
    );
  }
  return body;
}

async function listRecords(
  limit: number,
  view?: string,
  filter?: string,
): Promise<unknown[]> {
  const params = new URLSearchParams();
  params.set('pageSize', String(Math.min(limit, 100)));
  if (view) params.set('view', view);
  if (filter) params.set('filterByFormula', filter);

  const all: unknown[] = [];
  let offset: string | undefined;

  do {
    if (offset) params.set('offset', offset);
    const data = (await airtableFetch(
      `${BASE_URL}?${params}`,
    )) as { records: unknown[]; offset?: string };
    all.push(...data.records);
    offset = data.offset;
  } while (offset && all.length < limit);

  return all.slice(0, limit);
}

async function getRecord(id: string): Promise<unknown> {
  return airtableFetch(`${BASE_URL}/${id}`);
}

async function createRecord(
  fields: Record<string, unknown>,
): Promise<unknown> {
  return airtableFetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify({ fields }),
  });
}

async function updateRecord(
  id: string,
  fields: Record<string, unknown>,
): Promise<unknown> {
  return airtableFetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ fields }),
  });
}

async function searchRecords(
  field: string,
  value: string,
): Promise<unknown[]> {
  const formula = `FIND(LOWER("${value}"), LOWER({${field}}))`;
  return listRecords(100, undefined, formula);
}

async function getSchema(): Promise<unknown> {
  try {
    return await airtableFetch(META_URL);
  } catch {
    // Meta API requires schema.bases:read scope. Fall back to inspecting a record.
    const records = await listRecords(1);
    if (records.length === 0) return { note: 'No records found. Table may be empty.' };
    const rec = records[0] as { fields?: Record<string, unknown> };
    const fields = rec.fields || {};
    const fieldInfo = Object.entries(fields).map(([name, value]) => ({
      name,
      type: typeof value,
      example: Array.isArray(value) ? '[array]' : String(value).slice(0, 100),
    }));
    return {
      note: 'Schema inferred from first record (meta API needs schema.bases:read scope)',
      fields: fieldInfo,
    };
  }
}

async function main() {
  switch (command) {
    case 'list': {
      const limit = parseInt(parseFlag(rest, '--limit') || '20', 10);
      const view = parseFlag(rest, '--view');
      const filter = parseFlag(rest, '--filter');
      const records = await listRecords(limit, view, filter);
      console.log(JSON.stringify(records, null, 2));
      break;
    }

    case 'get': {
      const id = rest[0];
      if (!id || id.startsWith('--')) {
        console.error('Usage: airtable-cli get <record_id>');
        process.exit(1);
      }
      const record = await getRecord(id);
      console.log(JSON.stringify(record, null, 2));
      break;
    }

    case 'create': {
      const fieldsJson = rest[0];
      if (!fieldsJson) {
        console.error(
          'Usage: airtable-cli create \'{"Name":"Acme","Status":"New"}\'',
        );
        process.exit(1);
      }
      const fields = JSON.parse(fieldsJson) as Record<string, unknown>;
      const created = await createRecord(fields);
      console.log(JSON.stringify(created, null, 2));
      break;
    }

    case 'update': {
      const id = rest[0];
      const fieldsJson = rest[1];
      if (!id || !fieldsJson) {
        console.error(
          'Usage: airtable-cli update <record_id> \'{"Status":"Contacted"}\'',
        );
        process.exit(1);
      }
      const fields = JSON.parse(fieldsJson) as Record<string, unknown>;
      const updated = await updateRecord(id, fields);
      console.log(JSON.stringify(updated, null, 2));
      break;
    }

    case 'search': {
      const field = rest[0];
      const value = rest[1];
      if (!field || !value) {
        console.error('Usage: airtable-cli search <field> <value>');
        process.exit(1);
      }
      const results = await searchRecords(field, value);
      console.log(JSON.stringify(results, null, 2));
      break;
    }

    case 'schema': {
      const schema = await getSchema();
      console.log(JSON.stringify(schema, null, 2));
      break;
    }

    default:
      console.error(
        'Commands: list | get | create | update | search | schema',
      );
      process.exit(1);
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
