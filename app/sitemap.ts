import type { MetadataRoute } from "next";
import { SITE_URL, allPseoParams } from "@/lib/pseo-data";
import { posts } from "@/lib/blog-data";
import { jobs } from "@/lib/careers-data";
import { softwareTools } from "@/lib/seo/software";
import { industries } from "@/lib/seo/industries";
import { servicePillars } from "@/lib/seo/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/services",
    "/how-we-work",
    "/quality",
    "/contact",
    "/blog",
    "/careers",
    "/software",
    "/industries",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const pseoRoutes = allPseoParams().map(({ service, intent }) => ({
    url: `${SITE_URL}/services/${service}/${intent}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.datePublished),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const jobRoutes = jobs.map((j) => ({
    url: `${SITE_URL}/careers/${j.id}`,
    lastModified: new Date(j.datePosted),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const softwareRoutes = softwareTools.map((t) => ({
    url: `${SITE_URL}/software/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const industryRoutes = industries.map((i) => ({
    url: `${SITE_URL}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const servicePillarRoutes = servicePillars.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...servicePillarRoutes,
    ...pseoRoutes,
    ...blogRoutes,
    ...jobRoutes,
    ...softwareRoutes,
    ...industryRoutes,
  ];
}
