/**
 * Site copy as structured data, so the homepage summary and the detail pages
 * stay in sync. Voice: short declarative sentences, technical nouns, specific
 * work. No superlatives, no buzzwords. We design and draft utility distribution
 * networks — we do not build them.
 */

export type ServiceIconName =
  | "drafting"
  | "autocad"
  | "gis"
  | "spidacalc"
  | "fibre";

export interface Service {
  id: string;
  index: string;
  icon: ServiceIconName;
  title: string;
  summary: string;
  points: string[];
  href: string;
}

/** The five service lines. Rendered as cards on the homepage and in full on
 *  /capabilities. */
export const services: Service[] = [
  {
    id: "distribution-drafting",
    index: "01",
    icon: "drafting",
    title: "Distribution drafting",
    summary:
      "Construction drawings for overhead and underground distribution, drafted to your utility standard.",
    points: [
      "Pole layouts and framing details",
      "Overhead and underground distribution",
      "Construction-ready drawing sets",
      "Standards-compliant utility drafting",
    ],
    href: "/services/overhead-distribution-design",
  },
  {
    id: "autocad-design",
    index: "02",
    icon: "autocad",
    title: "AutoCAD design",
    summary:
      "Detailed engineering drawings produced natively in AutoCAD, to your CAD standard.",
    points: [
      "Plan-and-profile drawings",
      "Redline updates and drawing revisions",
      "Construction packages and sheet sets",
      "Layering, blocks and title blocks to your standard",
    ],
    href: "/services/autocad-drafting",
  },
  {
    id: "gis-landbase",
    index: "03",
    icon: "gis",
    title: "GIS & landbase integration",
    summary:
      "Survey-accurate landbase and spatial data, so every drawing sits on a true base.",
    points: [
      "Landbase drafting and maintenance",
      "Property boundaries and road alignment",
      "Existing utility asset capture",
      "GIS integration and spatial accuracy",
    ],
    href: "/services/gis-mapping",
  },
  {
    id: "spidacalc-engineering",
    index: "04",
    icon: "spidacalc",
    title: "SPIDAcalc engineering",
    summary:
      "Pole loading analysis and structural verification, with an engineering report per structure.",
    points: [
      "Pole loading and structural verification",
      "Attachment and wind loading cases",
      "Safety-factor and capacity assessment",
      "Engineering reports per structure",
    ],
    href: "/services/spidacalc-analysis",
  },
  {
    id: "telecom-fibre",
    index: "05",
    icon: "fibre",
    title: "Telecom & fibre design",
    summary:
      "Fibre routing and pole-attachment design for communication and joint-use networks.",
    points: [
      "Fibre routes and network expansion",
      "Pole attachment layouts",
      "Joint-use design and coordination",
      "Communication infrastructure drafting",
    ],
    href: "/services/telecom-attachment-design",
  },
];

export interface WorkflowStep {
  index: string;
  title: string;
  body: string;
}

/** The nine-step engineering workflow, from request to delivery. */
export const workflow: WorkflowStep[] = [
  {
    index: "1",
    title: "Project request",
    body: "You send scope, standards and source data. We confirm deliverables and schedule before work starts.",
  },
  {
    index: "2",
    title: "Data collection",
    body: "We gather field data, GIS layers, as-builts and existing drawings, and flag any gaps for your decision.",
  },
  {
    index: "3",
    title: "Landbase review",
    body: "Property lines, roads and existing assets are reconciled into one survey-accurate landbase.",
  },
  {
    index: "4",
    title: "AutoCAD drafting",
    body: "Designers draft plan-and-profile and construction sheets to your CAD standard, layer for layer.",
  },
  {
    index: "5",
    title: "Engineering review",
    body: "A lead checks framing, clearances and design intent against the governing code and your standard.",
  },
  {
    index: "6",
    title: "SPIDAcalc validation",
    body: "Structures are modelled and verified for pole loading, attachments and wind cases against safety factors.",
  },
  {
    index: "7",
    title: "Quality check",
    body: "The package runs a full release checklist; every comment is logged and closed out.",
  },
  {
    index: "8",
    title: "Final drawing package",
    body: "Sheets, calculations and an assumption log are assembled into a clean, sealed-ready transmittal.",
  },
  {
    index: "9",
    title: "Client delivery",
    body: "The package is delivered on schedule, with revisions handled by the same team the same day.",
  },
];

export interface Software {
  name: string;
  icon: "pennib" | "globe" | "chart" | "grid";
  role: string;
  why: string;
}

/** The core toolset, and why each is used. */
export const software: Software[] = [
  {
    name: "AutoCAD",
    icon: "pennib",
    role: "The drawing environment behind every deliverable.",
    why: "Plan-and-profile, construction packages and redline revisions are produced natively in AutoCAD, to your layering, blocks and title-block standard.",
  },
  {
    name: "GIS",
    icon: "globe",
    role: "Spatial accuracy for landbase and assets.",
    why: "Property boundaries, road alignment and existing utility assets are referenced from GIS, so every sheet sits on an accurate, coordinate-true base.",
  },
  {
    name: "SPIDAcalc",
    icon: "chart",
    role: "Structural analysis for distribution poles.",
    why: "Pole loading, attachment and wind cases are modelled and verified against safety factors, with an engineering report produced per structure.",
  },
  {
    name: "Landbase",
    icon: "grid",
    role: "The survey-true base every sheet is built on.",
    why: "We build and maintain landbase from your source data, so drafting, GIS and analysis all share one reference rather than drifting apart.",
  },
];

export interface Reason {
  title: string;
  body: string;
}

/** Why work with SPANEX. */
export const reasons: Reason[] = [
  {
    title: "Engineering accuracy",
    body: "Drawings are checked against standards and analysis before release, not after.",
  },
  {
    title: "Utility experience",
    body: "We work only in utility distribution — electrical, telecom and fibre.",
  },
  {
    title: "Fast turnaround",
    body: "Scoped schedules with overnight production, so review starts when your day does.",
  },
  {
    title: "Scalable support",
    body: "Add or reduce drafting capacity by the project, without hiring.",
  },
  {
    title: "Quality control",
    body: "An independent reviewer checks every package before it ships.",
  },
  {
    title: "Standards compliance",
    body: "Your CAD standard and the governing code drive every sheet.",
  },
  {
    title: "Reliable documentation",
    body: "Assumption logs, revision history and transmittals travel with the work.",
  },
  {
    title: "Modern workflows",
    body: "AutoCAD, GIS and SPIDAcalc in one coordinated, version-controlled pipeline.",
  },
];

export interface ChecklistItem {
  ref: string;
  text: string;
}

export interface ChecklistGroup {
  title: string;
  items: ChecklistItem[];
}

/** The QA checklist, rendered on /quality as an actual checklist artifact. */
export const qaChecklist: ChecklistGroup[] = [
  {
    title: "Inputs",
    items: [
      { ref: "IN-1", text: "Client standard, load cases and CAD template loaded and version-noted." },
      { ref: "IN-2", text: "Source data and landbase complete; every gap logged as an assumption, not a guess." },
      { ref: "IN-3", text: "Structure and sheet list reconciled against the request received." },
    ],
  },
  {
    title: "Design",
    items: [
      { ref: "DS-1", text: "Framing, spans and attachment heights match the field and landbase record." },
      { ref: "DS-2", text: "Guying and anchor leads modelled; capacity reported per load case." },
      { ref: "DS-3", text: "SPIDAcalc results verified against safety factors for every structure." },
      { ref: "DS-4", text: "Clearances checked against the governing code and distributor standard." },
    ],
  },
  {
    title: "Drafting",
    items: [
      { ref: "DR-1", text: "Layers, blocks, xrefs and title block conform to the client CAD standard." },
      { ref: "DR-2", text: "Sheet set complete; index matches sheets present." },
      { ref: "DR-3", text: "Redlines and as-built notes incorporated and closed out." },
    ],
  },
  {
    title: "Release",
    items: [
      { ref: "RL-1", text: "Independent lead review complete and signed off." },
      { ref: "RL-2", text: "Assumption log attached; open items flagged for client decision." },
      { ref: "RL-3", text: "Transmittal and change list prepared for client seal and review." },
    ],
  },
];

export interface QaControl {
  index: string;
  title: string;
  body: string;
}

export const qaControls: QaControl[] = [
  {
    index: "01",
    title: "Defect register",
    body: "Every review comment, internal or from you, is logged with the structure, the category and the resolution. The register is auditable and travels with the project, so recurring issues are designed out rather than re-explained.",
  },
  {
    index: "02",
    title: "Assumption log",
    body: "No field or landbase value is ever invented. Where data is missing we record the assumption, its basis and its effect on the result, and surface it for your decision rather than burying it in a drawing.",
  },
  {
    index: "03",
    title: "Independent review",
    body: "A senior lead who did not produce the work reviews structural results, framing and drawing conformance before release. The person who checks is never the person who drew.",
  },
  {
    index: "04",
    title: "Data security",
    body: "Each client works in an isolated project space with access limited to the assigned team. Files stay within controlled storage, transfers use your named channel, and nothing is retained beyond the terms you set.",
  },
];

export interface Standard {
  code: string;
  label: string;
  note: string;
}

export const standards: Standard[] = [
  {
    code: "CSA C22.3 No. 1",
    label: "Overhead systems",
    note: "Load cases and clearance requirements for overhead distribution.",
  },
  {
    code: "CSA C22.3 No. 7",
    label: "Underground systems",
    note: "Applied where the package includes underground distribution.",
  },
  {
    code: "O. Reg. 22/04",
    label: "Ontario electrical safety",
    note: "Context for work on Ontario distribution assets.",
  },
  {
    code: "Distributor standards",
    label: "Construction & attachment",
    note: "Your utility's construction standard and attachment guidelines govern.",
  },
  {
    code: "SPIDAcalc",
    label: "Structural analysis",
    note: "Modelled to your client file, load cases and pass/fail thresholds.",
  },
  {
    code: "Your CAD standard",
    label: "Drafting",
    note: "Layering, blocks, xrefs and title blocks follow your template.",
  },
];
