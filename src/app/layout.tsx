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
      "Planara Services — Strategic technology consulting for Fortune 100s",
    template: "%s — Planara Services",
  },
  description:
    "We identify the right problems to solve, then build the systems that solve them. Veteran engineers, senior judgment, work that ships.",
  applicationName: "Planara Services",
  authors: [{ name: "Planara" }],
  creator: "Planara",
  publisher: "Planara",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Planara Services",
    title:
      "Planara Services — Strategic technology consulting for Fortune 100s",
    description:
      "Veteran engineers, senior judgment, work that ships.",
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planara Services",
    description:
      "Strategic technology consulting for Fortune 100s.",
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
