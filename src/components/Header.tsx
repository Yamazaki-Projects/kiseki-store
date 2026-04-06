import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(15,15,15,0.95)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{
        maxWidth: "var(--max-width)", margin: "0 auto",
        padding: "0 32px", height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <Link href="/" style={{
          fontSize: "1.1rem", fontWeight: 700,
          letterSpacing: "0.25em", color: "var(--primary)",
          textDecoration: "none", textTransform: "uppercase",
        }}>
          KISEKI
        </Link>
        <nav style={{ display: "flex", gap: 40, alignItems: "center" }}>
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} style={{
              fontSize: "0.75rem", letterSpacing: "0.12em",
              color: "var(--text-light)", textDecoration: "none",
              textTransform: "uppercase", fontWeight: 400,
              transition: "color 0.2s",
            }}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
