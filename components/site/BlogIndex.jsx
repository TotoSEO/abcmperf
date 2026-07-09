import React from "react";
import Link from "next/link";
import { Icon } from "@/components/ds";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { getAllPosts } from "@/lib/blog";
import { getAllPostsFromPayload } from "@/lib/payload-posts";

function frDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(d);
}
function withBase(s, base) {
  return typeof s === "string" ? s.split("%ASSET%").join(base) : s;
}

export async function BlogIndex() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  // Payload est la source de vérité (les articles créés/supprimés dans l'admin
  // remontent). Repli sur les fichiers d'origine si la base est injoignable.
  const posts = (await getAllPostsFromPayload()) || getAllPosts();

  return (
    <div className="bloglist">
      <ScrollReveal />
      <header className="bloglist-hero on-dark" data-theme="dark">
        <div className="bloglist-hero__deco" aria-hidden="true">
          <span className="blog-hero__blob blog-hero__blob--1" />
          <span className="blog-hero__blob blog-hero__blob--2" />
        </div>
        <div className="container bloglist-hero__inner">
          <span className="bloglist-hero__eyebrow">Le blog</span>
          <h1 className="bloglist-hero__title">Articles &amp; actualités du digital</h1>
          <p className="bloglist-hero__sub">
            L&apos;actualité du web, de l&apos;IA, du marketing et de la formation, décryptée par nos experts.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="bloglist-grid">
            {posts.map((p, i) => {
              const cover = p.cover ? withBase(p.cover.src, base) : null;
              return (
                <Link key={p.slug} href={`/${p.slug}/`} className="blogcard" style={{ "--_i": i }} data-reveal>
                  <span className={"blogcard__media" + (cover ? "" : " blogcard__media--empty")}>
                    {cover ? <img src={cover} alt={p.cover.alt || p.title} loading="lazy" /> : null}
                  </span>
                  <span className="blogcard__body">
                    {p.date ? <span className="blogcard__date">{frDate(p.date)}</span> : null}
                    <span className="blogcard__title">{p.title}</span>
                    {p.description ? <span className="blogcard__desc">{p.description}</span> : null}
                    <span className="blogcard__go">Lire l&apos;article <Icon name="arrow-right" size={16} /></span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
