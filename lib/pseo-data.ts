/**
 * Programmatic SEO data matrix.
 *
 * A page exists for every (service × intent) pair — 5 × 4 = 20 substantive
 * landing pages, each composed from the two records below plus a shared
 * comparison and compliance model. Copy is value-framed: cost-effective,
 * scalable, faster turnaround — never "cheap", and never invented rates.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://spanexengineering.com";

/* ------------------------------------------------------------------ */
/* Software / tooling                                                  */
/* ------------------------------------------------------------------ */

export interface Tool {
  key: string;
  name: string;
  note: string;
}

export const tools: Tool[] = [
  { key: "autocad", name: "AutoCAD", note: "Native drafting & construction sheets" },
  { key: "spidacalc", name: "SPIDAcalc", note: "Pole loading & structural analysis" },
  { key: "arcgis", name: "ArcGIS", note: "Enterprise GIS & asset data" },
  { key: "qgis", name: "QGIS", note: "Open-source GIS & parcel data" },
  { key: "microstation", name: "MicroStation", note: "DGN drafting for select utilities" },
  { key: "landbase", name: "Landbase", note: "Survey-true base & ROW alignment" },
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export interface PseoService {
  key: string;
  name: string;
  /** used in the H1 as the work noun, lower case */
  noun: string;
  summary: string;
  scope: string[];
  toolKeys: string[];
  compliance: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
  keywords: string[];
}

export const services: PseoService[] = [
  {
    key: "autocad-drafting",
    name: "AutoCAD Drafting",
    noun: "AutoCAD drafting",
    summary:
      "Construction-ready distribution drawings produced natively in AutoCAD, to your CAD standard — plan-and-profile, redlines, revisions and full sheet sets.",
    scope: [
      "Plan-and-profile and construction sheets",
      "Redline updates and drawing revisions",
      "Layering, blocks and title blocks to your standard",
      "Overhead and underground distribution",
    ],
    toolKeys: ["autocad", "microstation", "landbase"],
    compliance: [
      { label: "CAD standard", value: "Your template — layers, blocks, xrefs" },
      { label: "Sheet set", value: "Index-complete, revision-controlled" },
      { label: "Clearances", value: "Checked to CSA / NESC as applicable" },
    ],
    faqs: [
      {
        q: "Do you draft to our CAD standard or your own?",
        a: "Yours. We load your layering, blocks, xrefs and title block before drafting, so packages pass your CAD standards check on the first submission.",
      },
      {
        q: "Can you handle redlines and revisions on existing sets?",
        a: "Yes. We incorporate redlines and as-built notes into existing drawings and return a clean, revision-controlled set with a change list.",
      },
      {
        q: "What turnaround can we expect?",
        a: "Small packages typically return within 48 hours; larger runs are scheduled and confirmed before work begins.",
      },
    ],
    keywords: [
      "cost-effective AutoCAD drafting",
      "utility AutoCAD drafting services",
      "distribution CAD drafting",
      "plan and profile drafting",
    ],
  },
  {
    key: "spidacalc-analysis",
    name: "SPIDAcalc Analysis",
    noun: "SPIDAcalc pole loading analysis",
    summary:
      "Pole loading and structural verification in SPIDAcalc — attachment and wind cases modelled against safety factors, with an engineering report per structure.",
    scope: [
      "Pole loading and structural verification",
      "Attachment and wind loading cases",
      "NESC / CSA safety-factor assessment",
      "Engineering reports per structure",
    ],
    toolKeys: ["spidacalc", "autocad", "landbase"],
    compliance: [
      { label: "Loading district", value: "NESC Heavy / Medium / Light" },
      { label: "Safety factors", value: "Applied per governing code" },
      { label: "Output", value: "Capacity report + make-ready per pole" },
    ],
    faqs: [
      {
        q: "Which loading standards do you model to?",
        a: "We model to the governing standard for the asset — NESC Heavy, Medium or Light districts, or CSA load cases — using your SPIDAcalc client file and pass/fail thresholds.",
      },
      {
        q: "Do you return make-ready when a pole fails?",
        a: "Yes. Every failing structure carries a specific, buildable make-ready — transfer, re-tension, guy or anchor change, or replacement — with framing called out.",
      },
      {
        q: "Can you scale for a large pole run?",
        a: "Yes. Offshore capacity lets us scale a run up or down by the project without you hiring, while a lead reviews every result.",
      },
    ],
    keywords: [
      "outsource SPIDAcalc pole loading calculations",
      "SPIDAcalc analysis service",
      "NESC structural pole capacity analysis",
      "pole loading calculation service",
    ],
  },
  {
    key: "gis-mapping",
    name: "GIS Mapping",
    noun: "GIS mapping and conversion",
    summary:
      "GIS-to-CAD conversion and utility asset mapping — ArcGIS and QGIS data reconciled into coordinate-true DWG for distribution design.",
    scope: [
      "GIS to DWG / DGN conversion",
      "Utility asset and network capture",
      "Coordinate-system alignment",
      "Attribute and layer mapping",
    ],
    toolKeys: ["arcgis", "qgis", "autocad", "landbase"],
    compliance: [
      { label: "Coordinate system", value: "Aligned to your project datum" },
      { label: "Attributes", value: "Mapped GIS → CAD layer schema" },
      { label: "QA", value: "Spatial accuracy checked against source" },
    ],
    faqs: [
      {
        q: "Which GIS platforms do you work from?",
        a: "ArcGIS and QGIS. We reconcile parcel, asset and network layers into a coordinate-true CAD base aligned to your project datum.",
      },
      {
        q: "Do you preserve attributes in the conversion?",
        a: "Yes. GIS attributes are mapped to your CAD layer schema so data survives the conversion rather than being flattened to geometry.",
      },
    ],
    keywords: [
      "GIS to DWG conversion services",
      "gis to autocad distribution conversion",
      "utility GIS mapping",
      "geospatial CAD conversion",
    ],
  },
  {
    key: "landbase-prep",
    name: "Landbase Preparation",
    noun: "landbase preparation and ROW alignment",
    summary:
      "Survey-true landbase for distribution corridors — parcel data, road alignment and existing assets assembled into one accurate base every sheet builds on.",
    scope: [
      "Landbase drafting and maintenance",
      "Property boundaries and ROW alignment",
      "Road and corridor alignment",
      "Existing utility asset capture",
    ],
    toolKeys: ["landbase", "arcgis", "autocad"],
    compliance: [
      { label: "Source data", value: "Parcel, survey and GIS reconciled" },
      { label: "ROW", value: "Right-of-way and easement alignment" },
      { label: "Datum", value: "Coordinate-true to your project" },
    ],
    faqs: [
      {
        q: "What source data do you need for landbase?",
        a: "Whatever you have — parcel fabric, survey, GIS exports, or existing drawings. We reconcile them into one coordinate-true base and log any gaps as assumptions.",
      },
      {
        q: "Do you handle right-of-way and easement alignment?",
        a: "Yes. ROW, easements and road alignment are drafted into the landbase so corridor design starts from an accurate footprint.",
      },
    ],
    keywords: [
      "utility landbase mapping",
      "landbase mapping for utility corridors",
      "ROW alignment drafting",
      "distribution corridor landbase",
    ],
  },
  {
    key: "joint-use-pole-loading",
    name: "Joint-Use Pole Loading",
    noun: "joint-use pole attachment analysis",
    summary:
      "Third-party joint-use attachment design and pole loading — fibre and telecom attachments modelled with clearances and make-ready to the distributor standard.",
    scope: [
      "Fibre and telecom attachment layouts",
      "Joint-use pole loading and clearances",
      "Structural remediation and make-ready",
      "NESC attachment compliance",
    ],
    toolKeys: ["spidacalc", "autocad", "landbase"],
    compliance: [
      { label: "Attachment", value: "NESC joint-use clearance rules" },
      { label: "Loading", value: "Combined power + communication cases" },
      { label: "Output", value: "Attachment drawings + make-ready" },
    ],
    faqs: [
      {
        q: "Do you handle third-party attacher requests?",
        a: "Yes. We prepare joint-use attachment drafting and pole loading for telecom and fibre attachers, to the governing distributor's attachment standard.",
      },
      {
        q: "Do you resolve clearances and make-ready?",
        a: "Yes. We resolve mid-span sag, climbing space and clearances, and return the make-ready needed to clear each structure.",
      },
    ],
    keywords: [
      "third-party joint-use attachment drafting",
      "nesc joint use attachment calculations",
      "telecom pole attachment analysis",
      "fibre joint-use design",
    ],
  },
  {
    key: "telecom-attachment-design",
    name: "Telecom & Fibre Attachment Design",
    noun: "telecom and fibre pole attachment design",
    summary:
      "Pole attachment and fibre route design for telecom and joint-use networks — attachment layouts, route documentation and make-ready coordination produced to each pole owner's attachment standard.",
    scope: [
      "Fibre route and pole attachment design",
      "Attachment layouts across shared structures",
      "Joint-use coordination and clearance checks",
      "Communication CAD drafting and OSP records",
    ],
    toolKeys: ["autocad", "arcgis", "landbase"],
    compliance: [
      { label: "Attachment standard", value: "Each pole owner's attachment standard" },
      { label: "Clearances", value: "NESC / CSA communication-space clearances" },
      { label: "Coordination", value: "Aligned with joint-use loading & make-ready" },
    ],
    faqs: [
      {
        q: "Do you design to each pole owner's attachment standard?",
        a: "Yes. Every attachment layout follows the governing distributor's attachment standard and the clearance code for the jurisdiction, so submissions clear review on the first pass.",
      },
      {
        q: "Can you coordinate attachment design with pole loading?",
        a: "Yes. Attachment design is coordinated with joint-use loading and make-ready, so the route we draft is one the structures actually pass.",
      },
      {
        q: "Do you support outside-plant (OSP) records as well as design?",
        a: "Yes. We produce route and attachment design and maintain outside-plant documentation, so the design and the records stay in step.",
      },
    ],
    keywords: [
      "telecom pole attachment design services",
      "fibre attachment design",
      "outside plant OSP design",
      "communication pole attachment drafting",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Intents (market / audience)                                         */
/* ------------------------------------------------------------------ */

export interface PseoIntent {
  key: string;
  /** short label for breadcrumbs / chips */
  label: string;
  /** full audience-facing name */
  name: string;
  audience: string;
  angle: string;
  /** a natural phrase folded into the H1 */
  headlineTail: string;
  keywords: string[];
}

export const intents: PseoIntent[] = [
  {
    key: "outsourcing-india",
    label: "Offshore support",
    name: "Cost-Effective CAD & SPIDAcalc Support from India",
    audience:
      "engineering managers scaling drafting capacity without adding headcount",
    angle:
      "A cost-effective, scalable offshore team that works to your standards and delivers overnight, so your licensed staff review rather than draft.",
    headlineTail: "delivered as scalable offshore support",
    keywords: [
      "cost-effective AutoCAD drafting in India",
      "utility drafting outsourcing",
      "offshore CAD engineering support",
    ],
  },
  {
    key: "utility-distributors",
    label: "Electric utilities",
    name: "Distribution Design for Electric Utilities",
    audience: "utility distribution design managers and practice leads",
    angle:
      "Production drafting and analysis that plugs into your distribution design pipeline and holds to your construction standard.",
    headlineTail: "for electric distribution utilities",
    keywords: [
      "electric utility distribution design",
      "distribution drafting services",
      "utility design production support",
    ],
  },
  {
    key: "telecom-attachers",
    label: "Telecom & fibre",
    name: "Telecom & Fibre Joint-Use Pole Attachment Analysis",
    audience: "telecom and fibre pole attachers and their engineering partners",
    angle:
      "Attachment layouts, pole loading and make-ready for telecom and fibre expansion on shared structures.",
    headlineTail: "for telecom & fibre attachers",
    keywords: [
      "telecom pole attachment analysis",
      "fibre joint-use drafting",
      "communication attachment design",
    ],
  },
  {
    key: "as-built-conversions",
    label: "As-built conversions",
    name: "Legacy GIS & As-Built CAD Conversions",
    audience: "asset owners modernising legacy records into CAD",
    angle:
      "Legacy GIS and as-built records converted into coordinate-true, standards-compliant CAD your team can build on.",
    headlineTail: "from legacy GIS & as-built records",
    keywords: [
      "as-built CAD conversion",
      "legacy GIS to CAD",
      "record drawing conversion",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Per-service enrichment for the outsourcing-india intent             */
/* ------------------------------------------------------------------ */

/**
 * Extra, service-specific content shown only on the outsourcing-india spoke
 * pages. Keeps the generic (service × intent) matrix intact while giving the
 * six offshore pages genuine, keyword-targeted depth. Value-framed only — no
 * rates, never "cheap".
 */
export interface SpokeEnrichment {
  /** short label folded into the section eyebrow, e.g. "AutoCAD drafting" */
  focus: string;
  /** narrative paragraphs shown above the comparison table */
  narrative: string[];
  /** offshore-specific FAQs appended to the service FAQs */
  faqs: { q: string; a: string }[];
  /** extra long-tail keywords merged into page metadata */
  keywords: string[];
}

export const outsourcingEnrichment: Record<string, SpokeEnrichment> = {
  "autocad-drafting": {
    focus: "AutoCAD drafting",
    narrative: [
      "AutoCAD drafting is the highest-volume, most repeatable part of a distribution package, and the first work most teams outsource to India. We produce plan-and-profile sheets, construction drawings, redline updates and full revision-controlled sheet sets in native DWG, using your layers, blocks, xrefs and title block. Nothing is redrawn in a foreign template and converted back.",
      "The overnight model fits drafting well. You issue scope or mark up redlines at the end of your day; the sheets are produced in Bengaluru and returned the next morning for review. Small packages typically return within 48 hours, and a large sheet run is scheduled and confirmed before work begins, so your local staff check and seal rather than draft.",
    ],
    faqs: [
      {
        q: "Can we outsource just AutoCAD drafting and keep design in-house?",
        a: "Yes. Most clients keep design authority and the professional seal in-house and outsource only the drafting hours — plan-and-profile, construction sheets, redlines and revisions — produced to your CAD standard.",
      },
      {
        q: "Do you draft in the current AutoCAD release?",
        a: "Yes. We draft in current AutoCAD, and in MicroStation where a utility uses DGN, and deliver in the DWG or DGN version your workflow expects, with clean layers and resolved xref paths.",
      },
      {
        q: "How do you keep a large sheet set consistent across drafters?",
        a: "One CAD standard, shared blocks and a single title-block source, plus a lead check on the full set before release — so numbering, layers and revisions stay consistent regardless of how many drafters are on the run.",
      },
    ],
    keywords: [
      "outsource autocad drafting to india",
      "autocad drafting services india",
      "utility cad drafting outsourcing",
      "plan and profile drafting outsourcing",
    ],
  },
  "gis-mapping": {
    focus: "GIS-to-CAD conversion",
    narrative: [
      "GIS-to-CAD conversion is the second workflow teams most often move offshore, because it is high-volume and rules-based. We reconcile ArcGIS and QGIS parcel, asset and network layers into coordinate-true DWG aligned to your project datum, with GIS attributes mapped to your CAD layer schema rather than flattened to geometry.",
      "Because the conversion follows a defined attribute-to-layer mapping, it scales cleanly across a large data set without losing fidelity. We check spatial accuracy against the source before delivery, so the base your designers build on is true to the record, not a redrawn approximation.",
    ],
    faqs: [
      {
        q: "Which GIS formats can you convert to CAD?",
        a: "ArcGIS geodatabases and shapefiles, and QGIS layers. We convert to DWG or DGN aligned to your datum, preserving attributes through a mapping to your CAD layer schema.",
      },
      {
        q: "Do attributes survive the GIS-to-CAD conversion?",
        a: "Yes. We map GIS attributes to your CAD layer and block schema so asset data carries into the drawing instead of being lost when geometry is exported.",
      },
      {
        q: "Can you convert legacy as-built records as well as live GIS?",
        a: "Yes. We convert legacy GIS and scanned as-built records into coordinate-true, standards-compliant CAD your team can design from.",
      },
    ],
    keywords: [
      "gis to cad conversion outsourcing",
      "outsource gis mapping india",
      "gis to autocad conversion services",
      "utility gis data conversion outsourcing",
    ],
  },
  "spidacalc-analysis": {
    focus: "SPIDAcalc pole loading",
    narrative: [
      "SPIDAcalc pole loading is analysis work that scales badly with in-house headcount — the queue spikes with a project and empties between them. Outsourcing lets you add loading capacity by the run: attachment and wind cases modelled to NESC Heavy, Medium or Light districts or CSA load cases, using your SPIDAcalc client file and pass/fail thresholds.",
      "Every failing structure returns with a specific, buildable make-ready — transfer, re-tension, guy or anchor change, or replacement, with framing called out. A lead reviews each result before release, and your licensed professional reviews and seals the analysis.",
    ],
    faqs: [
      {
        q: "Can you use our SPIDAcalc client file and standards?",
        a: "Yes. We model against your client file, loading district and pass/fail thresholds, so results match how your own engineers would run the analysis.",
      },
      {
        q: "Do you return make-ready for failing poles?",
        a: "Yes. Every failing structure carries a specific make-ready — transfer, re-tension, guying, anchor change or replacement — with framing called out, not just a pass/fail flag.",
      },
      {
        q: "How quickly can you turn a large pole run?",
        a: "Offshore capacity lets us scale a run by the project. Turnaround is scheduled and confirmed up front; smaller batches typically return within 48 hours.",
      },
    ],
    keywords: [
      "outsource spidacalc pole loading",
      "pole loading analysis outsourcing india",
      "nesc pole loading calculation service",
      "structural pole analysis outsourcing",
    ],
  },
  "landbase-prep": {
    focus: "landbase preparation",
    narrative: [
      "Landbase preparation is foundational and time-consuming — every sheet in a corridor builds on it, but it rarely needs your senior designers. We assemble parcel fabric, survey, GIS exports and existing drawings into one coordinate-true base, with right-of-way, easements and road alignment drafted in.",
      "Outsourcing the landbase frees your team to design on an accurate footprint from day one. We log any source-data gaps as documented assumptions rather than guessing, so what you receive is traceable back to the record.",
    ],
    faqs: [
      {
        q: "What source data do you need to build a landbase offshore?",
        a: "Whatever you have — parcel fabric, survey, GIS exports or existing drawings. We reconcile them into one coordinate-true base and log gaps as documented assumptions.",
      },
      {
        q: "Do you handle ROW and easement alignment?",
        a: "Yes. Right-of-way, easements and road alignment are drafted into the landbase so corridor design starts from an accurate footprint.",
      },
    ],
    keywords: [
      "landbase preparation outsourcing",
      "utility landbase mapping india",
      "row alignment drafting outsourcing",
      "distribution corridor landbase services",
    ],
  },
  "joint-use-pole-loading": {
    focus: "joint-use pole loading",
    narrative: [
      "Joint-use pole loading is a specialised, high-volume workflow that suits offshore production: third-party attachment requests modelled for combined power and communication cases, to the governing distributor's attachment standard. We resolve mid-span sag, climbing space and clearances, and return the make-ready that clears each structure.",
      "Whether you are the pole owner processing attacher requests or an attacher preparing submissions, outsourcing the loading and drafting clears a backlog by the project without adding permanent headcount, with a lead checking every structure before release.",
    ],
    faqs: [
      {
        q: "Do you process third-party attacher requests?",
        a: "Yes. We prepare joint-use attachment drafting and pole loading for telecom and fibre attachers, to the governing distributor's attachment standard, with clearances and make-ready resolved.",
      },
      {
        q: "Do you model combined power and communication loading?",
        a: "Yes. Attachment and wind cases are modelled for the combined power-plus-communication condition against the governing safety factors, not the power span alone.",
      },
    ],
    keywords: [
      "joint use pole loading outsourcing",
      "outsource joint use attachment analysis",
      "nesc joint use calculation service",
      "third party attachment drafting india",
    ],
  },
  "telecom-attachment-design": {
    focus: "telecom & fibre attachment design",
    narrative: [
      "Telecom and fibre attachment design is production-heavy and standards-driven — a natural fit for an offshore team. We produce attachment layouts across shared structures, fibre route design and outside-plant (OSP) records, to each pole owner's attachment standard and the clearance code for the jurisdiction.",
      "Attachment design is coordinated with joint-use loading and make-ready, so the route we draft is one the structures actually pass. Outsourcing the design and records keeps your expansion moving without hiring for a temporary surge in build volume.",
    ],
    faqs: [
      {
        q: "Do you design to each pole owner's attachment standard?",
        a: "Yes. Every attachment layout follows the governing distributor's attachment standard and the clearance code for the jurisdiction, so submissions clear review on the first pass.",
      },
      {
        q: "Can you maintain OSP records alongside design?",
        a: "Yes. We produce route and attachment design and maintain outside-plant documentation, so the design and the records stay in step.",
      },
    ],
    keywords: [
      "telecom attachment design outsourcing",
      "fibre attachment design india",
      "osp design outsourcing",
      "communication pole attachment drafting",
    ],
  },
};

export function getEnrichment(
  serviceKey: string,
  intentKey: string,
): SpokeEnrichment | null {
  if (intentKey !== "outsourcing-india") return null;
  return outsourcingEnrichment[serviceKey] ?? null;
}

/* ------------------------------------------------------------------ */
/* Composition helpers                                                 */
/* ------------------------------------------------------------------ */

export interface PseoPage {
  service: PseoService;
  intent: PseoIntent;
  slug: string;
  h1: string;
  intro: string;
  keywords: string[];
  tools: Tool[];
  faqs: { q: string; a: string }[];
  enrichment: SpokeEnrichment | null;
}

export function getService(key: string): PseoService | undefined {
  return services.find((s) => s.key === key);
}

export function getIntent(key: string): PseoIntent | undefined {
  return intents.find((i) => i.key === key);
}

/** Every valid (service, intent) slug pair — for generateStaticParams + sitemap. */
export function allPseoParams(): { service: string; intent: string }[] {
  return services.flatMap((s) =>
    intents.map((i) => ({ service: s.key, intent: i.key })),
  );
}

/** Cost/turnaround/scalability comparison rows, value-framed (no rates). */
export const comparisonRows: {
  metric: string;
  inHouse: string;
  spanex: string;
}[] = [
  {
    metric: "Cost efficiency",
    inHouse: "Fixed salaried capacity, paid whether the queue is full or not",
    spanex: "Cost-effective per-project support — pay for the work, not idle time",
  },
  {
    metric: "Turnaround",
    inHouse: "Bound by local working hours",
    spanex: "Overnight production against your time zone; review starts your morning",
  },
  {
    metric: "Scalability",
    inHouse: "Hiring and training lead time to add capacity",
    spanex: "Scale a run up or down by the project, no hiring",
  },
  {
    metric: "Standards",
    inHouse: "Your CAD standard and code",
    spanex: "Your CAD standard and code — we adopt yours, not ours",
  },
  {
    metric: "Quality control",
    inHouse: "Reviewer often also the drafter",
    spanex: "Independent lead review on every package before release",
  },
];

export function buildPseoPage(
  serviceKey: string,
  intentKey: string,
): PseoPage | null {
  const service = getService(serviceKey);
  const intent = getIntent(intentKey);
  if (!service || !intent) return null;

  const enrichment = getEnrichment(service.key, intent.key);

  const h1 = `${service.name} ${intent.headlineTail}`;
  const intro = `${service.summary} Built for ${intent.audience}: ${intent.angle}`;

  return {
    service,
    intent,
    slug: `${service.key}/${intent.key}`,
    h1,
    intro,
    keywords: [
      ...service.keywords,
      ...intent.keywords,
      ...(enrichment?.keywords ?? []),
    ],
    tools: tools.map((t) => ({
      ...t,
    })),
    faqs: [
      ...service.faqs,
      {
        q: `Why work with Spanex Engineering for ${service.name.toLowerCase()}?`,
        a: intent.angle,
      },
      ...(enrichment?.faqs ?? []),
    ],
    enrichment,
  };
}
