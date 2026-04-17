"use client";

import { useState } from "react";

const FEATURES = [
  {
    num: "01",
    title: "Velocity-First Delivery",
    text: "Agile sprints with weekly client demos. You see working software every 7 days — not after 6 months.",
  },
  {
    num: "02",
    title: "Enterprise-Grade Security",
    text: "SOC2-compliant processes, end-to-end encryption, and security reviews at every stage. Your data and IP are protected.",
  },
  {
    num: "03",
    title: "Global Standards, India Advantage",
    text: "World-class engineering at competitive pricing. Our India-based team operates on US/UK/UAE timezone overlap for seamless collaboration.",
  },
  {
    num: "04",
    title: "Full Transparency",
    text: "Real-time project dashboards, daily standups available, and direct Slack/WhatsApp access to your development team — always.",
  },
];

const PROJECTS = [
  { name: "E-Commerce Platform", progress: 87, color: "var(--electric)", status: "In Sprint 4" },
  { name: "AI Sales Agent", progress: 100, color: "var(--phosphor)", status: "Deployed ✓" },
  { name: "Mobile Banking App", progress: 62, color: "var(--plasma)", status: "In Sprint 2" },
  { name: "SaaS Analytics Dashboard", progress: 45, color: "var(--signal)", status: "Design Phase" },
];

function DashboardMockup() {
  return (
    <div
      className="rounded-2xl border p-6 h-full"
      style={{ background: "var(--bg-raised)", borderColor: "var(--border-subtle)" }}
    >
      <div className="flex items-center justify-between mb-6">
        <span
          className="text-[var(--text-primary)] font-semibold"
          style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem" }}
        >
          Project Dashboard
        </span>
        <span
          className="flex items-center gap-1.5 text-[var(--phosphor)]"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--phosphor)] animate-pulse-dot" />
          Live
        </span>
      </div>

      <div className="space-y-5">
        {PROJECTS.map((p, i) => (
          <div key={i} className="space-y-2">
            <div className="flex items-center justify-between">
              <span
                className="text-[var(--text-secondary)]"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem" }}
              >
                {p.name}
              </span>
              <span
                className="text-[var(--text-muted)]"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem" }}
              >
                {p.status}
              </span>
            </div>
            <div className="h-1.5 rounded-full" style={{ background: "var(--border-subtle)" }}>
              <div
                className="h-1.5 rounded-full transition-all duration-1000"
                style={{ width: `${p.progress}%`, background: p.color }}
              />
            </div>
            <div className="flex justify-between">
              <div className="flex -space-x-1">
                {[1, 2, 3].map((a) => (
                  <div
                    key={a}
                    className="w-5 h-5 rounded-full border border-[var(--bg-raised)] flex items-center justify-center text-[0.5rem] font-bold"
                    style={{ background: `hsl(${a * 60 + i * 30}, 40%, 35%)`, color: "var(--text-primary)" }}
                  >
                    {["A", "B", "C"][a - 1]}
                  </div>
                ))}
              </div>
              <span
                className="font-semibold"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: p.color }}
              >
                {p.progress}%
              </span>
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-6 pt-5 border-t flex items-center justify-between"
        style={{ borderColor: "var(--border-faint)" }}
      >
        <span
          className="text-[var(--text-muted)]"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem" }}
        >
          4 active projects · 12 team members
        </span>
        <span
          className="text-[var(--electric)]"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem" }}
        >
          Weekly report →
        </span>
      </div>
    </div>
  );
}

export default function WhyUs() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="about" className="py-24 lg:py-32" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — dashboard */}
          <div className="lg:col-span-6 xl:col-span-5">
            <DashboardMockup />
          </div>

          {/* Right — text */}
          <div className="lg:col-span-6 xl:col-span-7">
            <p
              className="text-[var(--text-muted)] tracking-[0.15em] mb-6"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}
            >
              // WHY US
            </p>

            <div className="mb-10 space-y-0">
              {["Precision.", "Velocity.", "Trust."].map((word, i) => (
                <div
                  key={word}
                  className="block text-[var(--text-primary)] leading-[1.1]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: [300, 600, 800][i],
                  }}
                >
                  {word}
                </div>
              ))}
            </div>

            <div className="space-y-0">
              {FEATURES.map((f, i) => (
                <div
                  key={i}
                  className="py-5 border-t cursor-default"
                  style={{ borderColor: "var(--border-faint)" }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="flex gap-6">
                    <span
                      className="shrink-0 transition-colors duration-200"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        color: hovered === i ? "var(--electric)" : "var(--text-ghost)",
                      }}
                    >
                      {f.num}
                    </span>
                    <div
                      className="transition-transform duration-200"
                      style={{ transform: hovered === i ? "translateX(8px)" : "translateX(0)" }}
                    >
                      <h3
                        className="mb-1 text-[var(--text-primary)]"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1rem" }}
                      >
                        {f.title}
                      </h3>
                      <p
                        className="text-[var(--text-secondary)] leading-[1.8]"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.875rem" }}
                      >
                        {f.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div
                className="pt-5 border-t flex items-center gap-3"
                style={{ borderColor: "var(--border-faint)" }}
              >
                <span
                  className="px-2 py-1 rounded border border-[var(--phosphor)] text-[var(--phosphor)]"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem" }}
                >
                  ✓ Verified Company
                </span>
                <span
                  className="text-[var(--text-muted)]"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem" }}
                >
                  Incorporated in India under Shivnetra Computers Pvt. Ltd.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
