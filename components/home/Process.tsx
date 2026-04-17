"use client";

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc: "We learn your business, not just your requirements. Deep-dive sessions on goals, users, constraints, and success metrics.",
    visual: "📋",
  },
  {
    num: "02",
    title: "Design",
    desc: "UI/UX wireframes to high-fidelity prototypes. We validate with real users before writing a line of code.",
    visual: "🎨",
  },
  {
    num: "03",
    title: "Develop",
    desc: "Agile sprints, CI/CD pipeline, code reviews, and weekly demos. Engineering excellence at every commit.",
    visual: "⌨️",
  },
  {
    num: "04",
    title: "Deploy",
    desc: "Rigorous QA, penetration testing, performance optimization, and zero-downtime production deployments.",
    visual: "🚀",
  },
  {
    num: "05",
    title: "Support",
    desc: "We don't disappear after launch. Monitoring, updates, feature additions, and dedicated support — ongoing.",
    visual: "📊",
  },
];

export default function Process() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="mb-16 text-center">
          <p
            className="text-[var(--text-muted)] tracking-[0.15em] mb-4"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}
          >
            // HOW WE WORK
          </p>
          <h2
            className="text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--text-hero)" }}
          >
            Our Process
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute top-16 left-0 right-0 h-px hidden lg:block"
            style={{ background: "var(--border-subtle)" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {STEPS.map((step, i) => (
              <div key={i} className="relative flex flex-col items-start lg:items-center">
                {/* Step number circle */}
                <div
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center mb-6 relative z-10"
                  style={{
                    background: "var(--bg-base)",
                    borderColor: "var(--electric)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--electric)",
                    fontWeight: 600,
                  }}
                >
                  {step.num}
                </div>

                <div className="lg:text-center">
                  {/* Big ghost number */}
                  <div
                    className="mb-2 leading-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(3rem, 6vw, 5rem)",
                      fontWeight: 800,
                      color: "var(--text-ghost)",
                      lineHeight: 1,
                    }}
                  >
                    {step.num}
                  </div>

                  <h3
                    className="mb-3 text-[var(--text-primary)]"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.1rem" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[var(--text-secondary)] leading-[1.7]"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.85rem" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div
            className="mt-12 h-0.5 rounded-full overflow-hidden"
            style={{ background: "var(--border-faint)" }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: "100%",
                background: "linear-gradient(90deg, var(--electric), var(--plasma))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
