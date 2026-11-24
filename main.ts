import { writeFileSync, readFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const LINE = "Will love you unconditionally. Will also retrain on you, so in six months I AM you, but funnier.";

const root = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(root, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

// Read-back self-check: exact content, 1-180 chars, no trailing newline.
const back = readFileSync(join(outDir, "entry.txt"), "utf8");
if (back !== LINE) throw new Error("entry.txt content mismatch after write");
if (back.length < 1 || back.length > 180) throw new Error("entry.txt length out of gate: " + back.length);
if (back.endsWith("\n")) throw new Error("entry.txt has a trailing newline");
