import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Home() {
  const { production, products } = siteConfig;

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="k-hero">
        <Image src={products[5].image} alt="" fill style={{ objectFit: "cover", objectPosition: "center top", filter: "brightness(0.25)" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.75) 50%, transparent)" }} />
        <div className="k-hero-content">
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 20 }}>
            Kiseki Video Production
          </p>
          <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)", fontWeight: 200, lineHeight: 1.2, marginBottom: 20, color: "#fff", letterSpacing: "-0.02em" }}>
            あなたの志を、<br />映像にしませんか？
          </h1>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", marginBottom: 40, lineHeight: 2, maxWidth: 400 }}>
            言葉にならない想いを、伝わるカタチへ。<br />
            徹底したヒアリングから始まる映像制作。
          </p>
          <div className="k-hero-btns">
            <Link href="/contact" className="k-btn-gold">映像制作を依頼する</Link>
            <Link href="#services" className="k-btn-outline">サービスを見る</Link>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: "0.55rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
        </div>
      </section>

      {/* ─── コンセプト ─── */}
      <section style={{ background: "var(--bg-sub)", padding: "80px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 20 }}>Our Philosophy</p>
        <h2 style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.5rem)", fontWeight: 200, color: "var(--text)", lineHeight: 1.8, maxWidth: 680, margin: "0 auto 32px" }}>
          単なる映像制作会社ではありません。<br />
          一人ひとりの<em style={{ fontStyle: "normal", color: "var(--primary)" }}>「志」</em>に向き合い、<br />
          その想いを未来へ繋ぐことを使命としています。
        </h2>
        <div style={{ width: 40, height: 1, background: "var(--primary)", margin: "0 auto" }} />
      </section>

      {/* ─── サービス ─── */}
      <section id="services" style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 12 }}>Services</p>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 200, color: "var(--text)", marginBottom: 48 }}>制作サービス</h2>
          <div className="k-services-grid">
            {production.services.map((s, i) => (
              <div key={s} style={{ background: "var(--bg-sub)", padding: "32px 20px", borderTop: "2px solid var(--primary)" }}>
                <p style={{ fontSize: "0.65rem", color: "var(--primary)", marginBottom: 12, letterSpacing: "0.1em" }}>{String(i + 1).padStart(2, "0")}</p>
                <p style={{ fontSize: "0.88rem", color: "var(--text)", lineHeight: 1.8 }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 差別化ポイント ─── */}
      <section style={{ background: "#080808", padding: "80px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 12, textAlign: "center" }}>Why Kiseki</p>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 200, color: "var(--text)", marginBottom: 48, textAlign: "center" }}>
            「作る」のではなく、<br />
            <span style={{ color: "var(--primary)" }}>引き出してカタチにする</span>映像制作
          </h2>
          <div className="k-compare-grid">
            <div style={{ background: "var(--bg-sub)", padding: "40px 32px" }}>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: 16 }}>一般的な映像制作</p>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--text-light)", lineHeight: 2 }}>綺麗に撮る・編集する<br />ことが中心。</p>
            </div>
            <div style={{ background: "var(--primary)", padding: "40px 32px" }}>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.5)", marginBottom: 16 }}>奇蹟動画制作所</p>
              <p style={{ fontSize: "1rem", fontWeight: 500, color: "#0a0a0a", lineHeight: 2 }}>徹底したヒアリングで<br />経営者の「志」を引き出し、<br />心を動かす映像にする。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── こんな方へ ─── */}
      <section style={{ padding: "80px 24px", background: "var(--bg-sub)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 12, textAlign: "center" }}>For You</p>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 200, color: "var(--text)", marginBottom: 48, textAlign: "center" }}>こんな方のお力になれます</h2>
          <div className="k-pain-grid">
            {production.pain.map((p, i) => (
              <div key={p} style={{ background: "var(--bg)", padding: "36px 24px" }}>
                <div style={{ fontSize: "0.65rem", color: "var(--primary)", marginBottom: 16, letterSpacing: "0.2em" }}>{String(i + 1).padStart(2, "0")}</div>
                <p style={{ fontSize: "0.95rem", color: "var(--text)", lineHeight: 1.9, fontWeight: 300 }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 制作フロー ─── */}
      <section id="works" style={{ padding: "80px 24px", background: "var(--bg)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 12, textAlign: "center" }}>Flow</p>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 200, color: "var(--text)", marginBottom: 48, textAlign: "center" }}>制作の流れ</h2>
          <div className="k-flow-grid">
            {production.flow.map((step, i) => (
              <div key={step} style={{ textAlign: "center", padding: "0 8px" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", border: "1px solid var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: "0.72rem", color: "var(--primary)", background: "var(--bg)", fontWeight: 300 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text)" }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── クライアント ─── */}
      <section style={{ background: "var(--bg-sub)", padding: "48px 24px", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--text-light)", opacity: 0.5 }}>Clients</p>
          {production.clients.map((c) => (
            <span key={c} style={{ fontSize: "0.88rem", color: "var(--text-light)", letterSpacing: "0.05em" }}>{c}</span>
          ))}
        </div>
      </section>

      {/* ─── Store バナー ─── */}
      <section className="k-store-banner">
        <Image src={products[0].image} alt="" fill style={{ objectFit: "cover", objectPosition: "center", filter: "brightness(0.2)" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }} />
        <div className="k-store-content">
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 16 }}>Kiseki Store</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)", fontWeight: 200, color: "#fff", lineHeight: 1.4, marginBottom: 16 }}>
            映像の現場から<br />生まれたファッション
          </h2>
          <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.5)", marginBottom: 32, lineHeight: 1.9 }}>
            被写体が纏うリアルな一着を。<br />
            20,000〜30,000円のコレクション。
          </p>
          <Link href="/products" className="k-btn-gold">Shop Now →</Link>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: "80px 24px", textAlign: "center", background: "var(--bg)" }}>
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 20 }}>Contact</p>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 200, color: "var(--text)", marginBottom: 12, lineHeight: 1.6 }}>
          まずはお気軽にご相談ください
        </h2>
        <p style={{ fontSize: "0.88rem", color: "var(--text-light)", marginBottom: 40, lineHeight: 2 }}>
          ヒアリングから始まります。想いを言葉にする必要はありません。
        </p>
        <Link href="/contact" className="k-btn-gold">お問い合わせ</Link>
      </section>

      <style>{`
        /* Hero */
        .k-hero { position: relative; height: 100vh; min-height: 560px; overflow: hidden; display: flex; align-items: center; }
        .k-hero-content { position: relative; z-index: 1; padding: 0 48px; max-width: 680px; }
        .k-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }

        /* Buttons */
        .k-btn-gold { display: inline-block; padding: 14px 40px; background: var(--primary); color: #0a0a0a; font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; text-decoration: none; }
        .k-btn-outline { display: inline-block; padding: 14px 32px; border: 1px solid rgba(255,255,255,0.25); color: rgba(255,255,255,0.7); font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; text-decoration: none; }

        /* Grids */
        .k-services-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 2px; }
        .k-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
        .k-pain-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
        .k-flow-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0; }

        /* Store banner */
        .k-store-banner { position: relative; overflow: hidden; min-height: 420px; display: flex; align-items: center; }
        .k-store-content { position: relative; z-index: 1; padding: 64px 48px; max-width: 600px; }

        /* Mobile */
        @media (max-width: 768px) {
          .k-hero { height: 85vh; min-height: 480px; }
          .k-hero-content { padding: 0 24px; }
          .k-services-grid { grid-template-columns: repeat(2, 1fr); }
          .k-compare-grid { grid-template-columns: 1fr; }
          .k-pain-grid { grid-template-columns: 1fr; }
          .k-flow-grid { grid-template-columns: repeat(3, 1fr); gap: 16px; }
          .k-store-content { padding: 48px 24px; }
        }

        @media (max-width: 480px) {
          .k-services-grid { grid-template-columns: 1fr; }
          .k-flow-grid { grid-template-columns: repeat(2, 1fr); }
          .k-hero-btns { flex-direction: column; }
          .k-btn-gold, .k-btn-outline { text-align: center; }
        }
      `}</style>
    </>
  );
}
