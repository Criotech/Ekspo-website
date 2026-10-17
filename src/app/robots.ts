import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The app's browser sign-in page; it also carries its own noindex.
      disallow: "/desktop-login",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
