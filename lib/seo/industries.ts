import type { Industry } from "./schema";

/**
 * Industry vertical pages. Each maps to distinct services/pain points so content
 * genuinely differs across verticals (Quality Gate).
 */
export const industries: Industry[] = [
  {
    slug: "electric-utilities",
    name: "Electric Utilities",
    metaTitle: "Distribution Design Support for Electric Utilities | SPANEX",
    metaDescription:
      "Outsourced distribution design and drafting for electric utilities — overhead and underground design, SPIDAcalc, make-ready and construction packages to your standard.",
    tagline: "Production design for electric distribution",
    intro:
      "Electric utilities and their engineering partners use SPANEX to absorb distribution design and drafting volume without adding headcount. We work to your construction standard and the governing code, and your licensed staff review and seal.",
    buyerRoles: ["Distribution design managers", "Engineering managers", "Project managers", "Standards engineers"],
    painPoints: [
      "Design queues outpacing in-house capacity",
      "Licensed staff drafting instead of reviewing",
      "Uneven project peaks that don't justify hiring",
      "Construction packages needed on tight timelines",
    ],
    services: [
      "Overhead and underground distribution design",
      "SPIDAcalc pole loading and make-ready",
      "AutoCAD construction packages",
      "GIS and landbase preparation",
      "As-built and permit drawings",
    ],
    standards: ["CSA C22.3", "NESC", "Distributor construction standards", "Your CAD standard"],
    faqs: [
      {
        q: "Do you work to our construction standard?",
        a: "Yes. Your construction standard, CAD template and load cases govern every deliverable; we adopt yours, not ours.",
      },
      {
        q: "Who retains professional responsibility?",
        a: "Your licensed professional. We provide production design and drafting under your direction and review; you seal the work.",
      },
      {
        q: "Can you scale for storm or backlog surges?",
        a: "Yes — we scale a run up or down by the project so you can clear peaks without hiring.",
      },
    ],
    keywords: ["electric utility distribution design", "distribution design services", "utility engineering outsourcing"],
  },
  {
    slug: "telecom",
    name: "Telecom",
    metaTitle: "Telecom Pole Attachment & CAD Design Support | SPANEX",
    metaDescription:
      "Telecom attachment design, joint-use pole loading and CAD drafting for communication attachers and their engineering partners.",
    tagline: "Attachment design for communication networks",
    intro:
      "Telecom attachers and their partners use SPANEX for pole attachment layouts, joint-use loading and make-ready, to the governing distributor's attachment standard.",
    buyerRoles: ["OSP engineering managers", "Permitting leads", "Construction managers"],
    painPoints: [
      "Large attachment volumes across many pole owners",
      "Varying attachment standards by jurisdiction",
      "Make-ready coordination with pole owners",
    ],
    services: [
      "Pole attachment layouts",
      "Joint-use pole loading (SPIDAcalc / PoleForeman)",
      "Make-ready determination",
      "Telecom CAD drafting",
    ],
    standards: ["NESC joint-use clearances", "Distributor attachment standards"],
    faqs: [
      {
        q: "Do you work to each pole owner's attachment standard?",
        a: "Yes. The governing distributor's attachment standard and clearance code drive each design.",
      },
      {
        q: "Can you produce make-ready for failing structures?",
        a: "Yes — buildable make-ready with framing and clearances called out.",
      },
    ],
    keywords: ["telecom pole attachment", "telecom CAD drafting", "joint use design"],
  },
  {
    slug: "fiber-network",
    name: "Fiber Network",
    metaTitle: "Fibre Network Design & OSP Support | SPANEX Engineering",
    metaDescription:
      "Fibre route design, pole attachment and OSP documentation support for fibre builders and network operators.",
    tagline: "Fibre routing and OSP support",
    intro:
      "Fibre builders use SPANEX for route design, pole attachment layouts and outside-plant documentation, coordinated with joint-use loading where structures are shared.",
    buyerRoles: ["Network expansion managers", "OSP engineers", "Program managers"],
    painPoints: [
      "Rapid expansion across many jurisdictions",
      "Attachment coordination on shared poles",
      "Documentation and as-built backlog",
    ],
    services: [
      "Fibre route and attachment design",
      "Joint-use pole loading",
      "OSP documentation (OSPInsight)",
      "As-built drafting",
    ],
    standards: ["NESC clearances", "Attachment standards", "OSP records conventions"],
    faqs: [
      {
        q: "Can you support both design and OSP records?",
        a: "Yes — route/attachment design and outside-plant documentation.",
      },
      {
        q: "Do you coordinate with pole-owner make-ready?",
        a: "Yes, where structures are shared we resolve clearances and make-ready.",
      },
    ],
    keywords: ["fibre network design", "fiber design support", "OSP documentation"],
  },
  {
    slug: "municipal-utilities",
    name: "Municipal Utilities",
    metaTitle: "Design Support for Municipal Utilities | SPANEX Engineering",
    metaDescription:
      "Distribution design and drafting for municipal and public power utilities — flexible production capacity to your local standards.",
    tagline: "Flexible capacity for public power",
    intro:
      "Municipal and public-power utilities use SPANEX to extend a small design team with flexible production capacity, to local construction standards and the governing code.",
    buyerRoles: ["Utility superintendents", "Municipal engineers", "Operations managers"],
    painPoints: [
      "Small teams stretched across many tasks",
      "Hiring constraints and budget cycles",
      "Backlogs in drafting and as-builts",
    ],
    services: [
      "Distribution design and drafting",
      "SPIDAcalc pole loading",
      "As-built and landbase updates",
      "CAD conversion and cleanup",
    ],
    standards: ["CSA C22.3 / NESC", "Local construction standards", "Your CAD standard"],
    faqs: [
      {
        q: "Can you work with a very small engineering team?",
        a: "Yes — we add capacity by the project so a small team can take on more without hiring.",
      },
      {
        q: "Do you follow our local standard?",
        a: "Yes; your local construction and CAD standards govern.",
      },
    ],
    keywords: ["municipal utility design", "public power drafting", "utility design outsourcing"],
  },
  {
    slug: "power-distribution",
    name: "Power Distribution",
    metaTitle: "Power Distribution Design & Drafting | SPANEX Engineering",
    metaDescription:
      "Overhead and underground power distribution design, pole line engineering and construction drawings produced to your standard.",
    tagline: "Overhead & underground distribution",
    intro:
      "We produce power distribution design and construction drawings — pole line, framing, guying and make-ready — for utilities and the consultancies that serve them.",
    buyerRoles: ["Distribution engineers", "Design leads", "Consultant PMs"],
    painPoints: [
      "Volume drafting that clogs the queue",
      "Consistency across large sheet sets",
      "Turnaround pressure",
    ],
    services: [
      "Pole line design",
      "Overhead and underground layouts",
      "Framing, guying and make-ready",
      "Construction and permit drawings",
    ],
    standards: ["CSA C22.3", "NESC", "Distributor standards"],
    faqs: [
      {
        q: "Do you handle both overhead and underground?",
        a: "Yes — overhead and underground distribution, including transitions.",
      },
      {
        q: "Can you keep large sheet sets consistent?",
        a: "Yes; standardized layers, blocks and title blocks keep the set consistent, with QA before release.",
      },
    ],
    keywords: ["power distribution design", "pole line engineering", "overhead distribution design"],
  },
  {
    slug: "renewables",
    name: "Renewables",
    metaTitle: "Interconnection & Distribution Design for Renewables | SPANEX",
    metaDescription:
      "Distribution and interconnection drafting support for renewable and DER projects — line design, landbase and construction drawings.",
    tagline: "Interconnection & DER distribution work",
    intro:
      "Renewable and DER developers and their engineers use SPANEX for the distribution-side line design, landbase and construction drawings that connect projects to the grid.",
    buyerRoles: ["Interconnection engineers", "Development engineers", "EPC design leads"],
    painPoints: [
      "Distribution interconnection drafting load",
      "Landbase and route documentation",
      "Coordination with utility standards",
    ],
    services: [
      "Interconnection line design",
      "Landbase and route mapping",
      "Construction drawings",
      "GIS/CAD data preparation",
    ],
    standards: ["Utility interconnection standards", "CSA / NESC", "Your CAD standard"],
    faqs: [
      {
        q: "Do you do the generation or the distribution side?",
        a: "The distribution-side line design, landbase and drawings that interconnect the project — to the utility's standard.",
      },
      {
        q: "Can you align to the interconnecting utility's standard?",
        a: "Yes; the utility's construction and CAD standards govern the interconnection work.",
      },
    ],
    keywords: ["renewables interconnection design", "DER distribution drafting", "interconnection drawings"],
  },
  {
    slug: "construction",
    name: "Construction Contractors",
    metaTitle: "Construction Drawing Support for Utility Contractors | SPANEX",
    metaDescription:
      "Construction drawing preparation, as-builts and CAD support for utility and power distribution contractors.",
    tagline: "Construction drawings & as-builts",
    intro:
      "Utility and power-distribution contractors use SPANEX for construction drawing preparation, as-built capture and CAD support that keeps field work documented and closed out.",
    buyerRoles: ["Construction managers", "Project managers", "Field supervisors"],
    painPoints: [
      "As-built backlog after construction",
      "Redlines that need clean incorporation",
      "Permit and closeout documentation",
    ],
    services: [
      "Construction drawing preparation",
      "As-built drafting",
      "Redline incorporation",
      "Permit and closeout packages",
    ],
    standards: ["Utility construction standards", "Your CAD standard"],
    faqs: [
      {
        q: "Can you turn field redlines into clean as-builts?",
        a: "Yes — redlines and field markups incorporated into clean, revision-controlled drawings.",
      },
      {
        q: "Do you prepare permit and closeout packages?",
        a: "Yes, assembled ready for submission and record.",
      },
    ],
    keywords: ["utility construction drawings", "as-built drafting", "contractor CAD support"],
  },
  {
    slug: "transmission",
    name: "Transmission",
    metaTitle: "Transmission Drafting & Landbase Support | SPANEX Engineering",
    metaDescription:
      "Drafting, landbase and documentation support for transmission projects, coordinated with distribution work where they meet.",
    tagline: "Drafting & landbase for transmission",
    intro:
      "For transmission programs we provide drafting, landbase and documentation support — most often where transmission meets distribution and shared corridors need coordinated records.",
    buyerRoles: ["Transmission project engineers", "Program managers"],
    painPoints: [
      "Drafting and documentation volume",
      "Corridor and landbase coordination",
      "Record accuracy across programs",
    ],
    services: [
      "Transmission drafting support",
      "Landbase and corridor mapping",
      "Documentation and as-builts",
    ],
    standards: ["CSA / NESC", "Utility transmission standards", "Your CAD standard"],
    faqs: [
      {
        q: "Do you focus on transmission or distribution?",
        a: "Our core is distribution; we support transmission programs with drafting, landbase and documentation, especially at distribution interfaces.",
      },
      {
        q: "Can you coordinate shared corridors?",
        a: "Yes — landbase and records coordinated across shared corridors.",
      },
    ],
    keywords: ["transmission drafting", "corridor landbase mapping", "transmission documentation"],
  },
  {
    slug: "consulting-firms",
    name: "Engineering Consultants",
    metaTitle: "White-Label Design Support for Engineering Consultants | SPANEX",
    metaDescription:
      "Overflow and white-label distribution design and drafting for engineering consultancies serving utilities — production capacity under your review and seal.",
    tagline: "Overflow production for consultancies",
    intro:
      "Engineering consultancies use SPANEX as an overflow production partner — distribution design, drafting and analysis delivered to your client's standard, under your review and seal.",
    buyerRoles: ["Practice leads", "Design managers", "Principals"],
    painPoints: [
      "Winning work faster than you can staff it",
      "Protecting margin on production drafting",
      "Client-standard conformance across projects",
    ],
    services: [
      "White-label distribution design",
      "AutoCAD production drafting",
      "SPIDAcalc analysis",
      "GIS, landbase and CAD conversion",
    ],
    standards: ["Your client's CAD standard", "CSA / NESC", "Governing code"],
    faqs: [
      {
        q: "Will the work match our client's standard?",
        a: "Yes — we work to your client's CAD standard and code so deliverables are indistinguishable from your in-house set.",
      },
      {
        q: "Do you work under our review and seal?",
        a: "Yes. We provide production support; your firm reviews and seals.",
      },
    ],
    keywords: ["engineering consultant support", "white label drafting", "engineering outsourcing"],
  },
  {
    slug: "government-utilities",
    name: "Government & Crown Utilities",
    metaTitle: "Design Support for Government & Crown Utilities | SPANEX",
    metaDescription:
      "Distribution design, drafting and records support for government and crown utilities, to public standards and controlled data handling.",
    tagline: "Production support for public utilities",
    intro:
      "Government and crown utilities use SPANEX for distribution design, drafting and records production to public standards, with controlled, access-limited data handling.",
    buyerRoles: ["Engineering managers", "Records/GIS managers", "Program leads"],
    painPoints: [
      "Fixed headcount vs variable workload",
      "Records and as-built backlog",
      "Data-handling and standards requirements",
    ],
    services: [
      "Distribution design and drafting",
      "GIS, landbase and records production",
      "As-built and CAD conversion",
      "SPIDAcalc analysis",
    ],
    standards: ["CSA C22.3 / NESC", "Public utility standards", "Your CAD standard"],
    faqs: [
      {
        q: "How is our data handled?",
        a: "Each client works in an isolated project space with access limited to the assigned team; files stay in controlled storage and transfers use your named channel.",
      },
      {
        q: "Can you work to our public standards?",
        a: "Yes; your construction, CAD and records standards govern.",
      },
    ],
    keywords: ["crown utility design support", "government utility drafting", "public utility CAD"],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
