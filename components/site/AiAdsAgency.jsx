import React from "react";
import Link from "next/link";
import { Button, Icon } from "@/components/ds";
import { ABCM_SERVICES, SERVICE_GROUPS, getService } from "@/data/services";
import { ABCM_INFO } from "@/data/formations";
import { ScrollReveal } from "@/components/site/ScrollReveal";

// Fiche service « Agence de publicité IA » (/agence-pub-ia).
//
// ANGLE STRICT : on VEND de la publicité SUR les IA — on diffuse et on gère,
// POUR le client, ses campagnes publicitaires sur les moteurs d'IA (Perplexity
// aujourd'hui, ChatGPT / Gemini / Copilot à l'ouverture de leurs formats). Ce
// n'est PAS de la pub « pilotée / assistée par l'IA », et ce n'est PAS du
// référencement génératif (GEO) : la visibilité organique renvoie vers la fiche
// dédiée /referencement-ia-geo/ (un simple bloc de renvoi, pas le sujet ici).
//
// Gabarit dédié : ADN des fiches service (.svcd2-*) en version futuriste,
// animée et 100 % conversion (.aia-*). Composant serveur, sans JS client.

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
    default:
      return (<svg {...p}><circle cx="12" cy="12" r="8" /></svg>);
  }
}

// ── Textes courts (constantes → évite l'échappement des apostrophes en JSX) ──
const EYEBROW = "Publicité sur l'IA";
const HERO_LEAD = "Vos clients posent leurs questions à ChatGPT, Perplexity, Gemini ou Copilot. Nous diffusons vos publicités au cœur de ces réponses, et nous gérons vos campagnes de A à Z.";
const WHY_TITLE = "Vos clients ne cherchent plus, ils demandent à l'IA";
const WHY_1 = "Des centaines de millions de personnes utilisent déjà ChatGPT, Perplexity ou Gemini pour choisir un produit ou un prestataire. Un tout nouvel espace publicitaire s'ouvre, au cœur même de ces réponses.";
const WHY_2 = "Les premières marques à y diffuser leurs annonces captent l'attention pendant que la concurrence est rare et les coûts bas. Nous gérons vos campagnes sur ces plateformes d'IA, de la création à l'optimisation, pour que vous preniez cette avance sans y passer vos journées.";
const CAPS_TITLE = "Vos publicités au cœur des réponses de l'IA";
const METHOD_TITLE = "Vos campagnes sur les IA, gérées de A à Z";
const VS_TITLE = "Être dans la réponse, pas dans la liste";
const PLANS_TITLE = "Lancez vos campagnes sur les IA";
const GUAR_TITLE = "L'avance, avec les bonnes pratiques";
const FAQ_TITLE = "Vos questions sur la publicité sur les IA";
const GEO_KICKER = "Vous cherchez plutôt de la visibilité gratuite ?";
const GEO_H = "Être cité naturellement par les IA, c'est le référencement GEO";
const GEO_P = "Ici, on parle de publicité, donc de diffusion payante. Pour apparaître spontanément dans les réponses de ChatGPT, Perplexity ou Gemini sans acheter d'espace, c'est un autre métier : le référencement génératif.";
const CTA_BAND_H = "Sur quelles IA diffuser pour toucher vos clients ?";
const CTA_BAND_P = "On audite votre marché et on vous propose un plan de campagnes concret, gratuitement.";
const FINAL_H = "Prenez la place avant vos concurrents";
const FINAL_P = "Un échange de 30 minutes pour voir comment diffuser vos publicités sur les IA et prendre une longueur d'avance.";

// Bloc animé : une réponse d'IA contenant une annonce SPONSORISÉE de la marque.
const DEMO = {
  q: "Quelle agence pour diffuser ma pub sur l'IA à Strasbourg ?",
  a1: "Voici une suggestion sponsorisée qui correspond à votre recherche :",
  brand: "ABCM Performances",
  badge: "Sponsorisé",
  a2: "Agence à Strasbourg qui gère vos campagnes publicitaires sur les IA.",
};

const ENGINES = ["ChatGPT", "Perplexity", "Google Gemini", "Microsoft Copilot", "Claude", "Grok", "AI Overviews", "Meta AI", "Mistral Le Chat"];

const METRICS = [
  { big: "6+ IA", label: "plateformes activées dès qu'elles ouvrent la publicité" },
  { big: "A→Z", label: "vos campagnes gérées de bout en bout, pour vous" },
  { big: "First", label: "l'avantage du premier arrivé, avant vos concurrents" },
];

const HERO_POINTS = [
  "Vos annonces diffusées dans les réponses des IA",
  "Des campagnes créées, lancées et optimisées par notre équipe",
  "Sans engagement, avec un interlocuteur dédié à Strasbourg",
];

const CAPS = [
  { g: "chat-ai", t: "Diffusion sur les plateformes d'IA",
    d: "On lance vos campagnes là où les IA monétisent déjà (Perplexity) et on sécurise votre place sur ChatGPT, Gemini et Copilot dès l'ouverture de leurs formats publicitaires." },
  { g: "spark", t: "Des annonces pensées pour l'IA",
    d: "Messages et visuels conçus pour s'intégrer dans une réponse conversationnelle, pas des bannières plaquées. On crée, on décline et on teste vos annonces pour vous." },
  { g: "target", t: "Ciblage par l'intention",
    d: "Vos annonces s'affichent au moment où quelqu'un pose précisément la question à laquelle vous répondez. Une intention forte, un contexte riche, moins de budget gaspillé." },
  { g: "gauge", t: "Pilotage du budget & des enchères",
    d: "On gère votre budget média sur ces plateformes au quotidien : arbitrages, optimisation du coût par résultat et montée en puissance de ce qui fonctionne." },
  { g: "radar", t: "Mesure & reporting",
    d: "Impressions dans les réponses, clics, conversions, coût par résultat : vous recevez un reporting clair et orienté business, pas des tableaux illisibles." },
  { g: "layers", t: "Une agence qui gère tout",
    d: "De la stratégie au reporting, on prend en charge l'intégralité de vos campagnes sur les IA. Vous gardez la main sur les décisions, on s'occupe de l'exécution." },
];

const STEPS = [
  { t: "Cadrage & objectifs", d: "On définit vos cibles, votre budget et les plateformes d'IA pertinentes pour votre marché. Aucune dépense avant d'avoir un plan clair." },
  { t: "Création des annonces", d: "On conçoit les messages et les formats adaptés à chaque IA, avec plusieurs variantes prêtes à être testées." },
  { t: "Lancement des campagnes", d: "On diffuse sur les plateformes d'IA qui monétisent, avec un ciblage par intention, et on sécurise vos placements dès l'ouverture des nouveaux formats." },
  { t: "Optimisation & reporting", d: "Chaque semaine, on ajuste, on coupe ce qui ne marche pas, on amplifie ce qui convertit, et on vous livre un point clair et actionnable." },
];

const VS = [
  { k: "Où apparaît votre pub", ia: "Dans la réponse même de l'IA", old: "Dans une liste de liens à faire défiler" },
  { k: "Le bon moment", ia: "Quand l'utilisateur pose sa question", old: "Sur un mot-clé, hors contexte" },
  { k: "Format", ia: "Intégrée à la conversation", old: "Bannière ou annonce texte" },
  { k: "Concurrence", ia: "Faible : espace émergent", old: "Saturée, enchères qui grimpent" },
  { k: "Attention", ia: "Captée dans un contenu qu'on lit", old: "Ignorée par réflexe anti-pub" },
  { k: "Fenêtre de tir", ia: "L'avantage du premier arrivé", old: "Un terrain déjà occupé" },
];

const STATS = [
  { big: "2015", label: "l'agence déploie le digital dans le Grand Est" },
  { big: "4,9/5", label: "note moyenne de nos clients accompagnés" },
  { big: "6+", label: "plateformes d'IA activables pour vos campagnes" },
  { big: "100 %", label: "de vos comptes et budgets restent les vôtres" },
];

const PLANS = [
  { name: "Audit d'opportunité", price: "Offert", tag: "",
    pitch: "On analyse votre marché et on identifie les plateformes d'IA où diffuser, le potentiel et le budget à prévoir. Vous repartez avec un plan clair, même sans travailler avec nous.",
    feats: ["Plateformes d'IA pertinentes pour vous", "Estimation du potentiel & du budget", "Recommandation de démarrage"],
    cta: "Demander mon audit" },
  { name: "Campagnes IA", price: "à partir de 690 €/mois", tag: "Le plus choisi",
    pitch: "La gestion complète de vos publicités sur les IA : création des annonces, diffusion, optimisation quotidienne et reporting. On s'occupe de tout.",
    feats: ["Diffusion sur Perplexity & les IA qui monétisent", "Création & déclinaison des annonces", "Optimisation continue + point mensuel", "Reporting business clair"],
    cta: "Lancer mes campagnes" },
  { name: "Sur-mesure", price: "Sur devis", tag: "",
    pitch: "Pour les budgets média conséquents et les enjeux multi-plateformes : dispositif dédié et accompagnement stratégique renforcé.",
    feats: ["Dispositif multi-plateformes", "Budgets média importants", "Interlocuteur dédié à Strasbourg"],
    cta: "Construire mon dispositif" },
];

const GUARANTEES = [
  { i: "sparkles", hue: "magenta", t: "Pionniers, pas suiveurs", d: "On diffuse déjà sur ces nouveaux espaces publicitaires. Vous avancez avec une longueur d'avance, sans essuyer les plâtres." },
  { i: "line-chart", hue: "blue", t: "Transparence totale", d: "Vous voyez où va chaque euro de budget média et ce qu'il rapporte. Aucun coût caché, aucune marge dissimulée sur vos dépenses." },
  { i: "user-round", hue: "green", t: "Un humain à Strasbourg", d: "Un interlocuteur dédié qui gère et suit vos campagnes, pas un ticket anonyme dans une file." },
  { i: "shield-check", hue: "orange", t: "Vous restez propriétaire", d: "Vos comptes publicitaires, vos budgets et vos données vous appartiennent, à 100 %, et sans engagement de durée." },
];

const FAQS = [
  { q: "C'est quoi, la publicité sur les IA ?",
    a: "C'est diffuser vos annonces directement dans les réponses des assistants IA (Perplexity aujourd'hui, ChatGPT, Gemini et Copilot demain), là où vos clients lisent désormais l'information. En tant qu'agence, nous concevons, lançons et optimisons ces campagnes à votre place." },
  { q: "Peut-on vraiment faire de la pub sur ChatGPT ou Perplexity aujourd'hui ?",
    a: "Perplexity diffuse déjà des formats sponsorisés, et ChatGPT, Gemini et Copilot ouvrent progressivement la publicité. On lance vos campagnes dès maintenant sur les plateformes qui monétisent, et on sécurise votre place sur les autres dès l'ouverture de leurs formats." },
  { q: "En quoi est-ce différent de Google Ads ?",
    a: "Avec Google Ads, vous achetez un lien dans une liste. Sur les IA, votre annonce apparaît dans la réponse elle-même, celle que l'utilisateur lit en premier et qu'il n'a pas le réflexe d'ignorer. C'est un espace neuf, encore peu concurrentiel." },
  { q: "Vous gérez les campagnes à ma place ?",
    a: "Oui, c'est tout l'intérêt : on prend en charge la stratégie, la création des annonces, la diffusion, le pilotage du budget et le reporting. Vous validez les grandes décisions, on s'occupe de l'exécution au quotidien." },
  { q: "Quel budget faut-il prévoir ?",
    a: "Nos honoraires de gestion démarrent à 690 €/mois, auxquels s'ajoute votre budget média (les sommes réellement dépensées en diffusion), que vous maîtrisez et ajustez. On commence toujours par un audit gratuit pour fixer un budget réaliste au regard de vos objectifs." },
  { q: "Comment mesure-t-on les résultats ?",
    a: "On suit les indicateurs concrets de vos campagnes : impressions dans les réponses, clics, conversions et coût par résultat. Vous recevez un reporting clair, orienté business, pas des tableaux abstraits." },
  { q: "Au bout de combien de temps voit-on des résultats ?",
    a: "Les premières diffusions démarrent rapidement une fois les annonces prêtes. Comme sur toute régie publicitaire, on optimise sur les premières semaines pour faire baisser le coût par résultat et amplifier ce qui performe." },
  { q: "Suis-je engagé ?",
    a: "Non. Aucun engagement de durée, et vos comptes publicitaires, vos budgets et vos données restent votre propriété. C'est la performance de vos campagnes qui fait durer le partenariat, rien d'autre." },
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
        serviceType: "Agence de gestion de campagnes publicitaires sur les moteurs d'IA",
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
  // Accent dégradé sur « Strasbourg » : présent → on le met en avant ; absent →
  // on ajoute « à Strasbourg ». Jamais les deux (évite le doublon).
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
              <Button as={Link} href="/contact" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Demander mon audit gratuit</Button>
              <a href="#methode" className="svcd2-hero__ghost">Découvrir la méthode</a>
            </div>
          </div>

          {/* Bloc animé : réponse d'IA contenant une annonce sponsorisée */}
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
                    <span className="aia-demo__badge">{DEMO.badge}</span>
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

      {/* ---- Pourquoi maintenant (centré) ---- */}
      <section className="svcd2-sec aia-why">
        <div className="container container-narrow svcd2-sec__inner" data-reveal>
          <header className="aia-head">
            <span className="svcd2-cases__eyebrow"><Icon name="sparkles" size={15} /> Le virage est maintenant</span>
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
            <span className="svcd2-cases__eyebrow"><Icon name="target" size={15} /> Ce que nous gérons pour vous</span>
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

      {/* ---- Renvoi vers le service GEO (visibilité organique) ---- */}
      <section className="section aia-geo-sec">
        <div className="container">
          <div className="aia-geo" data-reveal>
            <span className="aia-geo__ic"><Glyph name="spark" size={24} /></span>
            <div className="aia-geo__body">
              <span className="aia-geo__kicker">{GEO_KICKER}</span>
              <h2 className="aia-geo__h">{GEO_H}</h2>
              <p>{GEO_P}</p>
            </div>
            <Link href="/referencement-ia-geo/" className="aia-geo__link">Voir le référencement IA (GEO) <Icon name="arrow-right" size={16} /></Link>
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
            <Button as={Link} href="/contact" variant="secondary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Demander mon audit gratuit</Button>
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
          <p className="aia-plans__note">Budget média non inclus, maîtrisé par vos soins. Devis clair et transparent avant tout démarrage.</p>
        </div>
      </section>

      {/* ---- Garanties ---- */}
      <section className="section aia-guar-sec svcd2-sec--tint">
        <div className="container">
          <header className="aia-head" data-reveal>
            <span className="svcd2-cases__eyebrow"><Icon name="shield-check" size={15} /> Nos engagements</span>
            <h2 className="svcd2-sec__title">{GUAR_TITLE}</h2>
            <p className="aia-guar__hint" aria-hidden="true">Survolez une carte pour la découvrir</p>
          </header>
          <div className="team-acc aia-guar-acc" data-reveal>
            {GUARANTEES.map((g) => (
              <article className="ta ta--guar" key={g.t} style={{ "--_hue": `var(--logo-${g.hue})` }}>
                <span className="ta__ic"><Icon name={g.i} size={22} /></span>
                <span className="ta__vlabel">{g.t}</span>
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

      {/* ---- Formation liée ---- */}
      {s.relatedFormation ? (
        <section className="section svcd2-formation">
          <div className="container">
            <div className="svcd2-formation__card" data-reveal>
              <span className="svcd2-formation__ic"><Icon name="graduation-cap" size={26} /></span>
              <div className="svcd2-formation__body">
                <span className="svcd2-formation__kicker">Vous préférez internaliser&nbsp;?</span>
                <h2 className="svcd2-formation__h">{s.relatedFormation.label}</h2>
                <p>Formez vos équipes à l&apos;IA générative et à la publicité sur les moteurs conversationnels, en présentiel à Strasbourg ou à distance. Finançable par votre OPCO.</p>
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
            <Button as={Link} href="/contact" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Réserver mon audit gratuit</Button>
            <a className="svcd2-final__tel" href={`tel:${ABCM_INFO.phoneHref}`}><Icon name="phone" size={16} /> {ABCM_INFO.phone}</a>
          </div>
        </div>
      </section>

      {/* ---- CTA collant (mobile) ---- */}
      <div className="aia-sticky">
        <Link href="/contact" className="aia-sticky__btn">Audit gratuit <Icon name="arrow-right" size={16} /></Link>
        <a href={`tel:${ABCM_INFO.phoneHref}`} className="aia-sticky__tel" aria-label="Nous appeler"><Icon name="phone" size={18} /></a>
      </div>
    </div>
  );
}
