import { Footer } from "@planara/design-system";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import {
  STATS,
  CLIENT_LOGOS,
  STANDARDS,
  DELIVERY_CAPABILITIES,
  OPERATING_MODEL,
} from "@/lib/content";

export default function Home() {
  return (
    <main>
      {/* ─────────────── Hero ─────────────── */}
      <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-[var(--color-planara-dark)]">
        <BackgroundBeams />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-24 pt-32 sm:px-10 sm:pb-32 sm:pt-44 lg:pb-40 lg:pt-56">
          <Reveal amount={0.1}>
            <p className="mb-8 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-planara-teal)]">
              <span className="h-px w-8 bg-[var(--color-planara-teal)]" />
              Planara Services — Agentic AI engagements
            </p>
          </Reveal>
          <Reveal delay={0.1} amount={0.1}>
            <h1 className="mb-10 max-w-5xl text-balance text-5xl font-light leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Strategic agentic AI engagements for global enterprises.
            </h1>
          </Reveal>
          <Reveal delay={0.2} amount={0.1}>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              We diagnose where AI actually solves the problem. Then we build and ship the systems that solve it.
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
      </section>

      {/* ─────────────── Track record — stats + client logos ─────────────── */}
      <section
        aria-labelledby="track-record"
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
            <p className="mb-10 font-mono text-xs uppercase tracking-[0.2em] text-white/55">
              Leadership delivering critical software for
            </p>
            <ul className="grid grid-cols-2 items-center gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {CLIENT_LOGOS.map((logo) => (
                <li
                  key={logo.alt}
                  className="flex h-16 items-center justify-center rounded-md bg-white/[0.04] px-4 py-3 transition-colors hover:bg-white/[0.07]"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-7 w-auto max-w-[120px] object-contain opacity-90"
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
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/55">
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

      {/* ─────────────── Practice — agentic AI consultancy with delivery in support ─────────────── */}
      <section
        aria-labelledby="practice"
        className="relative border-t border-white/[0.06] px-6 py-24 sm:px-10 sm:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-10 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-planara-teal)]">
              <span className="h-px w-8 bg-[var(--color-planara-teal)]" />
              Practice
            </p>
            <h2
              id="practice"
              className="mb-8 max-w-4xl text-balance text-3xl font-light leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Agentic systems built to ship — not demo.
            </h2>
            <p className="mb-12 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
              We move past chat interfaces to build autonomous systems that act. Tool orchestration, multi-step reasoning, production reliability — partnered with leadership to identify where agentic AI actually solves the problem before architecture begins.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-white/55">
              In support of agentic delivery
            </p>
            <div className="grid grid-cols-1 gap-px bg-white/[0.08] md:grid-cols-3">
              {DELIVERY_CAPABILITIES.map((cap) => (
                <div
                  key={cap.title}
                  className="flex h-full flex-col gap-3 bg-[var(--color-planara-dark)] p-8 sm:p-10"
                >
                  <h3 className="text-xl font-light tracking-tight text-white">
                    {cap.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/65">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
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
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
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
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-white/55">
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
        tagline="Strategic agentic AI engagements for global enterprises."
        contact={{
          items: [{ email: "hello@planara.com", caption: "General inquiries" }],
        }}
      />
    </main>
  );
}
