export default function OGPage() {
  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        background: "#06080f",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Grid dots */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Blue glow */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
        }}
      />
      {/* Purple glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-50px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "48px" }}>
          <span style={{ fontSize: "28px", fontWeight: 800, color: "#f8fafc", letterSpacing: "-0.02em" }}>
            velnex
          </span>
          <span style={{ fontSize: "28px", fontWeight: 800, color: "#2563eb", letterSpacing: "-0.02em" }}>
            tech
          </span>
          <span style={{ fontSize: "12px", color: "#475569", marginTop: "-16px" }}>®</span>
        </div>

        {/* Tagline */}
        <div style={{ fontSize: "13px", color: "#475569", letterSpacing: "0.15em", marginBottom: "20px", fontFamily: "monospace" }}>
          // FULL-SERVICE SOFTWARE DEVELOPMENT
        </div>

        {/* Main headline */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ fontSize: "72px", fontWeight: 800, color: "#f8fafc", lineHeight: 0.95, letterSpacing: "-0.03em" }}>
            Build. Launch.
          </div>
          <div style={{ fontSize: "72px", fontWeight: 800, color: "#2563eb", lineHeight: 0.95, letterSpacing: "-0.03em", fontStyle: "italic" }}>
            Dominate.
          </div>
        </div>

        {/* Sub */}
        <div style={{ fontSize: "20px", color: "#94a3b8", fontWeight: 300, maxWidth: "700px", lineHeight: 1.6, marginBottom: "48px" }}>
          Custom software, SaaS products, and AI agents for enterprises and startups — engineered in India, trusted worldwide.
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "48px" }}>
          {[
            { n: "150+", l: "Projects" },
            { n: "98%", l: "Satisfaction" },
            { n: "50+", l: "Clients" },
            { n: "12", l: "Countries" },
          ].map((s) => (
            <div key={s.l} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "28px", fontWeight: 800, color: "#f8fafc" }}>
                {s.n}
              </span>
              <span style={{ fontSize: "13px", color: "#475569", fontFamily: "monospace" }}>
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom right badge */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "80px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "#475569",
          fontSize: "13px",
          fontFamily: "monospace",
        }}
      >
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00ff88", display: "inline-block" }} />
        velnextech.com
      </div>
    </div>
  );
}
