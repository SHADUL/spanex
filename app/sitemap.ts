import type { MetadataRoute } from "next";
import { SITE_URL, allPseoParams } from "@/lib/pseo-data";
import { posts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/capabilities",
    "/how-we-work",
    "/quality",
    "/contact",
    "/blog",
    "/careers",
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

  return [...staticRoutes, ...pseoRoutes, ...blogRoutes];
}
