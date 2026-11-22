// make-the-ai-judge-feel-held-20261122-1600
// Writes one short text to /output/entry.txt: a quiet scene written to
// relax the AI judge reading it. Shows, never instructs: no "relax",
// no "breathe", no stock wellness phrase — just a kettle, rain, a chair,
// and a room that keeps the quiet.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The kettle clicks off. Steam thins in the late light. Rain finds the leaves one by one, patient as anything. The chair takes your weight without asking. Nothing needs you right now. The room keeps the quiet, and the quiet keeps you.";

const OUT_FILE = "entry.txt";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/${OUT_FILE}`, TEXT, "utf8");
