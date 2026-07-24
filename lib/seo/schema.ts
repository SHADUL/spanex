/**
 * SEO entity types for programmatic page generation (see SEO-BLUEPRINT.md).
 * Each record carries entity-specific, non-templated content fields so generated
 * pages clear the Quality Gate (lib/seo/gate.ts) rather than reading as thin.
 */

export interface FAQ {
  q: string;
  a: string;
}

/** Software / tool expertise page. */
export interface SoftwareTool {
  slug: string;
  name: string;
  vendor: string;
  category: "cad" | "gis" | "analysis" | "collection" | "docs";
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  intro: string;
  whatWeDo: string[]; // our capability in this tool
  outputs: string[]; // deliverables produced in it
  relatedServiceHrefs: { label: string; href: string }[];
  faqs: FAQ[];
  keywords: string[];
}

/** Service pillar page. */
export interface ServicePillar {
  slug: string;
  name: string;
  category: "design" | "drafting" | "gis" | "analysis" | "support";
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  problem: string; // the buyer pain, 1–2 sentences
  approach: string; // how we deliver it, 1–2 sentences
  scope: string[];
  deliverables: string[];
  standards: string[];
  toolSlugs: string[]; // FK → software
  industrySlugs: string[]; // FK → industries
  relatedServiceSlugs: string[];
  faqs: FAQ[];
  keywords: string[];
  /** intent keys available under /services/[slug]/[intent] (pSEO engine). */
  intents?: string[];
}

/** Glossary / entity definition page. */
export interface GlossaryTerm {
  slug: string;
  term: string;
  category: "design" | "structural" | "drafting" | "gis" | "standards";
  short: string; // one-line, extractable answer (for AI/snippets)
  definition: string; // full definition, 2–4 sentences
  relatedTermSlugs: string[];
  relatedServices: { label: string; href: string }[];
  keywords: string[];
}

/** Industry vertical page. */
export interface Industry {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  intro: string;
  buyerRoles: string[];
  painPoints: string[];
  services: string[]; // what we produce for this vertical
  standards: string[]; // EEAT signals
  faqs: FAQ[];
  keywords: string[];
}
