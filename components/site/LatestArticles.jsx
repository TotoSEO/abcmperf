import React from "react";
import { SectionHeading, Icon } from "@/components/ds";
import { ARTICLES } from "@/data/articles";

export function LatestArticles() {
  if (!ARTICLES.length) return null;
  return (
    <section className="section articles-wrap">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Le blog"
          title="Les derniers articles du blog"
          description="Tendances, conseils et actualités du marketing digital."
        />
        <div className="articles__grid">
          {ARTICLES.map((a) => (
            <a key={a.url} href={a.url} target="_blank" rel="noreferrer" className="article-card">
              {a.date && <span className="article-card__date">{a.date}</span>}
              <h3 className="article-card__title">{a.title}</h3>
              {a.excerpt && <p className="article-card__excerpt">{a.excerpt}</p>}
              <span className="article-card__link">Lire l'article <Icon name="arrow-right" size={16} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
