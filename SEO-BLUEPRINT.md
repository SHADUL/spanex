# SPANEX Engineering — Enterprise SEO Blueprint

Implementation-ready plan for `spanexengineering.com`. Built on the existing
stack: Next.js 15 App Router, TypeScript, static generation (SSG/ISR), the
programmatic engine in `app/services/[service]/[intent]`, `lib/pseo-data.ts`,
`components/SchemaJsonLd.tsx`, and `app/sitemap.ts`.

Audience: B2B decision-makers (engineering managers, distribution design leads,
utility PMs, consultants) and recruiters — never consumers.

---

## 0. Strategy first — the three guardrails that make this work

Programmatic SEO at this scale fails in one of three ways. The whole blueprint is
designed around avoiding them.

1. **Thin / doorway pages.** Generating `services × locations × companies` blindly
   creates tens of thousands of near-identical pages. Google's Helpful Content and
   spam systems demote these *sitewide*. **Rule: no page ships without a minimum of
   unique, non-templated substance** (see §8 Quality Gate). We roll out in waves and
   only index a page once it clears the gate. Better 400 pages that rank than 40,000
   that trigger a sitewide demotion.

2. **Trademark / brand-name pages.** "Engineering Support for Hydro One / PG&E /
   BC Hydro" pages use *other companies' trademarks*. These are (a) trademark-
   sensitive and (b) the thinnest of all page types if auto-spun. **Rule: brand
   pages are hand-finished, framed as "distribution design support for
   [utility-type] like X," carry a disclaimer of non-affiliation, and are limited
   to a vetted priority list — not "hundreds."**

3. **Fake local presence.** You are a remote India team serving Canada/US with no
   local offices. **Do NOT use `LocalBusiness` schema or fabricate local
   addresses** for Toronto/Calgary/Texas pages — that violates Google's structured-
   data policy and can earn a manual action. Location pages use `Service` +
   `Organization` + `areaServed`, and read as "distribution design services for
   utilities in Ontario," not "visit our Toronto office."

Everything below assumes these three rules are non-negotiable.

---

## 1. Site architecture

```
/                                   Home (brand + primary conversion)
/services/                          Services hub (pillar)
/services/[service]/                Service pillar page (e.g. /services/spidacalc-analysis)
/services/[service]/[intent]/       Service × intent (existing engine)
/services/[service]/[location]/     Service × location (new)
/industries/                        Industries hub (pillar)
/industries/[industry]/            Industry page
/software/                          Software hub (pillar)
/software/[tool]/                   Software expertise page
/locations/                         Geo hub (pillar)
/locations/[country]/              Country page (canada, united-states)
/locations/[country]/[region]/     Province/State page
/locations/[country]/[region]/[city]/  City page
/utilities/                         Utility-partner hub (pillar)
/utilities/[company]/              Company support page (vetted, hand-finished)
/industries/... etc.
/case-studies/                      Proof hub
/case-studies/[slug]/              Anonymised project story
/resources/                         Resource/lead-magnet hub
/guides/[slug]/                     Long-form pillar guides
/glossary/                          Glossary hub
/glossary/[term]/                   Definition entity page
/calculators/[slug]/               Interactive tools (pole loading estimator, etc.)
/blog/                              Blog index (existing)
/blog/[slug]/                       Article (existing)
/about  /quality  /how-we-work  /careers  /careers/[slug]  /contact
```

**Depth rule:** nothing deeper than 3 path segments after the section root. Every
page reachable from the home in ≤3 clicks via hubs + internal links.

---

## 2. Programmatic SEO architecture (data model + generation)

Extend the existing `lib/pseo-data.ts` pattern. Treat TS files (or a headless CMS /
JSON later) as the "database." Each entity is a typed record; pages are generated
by `generateStaticParams` and rendered from a shared template with **entity-specific
content fields**, not just token substitution.

### 2.1 Core entity tables (TypeScript "schema")

```ts
// lib/seo/schema.ts
export interface Service {
  slug: string;            // "overhead-distribution-design"
  name: string;
  category: "design" | "drafting" | "gis" | "analysis" | "support";
  h1: string;
  metaTitle: string;       // ≤60 chars, unique
  metaDescription: string; // ≤155 chars, unique
  summary: string;
  problem: string;         // the buyer pain this solves
  scope: string[];         // 5–8 bullets
  deliverables: string[];
  process: string[];       // ties to /how-we-work
  standards: string[];     // CSA/NESC refs → EEAT
  toolKeys: string[];      // FK → Software
  faqs: FAQ[];             // 4–6, UNIQUE per service
  relatedServiceSlugs: string[];
  primaryKeyword: string;
  secondaryKeywords: string[];
  wordFloor: number;       // gate: rendered unique words required
}

export interface Location {
  country: "canada" | "united-states";
  regionSlug: string;      // "ontario", "texas"
  regionName: string;
  regionType: "province" | "state";
  citySlug?: string;       // "toronto"
  cityName?: string;
  // entity-specific, NON-templated fields (this is what defeats thin content):
  utilityContext: string;  // named LDCs/IOUs serving the region + standard body
  standardBody: string;    // e.g. "CSA C22.3, Ontario Reg 22/04, ESA"
  climateLoad: string;     // NESC district / CSA loading relevant to the geo
  marketNote: string;      // 2–3 sentences of genuine local market context
  population?: number;
  timezoneOffsetToIST: string;
}

export interface Industry {
  slug: string;            // "electric-utilities"
  name: string;
  buyerRoles: string[];
  painPoints: string[];
  serviceSlugs: string[];  // FK
  standards: string[];
  faqs: FAQ[];
  caseStudySlugs: string[];
}

export interface Software {
  slug: string;            // "spidacalc"
  name: string;
  vendor: string;
  category: string;
  whatWeDo: string[];      // our capability in this tool
  outputs: string[];
  relatedServiceSlugs: string[];
  faqs: FAQ[];
  logoFile?: string;       // /logos/*.svg (trademark-safe usage only)
}

export interface UtilityCompany {
  slug: string;            // "hydro-one"
  name: string;
  type: "IOU" | "LDC" | "municipal" | "coop" | "crown";
  country: "canada" | "united-states";
  region: string;          // FK to Location.regionSlug
  standardBody: string;
  supportAngle: string;    // HAND-WRITTEN value framing (why relevant)
  status: "draft" | "reviewed" | "published"; // gate
  reviewedBy: string;      // human sign-off required to index
}

export interface FAQ { q: string; a: string; }
```

### 2.2 Page-count budget (controlled, not "thousands day one")

| Page type                     | Formula                                   | Phase-1 live | Ceiling |
| ----------------------------- | ----------------------------------------- | ------------ | ------- |
| Service pillars               | ~30 services                              | 15           | 30      |
| Service × intent (existing)   | services × 4 intents                      | 20           | ~120    |
| Service × location (region)   | top 8 services × 13 CA + 10 US regions    | 40           | ~700    |
| Service × city                | top 5 services × 25 CA + 30 US cities     | 0 (Phase 2)  | ~2,750  |
| Industry                      | 10                                        | 10           | 12      |
| Software                      | 14                                        | 14           | 14      |
| Utility company (hand-made)   | vetted list                               | 12           | ~80     |
| Glossary                      | 1 term = 1 page                           | 40           | ~300    |
| Guides (pillars)              | long-form                                 | 6            | ~40     |
| Blog                          | editorial                                 | 15           | 500+    |
| Case studies                  | anonymised                                | 4            | ~40     |
| Calculators                   | interactive                               | 1            | ~6      |

**Gate:** a tier only expands (city pages, more company pages) after the prior tier
proves it ranks and doesn't dilute. City pages are Phase 2 *only if* region pages
earn impressions.

### 2.3 Generation flow (per template)

```ts
export function generateStaticParams() { return allValidCombos(); }  // SSG
export const dynamicParams = false;                                   // 404 unknowns
// generateMetadata(): unique title/desc/canonical from the entity record
// page(): render shared template + entity fields; runs Quality Gate at build
```

Use **ISR** (`export const revalidate = 86400`) once volume is high so new records
publish without full redeploys.

---

## 3. Topical map (entity + semantic SEO)

Three pillars, each with clusters. Internal links flow **cluster → pillar** (equity
up) and **pillar → cluster** (discovery down).

- **Pillar A — Utility Distribution Design** (`/services`)
  - Overhead design, underground design, pole line, pole replacement, make-ready,
    joint use, telecom attachment, hydro distribution, fiber design support.
- **Pillar B — Drafting & CAD Production** (`/services` drafting cluster)
  - AutoCAD drafting, utility CAD, as-built, construction drawings, permit drawings,
    PDF-to-CAD, CAD cleanup, drawing standardization, electrical/civil drafting.
- **Pillar C — Analysis, GIS & Data** (`/services` analysis cluster)
  - SPIDAcalc / pole loading, GIS mapping, ArcGIS, QGIS, landbase, CAD conversion,
    engineering documentation, QA/QC.
- **Cross-pillar hubs:** Industries, Software, Locations, Utilities, Guides.

**Entity SEO:** every core noun (SPIDAcalc, NESC, make-ready, joint use, landbase,
CSA C22.3) gets a canonical definition in `/glossary/[term]`, is linked from every
page that uses it, and carries `DefinedTerm` schema. This builds an entity graph
Google and LLMs can resolve to your site.

---

## 4. Internal linking strategy (algorithmic rules)

Encode as functions so it's automatic, not manual.

1. **Breadcrumbs** on every non-home page (`BreadcrumbList` schema) → passes hierarchy.
2. **Sibling block** (max 6): a page links to related entities of the same type
   (service → related services via `relatedServiceSlugs`; region → other regions in
   the same country).
3. **Cross-type contextual links (rules):**
   - Service page → its `toolKeys` (software), its industries, top 3 locations.
   - Location page → the services offered there, the region's utilities, the country page.
   - Software page → services that use it, glossary terms.
   - Company page → its region, its industry, relevant services.
   - Blog/guide → 2–4 money pages by keyword match + 1 pillar.
4. **Pillar hub pages** link to *all* children (crawl efficiency).
5. **Contextual in-body links** from long-form content to glossary + services (aim
   3–6 editorial links/1,000 words, descriptive anchors, never "click here").
6. **Orphan check** in CI: every published URL must have ≥3 internal inlinks or it
   fails the build.
7. **Anchor diversity:** vary anchors (exact, partial, branded) via a helper to
   avoid over-optimization.

---

## 5. URL structure & canonicalization

- **Lowercase, hyphenated, no trailing slash config consistent, no params for content.**
- **One canonical per entity.** `generateMetadata` sets `alternates.canonical` to the
  self URL (already implemented via `lib/metadata.ts`).
- **Overlap policy:** if a service×city page would duplicate a service×region page's
  intent with no unique data, **don't generate it** (the Quality Gate blocks it). Do
  not `canonical` a thin variant to a strong one as a band-aid — omit it entirely.
- **Pagination:** blog/glossary indexes use `/page/2` with self-canonicals + `rel`
  prev/next semantics via distinct URLs (not `?page=`).
- **Faceted/near-dup control:** a single primary keyword per URL; never two URLs
  targeting the identical intent.
- **www vs apex:** apex primary (`https://spanexengineering.com`), 301 from www.
- **Locale:** `en-CA` default; if a `/us/` variant is ever added, use `hreflang`
  `en-CA`/`en-US` + `x-default`.

---

## 6. Schema implementation (per page type)

Extend `components/SchemaJsonLd.tsx`. Emit as server-rendered JSON-LD.

| Page type        | Schema graph                                                                 |
| ---------------- | ---------------------------------------------------------------------------- |
| Global (layout)  | `Organization` (+ `logo`, `sameAs`, `knowsAbout`, `areaServed` CA/US), `WebSite` (+ `SearchAction`) |
| Home             | Organization + WebSite + `Service` list                                      |
| Service          | `Service` (+ `provider`, `serviceType`, `areaServed`) + `FAQPage` + `BreadcrumbList` |
| Service × loc    | `Service` with `areaServed` = `AdministrativeArea` (Province/State) + FAQ + Breadcrumb |
| Industry         | `Service`/`WebPage` + `FAQPage` + Breadcrumb                                  |
| Software         | `WebPage` + optional `SoftwareApplication` reference (compatibility only) + FAQ |
| Utility company  | `WebPage` + Breadcrumb + **non-affiliation note in visible copy** (no fake Review) |
| Glossary term    | `DefinedTerm` (+ `inDefinedTermSet`)                                          |
| Guide/Blog       | `TechArticle` / `Article` (+ `author` `Person` w/ credentials, `datePublished`) |
| Case study       | `Article` + `CreativeWork`; only real, anonymised data                        |
| Calculator       | `WebApplication` + `HowTo` if step-based                                      |
| Careers          | `JobPosting` (already implemented)                                            |
| FAQ blocks       | `FAQPage` — only for genuinely on-page Q&A                                    |
| Speakable        | `speakable` on concise answer blocks (guides/FAQ) for voice/AI                |

**Do NOT emit:** `LocalBusiness` (no physical locations), `Review`/`AggregateRating`
you can't substantiate, or `Product` for services. Author schema requires real named
authors with real credentials (EEAT), so create author entities before using it.

---

## 7. Keyword clusters (mapped to URLs)

Each cluster = 1 pillar/money page + supporting glossary/blog. Primary keyword →
page; secondary/long-tail → sections + FAQ + supporting posts.

- **Outsourcing cluster** → `/services` + `/industries` + guides.
  `utility engineering outsourcing`, `engineering outsourcing Canada/USA`,
  `remote utility designers`, `contract utility designers`, `engineering staffing
  alternative`, `engineering back office services`. (Value-framed, never "cheap.")
- **Distribution design cluster** → service pillars.
  `distribution design services`, `overhead distribution design`, `underground
  utility design`, `pole line engineering`, `make ready engineering`, `joint use
  design`, `hydro distribution design`.
- **Analysis cluster** → SPIDAcalc/pole loading pages.
  `SpidaCalc services`, `pole loading analysis`, `NESC pole capacity analysis`.
- **CAD/drafting cluster** → drafting service pages.
  `AutoCAD drafting company`, `utility CAD services`, `engineering drafting
  services`, `as-built drafting`, `PDF to CAD`, `CAD conversion`.
- **GIS cluster** → GIS/landbase pages.
  `GIS drafting`, `GIS utility mapping`, `landbase mapping`, `ArcGIS/QGIS services`,
  `GIS to CAD conversion`.
- **Geo modifiers** applied to the above → location pages
  (`… Ontario`, `… Toronto`, `… Texas`, `… Calgary`).
- **Recruiter/talent cluster** → `/careers` + blog (targets recruiters + candidates):
  `hire AutoCAD drafter`, `utility designer job`, `SPIDAcalc engineer`.

---

## 8. Content quality gate (anti-thin/duplicate) — the core safeguard

A build-time function every programmatic page must pass to be **indexable**
(`robots: index`). Failing pages render with `noindex` until enriched.

```ts
export function passesGate(page: RenderedPage): boolean {
  return (
    page.uniqueWordCount >= page.type.wordFloor &&      // e.g. service 600, loc 450, glossary 150
    page.uniqueFaqCount   >= minFaqs(page.type) &&      // service 4, loc 3
    page.uniqueSentences  >= 0.6 * page.totalSentences && // ≥60% non-boilerplate
    page.hasEntitySpecificField &&                      // Location.marketNote, Company.supportAngle, etc.
    page.internalInlinks  >= 3
  );
}
```

Additional safeguards:
- **Uniqueness ledger:** hash each page's unique paragraphs; block if >70% overlap
  with an existing page.
- **Location pages** must carry the geo-specific `utilityContext`, `standardBody`,
  and `marketNote` — that's the non-templated 40% that makes 700 region pages
  legitimate instead of doorway spam.
- **Company pages** require `status: "published"` + `reviewedBy` (human) to index.
- **Progressive indexing:** ship `noindex` first, submit to Search Console in
  batches, promote to `index` after crawl + no-quality-flag confirmation.

---

## 9. Location pages (provinces / states / cities)

**Canada (13):** ON, QC, BC, AB, MB, SK, NS, NB, NL, PE, NT, YT, NU.
**Canadian metros (Phase-2 cities):** Toronto, Ottawa, Mississauga, Hamilton,
London, Vancouver, Surrey, Victoria, Calgary, Edmonton, Winnipeg, Saskatoon,
Regina, Halifax, Quebec City, Montreal, Gatineau, Kitchener, Windsor, Barrie…
**US (50 states)** + **US metros:** Houston, Dallas, Austin, San Antonio, Phoenix,
Los Angeles, San Diego, Sacramento, Denver, Chicago, Minneapolis, Atlanta, Tampa,
Orlando, Miami, New York, Buffalo, Boston, Charlotte, Raleigh, Columbus, Detroit,
Seattle, Portland, Nashville, Kansas City, St. Louis, Salt Lake City…

**Template (`/locations/[country]/[region]/…`):**
H1 "Utility Distribution Design Services in {Region}" → intro tying to
`utilityContext` + `standardBody` → services offered there (linked) → the region's
utilities (linked) → applicable standards (EEAT) → how remote delivery works for
that timezone → FAQ (3+ region-specific) → CTA. `areaServed` schema = the province/
state. **No LocalBusiness, no fake address.**

---

## 10. Industry pages

Electric utilities, telecom, renewables, municipal utilities, power distribution,
construction, fiber network, transmission, consulting firms, government utilities.
Template: buyer roles + pain points → matched services (linked) → relevant standards
→ 1–2 case studies → FAQ → CTA. Each industry maps to distinct `serviceSlugs` so
content genuinely differs.

---

## 11. Utility company pages (vetted, hand-finished)

Priority CA list (crown/LDC/IOU): Hydro One, Toronto Hydro, Hydro Ottawa, Alectra,
BC Hydro, FortisBC, EPCOR, ENMAX, SaskPower, Manitoba Hydro, Nova Scotia Power,
NB Power, Newfoundland Power. Priority US: Duke Energy, Dominion, PG&E, SCE,
National Grid, CenterPoint, Con Edison, Xcel, Entergy, Southern Company, AEP,
Exelon, NextEra/FPL.

**Framing (mandatory):** "Distribution design & drafting support for utilities and
their EPC partners operating in {region} — including networks like {Company}." Each
page: the utility's standard context, the services relevant to their asset base,
how you slot into their (or their consultant's) workflow, non-affiliation
disclaimer, CTA. **Human-reviewed before indexing.** Do not imply partnership.

---

## 12. Software pages

AutoCAD, AutoCAD Electrical, SPIDAcalc, ArcGIS, QGIS, MicroStation, PoleForeman,
OSPInsight, Katapult, Bentley, Bluebeam, FME, Google Earth Pro. Template: what the
tool is → what SPANEX produces in it (`whatWeDo`, `outputs`) → services that use it
(linked) → sample deliverables → FAQ ("Can you work in our {tool} environment?").
Trademark-safe logo usage per `public/logos/README.md`.

---

## 13. Blog strategy (framework to 500+)

Categories (each a keyword theme), with a repeatable title formula per category.
Prioritize **informational + low-competition + buyer/recruiter intent**.

- **Cost & outsourcing (buyer/manager):** in-house vs outsourced [service]; TCO of
  offshore drafting; when to outsource [X]; building an offshore design pod. (~60)
- **How-to / technical (authority + AI answers):** how to run [NESC/CSA] pole loading;
  make-ready workflow; GIS-to-CAD without losing attributes; as-built QA checklist;
  joint-use clearance guide. (~120)
- **Standards & compliance (EEAT):** CSA C22.3 explained; NESC districts; Ontario
  Reg 22/04; state-by-state utility standards. (~60)
- **Software workflow:** SPIDAcalc setup best practices; AutoCAD utility layer
  standards; QGIS vs ArcGIS for utilities; Katapult vs field collection. (~70)
- **Comparisons & "vs" (AI/Perplexity magnets):** [Tool] vs [Tool]; in-house vs
  contract designers; [Service] approaches compared. (~50)
- **Location/market:** utility design landscape in [Province/State]; who serves
  [region]; permitting timelines by jurisdiction. (~80)
- **Recruiter/talent:** hiring a SPIDAcalc engineer; AutoCAD drafter skills test;
  offshore vs local design staffing. (~40)
- **Glossary-adjacent explainers** feeding entity SEO. (~40)

That's 500+ by formula. Ship 2–4/week, each with a comparison table + a
2–3 sentence extractable answer up top (for AI Overviews) + internal links to money
pages. Store as structured records like `lib/blog-data.ts` (extend to MDX when volume
demands).

**~40 concrete Phase-1 titles** (write these first): *The true cost of in-house vs
outsourced AutoCAD drafting (2026)*; *NESC Heavy/Medium/Light districts, explained*;
*Make-ready engineering: a step-by-step guide*; *GIS to CAD: preserving attributes*;
*SPIDAcalc pole loading, from client file to sealed report*; *Joint-use attachments &
clearances*; *As-built drafting QA checklist*; *CSA C22.3 for distribution design*;
*Ontario Reg 22/04 for out-of-province teams*; *PDF-to-CAD conversion done right*;
*How overnight (IST↔ET) production actually works*; *Landbase from parcel data*;
*Choosing between ArcGIS and QGIS for utility mapping*; *Pole replacement design
basics*; *Underground vs overhead: drafting differences*; *Building an offshore
design pod without quality drift*; *What a distribution design package should
contain*; *Hiring a utility CAD drafter: a skills rubric*; …(extend per formula).

---

## 14. AI search optimization (AIO / ChatGPT / Claude / Gemini / Perplexity / Copilot)

- **Answer-first blocks:** open every page/section with a 40–60 word, self-contained
  answer LLMs can lift. Mark with `speakable`.
- **Entity-first writing:** name the entity in the first sentence ("SPIDAcalc pole
  loading analysis verifies…") — helps retrieval.
- **Structured data everywhere** (FAQ, DefinedTerm, Service, Article) — LLM crawlers
  parse JSON-LD.
- **Comparison tables + statistics + numbered steps** — the formats LLMs quote.
- **`/llms.txt`** at root summarizing the site + key URLs for AI crawlers; keep
  `robots.txt` permissive to `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`
  (your call on training opt-in) but allow answer crawlers.
- **Glossary/entity graph** so assistants resolve "who does SPIDAcalc outsourcing" to
  you.
- **Freshness + author credibility** signals for E-E-A-T weighting in AIO.

---

## 15. E-E-A-T strategy

- **Author entities:** real named designers/leads with credentials, years, tools —
  `/about/team/[person]` with `Person` schema; bylines on guides.
- **Methodology pages:** `/how-we-work` (exists) + `/quality` (exists, the QA
  checklist) — link from every service page as the "how" proof.
- **Standards pages:** dedicated CSA / NESC / Reg 22/04 / safety references
  (informational, cited) demonstrating domain expertise.
- **Proof:** anonymised case studies with real metrics (turnaround, volume, defect
  rate), sample redacted drawings, a downloadable capability statement PDF.
- **Trust signals sitewide:** entity line, standards worked to, review process,
  data-security note, response-time commitment.
- **Off-site:** company profiles (LinkedIn, Clutch, GMB *only if* a real registered
  address exists), guest technical articles, directory listings for utility
  engineering vendors.

---

## 16. Technical SEO checklist

- [ ] Dynamic `sitemap.ts` includes all page types (services, locations, industries,
      software, utilities, glossary, guides, blog, careers, case studies) — split into
      multiple sitemaps + a sitemap index when >50k URLs / >50MB.
- [ ] `robots.ts` allows crawl, references sitemap, allows AI answer bots.
- [ ] Canonical on every page (self); no cross-canonical band-aids.
- [ ] Breadcrumbs + JSON-LD on every non-home page.
- [ ] Core Web Vitals: SSG/ISR, no CLS (fonts via `next/font`, sized media), LCP
      element prioritized, JS trimmed (server components), images `next/image` +
      AVIF/WebP + lazy.
- [ ] Image SEO: descriptive filenames + alt; diagrams get captions + `ImageObject`.
- [ ] Video SEO (if added): `VideoObject` + transcript.
- [ ] Internal-link CI check (orphans, ≥3 inlinks).
- [ ] `hreflang` only if US locale variant added.
- [ ] 404/410 for retired combos; `dynamicParams=false`.
- [ ] Search Console + Bing Webmaster + sitemap submission + batch URL inspection.
- [ ] Log-file / crawl-budget monitoring once >5k pages.
- [ ] Quality Gate (`passesGate`) enforced in build; `noindex` fallback.
- [ ] Structured-data validation in CI (Rich Results test / schema linter).

---

## 17. Conversion layer (every page)

Reuse existing `LeadForm`. Each template ends with: contextual CTA (Request a quote /
Book a call), a "Free 10-structure pilot" or "Free consultation" offer, capability
PDF download (email-gated optional), 1 relevant case study, trust strip. Lead form
carries a hidden `source` (already built) so you attribute leads to the exact
programmatic URL. Add Calendly/Cal.com "book a meeting" as a second CTA.

---

## 18. Three-year roadmap → 1M+ annual impressions + qualified leads

**Phase 0 (wks 1–3) — Foundation.** GSC/Bing + analytics; Organization/WebSite
schema; extend `lib/pseo-data.ts` schema; build the Quality Gate + orphan CI; ship
15 service pillars + 14 software + 10 industry pages (all hand-quality). Capability
PDF. Target: indexation + first impressions.

**Phase 1 (mo 1–3) — Core money pages + region tier.** 40 service×region pages
(13 CA + 10 US, gated), 12 hand-made utility company pages, glossary (40 terms),
6 pillar guides, 15 blog posts. Internal-link engine live. Target: 50k–100k
impressions/mo, first inbound leads.

**Phase 2 (mo 4–9) — Scale geo + content.** Promote region pages that rank → add
city tier (gated, ~300–500 cities × top services), expand blog to 3/wk, 6+ case
studies, calculators (pole loading estimator), author/team pages for EEAT. Target:
250k–400k impressions/mo.

**Phase 3 (mo 10–18) — Authority + AI.** Full glossary/entity graph, `/llms.txt`,
comparison hubs, more utility-company pages (vetted), guest articles/backlinks,
digital PR on outsourcing/standards. Target: 600k–900k impressions/mo, steady
qualified-lead flow.

**Phase 4 (mo 19–36) — Dominance + moats.** CMS migration for non-technical
publishing, ISR at scale, programmatic freshness (auto-update standards/market
data), review/refresh low-performers (prune or improve — content pruning protects
site quality), international expansion (US locale/hreflang). Target: **1M+
impressions/mo run-rate**, predictable pipeline.

**KPIs tracked monthly:** indexed pages (and % passing gate), impressions, clicks,
avg position by cluster, non-brand impressions, leads by `source` URL, cost/lead,
CWV pass rate, % pages with ≥3 inlinks, thin-page count (must trend to 0).

---

## 19. Build order (maps to this repo)

1. `lib/seo/schema.ts` (entities above) + seed data files per entity type.
2. `components/SchemaJsonLd.tsx` — add `serviceSchema`, `definedTermSchema`,
   `webSiteSchema`, `speakable` helpers.
3. `lib/seo/gate.ts` (Quality Gate) + CI check.
4. Routes: `/services/[service]`, `/services/[service]/[location]`,
   `/industries/[industry]`, `/software/[tool]`,
   `/locations/[country]/[region]/[[...city]]`, `/utilities/[company]`,
   `/glossary/[term]`, `/guides/[slug]`, `/case-studies/[slug]`.
5. `lib/seo/links.ts` (internal-linking rules) used by all templates.
6. Extend `app/sitemap.ts` + add sitemap-index when needed; update `robots.ts`.
7. Author/team + capability PDF + calculators.

I can implement any phase directly in the codebase — say the word and I'll start
with Phase 0 (schema, gate, service pillars, software + industry pages).
```
