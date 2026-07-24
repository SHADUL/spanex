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
