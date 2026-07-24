import type { ServicePillar } from "./schema";

/**
 * Service pillar catalog. The five slugs that also carry `intents` back the
 * existing programmatic engine at /services/[slug]/[intent]; the rest are
 * pillar-only pages. Each record has unique, non-templated content (Quality Gate).
 */
export const servicePillars: ServicePillar[] = [
  {
    slug: "overhead-distribution-design",
    name: "Overhead Distribution Design",
    category: "design",
    metaTitle: "Overhead Distribution Design Services | SPANEX Engineering",
    metaDescription:
      "Overhead distribution design and drafting — pole framing, guying, conductor and make-ready to your construction standard and the governing code.",
    tagline: "Framing, guying and conductor design",
    problem:
      "Overhead distribution work is high-volume and safety-critical, so it clogs in-house queues yet can't go to just anyone.",
    approach:
      "We produce framing, guying and conductor design to your construction standard, checked against clearances and structural analysis before it reaches your reviewer.",
    scope: [
      "Pole framing and guying design",
      "Conductor and hardware selection to your standard",
      "Clearance checks to the governing code",
      "Make-ready coordination",
      "Construction-ready drawing sets",
    ],
    deliverables: ["Construction drawings", "Framing details", "Make-ready notes", "Assumption log"],
    standards: ["CSA C22.3 No. 1", "NESC", "Distributor construction standards"],
    toolSlugs: ["autocad", "spidacalc"],
    industrySlugs: ["electric-utilities", "power-distribution", "municipal-utilities"],
    relatedServiceSlugs: ["underground-distribution-design", "pole-line-design", "make-ready-design"],
    faqs: [
      { q: "Do you design to our construction standard?", a: "Yes. Your construction standard, CAD template and load cases govern; your licensed professional reviews and seals." },
      { q: "Do you include make-ready?", a: "Yes — buildable make-ready with framing and guying called out for any structure that needs it." },
      { q: "How fast is turnaround?", a: "Small packages typically return within 48 hours; larger runs are scheduled and confirmed up front." },
    ],
    keywords: ["overhead distribution design", "pole framing design", "distribution design services"],
  },
  {
    slug: "underground-distribution-design",
    name: "Underground Distribution Design",
    category: "design",
    metaTitle: "Underground Distribution Design Services | SPANEX Engineering",
    metaDescription:
      "Underground distribution design — duct, vault, cable and transition design to your standard, with construction-ready drawings.",
    tagline: "Duct, vault and cable design",
    problem:
      "Underground work carries its own conventions — duct banks, vaults, transitions — that need consistent, standards-conformant drafting.",
    approach:
      "We design and draft underground distribution to your construction standard, coordinating overhead-to-underground transitions and producing clean construction sets.",
    scope: [
      "Duct bank and conduit design",
      "Vault and handhole layouts",
      "Cable and transition design",
      "Overhead-to-underground transitions",
      "Construction drawing sets",
    ],
    deliverables: ["Construction drawings", "Duct/vault details", "Transition drawings", "Sheet index"],
    standards: ["CSA C22.3 No. 7", "NESC", "Distributor standards"],
    toolSlugs: ["autocad", "arcgis"],
    industrySlugs: ["electric-utilities", "power-distribution", "municipal-utilities"],
    relatedServiceSlugs: ["overhead-distribution-design", "landbase-prep", "gis-mapping"],
    faqs: [
      { q: "Do you handle overhead-to-underground transitions?", a: "Yes — transitions are designed and drafted as part of the package." },
      { q: "Which standard do you follow?", a: "Your construction and CAD standards, with CSA C22.3 No. 7 / NESC as applicable." },
    ],
    keywords: ["underground distribution design", "underground utility design", "duct bank design"],
  },
  {
    slug: "pole-line-design",
    name: "Pole Line Design",
    category: "design",
    metaTitle: "Pole Line Design & Engineering | SPANEX Engineering",
    metaDescription:
      "Pole line design and engineering — new lines, extensions and rebuilds with framing, guying, anchoring and structural verification.",
    tagline: "New lines, extensions and rebuilds",
    problem:
      "Pole line projects combine layout, structural loading and construction detailing — often more than a stretched design team can absorb.",
    approach:
      "We design pole lines end to end: layout, framing, guying, anchoring and structural verification, packaged as construction-ready drawings.",
    scope: [
      "New line and extension design",
      "Line rebuilds and upgrades",
      "Framing, guying and anchor design",
      "Structural verification (SPIDAcalc / PoleForeman)",
      "Construction drawings",
    ],
    deliverables: ["Line drawings", "Structure details", "Loading results", "Make-ready notes"],
    standards: ["CSA C22.3", "NESC", "Distributor standards"],
    toolSlugs: ["autocad", "spidacalc", "poleforeman"],
    industrySlugs: ["electric-utilities", "power-distribution"],
    relatedServiceSlugs: ["overhead-distribution-design", "pole-replacement-design", "make-ready-design"],
    faqs: [
      { q: "Do you verify structures as part of pole line design?", a: "Yes — loading and structural verification are part of the package, with make-ready where needed." },
      { q: "Can you handle rebuilds as well as new lines?", a: "Yes — new lines, extensions, upgrades and full rebuilds." },
    ],
    keywords: ["pole line design", "pole line engineering", "distribution line design"],
  },
  {
    slug: "pole-replacement-design",
    name: "Pole Replacement Design",
    category: "design",
    metaTitle: "Pole Replacement Design Services | SPANEX Engineering",
    metaDescription:
      "Pole replacement design — structural analysis, transfer design and construction drawings for aging or overloaded poles.",
    tagline: "Replacement and transfer design",
    problem:
      "Aging and overloaded poles need replacement designs that account for existing attachments, transfers and clearances.",
    approach:
      "We assess the structure, design the replacement and transfers, and produce the construction drawings and make-ready to build it.",
    scope: [
      "Structural assessment of existing pole",
      "Replacement pole and framing design",
      "Attachment transfer design",
      "Clearance verification",
      "Construction drawings",
    ],
    deliverables: ["Replacement drawings", "Transfer details", "Loading results", "Make-ready"],
    standards: ["CSA C22.3", "NESC", "Distributor standards"],
    toolSlugs: ["spidacalc", "autocad"],
    industrySlugs: ["electric-utilities", "municipal-utilities", "construction"],
    relatedServiceSlugs: ["pole-line-design", "make-ready-design", "joint-use-pole-loading"],
    faqs: [
      { q: "Do you design attachment transfers?", a: "Yes — transfers of existing power and communication attachments are part of the replacement design." },
      { q: "Do you verify the replacement structure?", a: "Yes, with loading analysis and clearance checks." },
    ],
    keywords: ["pole replacement design", "pole transfer design", "distribution pole design"],
  },
  {
    slug: "make-ready-design",
    name: "Make-Ready Engineering",
    category: "design",
    metaTitle: "Make-Ready Engineering & Design | SPANEX Engineering",
    metaDescription:
      "Make-ready engineering for pole attachments — structural analysis, buildable make-ready and drawings to clear each structure.",
    tagline: "Buildable make-ready per structure",
    problem:
      "Make-ready determines whether an attachment can be built — and a fail flag without a resolution stalls the whole project.",
    approach:
      "We analyse each structure and return specific, buildable make-ready — transfer, re-tension, guy, anchor or replacement — with framing called out.",
    scope: [
      "Structural analysis of shared poles",
      "Make-ready determination",
      "Transfer, re-tension, guy and anchor design",
      "Clearance resolution",
      "Make-ready drawings and cost line items",
    ],
    deliverables: ["Make-ready notes", "Structure drawings", "Loading results", "Cost line items"],
    standards: ["NESC clearances", "CSA C22.3", "Distributor attachment standards"],
    toolSlugs: ["spidacalc", "poleforeman", "autocad"],
    industrySlugs: ["electric-utilities", "telecom", "fiber-network"],
    relatedServiceSlugs: ["joint-use-pole-loading", "pole-replacement-design", "telecom-attachment-design"],
    faqs: [
      { q: "What does your make-ready include?", a: "A specific, buildable resolution per structure — transfer, re-tension, guy or anchor change, or replacement — with framing and clearances." },
      { q: "Do you produce make-ready cost line items?", a: "Yes, itemised for estimating." },
    ],
    keywords: ["make ready engineering", "make ready design", "pole make ready"],
  },
  {
    slug: "joint-use-pole-loading",
    name: "Joint-Use & Pole Loading",
    category: "analysis",
    metaTitle: "Joint-Use Design & Pole Loading Analysis | SPANEX Engineering",
    metaDescription:
      "Joint-use attachment design and pole loading analysis for telecom and fibre on shared structures — SPIDAcalc modelling, clearances and make-ready.",
    tagline: "Attachment design + structural loading",
    problem:
      "Shared structures carry combined power and communication loads that must be modelled and cleared before an attachment is built.",
    approach:
      "We model joint-use structures in SPIDAcalc, resolve clearances and mid-span, and return attachment designs with make-ready to the governing standard.",
    scope: [
      "Joint-use attachment layouts",
      "Combined power + communication loading",
      "Clearance and mid-span resolution",
      "Make-ready for failing structures",
      "Attachment drawings and transmittals",
    ],
    deliverables: ["Attachment drawings", "SPIDAcalc models", "Make-ready notes", "Transmittal"],
    standards: ["NESC joint-use clearances", "CSA C22.3", "Distributor attachment standards"],
    toolSlugs: ["spidacalc", "katapult", "autocad"],
    industrySlugs: ["telecom", "fiber-network", "electric-utilities"],
    relatedServiceSlugs: ["make-ready-design", "telecom-attachment-design", "spidacalc-analysis"],
    faqs: [
      { q: "Do you model combined loading, not just the new attachment?", a: "Yes — the whole structure is re-checked under combined power and communication cases." },
      { q: "Do you work from Katapult field data?", a: "Yes, where collected — turned into attachment design and make-ready." },
    ],
    keywords: ["joint use design", "joint use pole loading", "pole attachment analysis", "nesc joint use"],
    intents: ["outsourcing-india", "utility-distributors", "telecom-attachers", "as-built-conversions"],
  },
  {
    slug: "telecom-attachment-design",
    name: "Telecom & Fibre Attachment Design",
    category: "design",
    metaTitle: "Telecom & Fibre Attachment Design | SPANEX Engineering",
    metaDescription:
      "Telecom and fibre pole attachment design — routes, attachment layouts and joint-use coordination to the distributor's standard.",
    tagline: "Attachment layouts for comms & fibre",
    problem:
      "Telecom and fibre expansion means attaching to thousands of poles across jurisdictions, each with its own standard.",
    approach:
      "We produce attachment layouts and route design coordinated with joint-use loading, to each pole owner's attachment standard.",
    scope: [
      "Fibre route and attachment design",
      "Pole attachment layouts",
      "Joint-use coordination",
      "Communication CAD drafting",
    ],
    deliverables: ["Attachment drawings", "Route documentation", "Make-ready coordination"],
    standards: ["NESC clearances", "Distributor attachment standards"],
    toolSlugs: ["katapult", "ospinsight", "autocad"],
    industrySlugs: ["telecom", "fiber-network"],
    relatedServiceSlugs: ["joint-use-pole-loading", "make-ready-design", "as-built-drafting"],
    faqs: [
      { q: "Do you follow each pole owner's attachment standard?", a: "Yes — the governing distributor's standard and clearance code drive each design." },
      { q: "Can you support both design and OSP records?", a: "Yes — route/attachment design and outside-plant documentation." },
    ],
    keywords: ["telecom attachment design", "fibre attachment design", "telecom CAD drafting"],
  },
  {
    slug: "autocad-drafting",
    name: "AutoCAD Drafting",
    category: "drafting",
    metaTitle: "AutoCAD Drafting Services for Utilities | SPANEX Engineering",
    metaDescription:
      "Utility AutoCAD drafting — plan-and-profile, construction sheets, redlines and revisions to your CAD standard, delivered by a remote team.",
    tagline: "Construction sets to your CAD standard",
    problem:
      "Volume drafting is what most clogs an in-house queue, and it has to match your CAD standard exactly.",
    approach:
      "We draft construction sets natively in AutoCAD to your layering, blocks and title block, so packages pass your CAD standards check on the first submission.",
    scope: [
      "Plan-and-profile and construction sheets",
      "Redline incorporation and revisions",
      "Layer, block and xref standardization",
      "Sheet set setup and indexing",
      "Transmittals and change lists",
    ],
    deliverables: ["DWG drawing sets", "Sheet index", "Change list", "PDF plots"],
    standards: ["Your CAD standard", "CSA / NESC as applicable"],
    toolSlugs: ["autocad", "autocad-electrical", "bluebeam"],
    industrySlugs: ["electric-utilities", "consulting-firms", "construction"],
    relatedServiceSlugs: ["as-built-drafting", "construction-drawings", "cad-conversion"],
    faqs: [
      { q: "Do you draft to our CAD standard?", a: "Yes — your layers, blocks, xrefs and title block, loaded before drafting." },
      { q: "Can you take over redlines on existing sets?", a: "Yes — incorporated into a clean, revision-controlled set with a change list." },
    ],
    keywords: ["AutoCAD drafting company", "utility CAD services", "engineering drafting services"],
    intents: ["outsourcing-india", "utility-distributors", "telecom-attachers", "as-built-conversions"],
  },
  {
    slug: "spidacalc-analysis",
    name: "SPIDAcalc Pole Loading Analysis",
    category: "analysis",
    metaTitle: "SPIDAcalc Pole Loading Analysis Services | SPANEX Engineering",
    metaDescription:
      "Outsource SPIDAcalc pole loading analysis — NESC/CSA structural verification, attachment and wind cases, make-ready and engineering reports per structure.",
    tagline: "Structural verification per structure",
    problem:
      "Pole loading is safety-critical and needs consistent, defensible modelling across every structure in a run.",
    approach:
      "We model to your SPIDAcalc client file, load cases and thresholds, and return a capacity result and a buildable make-ready for every structure.",
    scope: [
      "Pole loading and structural verification",
      "NESC and CSA load cases",
      "Attachment and wind loading",
      "Make-ready per failing structure",
      "Engineering reports and assumption logs",
    ],
    deliverables: ["SPIDAcalc models", "Capacity reports", "Make-ready notes", "Assumption log"],
    standards: ["NESC Heavy/Medium/Light", "CSA C22.3", "Your client file"],
    toolSlugs: ["spidacalc", "poleforeman"],
    industrySlugs: ["electric-utilities", "telecom", "power-distribution"],
    relatedServiceSlugs: ["joint-use-pole-loading", "make-ready-design", "pole-line-design"],
    faqs: [
      { q: "Do you work from our client file?", a: "Yes — your client file, cable libraries, load cases and thresholds so results are comparable and defensible." },
      { q: "What happens when a pole fails?", a: "A specific, buildable make-ready with framing called out — not just a fail flag." },
    ],
    keywords: ["SpidaCalc services", "pole loading analysis", "NESC structural pole capacity analysis"],
    intents: ["outsourcing-india", "utility-distributors", "telecom-attachers", "as-built-conversions"],
  },
  {
    slug: "gis-mapping",
    name: "GIS Mapping & Conversion",
    category: "gis",
    metaTitle: "GIS Mapping & GIS-to-CAD Conversion | SPANEX Engineering",
    metaDescription:
      "Utility GIS mapping and GIS-to-CAD conversion — ArcGIS/QGIS asset data reconciled into coordinate-true DWG for distribution design.",
    tagline: "Asset data into coordinate-true CAD",
    problem:
      "Design starts from spatial data, and GIS-to-CAD conversion done badly loses the attributes that made the data useful.",
    approach:
      "We reconcile ArcGIS/QGIS asset and network data into coordinate-true CAD, mapping attributes to your layer schema so nothing is flattened away.",
    scope: [
      "GIS-to-CAD (DWG/DGN) conversion",
      "Utility asset and network capture",
      "Coordinate-system alignment",
      "Attribute and layer mapping",
    ],
    deliverables: ["Coordinate-true CAD base", "Edited geodatabases", "QA reports"],
    standards: ["Your project datum", "Your CAD layer schema"],
    toolSlugs: ["arcgis", "qgis", "fme"],
    industrySlugs: ["electric-utilities", "government-utilities", "municipal-utilities"],
    relatedServiceSlugs: ["landbase-prep", "cad-conversion", "underground-distribution-design"],
    faqs: [
      { q: "Do attributes survive the conversion?", a: "Yes — mapped to your CAD layer schema rather than flattened to geometry." },
      { q: "Which GIS platforms do you work in?", a: "ArcGIS and QGIS, with FME for repeatable conversions." },
    ],
    keywords: ["GIS drafting", "GIS utility mapping", "gis to autocad distribution conversion"],
    intents: ["outsourcing-india", "utility-distributors", "telecom-attachers", "as-built-conversions"],
  },
  {
    slug: "landbase-prep",
    name: "Landbase Mapping",
    category: "gis",
    metaTitle: "Landbase Mapping & ROW Alignment | SPANEX Engineering",
    metaDescription:
      "Survey-true landbase for distribution corridors — parcel data, road and ROW alignment and existing assets assembled into one accurate base.",
    tagline: "The survey-true base every sheet sits on",
    problem:
      "A drawing is only as accurate as the base beneath it, and landbase is where GIS accuracy and CAD precision have to agree.",
    approach:
      "We assemble parcel, survey and GIS sources into one coordinate-true landbase, with ROW and easement alignment, and log every gap as an assumption.",
    scope: [
      "Landbase drafting and maintenance",
      "Property boundaries and ROW alignment",
      "Road and corridor alignment",
      "Existing utility asset capture",
    ],
    deliverables: ["Landbase drawings", "ROW alignment", "QC report"],
    standards: ["Your project datum", "Survey/parcel sources"],
    toolSlugs: ["arcgis", "autocad", "fme"],
    industrySlugs: ["electric-utilities", "power-distribution", "transmission"],
    relatedServiceSlugs: ["gis-mapping", "underground-distribution-design", "as-built-drafting"],
    faqs: [
      { q: "What source data do you need?", a: "Whatever you have — parcel fabric, survey, GIS exports or existing drawings — reconciled into one coordinate-true base." },
      { q: "Do you handle ROW and easements?", a: "Yes — right-of-way and easement alignment are drafted into the landbase." },
    ],
    keywords: ["landbase mapping", "utility landbase mapping", "ROW alignment"],
    intents: ["outsourcing-india", "utility-distributors", "telecom-attachers", "as-built-conversions"],
  },
  {
    slug: "as-built-drafting",
    name: "As-Built Drafting",
    category: "drafting",
    metaTitle: "As-Built Drafting Services for Utilities | SPANEX Engineering",
    metaDescription:
      "As-built drafting — field redlines and markups incorporated into clean, revision-controlled record drawings on your CAD standard.",
    tagline: "Field redlines into clean records",
    problem:
      "As-built backlogs pile up after construction, and messy redlines are slow to turn into reliable record drawings.",
    approach:
      "We incorporate field redlines and markups into clean, revision-controlled as-builts to your CAD standard, closing out every comment.",
    scope: [
      "Redline and field-markup incorporation",
      "Record drawing production",
      "Revision control and change lists",
      "Sheet set updates",
    ],
    deliverables: ["As-built DWGs", "Change list", "Updated sheet set"],
    standards: ["Your CAD standard", "Record-drawing conventions"],
    toolSlugs: ["autocad", "bluebeam"],
    industrySlugs: ["construction", "electric-utilities", "municipal-utilities"],
    relatedServiceSlugs: ["autocad-drafting", "construction-drawings", "cad-conversion"],
    faqs: [
      { q: "Can you turn field redlines into clean as-builts?", a: "Yes — incorporated into clean, revision-controlled record drawings." },
      { q: "Do you close out comments?", a: "Yes, with a change list documenting every incorporation." },
    ],
    keywords: ["as-built drafting", "record drawing conversion", "utility as-built"],
  },
  {
    slug: "construction-drawings",
    name: "Construction & Permit Drawings",
    category: "drafting",
    metaTitle: "Construction & Permit Drawing Preparation | SPANEX Engineering",
    metaDescription:
      "Construction drawing and permit package preparation for utility distribution — assembled, marked up and submission-ready.",
    tagline: "Construction sets and permit packages",
    problem:
      "Construction and permit packages have to be complete, consistent and submission-ready under deadline pressure.",
    approach:
      "We prepare construction drawing sets and permit packages, assembled and marked up to your standard and ready for submission.",
    scope: [
      "Construction drawing sets",
      "Permit drawings and packages",
      "Sheet indexing and transmittals",
      "Markup and QA (Bluebeam)",
    ],
    deliverables: ["Construction sets", "Permit packages", "Transmittals"],
    standards: ["Your CAD standard", "Permitting requirements"],
    toolSlugs: ["autocad", "bluebeam", "adobe-acrobat"],
    industrySlugs: ["construction", "electric-utilities", "consulting-firms"],
    relatedServiceSlugs: ["autocad-drafting", "as-built-drafting", "cad-conversion"],
    faqs: [
      { q: "Do you assemble permit packages?", a: "Yes — assembled, bookmarked and marked up ready for submission." },
      { q: "Can you run QA to our checklist?", a: "Yes, with auditable comment tracking and closeout." },
    ],
    keywords: ["construction drawing preparation", "permit drawings", "utility drafting"],
  },
  {
    slug: "cad-conversion",
    name: "CAD Conversion & Cleanup",
    category: "support",
    metaTitle: "PDF to CAD, Conversion & Drawing Cleanup | SPANEX Engineering",
    metaDescription:
      "CAD conversion and cleanup — PDF-to-CAD, format conversion, drawing standardization and legacy drawing cleanup to your CAD standard.",
    tagline: "PDF-to-CAD, cleanup & standardization",
    problem:
      "Legacy drawings, PDFs and mixed formats need converting and standardizing before a team can build on them.",
    approach:
      "We rebuild geometry to scale on your CAD standard — not an auto-trace — and standardize layers, blocks and title blocks across the set.",
    scope: [
      "PDF-to-CAD conversion",
      "Format conversion (DWG/DGN, GIS)",
      "Drawing standardization",
      "Legacy drawing cleanup",
    ],
    deliverables: ["Editable DWG/DGN", "Standardized sets", "QC report"],
    standards: ["Your CAD standard", "Your layer/block conventions"],
    toolSlugs: ["autocad", "adobe-acrobat", "fme", "microstation"],
    industrySlugs: ["electric-utilities", "consulting-firms", "government-utilities"],
    relatedServiceSlugs: ["gis-mapping", "as-built-drafting", "autocad-drafting"],
    faqs: [
      { q: "How accurate is PDF-to-CAD?", a: "We rebuild geometry to scale on your standard — clean and editable, not an auto-trace." },
      { q: "Can you standardize a mixed set of legacy drawings?", a: "Yes — layers, blocks and title blocks standardized across the set." },
    ],
    keywords: ["PDF to CAD", "CAD conversion", "drawing standardization", "CAD cleanup"],
  },
];

export function getServicePillar(slug: string): ServicePillar | undefined {
  return servicePillars.find((s) => s.slug === slug);
}
