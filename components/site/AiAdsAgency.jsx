import React from "react";
import Link from "next/link";
import { Button, Icon } from "@/components/ds";
import { ABCM_SERVICES, SERVICE_GROUPS, getService } from "@/data/services";
import { ABCM_INFO } from "@/data/formations";
import { ScrollReveal } from "@/components/site/ScrollReveal";

// Fiche service « Agence de publicité IA » (/agence-pub-ia).
//
// Gabarit dédié : reprend l'ADN visuel des fiches service (classes svcd2-*)
// mais dans une version plus futuriste et 100 % orientée conversion (sections
// aia-*). Contenu construit pour dépasser les concurrents (425PPM, Adrénaline,
// ALIA…) : on couvre à la fois la PERFORMANCE (pub sur IA conversationnelles,
// enchères pilotées, attribution) ET la CRÉATION générative, avec les atouts
// ABCM (proximité Strasbourg, humain + IA, sans engagement, transparence).
//
// Composant serveur : aucune dépendance JS côté client (FAQ en <details>, CTA
// collant en CSS). Le contenu vit ici pour rester maîtrisé éditorialement.

const SITE = ABCM_INFO.url;
const SLUG = "agence-pub-ia";

// ── Glyphes futuristes (SVG en ligne, style « trait » cohérent avec lucide) ──
// Évite de dépendre d'icônes absentes de la map maison.
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
    case "brain":
      return (<svg {...p}><path d="M9.5 4a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 5 9a2.5 2.5 0 0 0 1 4v2a2.5 2.5 0 0 0 3.5 2.3" /><path d="M14.5 4A2.5 2.5 0 0 1 17 6.5 2.5 2.5 0 0 1 19 9a2.5 2.5 0 0 1-1 4v2a2.5 2.5 0 0 1-3.5 2.3" /><path d="M12 4.5v15" /></svg>);
    default:
      return (<svg {...p}><circle cx="12" cy="12" r="8" /></svg>);
  }
}

// ── Contenu (data → rendu, pour garder du texte propre et sûr au lint) ──

const HERO_POINTS = [
  "Humain + IA : la créativité de notre équipe, la puissance des algorithmes",
  "Vous gardez la propriété de vos comptes, de vos données et de vos audiences",
  "Sans engagement de durée : seuls les résultats prolongent le partenariat",
];

const METRICS = [
  { big: "Jusqu'à -38 %", label: "de coût d'acquisition à budget égal" },
  { big: "x10", label: "de variantes créatives testées chaque mois" },
  { big: "24/7", label: "d'optimisation automatique des campagnes" },
];

const CAPS = [
  { g: "chat-ai", t: "Publicité sur les IA conversationnelles",
    d: "On positionne votre marque là où vos clients posent désormais leurs questions : ChatGPT, Perplexity, Gemini, Copilot. Formats natifs et visibilité dans les réponses génératives (GEO/AEO)." },
  { g: "spark", t: "Création publicitaire générative",
    d: "Visuels, déclinaisons et vidéos produits en série par IA, puis affinés par nos directeurs artistiques. De quoi alimenter l'A/B testing sans exploser le budget création." },
  { g: "target", t: "Ciblage prédictif, sans cookies",
    d: "Segmentation par signaux d'intention et modèles prédictifs (Performance Max, Advantage+). On touche les bons profils au bon moment, y compris dans un web sans cookies tiers." },
  { g: "gauge", t: "Enchères & budgets pilotés par IA",
    d: "Les algorithmes ajustent enchères, audiences et diffusion en continu ; nous fixons le cap, les garde-fous et la stratégie pour éviter le pilotage automatique aveugle." },
  { g: "layers", t: "Personnalisation à grande échelle",
    d: "Messages, accroches et pages d'atterrissage adaptés à chaque audience et chaque étape du parcours, générés et testés à une cadence impossible en manuel." },
  { g: "radar", t: "Mesure & attribution augmentée",
    d: "On regarde l'incrémentalité réelle, pas seulement le dernier clic. Reporting clair, KPIs business (leads, CA, marge) et recommandations, pas des tableaux illisibles." },
];

const STEPS = [
  { t: "Audit & données", d: "Analyse de vos campagnes, de votre marché et de vos données. On identifie les fuites de budget et les gisements de croissance avant de dépenser un euro." },
  { t: "Création augmentée", d: "Angles, visuels et vidéos générés par IA puis validés par notre équipe. On arrive au lancement avec un arsenal de variantes, pas une seule annonce." },
  { t: "Lancement & pilotage IA", d: "Mise en ligne multi-canal (Google, Meta, LinkedIn, IA conversationnelles) avec enchères pilotées par les algorithmes sous notre supervision." },
  { t: "Optimisation & reporting", d: "Chaque semaine, on coupe ce qui ne marche pas, on amplifie ce qui convertit, et on vous livre un point clair et actionnable." },
];

const VS = [
  { k: "Volume créatif", ia: "Des dizaines de variantes générées et testées", old: "1 à 3 annonces, figées des semaines" },
  { k: "Ciblage", ia: "Prédictif, par intention, sans cookies tiers", old: "Audiences manuelles, dépendantes des cookies" },
  { k: "Optimisation", ia: "En continu, 24/7, par les algorithmes", old: "Ajustements ponctuels, quelques fois par mois" },
  { k: "Nouveaux canaux", ia: "Présence sur ChatGPT, Perplexity, Gemini", old: "Search & social classiques uniquement" },
  { k: "Mesure", ia: "Incrémentalité & KPIs business", old: "Dernier clic, CPC, indicateurs de vanité" },
  { k: "Coût création", ia: "Marginal grâce à la génération IA", old: "Élevé, chaque déclinaison se facture" },
];

const STATS = [
  { big: "2015", label: "l'agence forme et déploie le digital dans le Grand Est" },
  { big: "4,9/5", label: "note moyenne de nos clients accompagnés" },
  { big: "100 %", label: "de vos comptes et données restent les vôtres" },
  { big: "0", label: "engagement de durée imposé" },
];

const PLANS = [
  { name: "Diagnostic IA", price: "Offert", tag: "",
    pitch: "Un audit de vos campagnes et de votre potentiel IA, avec un plan d'action concret que vous repartez avec, même sans travailler avec nous.",
    feats: ["Audit des campagnes existantes", "Opportunités IA & canaux prioritaires", "Estimation de gains réaliste"],
    cta: "Réserver mon diagnostic" },
  { name: "Croissance", price: "à partir de 900 €/mois", tag: "Le plus choisi",
    pitch: "La gestion complète de vos campagnes publicitaires pilotées par IA : création générative, diffusion multi-canal, optimisation et reporting.",
    feats: ["Campagnes Google, Meta & IA conversationnelles", "Création générative illimitée", "Optimisation continue + point hebdo", "Reporting business mensuel"],
    cta: "Lancer ma croissance" },
  { name: "Sur-mesure", price: "Sur devis", tag: "",
    pitch: "Pour les budgets média conséquents et les enjeux multi-marchés : dispositif dédié, intégrations data et accompagnement stratégique renforcé.",
    feats: ["Stratégie omnicanale avancée", "Intégrations data & CRM", "Interlocuteur dédié à Strasbourg"],
    cta: "Construire mon dispositif" },
];

const GUARANTEES = [
  { i: "shield-check", t: "Vous restez propriétaire", d: "Comptes publicitaires, données et audiences vous appartiennent, à 100 %. On travaille sur vos actifs, jamais à votre place." },
  { i: "line-chart", t: "Transparence totale", d: "Vous voyez où va chaque euro de budget média et ce qu'il rapporte. Aucun coût caché, aucune marge dissimulée sur vos dépenses." },
  { i: "user-round", t: "Un humain à Strasbourg", d: "Un interlocuteur dédié qui connaît votre dossier, pas un ticket. L'IA fait le volume, nous gardons le jugement." },
  { i: "sparkles", t: "Sans engagement", d: "Pas de durée imposée. Notre seule sécurité, c'est votre satisfaction et vos résultats mois après mois." },
];

const FAQS = [
  { q: "C'est quoi, concrètement, une agence de publicité IA ?",
    a: "C'est une agence qui conçoit, diffuse et optimise vos campagnes publicitaires en s'appuyant sur l'intelligence artificielle à chaque étape : génération des créations (visuels, vidéos, accroches), ciblage prédictif, enchères automatiques et mesure de la performance. L'IA fait le volume et la vitesse, notre équipe garde la stratégie, la direction créative et le contrôle." },
  { q: "En quoi est-ce différent d'une campagne Google Ads classique ?",
    a: "Le SEA classique reste au cœur du dispositif, mais la publicité IA va plus loin : on génère et teste dix fois plus de variantes créatives, on cible par signaux d'intention plutôt que par simples mots-clés, on laisse les algorithmes optimiser en continu, et on ouvre de nouveaux espaces comme les réponses de ChatGPT ou Perplexity. Résultat : moins de budget gaspillé et plus de conversions." },
  { q: "Peut-on vraiment faire de la publicité dans ChatGPT ou Perplexity aujourd'hui ?",
    a: "Les formats publicitaires natifs dans les moteurs conversationnels arrivent très vite, et certains sont déjà accessibles. En attendant leur généralisation, on vous rend visible dans les réponses générées par l'IA grâce au GEO (Generative Engine Optimization). Se positionner maintenant, c'est prendre l'avantage du premier arrivé avant que la concurrence et les coûts n'augmentent." },
  { q: "L'IA va-t-elle remplacer l'humain et diluer ma marque ?",
    a: "Non, et c'est justement notre différence. L'IA accélère la production et l'optimisation, mais chaque angle, chaque visuel et chaque message passe par le filtre de notre équipe et de votre charte. Vous gardez une marque cohérente et une voix qui vous ressemble, sans les dérapages du tout-automatique." },
  { q: "Comment ciblez-vous sans les cookies tiers ?",
    a: "On s'appuie sur les données de première main (vos clients, votre CRM), sur les signaux d'intention et sur les modèles prédictifs des régies (Performance Max, Advantage+). Ces approches sont conçues pour un web sans cookies et sont souvent plus précises que l'ancien ciblage, car elles anticipent l'intention d'achat plutôt que de suivre passivement." },
  { q: "Quel budget faut-il prévoir ?",
    a: "La gestion de campagnes démarre à partir de 900 €/mois d'honoraires, auxquels s'ajoute votre budget média, que vous maîtrisez et pouvez ajuster. Nous commençons toujours par un diagnostic gratuit pour définir un budget réaliste au regard de vos objectifs, sans vous survendre." },
  { q: "Au bout de combien de temps voit-on des résultats ?",
    a: "Les premiers signaux (baisse du coût par clic, hausse du taux de conversion) apparaissent souvent dès les premières semaines, le temps que les algorithmes apprennent. Pour une performance stable et durable, on raisonne sur 2 à 3 mois. On vous dit toujours la vérité sur ce qui est atteignable et quand." },
  { q: "Suis-je engagé et est-ce que je garde mes comptes ?",
    a: "Aucun engagement de durée : vous restez libre à tout moment. Et vos comptes publicitaires, vos données et vos audiences vous appartiennent intégralement : si notre collaboration s'arrête, vous repartez avec l'ensemble de vos actifs. C'est votre satisfaction qui fait durer le partenariat, rien d'autre." },
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
        name: "Publicité IA",
        serviceType: "Agence de publicité par intelligence artificielle",
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
  const h1 = h1Override || "L'agence de publicité propulsée par l'IA";

  return (
    <div className="svcd2 aia" style={{ "--_hue": `var(--logo-${s.hue})` }}>
      <ScrollReveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---- Hero futuriste ---- */}
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
        <div className="container svcd2-hero__inner">
          <nav className="svcd2-crumbs" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span className="svcd2-crumbs__current">{s.name}</span>
          </nav>
          <span className="svcd2-hero__eyebrow aia-hero__eyebrow"><Icon name="sparkles" size={16} /> Publicité nouvelle génération</span>
          <h1 className="svcd2-hero__title aia-hero__title">{h1} <span className="aia-grad">à Strasbourg</span></h1>
          <p className="svcd2-hero__lead">{s.tagline} On combine la créativité de notre équipe et la puissance des algorithmes pour transformer votre budget média en clients.</p>

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
            <Button as={Link} href="/contact" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Auditer mes campagnes gratuitement</Button>
            <a href="#methode" className="svcd2-hero__ghost">Voir notre méthode</a>
          </div>
        </div>
      </section>

      {/* ---- Bandeau confiance ---- */}
      <div className="aia-trust">
        <div className="container aia-trust__inner">
          <span className="aia-trust__item"><Icon name="star" size={15} /> 4,9/5 clients</span>
          <span className="aia-trust__item"><Icon name="shield-check" size={15} /> Sans engagement</span>
          <span className="aia-trust__item"><Icon name="map-pin" size={15} /> Équipe à Strasbourg</span>
          <span className="aia-trust__item"><Icon name="sparkles" size={15} /> Depuis 2015</span>
        </div>
      </div>

      {/* ---- Pourquoi maintenant (first mover, honnête) ---- */}
      <section className="svcd2-sec aia-why">
        <div className="container container-narrow svcd2-sec__inner" data-reveal>
          <span className="svcd2-cases__eyebrow"><Icon name="sparkles" size={15} /> Le virage est maintenant</span>
          <h2 className="svcd2-sec__title">Vos clients ne cherchent plus, ils demandent à l&apos;IA</h2>
          <p className="aia-lead">Des millions de recherches ont déjà quitté Google pour ChatGPT, Perplexity ou Gemini. La publicité suit ce mouvement, et de nouveaux espaces s&apos;ouvrent. Les marques qui s&apos;y positionnent aujourd&apos;hui captent l&apos;attention pendant que les coûts sont bas et la concurrence rare. C&apos;est l&apos;avantage du premier arrivé, et il ne durera pas.</p>
          <p className="aia-lead">Notre rôle : vous y placer intelligemment, sans jargon ni promesses magiques, en pilotant l&apos;IA avec un vrai jugement humain, pour des résultats que l&apos;on mesure en clients, pas en impressions.</p>
        </div>
      </section>

      {/* ---- Capacités ---- */}
      <section className="section aia-caps-sec">
        <div className="container">
          <header className="aia-head" data-reveal>
            <span className="svcd2-cases__eyebrow"><Icon name="target" size={15} /> Ce que nous activons pour vous</span>
            <h2 className="svcd2-sec__title">Une machine à conversions, de la création à la mesure</h2>
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
            <h2 className="svcd2-sec__title">Quatre étapes, zéro budget gaspillé</h2>
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
            <span className="svcd2-cases__eyebrow"><Icon name="sparkles" size={15} /> IA vs gestion classique</span>
            <h2 className="svcd2-sec__title">Pourquoi vos concurrents restés au manuel décrochent</h2>
          </header>
          <div className="aia-vs" data-reveal>
            <div className="aia-vs__row aia-vs__row--head">
              <span className="aia-vs__k" />
              <span className="aia-vs__ia">Publicité pilotée par IA</span>
              <span className="aia-vs__old">Gestion classique</span>
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
              <h2>Curieux de ce que l&apos;IA changerait pour vous&nbsp;?</h2>
              <p>On audite gratuitement vos campagnes et on vous montre, chiffres à l&apos;appui, où se cachent vos prochains clients.</p>
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
            <h2 className="svcd2-sec__title">Un point de départ pour chaque ambition</h2>
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
            <h2 className="svcd2-sec__title">La technologie de demain, l&apos;éthique en plus</h2>
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
            <h2 className="svcd2-sec__title">Vos questions sur la publicité IA</h2>
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
                <p>Formez vos équipes à l&apos;IA générative et à la publicité augmentée, en présentiel à Strasbourg ou à distance. Finançable par votre OPCO.</p>
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
          <h2 className="svcd2-final__title">Prenez l&apos;avantage avant vos concurrents</h2>
          <p className="svcd2-final__sub">Un échange de 30 minutes, gratuit et sans engagement, pour voir ce que la publicité IA peut changer pour votre activité.</p>
          <div className="svcd2-final__actions">
            <Button as={Link} href="/contact" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Réserver mon audit gratuit</Button>
            <a className="svcd2-final__tel" href={`tel:${ABCM_INFO.phoneHref}`}><Icon name="phone" size={16} /> {ABCM_INFO.phone}</a>
          </div>
        </div>
      </section>

      {/* ---- CTA collant (mobile) ---- */}
      <div className="aia-sticky" aria-hidden="false">
        <Link href="/contact" className="aia-sticky__btn">Audit gratuit <Icon name="arrow-right" size={16} /></Link>
        <a href={`tel:${ABCM_INFO.phoneHref}`} className="aia-sticky__tel" aria-label="Nous appeler"><Icon name="phone" size={18} /></a>
      </div>
    </div>
  );
}
