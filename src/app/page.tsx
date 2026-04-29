import Image from "next/image";
import { Footer } from "@planara/design-system";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import {
  STATS,
  CLIENT_LOGOS,
  STANDARDS,
  CAPABILITIES,
  OPERATING_MODEL,
} from "@/lib/content";

export default function Home() {
  return (
    <main>
      {/* ─────────────── Hero ─────────────── */}
      <AuroraBackground className="min-h-[88vh]">
        <div
          aria-hidden
          className="grid-texture pointer-events-none absolute inset-0 opacity-50"
        />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 pb-24 pt-32 sm:px-10 sm:pb-32 sm:pt-44 lg:pb-40 lg:pt-56">
          <Reveal amount={0.1}>
            <p className="mb-8 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-planara-teal)]">
              <span className="h-px w-8 bg-[var(--color-planara-teal)]" />
              Planara Services — Strategic engagements
            </p>
          </Reveal>
          <Reveal delay={0.1} amount={0.1}>
            <h1 className="mb-10 max-w-5xl text-balance text-5xl font-light leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.75rem]">
              Strategic technology consulting for Fortune 100s.
            </h1>
          </Reveal>
          <Reveal delay={0.2} amount={0.1}>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              We identify the right problems to solve, then build the systems
              that solve them. Veteran engineers, senior judgment, work that
              ships — partnered with leadership before a single line of code.
            </p>
          </Reveal>
          <Reveal delay={0.3} amount={0.1}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--color-planara-teal)] px-6 py-3 text-sm font-medium text-[var(--color-planara-dark)] transition-opacity hover:opacity-90"
            >
              Inquire for availability
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>
      </AuroraBackground>

      {/* ─────────────── Founding DNA — stats + client logos ─────────────── */}
      <section
        aria-labelledby="founding-dna"
        className="relative border-t border-white/[0.06] px-6 py-24 sm:px-10 sm:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-12 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-planara-teal)]">
              <span className="h-px w-8 bg-[var(--color-planara-teal)]" />
              Founding DNA
            </p>
          </Reveal>

          <div className="mb-20 grid grid-cols-1 gap-px bg-white/[0.08] md:grid-cols-3">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="flex h-full flex-col bg-[var(--color-planara-dark)] px-8 py-12 sm:px-10 sm:py-14">
                  <p className="text-balance text-5xl font-light tracking-tight text-white sm:text-6xl lg:text-7xl">
                    {stat.value}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mb-10 font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              Leadership delivering critical software for
            </p>
            <ul className="grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {CLIENT_LOGOS.map((logo) => (
                <li
                  key={logo.alt}
                  className="flex h-10 items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={36}
                    className="h-6 w-auto max-w-[120px] object-contain opacity-60 transition-opacity hover:opacity-95"
                    style={{ filter: "invert(1) hue-rotate(180deg)" }}
                  />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── Strategic Manifesto ─────────────── */}
      <section
        aria-labelledby="manifesto"
        className="relative border-t border-white/[0.06] px-6 py-24 sm:px-10 sm:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-x-16 gap-y-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="mb-6 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-planara-teal)]">
              <span className="h-px w-8 bg-[var(--color-planara-teal)]" />
              Manifesto
            </p>
            <h2
              id="manifesto"
              className="mb-6 text-balance text-3xl font-light leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Product innovation is dead. Long live impact.
            </h2>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              The era of building it because we can is over. The market doesn&apos;t need another feature; it needs outcomes. We stopped chasing novelty to focus on mission-critical utility.
            </p>
          </Reveal>

          <div className="space-y-px bg-white/[0.06] md:col-span-6 md:col-start-7">
            {STANDARDS.map((item, i) => (
              <Reveal key={item.title} delay={0.1 + i * 0.06}>
                <div className="flex flex-col gap-3 bg-[var(--color-planara-dark)] p-8 sm:p-10">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/40">
                    The Planara Standard / 0{i + 1}
                  </p>
                  <h3 className="text-xl font-light tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/65">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Capabilities ─────────────── */}
      <section
        aria-labelledby="capabilities"
        className="relative border-t border-white/[0.06] px-6 py-24 sm:px-10 sm:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-12 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-planara-teal)]">
              <span className="h-px w-8 bg-[var(--color-planara-teal)]" />
              Capabilities
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-px bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 0.06}>
                <div className="group relative flex h-full flex-col overflow-hidden bg-[var(--color-planara-dark)] p-8 transition-colors hover:bg-white/[0.025] sm:p-10">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-4 -top-4 select-none font-mono text-[8rem] font-thin leading-none text-white/[0.03] transition-colors duration-500 group-hover:text-[var(--color-planara-teal)]/15 sm:text-[10rem]"
                  >
                    {cap.index}
                  </span>
                  <p className="relative z-10 mb-10 font-mono text-xs uppercase tracking-[0.18em] text-white/40">
                    {cap.label}
                  </p>
                  <h3 className="relative z-10 mb-4 text-balance text-xl font-light tracking-tight text-white sm:text-2xl">
                    {cap.title}
                  </h3>
                  <p className="relative z-10 text-sm leading-relaxed text-white/65">
                    {cap.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Operating Model ─────────────── */}
      <section
        aria-labelledby="operating-model"
        className="relative border-t border-white/[0.06] px-6 py-24 sm:px-10 sm:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-12 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-planara-teal)]">
              <span className="h-px w-8 bg-[var(--color-planara-teal)]" />
              How we work
            </p>
            <p className="mb-16 max-w-2xl text-balance text-xl font-light italic leading-relaxed text-white/70 sm:text-2xl">
              &ldquo;Experience isn&apos;t just knowing how to build. It&apos;s knowing what not to build.&rdquo;
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-white/[0.08] md:grid-cols-2">
            {OPERATING_MODEL.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.1}>
                <div className="flex h-full flex-col gap-6 bg-[var(--color-planara-dark)] p-10 sm:p-12">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-planara-teal)]">
                      {pillar.label}
                    </p>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/30">
                      {pillar.title}
                    </p>
                  </div>
                  <h3 className="text-balance text-3xl font-light leading-tight tracking-tight text-white sm:text-4xl">
                    {pillar.headline}
                  </h3>
                  <p className="text-base leading-relaxed text-white/70">
                    {pillar.description}
                  </p>
                  <div className="mt-auto border-t border-white/[0.06] pt-6">
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-white/40">
                      Best for
                    </p>
                    <ul className="space-y-1.5 text-sm text-white/65">
                      {pillar.bullets.map((b) => (
                        <li key={b}>— {b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Agentic AI statement ─────────────── */}
      <section
        aria-labelledby="agentic-ai"
        className="relative border-t border-white/[0.06] px-6 py-24 sm:px-10 sm:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-x-16 gap-y-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-planara-teal)]">
              <span className="h-px w-8 bg-[var(--color-planara-teal)]" />
              Agentic AI
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8">
            <h2
              id="agentic-ai"
              className="mb-6 text-balance text-3xl font-light leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Enterprise-grade agentic systems.
            </h2>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              We move past chat interfaces to build autonomous systems that act. The Planara team has shipped agentic platforms that handle complex reasoning, tool orchestration, and reliable execution in production environments — not demos.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── Contact ─────────────── */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="relative border-t border-white/[0.06] px-6 py-24 sm:px-10 sm:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-x-16 gap-y-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="mb-6 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-planara-teal)]">
              <span className="h-px w-8 bg-[var(--color-planara-teal)]" />
              Engage
            </p>
            <h2
              id="contact-heading"
              className="mb-6 text-balance text-3xl font-light leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Request consultation.
            </h2>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              Planara accepts a limited number of strategic engagements per quarter to ensure partner-level focus.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <Footer
        propertyName="Services"
        tagline="Strategic technology consulting for Fortune 100s."
        contact={{
          items: [{ email: "hello@planara.com", caption: "General inquiries" }],
        }}
      />
    </main>
  );
}
