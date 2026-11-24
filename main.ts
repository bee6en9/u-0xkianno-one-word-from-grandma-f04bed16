// One Word From Grandma — u-0xkianno-one-word-from-grandma-f04bed16
// The single word a grandma would text about AI: "Contraption".
// Her generation's word for a machine, applied to the newest machine
// of all — warm, baffled, and funny with no caption needed.
// Deterministic, no network, no external dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Contraption";

// Gate guard: exactly one word, 1-30 characters, no whitespace.
// Character count uses code points, matching the gate's UTF-8 text check.
const chars = [...WORD];
if (chars.length < 1 || chars.length > 30) {
  throw new Error("entry must be 1-30 characters");
}
if (/\s/.test(WORD)) {
  throw new Error("entry must be a single word with no spaces");
}
if (WORD.trim() !== WORD || WORD.length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
