import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import ProductOptions from "@/components/ProductOptions";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return siteConfig.products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = siteConfig.products.find((p) => p.id === id);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = siteConfig.products.find((p) => p.id === id);
  if (!product) notFound();

  return (
    <>
      <section className="section">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">ホーム</Link>
            <span>/</span>
            <Link href="/products">商品一覧</Link>
            <span>/</span>
            <span>{product.name}</span>
          </nav>

          <div className="k-product-grid">
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={800}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                priority
              />
            </div>
            <div>
              <p style={{ fontSize: "0.72rem", color: "var(--primary)", marginBottom: 8, letterSpacing: "0.1em", textTransform: "uppercase" }}>{product.category}</p>
              <h1 style={{ fontSize: "clamp(1.4rem, 4vw, 1.75rem)", fontWeight: 400, marginBottom: 16, color: "var(--text)" }}>
                {product.name}
                {product.isNew && <span className="badge-new">NEW</span>}
              </h1>
              <p style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)", fontWeight: 700, color: "var(--primary)", marginBottom: 4 }}>
                ¥{product.price.toLocaleString()}
              </p>
              <p style={{ fontSize: "0.78rem", color: "var(--text-light)", marginBottom: 24 }}>税込・送料別</p>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "var(--text)", marginBottom: 24 }}>
                {product.description}
              </p>
              <ProductOptions product={product} />
              <div style={{ marginTop: 24, padding: 16, background: "var(--bg-sub)", fontSize: "0.78rem", color: "var(--text-light)", lineHeight: 1.9 }}>
                <p>送料：{siteConfig.policy.shippingFee}（{siteConfig.policy.freeShippingOver.toLocaleString()}円以上で送料無料）</p>
                <p>返品：{siteConfig.policy.returnPeriod}以内・{siteConfig.policy.returnNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .k-product-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          margin-top: 8px;
        }
        @media (max-width: 768px) {
          .k-product-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </>
  );
}
