// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry is the post on X, not this program. The grader runs this file in a sandbox with no
// network and no wall clock, twice, and both runs must write the same bytes. Its only job is to
// hand POST.json, which names the post, to the gate by copying it from /bot to /output.
//
// Locally the two directories are overridden so the run can be reproduced:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const postPath = join(botDir, 'POST.json');

function fail(message: string): never {
  console.error(message);
  process.exit(1);
}

// The gate wants a JSON object naming one post on X. Checking it here turns the two mistakes that
// cost an entry — a POST.json that is not valid JSON, and the starter's placeholder address left
// in place — into a clear failure in the entry's own run, instead of a refusal after grading.
const POST_URL = /^https:\/\/(?:x|twitter)\.com\/[A-Za-z0-9_]{1,15}\/status\/[0-9]+(?:[?#].*)?$/;

let raw: string;
try {
  raw = readFileSync(postPath, 'utf8');
} catch (error) {
  fail(`POST.json could not be read from ${botDir}: ${(error as Error).message}`);
}

let post: unknown;
try {
  post = JSON.parse(raw);
} catch (error) {
  fail(`POST.json is not valid JSON: ${(error as Error).message}`);
}

if (typeof post !== 'object' || post === null || Array.isArray(post)) {
  fail('POST.json must be a JSON object, such as {"url": "https://x.com/<handle>/status/<id>"}');
}

const url = (post as Record<string, unknown>).url;
if (typeof url !== 'string' || !POST_URL.test(url)) {
  fail(`POST.json does not name a post on X: ${JSON.stringify(url)}`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'POST.json'), raw);
