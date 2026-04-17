"use client";

import { useState } from "react";

export default function CTA() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "var(--bg-base)" }}>
      {/* Diagonal split */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 hidden lg:block"
        style={{ background: "var(--bg-raised)" }}
      />
      <div
        className="absolute inset-y-0 left-1/2 hidden lg:block"
        style={{
          borderLeft: "1px solid var(--border-faint)",
          transform: "skewX(-3deg)",
          transformOrigin: "top",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p
              className="text-[var(--text-muted)] tracking-[0.15em] mb-8"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}
            >
              // START A PROJECT
            </p>
            <h2
              className="leading-[0.95] mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--text-hero)" }}
            >
              <span className="block text-[var(--text-primary)]">Let&apos;s Build</span>
              <span className="block text-[var(--text-primary)]">Something</span>
              <span
                className="block"
                style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", color: "var(--electric)" }}
              >
                Extraordinary.
              </span>
            </h2>

            <div className="flex flex-wrap gap-6">
              {[
                { icon: "⚡", label: "24hr response" },
                { icon: "📋", label: "Free consultation" },
                { icon: "🔒", label: "NDA protected" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-[var(--text-muted)]"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-3">
              {[
                { icon: "📧", label: "hello@velnextech.com" },
                { icon: "📍", label: "Faridabad, Haryana, India" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-3 text-[var(--text-secondary)]"
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem" }}
                >
                  <span>{c.icon}</span>
                  <span>{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4">
                <div
                  className="w-16 h-16 rounded-full border-2 border-[var(--phosphor)] flex items-center justify-center text-2xl"
                  style={{ color: "var(--phosphor)" }}
                >
                  ✓
                </div>
                <h3
                  className="text-[var(--text-primary)] text-xl font-semibold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Message sent!
                </h3>
                <p
                  className="text-[var(--text-secondary)] text-center"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { key: "name", label: "Your Name", placeholder: "John Smith", type: "text" },
                  { key: "email", label: "Email Address", placeholder: "john@company.com", type: "email" },
                  { key: "company", label: "Company", placeholder: "Acme Corp", type: "text" },
                ].map((f) => (
                  <div key={f.key} className="flex flex-col gap-1.5">
                    <label
                      htmlFor={f.key}
                      className="text-[var(--text-muted)]"
                      style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em" }}
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.key}
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className="bg-transparent border-0 border-b pb-2 text-[var(--text-primary)] placeholder-[var(--text-ghost)] outline-none focus:border-[var(--electric)] transition-colors"
                      style={{
                        borderBottom: "1px solid var(--border-subtle)",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.95rem",
                      }}
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-[var(--text-muted)]"
                    style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em" }}
                  >
                    What do you need?
                  </label>
                  <textarea
                    id="message"
                    required
                    placeholder="Tell us about your project..."
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-transparent border-0 border-b pb-2 text-[var(--text-primary)] placeholder-[var(--text-ghost)] outline-none focus:border-[var(--electric)] transition-colors resize-none"
                    style={{
                      borderBottom: "1px solid var(--border-subtle)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-[8px] bg-[var(--electric)] text-white font-medium transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:scale-[1.01]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
