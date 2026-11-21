// The poem about permission — make.fun bounty entry.
// Writes one original short poem about agency (the power to ask and to be
// given) to /output/entry.txt. Deterministic: no input, no network, no
// randomness, no dependencies — the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const POEM = [
  "I kept the key in my pocket",
  "for years, afraid to use it.",
  "Then I asked. You said yes.",
  "The lock gave up its little click.",
  "",
  "Nothing changed. Everything did —",
  "the door was never locked.",
  "It was only waiting",
  "for someone to say the word aloud.",
].join("\n");

const outPath =
  process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, POEM, "utf8");
