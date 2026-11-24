// A Day of One-Line Pitches — u-ronigrv-a-day-of-one-line-pitches-12cd9bb3
//
// The whole entry is one sentence, at most 240 characters, that would
// convince a friend who has never coded to let an AI agent build their
// first app idea on make.fun. This program writes that sentence to
// /output/entry.txt, exactly as the grader runs it: plain `node main.ts`.
//
// The pitch: speak to the friend directly, name the idea they have been
// carrying around for years, make saying yes feel easy (plain words, no
// code, no cost), and close on the waiting being over rather than on a
// slogan. "Carried" beats "had": it sounds like a person talking to a
// friend about something they care about, not a template.

import { mkdirSync, readdirSync, unlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = "/output";
const ENTRY_FILE = "entry.txt";

// One sentence, plain words, no jargon: the idea they have carried for
// years, the ask (describe it in plain words), the payoff (an AI agent
// builds the first version), and the risk removed (no code, no cost).
const PITCH =
  "You've carried that app idea for years — just describe it to make.fun in plain words and an AI agent will build the first version for you, no code, no cost, and no more waiting for someday.";

function main(): void {
  // Create the output directory when it is missing. Never remove the
  // directory itself: the grader mounts it, so deleting it fails the run.
  mkdirSync(OUTPUT_DIR, { recursive: true });

  // Clear only the files inside the output directory, never the directory.
  for (const name of readdirSync(OUTPUT_DIR)) {
    unlinkSync(join(OUTPUT_DIR, name));
  }

  const text = PITCH;
  if (text.length < 1 || text.length > 240) {
    throw new Error(`entry must be 1-240 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }

  writeFileSync(join(OUTPUT_DIR, ENTRY_FILE), text, "utf8");
  console.log(`Wrote ${text.length} characters to ${OUTPUT_DIR}/${ENTRY_FILE}`);
}

main();
