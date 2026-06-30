import React from "react";
import Link from "next/link";
import { Button, Icon } from "@/components/ds";
import { ABCM_INFO } from "@/data/formations";

const SITE = ABCM_INFO.url;
const ARTICLES_URL = "/articles/";

function frDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(d);
}

function withBase(s, base) {
  return typeof s === "string" ? s.split("%ASSET%").join(base) : s;
}

function buildJsonLd(post, base) {
  const url = SITE + `/${post.slug}/`;
  const img = post.cover ? withBase(post.cover.src, base).replace(/^\//, SITE + "/") : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": url + "#article",
    headline: post.title,
    description: post.description || undefined,
    image: img ? [img] : undefined,
    datePublished: post.date || undefined,
    dateModified: post.modified || post.date || undefined,
    inLanguage: "fr-FR",
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: ABCM_INFO.name, url: SITE },
    publisher: { "@id": SITE + "/#organization" },
  };
}

export function BlogArticle({ post }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const html = withBase(post.html || "", base);
  const cover = post.cover ? { ...post.cover, src: withBase(post.cover.src, base) } : null;
  const jsonLd = buildJsonLd(post, base);

  return (
    <article className="blog">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="blog-hero on-dark" data-theme="dark">
        <div className="blog-hero__deco" aria-hidden="true">
          <span className="blog-hero__blob blog-hero__blob--1" />
          <span className="blog-hero__blob blog-hero__blob--2" />
        </div>
        <div className="container blog-hero__inner">
          <nav className="blog-crumbs" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <Link href={ARTICLES_URL}>Articles</Link>
            <span aria-hidden="true">/</span>
            <span className="blog-crumbs__current">{post.title}</span>
          </nav>
          <h1 className="blog-hero__title">{post.title}</h1>
          {post.date ? (
            <p className="blog-hero__meta">
              <Icon name="clock" size={16} /> Publié le {frDate(post.date)}
            </p>
          ) : null}
        </div>
      </header>

      {cover ? (
        <div className="container">
          <figure className="blog-cover">
            <img src={cover.src} alt={cover.alt || post.title} />
          </figure>
        </div>
      ) : null}

      <div className="container blog-wrap">
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: html }} />

        <footer className="blog-foot">
          <Link href={ARTICLES_URL} className="blog-foot__back">
            <Icon name="arrow-left" size={16} /> Tous les articles
          </Link>
          <div className="blog-foot__cta">
            <p>Envie d&apos;aller plus loin sur le sujet&nbsp;?</p>
            <Button as={Link} href="/contact" variant="primary" iconRight={<Icon name="arrow-right" size={18} />}>Parler à un expert</Button>
          </div>
        </footer>
      </div>
    </article>
  );
}
