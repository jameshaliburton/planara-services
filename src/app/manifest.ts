import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Planara Services",
    short_name: "Planara Services",
    description:
      "Strategic agentic AI engagements for global enterprises.",
    start_url: "/",
    display: "standalone",
    background_color: "#131820",
    theme_color: "#131820",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
