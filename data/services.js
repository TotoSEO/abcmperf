// Service data shared across screens (mirrors abcmperformances.com offering).
export const ABCM_SERVICES = [
  { hue: "blue",    icon: "monitor",        title: "Création de site web",   desc: "Sites vitrines, e-commerce et one-page, pensés pour convertir.", slug: "site-web", cat: "Web" },
  { hue: "magenta", icon: "megaphone",      title: "Community Management",   desc: "Ligne éditoriale, contenus et gestion de vos réseaux sociaux.", slug: "community", cat: "Réseaux" },
  { hue: "green",   icon: "search",         title: "Référencement SEO",      desc: "Remontez sur Google grâce à une stratégie SEO durable.", slug: "seo", cat: "Référencement" },
  { hue: "orange",  icon: "sparkles",       title: "Référencement GEO (IA)", desc: "Soyez visible sur les moteurs d'IA. Prenez une longueur d'avance.", slug: "geo", cat: "Référencement" },
  { hue: "yellow",  icon: "target",         title: "Google Ads",             desc: "Campagnes SEA, Display & Shopping qui boostent votre visibilité.", slug: "ads", cat: "Référencement" },
  { hue: "blue",    icon: "user-round",     title: "Personal Branding",      desc: "Positionnement, ciblage et diffusion de contenus sur-mesure.", slug: "branding", cat: "Conseil" },
  { hue: "magenta", icon: "line-chart",     title: "Stratégie digitale",     desc: "Audit, accompagnement et suivi de votre stratégie en ligne.", slug: "strategie", cat: "Conseil" },
  { hue: "green",   icon: "graduation-cap", title: "Formations",             desc: "Montez en compétences sur le digital et l'IA avec nos experts.", slug: "formations", cat: "Conseil" },
];

export const ABCM_NAV = [
  { label: "Expertises", href: "/#services" },
  { label: "Formations", href: "/formations-strasbourg/" },
  { label: "Références", href: "/#references" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

// Per-service "méthode" steps used by the service detail page.
export const SERVICE_STEPS = {
  "site-web": ["Audit & cahier des charges", "Design sur-mesure", "Développement responsive", "SEO technique intégré", "Formation à l'autonomie"],
  "community": ["Ligne éditoriale", "Calendrier de publication", "Création de contenus", "Community management", "Reporting mensuel"],
  "seo": ["Audit SEO complet", "Recherche de mots-clés", "Optimisation on-page", "Netlinking", "Suivi de positions"],
};

export const DEFAULT_STEPS = ["Audit de l'existant", "Stratégie sur-mesure", "Déploiement opérationnel", "Suivi & reporting", "Optimisation continue"];

export function getService(slug) {
  return ABCM_SERVICES.find((s) => s.slug === slug);
}
