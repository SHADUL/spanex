/**
 * Blog engine content, as structured data (no MDX runtime needed — fully static,
 * SSR-friendly, zero client JS). Each post renders through app/blog/[slug].
 * Voice is value-framed and technical: no "cheap", no invented rates.
 */

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  dek: string;
  datePublished: string; // ISO
  readMinutes: number;
  category: string;
  keywords: string[];
  sections: BlogSection[];
}

export const posts: BlogPost[] = [
  {
    slug: "in-house-vs-outsourced-autocad-drafting-2026",
    title:
      "The True Cost of In-House vs. Outsourced AutoCAD Drafting for Electric Utilities in 2026",
    description:
      "A structured comparison of in-house and outsourced AutoCAD drafting for electric utilities — capacity, turnaround, quality control and total cost of ownership.",
    dek: "Fixed drafting headcount is easy to measure and hard to flex. Here is how to compare it honestly against cost-effective offshore support.",
    datePublished: "2026-01-14",
    readMinutes: 9,
    category: "Outsourcing",
    keywords: [
      "cost-effective AutoCAD drafting",
      "outsourced CAD drafting",
      "offshore utility drafting",
      "electric utility drafting",
    ],
    sections: [
      {
        heading: "The cost you can see, and the cost you can't",
        paragraphs: [
          "In-house drafting has an obvious line item — salaries — and several that rarely make the comparison: recruiting and ramp time, software seats, downtime between project peaks, and the opportunity cost of licensed staff drafting instead of reviewing.",
          "A fair comparison is total cost of ownership per delivered sheet, not hourly rate. When the queue is uneven, a fixed team is paid the same in a slow month as a busy one; an offshore partner is paid for the work produced.",
        ],
      },
      {
        heading: "Turnaround and the time-zone effect",
        paragraphs: [
          "Offshore production against your time zone converts overnight hours into throughput. Work handed off at the end of your day is drafted while your office is closed and waiting for review the next morning.",
          "The practical result is that your licensed staff spend their day reviewing and sealing rather than drafting from a cold start.",
        ],
      },
      {
        heading: "Protecting quality while you scale",
        paragraphs: [
          "The risk in any outsourcing decision is quality drift. It is managed with structure, not hope: an independent lead review on every package, an assumption log for every non-field value, and a defect register that designs recurring issues out.",
        ],
        bullets: [
          "Draft to the client CAD standard, never a generic one",
          "Independent review by someone who did not draw the work",
          "Assumption log and change list travel with every package",
        ],
      },
      {
        heading: "When outsourcing is the wrong call",
        paragraphs: [
          "Outsourcing is not a fit for every task. Highly interactive, field-coupled work with hourly design decisions can be slower to coordinate offshore. The strongest fit is well-scoped production drafting and analysis — exactly the work that clogs an in-house queue.",
        ],
      },
    ],
  },
  {
    slug: "mastering-spidacalc-nesc-pole-loading-turnaround",
    title:
      "Mastering SPIDAcalc: How to Automate NESC Pole Loading Calculations & Reduce Turnaround Time",
    description:
      "A practical guide to running SPIDAcalc pole loading to NESC standards efficiently — client files, load cases, make-ready and review at scale.",
    dek: "Consistent inputs and disciplined review turn SPIDAcalc from a bottleneck into a repeatable, fast production line.",
    datePublished: "2026-02-04",
    readMinutes: 8,
    category: "SPIDAcalc",
    keywords: [
      "SPIDAcalc analysis",
      "NESC pole loading calculations",
      "pole loading calculation service",
      "structural pole capacity analysis",
    ],
    sections: [
      {
        heading: "Start from the client file, not defaults",
        paragraphs: [
          "The single biggest source of rework in SPIDAcalc is inconsistent setup. Loading district, safety factors, cable libraries and pass/fail thresholds should come from the utility's SPIDAcalc client file, loaded once and reused across the run.",
          "Standardising inputs is what makes results comparable across hundreds of poles and defensible under review.",
        ],
      },
      {
        heading: "Model the cases that matter",
        paragraphs: [
          "For most distribution work the governing cases are the NESC Heavy, Medium or Light district loads plus the relevant wind and attachment cases. Modelling every structure to the same case set keeps the analysis auditable.",
        ],
        bullets: [
          "NESC Heavy / Medium / Light district loading",
          "Attachment and combined power + communication cases",
          "Wind and ice cases per the governing code",
        ],
      },
      {
        heading: "Make-ready that a crew can build",
        paragraphs: [
          "A failing pole is only useful information if it comes with a resolution. Every failure should return a specific make-ready — transfer, re-tension, guy or anchor change, or replacement — with framing called out so it can be estimated and built.",
        ],
      },
      {
        heading: "Where turnaround actually comes from",
        paragraphs: [
          "Speed at scale is not about modelling faster; it is about not re-doing work. Consistent inputs, an independent review step, and a logged assumption for every gap remove the back-and-forth that quietly doubles a schedule.",
        ],
      },
    ],
  },
  {
    slug: "landbase-mapping-gis-parcel-to-autocad",
    title:
      "Landbase Mapping Best Practices: Integrating GIS Parcel Data with Distribution Line AutoCAD Sets",
    description:
      "How to build a survey-true landbase from GIS parcel data and align it with distribution AutoCAD sets, without losing attributes or accuracy.",
    dek: "A drawing is only as accurate as the base beneath it. Landbase is where GIS accuracy and CAD precision have to agree.",
    datePublished: "2026-02-25",
    readMinutes: 7,
    category: "Landbase & GIS",
    keywords: [
      "landbase mapping",
      "GIS to AutoCAD conversion",
      "utility ROW mapping",
      "parcel data integration",
    ],
    sections: [
      {
        heading: "Agree on one coordinate system first",
        paragraphs: [
          "Most landbase problems trace back to mismatched datums. Before any conversion, the project coordinate system is fixed and every source — parcel fabric, survey, GIS export — is reprojected to it. Everything downstream inherits that decision.",
        ],
      },
      {
        heading: "Preserve attributes, don't flatten them",
        paragraphs: [
          "Converting GIS to DWG by exporting geometry alone throws away the data that made GIS useful. Attributes should be mapped into a CAD layer schema so parcel IDs, asset types and ownership survive the conversion.",
        ],
        bullets: [
          "Map GIS attributes to the CAD layer standard",
          "Keep parcel and ROW identifiers queryable",
          "Reconcile overlaps and gaps before drafting",
        ],
      },
      {
        heading: "Right-of-way is part of the base",
        paragraphs: [
          "For corridor design, right-of-way and easements belong in the landbase, not bolted on later. Drafting them into the base means clearance and alignment checks start from an accurate footprint.",
        ],
      },
    ],
  },
  {
    slug: "joint-use-fiber-telecom-pole-attachment-modeling",
    title:
      "Navigating Joint-Use Attachments: A Guide to Fiber & Telecom Pole Attachment Modeling",
    description:
      "A guide to modeling fibre and telecom pole attachments for joint-use — clearances, combined loading, and make-ready to the distributor standard.",
    dek: "Joint-use is where communication attachers and pole owners have to share one structure — and one set of clearances.",
    datePublished: "2026-03-18",
    readMinutes: 8,
    category: "Joint-Use",
    keywords: [
      "joint-use pole attachment",
      "telecom CAD drafting",
      "fibre attachment modeling",
      "NESC joint use",
    ],
    sections: [
      {
        heading: "The clearances that govern",
        paragraphs: [
          "Joint-use design lives inside a clearance envelope: vertical separation between communication and power, mid-span sag, and climbing and working space. These are set by the governing code and the distributor's attachment standard, not by preference.",
        ],
      },
      {
        heading: "Model combined loading, not just the new attachment",
        paragraphs: [
          "Adding a fibre line changes the whole structure's loading, not just its own. Attachment modeling has to re-check the pole under combined power and communication cases to confirm it still passes.",
        ],
        bullets: [
          "Vertical and mid-span clearance checks",
          "Combined power + communication loading",
          "Make-ready where the structure no longer passes",
        ],
      },
      {
        heading: "Make-ready and remediation",
        paragraphs: [
          "When a pole fails with the new attachment, the deliverable is a buildable remediation — transfer, re-tension, guying, or replacement — with the framing and clearances that clear it, packaged for the owner's review.",
        ],
      },
    ],
  },
  {
    slug: "why-global-utilities-outsource-distribution-design-india",
    title:
      "Why Global Utilities Are Outsourcing Distribution Design to India (Quality, Standards, and ROI)",
    description:
      "How global utilities use offshore distribution design in India for cost-effective, scalable production — and the quality controls that make it work.",
    dek: "Offshore distribution design has matured from a cost play into a capacity and quality strategy. Here is what changed.",
    datePublished: "2026-04-08",
    readMinutes: 9,
    category: "Outsourcing",
    keywords: [
      "India CAD outsourcing",
      "cost-effective utility drafting",
      "offshore distribution design",
      "quality assurance workflows",
    ],
    sections: [
      {
        heading: "From cost play to capacity strategy",
        paragraphs: [
          "The first wave of offshore drafting was about cost. The current one is about capacity: a way to absorb project peaks and clear backlogs without hiring, while keeping licensed review in-house.",
          "Cost-effectiveness remains real, but it is now a by-product of paying for delivered work rather than idle capacity — not a race to the lowest rate.",
        ],
      },
      {
        heading: "Standards adoption is the whole game",
        paragraphs: [
          "The offshore teams that succeed adopt the client's standard completely — CAD template, SPIDAcalc client file, load cases and code — rather than imposing their own. The deliverable should be indistinguishable from in-house work in everything but where it was produced.",
        ],
      },
      {
        heading: "The quality controls that make it work",
        paragraphs: [
          "Quality at distance is engineered with process: independent lead review, assumption logging, a defect register, and controlled data handling per client.",
        ],
        bullets: [
          "Independent review on every package",
          "Assumption log and revision history with each delivery",
          "Isolated, access-controlled project spaces",
        ],
      },
      {
        heading: "Measuring the ROI honestly",
        paragraphs: [
          "The return shows up in three places: lower total cost per delivered sheet, faster turnaround from time-zone overlap, and licensed staff freed to review and seal. Measured on those, offshore distribution design is a capacity decision as much as a cost one.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
