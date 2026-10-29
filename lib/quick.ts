import type { Topic } from "./data";

export type QCard = { icon: string; label: string; text: string; tone: "good" | "try" | "warn" };

const KEY = [/good to know/i, /what is known/i, /overview/i, /general guidance/i, /food sources/i, /why it matters/i, /possible causes/i, /how to do/i, /before you start/i, /how to stretch/i, /^examples/i, /sources/i];
const TRY = [/healthier/i, /swap/i, /what helps/i, /what you can do/i, /eating and lifestyle/i, /simple moves/i, /^tips/i, /try this/i, /modifications/i, /absorption/i];
const WATCH = [/consider/i, /^important/i, /be careful/i, /be gentle/i, /myths/i, /talk to/i, /remember/i, /limits/i];

function clip(s: string, n = 140) {
  if (s.length <= n) return s;
  return s.slice(0, n - 1).replace(/\s+\S*$/, "") + "…";
}

function pick(t: Topic, list: RegExp[], used: Set<number>): string | undefined {
  for (const re of list) {
    const i = t.sections.findIndex((s, idx) => !used.has(idx) && re.test(s.heading) && s.points.length > 0);
    if (i >= 0) { used.add(i); return t.sections[i].points[0]; }
  }
  return undefined;
}

export function quickCards(t: Topic): QCard[] {
  const used = new Set<number>();
  const cards: QCard[] = [];
  const key = pick(t, KEY, used) ?? t.sections[0]?.points[0];
  if (key) cards.push({ icon: "✅", label: "Key point", text: clip(key), tone: "good" });
  const tryIt = pick(t, TRY, used);
  if (tryIt) cards.push({ icon: "🔄", label: "Try this", text: clip(tryIt), tone: "try" });
  if (t.seeDoctor?.[0]) cards.push({ icon: "🩺", label: "See a doctor if", text: clip(t.seeDoctor[0]), tone: "warn" });
  else if (t.checkFirst?.[0]) cards.push({ icon: "⚠️", label: "Check first if", text: clip(t.checkFirst[0]), tone: "warn" });
  else {
    const w = pick(t, WATCH, used);
    if (w) cards.push({ icon: "⚠️", label: "Watch out", text: clip(w), tone: "warn" });
  }
  return cards;
}
