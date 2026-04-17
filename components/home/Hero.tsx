"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CODE_LINES = [
  'import { buildSomething } from "@velnextech/sdk"',
  "",
  "const product = await buildSomething({",
  '  type: "saas",',
  '  scale: "enterprise",',
  '  timeline: "8 weeks",',
  "  ai: true,",
  "});",
  "",
  "// → Production-ready. Zero compromise.",
];

function CodeEditor() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let current = "";
    const interval = setInterval(() => {
      if (lineIdx >= CODE_LINES.length) {
        clearInterval(interval);
        return;
      }
      const line = CODE_LINES[lineIdx];
      if (charIdx < line.length) {
        current += line[charIdx];
        charIdx++;
        setVisibleLines((prev) => {
          const next = [...prev];
          next[lineIdx] = current;
          return next;
        });
      } else {
        lineIdx++;
        charIdx = 0;
        current = "";
        setVisibleLines((prev) => [...prev, ""]);
      }
    }, 28);

    const blinkInterval = setInterval(() => setCursor((c) => !c), 530);
    return () => { clearInterval(interval); clearInterval(blinkInterval); };
  }, []);

  const getLineColor = (line: string) => {
    if (line.startsWith("//")) return "text-[var(--text-muted)]";
    if (line.includes("import") || line.includes("const") || line.includes("await"))
      return "text-[var(--plasma)]";
    if (line.includes('"')) return "text-[var(--phosphor)]";
    if (line === "" ) return "";
    return "text-[var(--text-secondary)]";
  };

  return (
    <div
      className="animate-float rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-raised)] overflow-hidden shadow-[0_40px_120px_rgba(37,99,235,0.15)]"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border-faint)] bg-[var(--bg-elevated)]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[0.7rem] text-[var(--text-muted)]">project.ts — VelnexTech</span>
      </div>
      <div className="p-5 text-[0.8rem] leading-relaxed min-h-[240px]">
        {CODE_LINES.map((_, i) => (
          <div key={i} className="flex gap-4">
            <span className="select-none text-[var(--text-ghost)] w-5 text-right shrink-0">
              {i + 1}
            </span>
            <span className={getLineColor(visibleLines[i] ?? "")}>
              {visibleLines[i] ?? ""}
              {i === visibleLines.length - 1 && (
                <span className={`inline-block w-[7px] h-[1em] bg-[var(--electric)] ml-0.5 align-middle ${cursor ? "opacity-100" : "opacity-0"}`} />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TypewriterLabel({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(t);
    }, 40);
    return () => clearInterval(t);
  }, [text]);
  return <span>{displayed}</span>;
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Grid dot bg */}
      <div className="absolute inset-0 grid-dots opacity-30 pointer-events-none" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, var(--bg-base) 80%)",
        }}
      />

      {/* Blue glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left — Text */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-8">
            {/* Label */}
            <div
              className="text-[var(--text-muted)] tracking-[0.2em] animate-fade-up opacity-0"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                animationDelay: "100ms",
                animationFillMode: "forwards",
              }}
            >
              <TypewriterLabel text="// FULL-SERVICE SOFTWARE DEVELOPMENT" />
            </div>

            {/* Main headline */}
            <h1
              className="leading-[0.9] tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-display)", fontWeight: 800 }}
            >
              <span
                className="block text-[var(--text-primary)] animate-fade-up opacity-0"
                style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
              >
                We Build
              </span>
              <span
                className="block animate-fade-up opacity-0"
                style={{
                  fontFamily: "var(--font-accent)",
                  fontStyle: "italic",
                  color: "var(--electric)",
                  animationDelay: "350ms",
                  animationFillMode: "forwards",
                }}
              >
                Software
              </span>
              <span
                className="block text-[var(--text-primary)] animate-fade-up opacity-0"
                style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
              >
                That Scales.
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="max-w-[480px] leading-[1.8] animate-fade-up opacity-0 text-[var(--text-secondary)]"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: "1.05rem",
                animationDelay: "600ms",
                animationFillMode: "forwards",
              }}
            >
              Custom software, SaaS products, and AI agents for enterprises and
              startups — engineered in India, trusted worldwide.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap items-center gap-4 animate-fade-up opacity-0"
              style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-[8px] bg-[var(--electric)] text-white font-medium transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Start Your Project
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="#services"
                className="group inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                View Our Work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Social proof */}
            <div
              className="flex items-center gap-3 animate-fade-up opacity-0"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--text-muted)",
                animationDelay: "950ms",
                animationFillMode: "forwards",
              }}
            >
              <span>Trusted by 50+ companies across 12 countries</span>
              <span className="flex gap-1 text-base">🇮🇳 🇺🇸 🇬🇧 🇦🇪 🇦🇺</span>
            </div>
          </div>

          {/* Right — Code editor */}
          <div
            className="lg:col-span-6 xl:col-span-5 animate-fade-up opacity-0"
            style={{ animationDelay: "700ms", animationFillMode: "forwards" }}
          >
            <CodeEditor />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-6 flex items-center gap-3">
          <div
            className="h-px bg-[var(--electric)] opacity-60"
            style={{ animation: "drawLine 2s ease 1.2s forwards", width: 0 }}
          />
          <span
            className="text-[var(--text-muted)] text-[0.65rem] tracking-[0.2em] rotate-90 origin-left translate-y-2"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}
