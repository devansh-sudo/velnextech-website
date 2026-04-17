import Link from "next/link";

export default function Footer() {
  const services = [
    "Custom Software",
    "SaaS Products",
    "AI Agents",
    "Mobile Apps",
    "Enterprise Solutions",
    "Tech Consulting",
  ];

  const resources = ["About Us", "Blog", "Careers", "Privacy Policy", "Terms of Service"];

  const socials = [
    { label: "LinkedIn ↗", href: "https://linkedin.com/company/velnextech" },
    { label: "GitHub ↗", href: "https://github.com/velnextech" },
    { label: "Twitter ↗", href: "https://twitter.com/velnextech" },
  ];

  return (
    <footer
      className="border-t"
      style={{ background: "var(--bg-void)", borderColor: "var(--border-faint)" }}
      role="contentinfo"
    >
      <div className="max-w-[1440px] mx-auto px-6 py-16">
        {/* Top row */}
        <div className="flex items-center justify-between mb-12 pb-8 border-b" style={{ borderColor: "var(--border-faint)" }}>
          <Link href="/" className="flex items-baseline gap-1">
            <span
              className="text-xl font-[800]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-[var(--text-primary)]">velnex</span>
              <span className="text-[var(--electric)]">tech</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6" aria-label="Footer navigation">
            {["Services", "AI Agents", "About", "Blog", "Contact"].map((l) => (
              <Link
                key={l}
                href="#"
                className="text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem" }}
              >
                {l}
              </Link>
            ))}
          </nav>
        </div>

        {/* 4-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company desc */}
          <div className="lg:col-span-2">
            <p
              className="text-[var(--text-secondary)] leading-[1.8] mb-6 max-w-[380px]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.875rem" }}
            >
              VelnexTech is a full-service software development company building
              custom software, SaaS products, and AI agents for enterprises and
              startups worldwide.
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-[var(--electric)] transition-colors"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-[var(--text-primary)] mb-4 font-semibold"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.875rem" }}
            >
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="#"
                    className="text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.8rem" }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3
              className="text-[var(--text-primary)] mb-4 font-semibold"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.875rem" }}
            >
              Company
            </h3>
            <ul className="space-y-2.5">
              {resources.map((r) => (
                <li key={r}>
                  <Link
                    href="#"
                    className="text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.8rem" }}
                  >
                    {r}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className="mt-6 flex items-center gap-2 text-[var(--text-muted)]"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem" }}
            >
              <span>Press</span>
              <kbd className="px-1.5 py-0.5 rounded border border-[var(--border-subtle)] text-[0.6rem]">⌘K</kbd>
              <span>to search</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--border-faint)" }}
        >
          <p
            className="text-[var(--text-muted)]"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem" }}
          >
            © 2025 Shivnetra Computers Pvt. Ltd. All rights reserved.
          </p>
          <p
            className="text-[var(--text-muted)]"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem" }}
          >
            Designed & Developed with ♥ in India
          </p>
          <div className="flex items-center gap-4">
            {["Privacy Policy", "Terms", "Sitemap"].map((l) => (
              <Link
                key={l}
                href="#"
                className="text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem" }}
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
