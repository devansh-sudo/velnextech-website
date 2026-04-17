"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "AI Agents", href: "#ai" },
    { label: "Products", href: "#" },
    { label: "About", href: "#about" },
    { label: "Blog", href: "#" },
  ];

  return (
    <>
      <header
        ref={navRef}
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-[rgba(6,8,15,0.85)] border-b border-[var(--border-faint)]"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span
              className="text-xl font-[800] leading-none select-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-[var(--text-primary)]">velnex</span>
              <span className="text-[var(--electric)]">tech</span>
            </span>
            <span
              className="text-[0.5rem] text-[var(--text-muted)] mt-[-8px] ml-[1px]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              ®
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 400 }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}
              aria-label="Open command palette"
            >
              <span>cmd</span>
              <kbd className="px-1.5 py-0.5 rounded border border-[var(--border-subtle)] text-[0.65rem]">⌘K</kbd>
            </button>
            <span className="text-[var(--border-visible)]">|</span>
            <Link
              href="#contact"
              className="px-4 py-2 rounded-[8px] bg-[var(--electric)] text-white text-sm font-medium transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Let&apos;s Build
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-[var(--text-secondary)] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--text-secondary)] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--text-secondary)] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-[var(--bg-raised)] border-l border-[var(--border-subtle)] flex flex-col pt-20 px-8 gap-6 transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {links.map((l, i) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-lg transition-colors animate-fade-up"
              style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-5 py-3 rounded-[8px] bg-[var(--electric)] text-white text-center font-medium"
          >
            Let&apos;s Build
          </Link>
        </div>
      </div>
    </>
  );
}
