/**
 * JSON-LD structured data for Planara Services — strategic agentic AI consultancy.
 */

export const SITE_URL = "https://services.planara.com";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Planara Services",
  url: SITE_URL,
  logo: `${SITE_URL}/planara-logo.png`,
  description:
    "Strategic agentic AI engagements for global enterprises. We diagnose where AI actually solves the problem, then build and ship the systems.",
  parentOrganization: {
    "@type": "Organization",
    name: "Planara",
    url: "https://planara.com",
  },
  serviceType: [
    "Agentic AI consulting",
    "Strategic technology consulting",
    "Custom software engineering",
    "Mobile and backend development",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Planara Services",
  url: SITE_URL,
};

export function jsonLdScriptProps(data: object) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  } as const;
}
