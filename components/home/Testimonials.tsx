"use client";

import { useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "VelnexTech didn't just build our platform — they became our technology partner. The attention to architecture, performance, and security was exactly what an enterprise-grade product demands. We shipped our MVP in 10 weeks and it scaled to 50,000 users without a hiccup.",
    name: "Sarah Mitchell",
    title: "CTO, FinanceFlow Inc.",
    company: "FinanceFlow",
    country: "🇺🇸",
  },
  {
    quote:
      "What sets VelnexTech apart is their transparency. We had direct Slack access to the entire dev team, weekly demos, and real-time dashboards. It felt like an in-house team, not an outsourced vendor.",
    name: "James Okafor",
    title: "Founder, LogiTrack",
    company: "LogiTrack",
    country: "🇬🇧",
  },
  {
    quote:
      "Their AI agent for our sales team saved us 15 hours per rep per week. The ROI was positive within the first month. I've never seen an implementation go this smoothly.",
    name: "Priya Mehta",
    title: "VP Operations, ScaleUp MENA",
    company: "ScaleUp MENA",
    country: "🇦🇪",
  },
];

const MINI = [
  { quote: "Exceptional code quality. Zero post-launch bugs.", name: "T. Chen", company: "ShopAI" },
  { quote: "Delivered 2 weeks early. Unheard of.", name: "R. Santos", company: "MediTech" },
  { quote: "Best engineering team we've worked with.", name: "K. Williams", company: "DataPulse" },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section className="py-24 lg:py-32 relative" style={{ background: "var(--bg-raised)" }}>
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        <div className="mb-12 text-center">
          <p
            className="text-[var(--text-muted)] tracking-[0.15em]"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}
          >
            // CLIENT STORIES
          </p>
        </div>

        {/* Featured quote */}
        <div className="relative max-w-[900px] mx-auto mb-16">
          <div
            className="absolute -top-8 -left-4 select-none pointer-events-none leading-none"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "clamp(8rem, 15vw, 14rem)",
              color: "var(--text-ghost)",
              lineHeight: 1,
            }}
          >
            "
          </div>
          <blockquote
            className="relative z-10 text-[var(--text-primary)] italic leading-[1.7]"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "clamp(1.1rem, 2vw, 1.6rem)",
            }}
          >
            {t.quote}
          </blockquote>
          <div className="mt-6 flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
              style={{ background: "var(--bg-elevated)", color: "var(--electric)" }}
            >
              {t.name[0]}
            </div>
            <div>
              <div
                className="text-[var(--text-primary)] font-medium"
                style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem" }}
              >
                {t.name} {t.country}
              </div>
              <div
                className="text-[var(--text-muted)]"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}
              >
                {t.title}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3 mt-8">
            <button
              onClick={() => setActive((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="w-10 h-10 rounded-full border flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--electric)] transition-all"
              style={{ borderColor: "var(--border-subtle)" }}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === active ? "24px" : "8px",
                    height: "8px",
                    background: i === active ? "var(--electric)" : "var(--border-visible)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setActive((active + 1) % TESTIMONIALS.length)}
              className="w-10 h-10 rounded-full border flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--electric)] transition-all"
              style={{ borderColor: "var(--border-subtle)" }}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        {/* Mini testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t pt-12" style={{ borderColor: "var(--border-faint)" }}>
          {MINI.map((m, i) => (
            <div key={i} className="flex flex-col gap-2">
              <p
                className="text-[var(--text-secondary)] italic leading-[1.6]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.875rem" }}
              >
                &ldquo;{m.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[0.6rem] font-bold"
                  style={{ background: "var(--bg-elevated)", color: "var(--electric)" }}
                >
                  {m.name[0]}
                </div>
                <span
                  className="text-[var(--text-muted)]"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem" }}
                >
                  {m.name} · {m.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
