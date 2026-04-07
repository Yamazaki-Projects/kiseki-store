import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Home() {
  const { production, products } = siteConfig;

  return (
    <>
      {/* ─── Hero ─── */}
      <section style={{ position: "relative", height: "100vh", minHeight: 640, overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Image
          src={products[5].image}
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center top", filter: "brightness(0.25)" }}
          priority
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.7) 40%, transparent)" }} />

        <div style={{ position: "relative", zIndex: 1, padding: "0 64px", maxWidth: 760 }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 28 }}>
            Kiseki Video Production
          </p>
          <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 200, lineHeight: 1.2, marginBottom: 28, color: "#fff", letterSpacing: "-0.02em" }}>
            あなたの志を、<br />映像にしませんか？
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", marginBottom: 52, lineHeight: 2, maxWidth: 440 }}>
            言葉にならない想いを、伝わるカタチへ。<br />
            徹底したヒアリングから始まる映像制作。
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <Link href="/contact" style={{
              display: "inline-block", padding: "16px 48px",
              background: "var(--primary)", color: "#0a0a0a",
              fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700,
            }}>
              映像制作を依頼する
            </Link>
            <Link href="#services" style={{
              display: "inline-block", padding: "16px 40px",
              border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)",
              fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase",
            }}>
              サービスを見る
            </Link>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
        </div>
      </section>

      {/* ─── コンセプト ─── */}
      <section style={{ background: "var(--bg-sub)", padding: "120px 32px", textAlign: "center" }}>
        <p style={{ fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 24 }}>Our Philosophy</p>
        <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 3rem)", fontWeight: 200, color: "var(--text)", lineHeight: 1.7, maxWidth: 720, margin: "0 auto 40px" }}>
          単なる映像制作会社ではありません。<br />
          一人ひとりの<em style={{ fontStyle: "normal", color: "var(--primary)" }}>「志」</em>に向き合い、<br />
          その想いを未来へ繋ぐことを使命としています。
        </h2>
        <div style={{ width: 48, height: 1, background: "var(--primary)", margin: "0 auto" }} />
      </section>

      {/* ─── サービス ─── */}
      <section id="services" style={{ padding: "120px 0", background: "var(--bg)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 32px" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 16 }}>Services</p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 200, color: "var(--text)", marginBottom: 72 }}>制作サービス</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 2 }}>
            {production.services.map((s, i) => (
              <div key={s} style={{ background: "var(--bg-sub)", padding: "40px 24px", borderTop: "2px solid var(--primary)" }}>
                <p style={{ fontSize: "0.68rem", color: "var(--primary)", marginBottom: 16, letterSpacing: "0.1em" }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p style={{ fontSize: "0.9rem", color: "var(--text)", lineHeight: 1.8, fontWeight: 400 }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 差別化ポイント ─── */}
      <section style={{ background: "#080808", padding: "120px 32px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 16, textAlign: "center" }}>Why Kiseki</p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 200, color: "var(--text)", marginBottom: 72, textAlign: "center" }}>
            「作る」のではなく、<br />
            <span style={{ color: "var(--primary)" }}>引き出してカタチにする</span>映像制作
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            <div style={{ background: "var(--bg-sub)", padding: "56px 48px" }}>
              <p style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: 20 }}>一般的な映像制作</p>
              <p style={{ fontSize: "1.1rem", fontWeight: 300, color: "var(--text-light)", lineHeight: 2 }}>
                綺麗に撮る・編集する<br />ことが中心。
              </p>
            </div>
            <div style={{ background: "var(--primary)", padding: "56px 48px" }}>
              <p style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.5)", marginBottom: 20 }}>奇蹟動画制作所</p>
              <p style={{ fontSize: "1.1rem", fontWeight: 500, color: "#0a0a0a", lineHeight: 2 }}>
                徹底したヒアリングで<br />
                経営者の「志」を引き出し、<br />
                心を動かす映像にする。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── こんな方へ ─── */}
      <section style={{ padding: "120px 32px", background: "var(--bg-sub)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 16, textAlign: "center" }}>For You</p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 200, color: "var(--text)", marginBottom: 64, textAlign: "center" }}>こんな方のお力になれます</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {production.pain.map((p, i) => (
              <div key={p} style={{ background: "var(--bg)", padding: "48px 32px" }}>
                <div style={{ fontSize: "0.68rem", color: "var(--primary)", marginBottom: 20, letterSpacing: "0.2em" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p style={{ fontSize: "1rem", color: "var(--text)", lineHeight: 1.9, fontWeight: 300 }}>
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 制作フロー ─── */}
      <section id="works" style={{ padding: "120px 32px", background: "var(--bg)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 16, textAlign: "center" }}>Flow</p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 200, color: "var(--text)", marginBottom: 72, textAlign: "center" }}>制作の流れ</h2>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: 32, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, var(--border), transparent)" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0 }}>
              {production.flow.map((step, i) => (
                <div key={step} style={{ textAlign: "center", padding: "0 16px" }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: "50%",
                    border: "1px solid var(--primary)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 24px", fontSize: "0.75rem", color: "var(--primary)",
                    background: "var(--bg)", position: "relative", zIndex: 1,
                    fontWeight: 300, letterSpacing: "0.05em"
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "var(--text)", marginBottom: 8, fontWeight: 400 }}>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 実績クライアント ─── */}
      <section style={{ background: "var(--bg-sub)", padding: "80px 32px", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 64, flexWrap: "wrap" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--text-light)", opacity: 0.5, whiteSpace: "nowrap" }}>Clients</p>
          {production.clients.map((c) => (
            <span key={c} style={{ fontSize: "0.9rem", color: "var(--text-light)", letterSpacing: "0.05em" }}>{c}</span>
          ))}
        </div>
      </section>

      {/* ─── Storeバナー ─── */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: 480, display: "flex", alignItems: "center" }}>
        <Image src={products[0].image} alt="" fill style={{ objectFit: "cover", objectPosition: "center", filter: "brightness(0.2)" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }} />
        <div style={{ position: "relative", zIndex: 1, padding: "80px 64px", maxWidth: 640 }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 20 }}>
            Kiseki Store
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", fontWeight: 200, color: "#fff", lineHeight: 1.4, marginBottom: 20 }}>
            映像の現場から<br />生まれたファッション
          </h2>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", marginBottom: 40, lineHeight: 1.9 }}>
            被写体が纏うリアルな一着を。<br />
            エディトリアルな視点で厳選した20,000〜30,000円のコレクション。
          </p>
          <Link href="/products" style={{
            display: "inline-block", padding: "16px 48px",
            background: "var(--primary)", color: "#0a0a0a",
            fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700,
          }}>
            Shop Now →
          </Link>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: "120px 32px", textAlign: "center", background: "var(--bg)" }}>
        <p style={{ fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 24 }}>Contact</p>
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 200, color: "var(--text)", marginBottom: 16, lineHeight: 1.6 }}>
          まずはお気軽にご相談ください
        </h2>
        <p style={{ fontSize: "0.9rem", color: "var(--text-light)", marginBottom: 48, lineHeight: 2 }}>
          ヒアリングから始まります。想いを言葉にする必要はありません。
        </p>
        <Link href="/contact" style={{
          display: "inline-block", padding: "18px 64px",
          background: "var(--primary)", color: "#0a0a0a",
          fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700,
        }}>
          お問い合わせ
        </Link>
      </section>
    </>
  );
}
