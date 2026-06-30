// Services ABCM Performances (contenus repris fidèlement de abcmperformances.com).
// Les liens internes sont placés DANS les contenus, sur des ancres naturelles,
// via la syntaxe [ancre](/url/) rendue par renderRich() dans ServiceDetail.

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
  {
    slug: "agence-web-strasbourg", group: "web", hue: "blue", icon: "monitor",
    name: "Création de site internet",
    title: "Création de sites internet à Strasbourg",
    tagline: "Des sites sur mesure qui allient design, performance et référencement.",
    intro: [
      "Depuis 2015, ABCM Performances vous accompagne en tant qu'agence web à Strasbourg : création de sites internet, référencement SEO, gestion des réseaux sociaux et publicité en ligne. Nous concevons des sites sur mesure qui allient design, performance et référencement, du site vitrine à la boutique en ligne.",
      "Notre mission : faire de votre site un véritable levier de croissance. Nos sites renforcent votre image de marque, attirent un trafic qualifié grâce au [référencement naturel](/referencement-strasbourg/), convertissent vos visiteurs en clients et respectent les dernières normes UX, RGPD et de sécurité.",
      "Au-delà du SEO, nous intégrons une stratégie d'AEO (Answer Engine Optimization) pour vous rendre visible dans les réponses générées par l'IA, comme ChatGPT ou Google SGE. Selon votre projet, nous travaillons avec WordPress et Elementor, WooCommerce pour le [e-commerce](/creation-site-ecommerce/), ou Payload CMS et Next.js pour les développements sur mesure.",
      "Nos créations démarrent à 1 750 € pour un site vitrine, 3 500 € pour une boutique e-commerce et 5 550 € pour une application web ou mobile. Une fois votre site en ligne, nous pouvons en assurer la [maintenance et l'hébergement](/maintenance-site-web/).",
    ],
    features: [
      "Site vitrine sur mesure, à partir de 1 750 €",
      "Site e-commerce (WooCommerce), à partir de 3 500 €",
      "Application web & mobile (React Native), à partir de 5 550 €",
      "Référencement naturel (SEO) et AEO intégrés dès la conception",
      "WordPress, Elementor, WooCommerce, Payload CMS & Next.js",
      "Conformité aux normes UX, RGPD et sécurité",
    ],
    method: null,
    relatedFormation: { url: "/formation-wordpress/", label: "Formation WordPress" },
  },
  {
    slug: "creation-site-ecommerce", group: "web", hue: "green", icon: "line-chart",
    name: "Création de site e-commerce",
    title: "Création de site e-commerce à Strasbourg",
    tagline: "Une boutique en ligne efficace et rentable, optimisée pour la vente.",
    intro: [
      "Faites confiance à l'agence web ABCM Performances pour créer un site marchand efficace et rentable : une boutique soignée, bien positionnée sur les moteurs de recherche et qui convertit vos visiteurs en acheteurs.",
      "Si vous voulez gagner des clients et écouler votre stock, votre boutique doit être optimisée pour la vente et la facilité d'utilisation. Notre équipe conçoit des sites depuis plus de 9 ans et vous accompagne à chaque étape de votre projet.",
      "Au-delà d'un [site vitrine](/agence-web-strasbourg/), un site marchand est responsive, adapté à tous les supports et conforme aux attentes de Google en matière de [référencement naturel](/referencement-strasbourg/). Pour accélérer vos premières ventes, il se combine très bien avec des [campagnes Google Ads](/agence-sea/).",
    ],
    features: [
      "Un site performant, trouvé rapidement, qui répond clairement",
      "Un site responsive, optimisé pour tous les supports",
      "Un site facile à prendre en main pour modifier vos contenus",
      "WordPress et WooCommerce, mais aussi PrestaShop et Shopify",
      "Catalogue, paiement et gestion des commandes en autonomie",
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
    slug: "maintenance-site-web", group: "web", hue: "blue", icon: "shield-check",
    name: "Maintenance & hébergement",
    title: "Maintenance et hébergement de site web à Strasbourg",
    tagline: "Confiez-nous la maintenance de votre site en toute tranquillité.",
    intro: [
      "Avoir un site internet, c'est essentiel. Mais un site qui n'est pas régulièrement mis à jour devient vite vulnérable : sur le web, les premières mises à jour pointent leur nez quelques jours seulement après la mise en ligne.",
      "Si vous n'avez pas le temps ou les compétences pour le maintenir, notre agence s'occupe de tout. Pour garantir la sécurité et la performance de votre [site internet](/agence-web-strasbourg/) ou de votre [boutique e-commerce](/creation-site-ecommerce/), nous proposons aussi un hébergement sur mesure, adapté à vos besoins.",
    ],
    features: [
      "Mises à jour du CMS, des thèmes et des extensions",
      "Hébergement sur serveur sécurisé et dédié",
      "Sauvegardes régulières de la base de données",
      "Optimisation des options de sécurité",
      "Optimisation des performances du site",
      "Restauration en cas de problème (WordPress, PrestaShop, Drupal, Joomla)",
    ],
    method: null,
    relatedFormation: { url: "/formation-wordpress/", label: "Formation WordPress" },
  },
  // -------------------------------------------------------- RÉFÉRENCEMENT
  {
    slug: "referencement-strasbourg", group: "referencement", hue: "green", icon: "search",
    name: "Référencement SEO",
    title: "Référencement SEO à Strasbourg",
    tagline: "Positionnez votre site en tête des résultats Google et captez des clients.",
    intro: [
      "Nos experts du référencement naturel (SEO) positionnent votre site internet dans les pages de résultats de Google. En apparaissant dans les premiers résultats, vous gagnez en visibilité et augmentez vos demandes entrantes et vos ventes.",
      "Le référencement est une discipline à part entière, qui demande de l'expérience et du temps. Nous travaillons votre positionnement sur les requêtes qui vous amènent un trafic réellement qualifié, après un [audit SEO](/audit-referencement/) et ses préconisations.",
      "Le SEO se pense dès la [création du site](/agence-web-strasbourg/) et se complète très bien avec la [publicité Google Ads](/agence-sea/) pour des résultats à court terme, ou avec le [référencement GEO](/referencement-ia-geo/) pour exister dans les moteurs d'IA. Nous référençons tous types de sites, quelle que soit la technologie utilisée.",
    ],
    features: [
      "Un site visible : vos clients vous recherchent et vous trouvent sur Google",
      "Un site rentable : mieux positionné, vous recevez plus de demandes entrantes",
      "Un site reconnu : apparaître en tête est un gage de qualité",
      "Audit SEO préalable et préconisations",
      "Positionnement sur les requêtes qui comptent pour votre activité",
      "Stratégie de référencement naturel durable",
    ],
    method: null,
    relatedFormation: { url: "/formation-referencement-strasbourg/", label: "Formation SEO" },
  },
  {
    slug: "referencement-ia-geo", group: "referencement", hue: "orange", icon: "sparkles",
    name: "Référencement GEO (IA)",
    title: "Référencement GEO et IA à Strasbourg",
    tagline: "Soyez cité par ChatGPT, Perplexity, Gemini et Copilot.",
    intro: [
      "La recherche en ligne connaît une révolution majeure. Les IA génératives (ChatGPT, Perplexity, Gemini, Copilot) prennent une place centrale en proposant des réponses rédigées directement, souvent sans afficher de liste de liens.",
      "Ces IA s'appuient sur des contenus fiables, structurés et référencés : seules les sources optimisées sont citées et mises en avant. En 2026, le GEO (Generative Engine Optimization) s'impose comme une stratégie essentielle pour être visible dans ces réponses automatisées.",
      "Nous combinons le [SEO traditionnel](/referencement-strasbourg/) et des leviers avancés pour positionner votre marque comme une source incontournable, avant vos concurrents.",
    ],
    features: [
      "AEO (AI Engine Optimization) : contenus compris et cités par les IA conversationnelles",
      "GSO (Generative Search Optimization) : optimisation pour la recherche générative des moteurs classiques",
      "GEO (Generative Engine Optimization) : approche globale de tous les moteurs génératifs",
      "Une longueur d'avance pour vous positionner en leader",
      "Double expertise SEO traditionnel et IA générative",
      "Plus de crédibilité et un trafic qualifié",
    ],
    method: null,
    relatedFormation: { url: "/formation-savoir-utiliser-chat-gpt-pour-ameliorer-sa-productivite/", label: "Formation ChatGPT & IA" },
  },
  {
    slug: "audit-referencement", group: "referencement", hue: "green", icon: "line-chart",
    name: "Audit SEO",
    title: "Audit SEO à Strasbourg",
    tagline: "Identifiez les freins techniques qui bloquent votre référencement.",
    intro: [
      "L'audit SEO de votre site internet vous permet de savoir où il en est en termes de performances techniques. Un site mal optimisé, qui ne dispose pas des caractéristiques attendues par les moteurs de recherche, ne pourra pas bénéficier d'une [stratégie de référencement](/referencement-strasbourg/) efficace.",
      "Pour être sûrs que la stratégie soit efficace, nous proposons toujours un audit en amont. Il peut se faire à n'importe quelle étape de la vie de votre [site internet](/agence-web-strasbourg/) et met en évidence vos points forts comme les éléments bloquants. Vous repartez avec un rapport et un plan d'action clairs.",
    ],
    features: [
      "Un audit diagnostic : positions et requêtes de vos visiteurs",
      "Un audit de performances : test technique et fonctionnel",
      "Un audit pour vous démarquer de la concurrence",
      "Analyse : vitesse, architecture, maillage interne, redirections",
      "Vérifications : URL, mobile, balisages, robots.txt, Search Console, images",
      "Rapport remis en PDF avec les corrections à apporter",
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
      "Nos community managers pilotent le déploiement de votre marque sur les réseaux sociaux : ils construisent votre stratégie de communication, choisissent les bonnes plateformes et communiquent activement en votre nom.",
      "Les réseaux sociaux sont un vecteur essentiel de visibilité : ils renforcent votre e-réputation, votre image de marque et créent une vitrine dynamique pour vos services. Cette communication demande du temps et des compétences spécifiques : nous concevons une stratégie personnalisée et une ligne éditoriale détaillée, alimentée par des [vidéos pensées pour les réseaux](/video-reseaux-sociaux/) qui génèrent de l'engagement.",
      "Pour les dirigeants qui veulent incarner leur entreprise, le community management se prolonge naturellement avec le [personal branding](/personal-branding/).",
    ],
    features: [
      "Création de contenu pour vos réseaux sociaux",
      "Stratégie social media et ligne éditoriale claire",
      "Animation de votre communauté (fans et abonnés)",
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
      "Dynamisez votre présence digitale : bénéficiez de vidéos qualitatives pour vos réseaux sociaux, sans alourdir votre budget. La vidéo est devenue l'outil incontournable pour captiver et engager votre audience.",
      "Les vidéos attirent l'attention, suscitent des émotions, augmentent l'engagement et humanisent votre marque ; comme les algorithmes les favorisent, votre portée s'élargit naturellement. Nous concevons des packs sur mesure pour Instagram, TikTok et Facebook.",
      "Ces vidéos prennent tout leur sens lorsqu'elles sont [diffusées et animées](/community-management/) dans une vraie stratégie sociale, et se déclinent aussi en [vidéos de marque employeur](/videos-marque-employeur/).",
    ],
    features: [
      "Un RDV de co-création pour cadrer la vidéo",
      "Une demi-journée de tournage, une demi-journée de montage",
      "Une vidéo au format 9:16 (16:9 sur demande)",
      "Une vidéo teaser plus courte",
      "Des photos du produit ou service pendant le tournage",
      "Options : motion design, animation 3D, formats supplémentaires",
    ],
    method: null,
    relatedFormation: { url: "/formation-capcut/", label: "Formation CapCut & vidéo" },
  },
  {
    slug: "videos-marque-employeur", group: "social", hue: "orange", icon: "users",
    name: "Vidéos marque employeur",
    title: "Production de vidéos marque employeur à Strasbourg",
    tagline: "Des contenus qui attirent et fidélisent les meilleurs talents.",
    intro: [
      "Boostez votre marque employeur avec des contenus adaptés, captivants et professionnels. Vous disposez ainsi d'une présence en ligne plus forte et engageante auprès de vos salariés comme de vos futurs candidats.",
      "Optez pour des vidéos personnalisées afin de dynamiser votre stratégie de recrutement et de vous démarquer sur LinkedIn, Instagram, TikTok ou Facebook. Une vidéo marque employeur attire les talents, les engage dès le départ et renforce la notoriété de l'entreprise.",
      "Ces contenus complètent vos [vidéos réseaux sociaux](/video-reseaux-sociaux/) et s'intègrent à votre [stratégie de communauté](/community-management/) pour une présence cohérente.",
    ],
    features: [
      "Des vidéos qui attirent et engagent les talents",
      "Une marque employeur différenciée sur le marché du recrutement",
      "Un recrutement facilité et une notoriété renforcée",
      "Formats LinkedIn, Instagram, TikTok et Facebook",
      "Sous-titrage et déclinaisons multi-supports",
      "Une équipe dédiée et une stratégie personnalisée par secteur",
    ],
    method: [
      "Échanges autour de vos besoins et de vos enjeux",
      "Choix de la stratégie, des formats et des durées",
      "Trois idées créatives, puis conception du script",
      "Tournage",
      "Montage, retours, sous-titres et déclinaisons multi-plateformes",
    ],
    relatedFormation: { url: "/formation-marketing-rh-marque-employeur/", label: "Formation marque employeur" },
  },
  // ------------------------------------------------------ MARKETING / ACQUISITION
  {
    slug: "agence-sea", group: "acquisition", hue: "yellow", icon: "target",
    name: "Google Ads (SEA)",
    title: "Agence Google Ads à Strasbourg",
    tagline: "Des campagnes SEA pour des résultats rapides et mesurables.",
    intro: [
      "Boostez le nombre de visites sur votre site, augmentez les ventes de votre [boutique e-commerce](/creation-site-ecommerce/) et gagnez en visibilité grâce à nos campagnes SEA. Nos experts déploient et pilotent vos campagnes sur Google Search, Shopping et le réseau Display pour augmenter votre chiffre d'affaires rapidement.",
      "Le SEA et le [référencement naturel](/referencement-strasbourg/) sont deux techniques complémentaires : là où le SEO construit votre visibilité sur le long terme, Google Ads vous rend visible quasi immédiatement, sur les requêtes qui comptent, avec un ROI mesurable. Grâce à notre travail de reporting et d'analyse, nous réajustons les campagnes pour rentabiliser au mieux votre investissement.",
    ],
    features: [
      "Google Search : visibilité rapide sur vos requêtes importantes",
      "Google Shopping : accélération des ventes de votre e-commerce",
      "Google Display : plus de visites et de notoriété",
      "Pilotage et optimisation des campagnes au quotidien",
      "Reporting et analyse des performances",
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
      "Optimisez votre marketing tout au long de l'année en externalisant sa gestion stratégique et opérationnelle. Libérez-vous du besoin d'un temps plein, sans investissement en recrutement ni en formation.",
      "Diriger une PME exige une attention constante, et le marketing peut vite devenir une tâche ardue. Notre direction marketing externalisée vous permet de déléguer cette responsabilité tout en gardant le contrôle de vos décisions. Une approche souple, qui vous laisse recentrer vos ressources là où elles comptent le plus.",
      "Nous prenons en charge la gestion de vos leviers : [référencement](/referencement-strasbourg/), [publicité en ligne](/agence-sea/) et [réseaux sociaux](/community-management/). Un regard externe, une vision claire et une proposition de valeur qui vous distingue durablement.",
    ],
    features: [
      "Une gestion marketing à l'année, sans embauche",
      "Une approche souple, adaptée à vos besoins réels",
      "Un regard externe et une vision stratégique",
      "Une stratégie personnalisée et mesurable (ROI)",
      "Plus de trafic qualifié et une meilleure relation client",
      "Un cap maintenu sur une croissance durable",
    ],
    method: [
      "Analyse approfondie de votre contexte (objectifs, secteur, concurrence)",
      "Recommandation stratégique sur mesure",
      "Mise en œuvre et optimisation continue",
    ],
    relatedFormation: { url: "/formation-marketing-digital-webmarketing-strasbourg/", label: "Formation marketing digital" },
  },
  {
    slug: "personal-branding", group: "acquisition", hue: "magenta", icon: "user-round",
    name: "Personal branding",
    title: "Personal Branding à Strasbourg",
    tagline: "Votre image, notre expertise : faites-vous reconnaître.",
    intro: [
      "Dans un monde complètement connecté, votre image personnelle est votre premier outil pour marquer les esprits et vous démarquer. Le personal branding renforce votre visibilité, affine votre image professionnelle et positionne votre expertise comme une référence dans votre domaine.",
      "Votre identité professionnelle va bien au-delà d'une simple présence en ligne : elle constitue le pont entre vous et votre audience cible. Nous créons une présence cohérente et alignée sur vos valeurs, qui renforce votre crédibilité et votre attractivité.",
      "Cette présence se travaille au quotidien sur les [réseaux sociaux](/community-management/) et peut s'appuyer sur des [vidéos de marque employeur](/videos-marque-employeur/).",
    ],
    features: [
      "Une identité professionnelle forte et cohérente",
      "Une stratégie de visibilité sur mesure",
      "Une réputation en ligne maîtrisée",
      "Une crédibilité et une influence renforcées",
      "Une présence optimisée sur les réseaux sociaux",
      "Stratégie sur mesure, coaching et ateliers d'équipe",
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
