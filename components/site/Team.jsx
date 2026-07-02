import React from "react";
import Link from "next/link";
import { Icon } from "@/components/ds";
import { assetPath } from "@/data/formations";

// Membre nommé (photo réelle) + pôles d'expertise de l'équipe.
const FEATURED = {
  name: "Audrey Braun",
  role: "Formatrice experte certifiée",
  photo: "audrey-braun.png",
  hue: "green",
  text: "Anime nos formations Qualiopi, en présentiel à Strasbourg ou à distance.",
};

const POLES = [
  { icon: "target", hue: "magenta", title: "Stratégie & direction", text: "On cadre votre stratégie, on priorise les actions et on pilote l'ensemble." },
  { icon: "monitor", hue: "blue", title: "Web & e-commerce", text: "Des sites rapides, sur-mesure et pensés pour convertir vos visiteurs." },
  { icon: "search", hue: "green", title: "Référencement SEO & GEO", text: "On vous rend visible sur Google et dans les moteurs d'IA." },
  { icon: "megaphone", hue: "orange", title: "Réseaux sociaux & vidéo", text: "Contenus, animation et vidéos qui font vivre votre marque." },
  { icon: "line-chart", hue: "yellow", title: "Publicité & acquisition", text: "Des campagnes Google Ads pilotées au retour sur investissement." },
];

export function Team() {
  return (
    <section className="section team" id="equipe">
      <div className="team__deco" aria-hidden="true">
        <span className="rond rond--blue team__r1" />
        <span className="rond rond--magenta team__r2" />
        <span className="rond rond--orange team__r3" />
      </div>
      <div className="container">
        <header className="team__head" data-reveal>
          <span className="team__eyebrow"><Icon name="users" size={15} /> L&apos;équipe</span>
          <h2 className="team__title">L&apos;équipe ABCM</h2>
          <p className="team__lead">
            Derrière ABCM, une équipe pluridisciplinaire à taille humaine : des experts réunis à Strasbourg,
            chacun dans son domaine, pour faire grandir votre entreprise avec exigence et proximité.
          </p>
        </header>

        <div className="team__grid" data-reveal>
          <article className="team-card team-card--person" style={{ "--_hue": `var(--logo-${FEATURED.hue})` }}>
            <span className="team-card__photo">
              <img src={assetPath(FEATURED.photo)} alt={FEATURED.name} loading="lazy" />
            </span>
            <span className="team-card__name">{FEATURED.name}</span>
            <span className="team-card__role">{FEATURED.role}</span>
            <span className="team-card__text">{FEATURED.text}</span>
          </article>

          {POLES.map((p) => (
            <article className="team-card" key={p.title} style={{ "--_hue": `var(--logo-${p.hue})` }}>
              <span className="team-card__ic"><Icon name={p.icon} size={24} /></span>
              <span className="team-card__name">{p.title}</span>
              <span className="team-card__text">{p.text}</span>
            </article>
          ))}
        </div>

        <div className="team__cta" data-reveal>
          <p>Une équipe proche de vous, à Strasbourg et dans tout le Grand Est.</p>
          <Link href="/contact" className="team__link">Rencontrer l&apos;équipe <Icon name="arrow-right" size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
