import type { Metadata, Viewport } from "next";
import { PlanaraFonts } from "@planara/design-system";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Toaster } from "sonner";

const SITE_URL = "https://services.planara.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Planara Services — Strategic agentic AI engagements for global enterprises",
    template: "%s — Planara Services",
  },
  description:
    "We diagnose where AI actually solves the problem, then build and ship the systems. Custom builds, agent architectures, production reliability — partnered with leadership.",
  applicationName: "Planara Services",
  authors: [{ name: "Planara" }],
  creator: "Planara",
  publisher: "Planara",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Planara Services",
    title:
      "Planara Services — Strategic agentic AI engagements for global enterprises",
    description:
      "We diagnose where AI actually solves the problem, then build and ship the systems.",
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planara Services",
    description:
      "Strategic agentic AI engagements for global enterprises.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#131820",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <PlanaraFonts />
      </head>
      <body className="relative">
        <Nav />
        {children}
        <Toaster theme="dark" position="top-right" />
      </body>
    </html>
  );
}
