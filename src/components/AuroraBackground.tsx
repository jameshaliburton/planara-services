"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

/**
 * Aurora background — radial-glow layers, asymmetric upper-right anchor.
 * Same pattern as parent brand for cross-property visual coherence.
 * (Property-specific copy of a known good pattern, per design system principle.)
 */
export const AuroraBackground = ({
  className,
  children,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[var(--color-planara-dark)] text-white",
        className,
      )}
      {...props}
    >
      <div
        aria-hidden
        className="aurora-glow-1 pointer-events-none absolute -right-[15%] -top-[25%] h-[110%] w-[85%]"
        style={{
          background:
            "radial-gradient(ellipse at center, #43CED6 0%, #1F8F8F 22%, rgba(31,143,143,0.4) 45%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden
        className="aurora-glow-2 pointer-events-none absolute right-[15%] top-[20%] h-[55%] w-[50%]"
        style={{
          background:
            "radial-gradient(ellipse at center, #43CED6 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden
        className="aurora-glow-3 pointer-events-none absolute -left-[10%] top-[45%] h-[55%] w-[50%]"
        style={{
          background:
            "radial-gradient(ellipse at center, #2E95F5 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
      />
      <div
        aria-hidden
        className="aurora-glow-4 pointer-events-none absolute right-[10%] top-[10%] h-[18%] w-[18%]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(120,235,235,0.55) 0%, transparent 70%)",
          filter: "blur(35px)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none bg-gradient-to-b from-transparent to-[var(--color-planara-dark)]"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
