import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The app's browser sign-in page and the after-checkout page; both also carry noindex.
      disallow: ["/desktop-login", "/paid"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
