// Shared icon wrapper for the ABCM UI kits — renders Lucide stroke icons.
// Lucide is loaded via CDN in index.html (window.lucide).
function Icon({ name, size = 20, strokeWidth = 2, className = "", style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (!host || !window.lucide) return;
    host.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    host.appendChild(i);
    window.lucide.createIcons({
      attrs: { width: size, height: size, "stroke-width": strokeWidth },
      nameAttr: "data-lucide",
    });
  }, [name, size, strokeWidth]);
  return <span ref={ref} className={"abcm-ic " + className} style={{ display: "inline-flex", lineHeight: 0, ...style }} />;
}

// Service data shared across screens (mirrors abcmperformances.com offering).
const ABCM_SERVICES = [
  { hue: "blue",    icon: "monitor",        title: "Création de site web",   desc: "Sites vitrines, e-commerce et one-page, pensés pour convertir.", slug: "site-web" },
  { hue: "magenta", icon: "megaphone",      title: "Community Management",   desc: "Ligne éditoriale, contenus et gestion de vos réseaux sociaux.", slug: "community" },
  { hue: "green",   icon: "search",         title: "Référencement SEO",      desc: "Remontez sur Google grâce à une stratégie SEO durable.", slug: "seo" },
  { hue: "orange",  icon: "sparkles",       title: "Référencement GEO (IA)", desc: "Soyez visible sur les moteurs d'IA. Prenez une longueur d'avance.", slug: "geo" },
  { hue: "yellow",  icon: "target",         title: "Google Ads",             desc: "Campagnes SEA, Display & Shopping qui boostent votre visibilité.", slug: "ads" },
  { hue: "blue",    icon: "user-round",     title: "Personal Branding",      desc: "Positionnement, ciblage et diffusion de contenus sur-mesure.", slug: "branding" },
  { hue: "magenta", icon: "line-chart",     title: "Stratégie digitale",     desc: "Audit, accompagnement et suivi de votre stratégie en ligne.", slug: "strategie" },
  { hue: "green",   icon: "graduation-cap", title: "Formations",             desc: "Montez en compétences sur le digital et l'IA avec nos experts.", slug: "formations" },
];

const ABCM_NAV = [
  { label: "Expertises", href: "#services" },
  { label: "Consulting", href: "#strategie" },
  { label: "Références", href: "#references" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

Object.assign(window, { Icon, ABCM_SERVICES, ABCM_NAV });
