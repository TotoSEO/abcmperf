import React from "react";
import Link from "next/link";
import { Icon } from "@/components/ds";
import { assetPath } from "@/data/formations";

// Panneaux « accordéon » : au survol, la carte grandit et réduit les autres.
// L'équipe : 8 experts (photo réelle, nom et fonction).
const MEMBERS = [
  { kind: "person", title: "Caroline", role: "Founder & CEO", photo: "team/caroline.webp", hue: "magenta", text: "Cofondatrice : vision, stratégie et direction de l'agence." },
  { kind: "person", title: "Audrey", role: "Founder & CEO", photo: "team/audrey.webp", hue: "green", text: "Cofondatrice : pilotage des projets et relation client." },
  { kind: "person", title: "Thomas", role: "Communication & IA", photo: "team/thomas.webp", hue: "orange", text: "Communication et intelligence artificielle au service de votre visibilité." },
  { kind: "person", title: "Anto", role: "Webdesigner", photo: "team/anto.webp", hue: "blue", text: "Conçoit des interfaces soignées, modernes et pensées pour convertir." },
  { kind: "person", title: "Johan", role: "Développeur Web", photo: "team/johan.webp", hue: "magenta", text: "Développe des sites rapides, robustes et sur-mesure." },
  { kind: "person", title: "Patrice", role: "SEO · SEA", photo: "team/patrice.webp", hue: "green", text: "Référencement naturel et campagnes payantes pilotées au ROI." },
  { kind: "person", title: "Sakhavat", role: "SEO · SEA", photo: "team/sakhavat.webp", hue: "yellow", text: "Optimise votre présence sur Google, en organique comme en publicité." },
  { kind: "person", title: "Jérôme", role: "Développeur Web", photo: "team/jerome.webp", hue: "blue", text: "Intègre et développe vos projets web avec exigence." },
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
            <article className="ta ta--person" key={m.title} style={{ "--_hue": `var(--logo-${m.hue})` }}>
              <img className="ta__bg" src={assetPath(m.photo)} alt={`${m.title}, ${m.role}`} loading="lazy" />
              <span className="ta__tint" aria-hidden="true" />
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
