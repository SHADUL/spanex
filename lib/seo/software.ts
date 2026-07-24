import type { SoftwareTool } from "./schema";

/**
 * Software expertise pages. Each targets "{tool} experts / services / drafting"
 * intent and carries tool-specific capability + FAQ so pages are non-thin.
 */
export const softwareTools: SoftwareTool[] = [
  {
    slug: "autocad",
    name: "AutoCAD",
    vendor: "Autodesk",
    category: "cad",
    metaTitle: "AutoCAD Drafting Services for Utilities | SPANEX Engineering",
    metaDescription:
      "AutoCAD drafting for utility distribution — plan-and-profile, construction sheets and revisions to your CAD standard. Remote AutoCAD designers for Canadian and US utilities.",
    tagline: "AutoCAD drafting to your CAD standard",
    intro:
      "AutoCAD is the environment behind most of our deliverables. We draft utility distribution construction sets natively in AutoCAD to your layering, blocks, xrefs and title-block template, so packages pass your CAD standards check on the first submission.",
    whatWeDo: [
      "Plan-and-profile and construction drawing sets",
      "Overhead and underground distribution layouts",
      "Redline incorporation and revision control",
      "Layer, block and xref standardization to your template",
      "Sheet set setup, indexing and transmittals",
    ],
    outputs: ["DWG drawing sets", "Sheet index", "Revision/change list", "PDF plots"],
    relatedServiceHrefs: [
      { label: "AutoCAD drafting service", href: "/services/autocad-drafting/utility-distributors" },
      { label: "As-built drafting", href: "/services/autocad-drafting/as-built-conversions" },
    ],
    faqs: [
      {
        q: "Do you draft to our AutoCAD standard or your own?",
        a: "Yours. We load your CAD standard — layers, blocks, xrefs and title block — before drafting so the work drops straight into your project set.",
      },
      {
        q: "Which AutoCAD versions do you support?",
        a: "Current and recent AutoCAD releases, including AutoCAD Electrical where required. We match the version and file format your team uses.",
      },
      {
        q: "Can you take over redlines on existing sets?",
        a: "Yes. We incorporate redlines and as-built markups into existing DWGs and return a clean, revision-controlled set with a change list.",
      },
    ],
    keywords: ["AutoCAD drafting company", "AutoCAD utility drafting", "utility CAD services", "AutoCAD designers"],
  },
  {
    slug: "autocad-electrical",
    name: "AutoCAD Electrical",
    vendor: "Autodesk",
    category: "cad",
    metaTitle: "AutoCAD Electrical Drafting Services | SPANEX Engineering",
    metaDescription:
      "AutoCAD Electrical drafting for distribution and control drawings — schematics, panel and wiring drawings produced to your standard by a remote team.",
    tagline: "Electrical schematics and control drawings",
    intro:
      "For electrical schematic and control work we use AutoCAD Electrical, producing wiring, schematic and panel drawings that follow your symbol libraries and drawing conventions.",
    whatWeDo: [
      "Electrical schematic and wiring drawings",
      "Panel and control layout drafting",
      "Symbol library and template conformance",
      "Revisions and as-built updates",
    ],
    outputs: ["Schematic sets", "Panel drawings", "Wiring diagrams"],
    relatedServiceHrefs: [
      { label: "Electrical distribution drafting", href: "/services/autocad-drafting/utility-distributors" },
    ],
    faqs: [
      {
        q: "Can you use our symbol libraries?",
        a: "Yes. We load your AutoCAD Electrical symbol libraries and templates so drawings match your existing set.",
      },
      {
        q: "Do you handle control and schematic work as well as layouts?",
        a: "Yes — schematic, wiring and panel drawings alongside physical layouts.",
      },
    ],
    keywords: ["AutoCAD Electrical drafting", "electrical schematic drafting", "control drawing services"],
  },
  {
    slug: "spidacalc",
    name: "SPIDAcalc",
    vendor: "Bentley",
    category: "analysis",
    metaTitle: "SPIDAcalc Pole Loading Analysis Services | SPANEX Engineering",
    metaDescription:
      "Outsource SPIDAcalc pole loading analysis. NESC/CSA structural verification, attachment and wind cases, make-ready and engineering reports per structure.",
    tagline: "Pole loading analysis and structural verification",
    intro:
      "We model and verify distribution structures in SPIDAcalc to your client file, load cases and pass/fail thresholds. Every structure returns a capacity result, and every failure returns a buildable make-ready.",
    whatWeDo: [
      "Pole loading and structural verification",
      "NESC Heavy/Medium/Light and CSA load cases",
      "Attachment and wind loading analysis",
      "Make-ready recommendations per failing structure",
      "Engineering reports and assumption logs",
    ],
    outputs: ["SPIDAcalc models (.spida)", "Capacity report per structure", "Make-ready notes", "Assumption log"],
    relatedServiceHrefs: [
      { label: "SPIDAcalc analysis service", href: "/services/spidacalc-analysis/utility-distributors" },
      { label: "Joint-use pole loading", href: "/services/joint-use-pole-loading/telecom-attachers" },
    ],
    faqs: [
      {
        q: "Do you work from our SPIDAcalc client file?",
        a: "Yes. We load your client file, cable libraries, load cases and pass/fail thresholds so results are comparable and defensible under your review.",
      },
      {
        q: "What do we get when a pole fails?",
        a: "A specific, buildable make-ready — transfer, re-tension, guy or anchor change, or replacement — with the framing called out, not just a fail flag.",
      },
      {
        q: "Can you scale for a large pole run?",
        a: "Yes. We scale a run up or down by the project, with an independent lead reviewing every result before release.",
      },
    ],
    keywords: ["SPIDAcalc services", "SPIDAcalc experts", "pole loading analysis", "NESC pole capacity analysis", "outsource SPIDAcalc"],
  },
  {
    slug: "arcgis",
    name: "ArcGIS",
    vendor: "Esri",
    category: "gis",
    metaTitle: "ArcGIS Editing & Utility GIS Services | SPANEX Engineering",
    metaDescription:
      "ArcGIS editing and utility GIS mapping — asset capture, attribute editing and GIS-to-CAD conversion aligned to your coordinate system.",
    tagline: "Enterprise GIS editing and asset data",
    intro:
      "We work in ArcGIS to capture and maintain utility assets, edit attributes and reconcile network data into coordinate-true bases for design.",
    whatWeDo: [
      "Utility asset and network editing",
      "Attribute capture and QA",
      "GIS-to-CAD (DWG/DGN) conversion",
      "Coordinate-system alignment to your datum",
    ],
    outputs: ["Edited geodatabases", "Coordinate-true CAD base", "QA reports"],
    relatedServiceHrefs: [
      { label: "GIS mapping service", href: "/services/gis-mapping/as-built-conversions" },
      { label: "Landbase preparation", href: "/services/landbase-prep/utility-distributors" },
    ],
    faqs: [
      {
        q: "Do you preserve attributes when converting GIS to CAD?",
        a: "Yes. Attributes are mapped to your CAD layer schema so data survives the conversion rather than being flattened to geometry.",
      },
      {
        q: "Can you edit within our enterprise geodatabase?",
        a: "Yes, following your editing rules, domains and coordinate system.",
      },
    ],
    keywords: ["ArcGIS editing", "ArcGIS specialists", "utility GIS mapping", "GIS to CAD conversion"],
  },
  {
    slug: "qgis",
    name: "QGIS",
    vendor: "QGIS.org",
    category: "gis",
    metaTitle: "QGIS Services for Utility Mapping | SPANEX Engineering",
    metaDescription:
      "QGIS services for utility mapping and GIS-to-CAD workflows — parcel and asset data prepared and converted for distribution design.",
    tagline: "Open-source GIS and parcel data",
    intro:
      "For open-source GIS workflows we use QGIS to prepare parcel and asset data and convert it into coordinate-true bases for drafting and design.",
    whatWeDo: [
      "Parcel and asset data preparation",
      "GIS-to-CAD conversion",
      "Attribute mapping and cleanup",
      "Coordinate alignment",
    ],
    outputs: ["Prepared GIS layers", "CAD base", "Attribute mapping"],
    relatedServiceHrefs: [
      { label: "GIS mapping service", href: "/services/gis-mapping/as-built-conversions" },
    ],
    faqs: [
      {
        q: "Can you move data between QGIS and ArcGIS?",
        a: "Yes. We work across both and hand off in whichever format your team maintains.",
      },
      {
        q: "Do you handle coordinate-system reprojection?",
        a: "Yes — all sources are reprojected to your fixed project datum before conversion.",
      },
    ],
    keywords: ["QGIS services", "QGIS utility mapping", "open source GIS utility"],
  },
  {
    slug: "microstation",
    name: "MicroStation",
    vendor: "Bentley",
    category: "cad",
    metaTitle: "MicroStation Drafting Services (DGN) | SPANEX Engineering",
    metaDescription:
      "MicroStation DGN drafting for utilities that standardize on Bentley — distribution drawings and conversions to your DGN standard.",
    tagline: "DGN drafting for Bentley-standard utilities",
    intro:
      "For utilities that standardize on Bentley, we draft in MicroStation to your DGN levels, cells and seed files, and convert between DGN and DWG as needed.",
    whatWeDo: [
      "DGN distribution drafting",
      "Level, cell and seed-file conformance",
      "DGN ⇄ DWG conversion",
      "Revisions and as-builts",
    ],
    outputs: ["DGN drawing sets", "Converted DWG/DGN", "Sheet indexes"],
    relatedServiceHrefs: [
      { label: "Utility CAD services", href: "/services/autocad-drafting/utility-distributors" },
      { label: "CAD conversion", href: "/services/gis-mapping/as-built-conversions" },
    ],
    faqs: [
      {
        q: "Can you convert between DGN and DWG?",
        a: "Yes, in both directions, preserving levels/layers and reference structure.",
      },
      {
        q: "Do you follow our MicroStation standards?",
        a: "Yes — your levels, cell libraries and seed files drive every drawing.",
      },
    ],
    keywords: ["MicroStation drafting", "DGN drafting services", "Bentley MicroStation utility"],
  },
  {
    slug: "poleforeman",
    name: "PoleForeman",
    vendor: "PoleForeman",
    category: "analysis",
    metaTitle: "PoleForeman Pole Loading Services | SPANEX Engineering",
    metaDescription:
      "PoleForeman pole loading and make-ready analysis for utilities that use PoleForeman as their structural tool.",
    tagline: "Pole loading in PoleForeman",
    intro:
      "For utilities standardized on PoleForeman, we perform pole loading and make-ready analysis in your environment and thresholds.",
    whatWeDo: [
      "Pole loading calculations",
      "Make-ready determination",
      "Attachment and clearance checks",
      "Reporting to your format",
    ],
    outputs: ["Loading results", "Make-ready notes", "Reports"],
    relatedServiceHrefs: [
      { label: "Pole loading analysis", href: "/services/spidacalc-analysis/utility-distributors" },
    ],
    faqs: [
      {
        q: "Do you also work in SPIDAcalc?",
        a: "Yes. We work in both PoleForeman and SPIDAcalc depending on your standard.",
      },
      {
        q: "Can you match our loading criteria?",
        a: "Yes — district loading, safety factors and thresholds follow your standard.",
      },
    ],
    keywords: ["PoleForeman experts", "PoleForeman pole loading", "pole loading service"],
  },
  {
    slug: "katapult",
    name: "Katapult Pro",
    vendor: "Katapult Engineering",
    category: "collection",
    metaTitle: "Katapult Pro Joint-Use Design Services | SPANEX Engineering",
    metaDescription:
      "Katapult Pro joint-use and pole attachment design support — field data turned into attachment layouts and make-ready.",
    tagline: "Joint-use design in Katapult Pro",
    intro:
      "For attachers and their partners using Katapult Pro, we turn collected field data into attachment designs, make-ready and clearance resolution.",
    whatWeDo: [
      "Joint-use attachment design",
      "Make-ready from Katapult data",
      "Clearance and mid-span resolution",
      "Photo-based data QA",
    ],
    outputs: ["Attachment designs", "Make-ready lists", "QA'd datasets"],
    relatedServiceHrefs: [
      { label: "Joint-use design", href: "/services/joint-use-pole-loading/telecom-attachers" },
      { label: "Telecom & fibre design", href: "/services/joint-use-pole-loading/telecom-attachers" },
    ],
    faqs: [
      {
        q: "Do you work from Katapult field data?",
        a: "Yes. We take photo-based Katapult data and produce attachment design and make-ready from it.",
      },
      {
        q: "Can you resolve clearances and mid-span?",
        a: "Yes — to the governing clearance code and the pole owner's attachment standard.",
      },
    ],
    keywords: ["Katapult designers", "Katapult Pro joint use", "pole attachment design"],
  },
  {
    slug: "ospinsight",
    name: "OSPInsight",
    vendor: "OSPInsight",
    category: "docs",
    metaTitle: "OSPInsight Fibre Network Support | SPANEX Engineering",
    metaDescription:
      "OSPInsight fibre network documentation and design support — outside-plant records and design assistance.",
    tagline: "Outside-plant fibre documentation",
    intro:
      "We support fibre network documentation and design in OSPInsight, maintaining outside-plant records and assisting with route and splice documentation.",
    whatWeDo: [
      "Outside-plant (OSP) records",
      "Fibre route documentation",
      "Splice and connectivity records",
      "Data cleanup",
    ],
    outputs: ["OSP records", "Route documentation", "Connectivity data"],
    relatedServiceHrefs: [
      { label: "Fibre design support", href: "/services/joint-use-pole-loading/telecom-attachers" },
    ],
    faqs: [
      {
        q: "Do you support fibre design as well as records?",
        a: "Yes — route and attachment design alongside documentation.",
      },
      {
        q: "Can you clean up existing OSP data?",
        a: "Yes, reconciling records against as-builts and field data.",
      },
    ],
    keywords: ["OSPInsight support", "fibre network documentation", "OSP records"],
  },
  {
    slug: "bentley",
    name: "Bentley OpenUtilities",
    vendor: "Bentley",
    category: "cad",
    metaTitle: "Bentley OpenUtilities Support | SPANEX Engineering",
    metaDescription:
      "Bentley OpenUtilities and Bentley platform support for utility distribution drafting and modelling.",
    tagline: "Bentley utility platform support",
    intro:
      "We support the Bentley utility platform for drafting and modelling, aligned to your Bentley workspace and standards.",
    whatWeDo: [
      "Distribution drafting in the Bentley platform",
      "Workspace and standard conformance",
      "Model and drawing production",
      "Conversions to/from DWG",
    ],
    outputs: ["Bentley drawing sets", "Converted CAD", "Models"],
    relatedServiceHrefs: [
      { label: "Utility CAD services", href: "/services/autocad-drafting/utility-distributors" },
    ],
    faqs: [
      {
        q: "Which Bentley products do you support?",
        a: "MicroStation and Bentley OpenUtilities workflows for distribution work.",
      },
      {
        q: "Can you conform to our Bentley workspace?",
        a: "Yes — your workspace, levels and standards drive the work.",
      },
    ],
    keywords: ["Bentley OpenUtilities", "Bentley utility drafting", "MicroStation utility"],
  },
  {
    slug: "bluebeam",
    name: "Bluebeam Revu",
    vendor: "Bluebeam",
    category: "docs",
    metaTitle: "Bluebeam Revu Markup & QA Services | SPANEX Engineering",
    metaDescription:
      "Bluebeam Revu markup, takeoff and QA support for utility drawing sets and permit packages.",
    tagline: "Markup, takeoff and drawing QA",
    intro:
      "We use Bluebeam Revu for drawing QA, markups, takeoffs and permit-set assembly, keeping comment tracking auditable.",
    whatWeDo: [
      "Drawing QA and markup review",
      "Quantity takeoffs",
      "Permit-set assembly",
      "Comment tracking and closeout",
    ],
    outputs: ["Marked-up sets", "Takeoffs", "Permit packages"],
    relatedServiceHrefs: [
      { label: "Design QA/QC", href: "/quality" },
      { label: "Construction drawings", href: "/services/autocad-drafting/utility-distributors" },
    ],
    faqs: [
      {
        q: "Can you run QA to our checklist in Bluebeam?",
        a: "Yes. We run your release checklist with auditable comment tracking and closeout.",
      },
      {
        q: "Do you assemble permit sets?",
        a: "Yes — assembled and marked up ready for submission.",
      },
    ],
    keywords: ["Bluebeam Revu services", "drawing QA services", "permit set assembly"],
  },
  {
    slug: "fme",
    name: "FME",
    vendor: "Safe Software",
    category: "gis",
    metaTitle: "FME Data Conversion for Utilities | SPANEX Engineering",
    metaDescription:
      "FME data transformation and conversion between GIS, CAD and utility formats — automated, repeatable spatial ETL.",
    tagline: "Spatial ETL and format conversion",
    intro:
      "We build and run FME workflows to transform and convert data between GIS, CAD and utility formats — repeatable spatial ETL that keeps attributes and coordinate systems intact.",
    whatWeDo: [
      "GIS ⇄ CAD conversion pipelines",
      "Attribute and schema mapping",
      "Coordinate reprojection",
      "Batch and repeatable transforms",
    ],
    outputs: ["Converted datasets", "FME workspaces", "Validation reports"],
    relatedServiceHrefs: [
      { label: "CAD conversion", href: "/services/gis-mapping/as-built-conversions" },
      { label: "GIS mapping", href: "/services/gis-mapping/utility-distributors" },
    ],
    faqs: [
      {
        q: "Can you automate a recurring conversion?",
        a: "Yes. We build reusable FME workspaces so recurring conversions run the same way every time.",
      },
      {
        q: "Do attributes survive the conversion?",
        a: "Yes — schema mapping preserves attributes and relationships across formats.",
      },
    ],
    keywords: ["FME data conversion", "spatial ETL utility", "GIS CAD conversion FME"],
  },
  {
    slug: "google-earth-pro",
    name: "Google Earth Pro",
    vendor: "Google",
    category: "collection",
    metaTitle: "Google Earth Pro Utility Reference Support | SPANEX Engineering",
    metaDescription:
      "Google Earth Pro imagery and reference support for utility route review, KMZ preparation and design context.",
    tagline: "Imagery reference and KMZ prep",
    intro:
      "We use Google Earth Pro for route review, imagery reference and KMZ preparation to support design context and coordination.",
    whatWeDo: [
      "Route and corridor imagery review",
      "KMZ/KML preparation",
      "Design context and coordination overlays",
    ],
    outputs: ["KMZ/KML files", "Reference overlays", "Route reviews"],
    relatedServiceHrefs: [
      { label: "Landbase preparation", href: "/services/landbase-prep/utility-distributors" },
    ],
    faqs: [
      {
        q: "Can you produce KMZ overlays for our route?",
        a: "Yes — prepared for review and coordination.",
      },
      {
        q: "Is imagery used for design or reference only?",
        a: "Reference and context; survey-true landbase comes from your source data.",
      },
    ],
    keywords: ["Google Earth Pro utility", "KMZ preparation", "route review imagery"],
  },
  {
    slug: "adobe-acrobat",
    name: "Adobe Acrobat",
    vendor: "Adobe",
    category: "docs",
    metaTitle: "PDF to CAD & Document Support | SPANEX Engineering",
    metaDescription:
      "PDF-to-CAD conversion and engineering document support — clean, editable CAD from PDF drawings and permit-ready documentation.",
    tagline: "PDF-to-CAD and document production",
    intro:
      "We use Adobe Acrobat alongside CAD tools for PDF-to-CAD conversion and engineering document assembly, producing clean, editable drawings and permit-ready packages.",
    whatWeDo: [
      "PDF-to-CAD conversion",
      "Document assembly and bookmarking",
      "Permit and transmittal packages",
      "Drawing cleanup",
    ],
    outputs: ["Editable DWG from PDF", "Document packages", "Permit sets"],
    relatedServiceHrefs: [
      { label: "PDF to CAD / CAD conversion", href: "/services/gis-mapping/as-built-conversions" },
      { label: "Construction drawings", href: "/services/autocad-drafting/utility-distributors" },
    ],
    faqs: [
      {
        q: "How accurate is your PDF-to-CAD conversion?",
        a: "We rebuild geometry to scale on your CAD standard — not an auto-trace — so the result is clean and editable.",
      },
      {
        q: "Can you assemble permit documentation?",
        a: "Yes — bookmarked, transmittal-ready packages.",
      },
    ],
    keywords: ["PDF to CAD", "CAD conversion services", "engineering document support"],
  },
];

export function getTool(slug: string): SoftwareTool | undefined {
  return softwareTools.find((t) => t.slug === slug);
}
