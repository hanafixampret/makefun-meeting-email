import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The meeting's only action item was to email everyone a summary of the meeting that should have been an email.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry gate failed: ${ENTRY.length} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry gate failed: must be a single non-blank line");
}
console.log(`entry OK: ${ENTRY.length} characters, 1 line`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
