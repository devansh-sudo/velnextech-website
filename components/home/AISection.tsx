"use client";

import { useState, useRef, useEffect } from "react";

const AGENT_CARDS = [
  { type: "Sales Agent", what: "Qualifies leads, sends follow-ups, books demos", saving: "Saves 12hrs/week" },
  { type: "Support Agent", what: "Handles 80% of support tickets automatically", saving: "60% cost reduction" },
  { type: "Data Agent", what: "Processes & reports data in real-time", saving: "Real-time insights" },
];

const CHAT_MESSAGES = [
  { role: "user", text: "Hi, I'm interested in your enterprise plan" },
  { role: "agent", text: "Hi! Great to hear that. Could you tell me a bit about your company size and what specific challenges you're looking to solve?" },
  { role: "user", text: "We're a 200-person company. We need CRM automation." },
  { role: "agent", text: "Perfect. Based on your size, our Enterprise AI Suite would save your team ~18 hours/week on CRM tasks. I can schedule a 30-min demo with our team — would Thursday 3 PM work?" },
  { role: "user", text: "Yes that works!" },
  { role: "agent", text: "Done! Meeting confirmed for Thursday at 3 PM. I've sent a calendar invite to your email. Our solutions architect will walk you through a custom demo. See you then! 🎯" },
];

function AIChat() {
  const [messages, setMessages] = useState<typeof CHAT_MESSAGES>([]);
  const [typing, setTyping] = useState(false);
  const [msgIdx, setMsgIdx] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (msgIdx >= CHAT_MESSAGES.length) {
      setTimeout(() => { setMessages([]); setMsgIdx(0); }, 4000);
      return;
    }
    const msg = CHAT_MESSAGES[msgIdx];
    const delay = msgIdx === 0 ? 800 : msg.role === "agent" ? 1200 : 800;

    const t = setTimeout(() => {
      if (msg.role === "agent") {
        setTyping(true);
        setTimeout(() => {
          setTyping(false);
          setMessages((prev) => [...prev, msg]);
          setMsgIdx((i) => i + 1);
        }, 1400);
      } else {
        setMessages((prev) => [...prev, msg]);
        setMsgIdx((i) => i + 1);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [msgIdx]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  return (
    <div
      className="rounded-2xl border overflow-hidden flex flex-col h-[420px]"
      style={{ background: "var(--bg-raised)", borderColor: "var(--border-subtle)" }}
    >
      {/* Header */}
      <div
        className="px-5 py-3.5 border-b flex items-center gap-3"
        style={{ borderColor: "var(--border-faint)", background: "var(--bg-elevated)" }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--phosphor)] animate-pulse-dot" />
        <div>
          <div
            className="text-[var(--text-primary)] text-sm font-medium"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            VelnexTech AI Agent — Sales Assistant
          </div>
          <div
            className="text-[var(--phosphor)] text-[0.65rem]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            ● LIVE
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-[var(--electric)] text-white rounded-br-sm"
                  : "bg-[var(--bg-elevated)] text-[var(--text-secondary)] rounded-bl-sm border border-[var(--border-faint)]"
              }`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {m.text}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div
              className="px-4 py-3 rounded-2xl rounded-bl-sm bg-[var(--bg-elevated)] border border-[var(--border-faint)] flex gap-1"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] animate-pulse-dot"
                  style={{ animationDelay: `${i * 150}ms` }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div
        className="px-4 py-3 border-t"
        style={{ borderColor: "var(--border-faint)" }}
      >
        <div
          className="text-[0.65rem] text-[var(--text-muted)] text-center"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Simulated AI agent response — for demonstration only
        </div>
      </div>
    </div>
  );
}

export default function AISection() {
  return (
    <section
      id="ai"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "var(--bg-void)" }}
    >
      {/* Purple cloud */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-7">
            <p
              className="text-[var(--text-muted)] tracking-[0.15em] mb-6"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}
            >
              // ARTIFICIAL INTELLIGENCE
            </p>
            <h2
              className="mb-6 leading-[0.95]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--text-hero)" }}
            >
              <span className="block text-[var(--text-primary)]">AI Agents That</span>
              <span className="block" style={{ color: "var(--phosphor)" }}>
                Never Sleep
              </span>
            </h2>
            <p
              className="max-w-[500px] text-[var(--text-secondary)] leading-[1.8] mb-10"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "1rem" }}
            >
              Deploy custom AI agents that automate your most time-consuming business
              workflows — from lead qualification to data processing — running 24/7 with
              zero downtime.
            </p>

            {/* Agent cards horizontal */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              {AGENT_CARDS.map((card, i) => (
                <div
                  key={i}
                  className="shrink-0 w-[260px] rounded-xl p-5 border-l-2 border"
                  style={{
                    background: "var(--bg-raised)",
                    borderLeftColor: "var(--plasma)",
                    borderColor: "var(--border-faint)",
                  }}
                >
                  <div
                    className="text-[var(--plasma)] font-semibold mb-2"
                    style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem" }}
                  >
                    {card.type}
                  </div>
                  <div
                    className="text-[var(--text-secondary)] leading-[1.6] mb-3"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.8rem" }}
                  >
                    {card.what}
                  </div>
                  <div
                    className="text-[var(--phosphor)]"
                    style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}
                  >
                    {card.saving}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — chat demo */}
          <div className="lg:col-span-5">
            <AIChat />
          </div>
        </div>
      </div>
    </section>
  );
}
