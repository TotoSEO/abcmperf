import React from "react";
import { SCENE_HTML } from "./serviceScenes";

// Bloc « vitrine » des pages service : une colonne texte + une scène animée
// (SVG/CSS pur, cf. app/serviceviz.css). Une scène par service, teintée par hue.
export const SERVICE_SHOWCASE = {
  "referencement-strasbourg": { viz: "seo", hue: "green", kicker: "Référencement naturel",
    title: "On vous fait grimper dans les résultats Google.",
    text: "Un travail de fond — technique, contenu, notoriété — qui installe durablement votre site en haut de la page, là où se trouvent les clics." },
  "agence-sea": { viz: "sea", hue: "yellow", kicker: "Publicité Google Ads",
    title: "Tout en haut de Google, dès aujourd'hui.",
    text: "Des campagnes SEA qui placent votre offre au-dessus des résultats naturels, ciblées sur les bonnes recherches et pilotées au résultat." },
  "referencement-ia-geo": { viz: "geo", hue: "orange", kicker: "Référencement GEO / IA",
    title: "Cité par ChatGPT, Perplexity et Gemini.",
    text: "Quand vos prospects posent leur question à une IA, votre marque doit faire partie de la réponse. Le GEO vous y installe." },
  "agence-web-strasbourg": { viz: "web", hue: "blue", kicker: "Création de site internet",
    title: "Un site construit autour de vos objectifs.",
    text: "Design sur mesure, structure pensée pour convertir et socle technique solide : on assemble chaque bloc au service de votre business." },
  "creation-site-ecommerce": { viz: "shop", hue: "green", kicker: "Site e-commerce",
    title: "Une boutique pensée pour vendre.",
    text: "Fiches produits, panier, paiement : un parcours d'achat fluide et optimisé pour transformer vos visiteurs en clients." },
  "maintenance-site-web": { viz: "maint", hue: "blue", kicker: "Maintenance & hébergement",
    title: "Votre site, toujours en ligne.",
    text: "Hébergement, sauvegardes, sécurité et mises à jour : on veille en continu pour que votre site reste rapide et disponible." },
  "audit-referencement": { viz: "audit", hue: "green", kicker: "Audit SEO",
    title: "Le diagnostic qui débloque votre référencement.",
    text: "On passe votre site au crible — technique, contenu, popularité — et vous repartez avec un plan d'action clair et priorisé." },
  "community-management": { viz: "comm", hue: "magenta", kicker: "Community management",
    title: "Une communauté qui s'anime.",
    text: "Contenus, publications et modération : on fait vivre vos réseaux et on transforme votre audience en communauté engagée." },
  "video-reseaux-sociaux": { viz: "video", hue: "magenta", kicker: "Vidéos réseaux sociaux",
    title: "Des vidéos pensées pour performer.",
    text: "Formats courts, rythme et accroches : des vidéos qui captent l'attention et boostent votre visibilité sur les réseaux." },
  "videos-marque-employeur": { viz: "talent", hue: "orange", kicker: "Marque employeur",
    title: "Attirez et fidélisez les talents.",
    text: "Des contenus qui donnent envie de vous rejoindre et valorisent votre culture d'entreprise auprès des meilleurs profils." },
  "marketing-externalise": { viz: "pilot", hue: "blue", kicker: "Marketing externalisé",
    title: "Tout votre marketing, piloté.",
    text: "SEO, publicité, réseaux, contenu : une direction marketing externalisée qui orchestre vos leviers sans que vous ayez à recruter." },
  "personal-branding": { viz: "brand", hue: "magenta", kicker: "Personal branding",
    title: "Votre image qui rayonne.",
    text: "On construit et diffuse votre image d'expert : profil, contenus et prise de parole pour vous faire reconnaître et suivre." },
};

// Scène animée seule (réutilisable). vizKey ∈ clés de SCENE_HTML.
export function ServiceViz({ vizKey, className = "" }) {
  const html = SCENE_HTML[vizKey];
  if (!html) return null;
  return (
    <div
      className={`sv-viz sv-viz-${vizKey}${className ? " " + className : ""}`}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

// Bloc complet 2 colonnes pour une page service.
export function ServiceShowcase({ slug }) {
  const s = SERVICE_SHOWCASE[slug];
  if (!s) return null;
  const hue = `var(--logo-${s.hue})`;
  return (
    <section className="sv-showcase" style={{ "--_h": hue }}>
      <div className="container sv-showcase__grid">
        <div className="sv-showcase__copy" data-reveal>
          <p className="sv-showcase__kicker"><span className="sv-showcase__dot" aria-hidden="true" />{s.kicker}</p>
          <h2 className="sv-showcase__title">{s.title}</h2>
          <p className="sv-showcase__text">{s.text}</p>
        </div>
        <div className="sv-screen" style={{ "--_h": hue }} data-reveal="right">
          <ServiceViz vizKey={s.viz} />
        </div>
      </div>
    </section>
  );
}
