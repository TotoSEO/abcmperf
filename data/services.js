// Services ABCM Performances : métadonnées des fiches (slug, pôle, couleur,
// icône, titres, accroche, formation liée). Le CONTENU rédactionnel réel,
// repris des pages live d'abcmperformances.com, vit dans data/serviceContent.js.

// 4 pôles alignés sur l'offre StriQ (Stratégie & audit ; Marketing digital &
// acquisition ; Web & e-commerce ; Marque & influence). Répartition des 12
// fiches existantes ; d'autres fiches (Shopping, Social Ads, No-code, Audit
// site web, Marketing RH) viendront compléter les pôles ultérieurement.
export const SERVICE_GROUPS = [
  { id: "strategie", label: "Stratégie & audit", eyebrow: "Conseil & pilotage", icon: "target", hue: "blue",
    intro: "Cadrez votre stratégie digitale et identifiez vos leviers de croissance.",
    services: ["marketing-externalise", "audit-referencement"] },
  { id: "acquisition", label: "Marketing digital & acquisition", eyebrow: "SEO, IA, publicité & réseaux", icon: "search", hue: "green",
    intro: "Générez du trafic et des clients : référencement, IA, publicité et réseaux sociaux.",
    services: ["referencement-strasbourg", "referencement-ia-geo", "agence-sea", "agence-pub-ia", "community-management"] },
  { id: "web", label: "Web & e-commerce", eyebrow: "Sites & boutiques en ligne", icon: "monitor", hue: "orange",
    intro: "Des sites et boutiques sur mesure, rapides et pensés pour convertir.",
    services: ["agence-web-strasbourg", "creation-site-ecommerce", "maintenance-site-web", "agence-payload"] },
  { id: "marque", label: "Marque & influence", eyebrow: "Contenus, vidéo & personal branding", icon: "megaphone", hue: "magenta",
    intro: "Faites rayonner votre marque : vidéo, marque employeur et personal branding.",
    services: ["video-reseaux-sociaux", "videos-marque-employeur", "personal-branding"] },
];

export const ABCM_SERVICES = [
  // ----------------------------------------------------------------- WEB
  { slug: "agence-web-strasbourg", group: "web", hue: "blue", icon: "monitor",
    name: "Création de site internet",
    title: "Création de sites internet à Strasbourg",
    tagline: "Des sites sur mesure qui allient design, performance et référencement.",
    relatedFormation: { url: "/formation-wordpress/", label: "Formation WordPress" } },
  { slug: "creation-site-ecommerce", group: "web", hue: "green", icon: "line-chart",
    name: "Création de site e-commerce",
    title: "Création de site e-commerce à Strasbourg",
    tagline: "Une boutique en ligne efficace et rentable, optimisée pour la vente.",
    relatedFormation: { url: "/formation-wordpress/", label: "Formation WordPress" } },
  { slug: "maintenance-site-web", group: "web", hue: "blue", icon: "shield-check",
    name: "Maintenance & hébergement",
    title: "Maintenance et hébergement de site web à Strasbourg",
    tagline: "Confiez-nous la maintenance de votre site en toute tranquillité.",
    relatedFormation: { url: "/formation-wordpress/", label: "Formation WordPress" } },
  { slug: "agence-payload", group: "web", hue: "blue", icon: "monitor",
    name: "Agence Payload",
    title: "Agence Payload CMS à Strasbourg",
    tagline: "Sites et back-offices sur-mesure propulsés par Payload CMS et Next.js.",
    // Fiche dédiée (gabarit PayloadAgency) ciblée sur la requête « agence
    // Payload », affichée dans le menu et la grille d'accueil au sein du pôle
    // Web. Pas de formation liée (une formation WordPress serait contradictoire
    // sur une fiche Payload).
  },
  // -------------------------------------------------------- RÉFÉRENCEMENT
  { slug: "referencement-strasbourg", group: "acquisition", hue: "green", icon: "search",
    name: "Référencement SEO",
    title: "Référencement SEO à Strasbourg",
    tagline: "Positionnez votre site en tête des résultats Google et captez des clients.",
    relatedFormation: { url: "/formation-referencement-strasbourg/", label: "Formation SEO" } },
  { slug: "referencement-ia-geo", group: "acquisition", hue: "orange", icon: "sparkles",
    name: "Référencement GEO (IA)",
    title: "Référencement GEO et IA à Strasbourg",
    tagline: "Soyez cité par ChatGPT, Perplexity, Gemini et Copilot.",
    relatedFormation: { url: "/formation-savoir-utiliser-chat-gpt-pour-ameliorer-sa-productivite/", label: "Formation ChatGPT & IA" } },
  { slug: "audit-referencement", group: "strategie", hue: "green", icon: "line-chart",
    name: "Audit SEO",
    title: "Audit SEO à Strasbourg",
    tagline: "Identifiez les freins techniques qui bloquent votre référencement.",
    relatedFormation: { url: "/formation-referencement-strasbourg/", label: "Formation SEO" } },
  // ----------------------------------------------------------- SOCIAL / VIDÉO
  { slug: "community-management", group: "acquisition", hue: "magenta", icon: "megaphone",
    name: "Community management",
    title: "Agence de community management à Strasbourg",
    tagline: "Des experts pour déployer votre marque sur les réseaux sociaux.",
    relatedFormation: { url: "/formation-reseaux-sociaux/", label: "Formation réseaux sociaux" } },
  { slug: "video-reseaux-sociaux", group: "marque", hue: "magenta", icon: "youtube",
    name: "Vidéos réseaux sociaux",
    title: "Production de vidéos pour les réseaux sociaux à Strasbourg",
    tagline: "Des vidéos qualitatives pour dynamiser votre présence digitale.",
    relatedFormation: { url: "/formation-capcut/", label: "Formation CapCut & vidéo" } },
  { slug: "videos-marque-employeur", group: "marque", hue: "orange", icon: "users",
    name: "Vidéos marque employeur",
    title: "Production de vidéos marque employeur à Strasbourg",
    tagline: "Des contenus qui attirent et fidélisent les meilleurs talents.",
    relatedFormation: { url: "/formation-marketing-rh-marque-employeur/", label: "Formation marque employeur" } },
  // ------------------------------------------------------ MARKETING / ACQUISITION
  { slug: "agence-sea", group: "acquisition", hue: "yellow", icon: "target",
    name: "Google Ads (SEA)",
    title: "Agence Google Ads à Strasbourg",
    tagline: "Des campagnes SEA pour des résultats rapides et mesurables.",
    relatedFormation: { url: "/formation-publicite-google-ads/", label: "Formation Google Ads" } },
  { slug: "agence-pub-ia", group: "acquisition", hue: "magenta", icon: "sparkles",
    name: "Publicité IA",
    title: "Agence de publicité IA à Strasbourg",
    tagline: "Nous diffusons et gérons vos campagnes publicitaires sur les IA : ChatGPT, Perplexity, Gemini et Copilot.",
    // Page « landing » (accessible en direct / via campagnes) : volontairement
    // absente du menu de navigation. Reste dans le sitemap et les listings.
    hideFromNav: true,
    relatedFormation: { url: "/formation-savoir-utiliser-chat-gpt-pour-ameliorer-sa-productivite/", label: "Formation IA générative" } },
  { slug: "marketing-externalise", group: "strategie", hue: "blue", icon: "line-chart",
    name: "Marketing externalisé",
    title: "Marketing externalisé à Strasbourg",
    tagline: "Déléguez votre marketing sans recruter, gardez le contrôle.",
    relatedFormation: { url: "/formation-marketing-digital-webmarketing-strasbourg/", label: "Formation marketing digital" } },
  { slug: "personal-branding", group: "marque", hue: "magenta", icon: "user-round",
    name: "Personal branding",
    title: "Personal Branding à Strasbourg",
    tagline: "Votre image, notre expertise : faites-vous reconnaître.",
    relatedFormation: { url: "/formation-personal-branding/", label: "Formation personal branding" } },
];

export const ABCM_NAV = [
  { label: "Expertises", href: "/#services" },
  { label: "Formations", href: "/formations-strasbourg/" },
  { label: "Références", href: "/#references" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export function getService(slug) {
  return ABCM_SERVICES.find((s) => s.slug === slug);
}

export function servicesByGroup() {
  return SERVICE_GROUPS.map((g) => ({
    group: g,
    items: g.services.map((slug) => getService(slug)).filter(Boolean),
  }));
}

// Titres SEO concis et DISTINCTS du H1 (le H1 reste s.title). Le template
// "%s | ABCM" est ajouté par le layout ; chaque <title> rendu fait < 62 car.
const SERVICE_SEO_TITLES = {
  "agence-web-strasbourg": "Création de site web sur mesure à Strasbourg",
  "creation-site-ecommerce": "Création de boutique e-commerce à Strasbourg",
  "maintenance-site-web": "Maintenance & hébergement de site web",
  "referencement-strasbourg": "Agence SEO & référencement naturel à Strasbourg",
  "referencement-ia-geo": "Visibilité dans ChatGPT & les IA (GEO)",
  "audit-referencement": "Audit SEO complet de votre site web",
  "community-management": "Community management & réseaux sociaux",
  "video-reseaux-sociaux": "Vidéos pour les réseaux sociaux à Strasbourg",
  "videos-marque-employeur": "Vidéos marque employeur à Strasbourg",
  "agence-sea": "Campagnes Google Ads & SEA à Strasbourg",
  "agence-pub-ia": "Agence de publicité IA à Strasbourg",
  "agence-payload": "Agence Payload | Sites sur-mesure & back-office",
  "marketing-externalise": "Direction marketing externalisée à Strasbourg",
  "personal-branding": "Personal branding pour dirigeants à Strasbourg",
};

// Meta descriptions dédiées (sinon repli sur tagline + signature). Utile pour
// les fiches dont l'accroche seule ne fait pas une bonne description SERP.
const SERVICE_SEO_DESCRIPTIONS = {
  "agence-pub-ia":
    "Diffusez vos publicités dans les réponses de ChatGPT, Perplexity et l'AI Mode de Google. ABCM Performances crée et gère vos campagnes sur les IA, à Strasbourg.",
  "agence-payload":
    "Agence Payload CMS à Strasbourg : ABCM conçoit des sites et back-offices sur-mesure avec Payload et Next.js. Rapides, sécurisés et 100% adaptés à votre métier.",
};

export function serviceMetadata(slug) {
  const s = getService(slug);
  if (!s) return {};
  const title = SERVICE_SEO_TITLES[s.slug] || s.title;
  const description =
    SERVICE_SEO_DESCRIPTIONS[s.slug] ||
    `${s.tagline} ABCM Performances, agence de communication digitale à Strasbourg depuis 2015.`;
  const url = `/${slug}/`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [{ url: "/og-default.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-default.png"],
    },
  };
}
