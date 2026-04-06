import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Home() {
  const { products, production } = siteConfig;
  const newItems = products.filter((p) => p.isNew).slice(0, 6);

  return (
    <>
      {/* ─── Hero：フルスクリーン シネマティック ─── */}
      <section style={{ position: "relative", height: "100vh", minHeight: 640, overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Image
          src={products[0].image}
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center top", filter: "brightness(0.35)" }}
          priority
        />
        {/* グレイン風テクスチャオーバーレイ */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%)" }} />

        <div style={{ position: "relative", zIndex: 1, padding: "0 64px", maxWidth: 800 }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 24 }}>
            Editorial Fashion
          </p>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", fontWeight: 200, lineHeight: 1.15, marginBottom: 24, color: "#fff", letterSpacing: "-0.02em" }}>
            あなたの志を、<br />映像にしませんか？
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", marginBottom: 48, lineHeight: 1.8, maxWidth: 480 }}>
            言葉にならない想いを、伝わるカタチへ。<br />
            映像の現場から生まれたファッションをあなたへ。
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/products" style={{
              display: "inline-block", padding: "16px 48px",
              background: "var(--primary)", color: "#0a0a0a",
              fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase",
              fontWeight: 700, transition: "all 0.3s",
            }}>
              Shop Now
            </Link>
            <Link href="/about" style={{
              display: "inline-block", padding: "16px 48px",
              border: "1px solid rgba(255,255,255,0.3)", color: "#fff",
              fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase",
              transition: "all 0.3s",
            }}>
              Our Story
            </Link>
          </div>
        </div>

        {/* スクロールインジケーター */}
        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)" }} />
        </div>
      </section>

      {/* ─── 映像会社コンセプト ─── */}
      <section style={{ background: "var(--bg-sub)", padding: "96px 32px", textAlign: "center" }}>
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 20 }}>
          About Us
        </p>
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 200, color: "var(--text)", lineHeight: 1.6, maxWidth: 700, margin: "0 auto 32px" }}>
          「作る」のではなく、<br />
          <em style={{ fontStyle: "normal", color: "var(--primary)" }}>"引き出してカタチにする"</em>映像制作
        </h2>
        <p style={{ fontSize: "0.9rem", color: "var(--text-light)", maxWidth: 560, margin: "0 auto 48px", lineHeight: 2 }}>
          制作の前段階である徹底したヒアリングを通じて、<br />
          経営者自身も言語化できていない「志」を引き出します。
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, maxWidth: 900, margin: "0 auto 48px" }}>
          {production.pain.map((p) => (
            <div key={p} style={{ background: "var(--bg)", padding: "32px 24px", borderLeft: "2px solid var(--primary)" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--text-light)", lineHeight: 1.8 }}>✓ {p}</p>
            </div>
          ))}
        </div>
        <Link href="/about" style={{
          display: "inline-block", padding: "14px 40px",
          border: "1px solid rgba(201,168,76,0.4)", color: "var(--primary)",
          fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase",
        }}>
          Learn More →
        </Link>
      </section>

      {/* ─── New Arrivals：縦長グリッド ─── */}
      <section style={{ padding: "96px 0", background: "var(--bg)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
            <div>
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 8 }}>New Arrivals</p>
              <h2 style={{ fontSize: "2rem", fontWeight: 200, color: "var(--text)" }}>Latest Collection</h2>
            </div>
            <Link href="/products" style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-light)", borderBottom: "1px solid var(--text-light)", paddingBottom: 2 }}>
              All Items →
            </Link>
          </div>

          {/* メイン非対称レイアウト */}
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gridTemplateRows: "auto auto", gap: 2 }}>
            {/* 大きいカード */}
            {newItems[0] && (
              <Link href={`/products/${newItems[0].id}`} style={{ gridColumn: "1/2", gridRow: "1/3", textDecoration: "none", position: "relative", overflow: "hidden", display: "block", background: "var(--bg-sub)" }}>
                <Image src={newItems[0].image} alt={newItems[0].name} width={600} height={900} style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 560, transition: "transform 0.6s ease" }} className="img-zoom" />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "40px 28px", background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}>
                  <span style={{ fontSize: "0.65rem", letterSpacing: "0.12em", background: "var(--primary)", color: "#0a0a0a", padding: "3px 10px", marginBottom: 10, display: "inline-block", fontWeight: 700 }}>NEW</span>
                  <p style={{ color: "#fff", fontWeight: 400, fontSize: "1rem", marginBottom: 4 }}>{newItems[0].name}</p>
                  <p style={{ color: "var(--primary)", fontWeight: 700 }}>¥{newItems[0].price.toLocaleString()}</p>
                </div>
              </Link>
            )}
            {/* 右側4枚 */}
            {newItems.slice(1, 5).map((p, i) => (
              <Link key={p.id} href={`/products/${p.id}`} style={{
                gridColumn: i % 2 === 0 ? "2/3" : "3/4",
                gridRow: i < 2 ? "1/2" : "2/3",
                textDecoration: "none", position: "relative", overflow: "hidden", display: "block", background: "var(--bg-sub)"
              }}>
                <Image src={p.image} alt={p.name} width={400} height={300} style={{ width: "100%", height: 280, objectFit: "cover", transition: "transform 0.6s ease" }} className="img-zoom" />
                <div style={{ padding: "16px 20px" }}>
                  <p style={{ fontSize: "0.65rem", color: "var(--primary)", marginBottom: 4, letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.category}</p>
                  <p style={{ fontWeight: 500, fontSize: "0.85rem", color: "var(--text)", marginBottom: 4 }}>{p.name}</p>
                  <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.9rem" }}>¥{p.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 制作フロー（横ライン）─── */}
      <section style={{ background: "#080808", padding: "80px 32px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 12, textAlign: "center" }}>Production Flow</p>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 200, color: "var(--text)", textAlign: "center", marginBottom: 56 }}>映像制作の流れ</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0, position: "relative" }}>
            <div style={{ position: "absolute", top: 20, left: "10%", right: "10%", height: 1, background: "linear-gradient(to right, transparent, var(--primary), transparent)" }} />
            {production.flow.map((step, i) => (
              <div key={step} style={{ textAlign: "center", padding: "0 16px" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: "0.8rem", color: "var(--primary)", background: "var(--bg)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── コレクション一覧（3列）─── */}
      <section style={{ padding: "96px 0", background: "var(--bg)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
            <div>
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 8 }}>Collection</p>
              <h2 style={{ fontSize: "2rem", fontWeight: 200, color: "var(--text)" }}>Featured Items</h2>
            </div>
            <Link href="/products" style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-light)", borderBottom: "1px solid var(--text-light)", paddingBottom: 2 }}>
              View All →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {products.slice(5, 11).map((p) => (
              <Link key={p.id} href={`/products/${p.id}`} style={{ textDecoration: "none", display: "block", background: "var(--bg-sub)", overflow: "hidden" }}>
                <div style={{ overflow: "hidden" }}>
                  <Image src={p.image} alt={p.name} width={400} height={500} style={{ width: "100%", height: 320, objectFit: "cover", display: "block", transition: "transform 0.6s ease" }} className="img-zoom" />
                </div>
                <div style={{ padding: "20px" }}>
                  <p style={{ fontSize: "0.65rem", color: "var(--primary)", marginBottom: 6, letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.category}</p>
                  <p style={{ fontWeight: 500, fontSize: "0.9rem", color: "var(--text)", marginBottom: 6 }}>{p.name}</p>
                  <p style={{ color: "var(--primary)", fontWeight: 700 }}>¥{p.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 実績バナー ─── */}
      <section style={{ background: "var(--primary)", padding: "80px 32px", textAlign: "center" }}>
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(0,0,0,0.5)", marginBottom: 16 }}>Clients</p>
        <h2 style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 400, color: "#0a0a0a", marginBottom: 32, lineHeight: 1.6 }}>
          名古屋グランパス、アンミカほか<br />多数の経営者・事業責任者様の想いを映像にしてきました。
        </h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap", marginBottom: 40 }}>
          {production.clients.map((c) => (
            <span key={c} style={{ fontSize: "0.85rem", fontWeight: 700, color: "rgba(0,0,0,0.6)", letterSpacing: "0.05em" }}>{c}</span>
          ))}
        </div>
        <Link href="/contact" style={{
          display: "inline-block", padding: "14px 48px",
          background: "#0a0a0a", color: "var(--primary)",
          fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase",
          fontWeight: 700,
        }}>
          映像制作を依頼する →
        </Link>
      </section>

      {/* ─── 安心ポリシー ─── */}
      <section style={{ background: "var(--bg-sub)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
          {[
            { icon: "▲", title: "送料一律880円", desc: "¥30,000以上で送料無料" },
            { icon: "◆", title: "返品・交換OK", desc: "到着後7日以内・未使用品" },
            { icon: "●", title: "銀行振込", desc: "ご注文後に口座をご案内" },
          ].map((item, i) => (
            <div key={item.title} style={{ padding: "40px 32px", textAlign: "center", borderRight: i < 2 ? "1px solid var(--border)" : "none" }}>
              <div style={{ fontSize: "0.7rem", color: "var(--primary)", marginBottom: 12, letterSpacing: "0.1em" }}>{item.icon}</div>
              <p style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--text)", marginBottom: 6, letterSpacing: "0.05em" }}>{item.title}</p>
              <p style={{ fontSize: "0.78rem", color: "var(--text-light)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .img-zoom:hover { transform: scale(1.04); }
      `}</style>
    </>
  );
}
