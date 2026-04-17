"use client";

const TECH_ITEMS = [
  "React", "TypeScript", "Next.js", "Node.js", "Python", "Go",
  "PostgreSQL", "MongoDB", "Redis", "AWS", "GCP", "Docker",
  "Kubernetes", "OpenAI", "Anthropic", "LangChain", "PyTorch",
];

const INDUSTRY_ITEMS = [
  "Fintech", "Healthcare", "Logistics", "E-commerce",
  "SaaS", "Enterprise", "AI", "Automation", "Mobile",
  "Web3", "EdTech", "HRTech",
];

function MarqueeTrack({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden">
      <div className={direction === "left" ? "animate-marquee-left" : "animate-marquee-right"} style={{ display: "flex", gap: "0" }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-5 py-4 whitespace-nowrap group cursor-default"
          >
            <span
              className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors duration-200 group-hover:scale-110 inline-block transition-transform"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "0.875rem" }}
            >
              {item}
            </span>
            <span className="text-[var(--text-ghost)]">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      className="border-y overflow-hidden"
      style={{ borderColor: "var(--border-faint)", background: "var(--bg-raised)" }}
    >
      <MarqueeTrack items={TECH_ITEMS} direction="left" />
      <div className="h-px" style={{ background: "var(--border-faint)" }} />
      <MarqueeTrack items={INDUSTRY_ITEMS} direction="right" />
    </div>
  );
}
