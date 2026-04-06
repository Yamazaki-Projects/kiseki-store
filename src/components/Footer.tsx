import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const { company, nav } = siteConfig;

  return (
    <footer style={{ background: "#080808", borderTop: "1px solid var(--border)", marginTop: 0 }}>
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "64px 32px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          {/* ブランド */}
          <div>
            <div style={{ fontSize: "1.2rem", fontWeight: 700, letterSpacing: "0.25em", marginBottom: 8, color: "var(--primary)", textTransform: "uppercase" }}>
              KISEKI
            </div>
            <p style={{ fontSize: "0.8rem", color: "var(--text-light)", lineHeight: 1.8, maxWidth: 280, marginBottom: 16 }}>
              {siteConfig.description}
            </p>
            <p style={{ fontSize: "0.75rem", color: "var(--text-light)", opacity: 0.6 }}>
              {company.name}
            </p>
          </div>
          {/* ナビ */}
          <div>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: 20, opacity: 0.5 }}>Navigation</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} style={{ fontSize: "0.85rem", color: "var(--text-light)", textDecoration: "none", transition: "color 0.2s" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/law" style={{ fontSize: "0.85rem", color: "var(--text-light)", textDecoration: "none" }}>
                  特定商取引法
                </Link>
              </li>
            </ul>
          </div>
          {/* 会社情報 */}
          <div>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: 20, opacity: 0.5 }}>Company</p>
            <p style={{ fontSize: "0.8rem", lineHeight: 2.2, color: "var(--text-light)" }}>
              〒{company.postalCode}<br />
              {company.address}<br />
              {company.tel}<br />
              {company.email}
            </p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.72rem", color: "var(--text-light)", opacity: 0.4 }}>
          <span>&copy; {new Date().getFullYear()} {company.name}. All Rights Reserved.</span>
          <span style={{ letterSpacing: "0.1em" }}>KISEKI STORE</span>
        </div>
      </div>
    </footer>
  );
}
