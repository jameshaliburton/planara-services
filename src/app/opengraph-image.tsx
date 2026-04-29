import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Planara Services — Strategic agentic AI engagements for global enterprises";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#131820",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          position: "relative",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Beam-suggesting diagonal lines */}
        <svg
          style={{ position: "absolute", inset: 0, opacity: 0.35 }}
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
        >
          {Array.from({ length: 18 }).map((_, i) => (
            <line
              key={i}
              x1={-200 + i * 70}
              y1={-50}
              x2={400 + i * 70}
              y2={780}
              stroke="#43CED6"
              strokeOpacity={0.18}
              strokeWidth="0.6"
            />
          ))}
        </svg>
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#43CED6",
            fontSize: "18px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <div style={{ width: 32, height: 1, background: "#43CED6" }} />
          PLANARA SERVICES
        </div>
        {/* Headline */}
        <div
          style={{
            color: "#ffffff",
            fontSize: "68px",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            fontWeight: 300,
            marginTop: "48px",
            maxWidth: "960px",
          }}
        >
          Strategic agentic AI engagements for global enterprises.
        </div>
        {/* Bottom row */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "rgba(255,255,255,0.5)",
            fontSize: "20px",
            fontFamily: "monospace",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <span>Strategic engagements</span>
          <span>services.planara.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
