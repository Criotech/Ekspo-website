import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

// Keep in step with the legal "Last updated" date in src/content/site.ts.
const legalUpdated = new Date("2026-10-17");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/terms`, lastModified: legalUpdated, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified: legalUpdated, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/refunds`, lastModified: legalUpdated, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/contact`, lastModified: legalUpdated, changeFrequency: "yearly", priority: 0.3 },
  ];
}
