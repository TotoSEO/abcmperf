// =============================================================================
// ABCM PERFORMANCES · CATALOGUE FORMATIONS
// Source unique de vérité pour le hub /formations-strasbourg/ et les 17 fiches.
// Contenu des formations existantes restructuré depuis abcmperformances.com
// (WordPress/Flatsome). Les 3 nouvelles fiches (no-code, gamma, personal-branding)
// sont rédigées sur la même trame.
//
// RÈGLES MÉTIER :
//  - Financement : OPCO / plan de développement des compétences UNIQUEMENT.
//    Jamais de CPF (formations non éligibles CPF).
//  - Certification Qualiopi mise en avant.
//  - Présentiel à Strasbourg + Grand Est ET distanciel/visio. Intra & inter.
// =============================================================================

export const ABCM_INFO = {
  name: "ABCM Performances",
  phone: "06 33 07 28 53",
  phoneHref: "+33633072853",
  email: "info@abcmperformances.com",
  street: "20 rue des Serruriers",
  city: "Strasbourg",
  region: "Grand Est",
  postalCode: "67000",
  country: "FR",
  url: "https://abcmperformances.com",
  // Avis Google (affichés dans le hero des fiches). Modifiables ici.
  googleStars: 5,
  googleReviews: 41,
};

// Tarif d'entrée le plus bas (inter-entreprise, par personne et par jour, HT).
// Sert à calculer le « à partir de » affiché sur chaque fiche.
export const INTER_DAY_RATE = 760;

// Nombre de jours minimum lu dans le libellé de durée ("2 jours (14 h)" -> 2,
// "1 à 2 jours" -> 1). Utilisé pour le prix « à partir de ».
function minDaysFromDuree(duree) {
  const m = String(duree || "").match(/(\d+)\s*jour/i);
  return m ? parseInt(m[1], 10) : 1;
}

// Prix « à partir de » (€ HT, par personne) relevé sur chaque fiche du site
// source : on prend le TOTAL le plus bas réellement affiché (tarif de l'offre
// la moins chère x sa durée). Certaines fiches partagent le même tarif car le
// site source les facture à l'identique ; d'autres diffèrent (Canva/Adobe : inter
// sur 1 jour ; WordPress : uniquement one-to-one 990 €/jour x 5 jours).
const PRICE_FROM = {
  "formation-savoir-utiliser-chat-gpt-pour-ameliorer-sa-productivite": 760,
  "formation-booster-ses-ecrits-professionnels-avec-lia": 760,
  "formation-decouverte-de-lia": 760,
  "formation-reseaux-sociaux": 1520,
  "formation-linkedin": 1520,
  "formation-capcut": 760,
  "formation-canva": 760,
  "formation-adobe-express": 760,
  "formation-marketing-digital-webmarketing-strasbourg": 1520,
  "formation-referencement-strasbourg": 1520,
  "formation-sea": 760,
  "formation-publicite-google-ads": 1520,
  "formation-inbound-marketing": 1520,
  "formation-wordpress": 4950,
  "formation-no-code": 1520,
  "formation-gamma": 760,
  "formation-marketing-rh-marque-employeur": 1520,
  "formation-personal-branding": 1520,
};

// priceFrom explicite sur la fiche > tarif relevé > calcul de repli.
export function formationPriceFrom(f) {
  if (typeof f.priceFrom === "number") return f.priceFrom;
  if (PRICE_FROM[f.slug]) return PRICE_FROM[f.slug];
  return INTER_DAY_RATE * minDaysFromDuree(f.duree);
}

// ---- Standards partagés (réutilisés par défaut sur chaque fiche) -------------
export const STD_MODALITES =
  "Présentiel à Strasbourg (intra-entreprise) ou distanciel en visioconférence (Teams, Google Meet, Zoom). Déplacements possibles dans tout le Grand Est. Formats intra et inter-entreprise. Feuilles de présence signées par demi-journée ; évaluation par exercices pratiques et mises en situation tout au long de la formation.";

export const STD_TARIFS = [
  "Intra-entreprise : 1 990 € HT / jour (jusqu'à 8 participants)",
  "Inter-entreprise : 760 € HT / personne / jour (à partir de 4 participants)",
  "Cours particulier (one-to-one) : 990 € HT / jour",
];

export const STD_FINANCEMENT =
  "Formation éligible à une prise en charge par votre OPCO ou via le plan de développement des compétences de l'entreprise. ABCM Performances est un organisme de formation certifié Qualiopi, gage de qualité reconnu par les financeurs.";

export const STD_PREREQUIS =
  "Être à l'aise avec l'ordinateur et la navigation sur Internet. Apporter un ordinateur portable. Bon niveau de français (oral et écrit).";

export const STD_DELAI =
  "Accès à la formation sous 14 jours maximum après votre demande.";

export const STD_ACCESSIBILITE =
  "Nos formations sont ouvertes à tous les publics. En situation de handicap, contactez-nous pour adapter le déroulé et les supports à vos besoins.";

// Mention Qualiopi à reproduire EXACTEMENT telle quelle (exigence) + certificat.
export const QUALIOPI_MENTION =
  "Organisme de formation certifiée Qualiopi, au titres des catégories d'actions suivantes : Actions de formation.";
export const QUALIOPI_CERT_FILE = "certificat-qualiopi-abcm.png";
export const MODALITES_URL = "/modalites-de-la-formation/";

// Préfixe le basePath (GitHub Pages) pour un asset statique servi hors _next.
export function assetPath(file) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/${file}`;
}

// ---- Silos thématiques -------------------------------------------------------
export const SILOS = [
  { id: "ia",        emoji: "🤖", label: "IA & Productivité",              icon: "sparkles",  hue: "orange",  intro: "Mettez l'intelligence artificielle au service de votre productivité et de vos contenus." },
  { id: "social",    emoji: "📱", label: "Réseaux sociaux & Contenus",      icon: "megaphone", hue: "magenta", intro: "Animez vos réseaux, créez des contenus qui engagent et développez votre communauté." },
  { id: "marketing", emoji: "🎯", label: "Marketing digital & Acquisition", icon: "target",    hue: "blue",    intro: "Pilotez votre visibilité, vos campagnes et votre acquisition de A à Z." },
  { id: "web",       emoji: "🌐", label: "Web & Technique",                 icon: "monitor",   hue: "green",   intro: "Gagnez en autonomie sur vos outils web, sans être développeur." },
  { id: "rh",        emoji: "👥", label: "RH & Marque employeur",           icon: "users",     hue: "yellow",  intro: "Attirez, recrutez et fidélisez les talents grâce au marketing RH." },
];

// =============================================================================
// LES 17 FORMATIONS
// =============================================================================
export const FORMATIONS = [
  // ---------------------------------------------------------------- IA & Prod.
  {
    slug: "formation-savoir-utiliser-chat-gpt-pour-ameliorer-sa-productivite",
    url: "/formation-savoir-utiliser-chat-gpt-pour-ameliorer-sa-productivite/",
    silo: "ia", hue: "orange", icon: "sparkles",
    name: "Maîtriser l'IA générative (ChatGPT, Claude)",
    cardDesc: "Intégrez ChatGPT et Claude à votre quotidien pour gagner en productivité.",
    title: "Formation ChatGPT & IA générative à Strasbourg",
    metaDescription: "Formation ChatGPT et IA générative (Claude) à Strasbourg et en visio. Gagnez en productivité au quotidien. Organisme Qualiopi, financement OPCO. Intra & inter.",
    lead: "Maîtriser l'IA générative comme ChatGPT et Claude est devenu un avantage décisif. Cette formation explore les usages concrets de ces outils pour optimiser vos processus de travail et stimuler la productivité individuelle et collective.",
    objectifs: [
      "Comprendre le fonctionnement et les limites des IA génératives (ChatGPT, Claude)",
      "Rédiger des prompts efficaces pour obtenir des résultats fiables",
      "Intégrer l'IA dans ses tâches quotidiennes pour gagner en efficacité",
      "Automatiser et accélérer la rédaction et la communication écrite",
    ],
    programme: [
      { module: "Comprendre l'IA générative", points: [
        "Les bases : ChatGPT, Claude et les grands modèles de langage",
        "Ce que l'IA sait (et ne sait pas) faire : opportunités et limites",
        "Cadre de confiance : confidentialité, fiabilité, vérification" ] },
      { module: "L'art du prompt", points: [
        "Structurer une demande claire et contextualisée",
        "Techniques de prompting pour des résultats de qualité",
        "Itérer et affiner ses résultats" ] },
      { module: "Applications pratiques", points: [
        "Rédiger, résumer, reformuler et traduire",
        "Préparer réunions, comptes-rendus et e-mails",
        "Cas d'usage métier et exercices concrets" ] },
      { module: "Productivité au quotidien", points: [
        "Construire ses propres modèles de prompts réutilisables",
        "Bonnes pratiques pour ancrer l'IA dans ses routines de travail" ] },
    ],
    public: "Cadres dirigeants, responsables, consultants et tout profil souhaitant acquérir des compétences pratiques sur l'IA.",
    prerequis: STD_PREREQUIS + " Un attrait pour les nouvelles technologies.",
    duree: "1 jour (7 h)",
    faq: [
      { q: "À qui s'adresse cette formation ChatGPT ?", a: "Aux cadres, responsables, consultants et à tout professionnel souhaitant intégrer l'IA générative dans son quotidien, sans prérequis technique." },
      { q: "Quelle est la durée ?", a: "1 journée (7 heures), en présentiel à Strasbourg ou en visioconférence." },
      { q: "La formation est-elle finançable ?", a: "Oui, via votre OPCO ou le plan de développement des compétences. ABCM Performances est certifié Qualiopi." },
    ],
    related: ["formation-booster-ses-ecrits-professionnels-avec-lia", "formation-decouverte-de-lia", "formation-gamma"],
  },
  {
    slug: "formation-booster-ses-ecrits-professionnels-avec-lia",
    url: "/formation-booster-ses-ecrits-professionnels-avec-lia/",
    silo: "ia", hue: "magenta", icon: "sparkle",
    name: "Automatiser ses écrits professionnels avec l'IA",
    cardDesc: "Faites de l'IA une alliée pour vos e-mails, comptes-rendus et contenus.",
    title: "Formation écrits professionnels avec l'IA à Strasbourg",
    metaDescription: "Formation « booster ses écrits professionnels avec l'IA » à Strasbourg et en visio. E-mails, comptes-rendus, contenus. Qualiopi, financement OPCO. Intra & inter.",
    lead: "L'intelligence artificielle peut devenir une véritable alliée pour vos écrits professionnels. En une journée, apprenez à intégrer l'IA pour rédiger plus vite et mieux : e-mails, comptes-rendus, plans, procédures.",
    objectifs: [
      "Expérimenter l'usage de l'IA sur des écrits professionnels variés (e-mails, comptes-rendus, plans, procédures)",
      "Comparer plusieurs outils d'IA et choisir le bon selon le besoin",
      "Structurer une méthode de rédaction assistée par l'IA",
      "Identifier les risques (confidentialité, fiabilité) et les bonnes pratiques",
    ],
    programme: [
      { module: "Saisir les opportunités de l'IA pour ses écrits", points: [
        "Explorer les nouveaux usages de l'IA rédactionnelle",
        "Sélectionner les outils (gratuits ou payants) adaptés à ses besoins",
        "Identifier les risques et opportunités, du sourcing à l'éthique" ] },
      { module: "Rédiger des prompts efficaces", points: [
        "Analyser objectif et contexte avant de rédiger",
        "Poser les bonnes questions à l'IA",
        "Pratiquer sur des cas réels" ] },
      { module: "Écrire avec la méthode CODER", points: [
        "Collecter, Organiser, Développer, Embellir et Relire grâce à l'IA",
        "Garder sa voix et son exigence de qualité" ] },
      { module: "Mises en pratique", points: [
        "Travailler ses propres écrits professionnels avec plusieurs outils d'IA",
        "Construire ses modèles réutilisables" ] },
    ],
    public: "Toute personne souhaitant améliorer ses écrits professionnels grâce à l'intelligence artificielle.",
    prerequis: STD_PREREQUIS,
    duree: "1 jour (7 h)",
    faq: [
      { q: "Faut-il déjà savoir utiliser l'IA ?", a: "Non. La formation part des bases et vous met en pratique sur vos propres écrits, avec plusieurs outils." },
      { q: "Quels écrits sont travaillés ?", a: "E-mails, comptes-rendus, plans, procédures et tout document professionnel courant que vous apportez." },
      { q: "Comment financer la formation ?", a: "Par votre OPCO ou le plan de développement des compétences. Organisme certifié Qualiopi." },
    ],
    related: ["formation-savoir-utiliser-chat-gpt-pour-ameliorer-sa-productivite", "formation-decouverte-de-lia", "formation-canva"],
  },
  {
    slug: "formation-decouverte-de-lia",
    url: "/formation-decouverte-de-lia/",
    silo: "ia", hue: "yellow", icon: "users",
    name: "Découverte de l'IA pour les équipes",
    cardDesc: "Une introduction claire et concrète à l'IA pour toute une équipe.",
    title: "Formation découverte de l'IA pour les équipes à Strasbourg",
    metaDescription: "Formation découverte de l'IA pour les équipes à Strasbourg et en visio. Comprendre l'IA, ses outils et ses usages. Qualiopi, financement OPCO. Intra & inter.",
    lead: "L'intelligence artificielle transforme le travail. Cette formation offre à vos équipes une introduction claire et accessible à l'IA : principes, outils et applications concrètes, sans bagage technique.",
    objectifs: [
      "Comprendre les bases de l'IA et ses concepts clés",
      "Découvrir les principaux outils d'IA et leurs usages",
      "Identifier les opportunités de l'IA pour ses projets et processus",
      "Appréhender les enjeux éthiques et les limites",
    ],
    programme: [
      { module: "Comprendre l'IA", points: [
        "Qu'est-ce que l'intelligence artificielle ?",
        "Les différents types d'IA et leurs applications courantes" ] },
      { module: "Atelier : découverte des outils", points: [
        "ChatGPT : répondre, rédiger, synthétiser",
        "Génération d'images : créer des visuels avec l'IA (DALL·E)",
        "Automatisation : simplifier ses tâches répétitives (Zapier, Make)" ] },
      { module: "Applications concrètes en entreprise", points: [
        "Cas d'usage en marketing, RH et gestion de projet",
        "Identifier les opportunités d'IA dans votre domaine" ] },
      { module: "Éthique et limites", points: [
        "Enjeux éthiques et conformité",
        "Gérer les risques et maximiser les bénéfices" ] },
    ],
    public: "Équipes, professionnels curieux, entrepreneurs et indépendants souhaitant comprendre et intégrer l'IA.",
    prerequis: STD_PREREQUIS,
    duree: "1 jour (7 h)",
    faq: [
      { q: "Faut-il un bagage technique ?", a: "Aucun. La formation est pensée pour rendre l'IA accessible à toute une équipe, avec des cas d'usage concrets." },
      { q: "Peut-on la faire en intra pour toute l'équipe ?", a: "Oui, c'est le format idéal : en intra-entreprise à Strasbourg ou en visio, jusqu'à 8 participants." },
      { q: "Quel financement ?", a: "OPCO ou plan de développement des compétences. Organisme Qualiopi." },
    ],
    related: ["formation-savoir-utiliser-chat-gpt-pour-ameliorer-sa-productivite", "formation-booster-ses-ecrits-professionnels-avec-lia", "formation-gamma"],
  },

  // ------------------------------------------------ Réseaux sociaux & Contenus
  {
    slug: "formation-reseaux-sociaux",
    url: "/formation-reseaux-sociaux/",
    silo: "social", hue: "magenta", icon: "megaphone",
    name: "Stratégie réseaux sociaux & Community Management",
    cardDesc: "Bâtissez une stratégie social media et animez votre communauté.",
    title: "Formation réseaux sociaux & community management à Strasbourg",
    metaDescription: "Formation réseaux sociaux et community management à Strasbourg et en visio. Stratégie, contenus, animation de communauté. Qualiopi, financement OPCO.",
    lead: "Les modes de communication ont changé. La stratégie devient digitale et vous devez en maîtriser les rouages. Cette formation vous donne les clés pour élaborer une stratégie social media et animer votre communauté.",
    objectifs: [
      "Élaborer et mettre en place une stratégie digitale adaptée à votre entreprise",
      "Maîtriser les principaux réseaux sociaux et leurs usages",
      "Articuler réseaux sociaux, site internet et blog dans votre communication",
      "Intégrer le mobile à votre stratégie de communication digitale",
      "Animer et développer une communauté",
      "Optimiser sa visibilité sociale (SMO) et l'articuler avec le référencement",
      "Mettre en place une veille et gérer son e-réputation",
      "Mesurer ses actions",
    ],
    programme: [
      { module: "Les nouveaux usages du digital", points: [
        "Comprendre l'écosystème social media actuel",
        "Découvrir l'univers du web social professionnel" ] },
      { module: "Maîtriser les principaux réseaux", points: [
        "Facebook, LinkedIn, Instagram, X, YouTube, TikTok, Snapchat",
        "Choisir les réseaux adaptés à sa cible et ses objectifs" ] },
      { module: "Animer et développer une communauté", points: [
        "[Ligne éditoriale](/definir-sa-ligne-editoriale-sur-les-reseaux-sociaux/) et calendrier de publication",
        "Bonnes pratiques d'animation et d'engagement",
        "Trouver de nouveaux clients et prospects" ] },
      { module: "SMO : optimiser sa visibilité sociale", points: [
        "Le SMO (Social Media Optimization) : principes et objectifs",
        "Optimiser profils et contenus pour la portée et le partage",
        "Articuler SMO, SEO et [stratégie de contenu](/strategie-de-contenu-2026/) pour gagner en visibilité" ] },
      { module: "Stratégie, e-réputation & mesure", points: [
        "Définir une stratégie sur les médias sociaux",
        "Gérer son e-réputation",
        "Outils de gestion et indicateurs de performance" ] },
    ],
    public: "Tout professionnel en charge de la communication d'une entreprise, commerciaux, indépendants.",
    prerequis: STD_PREREQUIS,
    duree: "2 jours (14 h)",
    faq: [
      { q: "Quels réseaux sociaux sont abordés ?", a: "Facebook, LinkedIn, Instagram, X, YouTube, TikTok et Snapchat, avec un focus sur ceux qui correspondent à vos objectifs." },
      { q: "Abordez-vous le SMO (Social Media Optimization) ?", a: "Oui, un module est dédié au SMO : optimiser vos profils et contenus sociaux pour gagner en visibilité et en portée, en complément du référencement naturel." },
      { q: "Combien de temps dure la formation ?", a: "En général 2 journées (14 h) suffisent pour acquérir les compétences nécessaires à la gestion des réseaux sociaux." },
      { q: "Est-ce finançable par l'OPCO ?", a: "Oui. La formation est éligible à un financement OPCO ou via le plan de développement des compétences. Organisme Qualiopi." },
    ],
    related: ["formation-linkedin", "formation-capcut", "formation-canva"],
  },
  {
    slug: "formation-linkedin",
    url: "/formation-linkedin/",
    silo: "social", hue: "blue", icon: "linkedin",
    name: "LinkedIn : prospecter et développer sa marque personnelle",
    cardDesc: "Social selling, prospection et personal branding sur LinkedIn.",
    title: "Formation LinkedIn à Strasbourg : prospection & social selling",
    metaDescription: "Formation LinkedIn à Strasbourg et en visio : prospection, social selling et personal branding. Devenez visible et générez des opportunités. Qualiopi, OPCO.",
    lead: "LinkedIn est LE réseau social professionnel. Apprenez à en tirer le meilleur profit : déployez une stratégie de social selling efficace, devenez visible et menez une prospection qui booste vos ventes.",
    objectifs: [
      "Bâtir une stratégie de prospection commerciale efficace sur LinkedIn",
      "Mettre en place une démarche de social selling adaptée",
      "Définir une stratégie de présence et une ligne éditoriale claire",
      "[Animer son réseau](/developper-son-reseau-linkedin/) et sa stratégie de contenu",
    ],
    programme: [
      { module: "Pourquoi utiliser LinkedIn ?", points: [
        "Typologie des utilisateurs et motivations",
        "Enjeux de LinkedIn pour un professionnel aujourd'hui",
        "Stratégie LinkedIn vs autres réseaux sociaux" ] },
      { module: "Optimiser son profil", points: [
        "Paramétrages et interface",
        "Photo et image de couverture",
        "Compléter son profil pour être visible et efficace" ] },
      { module: "Développer et nourrir son réseau", points: [
        "Trouver et interagir avec les bons contacts",
        "Gérer ses invitations (bonnes pratiques)",
        "Utiliser les groupes et créer un réseau riche en opportunités" ] },
      { module: "Social selling & personal branding", points: [
        "Rester présent dans l'esprit de vos contacts",
        "Stratégie de publication et storytelling",
        "Développer sa visibilité et sa marque personnelle" ] },
      { module: "Optimiser sa page entreprise", points: [
        "Logo, image de couverture et administration",
        "Attirer des abonnés et animer la page",
        "Publicité sur LinkedIn" ] },
    ],
    public: "Commerciaux, recruteurs, chefs d'entreprise et indépendants.",
    prerequis: STD_PREREQUIS,
    duree: "1 à 2 jours (7 à 14 h)",
    faq: [
      { q: "La formation couvre-t-elle la prospection commerciale ?", a: "Oui, c'est un axe central : construire une démarche de social selling et de prospection pour générer des opportunités." },
      { q: "Quelle durée choisir ?", a: "De 1 à 2 jours selon vos besoins et votre niveau de départ." },
      { q: "Comment la financer ?", a: "Via l'OPCO ou le plan de développement des compétences. Organisme certifié Qualiopi." },
    ],
    related: ["formation-reseaux-sociaux", "formation-personal-branding", "formations-strasbourg/formation-inbound-marketing"],
  },
  {
    slug: "formation-capcut",
    url: "/formation-capcut/",
    silo: "social", hue: "orange", icon: "youtube",
    name: "Créer des contenus vidéo (CapCut, Reels, Shorts)",
    cardDesc: "Montez des vidéos verticales engageantes pour les réseaux sociaux.",
    title: "Formation CapCut & vidéo réseaux sociaux à Strasbourg",
    metaDescription: "Formation CapCut à Strasbourg et en visio : montez des Reels, Shorts et vidéos verticales percutantes pour les réseaux. Qualiopi, financement OPCO. Intra & inter.",
    lead: "La vidéo est incontournable. CapCut, simple et puissant, permet de produire des vidéos engageantes sans compétences techniques avancées. Apprenez à dynamiser vos contenus et votre présence en ligne.",
    objectifs: [
      "Découvrir les fonctionnalités principales de CapCut",
      "Monter des vidéos adaptées aux réseaux sociaux (Reels, Shorts, TikTok)",
      "Créer des contenus engageants et professionnels",
    ],
    programme: [
      { module: "Pourquoi utiliser CapCut ?", points: [
        "Présentation de l'interface et des outils de base",
        "Les atouts de CapCut pour la vidéo marketing" ] },
      { module: "Montage vidéo simplifié", points: [
        "Découpage et assemblage des séquences",
        "Transitions et animations dynamiques" ] },
      { module: "Personnaliser ses vidéos", points: [
        "Textes, sous-titres et stickers",
        "Filtres et effets pour sublimer ses vidéos" ] },
      { module: "Optimisation et export", points: [
        "Réglages par plateforme (Instagram, TikTok, YouTube)",
        "Maximiser l'impact des vidéos en ligne" ] },
      { module: "Atelier pratique", points: [
        "Réaliser une vidéo complète de A à Z",
        "Feedback personnalisé sur vos créations" ] },
    ],
    public: "Community managers, entrepreneurs, freelances et professionnels du marketing digital.",
    prerequis: STD_PREREQUIS,
    duree: "1 jour (7 h)",
    faq: [
      { q: "Faut-il savoir monter des vidéos ?", a: "Non. CapCut est accessible : la formation part des bases et vous fait réaliser une vidéo complète." },
      { q: "Quels formats sont travaillés ?", a: "Les formats verticaux des réseaux : Reels Instagram, Shorts YouTube et vidéos TikTok." },
      { q: "Financement possible ?", a: "Oui, OPCO ou plan de développement des compétences. Organisme Qualiopi." },
    ],
    related: ["formation-canva", "formation-adobe-express", "formation-reseaux-sociaux"],
  },
  {
    slug: "formation-canva",
    url: "/formation-canva/",
    silo: "social", hue: "green", icon: "star",
    name: "Maîtriser Canva",
    cardDesc: "Créez des visuels professionnels et impactants avec Canva.",
    title: "Formation Canva à Strasbourg : créer des visuels pro",
    metaDescription: "Formation Canva à Strasbourg et en visio : créez des visuels professionnels pour le print, les réseaux et la vidéo. Sans prérequis. Qualiopi, financement OPCO.",
    lead: "Cette formation Canva vous rend autonome pour créer des contenus visuels professionnels et impactants : interface, fonctionnalités avancées, travail collaboratif et export optimisé.",
    objectifs: [
      "Maîtriser l'interface et les fonctionnalités de base de Canva",
      "Créer et personnaliser des documents à partir de modèles",
      "Développer des compétences de création visuelle avancée",
      "Travailler en collaboration et adapter les formats à chaque support",
    ],
    programme: [
      { module: "Introduction à Canva", points: [
        "Interface, compte et personnalisation du profil",
        "Fonctionnalités de base et travail en équipe",
        "Travaux pratiques : paramétrer son espace" ] },
      { module: "Création de documents", points: [
        "Choisir et personnaliser des modèles",
        "Modifier texte, images et éléments",
        "Adapter les formats (print, réseaux, vidéo) et exporter" ] },
      { module: "Personnalisation avancée", points: [
        "Modèles, ressources et éléments animés",
        "Créer des designs originaux",
        "Travaux pratiques : un design complet" ] },
      { module: "Outils visuels & médias", points: [
        "Formes, lignes, graphiques et tableaux",
        "Importer photos, vidéos et bandes son" ] },
      { module: "Export & collaboration", points: [
        "Exporter en PDF, PNG, JPG (taille, transparence, poids)",
        "Créer et gérer une équipe, commentaires et historique" ] },
    ],
    public: "Toute personne souhaitant se développer dans le domaine de la communication.",
    prerequis: "Aucun prérequis. Apporter un ordinateur portable.",
    duree: "2 jours (14 h)",
    faq: [
      { q: "Faut-il des bases en graphisme ?", a: "Non, aucun prérequis. La formation est accessible à tous et privilégie la pratique." },
      { q: "Que saurai-je faire à la fin ?", a: "Créer en autonomie des supports de communication attractifs et adaptés à tous vos besoins (print, réseaux, vidéo)." },
      { q: "Comment financer ?", a: "OPCO ou plan de développement des compétences. Organisme certifié Qualiopi." },
    ],
    related: ["formation-adobe-express", "formation-capcut", "formation-reseaux-sociaux"],
  },
  {
    slug: "formation-adobe-express",
    url: "/formation-adobe-express/",
    silo: "social", hue: "magenta", icon: "monitor",
    name: "Maîtriser Adobe Express",
    cardDesc: "Concevez des visuels modernes et cohérents avec Adobe Express.",
    title: "Formation Adobe Express à Strasbourg",
    metaDescription: "Formation Adobe Express à Strasbourg et en visio : visuels modernes, cohérents et multi-formats. Sans prérequis. Qualiopi, financement OPCO. Intra & inter.",
    lead: "Cette formation Adobe Express vous rend autonome pour concevoir des visuels modernes et cohérents : interface intuitive, fonctionnalités avancées, collaboration et export multi-formats.",
    objectifs: [
      "Maîtriser l'interface et les fonctionnalités de base d'Adobe Express",
      "Créer et personnaliser des visuels à partir de modèles",
      "Développer des compétences de création graphique avancée",
      "Collaborer et adapter les formats (print, réseaux, présentations, vidéo)",
    ],
    programme: [
      { module: "Introduction à Adobe Express", points: [
        "Interface, compte et personnalisation du profil",
        "Fonctionnalités de base et partage en équipe",
        "Travaux pratiques : paramétrer son espace" ] },
      { module: "Création de documents", points: [
        "Choisir et personnaliser des modèles",
        "Modifier texte, images, vidéos et éléments graphiques",
        "Adapter les formats et exporter" ] },
      { module: "Personnalisation avancée", points: [
        "Modèles, bibliothèques et médias externes",
        "Designs originaux et animations",
        "Travaux pratiques : un design complet" ] },
      { module: "Outils visuels & médias", points: [
        "Formes, icônes, graphiques et grilles d'images",
        "Importer images, vidéos, logos et bandes son" ] },
      { module: "Texte, export & collaboration", points: [
        "Styles typographiques, animations et effets",
        "Export PDF, PNG, JPG, MP4 et réglages",
        "Gérer une équipe, retours et historique" ] },
    ],
    public: "Toute personne souhaitant se développer dans le domaine de la communication.",
    prerequis: "Aucun prérequis. Apporter un ordinateur portable.",
    duree: "2 jours (14 h)",
    faq: [
      { q: "Quelle différence avec la formation Canva ?", a: "Les deux outils se ressemblent ; Adobe Express s'intègre à l'écosystème Adobe. Choisissez selon vos outils ; le contenu et la pédagogie sont équivalents." },
      { q: "Y a-t-il des prérequis ?", a: "Aucun. La formation s'adresse à tous les niveaux et privilégie la pratique." },
      { q: "Financement ?", a: "OPCO ou plan de développement des compétences. Organisme Qualiopi." },
    ],
    related: ["formation-canva", "formation-capcut", "formation-reseaux-sociaux"],
  },

  // ------------------------------------------ Marketing digital & Acquisition
  {
    slug: "formation-marketing-digital-webmarketing-strasbourg",
    url: "/formation-marketing-digital-webmarketing-strasbourg/",
    silo: "marketing", hue: "blue", icon: "line-chart",
    name: "Élaborer et piloter son plan marketing digital",
    cardDesc: "Construisez une stratégie webmarketing complète et mesurable.",
    title: "Formation marketing digital & webmarketing à Strasbourg",
    metaDescription: "Formation marketing digital et webmarketing à Strasbourg et en visio : stratégie, canaux, contenus et mesure des résultats. Qualiopi, financement OPCO.",
    lead: "Dans un environnement numérique en perpétuelle évolution, maîtriser les outils et stratégies du marketing digital est essentiel. Cette formation vous apprend à élaborer et piloter un plan marketing digital efficace.",
    objectifs: [
      "Comprendre les principes et enjeux du marketing digital",
      "Développer et mettre en œuvre une stratégie efficace",
      "Utiliser les outils et plateformes pour promouvoir une marque",
      "Mesurer et analyser les résultats pour ajuster ses actions",
    ],
    programme: [
      { module: "Fondamentaux & stratégie", points: [
        "Concepts, évolutions et tendances du marketing digital",
        "Objectifs marketing et indicateurs clés (KPI)",
        "Cible, positionnement et choix des canaux" ] },
      { module: "Site web & contenus", points: [
        "Architecture, design et contenu d'un site efficace",
        "Bases du référencement naturel (SEO)",
        "Créer du contenu engageant pour le web et les réseaux" ] },
      { module: "Acquisition", points: [
        "Réseaux sociaux : profils, publication, engagement",
        "Publicité en ligne : Google Ads, Meta, LinkedIn Ads",
        "E-mail marketing : campagnes, segmentation, automatisation" ] },
      { module: "Mesure & pilotage", points: [
        "Outils d'analyse et interprétation des données",
        "E-réputation et gestion des avis",
        "Éthique, RGPD et bonnes pratiques de la donnée" ] },
    ],
    public: "Direction marketing, direction communication, toute personne en charge d'un site ou d'une activité sur Internet.",
    prerequis: STD_PREREQUIS,
    duree: "2 jours (14 h)",
    faq: [
      { q: "Quels canaux sont couverts ?", a: "Réseaux sociaux, référencement, e-mailing, publicité en ligne (Google Ads, Meta, LinkedIn), site et blog." },
      { q: "Quelle est la durée ?", a: "En général 2 journées (14 h) pour acquérir les compétences essentielles du marketing digital." },
      { q: "Financement ?", a: "OPCO ou plan de développement des compétences. Organisme certifié Qualiopi." },
    ],
    related: ["formation-referencement-strasbourg", "formation-publicite-google-ads", "formations-strasbourg/formation-inbound-marketing"],
  },
  {
    slug: "formation-referencement-strasbourg",
    url: "/formation-referencement-strasbourg/",
    silo: "marketing", hue: "green", icon: "search",
    name: "SEO : maîtriser le référencement naturel",
    cardDesc: "Positionnez durablement votre site dans les résultats naturels de Google.",
    title: "Formation référencement SEO à Strasbourg",
    metaDescription: "Formation SEO (référencement naturel) à Strasbourg et en visio : optimisez vos contenus et votre positionnement sur Google. Qualiopi, financement OPCO.",
    lead: "Une formation sur-mesure pour réussir votre référencement naturel. Comprenez et maîtrisez les principes du SEO et du positionnement d'un site dans les résultats des moteurs de recherche.",
    objectifs: [
      "Organiser l'information sur un site ou un blog",
      "Optimiser les contenus de son site",
      "Connaître les techniques de rédaction web",
      "Travailler et améliorer son référencement naturel (SEO)",
    ],
    programme: [
      { module: "Fondamentaux du référencement naturel", points: [
        "Le fonctionnement des moteurs de recherche",
        "Les piliers du SEO : technique, contenu et popularité",
        "Situer le SEO parmi les leviers de visibilité (SEA, réseaux sociaux)" ] },
      { module: "Rédiger et optimiser ses contenus", points: [
        "Recherche de mots-clés et intention de recherche",
        "Techniques de rédaction web optimisée",
        "Structurer l'information (arborescence, maillage interne)" ] },
      { module: "Optimisation SEO on-page & technique", points: [
        "Balises, titres et structure des pages",
        "Optimiser directement sur vos propres contenus",
        "Bases de l'optimisation technique" ] },
      { module: "Suivi & amélioration", points: [
        "Mesurer son positionnement et son trafic",
        "Plan d'action et amélioration continue" ] },
    ],
    public: "Rédacteurs web, responsables de publication, blogueurs, responsables et chargés de communication.",
    prerequis: STD_PREREQUIS + " Disposer d'un site web ou d'un blog.",
    duree: "2 jours (14 h), extensible à 3 jours",
    faq: [
      { q: "La formation couvre-t-elle tout le référencement naturel ?", a: "Oui. Elle est entièrement dédiée au SEO : optimisation technique, rédaction de contenus et popularité, pour progresser durablement sur Google." },
      { q: "Et le référencement payant (SEA) ?", a: "Le SEA (Google Ads et liens sponsorisés) fait l'objet d'une formation dédiée. Celle-ci se concentre sur le référencement naturel." },
      { q: "Travaille-t-on sur mon propre site ?", a: "Oui, l'optimisation se fait directement sur vos contenus. Une journée supplémentaire peut être ajoutée pour couvrir tout votre site." },
      { q: "Financement OPCO ?", a: "Oui, ou via le plan de développement des compétences. Organisme Qualiopi." },
    ],
    related: ["formation-sea", "formation-marketing-digital-webmarketing-strasbourg", "formation-wordpress"],
  },
  {
    slug: "formation-sea",
    url: "/formation-sea/",
    silo: "marketing", hue: "orange", icon: "line-chart",
    name: "SEA : piloter son référencement payant",
    cardDesc: "Lancez des campagnes de référencement payant rentables et mesurées.",
    title: "Formation SEA & référencement payant à Strasbourg",
    metaDescription: "Formation SEA (référencement payant) à Strasbourg et en visio : stratégie d'enchères, Google Ads, Microsoft Ads et pilotage du ROI. Qualiopi, financement OPCO.",
    lead: "Le SEA, ou référencement payant, permet d'acheter une visibilité immédiate en haut des résultats de recherche. Cette formation vous apprend à bâtir, lancer et piloter des campagnes rentables, en complément de votre référencement naturel.",
    objectifs: [
      "Comprendre le SEA et sa complémentarité avec le SEO",
      "Construire une stratégie d'enchères et de mots-clés",
      "Lancer des campagnes sur Google Ads et Microsoft Ads",
      "Mesurer et optimiser le retour sur investissement (ROI)",
    ],
    programme: [
      { module: "Comprendre le référencement payant", points: [
        "SEA, SEO, SMO : situer le payant dans une stratégie de visibilité",
        "Le fonctionnement des enchères et du Quality Score",
        "Panorama des régies : Google Ads, Microsoft Ads, Shopping" ] },
      { module: "Préparer sa stratégie SEA", points: [
        "Objectifs, audiences et parcours de conversion",
        "Recherche de mots-clés et intention de recherche",
        "Budget, structure de compte et plan de campagne" ] },
      { module: "Créer et lancer ses campagnes", points: [
        "Paramétrer une campagne Search étape par étape",
        "Rédiger des annonces et des extensions efficaces",
        "Landing pages, suivi des conversions et tracking" ] },
      { module: "Piloter et optimiser", points: [
        "Lire ses indicateurs et ses tableaux de bord",
        "Optimiser enchères, ciblage et messages",
        "Tests A/B et amélioration continue du ROI" ] },
    ],
    public: "Responsables marketing, e-commerce et communication, indépendants et chefs d'entreprise souhaitant lancer leurs campagnes payantes.",
    prerequis: STD_PREREQUIS,
    duree: "1 jour (7 h)",
    faq: [
      { q: "Quelle différence avec la formation Google Ads ?", a: "Cette formation SEA pose la stratégie d'ensemble du référencement payant (enchères, plateformes, ROI). La formation Google Ads va plus loin dans la pratique de la régie Google, sur 2 jours." },
      { q: "Le SEA remplace-t-il le SEO ?", a: "Non, les deux sont complémentaires : le SEA apporte une visibilité immédiate, le SEO une visibilité durable. L'idéal est de combiner les deux." },
      { q: "Comment financer la formation ?", a: "Via votre OPCO ou le plan de développement des compétences. Organisme certifié Qualiopi." },
    ],
    related: ["formation-publicite-google-ads", "formation-referencement-strasbourg", "formation-marketing-digital-webmarketing-strasbourg"],
  },
  {
    slug: "formation-publicite-google-ads",
    url: "/formation-publicite-google-ads/",
    silo: "marketing", hue: "yellow", icon: "target",
    name: "Google Ads : stratégie et optimisation",
    cardDesc: "Créez et optimisez des campagnes Google Ads rentables.",
    title: "Formation Google Ads à Strasbourg",
    metaDescription: "Formation Google Ads à Strasbourg et en visio : créez, pilotez et optimisez vos campagnes Search, Display et remarketing. ROI mesuré. Qualiopi, financement OPCO.",
    lead: "Google est le moteur de recherche par excellence. Cette formation vous apprend toutes les ficelles de Google Ads pour générer un maximum de trafic ciblé, et donc de ventes.",
    objectifs: [
      "Réussir ses campagnes Google Ads",
      "Comprendre les objectifs des réseaux Search et Display",
      "Assurer le suivi et l'optimisation des campagnes",
      "Générer du trafic ciblé et mesurer le ROI",
    ],
    programme: [
      { module: "Les liens sponsorisés", points: [
        "Enjeux : rentabilité, fraude au clic, cadre légal",
        "Réseaux et formats publicitaires (Google Ads, Microsoft Ads / Bing)",
        "Campagnes cross-device : desktop, mobile et tablette",
        "Enchères, Quality Score et interface Google Ads" ] },
      { module: "Définir sa stratégie de campagne", points: [
        "Objectifs (vente, trafic) et plan média",
        "Période de diffusion et ciblage",
        "Budget, stratégie d'enchères et complémentarité avec le SEO" ] },
      { module: "Créer une campagne", points: [
        "Paramétrage, mots-clés et ciblage",
        "Rédaction des annonces et extensions",
        "Landing pages, tracking et campagnes mobiles" ] },
      { module: "Display, remarketing & optimisation", points: [
        "Campagnes Display, YouTube et remarketing",
        "Tableaux de bord et choix des KPI",
        "Actions correctives et tests A/B" ] },
    ],
    public: "Responsables marketing, e-commerce, communication, chefs de produit, chargés de communication, webmasters.",
    prerequis: STD_PREREQUIS,
    duree: "2 jours (14 h)",
    faq: [
      { q: "Faut-il déjà connaître Google Ads ?", a: "Non. La formation part des fondamentaux jusqu'à l'optimisation avancée des campagnes." },
      { q: "Aborde-t-on le Display et le remarketing ?", a: "Oui : Search, Display, YouTube et remarketing, avec suivi des KPI et tests A/B." },
      { q: "Financement ?", a: "OPCO ou plan de développement des compétences. Organisme certifié Qualiopi." },
    ],
    related: ["formation-marketing-digital-webmarketing-strasbourg", "formation-referencement-strasbourg", "formations-strasbourg/formation-inbound-marketing"],
  },
  {
    slug: "formation-inbound-marketing",
    url: "/formations-strasbourg/formation-inbound-marketing/",
    silo: "marketing", hue: "orange", icon: "user-round",
    name: "Inbound Marketing & Social Selling",
    cardDesc: "Attirez, convertissez et fidélisez grâce au contenu.",
    title: "Formation Inbound Marketing à Strasbourg",
    metaDescription: "Formation Inbound Marketing & social selling à Strasbourg et en visio : attirez, convertissez et fidélisez grâce au contenu. Qualiopi, financement OPCO.",
    lead: "Pour profiter de toutes les opportunités d'Internet, vous devez captiver vos prospects avec du contenu utile et engageant, pour les convertir en clients. L'Inbound Marketing vous accompagne dans cette démarche.",
    objectifs: [
      "Comprendre le principe d'une démarche Inbound Marketing",
      "Mettre en place une stratégie de communication digitale efficace",
      "Élaborer une stratégie de contenu de marque pertinente et engageante",
    ],
    programme: [
      { module: "Stratégie de communication digitale", points: [
        "Élaborer sa stratégie de communication digitale",
        "Panorama des réseaux et médias sociaux" ] },
      { module: "Contenus & diffusion", points: [
        "Choisir et diffuser les bons contenus",
        "Adapter ses contenus à chaque réseau" ] },
      { module: "Démarche Inbound", points: [
        "Attirer, convertir et fidéliser",
        "Stratégie d'Inbound Marketing de bout en bout" ] },
      { module: "Opportunités publicitaires", points: [
        "Identifier les opportunités publicitaires",
        "Articuler Inbound et acquisition payante" ] },
    ],
    public: "Responsables marketing et communication digitale, community managers.",
    prerequis: STD_PREREQUIS,
    duree: "2 jours (14 h)",
    faq: [
      { q: "Qu'est-ce que l'Inbound Marketing ?", a: "Une approche qui attire les prospects grâce à du contenu utile plutôt que par la publicité intrusive, pour les convertir et les fidéliser." },
      { q: "Pour qui ?", a: "Responsables marketing/communication digitale et community managers souhaitant structurer leur stratégie de contenu." },
      { q: "Financement ?", a: "OPCO ou plan de développement des compétences. Organisme Qualiopi." },
    ],
    related: ["formation-marketing-digital-webmarketing-strasbourg", "formation-reseaux-sociaux", "formation-linkedin"],
  },

  // ------------------------------------------------------------ Web & Technique
  {
    slug: "formation-wordpress",
    url: "/formation-wordpress/",
    silo: "web", hue: "blue", icon: "monitor",
    name: "Créer et gérer son site WordPress",
    cardDesc: "Devenez autonome pour créer et administrer un site WordPress.",
    title: "Formation WordPress à Strasbourg",
    metaDescription: "Formation WordPress à Strasbourg et en visio : créez, administrez et optimisez votre site, sans être développeur. 5 jours. Qualiopi, financement OPCO.",
    lead: "Pas besoin d'être développeur : WordPress est la solution intuitive pour créer et gérer votre site. Cette formation complète vous rend autonome, de l'installation à la mise en ligne et au référencement.",
    objectifs: [
      "Appréhender les concepts de WordPress",
      "Installer, configurer et héberger un site",
      "Choisir, installer et personnaliser un thème",
      "Maîtriser le back-office et le paramétrage du CMS",
      "Optimiser son site et ses contenus pour le SEO",
    ],
    programme: [
      { module: "Introduction & environnement", points: [
        "Pourquoi choisir WordPress ? CMS : définition et intérêts",
        "Caractéristiques et fonctionnement de WordPress",
        "Environnement technique : client/serveur, langages, protocoles" ] },
      { module: "Installation & administration", points: [
        "Installer WordPress sur un serveur en HTTPS",
        "Découvrir l'administration et les premiers réglages",
        "Gérer pages, articles, catégories, étiquettes et utilisateurs" ] },
      { module: "Contenus & apparence", points: [
        "L'éditeur, la gestion des médias et des images",
        "Menus et widgets",
        "Installer et configurer son thème" ] },
      { module: "Extensions indispensables", points: [
        "Installer et gérer les extensions",
        "Formulaires de contact et référencement (Yoast SEO)",
        "Initiation aux builders (Elementor, Divi…)" ] },
      { module: "Sécurité, RGPD & mise en ligne", points: [
        "Sauvegardes, mises à jour et sécurité",
        "Performances, obligations légales et RGPD",
        "Vérifications avant la mise en ligne" ] },
      { module: "Faire vivre son site", points: [
        "Indexation et mesure d'audience",
        "Blog, newsletter et réseaux sociaux" ] },
    ],
    public: "Chefs d'entreprise, communicants, webmasters et webdesigners.",
    prerequis: STD_PREREQUIS + " Connaître les bases des technologies web.",
    duree: "5 jours (35 h)",
    faq: [
      { q: "Faut-il savoir coder ?", a: "Non. WordPress s'adresse à tous les profils ; la formation vous rend autonome sans développement." },
      { q: "Pourquoi 5 jours ?", a: "En général 5 journées (35 h) sont nécessaires pour utiliser WordPress efficacement et personnaliser votre site dans le détail." },
      { q: "Financement ?", a: "OPCO ou plan de développement des compétences. Organisme certifié Qualiopi." },
    ],
    related: ["formation-no-code", "formation-referencement-strasbourg", "formation-gamma"],
  },
  {
    slug: "formation-no-code",
    url: "/formation-no-code/",
    silo: "web", hue: "green", icon: "star",
    name: "Notions No Code pour non-développeurs",
    cardDesc: "Créez sites, applis et automatisations sans écrire de code.",
    title: "Formation No Code à Strasbourg (non-développeurs)",
    metaDescription: "Formation No Code à Strasbourg et en visio : créez sites, applications et automatisations sans coder (Webflow, Bubble, Airtable, automatisation). Qualiopi, OPCO.",
    lead: "Le No Code permet de créer des sites, des applications et des automatisations sans écrire une ligne de code. Cette formation vous donne les repères pour concrétiser vos projets digitaux en toute autonomie.",
    objectifs: [
      "Comprendre l'écosystème No Code et ses cas d'usage",
      "Choisir le bon outil selon son projet",
      "Créer un premier site ou une première application No Code",
      "Automatiser des tâches et connecter ses outils entre eux",
    ],
    programme: [
      { module: "Comprendre le No Code", points: [
        "Qu'est-ce que le No Code / Low Code ?",
        "Panorama des outils et de leurs usages",
        "Opportunités, limites et bonnes pratiques" ] },
      { module: "Créer un site sans code", points: [
        "Construire des pages avec un éditeur visuel",
        "Structure, contenu et mise en ligne",
        "Responsive et bonnes pratiques de base" ] },
      { module: "Bases de données & applications", points: [
        "Modéliser ses données (type Airtable)",
        "Créer une application simple",
        "Formulaires et collecte de données" ] },
      { module: "Automatisation & connexions", points: [
        "Connecter ses outils (type Zapier / Make)",
        "Automatiser des tâches répétitives",
        "Cas d'usage métier concrets" ] },
    ],
    public: "Entrepreneurs, indépendants, équipes marketing/communication et tout profil non-technique souhaitant créer en autonomie.",
    prerequis: STD_PREREQUIS,
    duree: "2 jours (14 h)",
    faq: [
      { q: "Faut-il savoir programmer ?", a: "Non, c'est tout l'intérêt du No Code : créer des sites, applications et automatisations sans écrire de code." },
      { q: "Quels outils sont abordés ?", a: "Un panorama des principaux outils No Code (création de sites, bases de données, automatisation), avec une mise en pratique." },
      { q: "Financement ?", a: "OPCO ou plan de développement des compétences. Organisme certifié Qualiopi." },
    ],
    related: ["formation-wordpress", "formation-gamma", "formation-marketing-digital-webmarketing-strasbourg"],
  },
  {
    slug: "formation-gamma",
    url: "/formation-gamma/",
    silo: "web", hue: "orange", icon: "sparkles",
    name: "Formation Gamma",
    cardDesc: "Créez présentations, documents et pages web assistés par l'IA.",
    title: "Formation Gamma (présentations IA) à Strasbourg",
    metaDescription: "Formation Gamma à Strasbourg et en visio : créez des présentations, documents et pages web percutants grâce à l'IA. Qualiopi, financement OPCO. Intra & inter.",
    lead: "Gamma réinvente la création de présentations, documents et pages web grâce à l'IA. Cette formation vous apprend à produire des supports élégants et percutants en une fraction du temps habituel.",
    objectifs: [
      "Découvrir Gamma et la création de supports assistée par l'IA",
      "Générer présentations, documents et pages web",
      "Personnaliser le design et garder une identité cohérente",
      "Partager, exporter et collaborer sur ses créations",
    ],
    programme: [
      { module: "Découvrir Gamma", points: [
        "Présentation de l'outil et de ses usages",
        "L'IA au service de la mise en forme",
        "Premiers pas et interface" ] },
      { module: "Créer avec l'IA", points: [
        "Générer une présentation à partir d'un prompt",
        "Construire documents et pages web",
        "Itérer et affiner le contenu" ] },
      { module: "Design & identité", points: [
        "Thèmes, styles et personnalisation",
        "Intégrer images, médias et données",
        "Garder une cohérence de marque" ] },
      { module: "Partage & collaboration", points: [
        "Exporter (PDF, web) et partager",
        "Collaborer et suivre les modifications",
        "Bonnes pratiques de présentation" ] },
    ],
    public: "Entrepreneurs, indépendants, formateurs, équipes marketing/communication et tout profil amené à présenter.",
    prerequis: STD_PREREQUIS,
    duree: "1 jour (7 h)",
    faq: [
      { q: "Qu'est-ce que Gamma ?", a: "Un outil de création assistée par l'IA pour produire rapidement des présentations, documents et pages web au design soigné." },
      { q: "Faut-il des compétences en design ?", a: "Non. Gamma et l'IA prennent en charge la mise en forme ; vous vous concentrez sur le message." },
      { q: "Financement ?", a: "OPCO ou plan de développement des compétences. Organisme Qualiopi." },
    ],
    related: ["formation-savoir-utiliser-chat-gpt-pour-ameliorer-sa-productivite", "formation-no-code", "formation-canva"],
  },

  // ------------------------------------------------------ RH & Marque employeur
  {
    slug: "formation-marketing-rh-marque-employeur",
    url: "/formation-marketing-rh-marque-employeur/",
    silo: "rh", hue: "magenta", icon: "users",
    name: "Marque employeur & Marketing RH",
    cardDesc: "Attirez, recrutez et fidélisez les talents à l'ère du digital.",
    title: "Formation marque employeur & marketing RH à Strasbourg",
    metaDescription: "Formation marque employeur et marketing RH à Strasbourg et en visio : attirez, recrutez et fidélisez les talents avec les outils digitaux. Qualiopi, OPCO.",
    lead: "À l'ère de la digitalisation, les RH doivent communiquer efficacement, développer une marque employeur forte et attirer les talents. Cette formation intègre la communication et le marketing digital à la fonction RH.",
    objectifs: [
      "Mettre en place des outils et méthodes RH à l'ère du digital pour fidéliser les talents",
      "Créer une marque employeur pour attirer, recruter, intégrer et fidéliser",
      "Intégrer la communication et le marketing digital dans la fonction RH",
      "Mettre en place une politique de recrutement active",
    ],
    programme: [
      { module: "Communication & marketing RH", points: [
        "Définir la communication et le marketing RH à l'ère du digital",
        "Comprendre les nouveaux enjeux de la fonction RH" ] },
      { module: "Marque employeur", points: [
        "Développer une marque employeur forte, digitale et attractive",
        "Construire et incarner sa promesse employeur" ] },
      { module: "Fidélisation des talents", points: [
        "Pourquoi et comment fidéliser ses salariés",
        "Expérience collaborateur et engagement" ] },
      { module: "Déploiement & recrutement", points: [
        "Déployer le plan de communication de la marque employeur",
        "Politique de recrutement active et canaux digitaux",
        "Formation et développement des compétences" ] },
    ],
    public: "DRH, RRH, responsables GPEC, relations sociales, talent managers, responsables formation.",
    prerequis: STD_PREREQUIS + " Occuper une fonction RH.",
    duree: "2 jours (14 h)",
    faq: [
      { q: "À qui s'adresse cette formation ?", a: "Aux professionnels RH (DRH, RRH, talent managers, responsables formation) souhaitant intégrer le marketing digital à leur fonction." },
      { q: "Qu'est-ce que la marque employeur ?", a: "L'image et la promesse d'une entreprise en tant qu'employeur, qui permet d'attirer, recruter et fidéliser les meilleurs talents." },
      { q: "Financement ?", a: "OPCO ou plan de développement des compétences. Organisme certifié Qualiopi." },
    ],
    related: ["formation-personal-branding", "formation-linkedin", "formation-reseaux-sociaux"],
  },
  {
    slug: "formation-personal-branding",
    url: "/formation-personal-branding/",
    silo: "rh", hue: "blue", icon: "user-round",
    name: "Stratégie de personal branding",
    cardDesc: "Construisez et diffusez une image professionnelle qui vous ressemble.",
    title: "Formation personal branding à Strasbourg",
    metaDescription: "Formation personal branding à Strasbourg et en visio : construisez votre image professionnelle, votre positionnement et votre présence en ligne. Qualiopi, OPCO.",
    lead: "Votre image professionnelle est un actif. Cette formation vous aide à définir votre positionnement, à construire une marque personnelle cohérente et à la diffuser pour gagner en visibilité et en opportunités.",
    objectifs: [
      "Définir son positionnement et sa proposition de valeur",
      "Construire une marque personnelle cohérente et authentique",
      "Élaborer une ligne éditoriale et une stratégie de contenu",
      "Diffuser et animer sa présence en ligne (LinkedIn et au-delà)",
    ],
    programme: [
      { module: "Les fondations du personal branding", points: [
        "Qu'est-ce que le personal branding et pourquoi s'en soucier",
        "Identifier ses forces, ses valeurs et sa cible",
        "Définir son positionnement et sa proposition de valeur" ] },
      { module: "Construire sa marque", points: [
        "Identité, ton et storytelling personnel",
        "Cohérence entre image, discours et supports",
        "Soigner ses points de contact (profil, bio, visuels)" ] },
      { module: "Stratégie de contenu", points: [
        "Définir une ligne éditoriale",
        "Formats et calendrier de publication",
        "Créer des contenus qui démontrent son expertise" ] },
      { module: "Diffuser & animer", points: [
        "Développer sa visibilité sur LinkedIn et les réseaux pertinents",
        "Animer son réseau et créer des opportunités",
        "Mesurer et ajuster sa stratégie" ] },
    ],
    public: "Dirigeants, indépendants, créateurs, professionnels en quête de visibilité et collaborateurs ambassadeurs.",
    prerequis: STD_PREREQUIS,
    duree: "2 jours (14 h)",
    faq: [
      { q: "Le personal branding, c'est se mettre en avant à tout prix ?", a: "Non. Il s'agit de rendre visible une expertise réelle de façon authentique et cohérente, au service de vos objectifs." },
      { q: "Le lien avec LinkedIn ?", a: "LinkedIn est un canal clé du personal branding professionnel ; la formation y consacre une partie pratique." },
      { q: "Financement ?", a: "OPCO ou plan de développement des compétences. Organisme certifié Qualiopi." },
    ],
    related: ["formation-marketing-rh-marque-employeur", "formation-linkedin", "formation-reseaux-sociaux"],
  },
];

// ---- Helpers ----------------------------------------------------------------
export function getFormation(slug) {
  return FORMATIONS.find((f) => f.slug === slug);
}

// Slugs des fiches servies à la racine via app/[slug]/page.jsx
// (la fiche inbound est imbriquée sous /formations-strasbourg/ et a sa propre route).
export function rootFormationSlugs() {
  return FORMATIONS.filter((f) => f.url === `/${f.slug}/`).map((f) => f.slug);
}

export function formationsBySilo() {
  return SILOS.map((silo) => ({
    silo,
    items: FORMATIONS.filter((f) => f.silo === silo.id),
  }));
}

export function getSilo(id) {
  return SILOS.find((s) => s.id === id);
}

export function relatedFor(formation) {
  return (formation.related || [])
    .map((slug) => FORMATIONS.find((f) => f.slug === slug || f.url === `/${slug}/`))
    .filter(Boolean);
}

export const HUB_URL = "/formations-strasbourg/";

// Métadonnées Next.js dérivées d'une fiche (le template "%s | ABCM Performances"
// est appliqué par app/layout.jsx).
// Titres SEO concis et DISTINCTS du H1 (le H1 reste f.title). Le template
// "%s | ABCM" est ajouté par le layout ; chaque <title> rendu fait < 62 car.
const SEO_TITLES = {
  "formation-savoir-utiliser-chat-gpt-pour-ameliorer-sa-productivite": "Formation ChatGPT à Strasbourg & en visio",
  "formation-booster-ses-ecrits-professionnels-avec-lia": "Formation rédaction avec l'IA à Strasbourg",
  "formation-decouverte-de-lia": "Formation découverte de l'IA à Strasbourg",
  "formation-reseaux-sociaux": "Formation réseaux sociaux à Strasbourg & visio",
  "formation-linkedin": "Formation LinkedIn à Strasbourg & en visio",
  "formation-capcut": "Formation CapCut à Strasbourg & en visio",
  "formation-canva": "Formation Canva à Strasbourg & en visio",
  "formation-adobe-express": "Formation Adobe Express à Strasbourg & visio",
  "formation-marketing-digital-webmarketing-strasbourg": "Formation marketing digital à Strasbourg",
  "formation-referencement-strasbourg": "Formation SEO à Strasbourg & en visio",
  "formation-sea": "Formation SEA à Strasbourg & en visio",
  "formation-publicite-google-ads": "Formation Google Ads à Strasbourg & visio",
  "formation-inbound-marketing": "Formation inbound & social selling à Strasbourg",
  "formation-wordpress": "Formation WordPress à Strasbourg & en visio",
  "formation-no-code": "Formation No Code à Strasbourg & en visio",
  "formation-gamma": "Formation Gamma à Strasbourg & en visio",
  "formation-marketing-rh-marque-employeur": "Formation marque employeur à Strasbourg",
  "formation-personal-branding": "Formation personal branding à Strasbourg & visio",
};

export function formationMetadata(slug) {
  const f = getFormation(slug);
  if (!f) return {};
  return {
    title: SEO_TITLES[f.slug] || f.title,
    description: f.metaDescription,
    keywords: [f.name, f.title, "formation Strasbourg", "Qualiopi", "OPCO"],
    alternates: { canonical: f.url },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: "ABCM Performances",
      title: `${f.title} | ABCM Performances`,
      description: f.metaDescription,
      url: f.url,
    },
  };
}
