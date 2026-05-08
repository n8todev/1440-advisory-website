const SERVICES = [
  {
    title: "System Design",
    body: "We map the full picture — clinical, personal, and environmental — then architect a coordinated structure with clear roles, accountabilities, and measurable milestones.",
  },
  {
    title: "Coordinated Implementation",
    body: "We sit at the center of every provider relationship, ensuring the plan is executed as designed, communication stays unified, and no gap goes unaddressed.",
  },
  {
    title: "Measurable Continuity",
    body: "Progress is tracked, reported, and adjusted. We define what success looks like before we begin, then hold the entire system accountable to it.",
  },
];

export default function Home() {
  return (
    <main style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>

      {/* ── NAV ── */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between"
        style={{
          background: "#F7F5F0",
          borderBottom: "1px solid #D4CFC6",
          paddingLeft: "96px",
          paddingRight: "96px",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#1A1814",
          }}
        >
          1440 Advisory
        </span>

        <div className="flex items-center" style={{ gap: "36px" }}>
          {["About", "Services", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="nav-link"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        className="flex flex-col justify-center"
        style={{
          background: "#F7F5F0",
          minHeight: "100vh",
          paddingLeft: "96px",
          paddingRight: "96px",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#8A9BA8",
            marginBottom: "28px",
          }}
        >
          Private Advisory — Behavioral Health Systems
        </p>

        <h1
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontWeight: 300,
            fontSize: "96px",
            lineHeight: 1.02,
            color: "#1A1814",
            margin: 0,
            marginBottom: "36px",
            letterSpacing: "-0.01em",
          }}
        >
          Stability, by{" "}
          <em style={{ fontStyle: "italic" }}>design.</em>
        </h1>

        <p
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: 1.75,
            color: "#6B6860",
            maxWidth: "480px",
            marginBottom: "48px",
          }}
        >
          We help individuals and families stabilize complex behavioral health
          challenges through structured system design, coordinated
          implementation, and measurable continuity.
        </p>

        <div>
          <a href="#contact" className="btn-primary">
            Begin a conversation
          </a>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section
        id="about"
        style={{
          background: "#1A1814",
          padding: "120px 96px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#8A9BA8",
            marginBottom: "28px",
          }}
        >
          Our Approach
        </p>

        <h2
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "72px",
            lineHeight: 1.08,
            color: "#F7F5F0",
            marginBottom: "36px",
            letterSpacing: "-0.01em",
            maxWidth: "760px",
          }}
        >
          A different kind of advisory.
        </h2>

        <p
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: 1.75,
            color: "rgba(247,245,240,0.55)",
            maxWidth: "560px",
          }}
        >
          Most families navigate complex systems alone. We sit alongside
          them — designing the structure, coordinating the people, and
          ensuring nothing falls through the gaps.
        </p>
      </section>

      {/* ── SERVICES ── */}
      <section
        id="services"
        style={{
          background: "#F7F5F0",
          padding: "120px 96px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#8A9BA8",
            marginBottom: "28px",
          }}
        >
          What We Do
        </p>

        <h2
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontWeight: 300,
            fontSize: "72px",
            lineHeight: 1.08,
            color: "#1A1814",
            marginBottom: "72px",
            letterSpacing: "-0.01em",
          }}
        >
          Three disciplines.{" "}
          <em style={{ fontStyle: "italic" }}>One system.</em>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {SERVICES.map((service) => (
            <div
              key={service.title}
              style={{
                borderTop: "1px solid #D4CFC6",
                paddingTop: "32px",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  color: "#1A1814",
                  marginBottom: "16px",
                  textTransform: "uppercase",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "#6B6860",
                }}
              >
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        style={{
          background: "#1A1814",
          padding: "120px 96px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontWeight: 300,
            fontSize: "64px",
            lineHeight: 1.1,
            color: "#F7F5F0",
            marginBottom: "24px",
            letterSpacing: "-0.01em",
            maxWidth: "680px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Every engagement begins with a{" "}
          <em style={{ fontStyle: "italic" }}>conversation.</em>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontWeight: 300,
            fontSize: "15px",
            lineHeight: 1.75,
            color: "rgba(247,245,240,0.55)",
            maxWidth: "440px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "48px",
          }}
        >
          We work with a small number of families at any time. Inquiries are
          handled with complete discretion.
        </p>

        <a href="mailto:inquiry@1440advisory.com" className="btn-ghost">
          Begin a conversation
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: "#1A1814",
          borderTop: "1px solid rgba(247,245,240,0.15)",
          padding: "28px 96px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontWeight: 300,
            fontSize: "11px",
            color: "rgba(247,245,240,0.4)",
          }}
        >
          © 2026 1440 Advisory Group
        </span>

        <span
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontWeight: 300,
            fontSize: "24px",
            letterSpacing: "0.12em",
            color: "rgba(247,245,240,0.4)",
          }}
        >
          1440
        </span>

        <div style={{ display: "flex", gap: "28px" }}>
          {["Privacy", "Terms"].map((label) => (
            <a key={label} href="#" className="footer-link">
              {label}
            </a>
          ))}
        </div>
      </footer>

    </main>
  );
}
