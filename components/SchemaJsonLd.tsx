import { SITE_URL } from "@/lib/pseo-data";

/**
 * Renders a Google-compliant JSON-LD block. Server component — the script is in
 * the initial HTML for crawlers. Pass any schema.org object graph.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here (our own data, no user input).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const ORG = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "SPANEX Engineering",
  url: SITE_URL,
  legalName: "Spanex Engineering Pvt Ltd",
  areaServed: ["CA", "US"],
  knowsAbout: [
    "Utility distribution drafting",
    "AutoCAD design",
    "SPIDAcalc pole loading analysis",
    "GIS mapping",
    "Landbase preparation",
    "Joint-use pole attachment",
  ],
};

/** ProfessionalService + Service graph for a programmatic landing page. */
export function professionalServiceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  const url = `${SITE_URL}${opts.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      ORG,
      {
        "@type": "ProfessionalService",
        "@id": `${url}#service`,
        name: opts.name,
        description: opts.description,
        url,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: ["CA", "US", "Worldwide"],
        serviceType: opts.serviceType,
      },
    ],
  };
}

/** FAQPage schema from Q/A pairs. */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** TechArticle schema for a blog post. */
export function techArticleSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  keywords: string[];
}) {
  const url = `${SITE_URL}${opts.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: opts.title,
    description: opts.description,
    url,
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    keywords: opts.keywords.join(", "),
    author: { "@type": "Organization", name: "SPANEX Engineering" },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: url,
  };
}

/** BreadcrumbList schema. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}
