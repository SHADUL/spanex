import type { GlossaryTerm } from "./schema";

/**
 * Glossary / entity graph. Each term is the canonical definition on the site,
 * carries DefinedTerm schema, and cross-links to related terms and services —
 * building the entity graph that search engines and AI assistants resolve.
 * Definitions are original, concise and answer-first.
 */
const S = {
  spidacalc: { label: "SPIDAcalc analysis", href: "/services/spidacalc-analysis" },
  jointUse: { label: "Joint-use & pole loading", href: "/services/joint-use-pole-loading" },
  makeReady: { label: "Make-ready engineering", href: "/services/make-ready-design" },
  overhead: { label: "Overhead distribution design", href: "/services/overhead-distribution-design" },
  underground: { label: "Underground distribution design", href: "/services/underground-distribution-design" },
  autocad: { label: "AutoCAD drafting", href: "/services/autocad-drafting" },
  gis: { label: "GIS mapping", href: "/services/gis-mapping" },
  landbase: { label: "Landbase mapping", href: "/services/landbase-prep" },
  asbuilt: { label: "As-built drafting", href: "/services/as-built-drafting" },
  poleLine: { label: "Pole line design", href: "/services/pole-line-design" },
  cadConv: { label: "CAD conversion", href: "/services/cad-conversion" },
  telecom: { label: "Telecom & fibre attachment design", href: "/services/telecom-attachment-design" },
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "make-ready",
    term: "Make-Ready",
    category: "design",
    short:
      "Make-ready is the work needed to prepare a pole so a new attachment can be added safely.",
    definition:
      "Make-ready is the engineering and construction work required to prepare an existing utility pole for a new attachment — for example a telecom or fibre line. It can include transferring or re-tensioning existing conductors, adding guys or anchors, or replacing the pole entirely. Make-ready is determined from a structural (pole loading) analysis, and the result is a specific, buildable set of changes that clears the structure to code.",
    relatedTermSlugs: ["pole-loading", "joint-use", "guying", "clearance"],
    relatedServices: [S.makeReady, S.jointUse],
    keywords: ["make ready", "make ready engineering", "pole make ready"],
  },
  {
    slug: "joint-use",
    term: "Joint-Use",
    category: "design",
    short:
      "Joint-use is when a single pole carries both power and communication attachments owned by different parties.",
    definition:
      "Joint-use refers to a distribution pole shared by more than one party — typically the power utility that owns the pole plus one or more communication attachers (telecom or fibre). Joint-use design resolves the clearances, mid-span sag and structural loading created by the combined attachments, and produces the make-ready needed for each new attachment, to the pole owner's attachment standard and the governing clearance code.",
    relatedTermSlugs: ["make-ready", "clearance", "pole-loading", "mid-span-sag"],
    relatedServices: [S.jointUse, S.telecom],
    keywords: ["joint use", "joint use design", "pole attachment"],
  },
  {
    slug: "pole-loading",
    term: "Pole Loading Analysis",
    category: "structural",
    short:
      "Pole loading analysis checks whether a utility pole can structurally carry its attachments under code load cases.",
    definition:
      "Pole loading analysis is the structural verification of a distribution pole against the load cases required by the governing code (such as NESC or CSA). It models the pole, its attachments, guys and anchors, and checks capacity under combined wind, ice and tension loads. Tools such as SPIDAcalc or PoleForeman are used to compute a pass/fail result per structure, and any failure is resolved with make-ready.",
    relatedTermSlugs: ["spidacalc", "make-ready", "load-case", "safety-factor"],
    relatedServices: [S.spidacalc, S.jointUse],
    keywords: ["pole loading analysis", "pole loading calculation", "structural pole analysis"],
  },
  {
    slug: "spidacalc",
    term: "SPIDAcalc",
    category: "structural",
    short:
      "SPIDAcalc is a Bentley software tool used to model and analyse the structural loading of distribution poles.",
    definition:
      "SPIDAcalc is a structural analysis application (by Bentley) widely used by utilities to model distribution poles and verify their capacity under code load cases. It captures the pole, framing, attachments, guys and anchors, applies the loading district and safety factors from the utility's client file, and reports a pass/fail result per structure. Where a pole fails, the model supports designing the make-ready that clears it.",
    relatedTermSlugs: ["pole-loading", "nesc", "make-ready", "load-case"],
    relatedServices: [S.spidacalc, S.jointUse],
    keywords: ["SPIDAcalc", "SPIDAcalc analysis", "SPIDAcalc pole loading"],
  },
  {
    slug: "nesc",
    term: "NESC",
    category: "standards",
    short:
      "The NESC is the US National Electrical Safety Code governing the design and loading of overhead and underground lines.",
    definition:
      "The National Electrical Safety Code (NESC) is the standard governing the safe design, construction and maintenance of electric supply and communication lines in the United States. For distribution design it defines loading districts (Heavy, Medium and Light), clearance requirements and safety factors that pole loading analysis and make-ready must satisfy. Canadian work uses the equivalent CSA standards.",
    relatedTermSlugs: ["csa-c22-3", "pole-loading", "load-case", "clearance"],
    relatedServices: [S.spidacalc, S.overhead],
    keywords: ["NESC", "National Electrical Safety Code", "NESC loading district"],
  },
  {
    slug: "csa-c22-3",
    term: "CSA C22.3",
    category: "standards",
    short:
      "CSA C22.3 is the Canadian standard for overhead and underground electrical distribution systems.",
    definition:
      "CSA C22.3 is the Canadian Standards Association series governing overhead systems (No. 1) and underground systems (No. 7) for electrical utilities. It sets the load cases, clearances and construction requirements that distribution design in Canada must meet — the Canadian counterpart to the US NESC. Distribution design and pole loading for Canadian utilities is verified against the applicable CSA C22.3 requirements.",
    relatedTermSlugs: ["nesc", "clearance", "load-case", "overhead-distribution"],
    relatedServices: [S.overhead, S.underground],
    keywords: ["CSA C22.3", "Canadian electrical standard", "CSA overhead systems"],
  },
  {
    slug: "landbase",
    term: "Landbase",
    category: "gis",
    short:
      "A landbase is the survey-accurate base map of parcels, roads and assets that a distribution drawing is built on.",
    definition:
      "A landbase is the coordinate-true base map beneath a distribution design — property boundaries, road alignment, right-of-way and existing utility assets. It is assembled from parcel data, survey and GIS sources reconciled to one project datum. Because a drawing is only as accurate as the base beneath it, a clean landbase is where GIS accuracy and CAD precision have to agree.",
    relatedTermSlugs: ["row", "gis", "coordinate-system", "as-built"],
    relatedServices: [S.landbase, S.gis],
    keywords: ["landbase", "landbase mapping", "utility landbase"],
  },
  {
    slug: "as-built",
    term: "As-Built",
    category: "drafting",
    short:
      "An as-built is a record drawing updated to show what was actually constructed in the field.",
    definition:
      "An as-built (or record drawing) is a construction drawing revised to reflect what was actually built, incorporating field redlines and markups that differ from the original design. As-built drafting turns those field records into clean, revision-controlled drawings on the utility's CAD standard, closing out every change so the record set stays accurate for future work.",
    relatedTermSlugs: ["redline", "sheet-set", "landbase"],
    relatedServices: [S.asbuilt, S.autocad],
    keywords: ["as-built", "record drawing", "as-built drafting"],
  },
  {
    slug: "plan-and-profile",
    term: "Plan-and-Profile",
    category: "drafting",
    short:
      "Plan-and-profile drawings show a distribution line in both overhead (plan) and side (profile) views on one sheet.",
    definition:
      "Plan-and-profile is a drawing format that presents a distribution line in two coordinated views: a plan (overhead) view showing horizontal alignment and a profile (elevation) view showing grade and structure heights. It is a core construction drawing type for overhead and underground distribution, produced in AutoCAD to the utility's CAD standard.",
    relatedTermSlugs: ["sheet-set", "title-block", "overhead-distribution"],
    relatedServices: [S.autocad, S.overhead],
    keywords: ["plan and profile", "plan profile drawing", "distribution drawing"],
  },
  {
    slug: "guying",
    term: "Guying",
    category: "structural",
    short:
      "Guying uses tensioned guy wires and anchors to balance the loads on a pole and keep it stable.",
    definition:
      "Guying is the use of guy wires — tensioned cables running from the pole to a ground anchor — to counteract unbalanced loads such as line angles, dead-ends and heavy attachments. Correct guying and anchor lead are part of pole design and are verified in pole loading analysis; adding or re-tensioning guys is a common make-ready remedy.",
    relatedTermSlugs: ["anchor-lead", "pole-loading", "make-ready", "dead-end"],
    relatedServices: [S.overhead, S.poleLine],
    keywords: ["guying", "guy wire design", "pole guying"],
  },
  {
    slug: "anchor-lead",
    term: "Anchor Lead",
    category: "structural",
    short:
      "The anchor lead is the horizontal distance from a pole to its guy anchor, which sets the guy's effectiveness.",
    definition:
      "The anchor lead is the horizontal distance between the base of a pole and the point where its guy anchor is installed. It determines the angle of the guy wire and therefore how effectively the guy resists the pole's unbalanced load. Anchor lead is specified in guying design and checked in structural analysis.",
    relatedTermSlugs: ["guying", "pole-loading", "dead-end"],
    relatedServices: [S.overhead, S.poleLine],
    keywords: ["anchor lead", "guy anchor", "guy lead"],
  },
  {
    slug: "clearance",
    term: "Clearance",
    category: "standards",
    short:
      "Clearance is the minimum required separation between conductors, attachments, the ground and other objects.",
    definition:
      "Clearance is the minimum separation distance required by code between energised conductors, communication attachments, the ground, buildings and crossing lines. Vertical and mid-span clearances are set by NESC or CSA and must be maintained in distribution and joint-use design; resolving a clearance violation is a common driver of make-ready.",
    relatedTermSlugs: ["nesc", "csa-c22-3", "mid-span-sag", "joint-use"],
    relatedServices: [S.jointUse, S.overhead],
    keywords: ["clearance", "conductor clearance", "NESC clearance"],
  },
  {
    slug: "mid-span-sag",
    term: "Mid-Span Sag",
    category: "structural",
    short:
      "Mid-span sag is how far a conductor droops between two poles, which affects clearance to the ground and other lines.",
    definition:
      "Mid-span sag is the vertical drop of a conductor at the middle of a span between two support poles. Sag changes with temperature, tension and loading, and it governs mid-span clearance to the ground, to crossings and between attachments. Design and joint-use analysis check mid-span sag to confirm clearances are met across the span, not just at the poles.",
    relatedTermSlugs: ["clearance", "span", "joint-use", "conductor"],
    relatedServices: [S.jointUse, S.overhead],
    keywords: ["mid-span sag", "conductor sag", "sag clearance"],
  },
  {
    slug: "framing",
    term: "Framing",
    category: "design",
    short:
      "Framing is the arrangement of crossarms, insulators and hardware that positions conductors on a pole.",
    definition:
      "Framing is the configuration of crossarms, brackets, insulators and hardware on a pole that holds the conductors in position and maintains their spacing and clearances. Standard framing types are defined in a utility's construction standard, and the correct framing is selected and detailed in distribution design and make-ready.",
    relatedTermSlugs: ["crossarm", "insulator", "clearance", "tangent-pole"],
    relatedServices: [S.overhead, S.poleLine],
    keywords: ["framing", "pole framing", "distribution framing"],
  },
  {
    slug: "tangent-pole",
    term: "Tangent Pole",
    category: "structural",
    short:
      "A tangent pole is a straight-line pole carrying conductors with no significant change in direction.",
    definition:
      "A tangent pole supports the line where it runs straight, carrying the conductors without a significant line angle. Because there is little unbalanced horizontal load, tangent structures generally need less guying than angle or dead-end poles — a distinction that matters in pole loading analysis and framing selection.",
    relatedTermSlugs: ["dead-end", "framing", "pole-loading"],
    relatedServices: [S.poleLine, S.spidacalc],
    keywords: ["tangent pole", "tangent structure", "straight line pole"],
  },
  {
    slug: "dead-end",
    term: "Dead-End Pole",
    category: "structural",
    short:
      "A dead-end pole terminates conductors and carries the full one-sided tension, requiring guying or heavier structure.",
    definition:
      "A dead-end pole is where conductors terminate or the line ends, so the structure carries the full conductor tension from one side only. This large unbalanced load must be resisted by guying, anchoring or a heavier structure, and dead-ends are a key case in pole loading analysis and guying design.",
    relatedTermSlugs: ["tangent-pole", "guying", "anchor-lead", "pole-loading"],
    relatedServices: [S.poleLine, S.spidacalc],
    keywords: ["dead-end pole", "dead end structure", "line termination pole"],
  },
  {
    slug: "conductor",
    term: "Conductor",
    category: "design",
    short:
      "A conductor is the wire that carries electrical current along an overhead or underground distribution line.",
    definition:
      "A conductor is the current-carrying wire of a distribution line, typically aluminium or copper, either bare overhead or insulated underground. Conductor type, size and tension drive sag, clearance and structural loading, so conductor data is fundamental to distribution design and pole loading analysis.",
    relatedTermSlugs: ["mid-span-sag", "span", "clearance", "overhead-distribution"],
    relatedServices: [S.overhead, S.underground],
    keywords: ["conductor", "distribution conductor", "overhead conductor"],
  },
  {
    slug: "crossarm",
    term: "Crossarm",
    category: "design",
    short:
      "A crossarm is the horizontal member on a pole that supports insulators and spaces the conductors.",
    definition:
      "A crossarm is the horizontal member mounted near the top of a pole that carries the insulators and maintains the required spacing between conductors. Crossarm type and position are part of the framing defined in a utility's construction standard and are detailed in distribution drawings.",
    relatedTermSlugs: ["framing", "insulator", "conductor"],
    relatedServices: [S.overhead, S.autocad],
    keywords: ["crossarm", "pole crossarm", "distribution crossarm"],
  },
  {
    slug: "insulator",
    term: "Insulator",
    category: "design",
    short:
      "An insulator isolates an energised conductor from the pole and hardware while supporting it mechanically.",
    definition:
      "An insulator is the component that electrically isolates a conductor from the grounded pole and hardware while holding it in place. Insulator type and rating are selected for the system voltage and are shown in framing details on distribution drawings.",
    relatedTermSlugs: ["crossarm", "framing", "conductor"],
    relatedServices: [S.overhead, S.autocad],
    keywords: ["insulator", "distribution insulator", "pole insulator"],
  },
  {
    slug: "span",
    term: "Span",
    category: "structural",
    short:
      "A span is the length of line between two adjacent support poles.",
    definition:
      "A span is the section of conductor between two adjacent support structures. Span length, together with conductor tension and loading, determines mid-span sag and the loads transferred to each pole, making it a basic input to distribution design and pole loading analysis.",
    relatedTermSlugs: ["mid-span-sag", "conductor", "pole-loading"],
    relatedServices: [S.overhead, S.spidacalc],
    keywords: ["span", "line span", "pole span"],
  },
  {
    slug: "load-case",
    term: "Load Case",
    category: "standards",
    short:
      "A load case is a defined combination of wind, ice and tension used to check a structure against code.",
    definition:
      "A load case is a specific combination of loads — wind, ice, temperature and conductor tension — that a structure must withstand under the governing code. NESC loading districts and CSA load cases define these combinations, and pole loading analysis evaluates each structure against every applicable load case to produce a pass/fail result.",
    relatedTermSlugs: ["nesc", "csa-c22-3", "pole-loading", "safety-factor"],
    relatedServices: [S.spidacalc, S.overhead],
    keywords: ["load case", "loading case", "NESC load case"],
  },
  {
    slug: "safety-factor",
    term: "Safety Factor",
    category: "standards",
    short:
      "A safety factor is the margin by which a structure's capacity must exceed its expected load.",
    definition:
      "A safety factor (or strength factor) is the required margin between a structure's capacity and the load it must carry under a given load case. Codes such as NESC and CSA specify safety factors for different components and conditions, and pole loading analysis applies them so results are conservative and defensible.",
    relatedTermSlugs: ["load-case", "pole-loading", "nesc"],
    relatedServices: [S.spidacalc],
    keywords: ["safety factor", "strength factor", "pole safety factor"],
  },
  {
    slug: "row",
    term: "Right-of-Way (ROW)",
    category: "gis",
    short:
      "A right-of-way is the legal corridor of land a utility has the right to use for its lines.",
    definition:
      "A right-of-way (ROW) is the strip of land, secured by easement or ownership, that a utility has the legal right to use for its distribution or transmission lines. ROW and easement alignment are drafted into the landbase so corridor design starts from an accurate legal footprint.",
    relatedTermSlugs: ["landbase", "easement", "gis"],
    relatedServices: [S.landbase, S.gis],
    keywords: ["right of way", "ROW", "utility easement corridor"],
  },
  {
    slug: "easement",
    term: "Easement",
    category: "gis",
    short:
      "An easement is a legal right to use part of another party's land, such as for a utility line.",
    definition:
      "An easement is a legal right allowing a utility to use a defined portion of privately-owned land for its facilities — for example a pole line or underground cable. Easement boundaries are part of the landbase and right-of-way data used in corridor and distribution design.",
    relatedTermSlugs: ["row", "landbase"],
    relatedServices: [S.landbase],
    keywords: ["easement", "utility easement", "land easement"],
  },
  {
    slug: "gis",
    term: "GIS (Geographic Information System)",
    category: "gis",
    short:
      "GIS is software for capturing, storing and analysing spatial data such as utility assets and parcels.",
    definition:
      "A Geographic Information System (GIS) stores and analyses geographic data — utility assets, networks, parcels and roads — with their locations and attributes. In distribution design, GIS platforms such as ArcGIS and QGIS supply the asset and parcel data that is reconciled into a coordinate-true landbase and, through GIS-to-CAD conversion, into design drawings.",
    relatedTermSlugs: ["landbase", "coordinate-system", "geodatabase", "dwg"],
    relatedServices: [S.gis, S.landbase],
    keywords: ["GIS", "geographic information system", "utility GIS"],
  },
  {
    slug: "gis-to-cad",
    term: "GIS-to-CAD Conversion",
    category: "gis",
    short:
      "GIS-to-CAD conversion turns spatial GIS data into coordinate-true CAD drawings while preserving attributes.",
    definition:
      "GIS-to-CAD conversion transforms geographic data from a GIS (such as ArcGIS or QGIS) into CAD formats like DWG or DGN for design. Done properly, it aligns everything to the project coordinate system and maps GIS attributes onto the CAD layer schema, so data survives the conversion rather than being flattened to bare geometry.",
    relatedTermSlugs: ["gis", "dwg", "coordinate-system", "landbase"],
    relatedServices: [S.gis, S.cadConv],
    keywords: ["GIS to CAD", "GIS to DWG conversion", "gis to autocad"],
  },
  {
    slug: "dwg",
    term: "DWG",
    category: "drafting",
    short:
      "DWG is the native drawing file format of AutoCAD, the standard for utility CAD deliverables.",
    definition:
      "DWG is the binary drawing file format used natively by AutoCAD and the most common format for utility CAD deliverables. Distribution drawings, sheet sets and as-builts are produced and exchanged as DWG files built to the client's layering, blocks and title-block standard.",
    relatedTermSlugs: ["dgn", "xref", "title-block", "sheet-set"],
    relatedServices: [S.autocad, S.cadConv],
    keywords: ["DWG", "DWG format", "AutoCAD DWG"],
  },
  {
    slug: "dgn",
    term: "DGN",
    category: "drafting",
    short:
      "DGN is the native drawing format of Bentley MicroStation, used by some utilities instead of DWG.",
    definition:
      "DGN is the drawing file format used natively by Bentley MicroStation. Utilities standardized on Bentley maintain their drawings as DGN with levels, cells and seed files; work is drafted to those standards and converted between DGN and DWG as needed.",
    relatedTermSlugs: ["dwg", "xref"],
    relatedServices: [S.cadConv, S.autocad],
    keywords: ["DGN", "MicroStation DGN", "DGN format"],
  },
  {
    slug: "xref",
    term: "Xref (External Reference)",
    category: "drafting",
    short:
      "An xref is a drawing referenced into another so shared content stays consistent across sheets.",
    definition:
      "An external reference (xref) is a CAD drawing attached into another drawing so its content — such as a landbase or title block — is displayed and updated from one source. Correct xref structure is part of drafting to a client CAD standard and keeps large sheet sets consistent.",
    relatedTermSlugs: ["dwg", "sheet-set", "title-block", "landbase"],
    relatedServices: [S.autocad],
    keywords: ["xref", "external reference", "CAD xref"],
  },
  {
    slug: "title-block",
    term: "Title Block",
    category: "drafting",
    short:
      "A title block is the standardized border and information panel on every drawing sheet.",
    definition:
      "A title block is the bordered panel on a drawing sheet carrying the project name, sheet number, revision, scale and approvals. Utilities define a title-block template as part of their CAD standard, and drafting conforms every sheet to it so the set is consistent and record-ready.",
    relatedTermSlugs: ["sheet-set", "dwg", "xref"],
    relatedServices: [S.autocad, S.asbuilt],
    keywords: ["title block", "drawing title block", "CAD title block"],
  },
  {
    slug: "sheet-set",
    term: "Sheet Set",
    category: "drafting",
    short:
      "A sheet set is the complete, indexed collection of drawings that make up a construction package.",
    definition:
      "A sheet set is the full, ordered collection of drawings for a project — plan-and-profile, details, notes and index — assembled into a construction or permit package. Sheet set setup, indexing and transmittals are part of drafting production so the package is complete and submission-ready.",
    relatedTermSlugs: ["plan-and-profile", "title-block", "transmittal"],
    relatedServices: [S.autocad],
    keywords: ["sheet set", "drawing set", "construction sheet set"],
  },
  {
    slug: "transmittal",
    term: "Transmittal",
    category: "drafting",
    short:
      "A transmittal is the formal record of what drawings and documents were delivered, and when.",
    definition:
      "A transmittal is the cover record listing the drawings and documents delivered in a package, with revision and date, so both parties have a clear account of what was issued. Each SPANEX deliverable is packaged with a transmittal and change list for review and record.",
    relatedTermSlugs: ["sheet-set", "redline", "as-built"],
    relatedServices: [S.autocad],
    keywords: ["transmittal", "drawing transmittal", "engineering transmittal"],
  },
  {
    slug: "redline",
    term: "Redline",
    category: "drafting",
    short:
      "A redline is a markup showing corrections or field changes to be incorporated into a drawing.",
    definition:
      "A redline is a marked-up drawing — traditionally in red — showing corrections, revisions or field changes to be incorporated. Redlines from review or from construction are incorporated into clean, revision-controlled drawings and as-builts, with every change closed out in the change list.",
    relatedTermSlugs: ["as-built", "sheet-set", "transmittal"],
    relatedServices: [S.asbuilt, S.autocad],
    keywords: ["redline", "drawing redline", "redline markup"],
  },
  {
    slug: "coordinate-system",
    term: "Coordinate System",
    category: "gis",
    short:
      "A coordinate system defines how positions on the earth are mapped to coordinates in a drawing or GIS.",
    definition:
      "A coordinate system (with its datum and projection) defines how real-world positions are represented as coordinates in a drawing or GIS. Fixing the project coordinate system first — and reprojecting every source to it — is what keeps landbase, GIS and CAD data aligned through conversion.",
    relatedTermSlugs: ["landbase", "gis", "gis-to-cad"],
    relatedServices: [S.landbase, S.gis],
    keywords: ["coordinate system", "datum", "projection GIS"],
  },
  {
    slug: "geodatabase",
    term: "Geodatabase",
    category: "gis",
    short:
      "A geodatabase is a structured database that stores GIS features, attributes and relationships.",
    definition:
      "A geodatabase is the database format used by GIS (notably Esri) to store spatial features, their attributes, domains and relationships. Utility asset editing and capture are often performed directly in the geodatabase, following the client's editing rules and coordinate system.",
    relatedTermSlugs: ["gis", "coordinate-system", "gis-to-cad"],
    relatedServices: [S.gis],
    keywords: ["geodatabase", "GIS geodatabase", "Esri geodatabase"],
  },
  {
    slug: "overhead-distribution",
    term: "Overhead Distribution",
    category: "design",
    short:
      "Overhead distribution carries power on poles and conductors above ground.",
    definition:
      "Overhead distribution is the part of the electrical network carried on poles and overhead conductors. Its design covers framing, guying, conductor selection and clearances, verified by pole loading analysis and drafted as construction drawings to the utility's standard and the governing code.",
    relatedTermSlugs: ["underground-distribution", "conductor", "framing", "pole-loading"],
    relatedServices: [S.overhead, S.poleLine],
    keywords: ["overhead distribution", "overhead distribution design", "overhead line design"],
  },
  {
    slug: "underground-distribution",
    term: "Underground Distribution",
    category: "design",
    short:
      "Underground distribution carries power through buried cables, ducts and vaults.",
    definition:
      "Underground distribution is the part of the network built below grade using cables, duct banks, vaults and handholes. Its design covers duct and vault layouts, cable selection and overhead-to-underground transitions, drafted as construction drawings to the utility's standard (CSA C22.3 No. 7 / NESC as applicable).",
    relatedTermSlugs: ["overhead-distribution", "conductor", "landbase"],
    relatedServices: [S.underground],
    keywords: ["underground distribution", "underground utility design", "duct bank design"],
  },
];

export function getTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}
