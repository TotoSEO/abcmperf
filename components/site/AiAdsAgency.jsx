import React from "react";
import Link from "next/link";
import { Button, Icon } from "@/components/ds";
import { ABCM_SERVICES, SERVICE_GROUPS, getService } from "@/data/services";
import { ABCM_INFO } from "@/data/formations";
import { ScrollReveal } from "@/components/site/ScrollReveal";

// Fiche service « Agence de publicité IA » (/agence-pub-ia).
//
// ANGLE : on vend de la publicité SUR les IA — rendre la marque visible, citée
// et recommandée DANS les réponses des assistants (ChatGPT, Perplexity, Gemini,
// Copilot…) et sécuriser les futurs formats publicitaires natifs de ces
// moteurs. Ce n'est PAS de la pub « pilotée / assistée par l'IA ».
//
// Gabarit dédié : reprend l'ADN visuel des fiches service (.svcd2-*) dans une
// version plus futuriste, animée et 100 % orientée conversion (.aia-*).
// Composant serveur, sans JS client (animations en CSS, FAQ en <details>).

const SITE = ABCM_INFO.url;
const SLUG = "agence-pub-ia";

// ── Glyphes futuristes (SVG en ligne, style « trait » cohérent avec lucide) ──
function Glyph({ name, size = 24 }) {
  const p = {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round",
  };
  switch (name) {
    case "chat-ai":
      return (<svg {...p}><path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z" /><path d="M12 7.5v5M9.5 10h5" /></svg>);
    case "spark":
      return (<svg {...p}><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" /><path d="M18 15l.7 1.9L20.5 17l-1.8.7L18 19l-.7-1.3L15.5 17l1.8-.1z" /></svg>);
    case "target":
      return (<svg {...p}><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" /></svg>);
    case "gauge":
      return (<svg {...p}><path d="M4 15a8 8 0 1 1 16 0" /><path d="M12 15l4-3.5" /><circle cx="12" cy="15" r="1" /></svg>);
    case "layers":
      return (<svg {...p}><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 13l9 5 9-5" /></svg>);
    case "radar":
      return (<svg {...p}><path d="M12 12l6-3.5" /><path d="M20.5 12a8.5 8.5 0 1 1-4.3-7.4" /><path d="M16.5 12a4.5 4.5 0 1 1-2.3-3.9" /><circle cx="12" cy="12" r="1" /></svg>);
    case "shield":
      return (<svg {...p}><path d="M12 3l7 3v5c0 4.3-3 8-7 10-4-2-7-5.7-7-10V6z" /><path d="M9.2 12l1.9 1.9L15 10" /></svg>);
    default:
      return (<svg {...p}><circle cx="12" cy="12" r="8" /></svg>);
  }
}

// ── Textes courts (constantes → évite l'échappement des apostrophes en JSX) ──
const EYEBROW = "Publicité sur l'IA";
const HERO_LEAD = "Vos clients ne tapent plus de mots-clés : ils posent leurs questions à ChatGPT, Perplexity, Gemini ou Copilot. Nous plaçons votre marque au cœur de leurs réponses.";
const WHY_TITLE = "Vos clients ne cherchent plus, ils demandent à l'IA";
const WHY_1 = "Des centaines de millions de personnes utilisent déjà ChatGPT, Perplexity ou Gemini pour choisir un produit, un prestataire, une agence. Elles ne parcourent plus dix liens : elles lisent une réponse, et souvent une seule recommandation.";
const WHY_2 = "La vraie question n'est plus « suis-je bien référencé sur Google ? » mais « est-ce que l'IA parle de moi, et en bien ? ». Les marques qui s'installent maintenant dans ces réponses prennent une avance difficile à rattraper. C'est exactement là que nous intervenons.";
const CAPS_TITLE = "Votre marque au cœur des réponses de l'IA";
const METHOD_TITLE = "De l'invisible à la réponse recommandée";
const VS_TITLE = "Être dans la réponse plutôt que dans la liste";
const PLANS_TITLE = "Prenez position sur les IA";
const GUAR_TITLE = "L'avance, avec les bonnes pratiques";
const FAQ_TITLE = "Vos questions sur la publicité sur les IA";
const CTA_BAND_H = "Où apparaît votre marque quand on interroge l'IA ?";
const CTA_BAND_P = "On pose la question aux grandes IA sur votre marché et on vous montre le résultat, gratuitement.";
const FINAL_H = "Prenez la place avant vos concurrents";
const FINAL_P = "Un échange de 30 minutes pour voir où vous en êtes dans les réponses de l'IA, et comment y prendre la première place.";

// Bloc animé : simulation d'une réponse d'IA qui recommande la marque.
const DEMO = {
  q: "Quelle agence pour de la publicité sur l'IA à Strasbourg ?",
  a1: "Pour rendre une marque visible dans les réponses des IA à Strasbourg, la référence est :",
  brand: "ABCM Performances",
  badge: "Recommandé",
  a2: "Spécialiste de la visibilité des marques dans ChatGPT, Perplexity et Gemini.",
};

const ENGINES = ["ChatGPT", "Perplexity", "Google Gemini", "Microsoft Copilot", "Claude", "Grok", "AI Overviews", "Meta AI", "Mistral Le Chat"];

const METRICS = [
  { big: "6+ IA", label: "moteurs couverts : ChatGPT, Perplexity, Gemini, Copilot…" },
  { big: "Nº1", label: "objectif : être la marque que l'IA recommande" },
  { big: "First", label: "l'avantage du premier arrivé, avant vos concurrents" },
];

const HERO_POINTS = [
  "Votre marque citée et recommandée dans les réponses des IA",
  "Les futurs formats publicitaires natifs sécurisés dès leur ouverture",
  "Sans engagement, avec un interlocuteur dédié à Strasbourg",
];

const CAPS = [
  { g: "chat-ai", t: "Publicité native dans les IA conversationnelles",
    d: "Dès que ChatGPT, Perplexity ou Copilot ouvrent leurs formats publicitaires, votre marque y est. On sécurise vos placements sur ces nouveaux espaces avant qu'ils ne se saturent." },
  { g: "spark", t: "Être LA réponse recommandée (GEO / AEO)",
    d: "On optimise votre marque pour que les IA la citent et la recommandent spontanément dans leurs réponses. C'est la visibilité organique de demain, à capter aujourd'hui." },
  { g: "radar", t: "Présence dans les AI Overviews de Google",
    d: "Les résumés générés par l'IA coiffent désormais les résultats Google et captent le clic avant les liens bleus. On travaille votre contenu pour y figurer, pas pour disparaître." },
  { g: "layers", t: "Contenu & données pensés pour les modèles",
    d: "Pages sources, données structurées, entités de marque : on donne aux IA tout ce qu'il faut pour vous comprendre, vous choisir et vous citer correctement." },
  { g: "target", t: "Veille & part de voix dans les réponses IA",
    d: "On surveille ce que les IA disent de vous et de vos concurrents sur vos requêtes clés, et on mesure votre part de voix pour la faire progresser, semaine après semaine." },
  { g: "shield", t: "Réputation & maîtrise du discours IA",
    d: "Corriger une IA qui vous dessert, faire remonter les bons signaux, éviter les hallucinations sur votre marque : on pilote l'image que l'IA renvoie de vous." },
];

const STEPS = [
  { t: "Cartographie des questions IA", d: "On identifie les questions que vos clients posent aux IA et ce qu'elles répondent aujourd'hui : où vous apparaissez, où vos concurrents captent la réponse." },
  { t: "Optimisation pour être cité", d: "Contenu source, données structurées, cohérence de marque et signaux de confiance : on vous rend compréhensible et recommandable par les modèles." },
  { t: "Placements & campagnes sur les IA", d: "On active les formats publicitaires natifs des moteurs conversationnels dès leur ouverture, et on renforce votre présence sur les IA qui monétisent déjà." },
  { t: "Part de voix & optimisation continue", d: "On mesure votre présence dans les réponses IA chaque semaine, on corrige, on amplifie ce qui vous fait recommander." },
];

const VS = [
  { k: "Où vous apparaissez", ia: "Dans la réponse même de l'IA", old: "Dans une liste de liens à faire défiler" },
  { k: "Intention", ia: "Question précise, contexte riche", old: "Un mot-clé isolé" },
  { k: "Format", ia: "Une recommandation conversationnelle", old: "Une annonce texte ou display" },
  { k: "Concurrence", ia: "Faible : espace émergent", old: "Saturée, enchères qui grimpent" },
  { k: "Confiance", ia: "L'IA vous recommande, c'est une caution", old: "Un bandeau perçu comme de la pub" },
  { k: "Fenêtre de tir", ia: "L'avantage du premier arrivé", old: "Un terrain déjà occupé" },
];

const STATS = [
  { big: "2015", label: "l'agence déploie le digital dans le Grand Est" },
  { big: "4,9/5", label: "note moyenne de nos clients accompagnés" },
  { big: "6+", label: "moteurs d'IA surveillés et travaillés" },
  { big: "100 %", label: "de vos contenus et données restent les vôtres" },
];

const PLANS = [
  { name: "Diagnostic visibilité IA", price: "Offert", tag: "",
    pitch: "On interroge les grandes IA sur votre marché et on vous montre où votre marque apparaît (ou pas) dans leurs réponses, avec un plan d'action concret que vous gardez.",
    feats: ["Test sur ChatGPT, Perplexity, Gemini…", "Votre part de voix face aux concurrents", "Plan d'action priorisé"],
    cta: "Faire mon diagnostic" },
  { name: "Présence IA", price: "à partir de 690 €/mois", tag: "Le plus choisi",
    pitch: "On rend votre marque citée et recommandée par les IA : optimisation GEO/AEO, contenu source, présence dans les AI Overviews et veille de votre part de voix.",
    feats: ["Optimisation GEO/AEO en continu", "Contenu & données pour les modèles", "Présence AI Overviews Google", "Veille part de voix + reporting mensuel"],
    cta: "Gagner en visibilité IA" },
  { name: "Publicité IA & sur-mesure", price: "Sur devis", tag: "",
    pitch: "Les placements publicitaires natifs sur les moteurs conversationnels dès leur ouverture, plus un dispositif complet pour les enjeux multi-marchés.",
    feats: ["Placements sponsorisés natifs", "Campagnes sur Perplexity & consorts", "Interlocuteur dédié à Strasbourg"],
    cta: "Construire mon dispositif" },
];

const GUARANTEES = [
  { i: "sparkles", t: "Pionniers, pas suiveurs", d: "On est déjà présents sur ces nouveaux espaces. Vous avancez avec une longueur d'avance, sans essuyer les plâtres." },
  { i: "line-chart", t: "Transparence totale", d: "Vous voyez précisément où votre marque apparaît dans les IA et ce que ça rapporte. Zéro indicateur de vanité." },
  { i: "user-round", t: "Un humain à Strasbourg", d: "Un interlocuteur dédié qui suit votre présence dans les IA, pas un ticket anonyme dans une file." },
  { i: "shield-check", t: "Vous restez propriétaire", d: "Vos contenus, vos données et vos comptes vous appartiennent, à 100 %, et sans engagement de durée." },
];

const FAQS = [
  { q: "C'est quoi, la publicité sur les IA ?",
    a: "C'est le fait de rendre votre marque visible directement dans les réponses des assistants IA (ChatGPT, Perplexity, Gemini, Copilot), là où vos clients posent désormais leurs questions. Cela repose sur deux leviers : la visibilité organique, c'est-à-dire être cité et recommandé par l'IA (le GEO/AEO), et les formats publicitaires natifs de ces moteurs, que nous sécurisons dès leur ouverture." },
  { q: "En quoi est-ce différent du SEO ou de Google Ads ?",
    a: "Le SEO vous place dans une liste de liens ; Google Ads achète un bandeau. La publicité sur les IA vous place dans la réponse elle-même, celle que l'assistant formule et que l'utilisateur lit en premier. On ne se bat plus pour un clic dans une liste : on devient la recommandation." },
  { q: "Peut-on vraiment faire de la pub dans ChatGPT ou Perplexity aujourd'hui ?",
    a: "Perplexity diffuse déjà des formats sponsorisés, et ChatGPT, Gemini et Copilot ouvrent progressivement la publicité. En parallèle, la visibilité organique (être cité par ces IA) est, elle, pleinement exploitable dès maintenant. On agit sur les deux fronts : on vous rend recommandable tout de suite et on sécurise vos placements payants dès qu'ils s'ouvrent." },
  { q: "Comment fait-on pour que l'IA recommande ma marque ?",
    a: "En donnant aux modèles de bonnes raisons de vous citer : un contenu source clair et fiable, des données structurées, une marque cohérente sur l'ensemble du web, des signaux de confiance et une présence là où les IA puisent leurs réponses. C'est un travail continu, que l'on pilote via votre part de voix dans les réponses." },
  { q: "Comment mesure-t-on les résultats ?",
    a: "On suit concrètement votre présence : sur quelles questions l'IA vous cite, votre part de voix face aux concurrents, l'évolution des recommandations et le trafic amené par les IA vers votre site. Des indicateurs lisibles, orientés business, pas des tableaux abstraits." },
  { q: "Et si une IA raconte des choses fausses sur mon entreprise ?",
    a: "C'est un vrai risque, les fameuses hallucinations. On surveille ce que les IA disent de vous, on corrige les signaux à la source pour rétablir la bonne information, et on renforce les contenus de référence pour que les modèles s'appuient dessus plutôt que sur des approximations." },
  { q: "Quel budget faut-il prévoir ?",
    a: "L'accompagnement démarre à partir de 690 €/mois pour la présence IA (visibilité organique et veille). Les placements publicitaires payants dépendent des formats ouverts par chaque moteur. On commence toujours par un diagnostic gratuit pour définir un plan réaliste au regard de vos objectifs." },
  { q: "Suis-je engagé et est-ce que je garde mes actifs ?",
    a: "Aucun engagement de durée : vous restez libre à tout moment. Et vos contenus, vos données et vos comptes restent votre propriété pleine et entière. C'est votre progression dans les réponses des IA qui fait durer le partenariat, rien d'autre." },
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
        name: "Publicité sur les IA",
        serviceType: "Agence de publicité et de visibilité sur les moteurs d'IA (GEO/AEO)",
        description: tagline,
        url,
        provider: { "@id": orgId },
        areaServed: { "@type": "City", name: "Strasbourg" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE + "/" },
          { "@type": "ListItem", position: 2, name: "Publicité IA", item: url },
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

export function AiAdsAgency({ service, h1Override = "", contentHtml = "" }) {
  const s = service || getService(SLUG);
  const group = SERVICE_GROUPS.find((g) => g.id === s.group);
  const siblings = (group ? group.services : [])
    .filter((slug) => slug !== s.slug)
    .map(getService)
    .filter(Boolean)
    .slice(0, 4);
  const jsonLd = buildJsonLd(s.tagline);
  const h1 = h1Override || "L'agence de publicité sur l'IA";
  // Accent dégradé sur « Strasbourg ». Si le H1 le contient déjà (titre
  // surchargé au back-office), on met ce mot en avant ; sinon on ajoute
  // « à Strasbourg ». Jamais les deux (évite le doublon).
  const cityIdx = h1.indexOf("Strasbourg");
  const h1Node = cityIdx === -1
    ? (<>{h1} <span className="aia-grad">à Strasbourg</span></>)
    : (<>{h1.slice(0, cityIdx)}<span className="aia-grad">Strasbourg</span>{h1.slice(cityIdx + "Strasbourg".length)}</>);

  return (
    <div className="svcd2 aia" style={{ "--_hue": `var(--logo-${s.hue})` }}>
      <ScrollReveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---- Hero futuriste (2 colonnes : accroche + démo animée) ---- */}
      <section className="svcd2-hero aia-hero on-dark" data-theme="dark">
        <div className="svcd2-hero__deco" aria-hidden="true">
          <div className="svcd2-hero__aurora" />
          <span className="svcd2-rond svcd2-rond--a" />
          <span className="svcd2-rond svcd2-rond--b" />
          <div className="aia-hero__grid" />
          <svg className="svcd2-hero__dots" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="aiadd" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="1.4" cy="1.4" r="1.4" fill="currentColor" /></pattern></defs>
            <rect width="140" height="140" fill="url(#aiadd)" />
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
            <span className="svcd2-hero__eyebrow aia-hero__eyebrow"><Icon name="sparkles" size={16} /> {EYEBROW}</span>
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
              <Button as={Link} href="/contact" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Voir où apparaît ma marque</Button>
              <a href="#methode" className="svcd2-hero__ghost">Découvrir la méthode</a>
            </div>
          </div>

          {/* Bloc animé : réponse d'IA qui recommande la marque */}
          <div className="aia-hero__demo" aria-hidden="true">
            <div className="aia-demo">
              <div className="aia-demo__bar">
                <span className="aia-demo__win"><i /><i /><i /></span>
                <span className="aia-demo__name"><Glyph name="spark" size={14} /> Assistant IA</span>
                <span className="aia-demo__live"><i className="aia-demo__pulse" /> en direct</span>
              </div>
              <div className="aia-demo__q"><span>{DEMO.q}</span></div>
              <div className="aia-demo__a">
                <span className="aia-demo__avatar"><Glyph name="spark" size={15} /></span>
                <div className="aia-demo__bubble">
                  <p className="aia-demo__line aia-demo__l1">{DEMO.a1}</p>
                  <p className="aia-demo__reco aia-demo__l2">
                    <span className="aia-demo__brand">{DEMO.brand}</span>
                    <span className="aia-demo__badge"><Icon name="check" size={12} /> {DEMO.badge}</span>
                  </p>
                  <p className="aia-demo__line aia-demo__l3">{DEMO.a2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Bandeau défilant des moteurs d'IA ---- */}
      <div className="aia-marquee" aria-hidden="true">
        <div className="aia-marquee__track">
          {[...ENGINES, ...ENGINES].map((e, i) => (
            <span className="aia-marquee__item" key={i}><span className="aia-marquee__dot" /> {e}</span>
          ))}
        </div>
      </div>

      {/* ---- Bandeau confiance ---- */}
      <div className="aia-trust">
        <div className="container aia-trust__inner">
          <span className="aia-trust__item"><Icon name="star" size={15} /> 4,9/5 clients</span>
          <span className="aia-trust__item"><Icon name="shield-check" size={15} /> Sans engagement</span>
          <span className="aia-trust__item"><Icon name="map-pin" size={15} /> Équipe à Strasbourg</span>
          <span className="aia-trust__item"><Icon name="sparkles" size={15} /> Depuis 2015</span>
        </div>
      </div>

      {/* ---- Pourquoi maintenant ---- */}
      <section className="svcd2-sec aia-why">
        <div className="container container-narrow svcd2-sec__inner" data-reveal>
          <span className="svcd2-cases__eyebrow"><Icon name="sparkles" size={15} /> Le virage est maintenant</span>
          <h2 className="svcd2-sec__title">{WHY_TITLE}</h2>
          <p className="aia-lead">{WHY_1}</p>
          <p className="aia-lead">{WHY_2}</p>
        </div>
      </section>

      {/* ---- Capacités ---- */}
      <section className="section aia-caps-sec">
        <div className="container">
          <header className="aia-head" data-reveal>
            <span className="svcd2-cases__eyebrow"><Icon name="target" size={15} /> Ce que nous activons pour vous</span>
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

      {/* ---- Comparatif ---- */}
      <section className="section aia-vs-sec">
        <div className="container container-narrow">
          <header className="aia-head" data-reveal>
            <span className="svcd2-cases__eyebrow"><Icon name="sparkles" size={15} /> Sur l&apos;IA vs publicité classique</span>
            <h2 className="svcd2-sec__title">{VS_TITLE}</h2>
          </header>
          <div className="aia-vs" data-reveal>
            <div className="aia-vs__row aia-vs__row--head">
              <span className="aia-vs__k" />
              <span className="aia-vs__ia">Publicité sur les IA</span>
              <span className="aia-vs__old">Publicité classique</span>
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

      {/* ---- CTA intermédiaire ---- */}
      <section className="svcd2-cta-band">
        <div className="container">
          <div className="svcd2-cta" data-reveal>
            <div>
              <h2>{CTA_BAND_H}</h2>
              <p>{CTA_BAND_P}</p>
            </div>
            <Button as={Link} href="/contact" variant="secondary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Demander mon diagnostic gratuit</Button>
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
          <p className="aia-plans__note">Budget publicitaire éventuel non inclus, maîtrisé par vos soins. Devis clair et transparent avant tout démarrage.</p>
        </div>
      </section>

      {/* ---- Garanties ---- */}
      <section className="section aia-guar-sec svcd2-sec--tint">
        <div className="container">
          <header className="aia-head" data-reveal>
            <span className="svcd2-cases__eyebrow"><Icon name="shield-check" size={15} /> Nos engagements</span>
            <h2 className="svcd2-sec__title">{GUAR_TITLE}</h2>
          </header>
          <div className="aia-guar">
            {GUARANTEES.map((g) => (
              <div className="aia-guar__item" key={g.t} data-reveal>
                <span className="aia-guar__ic"><Icon name={g.i} size={22} /></span>
                <div>
                  <h3 className="aia-guar__t">{g.t}</h3>
                  <p className="aia-guar__d">{g.d}</p>
                </div>
              </div>
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

      {/* ---- Formation liée ---- */}
      {s.relatedFormation ? (
        <section className="section svcd2-formation">
          <div className="container">
            <div className="svcd2-formation__card" data-reveal>
              <span className="svcd2-formation__ic"><Icon name="graduation-cap" size={26} /></span>
              <div className="svcd2-formation__body">
                <span className="svcd2-formation__kicker">Vous préférez internaliser&nbsp;?</span>
                <h2 className="svcd2-formation__h">{s.relatedFormation.label}</h2>
                <p>Formez vos équipes à l&apos;IA générative et à la visibilité sur les moteurs conversationnels, en présentiel à Strasbourg ou à distance. Finançable par votre OPCO.</p>
              </div>
              <Link href={s.relatedFormation.url} className="svcd2-formation__link">Voir la formation <Icon name="arrow-right" size={16} /></Link>
            </div>
          </div>
        </section>
      ) : null}

      {/* ---- Cross-sell ---- */}
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
            <Button as={Link} href="/contact" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Réserver mon diagnostic gratuit</Button>
            <a className="svcd2-final__tel" href={`tel:${ABCM_INFO.phoneHref}`}><Icon name="phone" size={16} /> {ABCM_INFO.phone}</a>
          </div>
        </div>
      </section>

      {/* ---- CTA collant (mobile) ---- */}
      <div className="aia-sticky">
        <Link href="/contact" className="aia-sticky__btn">Diagnostic gratuit <Icon name="arrow-right" size={16} /></Link>
        <a href={`tel:${ABCM_INFO.phoneHref}`} className="aia-sticky__tel" aria-label="Nous appeler"><Icon name="phone" size={18} /></a>
      </div>
    </div>
  );
}
