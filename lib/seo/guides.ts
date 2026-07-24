import type { Guide } from "./schema";

/**
 * Long-form pillar guides — original, authority content that earns links and AI
 * citations. Each opens with an extractable key takeaway (speakable), covers a
 * topic in depth, and links into the relevant services and glossary terms.
 */
export const guides: Guide[] = [
  {
    slug: "make-ready-engineering-guide",
    title: "Make-Ready Engineering: A Complete Guide",
    metaTitle: "Make-Ready Engineering: A Complete Guide | SPANEX",
    metaDescription:
      "What make-ready engineering is, when it's required, how pole loading analysis drives it, and how to produce buildable make-ready efficiently.",
    dek: "From fail flag to buildable fix — how make-ready is determined, designed and delivered.",
    keyTakeaway:
      "Make-ready is the engineering and construction work needed to prepare a utility pole for a new attachment. It is determined from a structural pole loading analysis, and a useful result is always a specific, buildable set of changes — transfers, re-tensioning, guying or replacement — not just a pass/fail flag.",
    datePublished: "2026-01-20",
    readMinutes: 10,
    category: "Design",
    keywords: ["make ready engineering", "make ready design", "pole make ready", "make ready guide"],
    sections: [
      {
        heading: "What make-ready actually is",
        paragraphs: [
          "Make-ready is the work required to prepare an existing pole so a new attachment — most often a telecom or fibre line — can be added safely and to code. It sits between two parties: the pole owner (usually the electric utility) and the attacher who wants space on the structure.",
          "The term covers both the engineering (deciding what has to change) and the construction (doing it). The engineering half is where design firms add value: turning a field survey and a structural model into a clear, buildable scope of changes.",
        ],
      },
      {
        heading: "When make-ready is required",
        paragraphs: [
          "Make-ready is triggered whenever a new attachment would violate a clearance or overload the structure. Adding a fibre line changes the pole's loading, its mid-span sag and the vertical separation between communication and power — any of which can push the structure out of compliance with the governing code.",
        ],
        bullets: [
          "The pole fails a load case once the new attachment is added",
          "Vertical or mid-span clearances would be violated",
          "Climbing or working space would be compromised",
          "Existing attachments need to be transferred to make room",
        ],
      },
      {
        heading: "How pole loading analysis drives it",
        paragraphs: [
          "Every make-ready determination starts from a structural analysis. The pole, its framing, existing attachments, guys and anchors are modelled — typically in SPIDAcalc or PoleForeman — and checked against the load cases and safety factors the governing code requires (NESC in the US, CSA C22.3 in Canada).",
          "Where the structure passes with the new attachment, no make-ready is needed. Where it fails, the model becomes the tool for designing the fix: you test transfers, re-tensioning, added guys or a heavier pole until the structure passes, then write that up as the make-ready.",
        ],
      },
      {
        heading: "What a good make-ready deliverable contains",
        paragraphs: [
          "A make-ready that a crew can build — rather than a report that bounces back with questions — has a few consistent ingredients:",
        ],
        bullets: [
          "A specific action per structure (transfer, re-tension, guy/anchor change, or replacement)",
          "The framing and clearances that the action achieves",
          "Cost line items for estimating",
          "An assumption log for every value that wasn't confirmed in the field",
        ],
      },
      {
        heading: "Doing make-ready at scale",
        paragraphs: [
          "Attachment programs run into the thousands of poles, so the real challenge is consistency, not any single structure. That means standardised inputs (one client file, one set of load cases), an independent review of every result, and a defect register so recurring issues are designed out rather than re-explained.",
          "Handled that way, make-ready becomes a repeatable production line: field data in, buildable make-ready out, with a quality record attached to every structure.",
        ],
      },
      {
        heading: "Documentation that survives the handoff",
        paragraphs: [
          "Make-ready fails in the field for a boring reason more often than a structural one: the crew can't tell what the engineer intended. A change that reads clearly on the desk becomes ambiguous on the pole when the assumptions behind it aren't written down.",
          "The fix is documentation that travels with the work. Every value that wasn't confirmed in the field is logged as an assumption, so the pole owner's reviewer can see exactly what was taken on faith and challenge it before construction rather than after. A per-structure change list ties each action back to the load case that required it, and photographs or sketches remove any doubt about which attachment moves where.",
          "This is also what makes a make-ready program auditable. When a regulator or a client asks why a pole was replaced rather than guyed, the answer is already in the record — not reconstructed from memory months later.",
        ],
      },
    ],
    faqs: [
      { q: "Who pays for make-ready?", a: "Typically the attacher requesting space on the pole pays for the make-ready its attachment requires, though arrangements vary by jurisdiction and agreement." },
      { q: "How long does make-ready take?", a: "The engineering can be fast — small runs in days — but the overall timeline depends on field survey, pole-owner review and construction scheduling." },
      { q: "Is make-ready the same as a pole replacement?", a: "No. Replacement is one possible make-ready outcome; most make-ready is lighter — transfers, re-tensioning or added guying — with replacement used only when nothing else clears the structure." },
    ],
    relatedServices: [
      { label: "Make-ready engineering", href: "/services/make-ready-design" },
      { label: "Joint-use & pole loading", href: "/services/joint-use-pole-loading" },
      { label: "SPIDAcalc analysis", href: "/services/spidacalc-analysis" },
    ],
    relatedTermSlugs: ["make-ready", "pole-loading", "joint-use", "clearance"],
  },
  {
    slug: "spidacalc-pole-loading-guide",
    title: "SPIDAcalc Pole Loading: From Client File to Sealed Report",
    metaTitle: "SPIDAcalc Pole Loading Guide | SPANEX Engineering",
    metaDescription:
      "How to run SPIDAcalc pole loading analysis reliably at scale — client files, load cases, make-ready and review — for NESC and CSA distribution work.",
    dek: "The setup and discipline that turn SPIDAcalc from a bottleneck into a repeatable production line.",
    keyTakeaway:
      "Reliable SPIDAcalc pole loading depends less on modelling speed than on consistent setup: loading the utility's client file, load cases and pass/fail thresholds once and reusing them, then running an independent review on every structure so results are comparable and defensible.",
    datePublished: "2026-02-10",
    readMinutes: 9,
    category: "Analysis",
    keywords: ["SPIDAcalc pole loading", "SPIDAcalc guide", "pole loading analysis", "NESC pole loading"],
    sections: [
      {
        heading: "Start from the client file, not defaults",
        paragraphs: [
          "The single biggest source of rework in SPIDAcalc is inconsistent setup. Loading district, safety factors, cable libraries and pass/fail thresholds should come from the utility's SPIDAcalc client file, loaded once and applied across the entire run.",
          "Standardising the inputs is what makes results comparable across hundreds of poles and defensible when a reviewer or a regulator asks how a number was reached.",
        ],
      },
      {
        heading: "Model the cases that govern",
        paragraphs: [
          "For most distribution work the governing cases are the NESC loading district (Heavy, Medium or Light) or the applicable CSA load cases, plus the relevant wind, ice and attachment cases. Modelling every structure against the same case set keeps the analysis auditable and the results directly comparable.",
        ],
        bullets: [
          "NESC Heavy / Medium / Light district loading (or CSA equivalents)",
          "Combined power and communication attachment cases",
          "Wind and ice cases per the governing code",
          "Guying and anchor conditions as installed or proposed",
        ],
      },
      {
        heading: "Capacity, then make-ready",
        paragraphs: [
          "The first output is a capacity result per structure — a utilisation percentage against the pass/fail threshold. That answers whether the pole works as-is.",
          "Where a pole fails, the same model is used to design the fix. You test transfers, re-tensioning, added guys or a heavier pole until it passes, and the buildable change becomes the make-ready. A fail flag on its own isn't a deliverable; the make-ready is.",
        ],
      },
      {
        heading: "Where turnaround really comes from",
        paragraphs: [
          "Speed at scale isn't about modelling any single pole faster — it's about not redoing work. Consistent inputs, a logged assumption for every missing field value, and an independent review step remove the back-and-forth that quietly doubles a schedule.",
          "The review matters most: the person who checks a structure should not be the person who modelled it. That single control catches the errors that otherwise surface after delivery.",
        ],
      },
      {
        heading: "Reading a failure, not just flagging it",
        paragraphs: [
          "A utilisation percentage tells you a pole fails; it doesn't tell you why, and the why determines the fix. A structure that fails on groundline moment under an ice case is a different problem from one that fails on buckling or on a guy that's under-tensioned, and each points to a different make-ready.",
          "Reading the failure means looking at which component governs and under which case. A pole failing narrowly on one wind case may only need a re-tension or a single transfer; one failing on multiple cases with high utilisation is usually a replacement. Calling that distinction correctly is the difference between a make-ready a crew can build cheaply and one that over-specifies.",
          "This is why the analyst's judgement matters as much as the software. SPIDAcalc computes the numbers accurately, but deciding the most economical buildable fix — and confirming it in the model before it ships — is engineering work, not data entry.",
        ],
      },
    ],
    faqs: [
      { q: "Can SPIDAcalc results be sealed?", a: "The analysis supports a licensed professional's review and seal; the seal is applied by your engineer, who retains professional responsibility." },
      { q: "Do you need a client file to start?", a: "It's strongly preferred. Without the utility's client file, load cases and thresholds have to be assumed, which makes results harder to compare and defend." },
      { q: "SPIDAcalc or PoleForeman?", a: "Both are valid; the choice follows the utility's standard. The workflow — consistent inputs, buildable make-ready, independent review — is the same either way." },
    ],
    relatedServices: [
      { label: "SPIDAcalc analysis", href: "/services/spidacalc-analysis" },
      { label: "Make-ready engineering", href: "/services/make-ready-design" },
      { label: "Pole line design", href: "/services/pole-line-design" },
    ],
    relatedTermSlugs: ["spidacalc", "pole-loading", "load-case", "safety-factor", "nesc"],
  },
  {
    slug: "gis-to-cad-conversion-guide",
    title: "GIS-to-CAD Conversion for Utilities, Done Right",
    metaTitle: "GIS-to-CAD Conversion Guide for Utilities | SPANEX",
    metaDescription:
      "How to convert GIS data to CAD for distribution design without losing attributes or accuracy — coordinate systems, attribute mapping and QA.",
    dek: "Why most GIS-to-CAD conversions lose the data that mattered, and how to keep it.",
    keyTakeaway:
      "A good GIS-to-CAD conversion fixes the project coordinate system first, reprojects every source to it, and maps GIS attributes onto the CAD layer schema — so parcel IDs, asset types and ownership survive the conversion instead of being flattened to bare geometry.",
    datePublished: "2026-03-02",
    readMinutes: 8,
    category: "GIS & Data",
    keywords: ["GIS to CAD conversion", "gis to autocad", "GIS to DWG", "utility GIS conversion"],
    sections: [
      {
        heading: "Agree on one coordinate system first",
        paragraphs: [
          "Most conversion problems trace back to mismatched datums. Before any data is moved, the project coordinate system is fixed, and every source — parcel fabric, survey, GIS export — is reprojected to it. Everything downstream inherits that one decision.",
          "Skip this step and features drift by metres, which is invisible on screen but fatal to a construction drawing.",
          "The reprojection decision also has to be recorded, not just made. The source coordinate system of every input, the target the project uses, and the transformation applied between them belong in the project record — because a conversion nobody can reproduce is a conversion nobody can trust. When a discrepancy surfaces later, that record is what lets you find whether the fault was in the source data or in the move.",
        ],
      },
      {
        heading: "Preserve attributes, don't flatten them",
        paragraphs: [
          "Exporting GIS geometry to DWG and stopping there throws away the data that made the GIS useful. The attributes — parcel identifiers, asset types, ownership, phase — should be mapped into the CAD layer schema so they remain queryable in the drawing.",
        ],
        bullets: [
          "Map GIS attributes to the client's CAD layer standard",
          "Keep parcel and asset identifiers intact",
          "Reconcile overlaps and gaps before drafting, not after",
          "Validate feature counts against the source",
        ],
      },
      {
        heading: "Make it repeatable",
        paragraphs: [
          "Conversions recur, so they should be built once and rerun. A tool such as FME lets you encode the reprojection, attribute mapping and QA as a workspace, so the next dataset runs the same way rather than being hand-converted from scratch.",
          "Repeatability is also what makes the QA defensible — the same checks run every time, and discrepancies show up immediately.",
        ],
      },
      {
        heading: "Landbase is where it lands",
        paragraphs: [
          "For distribution design, the converted data feeds the landbase — the survey-true base every sheet sits on. Right-of-way and easements belong in that base, so corridor and design work starts from an accurate legal and physical footprint rather than a rough sketch.",
        ],
      },
      {
        heading: "The pitfalls that cause silent errors",
        paragraphs: [
          "The dangerous conversion errors are the ones that look fine. Geometry lands on screen, the drawing opens, and nobody notices that something is subtly wrong until a crew is standing in the wrong place.",
          "Three recur often enough to check for by default. A datum or unit mismatch shifts everything by a consistent offset that's invisible without a control point to check against. Curved features exported as straight-line approximations lose accuracy on road alignments and easements. And multi-part or overlapping features collapse into single geometries, quietly dropping assets from the count.",
          "None of these announce themselves, so the defence is a QA step that runs regardless of whether anything looks wrong. Checking against a known survey point, reconciling feature counts, and spot-checking curves and boundaries takes minutes and catches the offsets and dropped assets that would otherwise reach a crew.",
        ],
        bullets: [
          "Validate against known survey control, not just visual overlay",
          "Confirm feature counts before and after conversion",
          "Check curve handling on roads, easements and boundaries",
          "Preserve, don't flatten, multi-part geometries",
        ],
      },
    ],
    faqs: [
      { q: "Can you convert both ArcGIS and QGIS data?", a: "Yes. Both are reconciled to the project coordinate system and mapped to your CAD layer schema; the source platform doesn't change the workflow." },
      { q: "Will attributes survive the conversion?", a: "Yes, when the conversion maps them to the CAD layer standard rather than exporting geometry alone." },
      { q: "How accurate is the result?", a: "As accurate as the sources once they're on a common datum — which is why fixing the coordinate system first is the critical step." },
    ],
    relatedServices: [
      { label: "GIS mapping & conversion", href: "/services/gis-mapping" },
      { label: "Landbase mapping", href: "/services/landbase-prep" },
      { label: "CAD conversion", href: "/services/cad-conversion" },
    ],
    relatedTermSlugs: ["gis-to-cad", "gis", "coordinate-system", "landbase", "dwg"],
  },
  {
    slug: "joint-use-pole-attachments-guide",
    title: "Joint-Use Pole Attachments: A Complete Guide",
    metaTitle: "Joint-Use Pole Attachments: Complete Guide | SPANEX",
    metaDescription:
      "How joint-use pole attachments work — clearances, combined loading, make-ready and the design workflow for telecom and fibre on shared structures.",
    dek: "Where communication attachers and pole owners share one structure — and one set of clearances.",
    keyTakeaway:
      "Joint-use design resolves the clearances and combined structural loading created when telecom or fibre attachments share a pole with power. Adding an attachment re-checks the whole structure under combined power-and-communication cases, and any failure returns buildable make-ready to the pole owner's standard.",
    datePublished: "2026-03-24",
    readMinutes: 9,
    category: "Design",
    keywords: ["joint use pole attachments", "joint use design", "telecom pole attachment", "fibre attachment"],
    sections: [
      {
        heading: "The clearances that govern",
        paragraphs: [
          "Joint-use design lives inside a clearance envelope: vertical separation between communication and power, mid-span sag, and climbing and working space. These distances are set by the governing code (NESC or CSA) and the distributor's attachment standard — not by preference — and every design has to satisfy them.",
        ],
      },
      {
        heading: "Model the whole structure, not just the new line",
        paragraphs: [
          "Adding a fibre line changes the entire structure's loading, not only its own. Joint-use analysis re-checks the pole under combined power and communication cases to confirm it still passes, because the new attachment interacts with everything already on the pole.",
          "The interaction is easy to underestimate. A new line adds wind and ice area, shifts the balance of tension on the pole, and changes the sag that sets mid-span clearance to the ground and to the conductors above it. A pole that carried its existing load comfortably can move out of compliance from a single attachment, which is why the whole structure is re-verified rather than the new line alone.",
        ],
        bullets: [
          "Vertical and mid-span clearance checks",
          "Combined power + communication loading",
          "Guying and anchor adequacy with the new load",
          "Make-ready where the structure no longer passes",
        ],
      },
      {
        heading: "From field data to design",
        paragraphs: [
          "Modern joint-use often starts from photo-based field collection (for example in Katapult Pro). That data is turned into attachment layouts, loading models and make-ready — so the design is grounded in what's actually on the pole, not an assumption.",
        ],
      },
      {
        heading: "Make-ready and remediation",
        paragraphs: [
          "When a pole fails with the new attachment, the deliverable is a buildable remediation — transfer, re-tension, guying or replacement — with the framing and clearances that clear it, packaged for the pole owner's review. That handoff is where a clean, well-documented design saves weeks of back-and-forth.",
        ],
      },
      {
        heading: "Why the agreement shapes the design",
        paragraphs: [
          "Joint-use design doesn't happen in a vacuum — it happens inside a pole-attachment agreement between the attacher and the pole owner. That agreement sets the rules the design has to follow: the attachment standard, who reviews and approves, how make-ready is scoped and costed, and how disputes over space are resolved.",
          "Two consequences follow for the design work. First, the design is drafted to the pole owner's standard, not a generic one, because it's the owner's reviewer who signs off. Second, the make-ready has to be costed at a line-item level, because that estimate is what the parties settle against. A design that ignores either of these is technically correct and commercially useless.",
        ],
      },
      {
        heading: "Delivering at program scale",
        paragraphs: [
          "A single joint-use pole is a small problem. A fibre build crossing thousands of shared structures is a production problem, and it's won or lost on consistency rather than on any one clever fix.",
          "That means the same client file and load cases applied across the whole run, a standard make-ready vocabulary so every crew reads the deliverables the same way, and an independent review on every structure before release. Handled that way, a large attachment program moves at a predictable rate with a quality record behind each pole — which is exactly what the pole owner's reviewer needs to approve in volume rather than one structure at a time.",
        ],
      },
    ],
    faqs: [
      { q: "Who owns the pole in joint-use?", a: "Usually the electric utility owns the pole; communication companies attach to it under a joint-use or pole-attachment agreement." },
      { q: "What triggers make-ready in joint-use?", a: "Any clearance violation or structural overload created by the new attachment — resolved with transfers, re-tensioning, guying or replacement." },
      { q: "Do you work from Katapult or other field data?", a: "Yes. Photo-based field data is turned into attachment design, loading and make-ready." },
    ],
    relatedServices: [
      { label: "Joint-use & pole loading", href: "/services/joint-use-pole-loading" },
      { label: "Telecom & fibre attachment design", href: "/services/telecom-attachment-design" },
      { label: "Make-ready engineering", href: "/services/make-ready-design" },
    ],
    relatedTermSlugs: ["joint-use", "clearance", "mid-span-sag", "make-ready", "pole-loading"],
  },
  {
    slug: "in-house-vs-outsourced-utility-drafting",
    title: "In-House vs Outsourced Utility Drafting: A Decision Guide",
    metaTitle: "In-House vs Outsourced Utility Drafting | SPANEX",
    metaDescription:
      "A structured way to compare in-house and outsourced utility drafting — total cost, turnaround, quality control and when each fits.",
    dek: "How to compare fixed drafting headcount against flexible offshore capacity, honestly.",
    keyTakeaway:
      "The fair comparison between in-house and outsourced utility drafting is total cost of ownership per delivered sheet, not hourly rate. In-house capacity is fixed and paid whether the queue is full or not; outsourced capacity flexes by the project — the right choice depends on how uneven your workload is and how well quality is controlled.",
    datePublished: "2026-04-14",
    readMinutes: 8,
    category: "Outsourcing",
    keywords: ["in-house vs outsourced drafting", "utility drafting outsourcing", "outsource CAD drafting", "engineering outsourcing"],
    sections: [
      {
        heading: "The cost you can see, and the cost you can't",
        paragraphs: [
          "In-house drafting has one obvious line item — salaries — and several that rarely make the comparison: recruiting and ramp time, software seats, downtime between project peaks, and the opportunity cost of licensed staff drafting instead of reviewing.",
          "A fair comparison is total cost of ownership per delivered sheet, not hourly rate. When the queue is uneven, a fixed team costs the same in a slow month as a busy one; an outsourced partner is paid for the work produced.",
        ],
      },
      {
        heading: "Turnaround and the time-zone effect",
        paragraphs: [
          "An offshore team working against your time zone converts overnight hours into throughput. Work handed off at the end of your day is drafted while your office is closed and waiting for review the next morning.",
          "The practical result is that your licensed staff spend their day reviewing and sealing rather than drafting from a cold start.",
        ],
      },
      {
        heading: "Protecting quality while you scale",
        paragraphs: [
          "The real risk in outsourcing is quality drift, and it's managed with structure, not hope: drafting to the client's CAD standard rather than a generic one, an independent lead review on every package, and an assumption log for every non-field value.",
        ],
        bullets: [
          "Draft to the client's CAD standard, never a generic one",
          "Independent review by someone who did not draw the work",
          "Assumption log and change list with every package",
        ],
      },
      {
        heading: "When each option fits",
        paragraphs: [
          "Keep highly interactive, field-coupled work with hourly design decisions in-house, where coordination is fastest. Send well-scoped production drafting and analysis — the work that clogs the queue — to a partner who can flex.",
          "Most teams land on a blend: a licensed in-house core that reviews and seals, and an outsourced production layer that absorbs volume. The question isn't in-house or outsourced; it's which work belongs where.",
        ],
      },
      {
        heading: "How to run a low-risk pilot",
        paragraphs: [
          "The way to judge an outsourcing partner isn't a proposal — it's a small, real package run under normal conditions. A good pilot is scoped tightly enough to evaluate honestly but real enough to be representative: a defined set of sheets or structures, your actual CAD standard, and a deadline that matters.",
          "Judge it on three things. Did the work come back to your standard, so it dropped into your set without rework? Was the package documented — change list, assumption log — so your reviewer could check it quickly rather than reverse-engineer it? And did questions get asked early, before drafting the wrong thing, rather than surfacing at delivery?",
          "A partner that clears a well-run pilot has shown the controls that matter at scale. One that needs the standard explained twice, or returns work your reviewer has to redraw, has told you what a thousand-sheet program would feel like — cheaply, before you commit to it.",
        ],
      },
    ],
    faqs: [
      { q: "Is outsourced drafting cheaper?", a: "It's usually more cost-effective on total cost per delivered sheet because you pay for work rather than idle capacity — but the bigger gains are flexibility and freeing licensed staff to review." },
      { q: "How is quality controlled offshore?", a: "By drafting to the client's standard, running an independent review on every package, and logging assumptions — the same controls a good in-house team uses." },
      { q: "Can we start small?", a: "Yes. A small pilot package is the standard way to judge quality before committing to more." },
    ],
    relatedServices: [
      { label: "AutoCAD drafting", href: "/services/autocad-drafting" },
      { label: "How we work", href: "/how-we-work" },
      { label: "Quality process", href: "/quality" },
    ],
    relatedTermSlugs: ["as-built", "sheet-set", "redline"],
  },
  {
    slug: "nesc-csa-loading-explained",
    title: "NESC and CSA Loading for Distribution Design, Explained",
    metaTitle: "NESC & CSA Loading Explained | SPANEX Engineering",
    metaDescription:
      "A plain-language explanation of NESC loading districts and CSA C22.3 load cases for distribution design — and how they drive pole loading analysis.",
    dek: "The load cases behind every structural check, in plain language.",
    keyTakeaway:
      "NESC (in the US) and CSA C22.3 (in Canada) define the load cases — combinations of wind, ice, temperature and tension — that a distribution structure must withstand. Pole loading analysis evaluates every pole against the applicable district or case and applies the code's safety factors to produce a defensible pass/fail result.",
    datePublished: "2026-05-05",
    readMinutes: 8,
    category: "Standards",
    keywords: ["NESC loading", "CSA C22.3", "NESC districts", "distribution loading standards"],
    sections: [
      {
        heading: "Why load cases exist",
        paragraphs: [
          "A distribution structure has to stand up not on an average day but on its worst one — a storm with wind, or a cold snap with ice on the conductors. Load cases are the codified versions of those worst days: defined combinations of wind, ice, temperature and conductor tension that a structure must withstand.",
        ],
      },
      {
        heading: "NESC loading districts (US)",
        paragraphs: [
          "In the United States, the NESC divides the country into loading districts — Heavy, Medium and Light — each with a prescribed combination of wind pressure and radial ice for the district's climate. The district that applies to a project sets the baseline load case for structural analysis.",
          "Districts are the floor, not the whole picture. Many territories add extreme-wind or extreme-ice cases on top of the district baseline, and the utility's own standard can require cases stricter than the code minimum. The governing case for a given structure is whichever combination is most severe once all of these are considered — which is why the analysis is driven by the utility's standard rather than the district label alone.",
        ],
        bullets: [
          "Heavy — the most severe ice-and-wind combination",
          "Medium — an intermediate combination",
          "Light — the least severe, for milder climates",
          "Plus extreme-wind and other special cases where required",
        ],
      },
      {
        heading: "CSA C22.3 load cases (Canada)",
        paragraphs: [
          "In Canada, CSA C22.3 (No. 1 for overhead, No. 7 for underground) performs the same role, defining the load cases and clearances distribution design must satisfy. The specific combinations reflect Canadian climate and practice, and provincial requirements can add context on top.",
        ],
      },
      {
        heading: "How the code drives the analysis",
        paragraphs: [
          "Whichever code applies, pole loading analysis models each structure and checks it against the governing load cases, applying the safety (strength) factors the code specifies so the result is conservative. A pole passes when its capacity exceeds the required load with those factors applied; otherwise it needs make-ready.",
          "Getting the district or case right, and applying the correct safety factors, is what makes an analysis defensible — which is why the utility's client file and standard, not software defaults, drive the work.",
        ],
      },
      {
        heading: "Where the two standards differ in practice",
        paragraphs: [
          "NESC and CSA do the same job, but a team that works both sides of the border can't treat them as interchangeable. The load combinations, the strength (safety) factors and the clearance tables carry different values, and a model set up for one will quietly produce the wrong answer under the other.",
          "The practical discipline is to never carry assumptions across the border. A Canadian project runs on CSA load cases and clearances with any provincial context layered on top; a US project runs on the applicable NESC district. The client file encodes which set applies, and the review step confirms the right one was used — because a pole that passes under the wrong standard has passed nothing at all.",
          "This is also why the governing code should be stated explicitly on the deliverable. A reviewer or regulator reading the analysis needs to see, without asking, which standard and which case governed each structure.",
        ],
      },
    ],
    faqs: [
      { q: "What's the difference between NESC and CSA?", a: "They're the equivalent governing standards for line design in the US (NESC) and Canada (CSA C22.3). Both define load cases, clearances and safety factors; the specific values differ." },
      { q: "How do I know which NESC district applies?", a: "It's set by the project's geographic location; the utility's standard specifies the district and any additional cases for its territory." },
      { q: "Do safety factors change the result?", a: "Yes — they set how much a structure's capacity must exceed its load, so applying the code's correct factors is essential to a valid pass/fail." },
    ],
    relatedServices: [
      { label: "SPIDAcalc analysis", href: "/services/spidacalc-analysis" },
      { label: "Overhead distribution design", href: "/services/overhead-distribution-design" },
      { label: "Pole line design", href: "/services/pole-line-design" },
    ],
    relatedTermSlugs: ["nesc", "csa-c22-3", "load-case", "safety-factor", "clearance"],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
