"use client";

import { useState } from "react";

const SERVICES = [
  {
    num: "01",
    title: "Custom Software Development",
    desc: "We engineer bespoke software solutions that fit your exact business logic — no compromise, no workarounds. From complex enterprise systems to consumer-grade web applications.",
    tags: ["React", "Node.js", "Python", ".NET", "PostgreSQL"],
    span: "lg:col-span-2",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Mobile App Development",
    desc: "Cross-platform apps with native performance. iOS and Android applications that users love — fast, intuitive, and built to retain.",
    tags: ["React Native", "Flutter", "Swift", "Kotlin"],
    span: "lg:col-span-1",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Cloud & DevOps",
    desc: "Scalable infrastructure, CI/CD pipelines, and cloud architecture that keeps your product running at 99.9% uptime.",
    tags: ["AWS", "GCP", "Docker", "Kubernetes"],
    span: "lg:col-span-1",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "AI Agents & Automation",
    desc: "Deploy intelligent AI agents that work around the clock — qualifying leads, processing data, handling support, and making decisions at machine speed.",
    tags: ["GPT-4", "Claude", "LangChain", "RAG", "Python"],
    span: "lg:col-span-1 lg:row-span-2",
    featured: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "SaaS Product Development",
    desc: "Turn your idea into a revenue-generating SaaS product. We handle everything — architecture, multi-tenancy, billing, analytics, and go-to-market technical readiness.",
    tags: ["AWS", "Stripe", "Auth", "Redis", "Next.js"],
    span: "lg:col-span-2",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Tech Consulting & Strategy",
    desc: "Align your technology with your business goals. Architecture review, technology selection, team augmentation, and fractional CTO services.",
    tags: ["Strategy", "Architecture", "Audit", "Roadmap"],
    span: "lg:col-span-1",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

const AI_TERMINAL_LINES = [
  "$ velnex agent --type sales",
  "> Initializing Sales AI Agent...",
  "> Loading CRM context...",
  "> 47 new leads detected",
  "> Qualifying leads...",
  "> Sending follow-up to 12 prospects",
  "> 3 meetings scheduled ✓",
  "> Agent running. 12hrs saved/week.",
];

function AITerminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    let i = 0;
    let resetTimer: ReturnType<typeof setTimeout>;
    setLines([]);
    const t = setInterval(() => {
      if (i < AI_TERMINAL_LINES.length) {
        const line = AI_TERMINAL_LINES[i];
        setLines((prev) => [...prev, line]);
        i++;
      } else {
        clearInterval(t);
        resetTimer = setTimeout(() => setCycle((c) => c + 1), 3000);
      }
    }, 600);
    return () => {
      clearInterval(t);
      clearTimeout(resetTimer);
    };
  }, [cycle]);

  return (
    <div className="mt-4 rounded-lg bg-[var(--bg-void)] p-4 border border-[var(--border-faint)]">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-[var(--phosphor)] animate-pulse-dot" />
        <span
          className="text-[0.65rem] text-[var(--phosphor)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          AI Running
        </span>
      </div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem" }} className="space-y-1">
        {lines.map((line, i) => (
          <div
            key={i}
            className={line?.startsWith(">") ? "text-[var(--phosphor)]" : "text-[var(--text-muted)]"}
          >
            {line}
          </div>
        ))}
        <span className="inline-block w-2 h-3 bg-[var(--phosphor)] animate-blink align-middle" />
      </div>
    </div>
  );
}

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 lg:py-32" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-6">
            <p
              className="text-[var(--text-muted)] tracking-[0.15em] mb-4"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}
            >
              // WHAT WE DO
            </p>
            <h2
              className="leading-[0.95]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--text-hero)" }}
            >
              <span className="block text-[var(--text-primary)]">What We</span>
              <span
                className="block"
                style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", color: "var(--electric)" }}
              >
                Actually
              </span>
              <span className="block text-[var(--text-primary)]">Do</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-end gap-4">
            <p
              className="text-[var(--text-secondary)] leading-[1.8]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "1rem" }}
            >
              Full-stack solutions for every scale. From MVP to enterprise — we
              build software that solves real problems and scales with your growth.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[var(--electric)] text-sm hover:gap-3 transition-all"
              style={{ fontFamily: "var(--font-body)" }}
            >
              See all services →
            </a>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className={`${s.span} relative group rounded-2xl p-8 border cursor-default transition-all duration-300 ${
                hovered === i
                  ? "bg-[var(--bg-elevated)] -translate-y-2 shadow-[0_20px_60px_rgba(0,0,0,0.4)] border-[var(--border-subtle)]"
                  : "bg-[var(--bg-raised)] border-[var(--border-faint)]"
              }`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Top line draw on hover */}
              <div
                className="absolute top-0 left-0 h-[2px] rounded-t-2xl bg-[var(--electric)] transition-all duration-500"
                style={{ width: hovered === i ? "100%" : "0%" }}
              />

              {/* Number */}
              <span
                className="absolute top-6 right-6 text-[var(--text-ghost)]"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem" }}
              >
                {s.num}
              </span>

              {/* Icon */}
              <div className={`mb-5 text-[var(--text-muted)] transition-colors duration-300 ${hovered === i ? "text-[var(--electric)]" : ""}`}>
                {s.icon}
              </div>

              {/* Title */}
              <h3
                className="mb-3 text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.2rem" }}
              >
                {s.title}
              </h3>

              {/* Desc */}
              <p
                className="text-[var(--text-secondary)] leading-[1.8] mb-5"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.875rem" }}
              >
                {s.desc}
              </p>

              {/* Featured AI terminal */}
              {s.featured && <AITerminal />}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full border border-[var(--border-subtle)] text-[var(--text-muted)]"
                    style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover explore link */}
              <div
                className={`mt-4 transition-all duration-300 ${hovered === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
              >
                <span
                  className="text-[var(--electric)] text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
