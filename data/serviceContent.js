// Contenu des fiches service repris FIDÈLEMENT des pages live de
// abcmperformances.com (texte réel, nettoyé des emojis décoratifs, des avis
// Google et des galeries de réalisations). Quelques liens internes naturels
// sont posés sur des expressions déjà présentes dans le texte.
// Structure : { [slug]: { sections: [ { h2, blocks: [...] } ] } }
// Blocs : p, h3, ul, ol, table, columns, callout (cf. RichContent.jsx).

export const SERVICE_CONTENT = {
  "agence-web-strasbourg": {
    sections: [
      { h2: "Visibilité sur le web et les réseaux sociaux", blocks: [
        { type: "p", text: "Depuis 2015, ABCM Performances accompagne les entreprises en tant qu'agence web basée à Strasbourg, spécialisée dans la création de sites internet, le référencement SEO, la gestion des réseaux sociaux et la publicité en ligne." },
        { type: "p", text: "Nos expertises pour développer votre présence sur le web :" },
        { type: "ul", items: [
          "Création de sites internet sur mesure (WordPress, WooCommerce, Next.js…)",
          "[Référencement naturel (SEO)](/referencement-strasbourg/) pour améliorer votre position sur Google",
          "Campagnes [Google Ads](/agence-sea/) pour générer du trafic qualifié",
          "[Gestion des réseaux sociaux](/community-management/) : contenu, animation, stratégie",
          "Publicité sur les réseaux sociaux (Meta, LinkedIn, TikTok…)",
          "Formations et accompagnement stratégique en marketing digital",
        ] },
      ] },
      { h2: "Pourquoi faire appel à notre agence web à Strasbourg ?", blocks: [
        { type: "p", text: "Vous cherchez une agence web à Strasbourg pour créer ou refondre votre site internet ? Chez ABCM Performances, nous concevons des sites web sur mesure qui allient design, performance et référencement. Que vous ayez besoin d'un site vitrine ou d'une [boutique e-commerce](/creation-site-ecommerce/), notre équipe vous accompagne à chaque étape." },
        { type: "p", text: "Notre mission : faire de votre site un **véritable levier de croissance**. Nous créons des sites qui :" },
        { type: "ul", items: [
          "Renforcent votre image de marque",
          "Attirent un trafic qualifié grâce au SEO",
          "Convertissent vos visiteurs en clients",
          "Respectent les dernières normes UX, RGPD et sécurité",
        ] },
        { type: "p", text: "En plus du [référencement naturel (SEO)](/referencement-strasbourg/), nous intégrons une stratégie d'AEO (Answer Engine Optimization) pour maximiser votre présence dans les moteurs de recherche et dans les réponses générées par l'IA (comme ChatGPT ou Google SGE). Nous vous aidons à être trouvés, compris et choisis." },
      ] },
      { h2: "Pourquoi travailler avec nous ?", blocks: [
        { type: "p", text: "Un site web performant pour booster votre activité. Chez ABCM, nous concevons des sites web modernes, rapides et optimisés pour votre réussite. Pour cela, nous combinons les meilleures technologies du marché :" },
        { type: "ul", items: [
          "**WordPress** : un CMS fiable et polyvalent, idéal pour les sites vitrines, blogs et plateformes sur mesure, avec une grande facilité de gestion au quotidien.",
          "**Elementor** : un éditeur visuel intuitif pour concevoir des pages élégantes et responsives sans coder.",
          "**WooCommerce** : une solution e-commerce robuste et modulable pour gérer vos produits, vos ventes et vos paiements en toute sécurité.",
          "**Payload CMS & Next.js** : pour les projets sur mesure et ultra performants, un CMS headless moderne couplé au framework JavaScript de référence, pour des sites rapides, SEO-friendly et évolutifs.",
        ] },
        { type: "p", text: "En associant ces outils puissants, nous vous garantissons un site web qui allie design, performance et efficacité commerciale." },
      ] },
    ],
  },

  "creation-site-ecommerce": {
    sections: [
      { h2: "Un site e-commerce sur-mesure", blocks: [
        { type: "p", text: "Faites confiance à l'agence web ABCM Performances pour créer un site marchand efficace et rentable. Votre boutique en ligne est belle, bien positionnée sur les moteurs de recherche et **convertit vos visiteurs en acheteurs**. Notre expertise repose autant sur la qualité du site que sur les conseils et l'accompagnement pour booster vos ventes." },
        { type: "p", text: "Internet représente une mine d'opportunités pour qui sait les saisir. Si vous voulez gagner des clients et écouler votre stock, votre boutique doit être optimisée pour la vente et la facilité d'utilisation. Notre équipe construit avec vous le site qui répond à vos objectifs commerciaux : responsive et adapté à tous les supports (tablette, mobile, desktop), mais aussi performant et conforme aux attentes de Google en matière de [référencement naturel (SEO)](/referencement-strasbourg/)." },
      ] },
      { h2: "Une maquette graphique pensée pour convertir", blocks: [
        { type: "p", text: "Nos web designers préparent et réalisent une maquette graphique selon vos besoins stratégiques et vos envies. L'ergonomie, le choix du menu, l'arborescence, la fluidité de navigation et le design adapté à tous les supports (tablette, mobile) sont étudiés et définis en amont." },
        { type: "p", text: "La charte graphique de votre site internet est soigneusement étudiée pour garantir votre succès sur le web. Une fois la boutique en ligne, nous pouvons en assurer la [maintenance et l'hébergement](/maintenance-site-web/)." },
      ] },
    ],
  },

  "maintenance-site-web": {
    sections: [
      { h2: "Mises à jour : gardez l'esprit tranquille", blocks: [
        { type: "p", text: "Avoir un site internet, c'est génial. Mais un site qui n'est pas régulièrement mis à jour est dangereux. Vous n'avez peut-être pas le temps ou les compétences nécessaires pour le mettre à jour ? Ça tombe bien : notre agence web s'occupe de tout pour vous." },
        { type: "p", text: "Sauvegardes et petites maintenances : confiez-nous votre site internet pour plus de sérénité. Nous proposons également un service d'hébergement dédié et sécurisé à nos clients." },
      ] },
      { h2: "Un service de maintenance sur-mesure", blocks: [
        { type: "p", text: "Internet va vite. Une fois votre [site web](/agence-web-strasbourg/) développé et mis en ligne, il ne faut que quelques jours pour que les premières mises à jour pointent le bout de leur nez, principalement sur WordPress où les communautés font constamment évoluer les extensions et les plugins. C'est une bonne chose : votre site évolue dans le bon sens." },
        { type: "p", text: "Les thèmes évoluent également et doivent être mis à jour régulièrement. Si ces mises à jour ne sont pas faites souvent ou correctement, cela peut vite devenir un casse-tête, jusqu'à voir votre site sauter. Nous avons donc développé un service de maintenance sur-mesure, adapté aux besoins de votre site. Principalement avec WordPress, mais nous intervenons également sous PrestaShop et Drupal." },
      ] },
    ],
  },

  "referencement-strasbourg": {
    sections: [
      { h2: "Votre visibilité sur Google", blocks: [
        { type: "p", text: "Nos experts du référencement naturel (SEO) se chargent de positionner votre site internet dans les pages de résultats de Google. Votre visibilité sur les requêtes stratégiques est améliorée et votre chiffre d'affaires augmente. Grâce à une stratégie de référencement SEO solide, nous vous aidons à trouver de nouveaux clients et à booster vos demandes entrantes et vos ventes." },
      ] },
      { h2: "Comment référencer naturellement votre activité sur le web ?", blocks: [
        { type: "p", text: "Le positionnement de votre site dans les pages de résultats (SERP) des moteurs de recherche garantit votre visibilité sur le web. Les utilisateurs soumettent des requêtes à Google, et si votre site n'est pas correctement positionné, il est invisible. Notre équipe vous aide à faire progresser le positionnement de votre site sur un certain nombre de requêtes importantes : c'est ce qu'on appelle une stratégie de référencement SEO." },
        { type: "p", text: "Résultat : vous apparaissez dans les premiers résultats de recherche et augmentez vos demandes entrantes, donc votre chiffre d'affaires et vos ventes. C'est un investissement pérenne sur le long terme, Google étant le lieu où vous devez être présent pour vos cibles. En amont, un [audit SEO](/audit-referencement/) permet de vérifier les fondations techniques de votre site." },
      ] },
    ],
  },

  "referencement-ia-geo": {
    sections: [
      { h2: "Optimisation AEO + GSO + GEO", blocks: [
        { type: "p", text: "La recherche en ligne connaît une **révolution majeure**. Les moteurs de recherche classiques ([SEO](/referencement-strasbourg/)) ne sont plus les seuls à générer du trafic : les IA génératives (ChatGPT, Perplexity, Gemini, Copilot…) prennent désormais une place centrale en proposant des réponses rédigées directement, souvent sans afficher de liste de liens." },
        { type: "p", text: "Ces IA s'appuient sur des contenus fiables, structurés et référencés pour générer leurs réponses, et seules les sources optimisées sont citées et mises en avant. Notre équipe vous accompagne pour accroître votre visibilité dans les IA." },
      ] },
      { h2: "GEO, SEO, GSO : comprendre les différences", blocks: [
        { type: "ul", items: [
          "**AEO (AI Engine Optimization)** : l'art d'optimiser vos contenus pour qu'ils soient compris et cités par les moteurs d'IA conversationnelles.",
          "**GSO (Generative Search Optimization)** : l'optimisation pour la recherche générative au sein des moteurs traditionnels (ex. Google SGE), qui mêle IA générative et référencement classique.",
          "**GEO (Generative Engine Optimization)** : une approche plus globale qui optimise votre présence sur tous les moteurs génératifs, en structurant et diffusant vos contenus pour qu'ils soient référencés, cités et recommandés.",
        ] },
        { type: "p", text: "Ensemble, AEO, GSO et GEO forment la nouvelle génération du référencement." },
      ] },
      { h2: "Pourquoi le GEO devient incontournable en 2026 ?", blocks: [
        { type: "p", text: "En 2026, la manière dont les internautes accèdent à l'information a profondément changé. Les IA génératives comme ChatGPT, Perplexity, Gemini ou la Search Generative Experience (SGE) de Google deviennent des points d'entrée majeurs. Ces outils privilégient les contenus structurés, fiables et bien contextualisés pour formuler leurs réponses, souvent sans afficher une liste classique de résultats." },
        { type: "p", text: "Le GEO s'impose donc comme une stratégie essentielle pour toute entreprise qui souhaite être visible dans ces réponses automatisées, renforcer son autorité en ligne et devancer ses concurrents. En combinant GEO, [SEO](/referencement-strasbourg/) et AEO, les marques construisent une présence durable et incontournable dans l'écosystème de la recherche de demain." },
      ] },
    ],
  },

  "audit-referencement": {
    sections: [
      { h2: "Performances sur le web", blocks: [
        { type: "p", text: "L'audit SEO de votre site internet vous permet de savoir où il en est en termes de performances techniques pour votre [stratégie de référencement SEO](/referencement-strasbourg/). Un site mal conçu, mal optimisé, qui ne dispose pas des caractéristiques techniques attendues par les moteurs de recherche, ne pourra pas bénéficier d'une stratégie de SEO." },
        { type: "p", text: "Pour être sûrs que la stratégie soit efficace, nous proposons toujours en amont un audit de référencement. Nous pouvons également analyser votre positionnement actuel en termes de SEO." },
      ] },
      { h2: "Un audit pour optimiser votre positionnement", blocks: [
        { type: "p", text: "Votre audit de référencement SEO peut se faire à n'importe quelle étape de la vie de votre site internet. Le but est de vérifier le positionnement actuel de votre site dans les moteurs de recherche, selon les requêtes principales qui vous concernent." },
        { type: "p", text: "Notre audit met en évidence vos points forts existants ainsi que les éléments bloquants et problématiques pour un référencement optimal. Nous identifions les axes d'optimisation possibles et ceux sur lesquels vous devez être particulièrement vigilant. Les corrections que nous vous proposons sont des leviers de performance forts qui vous feront gagner en visibilité sur le web." },
      ] },
    ],
  },

  "community-management": {
    sections: [
      { h2: "Experts des réseaux sociaux", blocks: [
        { type: "p", text: "Nos community managers s'occupent du déploiement de votre marque ou entreprise sur les réseaux sociaux. Ils vous aident à développer votre stratégie de communication sur les différentes plateformes des médias sociaux, à faire les bons choix de réseaux et à communiquer activement et efficacement au nom de votre marque." },
      ] },
      { h2: "Faites vivre votre marque sur les réseaux sociaux", blocks: [
        { type: "p", text: "Les réseaux sociaux représentent un vecteur indispensable pour assurer une visibilité optimale sur le web. Leur valeur ajoutée se manifeste par une e-notoriété accrue, le renforcement d'une image de marque robuste et rassurante, ainsi que la création d'une vitrine dynamique pour vos services et produits." },
        { type: "p", text: "La communication sur les réseaux sociaux requiert du temps, de l'expérience et des compétences spécifiques. Notre équipe conçoit pour votre entreprise une stratégie de communication personnalisée, accompagnée d'une ligne éditoriale détaillée et performante, pour un renforcement optimal de votre visibilité." },
      ] },
      { h2: "Pourquoi nous confier la gestion de vos réseaux sociaux ?", blocks: [
        { type: "p", text: "Le nombre d'utilisateurs des réseaux sociaux connaît une croissance constante, faisant de ce canal une opportunité d'acquisition incontournable. ABCM met à votre disposition un community manager dédié à votre marque, qui vous accompagne dans le développement d'une stratégie adaptée à chaque plateforme et communique activement en votre nom." },
        { type: "columns", cols: [
          { title: "Une communication impactante", items: ["Gestion de votre communauté et de vos fans", "Élaboration d'une ligne éditoriale claire", "Une présence efficace sur les réseaux sociaux"] },
          { title: "Une communication claire et puissante", items: ["Une stratégie en adéquation avec vos besoins", "Toucher les cibles visées avec efficience", "Une image de marque renforcée en B2B et B2C"] },
        ] },
        { type: "p", text: "Nos prestations couvrent la création de contenu, la stratégie, les publicités sociales et la gestion quotidienne de vos réseaux." },
      ] },
    ],
  },

  "video-reseaux-sociaux": {
    sections: [
      { h2: "Dynamisez votre présence digitale", blocks: [
        { type: "p", text: "Bénéficiez de vidéos qualitatives pour vos réseaux sociaux sans alourdir votre budget. Faites produire vos vidéos et propulsez votre présence en ligne vers de nouveaux horizons. Nous vous proposons des packs de vidéos sur-mesure pour dynamiser votre stratégie de marketing digital et vous démarquer sur les réseaux sociaux (Instagram, TikTok, Facebook, etc.)." },
      ] },
      { h2: "Pourquoi faire de la vidéo ?", blocks: [
        { type: "p", text: "La vidéo est devenue l'outil incontournable pour captiver et engager votre audience sur les réseaux sociaux. Voici quelques raisons convaincantes :" },
        { type: "ul", items: [
          "**Augmentation de l'engagement** : les vidéos génèrent un niveau d'engagement bien supérieur aux autres contenus ; elles attirent l'attention et suscitent des émotions.",
          "**Mémorabilité accrue** : elles racontent une histoire de manière visuelle et immersive ; votre message reste gravé dans les esprits.",
          "**Portée élargie** : les algorithmes favorisent le contenu vidéo et le mettent en avant dans les flux d'actualités et les résultats de recherche.",
          "**Humanisation de la marque** : la vidéo montre le visage humain derrière votre entreprise et crée un lien émotionnel, renforçant la confiance et la fidélité.",
        ] },
        { type: "p", text: "Ces vidéos prennent tout leur sens lorsqu'elles sont diffusées et animées dans une vraie [stratégie de community management](/community-management/), et se déclinent aussi en [vidéos de marque employeur](/videos-marque-employeur/)." },
        { type: "callout", title: "Quelques chiffres", text: "500 millions d'utilisateurs Instagram regardent des stories chaque jour. Les Français passent en moyenne 1h55 par jour sur les réseaux sociaux, et 42 % d'entre eux ont déjà acheté un produit après avoir visionné une vidéo sur les réseaux." },
      ] },
    ],
  },

  "videos-marque-employeur": {
    sections: [
      { h2: "Boostez votre marque employeur", blocks: [
        { type: "p", text: "Boostez votre marque employeur avec des contenus adaptés, captivants et professionnels. Disposez d'une présence en ligne plus forte et engageante auprès de vos salariés et de vos futurs candidats. Optez pour des vidéos personnalisées afin de dynamiser votre stratégie de recrutement et de vous démarquer sur LinkedIn, Instagram, TikTok ou Facebook." },
      ] },
      { h2: "Qu'est-ce qu'une vidéo marque employeur ?", blocks: [
        { type: "p", text: "La vidéo marque employeur est un outil pour montrer la culture et les valeurs de l'entreprise. Elle présente l'environnement de travail, les témoignages des employés et les opportunités de carrière. Grâce à des images attrayantes, elle aide à attirer, engager et retenir les meilleurs talents en mettant en avant ce qui rend l'entreprise unique." },
        { type: "p", text: "Voici quelques raisons d'en réaliser :" },
        { type: "ul", items: [
          "Les vidéos de marque employeur attirent les talents",
          "Elles engagent les candidats dès le début",
          "Elles transmettent l'information de façon efficace",
          "Elles renforcent la notoriété de l'entreprise",
          "Elles différencient l'entreprise sur le marché du recrutement",
          "Elles facilitent le processus de recrutement",
        ] },
        { type: "p", text: "Elles complètent vos [vidéos pour les réseaux sociaux](/video-reseaux-sociaux/) et s'intègrent à votre [stratégie de communauté](/community-management/) pour une présence cohérente." },
        { type: "callout", title: "Quelques chiffres", text: "75 % des internautes sont susceptibles de suivre la page d'une entreprise si elle contient une vidéo. Les vidéos sont deux fois plus partagées que les images et génèrent 30 % d'interaction en plus que les photos." },
      ] },
    ],
  },

  "agence-sea": {
    sections: [
      { h2: "Publicités en ligne", blocks: [
        { type: "p", text: "Boostez le nombre de visites sur votre site web, augmentez les ventes de votre [boutique e-commerce](/creation-site-ecommerce/) et gagnez en visibilité grâce à nos campagnes de SEA. Nos experts déploient et pilotent vos campagnes sur Google Search, Shopping et le réseau Display, pour augmenter votre chiffre d'affaires rapidement." },
      ] },
      { h2: "Notre expérience du web à votre service", blocks: [
        { type: "p", text: "Le SEA et le [référencement SEO](/referencement-strasbourg/) sont deux techniques complémentaires pour augmenter votre visibilité sur Internet. La mise en place de campagnes Google Ads vous permet de gagner du temps et d'obtenir un ROI immédiat ; à l'inverse, le SEO se déploie sur le long terme et permet de profiter de ses résultats sur une durée plus longue." },
        { type: "p", text: "Grâce à des campagnes efficaces sur Google Search, vous êtes visible quasi immédiatement dans les résultats de Google. Sur Google Shopping, vous boostez les ventes de votre e-commerce. Et une présence sur le réseau Display vous permet d'être visible sur les sites et plateformes partenaires de Google, d'augmenter le nombre de visites sur votre site et d'améliorer votre notoriété." },
      ] },
    ],
  },

  "marketing-externalise": {
    sections: [
      { h2: "Un service pour les PME", blocks: [
        { type: "p", text: "Optimisez votre marketing tout au long de l'année en externalisant sa gestion stratégique et opérationnelle. Libérez-vous du besoin d'un temps plein, sans investissement en recrutement ou en formation." },
      ] },
      { h2: "Déléguez votre stratégie marketing", blocks: [
        { type: "p", text: "Diriger une PME exige une attention constante, et le marketing stratégique peut devenir une tâche ardue. Notre solution de direction marketing externalisée vous permet de déléguer cette responsabilité tout en conservant le contrôle, libérant votre agenda des contraintes liées à la gestion quotidienne du marketing." },
        { type: "p", text: "Sans investissement en recrutement ou en formation, notre approche souple vous offre la flexibilité nécessaire pour consacrer vos ressources là où elles sont le plus nécessaires, tout en assurant une gestion marketing experte et réactive. Recentrez-vous sur l'essentiel de votre activité, et laissez-nous propulser votre entreprise vers de nouveaux horizons." },
      ] },
      { h2: "Comment nous procédons", blocks: [
        { type: "ol", items: [
          "**Sur-mesure** : nous comprenons en profondeur vos besoins, vos objectifs et votre public cible, avec une analyse détaillée de votre entreprise, de votre secteur d'activité et de votre concurrence.",
          "**Stratégie personnalisée** : nous élaborons une stratégie marketing taillée sur mesure (campagnes publicitaires ciblées, branding, contenus engageants) pour maximiser l'impact et générer des résultats tangibles.",
          "**Mesure & ROI** : nous mettons l'accent sur la mesure des performances et l'analyse des données pour optimiser en continu et garantir un retour sur investissement optimal.",
        ] },
        { type: "p", text: "Nous pilotons l'ensemble de vos leviers : [référencement](/referencement-strasbourg/), [publicité en ligne](/agence-sea/) et [réseaux sociaux](/community-management/)." },
      ] },
    ],
  },

  "personal-branding": {
    sections: [
      { h2: "Votre image, notre expertise", blocks: [
        { type: "p", text: "Dans un monde complètement connecté, votre image personnelle est votre premier outil pour marquer les esprits et vous démarquer. Que vous soyez entrepreneur, cadre, consultant ou professionnel en quête de visibilité, notre service de personal branding est conçu pour révéler le meilleur de vous-même." },
      ] },
      { h2: "Pourquoi choisir le personal branding ?", blocks: [
        { type: "p", text: "Le personal branding génère une visibilité renforcée, affine votre image professionnelle et positionne votre expertise comme une référence dans votre domaine. Ce travail stratégique requiert du temps, des compétences spécifiques et une approche personnalisée." },
        { type: "p", text: "Votre identité professionnelle va bien au-delà d'une simple présence en ligne : elle constitue le pont entre vous et votre audience cible. Grâce à notre expertise en stratégie digitale et en valorisation personnelle, nous façonnons une image cohérente et impactante, alignée sur vos valeurs, qui renforce votre crédibilité et votre attractivité." },
      ] },
      { h2: "Notre accompagnement", blocks: [
        { type: "ul", items: [
          "**Une identité professionnelle cohérente** : nous structurons votre identité pour qu'elle reflète vos valeurs, vos compétences et vos ambitions.",
          "**Une stratégie de visibilité sur mesure** : du choix des canaux à la création de contenu, chaque étape est pensée pour capter l'attention de votre audience et optimiser votre impact.",
          "**Une réputation en ligne maîtrisée** : une gestion proactive de votre e-réputation, avec des actions ciblées pour renforcer votre crédibilité et bâtir une relation de confiance durable.",
        ] },
        { type: "p", text: "Cette présence se travaille au quotidien sur les [réseaux sociaux](/community-management/) et peut s'appuyer sur des [vidéos de marque employeur](/videos-marque-employeur/)." },
      ] },
    ],
  },
};

export function serviceContent(slug) {
  return SERVICE_CONTENT[slug] || null;
}
