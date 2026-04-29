import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://services.planara.com/sitemap.xml",
    host: "https://services.planara.com",
  };
}
