// Services ABCM Performances : métadonnées des fiches (slug, pôle, couleur,
// icône, titres, accroche, formation liée). Le CONTENU rédactionnel réel,
// repris des pages live d'abcmperformances.com, vit dans data/serviceContent.js.

export const SERVICE_GROUPS = [
  { id: "web", label: "Création de sites web", eyebrow: "Sites & e-commerce", icon: "monitor", hue: "blue",
    intro: "Des sites sur mesure, rapides et pensés pour convertir.",
    services: ["agence-web-strasbourg", "creation-site-ecommerce", "maintenance-site-web"] },
  { id: "referencement", label: "Référencement & visibilité", eyebrow: "SEO, GEO & audit", icon: "search", hue: "green",
    intro: "Soyez trouvé sur Google et dans les moteurs d'IA.",
    services: ["referencement-strasbourg", "referencement-ia-geo", "audit-referencement"] },
  { id: "social", label: "Réseaux sociaux & vidéo", eyebrow: "Contenus & communauté", icon: "megaphone", hue: "magenta",
    intro: "Animez votre communauté et produisez des contenus qui engagent.",
    services: ["community-management", "video-reseaux-sociaux", "videos-marque-employeur"] },
  { id: "acquisition", label: "Marketing & acquisition", eyebrow: "Publicité & stratégie", icon: "target", hue: "orange",
    intro: "Des leviers pilotés pour générer du trafic et des clients.",
    services: ["agence-sea", "marketing-externalise", "personal-branding"] },
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
  // -------------------------------------------------------- RÉFÉRENCEMENT
  { slug: "referencement-strasbourg", group: "referencement", hue: "green", icon: "search",
    name: "Référencement SEO",
    title: "Référencement SEO à Strasbourg",
    tagline: "Positionnez votre site en tête des résultats Google et captez des clients.",
    relatedFormation: { url: "/formation-referencement-strasbourg/", label: "Formation SEO" } },
  { slug: "referencement-ia-geo", group: "referencement", hue: "orange", icon: "sparkles",
    name: "Référencement GEO (IA)",
    title: "Référencement GEO et IA à Strasbourg",
    tagline: "Soyez cité par ChatGPT, Perplexity, Gemini et Copilot.",
    relatedFormation: { url: "/formation-savoir-utiliser-chat-gpt-pour-ameliorer-sa-productivite/", label: "Formation ChatGPT & IA" } },
  { slug: "audit-referencement", group: "referencement", hue: "green", icon: "line-chart",
    name: "Audit SEO",
    title: "Audit SEO à Strasbourg",
    tagline: "Identifiez les freins techniques qui bloquent votre référencement.",
    relatedFormation: { url: "/formation-referencement-strasbourg/", label: "Formation SEO" } },
  // ----------------------------------------------------------- SOCIAL / VIDÉO
  { slug: "community-management", group: "social", hue: "magenta", icon: "megaphone",
    name: "Community management",
    title: "Agence de community management à Strasbourg",
    tagline: "Des experts pour déployer votre marque sur les réseaux sociaux.",
    relatedFormation: { url: "/formation-reseaux-sociaux/", label: "Formation réseaux sociaux" } },
  { slug: "video-reseaux-sociaux", group: "social", hue: "magenta", icon: "youtube",
    name: "Vidéos réseaux sociaux",
    title: "Production de vidéos pour les réseaux sociaux à Strasbourg",
    tagline: "Des vidéos qualitatives pour dynamiser votre présence digitale.",
    relatedFormation: { url: "/formation-capcut/", label: "Formation CapCut & vidéo" } },
  { slug: "videos-marque-employeur", group: "social", hue: "orange", icon: "users",
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
  { slug: "marketing-externalise", group: "acquisition", hue: "blue", icon: "line-chart",
    name: "Marketing externalisé",
    title: "Marketing externalisé à Strasbourg",
    tagline: "Déléguez votre marketing sans recruter, gardez le contrôle.",
    relatedFormation: { url: "/formation-marketing-digital-webmarketing-strasbourg/", label: "Formation marketing digital" } },
  { slug: "personal-branding", group: "acquisition", hue: "magenta", icon: "user-round",
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
  "marketing-externalise": "Direction marketing externalisée à Strasbourg",
  "personal-branding": "Personal branding pour dirigeants à Strasbourg",
};

export function serviceMetadata(slug) {
  const s = getService(slug);
  if (!s) return {};
  return {
    title: SERVICE_SEO_TITLES[s.slug] || s.title,
    description: `${s.tagline} ABCM Performances, agence de communication digitale à Strasbourg depuis 2015.`,
    alternates: { canonical: `/${slug}/` },
  };
}
