import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  return [
    {
      url: "https://services.planara.com",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
