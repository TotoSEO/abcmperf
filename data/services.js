// Services ABCM Performances (contenus repris de abcmperformances.com).
// Les liens internes sont placés DANS les contenus, sur des ancres naturelles,
// via la syntaxe [ancre](/url/) rendue par renderRich() dans ServiceDetail.

export const SERVICE_GROUPS = [
  { id: "web", label: "Création de sites web", eyebrow: "Sites & e-commerce", icon: "monitor", hue: "blue",
    intro: "Des sites sur mesure, rapides et pensés pour convertir.",
    services: ["site-internet", "site-ecommerce", "maintenance"] },
  { id: "referencement", label: "Référencement & visibilité", eyebrow: "SEO, GEO & audit", icon: "search", hue: "green",
    intro: "Soyez trouvé sur Google et dans les moteurs d'IA.",
    services: ["referencement-seo", "referencement-geo", "audit-seo"] },
  { id: "social", label: "Réseaux sociaux & vidéo", eyebrow: "Contenus & communauté", icon: "megaphone", hue: "magenta",
    intro: "Animez votre communauté et produisez des contenus qui engagent.",
    services: ["community-management", "video-reseaux-sociaux", "video-marque-employeur"] },
  { id: "acquisition", label: "Marketing & acquisition", eyebrow: "Publicité & stratégie", icon: "target", hue: "orange",
    intro: "Des leviers pilotés pour générer du trafic et des clients.",
    services: ["google-ads", "marketing-externalise", "personal-branding"] },
];

export const ABCM_SERVICES = [
  // ----------------------------------------------------------------- WEB
  {
    slug: "site-internet", group: "web", hue: "blue", icon: "monitor",
    name: "Création de site internet",
    title: "Création de sites internet à Strasbourg",
    tagline: "Des sites sur mesure qui allient design, performance et référencement.",
    intro: [
      "Depuis 2015, ABCM Performances conçoit des sites internet sur mesure, pensés pour valoriser votre image de marque et atteindre vos objectifs. Chaque projet est développé sur WordPress, WooCommerce ou Next.js selon vos besoins.",
      "Nos sites attirent un trafic qualifié grâce à un [référencement naturel](/services/referencement-seo/) intégré dès la conception, convertissent vos visiteurs en clients et respectent les dernières normes UX, RGPD et de sécurité.",
      "Vous vendez en ligne ? Nous créons aussi votre [boutique e-commerce](/services/site-ecommerce/). Et une fois le site livré, nous pouvons en assurer la [maintenance et l'hébergement](/services/maintenance/).",
    ],
    features: [
      "Sites vitrines, one-page et sur mesure",
      "Référencement naturel (SEO) intégré dès la conception",
      "Design qui valorise votre image de marque",
      "Conformité aux normes UX, RGPD et sécurité",
      "Sites pensés pour la conversion",
      "Conseil stratégique en marketing digital",
    ],
    method: null,
    relatedFormation: { url: "/formation-wordpress/", label: "Formation WordPress" },
  },
  {
    slug: "site-ecommerce", group: "web", hue: "green", icon: "line-chart",
    name: "Création de site e-commerce",
    title: "Création de site e-commerce à Strasbourg",
    tagline: "Une boutique en ligne efficace et rentable, optimisée pour la vente.",
    intro: [
      "Pour gagner des clients et écouler votre stock, votre boutique en ligne doit être optimisée pour la vente et la facilité d'utilisation. Nous construisons avec vous un site marchand qui répond à vos objectifs commerciaux.",
      "Au-delà d'un [site vitrine classique](/services/site-internet/), un site marchand est responsive, adapté à tous les supports et conforme aux attentes de Google en matière de [référencement naturel](/services/referencement-seo/). Pour accélérer vos premières ventes, il se combine très bien avec des [campagnes Google Ads](/services/google-ads/).",
      "Technologies WordPress, WooCommerce, React et Elementor : un site performant que vous pouvez faire évoluer en autonomie.",
    ],
    features: [
      "Un site performant, pensé pour la vente",
      "Responsive : mobile, tablette et ordinateur",
      "Facilement modifiable en autonomie",
      "WordPress, WooCommerce, React, Elementor",
      "Ergonomie et arborescence étudiées en amont",
      "Conseils pour booster vos ventes",
    ],
    method: [
      "Étude de l'ergonomie, du menu et de l'arborescence",
      "Conception d'une maquette graphique sur mesure",
      "Développement responsive et optimisé SEO",
      "Accompagnement et conseils après la mise en ligne",
    ],
    relatedFormation: { url: "/formation-wordpress/", label: "Formation WordPress" },
  },
  {
    slug: "maintenance", group: "web", hue: "blue", icon: "shield-check",
    name: "Maintenance & hébergement",
    title: "Maintenance et hébergement de site web à Strasbourg",
    tagline: "Confiez-nous la maintenance de votre site en toute tranquillité.",
    intro: [
      "Un site qui n'est pas régulièrement mis à jour devient vulnérable. Si vous n'avez pas le temps ou les compétences pour le maintenir, notre agence web s'occupe de tout : mises à jour, sécurité, sauvegardes et performances.",
      "Que votre [site internet](/services/site-internet/) ou votre [boutique e-commerce](/services/site-ecommerce/) tourne sur WordPress, PrestaShop, Drupal ou Joomla, nous veillons à ce qu'il reste rapide, sûr et à jour.",
    ],
    features: [
      "Mises à jour du CMS, des thèmes et des extensions",
      "Hébergement sur serveur sécurisé et dédié",
      "Sauvegardes régulières de la base de données",
      "Optimisation de la sécurité",
      "Optimisation des performances et du temps de chargement",
      "Restauration du site en cas de problème",
    ],
    method: null,
    relatedFormation: { url: "/formation-wordpress/", label: "Formation WordPress" },
  },
  // -------------------------------------------------------- RÉFÉRENCEMENT
  {
    slug: "referencement-seo", group: "referencement", hue: "green", icon: "search",
    name: "Référencement SEO",
    title: "Référencement SEO à Strasbourg",
    tagline: "Positionnez votre site en tête des résultats Google et captez des clients.",
    intro: [
      "Nos experts du référencement naturel positionnent votre site dans les pages de résultats de Google. En apparaissant dans les premiers résultats, vous augmentez naturellement vos demandes entrantes et vos ventes.",
      "En amont, nous réalisons toujours un [audit SEO](/services/audit-seo/) de votre site et vous remettons une liste de préconisations. La stratégie travaille ensuite votre positionnement sur les requêtes qui concernent réellement votre activité.",
      "Le SEO se pense dès la [création du site](/services/site-internet/) et se complète très bien avec la [publicité Google Ads](/services/google-ads/) pour des résultats à court terme, ou avec le [référencement GEO](/services/referencement-geo/) pour exister dans les moteurs d'IA.",
    ],
    features: [
      "Audit SEO préalable et préconisations",
      "Stratégie de référencement naturel durable",
      "Positionnement sur les requêtes de votre activité",
      "Plus de demandes entrantes et de ventes",
      "Renforcement de la confiance des utilisateurs",
    ],
    method: null,
    relatedFormation: { url: "/formation-referencement-strasbourg/", label: "Formation SEO" },
  },
  {
    slug: "referencement-geo", group: "referencement", hue: "orange", icon: "sparkles",
    name: "Référencement GEO (IA)",
    title: "Référencement GEO et IA à Strasbourg",
    tagline: "Soyez cité par ChatGPT, Perplexity, Gemini et Copilot.",
    intro: [
      "La recherche change en profondeur. Les IA génératives comme ChatGPT, Perplexity, Gemini et Copilot fournissent des réponses rédigées, souvent sans afficher de liste de liens. Seules les sources structurées, fiables et bien contextualisées sont citées.",
      "Le référencement GEO devient essentiel pour exister dans ces réponses et renforcer votre autorité. Nous combinons le [SEO traditionnel](/services/referencement-seo/) et des leviers avancés (AEO, GSO, GEO) pour positionner votre marque comme une source incontournable.",
    ],
    features: [
      "AEO : contenus compris et cités par les IA conversationnelles",
      "GSO : optimisation pour la recherche générative",
      "GEO : approche globale des moteurs génératifs",
      "Contenus pensés pour la citation et la recommandation",
      "Double expertise SEO traditionnel et IA générative",
    ],
    method: null,
    relatedFormation: { url: "/formation-savoir-utiliser-chat-gpt-pour-ameliorer-sa-productivite/", label: "Formation ChatGPT & IA" },
  },
  {
    slug: "audit-seo", group: "referencement", hue: "green", icon: "line-chart",
    name: "Audit SEO",
    title: "Audit SEO à Strasbourg",
    tagline: "Identifiez les freins techniques qui bloquent votre référencement.",
    intro: [
      "L'audit SEO mesure où en est votre site en termes de performances techniques. Un site mal optimisé ne peut pas bénéficier d'une [stratégie de référencement](/services/referencement-seo/) efficace : nous proposons donc toujours un audit en amont.",
      "Il met en évidence vos points forts comme les éléments bloquants : positions actuelles, performances techniques, architecture, maillage interne, compatibilité mobile, balisages. Vous repartez avec un rapport et un plan d'action clairs, applicables sur votre [site internet](/services/site-internet/).",
    ],
    features: [
      "Audit diagnostic : positions et requêtes de vos visiteurs",
      "Audit de performances : test technique et fonctionnel",
      "Audit concurrentiel : se démarquer de la concurrence",
      "Analyse technique : vitesse, architecture, maillage, redirections",
      "Vérifs : URL, mobile, balisages, robots.txt, Search Console, images",
    ],
    method: [
      "Collecte des accès et analyse des positions actuelles",
      "Identification des mots-clés stratégiques",
      "Audit détaillé des optimisations à mettre en place",
      "Remise du rapport, puis travaux par vous ou par l'agence",
    ],
    relatedFormation: { url: "/formation-referencement-strasbourg/", label: "Formation SEO" },
  },
  // ----------------------------------------------------------- SOCIAL / VIDÉO
  {
    slug: "community-management", group: "social", hue: "magenta", icon: "megaphone",
    name: "Community management",
    title: "Agence de community management à Strasbourg",
    tagline: "Des experts pour déployer votre marque sur les réseaux sociaux.",
    intro: [
      "Nos community managers pilotent le déploiement de votre marque sur les réseaux sociaux : ils construisent votre stratégie, choisissent les bonnes plateformes et communiquent activement en votre nom.",
      "Cette communication demande du temps et des compétences spécifiques. Nous concevons une stratégie personnalisée et une ligne éditoriale détaillée, alimentée par des [vidéos pensées pour les réseaux](/services/video-reseaux-sociaux/) qui génèrent de l'engagement.",
      "Pour les dirigeants qui veulent incarner leur entreprise, le community management se prolonge naturellement avec le [personal branding](/services/personal-branding/).",
    ],
    features: [
      "Création de contenu pour vos réseaux sociaux",
      "Stratégie social media et ligne éditoriale",
      "Animation de la communauté (fans et abonnés)",
      "Mise en place et gestion des publicités sociales",
      "Un community manager dédié à votre marque",
      "Communication adaptée au B2B comme au B2C",
    ],
    method: null,
    relatedFormation: { url: "/formation-reseaux-sociaux/", label: "Formation réseaux sociaux" },
  },
  {
    slug: "video-reseaux-sociaux", group: "social", hue: "magenta", icon: "youtube",
    name: "Vidéos réseaux sociaux",
    title: "Production de vidéos pour les réseaux sociaux à Strasbourg",
    tagline: "Des vidéos qualitatives pour dynamiser votre présence digitale.",
    intro: [
      "La vidéo est l'outil incontournable pour captiver votre audience : elle génère plus d'engagement, raconte votre histoire et humanise votre marque. Comme les algorithmes la favorisent, votre portée s'élargit naturellement.",
      "Nous concevons des packs sur mesure pour Instagram, TikTok, Facebook et les autres plateformes. Ces vidéos prennent tout leur sens lorsqu'elles sont [diffusées et animées](/services/community-management/) dans une vraie stratégie sociale, et se déclinent aussi en [vidéos de marque employeur](/services/video-marque-employeur/).",
    ],
    features: [
      "RDV de co-création pour cadrer la vidéo",
      "Une demi-journée de tournage, une demi-journée de montage",
      "Une vidéo au format 9:16 (16:9 sur demande)",
      "Une vidéo teaser plus courte",
      "Photos du produit ou service pendant le tournage",
      "Options : motion design, animation 3D, formats supplémentaires",
    ],
    method: null,
    relatedFormation: { url: "/formation-capcut/", label: "Formation CapCut & vidéo" },
  },
  {
    slug: "video-marque-employeur", group: "social", hue: "orange", icon: "users",
    name: "Vidéos marque employeur",
    title: "Production de vidéos marque employeur à Strasbourg",
    tagline: "Des contenus qui attirent et fidélisent les meilleurs talents.",
    intro: [
      "La vidéo marque employeur met en avant la culture et les valeurs de votre entreprise : environnement de travail, parole des employés, opportunités de carrière. Elle vous aide à attirer, engager et fidéliser les talents sur LinkedIn, Instagram, TikTok et Facebook.",
      "Ces contenus complètent vos [vidéos réseaux sociaux](/services/video-reseaux-sociaux/) et s'intègrent à votre [stratégie de communauté](/services/community-management/) pour une présence cohérente.",
    ],
    features: [
      "Vidéos valorisant votre culture et vos valeurs",
      "Témoignages d'employés et environnement de travail",
      "Mise en avant des opportunités de carrière",
      "Formats LinkedIn, Instagram, TikTok et Facebook",
      "Sous-titrage et déclinaisons multi-supports",
      "Stratégie sur mesure par secteur d'activité",
    ],
    method: [
      "Échanges autour de vos besoins",
      "Choix de la stratégie et des formats",
      "Trois idées créatives, puis script",
      "Tournage",
      "Montage, retours, sous-titres et déclinaisons",
    ],
    relatedFormation: { url: "/formation-marketing-rh-marque-employeur/", label: "Formation marque employeur" },
  },
  // ------------------------------------------------------ MARKETING / ACQUISITION
  {
    slug: "google-ads", group: "acquisition", hue: "yellow", icon: "target",
    name: "Google Ads (SEA)",
    title: "Agence Google Ads à Strasbourg",
    tagline: "Des campagnes SEA pour des résultats rapides et mesurables.",
    intro: [
      "Augmentez les visites de votre site, dopez les ventes de votre [boutique e-commerce](/services/site-ecommerce/) et gagnez en visibilité grâce à des campagnes SEA performantes sur Google Search, Shopping et le réseau Display.",
      "Là où le [référencement naturel](/services/referencement-seo/) construit votre visibilité sur le long terme, la publicité en ligne touche les bonnes audiences immédiatement, sur les requêtes qui comptent. Nous pilotons et optimisons vos campagnes au quotidien.",
    ],
    features: [
      "Google Search : visibilité rapide sur vos requêtes clés",
      "Google Shopping : accélération des ventes e-commerce",
      "Google Display : trafic et notoriété",
      "Optimisation quotidienne des campagnes",
      "Reporting et analyse",
      "Ajustement du ciblage, des enchères et des messages",
    ],
    method: null,
    relatedFormation: { url: "/formation-publicite-google-ads/", label: "Formation Google Ads" },
  },
  {
    slug: "marketing-externalise", group: "acquisition", hue: "blue", icon: "line-chart",
    name: "Marketing externalisé",
    title: "Marketing externalisé à Strasbourg",
    tagline: "Déléguez votre marketing sans recruter, gardez le contrôle.",
    intro: [
      "Le pilotage stratégique du marketing peut vite devenir lourd pour une PME. Notre direction marketing externalisée vous permet de déléguer cette responsabilité tout en gardant le contrôle de vos décisions, sans embauche ni investissement en recrutement.",
      "Nous prenons en charge la gestion stratégique et opérationnelle de vos leviers : [référencement](/services/referencement-seo/), [publicité en ligne](/services/google-ads/), [réseaux sociaux](/services/community-management/). Un regard externe, une vision claire et une proposition de valeur qui vous distingue durablement.",
    ],
    features: [
      "Gestion marketing à l'année, sans embauche",
      "Approche flexible, adaptée à vos besoins réels",
      "Regard externe et vision stratégique",
      "Création d'une proposition de valeur unique",
      "Solutions novatrices au-delà du cadre traditionnel",
      "Cap maintenu sur une croissance durable",
    ],
    method: [
      "Analyse du contexte (objectifs, secteur, concurrence)",
      "Recommandation stratégique sur mesure",
      "Mise en oeuvre et optimisation continue",
    ],
    relatedFormation: { url: "/formation-marketing-digital-webmarketing-strasbourg/", label: "Formation marketing digital" },
  },
  {
    slug: "personal-branding", group: "acquisition", hue: "magenta", icon: "user-round",
    name: "Personal branding",
    title: "Personal Branding à Strasbourg",
    tagline: "Votre image, notre expertise : faites-vous reconnaître.",
    intro: [
      "Votre image personnelle est devenue un outil de premier plan pour vous démarquer. Ce service s'adresse aux entrepreneurs, dirigeants, consultants et professionnels en quête de visibilité.",
      "Nous structurons une identité professionnelle forte et cohérente, qui reflète vos valeurs et vous positionne comme une référence. Cette présence se travaille au quotidien sur les [réseaux sociaux](/services/community-management/) et peut s'appuyer sur des [vidéos de marque employeur](/services/video-marque-employeur/).",
    ],
    features: [
      "Identité professionnelle cohérente",
      "Stratégies de visibilité sur mesure",
      "Gestion proactive de la réputation",
      "Positionnement en référence de votre secteur",
      "Optimisation de la présence sur les réseaux sociaux",
      "Relation authentique avec votre communauté",
    ],
    method: [
      "Analyse de votre image et de votre présence en ligne",
      "Stratégie adaptée à vos objectifs",
      "Outils pour transformer cette image en réussite durable",
    ],
    relatedFormation: { url: "/formation-personal-branding/", label: "Formation personal branding" },
  },
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
  "site-internet": "Création de site web sur mesure à Strasbourg",
  "site-ecommerce": "Création de boutique e-commerce à Strasbourg",
  "maintenance": "Maintenance & hébergement de site web",
  "referencement-seo": "Agence SEO & référencement naturel à Strasbourg",
  "referencement-geo": "Visibilité dans ChatGPT & les IA (GEO)",
  "audit-seo": "Audit SEO complet de votre site web",
  "community-management": "Community management & réseaux sociaux",
  "video-reseaux-sociaux": "Vidéos pour les réseaux sociaux à Strasbourg",
  "video-marque-employeur": "Vidéos marque employeur à Strasbourg",
  "google-ads": "Campagnes Google Ads & SEA à Strasbourg",
  "marketing-externalise": "Direction marketing externalisée à Strasbourg",
  "personal-branding": "Personal branding pour dirigeants à Strasbourg",
};

export function serviceMetadata(slug) {
  const s = getService(slug);
  if (!s) return {};
  return {
    title: SERVICE_SEO_TITLES[s.slug] || s.title,
    description: `${s.tagline} ABCM Performances, agence de communication digitale à Strasbourg depuis 2015.`,
    alternates: { canonical: `/services/${slug}/` },
  };
}
