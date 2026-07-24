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
  logo: `${SITE_URL}/spanex-logo-navy.png`,
  email: "admin@spanexengineering.com",
  areaServed: ["CA", "US"],
  knowsAbout: [
    "Utility distribution design",
    "Overhead distribution design",
    "Underground distribution design",
    "AutoCAD drafting",
    "SPIDAcalc pole loading analysis",
    "GIS mapping",
    "Landbase preparation",
    "Joint-use pole attachment",
    "Make-ready engineering",
  ],
};

/** Global Organization + WebSite graph — emit once in the root layout. */
export function GlobalJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          ORG,
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: "SPANEX Engineering",
            publisher: { "@id": `${SITE_URL}/#organization` },
            inLanguage: "en-CA",
          },
        ],
      }}
    />
  );
}

/** Generic Service graph for software / industry / capability pages. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  const url = `${SITE_URL}${opts.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: opts.name,
    description: opts.description,
    url,
    serviceType: opts.serviceType,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: ["CA", "US"],
  };
}

/**
 * Service graph for a location page. areaServed is an AdministrativeArea
 * (province/state) — NOT LocalBusiness, since SPANEX is a remote team with no
 * physical location in the region.
 */
export function locationServiceSchema(opts: {
  name: string;
  description: string;
  path: string;
  regionName: string;
  countryCode: "CA" | "US";
}) {
  const url = `${SITE_URL}${opts.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: opts.name,
    description: opts.description,
    url,
    serviceType: "Utility distribution design & drafting",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: opts.regionName,
      containedInPlace: {
        "@type": "Country",
        identifier: opts.countryCode,
      },
    },
  };
}

/** ItemList for hub pages (helps discovery + rich results). */
export function itemListSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: `${SITE_URL}${it.path}`,
    })),
  };
}

/** DefinedTerm for glossary/entity pages. */
export function definedTermSchema(opts: {
  term: string;
  definition: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: opts.term,
    description: opts.definition,
    url: `${SITE_URL}${opts.path}`,
    inDefinedTermSet: `${SITE_URL}/glossary`,
  };
}

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

/** TechArticle schema for a long-form guide — carries section + speakable. */
export function guideArticleSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  keywords: string[];
  sectionHeadings: string[];
  wordCount: number;
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
    wordCount: opts.wordCount,
    articleSection: opts.sectionHeadings,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".guide-takeaway"],
    },
    author: { "@type": "Organization", name: "SPANEX Engineering" },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: url,
  };
}

/** JobPosting schema for Google Jobs (no salary disclosed). */
export function jobPostingSchema(opts: {
  identifier: string;
  title: string;
  description: string;
  path: string;
  datePosted: string;
  validThrough: string;
  employmentType: string;
  city: string;
  region?: string;
  country: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: opts.title,
    description: opts.description,
    identifier: {
      "@type": "PropertyValue",
      name: "SPANEX Engineering",
      value: opts.identifier,
    },
    datePosted: opts.datePosted,
    validThrough: opts.validThrough,
    employmentType: opts.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: "SPANEX Engineering",
      sameAs: SITE_URL,
      logo: `${SITE_URL}/spanex-logo-navy.svg`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: opts.city,
        addressRegion: opts.region,
        addressCountry: opts.country,
      },
    },
    directApply: true,
    url: `${SITE_URL}${opts.path}`,
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
