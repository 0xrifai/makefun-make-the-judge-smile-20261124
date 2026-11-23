// Make the Judge Smile — make.fun bounty entry.
// Writes one line (at most 200 characters) about a small good thing
// that happened today to /output/entry.txt. Node stdlib only.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My phone died mid-call, and when it came back the missed message was my sister saying she'd already paid my electricity bill.";

const OUT_PATH = "/output/entry.txt";

// The gate: 1-200 characters, a single line, and not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file is exactly the line, nothing more.
writeFileSync(OUT_PATH, LINE, "utf8");

// Re-read and confirm what landed on disk is exactly the line.
const written = readFileSync(OUT_PATH, "utf8");
if (written !== LINE) {
  throw new Error("written file does not match the entry line");
}

console.log(`wrote ${LINE.length} characters to ${OUT_PATH}`);
