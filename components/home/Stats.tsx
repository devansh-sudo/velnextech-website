"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { number: 150, suffix: "+", label: "Projects Delivered" },
  { number: 98, suffix: "%", label: "Client Satisfaction" },
  { number: 50, suffix: "+", label: "Enterprise Clients" },
  { number: 12, suffix: "", label: "Countries Served" },
];

function ScrambleNumber({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active) return;
    const duration = 1500;
    const steps = 30;
    const interval = duration / steps;
    let step = 0;
    const t = setInterval(() => {
      step++;
      if (step >= steps) {
        setDisplay(String(target));
        clearInterval(t);
      } else {
        const rand = Math.floor(Math.random() * (target * 1.5));
        setDisplay(String(rand));
      }
    }, interval);
    return () => clearInterval(t);
  }, [active, target]);

  return (
    <span>
      <span
        className="tabular-nums"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 800,
          color: "var(--text-primary)",
        }}
      >
        {display}
      </span>
      <span style={{ color: "var(--electric)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
        {suffix}
      </span>
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full border-y"
      style={{ background: "var(--bg-raised)", borderColor: "var(--border-faint)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`py-12 px-8 flex flex-col gap-2 ${i < STATS.length - 1 ? "border-r border-[var(--border-faint)]" : ""}`}
            >
              <ScrambleNumber target={s.number} suffix={s.suffix} active={active} />
              <p
                className="text-[var(--text-secondary)]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.875rem" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
