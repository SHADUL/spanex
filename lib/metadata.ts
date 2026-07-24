import type { Metadata } from "next";
import { SITE_URL } from "./pseo-data";

/**
 * Central metadata builder — title, description, keywords, canonical and Open
 * Graph in one place, so every route (static, programmatic, blog) is consistent.
 */
export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string; // absolute path beginning with "/"
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: "SPANEX Engineering",
      locale: "en_CA",
      type: opts.type ?? "website",
      ...(opts.publishedTime
        ? { publishedTime: opts.publishedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
  };
}
