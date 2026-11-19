// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry is the post on X, not this program. The grader runs this file in a sandbox with no
// network and no wall clock, twice, and both runs must write the same bytes. Its only job is to
// hand POST.json, which names the post, to the gate by copying it from /bot to /output.
//
// Locally the two directories are overridden so the run can be reproduced:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (error) {
  console.error(`POST.json could not be copied from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
