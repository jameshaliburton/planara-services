/**
 * Services content — single source of truth.
 * Reflects the agentic-AI-consultancy positioning: Services delivers agentic
 * systems for global enterprises; mobile/backend/strategy are delivery
 * capabilities in support of that, not standalone offerings.
 */

export const STATS = [
  { value: "1B+", label: "Software in the hands of users" },
  { value: "25+", label: "Fortune 100 engagements" },
  { value: "Multiple", label: "Venture exits" },
];

/**
 * Client logos sourced from two complementary services:
 *   - Simple Icons CDN — for brands where a clean white SVG silhouette exists
 *   - logo.dev — for brands without a Simple Icons listing; renders in real brand colors
 * Logos with brand color render against a subtle off-dark container plate so
 * white-background PNGs don't show as solid blocks.
 */
const SI = (slug: string) => `https://cdn.simpleicons.org/${slug}/ffffff`;
const LOGODEV_TOKEN = "pk_X-1ZO13GSgeOoUrIuJ6GMQ";
const LD = (domain: string) =>
  `https://img.logo.dev/${domain}?token=${LOGODEV_TOKEN}&size=160&format=png`;

export const CLIENT_LOGOS = [
  { src: SI("google"), alt: "Google", style: "white" as const },
  { src: SI("apple"), alt: "Apple", style: "white" as const },
  { src: SI("uber"), alt: "Uber", style: "white" as const },
  { src: LD("disney.com"), alt: "Disney", style: "color" as const },
  { src: SI("cisco"), alt: "Cisco", style: "white" as const },
  { src: SI("goldmansachs"), alt: "Goldman Sachs", style: "white" as const },
  { src: LD("citi.com"), alt: "Citi", style: "color" as const },
  { src: LD("ubs.com"), alt: "UBS", style: "color" as const },
  { src: LD("pwc.com"), alt: "PwC", style: "color" as const },
  { src: LD("bloomberg.com"), alt: "Bloomberg", style: "color" as const },
  { src: LD("allianz.com"), alt: "Allianz", style: "color" as const },
  { src: LD("cigna.com"), alt: "Cigna", style: "color" as const },
  { src: LD("amgen.com"), alt: "Amgen", style: "color" as const },
  { src: LD("nestle.com"), alt: "Nestlé", style: "color" as const },
  { src: LD("pg.com"), alt: "P&G", style: "color" as const },
  { src: LD("kimberly-clark.com"), alt: "Kimberly-Clark", style: "color" as const },
  { src: SI("bose"), alt: "Bose", style: "white" as const },
  { src: LD("gillette.com"), alt: "Gillette", style: "color" as const },
  { src: LD("fisher-price.com"), alt: "Fisher-Price", style: "color" as const },
  { src: LD("ab-inbev.com"), alt: "AB InBev", style: "color" as const },
];

export const STANDARDS = [
  {
    title: "Diagnosis over prescription",
    description:
      "We audit roadmaps to kill low-ROI features before code is written.",
  },
  {
    title: "Modular architecture",
    description:
      "Native platforms optimized for performance and longevity.",
  },
  {
    title: "Agentic velocity",
    description:
      "Human + AI delivery models tuned for meaningful outcomes.",
  },
];

/**
 * Delivery capabilities — in service of agentic AI deployments.
 * No longer a standalone numbered grid; rendered as a supporting list
 * under the agentic-AI practice statement.
 */
export const DELIVERY_CAPABILITIES = [
  {
    title: "Strategy & ideation",
    description:
      "Validate where agentic AI actually solves the problem, then define the roadmap.",
  },
  {
    title: "Custom mobile",
    description:
      "Native platforms (SwiftUI, Kotlin) that put agentic systems into the field.",
  },
  {
    title: "Backend & API",
    description:
      "Secure architecture for production-grade reliability under real load.",
  },
];

export const OPERATING_MODEL = [
  {
    label: "01 / Diagnosis",
    title: "Planara Core",
    headline: "Diagnosis & Strategy",
    description:
      "Building the wrong thing is the most expensive mistake in tech. We partner with leadership to audit roadmaps, assess emerging tech, and select the high-ROI problems worth solving — before architecture begins.",
    bullets: ["Problem selection", "Tech feasibility", "Roadmap de-risking"],
  },
  {
    label: "02 / Execution",
    title: "Planara Scale",
    headline: "Execution & Velocity",
    description:
      "Once the path is clear, we activate a curated global network to build and scale under Planara oversight. Managed velocity without losing senior judgment at the joins.",
    bullets: ["Rapid development", "Team augmentation", "Global rollouts"],
  },
];
