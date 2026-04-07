"use client";
import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(15,15,15,0.97)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{
        maxWidth: "var(--max-width)", margin: "0 auto",
        padding: "0 24px", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* ロゴ */}
        <Link href="/" style={{
          fontSize: "1.1rem", fontWeight: 700,
          letterSpacing: "0.25em", color: "var(--primary)",
          textDecoration: "none", textTransform: "uppercase",
        }}>
          KISEKI
        </Link>

        {/* PC ナビ */}
        <nav className="kiseki-nav-pc">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} style={{
              fontSize: "0.72rem", letterSpacing: "0.12em",
              color: "var(--text-light)", textDecoration: "none",
              textTransform: "uppercase", fontWeight: 400,
              transition: "color 0.2s",
            }}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ハンバーガーボタン */}
        <button
          className="kiseki-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
          style={{
            background: "none", border: "none", cursor: "pointer",
            padding: 4, display: "flex", flexDirection: "column", gap: 5,
          }}
        >
          <span style={{ display: "block", width: 22, height: 1.5, background: "var(--primary)", transition: "all 0.25s", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
          <span style={{ display: "block", width: 22, height: 1.5, background: "var(--primary)", transition: "all 0.25s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: 22, height: 1.5, background: "var(--primary)", transition: "all 0.25s", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
        </button>
      </div>

      {/* スマホ ドロワーメニュー */}
      {menuOpen && (
        <nav style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "#0f0f0f", borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          display: "flex", flexDirection: "column", zIndex: 200,
        }}>
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "18px 24px", fontSize: "0.85rem",
                color: "var(--text-light)", textDecoration: "none",
                borderBottom: "1px solid var(--border)",
                letterSpacing: "0.08em", textTransform: "uppercase",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}

      <style>{`
        .kiseki-nav-pc { display: flex; gap: 32px; align-items: center; }
        .kiseki-hamburger { display: none; }
        @media (max-width: 768px) {
          .kiseki-nav-pc { display: none; }
          .kiseki-hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
