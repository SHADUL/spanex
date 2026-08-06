import { servicePillars } from "../lib/seo/services.ts";
import { regions } from "../lib/seo/locations.ts";
import { softwareTools } from "../lib/seo/software.ts";
import { industries } from "../lib/seo/industries.ts";
import { guides } from "../lib/seo/guides.ts";
import { glossaryTerms as glossary } from "../lib/seo/glossary.ts";
import { GATE, passesGate, wordCount } from "../lib/seo/gate.ts";
import type { GateThresholds } from "../lib/seo/gate.ts";

type Row = {
  type: string;
  slug: string;
  path: string;
  words: number;
  wordFloor: number;
  faqs: number;
  minFaqs: number;
  links: number;
  minLinks: number;
  pass: boolean;
};

const rows: Row[] = [];

function check(
  type: string,
  slug: string,
  path: string,
  text: string,
  faqCount: number,
  internalLinks: number,
  t: GateThresholds,
) {
  const words = wordCount(text);
  const pass = passesGate({ text, faqCount, internalLinks }, t);
  rows.push({
    type,
    slug,
    path,
    words,
    wordFloor: t.wordFloor,
    faqs: faqCount,
    minFaqs: t.minFaqs,
    links: internalLinks,
    minLinks: t.minLinks,
    pass,
  });
}

// --- services (mirror app/services/[service]/page.tsx gateInput) ---
for (const s of servicePillars) {
  const text = [
    s.tagline,
    s.problem,
    s.approach,
    ...s.scope,
    ...s.deliverables,
    ...s.standards,
    ...s.faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  const links =
    s.toolSlugs.length +
    s.industrySlugs.length +
    s.relatedServiceSlugs.length +
    (s.intents?.length ?? 0) +
    2;
  check("service", s.slug, `/services/${s.slug}`, text, s.faqs.length, links, GATE.service);
}

// --- locations (mirror app/locations/[country]/[region]/page.tsx) ---
const REGION_SERVICE_SLUGS_LEN = 6;
function regionFaqs(r: any) {
  return [
    { q: `Do you work to ${r.name}'s standards?`, a: `Yes. We design and draft to ${r.standardBody}, plus your own CAD standard. Your licensed professional reviews and seals the work.` },
    { q: `Can you support utilities in ${r.name} from a remote team?`, a: `Yes. We work with ${r.name} utilities and their engineering partners entirely remotely — you send scope and standards, and receive documented, review-ready packages. ${r.handoff}` },
    { q: `Which ${r.name} utilities have work like this?`, a: `Distribution design and drafting of this kind supports networks such as ${r.utilities.slice(0, 3).join(", ")} and their consultants. We are an independent production partner and are not affiliated with these utilities.` },
  ];
}
for (const r of regions as any[]) {
  const faqs = regionFaqs(r);
  const text = [
    r.marketNote,
    r.standardBody,
    r.handoff,
    r.utilities.join(" "),
    ...faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  const path = `/locations/${r.country}/${r.slug}`;
  check("location", r.slug, path, text, faqs.length, REGION_SERVICE_SLUGS_LEN + 3, GATE.location);
}

// --- software (mirror app/software/[tool]/page.tsx) ---
for (const t of softwareTools as any[]) {
  const text = [
    t.intro,
    ...t.whatWeDo,
    ...t.outputs,
    ...t.faqs.flatMap((f: any) => [f.q, f.a]),
  ].join(" ");
  const links = t.relatedServiceHrefs.length + 3;
  check("software", t.slug, `/software/${t.slug}`, text, t.faqs.length, links, GATE.software);
}

// --- industries (mirror app/industries/[industry]/page.tsx) ---
for (const i of industries as any[]) {
  const text = [
    i.intro,
    ...i.painPoints,
    ...i.services,
    ...i.faqs.flatMap((f: any) => [f.q, f.a]),
  ].join(" ");
  check("industry", i.slug, `/industries/${i.slug}`, text, i.faqs.length, 5, GATE.industry);
}

// --- guides (mirror app/guides/[slug]/page.tsx) ---
function guideText(g: any): string {
  return [
    g.dek,
    g.keyTakeaway,
    ...g.sections.flatMap((s: any) => [s.heading, ...s.paragraphs, ...(s.bullets ?? [])]),
    ...g.faqs.flatMap((f: any) => [f.q, f.a]),
  ].join(" ");
}
for (const g of guides as any[]) {
  const links = g.relatedServices.length + g.relatedTermSlugs.length;
  check("guide", g.slug, `/guides/${g.slug}`, guideText(g), g.faqs.length, links, GATE.guide);
}

// --- glossary (mirror app/glossary/[term]/page.tsx) ---
for (const t of glossary as any[]) {
  const text = [t.short, t.definition].join(" ");
  const links = t.relatedTermSlugs.length + t.relatedServices.length + 1;
  check("glossary", t.slug, `/glossary/${t.slug}`, text, 0, links, GATE.glossary);
}

// --- report ---
const failing = rows.filter((r) => !r.pass);
const byType: Record<string, { total: number; fail: number }> = {};
for (const r of rows) {
  byType[r.type] ??= { total: 0, fail: 0 };
  byType[r.type].total++;
  if (!r.pass) byType[r.type].fail++;
}

console.log("\n=== SUMMARY BY TYPE ===");
for (const [type, v] of Object.entries(byType)) {
  console.log(`${type.padEnd(10)} ${v.total - v.fail}/${v.total} indexable  (${v.fail} noindex)`);
}
console.log(`\nTOTAL: ${rows.length - failing.length}/${rows.length} indexable, ${failing.length} noindex`);

console.log("\n=== FAILING PAGES (noindex) ===");
function reasons(r: Row): string {
  const out: string[] = [];
  if (r.words < r.wordFloor) out.push(`words ${r.words}/${r.wordFloor} (+${r.wordFloor - r.words})`);
  if (r.faqs < r.minFaqs) out.push(`faqs ${r.faqs}/${r.minFaqs} (+${r.minFaqs - r.faqs})`);
  if (r.links < r.minLinks) out.push(`links ${r.links}/${r.minLinks} (+${r.minLinks - r.links})`);
  return out.join(", ");
}
failing.sort((a, b) => a.type.localeCompare(b.type) || a.words - b.words);
for (const r of failing) {
  console.log(`[${r.type}] ${r.path}`);
  console.log(`    NEED: ${reasons(r)}`);
}

// machine-readable
import { writeFileSync } from "node:fs";
writeFileSync(
  new URL("./gate-audit-report.json", import.meta.url),
  JSON.stringify({ summary: byType, total: rows.length, failing }, null, 2),
);
console.log("\nWrote scripts/gate-audit-report.json");
