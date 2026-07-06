// Derniers articles du blog (instantané manuel). Le listing de la page d'accueil
// se génère dynamiquement à partir de ce tableau : pour ajouter un article, il
// suffit d'ajouter un objet ici (title, url, date, excerpt, image) et une carte
// apparaît automatiquement, image à la une comprise. Aucune autre modification
// n'est nécessaire. Pour un listing 100 % automatique, brancher le blog/CMS
// (flux RSS de abcmperformances.com/blog) sur ce même tableau.
// `image` : chemin relatif à /public (servi via assetPath). Les visuels à la une
// sont stockés localement dans /public/articles pour rester rapides et fiables.
export const ARTICLES = [
  {
    title: "Marketing digital : ce qui va vraiment compter pour le reste de 2026",
    url: "https://abcmperformances.com/tendances-marketing-digital-2026/",
    date: "11 mai 2026",
    excerpt: "Le marketing de 2026 ressemble à une course où les règles changent en plein milieu. Les tendances essentielles à retenir pour cette année.",
    image: "articles/tendances-marketing-digital-2026.webp",
  },
  {
    title: "Le No Code en 2026",
    url: "https://abcmperformances.com/le-no-code-en-2026-2/",
    date: "11 mai 2026",
    excerpt: "Le No Code a profondément transformé la création d'applications. Comment cette révolution rend la technologie accessible à tous.",
    image: "articles/le-no-code-en-2026.webp",
  },
  {
    title: "WooCommerce en 2026",
    url: "https://abcmperformances.com/woocommerce-en-2026/",
    date: "11 mai 2026",
    excerpt: "WooCommerce reste l'une des solutions e-commerce les plus utilisées au monde. Pourquoi cette plateforme flexible reste incontournable.",
    image: "articles/woocommerce-en-2026.webp",
  },
];
