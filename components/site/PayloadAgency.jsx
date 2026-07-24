import React from "react";
import Link from "next/link";
import { Button, Icon } from "@/components/ds";
import { ABCM_SERVICES, SERVICE_GROUPS, getService } from "@/data/services";
import { ABCM_INFO } from "@/data/formations";
import { ScrollReveal } from "@/components/site/ScrollReveal";

// Fiche service « Agence Payload » (/agence-payload).
//
// ANGLE : ABCM est expert de Payload CMS (le CMS headless open-source bâti sur
// Next.js / React / TypeScript). On VEND la conception de sites et de
// back-offices sur-mesure avec Payload : modélisation du contenu, front Next.js
// rapide, sécurité, souveraineté des données, migration. Preuve par l'exemple :
// ce site lui-même tourne sous Payload + Next.js (dogfooding assumé).
//
// Gabarit dédié : ADN des fiches service (.svcd2-*) partagé avec la landing IA
// (.aia-*), en accent bleu, plus un namespace .payl-* pour le mockup back-office
// du hero. Composant serveur, sans JS client.

const SITE = ABCM_INFO.url;
const SLUG = "agence-payload";

// ── Glyphes « tech » (SVG en ligne, style trait cohérent avec lucide) ──
function Glyph({ name, size = 24 }) {
  const p = {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round",
  };
  switch (name) {
    case "layout": // back-office / panneau d'admin
      return (<svg {...p}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 4v16" /><path d="M12 9h6M12 12.5h6M12 16h4" /></svg>);
    case "bolt": // performance
      return (<svg {...p}><path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z" /></svg>);
    case "code": // TypeScript / code typé
      return (<svg {...p}><path d="M8.5 8 4.5 12l4 4" /><path d="M15.5 8l4 4-4 4" /><path d="M13 5.5 11 18.5" /></svg>);
    case "api": // headless / API multi-canal
      return (<svg {...p}><circle cx="6" cy="12" r="2.4" /><circle cx="18" cy="6" r="2.4" /><circle cx="18" cy="18" r="2.4" /><path d="M8.1 10.8 15.9 7.2M8.1 13.2l7.8 3.6" /></svg>);
    case "shield": // sécurité / RGPD
      return (<svg {...p}><path d="M12 3 5 6v5c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6z" /><path d="M9.2 12.2 11 14l4-4.2" /></svg>);
    case "database": // vos données / propriété
      return (<svg {...p}><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" /><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" /></svg>);
    default:
      return (<svg {...p}><circle cx="12" cy="12" r="8" /></svg>);
  }
}

// ── Textes courts (constantes → évite l'échappement des apostrophes en JSX) ──
const EYEBROW = "CMS headless & Next.js";
const HERO_LEAD = "Payload, c'est le CMS nouvelle génération : un back-office sur-mesure et un site Next.js ultra-rapide, réunis dans une seule base de code. On conçoit, on développe et on héberge votre projet de A à Z, à Strasbourg.";
const WHY_TITLE = "Le CMS qui ne vous enferme plus";
const WHY_1 = "Pendant des années, il fallait choisir : un CMS simple à administrer mais rigide, ou un développement sur-mesure puissant mais lourd à faire évoluer. Payload réconcilie les deux. Vous obtenez un back-office clair, taillé exactement pour votre métier, sur un site bâti avec les technologies les plus modernes du web (Next.js, React, TypeScript).";
const WHY_2 = "Chez ABCM, on ne fait pas que déployer Payload pour nos clients : le site que vous consultez en ce moment tourne lui-même sous Payload et Next.js. On connaît ses forces et ses limites parce qu'on l'utilise au quotidien, en production. C'est cette expérience concrète qu'on met au service de votre projet.";
const CAPS_TITLE = "Ce que Payload change concrètement pour vous";
const USES_TITLE = "Payload brille sur ces projets";
const METHOD_TITLE = "De l'idée à la mise en ligne, un cap clair";
const VS_TITLE = "Payload face aux CMS traditionnels";
const PLANS_TITLE = "Comment démarrer votre projet Payload";
const GUAR_TITLE = "Nos engagements";
const FAQ_TITLE = "Vos questions sur Payload";
const PROOF_KICKER = "La preuve par l'exemple";
const PROOF_H = "Ce site tourne sous Payload CMS et Next.js";
const PROOF_P = "Le site que vous parcourez a été conçu et développé par ABCM avec Payload et Next.js : pages, blog, portfolio, formations, redirections, tout est piloté depuis un back-office sur-mesure. Ce qu'on vous propose, on l'utilise nous-mêmes, tous les jours.";
const CTA_BAND_H = "Payload est-il le bon choix pour votre projet ?";
const CTA_BAND_P = "On étudie votre besoin et on vous répond franchement, sans jargon et sans engagement.";
const FINAL_H = "Parlons de votre projet Payload";
const FINAL_P = "Un échange de 30 minutes pour cadrer votre projet, estimer le budget et voir si Payload et Next.js sont faits pour vous.";

// Stack technique défilante (bandeau).
const STACK = ["Payload CMS", "Next.js", "React", "TypeScript", "PostgreSQL", "GraphQL", "API REST", "Vercel", "Node.js", "Lexical", "SSR & SSG", "SEO technique"];

const METRICS = [
  { big: "100 %", label: "sur-mesure : votre back-office épouse votre métier" },
  { big: "Next.js", label: "un front rapide, pensé pour Google et les Core Web Vitals" },
  { big: "Ce site", label: "tourne lui-même sous Payload : on l'utilise vraiment" },
];

const HERO_POINTS = [
  "Un back-office pensé pour vous, pas un thème à rallonge",
  "Un front Next.js rapide, taillé pour le référencement",
  "Votre code, vos données : vous restez propriétaire",
];

const CAPS = [
  { g: "layout", t: "Un back-office sur-mesure",
    d: "Fini les interfaces génériques noyées d'options inutiles. On modélise vos contenus (pages, produits, projets, équipe) exactement comme vous les pensez. Vos équipes publient sans se former pendant des semaines." },
  { g: "bolt", t: "Un site ultra-rapide",
    d: "Le front est construit avec Next.js et rendu en statique quand c'est possible : des pages qui s'affichent instantanément, d'excellents Core Web Vitals et un vrai bonus pour votre référencement Google." },
  { g: "code", t: "TypeScript de bout en bout",
    d: "Le back et le front partagent le même langage typé. Résultat : moins de bugs, un code plus robuste, plus simple à maintenir et à faire évoluer dans le temps, sans mauvaise surprise." },
  { g: "api", t: "Headless : un contenu, tous les canaux",
    d: "Vos contenus sont exposés via une API (REST et GraphQL). Le même contenu alimente votre site, une application mobile, une borne ou un partenaire, sans le ressaisir. Vous n'êtes plus prisonnier d'un seul format." },
  { g: "shield", t: "Sécurité & souveraineté",
    d: "Pas de galaxie de plugins tiers à surveiller : la surface d'attaque est réduite. Payload est open-source et vos données peuvent être hébergées en France, dans le respect du RGPD." },
  { g: "database", t: "Vous restez propriétaire",
    d: "Le code, la base de données, les contenus : tout vous appartient. Aucun abonnement propriétaire qui vous garde en otage, aucune dépendance à une plateforme fermée." },
];

const USES = [
  { g: "layout", t: "Sites vitrines & corporate premium",
    d: "Un site rapide, sécurisé et facile à mettre à jour, avec un back-office taillé pour vos équipes. Idéal quand l'image de marque et la performance comptent vraiment." },
  { g: "api", t: "Plateformes & applications métier",
    d: "Espaces membres, extranets, outils internes avec gestion fine des rôles et des droits. Payload gère nativement l'authentification et les permissions." },
  { g: "database", t: "E-commerce & projets headless",
    d: "Une boutique ou un catalogue diffusés sur plusieurs canaux et connectés à vos outils (paiement, ERP, CRM). Le contenu d'un côté, l'expérience de l'autre." },
];

const STEPS = [
  { t: "Cadrage & architecture de contenu", d: "On analyse votre métier et vos besoins, puis on modélise vos contenus : quelles collections, quels champs, quels rôles utilisateurs. C'est la fondation d'un back-office qui vous ressemble." },
  { t: "Design & maquettes", d: "On conçoit une interface à votre image, pensée pour convertir et pour être facile à administrer. Vous validez le rendu avant la moindre ligne de code." },
  { t: "Développement Payload + Next.js", d: "On construit le back-office sur-mesure et le front Next.js avec un code propre, typé et documenté. Intégrations, API, formulaires, SEO technique : tout est prévu." },
  { t: "Recette, formation & mise en ligne", d: "On teste, on vous forme à votre back-office (c'est simple, promis), puis on met en ligne et on assure le suivi. Vous devenez autonome sans jamais être seul." },
];

const VS = [
  { k: "Back-office", ia: "Sur-mesure, épuré, adapté à votre métier", old: "Générique, alourdi par les extensions" },
  { k: "Performance", ia: "Front Next.js rapide, souvent statique", old: "Thème + plugins : des pages lourdes à optimiser" },
  { k: "Sécurité", ia: "Surface réduite, code typé et maîtrisé", old: "Chaque plugin tiers est une faille potentielle" },
  { k: "Évolutivité", ia: "Code propre qui grandit avec vous", old: "Dette technique et refontes à répétition" },
  { k: "SEO technique", ia: "Rendu et balises maîtrisés dès le départ", old: "À corriger plugin après plugin" },
  { k: "Vos données", ia: "100 % à vous, hébergeables en France", old: "Souvent dispersées, parfois verrouillées" },
];

const STATS = [
  { big: "2015", label: "l'agence conçoit des sites dans le Grand Est" },
  { big: "4,9/5", label: "note moyenne de nos clients accompagnés" },
  { big: "Next.js", label: "+ Payload : la stack qui propulse ce site même" },
  { big: "100 %", label: "de votre code et de vos données restent les vôtres" },
];

const PLANS = [
  { name: "Audit & cadrage", price: "Sur devis", tag: "",
    pitch: "On étudie votre projet, votre existant et vos objectifs, puis on vous dit franchement si Payload est le bon choix, et pourquoi. Vous repartez avec une feuille de route claire et un périmètre chiffré.",
    feats: ["Analyse de votre besoin & de l'existant", "Reco d'architecture & de stack", "Estimation de budget & de planning"],
    cta: "Demander un cadrage" },
  { name: "Site sur-mesure Payload", price: "Sur devis", tag: "Le plus choisi",
    pitch: "La création complète de votre site : modélisation du back-office, design, développement Next.js, SEO technique, mise en ligne et formation de vos équipes.",
    feats: ["Back-office 100 % sur-mesure", "Front Next.js rapide & optimisé SEO", "Formation & prise en main incluses", "Hébergement & suivi en option"],
    cta: "Lancer mon projet" },
  { name: "Migration vers Payload", price: "Sur devis", tag: "",
    pitch: "Vous étouffez sous WordPress ou un CMS rigide ? On migre vos contenus et on reconstruit un socle sain, sans perdre votre référencement.",
    feats: ["Reprise de vos contenus existants", "Plan de redirections SEO", "Refonte technique maîtrisée"],
    cta: "Étudier ma migration" },
];

const GUARANTEES = [
  { i: "monitor", t: "Un back-office qui vous rend autonome", d: "On construit une interface claire et on forme vos équipes. Publier, modifier, ajouter une page : vous le faites vous-même, sans dépendre de l'agence." },
  { i: "line-chart", t: "Performance & SEO au cœur", d: "Vitesse, structure, balises, Core Web Vitals : l'optimisation n'est pas une option ajoutée après coup, elle est intégrée dès la conception." },
  { i: "shield-check", t: "Votre code vous appartient", d: "Pas de boîte noire ni de plateforme fermée. Le code source et les données sont à vous, hébergeables où vous voulez, en France si besoin." },
  { i: "users", t: "Une équipe à Strasbourg", d: "Un interlocuteur dédié, pas un ticket anonyme. On connaît Payload parce qu'on l'utilise pour nos propres projets, en production." },
];

const FAQS = [
  { q: "C'est quoi, Payload CMS ?",
    a: "Payload est un CMS headless open-source construit avec Next.js, React et TypeScript. Concrètement, il sépare la gestion de contenu (le back-office) de l'affichage (le site) : vous administrez vos contenus dans une interface sur-mesure, et ils s'affichent sur un site ultra-rapide. C'est une alternative moderne aux CMS traditionnels comme WordPress." },
  { q: "Payload ou WordPress, que choisir ?",
    a: "WordPress reste pertinent pour un blog ou un site simple monté rapidement. Payload prend l'avantage dès que vous avez des besoins spécifiques : back-office adapté à votre métier, performances élevées, sécurité renforcée, évolutivité sans dette technique. Si votre site est stratégique et destiné à durer, Payload est un investissement plus sain." },
  { q: "Faut-il un développeur pour gérer le contenu au quotidien ?",
    a: "Non. Une fois le site en ligne, le back-office est pensé pour des personnes non techniques : vous ajoutez une page, modifiez un texte ou une image, publiez un article, sans jamais toucher au code. On vous forme à votre interface lors de la mise en ligne." },
  { q: "En quoi Payload est-il différent de Strapi ?",
    a: "Les deux sont des CMS headless. Payload se distingue par son intégration native à Next.js, son typage TypeScript de bout en bout et son back-office particulièrement soigné. Pour un projet React ou Next.js, Payload offre une expérience plus intégrée et un code plus homogène." },
  { q: "Peut-on héberger les données en France ?",
    a: "Oui. Payload étant open-source, on garde la main sur l'hébergement : vos données peuvent rester en France, chez un hébergeur souverain, en conformité avec le RGPD. Vous ne dépendez pas d'une plateforme étrangère fermée." },
  { q: "Peut-on migrer mon site WordPress vers Payload ?",
    a: "Oui, c'est un projet courant. On reprend vos contenus, on reconstruit un socle propre et on met en place un plan de redirections pour préserver votre référencement. L'objectif : gagner en performance et en sérénité sans perdre votre position sur Google." },
  { q: "Payload gère-t-il l'e-commerce ?",
    a: "Oui, en approche headless : Payload gère le catalogue et les contenus, connectés à une solution de paiement et, au besoin, à vos outils (ERP, CRM). C'est particulièrement adapté aux boutiques qui ont des besoins que les plateformes classiques ne couvrent pas." },
  { q: "Combien coûte un site Payload ?",
    a: "Comme tout développement sur-mesure, le budget dépend de votre projet : nombre de fonctionnalités, complexité du back-office, ampleur du design. On commence toujours par une phase de cadrage pour établir un devis clair et transparent, sans coût caché." },
];

function buildJsonLd(tagline) {
  const orgId = SITE + "/#organization";
  const url = SITE + `/${SLUG}/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": url + "#service",
        name: "Agence Payload CMS",
        serviceType: "Agence de développement Payload CMS & Next.js sur-mesure",
        description: tagline,
        url,
        provider: { "@id": orgId },
        areaServed: { "@type": "City", name: "Strasbourg" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE + "/" },
          { "@type": "ListItem", position: 2, name: "Agence Payload", item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export function PayloadAgency({ service, h1Override = "", contentHtml = "" }) {
  const s = service || getService(SLUG);
  const group = SERVICE_GROUPS.find((g) => g.id === s.group);
  const siblings = (group ? group.services : [])
    .filter((slug) => slug !== s.slug)
    .map(getService)
    .filter(Boolean)
    .slice(0, 4);
  const jsonLd = buildJsonLd(s.tagline);
  const h1 = h1Override || s.title || "Agence Payload CMS à Strasbourg";
  // Accent dégradé sur « Strasbourg » : présent → on le met en avant ; absent →
  // on ajoute « à Strasbourg ». Jamais les deux (évite le doublon).
  const cityIdx = h1.indexOf("Strasbourg");
  const h1Node = cityIdx === -1
    ? (<>{h1} <span className="aia-grad">à Strasbourg</span></>)
    : (<>{h1.slice(0, cityIdx)}<span className="aia-grad">Strasbourg</span>{h1.slice(cityIdx + "Strasbourg".length)}</>);

  return (
    <div className="svcd2 aia payl" style={{ "--_hue": `var(--logo-${s.hue})` }}>
      <ScrollReveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---- Hero (2 colonnes : accroche + mockup back-office) ---- */}
      <section className="svcd2-hero aia-hero on-dark" data-theme="dark">
        <div className="svcd2-hero__deco" aria-hidden="true">
          <div className="svcd2-hero__aurora" />
          <span className="svcd2-rond svcd2-rond--a" />
          <span className="svcd2-rond svcd2-rond--b" />
          <div className="aia-hero__grid" />
          <svg className="svcd2-hero__dots" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="payldd" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="1.4" cy="1.4" r="1.4" fill="currentColor" /></pattern></defs>
            <rect width="140" height="140" fill="url(#payldd)" />
          </svg>
          <div className="svcd2-hero__grain" />
        </div>
        <div className="container svcd2-hero__inner aia-hero__inner">
          <div className="aia-hero__col">
            <nav className="svcd2-crumbs" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span aria-hidden="true">/</span>
              <span className="svcd2-crumbs__current">{s.name}</span>
            </nav>
            <span className="svcd2-hero__eyebrow aia-hero__eyebrow"><Icon name="monitor" size={16} /> {EYEBROW}</span>
            <h1 className="svcd2-hero__title aia-hero__title">{h1Node}</h1>
            <p className="svcd2-hero__lead">{HERO_LEAD}</p>

            <div className="aia-metrics" role="list">
              {METRICS.map((m) => (
                <div className="aia-metric" role="listitem" key={m.big}>
                  <span className="aia-metric__big">{m.big}</span>
                  <span className="aia-metric__label">{m.label}</span>
                </div>
              ))}
            </div>

            <ul className="svcd2-hero__points">
              {HERO_POINTS.map((p) => (<li key={p}><Icon name="check" size={16} /> {p}</li>))}
            </ul>
            <div className="svcd2-hero__actions">
              <Button as={Link} href="/contact" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Demander un devis</Button>
              <a href="#methode" className="svcd2-hero__ghost">Découvrir la méthode</a>
            </div>
          </div>

          {/* Mockup : back-office Payload (collection en cours d'édition) */}
          <div className="aia-hero__demo" aria-hidden="true">
            <div className="payl-admin">
              <div className="payl-admin__bar">
                <span className="payl-admin__win"><i /><i /><i /></span>
                <span className="payl-admin__url"><Glyph name="database" size={13} /> /admin/collections/pages</span>
              </div>
              <div className="payl-admin__body">
                <aside className="payl-admin__side">
                  <span className="payl-admin__brand"><Glyph name="layout" size={14} /> Payload</span>
                  <span className="payl-admin__nav payl-admin__nav--on">Pages</span>
                  <span className="payl-admin__nav">Articles</span>
                  <span className="payl-admin__nav">Portfolio</span>
                  <span className="payl-admin__nav">Médias</span>
                  <span className="payl-admin__nav">Redirections</span>
                </aside>
                <div className="payl-admin__main">
                  <div className="payl-admin__row payl-admin__row--top">
                    <span className="payl-admin__title">Accueil</span>
                    <span className="payl-admin__status"><i /> Publié</span>
                  </div>
                  <span className="payl-admin__label">Titre SEO</span>
                  <span className="payl-admin__field">Agence Payload à Strasbourg</span>
                  <span className="payl-admin__label">Contenu</span>
                  <span className="payl-admin__field payl-admin__field--lg"><i /><i /><i /></span>
                  <div className="payl-admin__foot">
                    <span className="payl-admin__preview"><Glyph name="bolt" size={12} /> Live preview</span>
                    <span className="payl-admin__save">Enregistrer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Bandeau défilant de la stack technique ---- */}
      <div className="aia-marquee" aria-hidden="true">
        <div className="aia-marquee__track">
          {[...STACK, ...STACK].map((e, i) => (
            <span className="aia-marquee__item" key={i}><span className="aia-marquee__dot" /> {e}</span>
          ))}
        </div>
      </div>

      {/* ---- Bandeau confiance ---- */}
      <div className="aia-trust">
        <div className="container aia-trust__inner">
          <span className="aia-trust__item"><Icon name="star" size={15} /> 4,9/5 clients</span>
          <span className="aia-trust__item"><Icon name="shield-check" size={15} /> Votre code, à vous</span>
          <span className="aia-trust__item"><Icon name="map-pin" size={15} /> Équipe à Strasbourg</span>
          <span className="aia-trust__item"><Icon name="sparkles" size={15} /> Depuis 2015</span>
        </div>
      </div>

      {/* ---- Pourquoi Payload (centré) ---- */}
      <section className="svcd2-sec aia-why">
        <div className="container container-narrow svcd2-sec__inner" data-reveal>
          <header className="aia-head">
            <span className="svcd2-cases__eyebrow"><Icon name="sparkles" size={15} /> Un choix qui vous libère</span>
            <h2 className="svcd2-sec__title">{WHY_TITLE}</h2>
          </header>
          <p className="aia-lead">{WHY_1}</p>
          <p className="aia-lead">{WHY_2}</p>
        </div>
      </section>

      {/* ---- Capacités ---- */}
      <section className="section aia-caps-sec">
        <div className="container">
          <header className="aia-head" data-reveal>
            <span className="svcd2-cases__eyebrow"><Icon name="target" size={15} /> Ce que vous y gagnez</span>
            <h2 className="svcd2-sec__title">{CAPS_TITLE}</h2>
          </header>
          <div className="aia-caps">
            {CAPS.map((c) => (
              <article className="aia-cap" key={c.t} data-reveal>
                <span className="aia-cap__ic"><Glyph name={c.g} size={24} /></span>
                <h3 className="aia-cap__t">{c.t}</h3>
                <p className="aia-cap__d">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Preuve par l'exemple : ce site tourne sous Payload ---- */}
      <section className="section aia-geo-sec">
        <div className="container">
          <div className="aia-geo" data-reveal>
            <span className="aia-geo__ic"><Glyph name="database" size={24} /></span>
            <div className="aia-geo__body">
              <span className="aia-geo__kicker">{PROOF_KICKER}</span>
              <h2 className="aia-geo__h">{PROOF_H}</h2>
              <p>{PROOF_P}</p>
            </div>
            <Link href="/portfolio/" className="aia-geo__link">Voir nos réalisations <Icon name="arrow-right" size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ---- Cas d'usage ---- */}
      <section className="section aia-caps-sec svcd2-sec--tint">
        <div className="container">
          <header className="aia-head" data-reveal>
            <span className="svcd2-cases__eyebrow"><Icon name="layout-grid" size={15} /> Pour quels projets ?</span>
            <h2 className="svcd2-sec__title">{USES_TITLE}</h2>
          </header>
          <div className="aia-caps aia-caps--3">
            {USES.map((c) => (
              <article className="aia-cap" key={c.t} data-reveal>
                <span className="aia-cap__ic"><Glyph name={c.g} size={24} /></span>
                <h3 className="aia-cap__t">{c.t}</h3>
                <p className="aia-cap__d">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Comparatif ---- */}
      <section className="section aia-vs-sec">
        <div className="container container-narrow">
          <header className="aia-head" data-reveal>
            <span className="svcd2-cases__eyebrow"><Icon name="line-chart" size={15} /> Payload vs CMS traditionnel</span>
            <h2 className="svcd2-sec__title">{VS_TITLE}</h2>
          </header>
          <div className="aia-vs" data-reveal>
            <div className="aia-vs__row aia-vs__row--head">
              <span className="aia-vs__k" />
              <span className="aia-vs__ia">Payload CMS</span>
              <span className="aia-vs__old">CMS traditionnel</span>
            </div>
            {VS.map((r) => (
              <div className="aia-vs__row" key={r.k}>
                <span className="aia-vs__k">{r.k}</span>
                <span className="aia-vs__ia"><Icon name="check" size={15} /> {r.ia}</span>
                <span className="aia-vs__old">{r.old}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Méthode ---- */}
      <section className="section aia-steps-sec svcd2-sec--tint" id="methode">
        <span className="svcd2-sec__deco" aria-hidden="true"><span className="svcd2-rond svcd2-rond--c" /><span className="svcd2-rond svcd2-rond--d" /></span>
        <div className="container">
          <header className="aia-head" data-reveal>
            <span className="svcd2-cases__eyebrow"><Icon name="line-chart" size={15} /> Notre méthode</span>
            <h2 className="svcd2-sec__title">{METHOD_TITLE}</h2>
          </header>
          <ol className="aia-steps" data-reveal>
            {STEPS.map((st, i) => (
              <li className="aia-step" key={st.t}>
                <span className="aia-step__n">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="aia-step__t">{st.t}</h3>
                <p className="aia-step__d">{st.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- CTA intermédiaire ---- */}
      <section className="svcd2-cta-band">
        <div className="container">
          <div className="svcd2-cta" data-reveal>
            <div>
              <h2>{CTA_BAND_H}</h2>
              <p>{CTA_BAND_P}</p>
            </div>
            <Button as={Link} href="/contact" variant="secondary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Demander un devis</Button>
          </div>
        </div>
      </section>

      {/* ---- Preuves / repères ---- */}
      <section className="aia-stats on-dark" data-theme="dark">
        <div className="aia-stats__deco" aria-hidden="true"><span className="svcd2-rond svcd2-rond--g" /><span className="svcd2-rond svcd2-rond--h" /></div>
        <div className="container aia-stats__inner" data-reveal>
          {STATS.map((st) => (
            <div className="aia-stat" key={st.label}>
              <span className="aia-stat__big">{st.big}</span>
              <span className="aia-stat__label">{st.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Formules ---- */}
      <section className="section aia-plans-sec">
        <div className="container">
          <header className="aia-head" data-reveal>
            <span className="svcd2-cases__eyebrow"><Icon name="layout-grid" size={15} /> Nos formules</span>
            <h2 className="svcd2-sec__title">{PLANS_TITLE}</h2>
          </header>
          <div className="aia-plans">
            {PLANS.map((pl) => (
              <article className={"aia-plan" + (pl.tag ? " aia-plan--hot" : "")} key={pl.name} data-reveal>
                {pl.tag ? <span className="aia-plan__tag">{pl.tag}</span> : null}
                <h3 className="aia-plan__name">{pl.name}</h3>
                <span className="aia-plan__price">{pl.price}</span>
                <p className="aia-plan__pitch">{pl.pitch}</p>
                <ul className="aia-plan__feats">
                  {pl.feats.map((f) => (<li key={f}><Icon name="check" size={15} /> {f}</li>))}
                </ul>
                <Button as={Link} href="/contact" variant={pl.tag ? "primary" : "secondary"} size="md" iconRight={<Icon name="arrow-right" size={16} />}>{pl.cta}</Button>
              </article>
            ))}
          </div>
          <p className="aia-plans__note">Chaque projet est unique : le devis est établi après le cadrage, en toute transparence, sans coût caché.</p>
        </div>
      </section>

      {/* ---- Garanties ---- */}
      <section className="section aia-guar-sec svcd2-sec--tint">
        <div className="container">
          <header className="aia-head" data-reveal>
            <span className="svcd2-cases__eyebrow"><Icon name="shield-check" size={15} /> Nos engagements</span>
            <h2 className="svcd2-sec__title">{GUAR_TITLE}</h2>
          </header>
          <div className="team-acc aia-guar-acc" data-reveal>
            {GUARANTEES.map((g) => (
              <article className="ta ta--guar" key={g.t}>
                <span className="ta__ic"><Icon name={g.i} size={22} /></span>
                <div className="ta__reveal">
                  <span className="ta__title">{g.t}</span>
                  <p className="ta__desc">{g.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <section className="section svcd2-faq">
        <div className="container container-narrow">
          <header className="svcd2-faq__head" data-reveal>
            <span className="svcd2-cases__eyebrow"><Icon name="sparkles" size={15} /> FAQ</span>
            <h2 className="svcd2-sec__title">{FAQ_TITLE}</h2>
          </header>
          <div className="svcd2-faq__list" data-reveal>
            {FAQS.map((f) => (
              <details className="svcd2-faq__item" key={f.q}>
                <summary><span>{f.q}</span><span className="svcd2-faq__chev" aria-hidden="true"><Icon name="chevron-down" size={18} /></span></summary>
                <div className="svcd2-faq__ans rich"><p className="rich__p">{f.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Cross-sell (pôle Web) ---- */}
      {siblings.length ? (
        <section className="section svcd2-more">
          <div className="container">
            <div data-reveal>
              <p className="svcd2-cases__eyebrow">{group.label}</p>
              <h2 className="svcd2-cases__title">À combiner avec</h2>
            </div>
            <div className="svcd2-more__grid" data-reveal>
              {siblings.map((x) => (
                <Link key={x.slug} href={`/${x.slug}/`} className="svcd2-more__card" style={{ "--_hue": `var(--logo-${x.hue})` }}>
                  <span className="svcd2-more__ic"><Icon name={x.icon} size={22} /></span>
                  <span className="svcd2-more__name">{x.name}</span>
                  <span className="svcd2-more__desc">{x.tagline}</span>
                  <span className="svcd2-more__go" aria-hidden="true"><Icon name="arrow-right" size={16} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ---- CTA final ---- */}
      <section className="svcd2-final on-dark" data-theme="dark">
        <div className="svcd2-final__deco" aria-hidden="true"><span className="svcd2-rond svcd2-rond--g" /><span className="svcd2-rond svcd2-rond--h" /></div>
        <div className="container svcd2-final__inner" data-reveal>
          <h2 className="svcd2-final__title">{FINAL_H}</h2>
          <p className="svcd2-final__sub">{FINAL_P}</p>
          <div className="svcd2-final__actions">
            <Button as={Link} href="/contact" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Demander un devis</Button>
            <a className="svcd2-final__tel" href={`tel:${ABCM_INFO.phoneHref}`}><Icon name="phone" size={16} /> {ABCM_INFO.phone}</a>
          </div>
        </div>
      </section>

      {/* ---- CTA collant (mobile) ---- */}
      <div className="aia-sticky">
        <Link href="/contact" className="aia-sticky__btn">Demander un devis <Icon name="arrow-right" size={16} /></Link>
        <a href={`tel:${ABCM_INFO.phoneHref}`} className="aia-sticky__tel" aria-label="Nous appeler"><Icon name="phone" size={18} /></a>
      </div>
    </div>
  );
}
