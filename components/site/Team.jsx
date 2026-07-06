import React from "react";
import Link from "next/link";
import { Icon } from "@/components/ds";
import { assetPath } from "@/data/formations";

// Panneaux "accordéon" : au survol, la carte grandit et réduit les autres.
// Audrey Braun (photo réelle) + les pôles d'expertise de l'agence.
const MEMBERS = [
  { kind: "person", title: "Audrey Braun", role: "Formatrice experte certifiée", photo: "audrey-braun.png", hue: "green", text: "Anime nos formations Qualiopi, en présentiel à Strasbourg ou à distance." },
  { icon: "target", hue: "magenta", title: "Stratégie & direction", text: "On cadre votre stratégie, on priorise les actions et on pilote l'ensemble du projet." },
  { icon: "monitor", hue: "blue", title: "Web & e-commerce", text: "Des sites rapides, sur-mesure et pensés pour convertir vos visiteurs en clients." },
  { icon: "search", hue: "green", title: "Référencement SEO & GEO", text: "On vous rend visible sur Google et dans les moteurs de réponse par IA." },
  { icon: "megaphone", hue: "orange", title: "Réseaux sociaux & vidéo", text: "Contenus, animation et vidéos qui font vivre votre marque au quotidien." },
  { icon: "line-chart", hue: "yellow", title: "Publicité & acquisition", text: "Des campagnes Google Ads et social ads pilotées au retour sur investissement." },
];

export function Team() {
  return (
    <section className="section team" id="equipe">
      <div className="team__deco" aria-hidden="true">
        <span className="rond rond--blue team__r1" />
        <span className="rond rond--ring rond--magenta team__r2" />
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
          <p className="team__hint" aria-hidden="true">Survolez une carte pour la découvrir</p>
        </header>

        <div className="team-acc" data-reveal>
          {MEMBERS.map((m) => (
            <article className={"ta" + (m.kind === "person" ? " ta--person" : "")} key={m.title} style={{ "--_hue": `var(--logo-${m.hue})` }}>
              <span className="ta__top">
                {m.kind === "person" ? (
                  <span className="ta__photo"><img src={assetPath(m.photo)} alt={m.title} loading="lazy" /></span>
                ) : (
                  <span className="ta__ic"><Icon name={m.icon} size={26} /></span>
                )}
              </span>
              <span className="ta__vlabel">{m.title}</span>
              <div className="ta__reveal">
                <span className="ta__title">{m.title}</span>
                {m.role ? <span className="ta__role">{m.role}</span> : null}
                <p className="ta__desc">{m.text}</p>
              </div>
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
