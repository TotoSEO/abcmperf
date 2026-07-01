// Contenu des fiches service repris INTÉGRALEMENT des pages live de
// abcmperformances.com (toutes les sections de texte, dans l'ordre du site).
// Exclus : avis Google, galeries de réalisations, pied de page.
// Nettoyage minimal : emojis décoratifs et tirets cadratins retirés, quelques
// coquilles corrigées. Liens internes posés sur des expressions déjà présentes.
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
          "Campagnes [Google Ads](/agence-sea/) (AdWords) pour générer du trafic qualifié",
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
        { type: "h3", text: "Un site web performant pour booster votre activité" },
        { type: "p", text: "Chez ABCM, nous avons à cœur de concevoir des sites web modernes, rapides et optimisés pour votre réussite. Pour cela, nous combinons les meilleures technologies du marché :" },
        { type: "ul", items: [
          "**WordPress** : un système de gestion de contenu (CMS) fiable et polyvalent, idéal pour créer des sites vitrines, des blogs ou des plateformes sur mesure, avec une grande facilité de gestion au quotidien.",
          "**Elementor** : un éditeur visuel intuitif pour concevoir des pages web élégantes et responsives sans coder, avec une totale liberté créative et des mises à jour rapides et autonomes.",
          "**WooCommerce** : pour développer votre boutique en ligne, une solution e-commerce robuste et modulable, parfaitement adaptée pour gérer vos produits, vos ventes et vos paiements en toute sécurité.",
          "**Payload CMS & Next.js** : pour les projets nécessitant une approche sur-mesure et ultra performante, un CMS headless moderne couplé à Next.js, le framework JavaScript de référence pour des sites rapides, SEO-friendly et évolutifs.",
        ] },
        { type: "p", text: "En associant ces outils puissants, nous vous garantissons un site web qui allie design, performance et efficacité commerciale." },
      ] },
      { h2: "Nos services web", blocks: [
        { type: "table", headers: ["Service", "Détail", "Tarif"], rows: [
          ["Site vitrine", "Un véritable outil d'acquisition et de développement pour dynamiser votre entreprise. Nous privilégions WordPress pour la création de sites de présentation.", "à partir de 1 750 €"],
          ["Site e-commerce", "Exposez et commercialisez vos produits en ligne (catalogue, paiement, gestion des commandes) en toute autonomie. WordPress et WooCommerce, mais aussi PrestaShop et Shopify.", "à partir de 3 500 €"],
          ["Application web & mobile", "Le service dont vos utilisateurs ne pourront plus se passer, avec des fonctionnalités personnalisables. Principalement React Native pour le développement mobile.", "à partir de 5 550 €"],
          ["SEA, Shopping & Display", "Mise en place de campagnes publicitaires SEA, Display et Google Shopping afin de booster votre visibilité.", "Sur devis"],
          ["Rédaction web", "Rédaction et conception de contenus et d'articles de blog optimisés pour le référencement naturel SEO.", "Sur devis"],
          ["Audit SEO", "Analyse technique et fonctionnelle du SEO de votre site et audit de positionnement pour mettre en place une stratégie adaptée.", "Sur devis"],
          ["Audit site web", "Audit technique et fonctionnel de votre site internet afin de corriger les anomalies et booster les performances.", "Sur devis"],
          ["Maintenance & hébergement", "Maintenance, mise à jour de votre site et hébergement dédié pour un site sécurisé et toujours à jour.", "Sur devis"],
          ["Formations", "Des formations dans le digital pour acquérir toutes les compétences nécessaires à une communication digitale efficace.", "Sur devis"],
        ] },
      ] },
      { h2: "Une stratégie web qui performe", blocks: [
        { type: "columns", cols: [
          { title: "Une stratégie performante", text: "C'est la clé de la réussite sur le web : cette stratégie part de l'analyse de vos besoins." },
          { title: "Un service web adapté", text: "Les outils et les leviers que nous activons sont adaptés et correspondent à vos objectifs." },
        ] },
        { type: "p", text: "**Une stratégie web rentable** : votre stratégie vous amène du trafic, des prospects et de nouveaux clients, en adéquation avec votre image de marque." },
      ] },
      { h2: "Foire aux questions", blocks: [
        { type: "h3", text: "Combien de temps faut-il pour créer un site web ?" },
        { type: "p", text: "Comptez 2 à 3 mois pour un site vitrine simple et 4 à 6 mois pour un site e-commerce, selon la taille de votre site. Dans tous les cas, notre équipe vous annonce une durée avant le démarrage." },
        { type: "h3", text: "Est-ce que je peux avoir accès ensuite au back-office de mon site ?" },
        { type: "p", text: "Vous avez accès à votre site dans son intégralité. Nous vous formons à sa prise en main afin que vous puissiez en modifier le contenu de façon autonome." },
        { type: "h3", text: "Puis-je bénéficier d'un accompagnement stratégique sur le court ou long terme ?" },
        { type: "p", text: "Notre équipe vous accompagne sur toute la partie stratégie web, sur la durée que vous souhaitez. Nous travaillons en partenariat sans engagement, qui vous laisse libre de vos choix : seul le résultat compte chez nous." },
        { type: "h3", text: "Est-ce que vous proposez du community management ?" },
        { type: "p", text: "Tout à fait. Nous avons une équipe de [community management](/community-management/) dédiée à vos réseaux sociaux, qui s'occupe de toute la [stratégie de contenu](/strategie-de-contenu-2026/) pour vous. Là encore, pas d'engagement : c'est votre satisfaction qui détermine la durée du partenariat." },
        { type: "h3", text: "Est-ce que mon site peut devenir visible sur Google en 2 semaines ?" },
        { type: "p", text: "Nous avons des solutions efficaces pour vous rendre visible dans la page de résultats de Google. Dans ce cas, nous utilisons une stratégie [Google Ads](/agence-sea/). Et si vous misez sur le long terme, nous mettons en place une [stratégie de référencement](/referencement-strasbourg/) efficace et durable." },
        { type: "h3", text: "Pouvez-vous auditer mon site et me dire quelles corrections lui apporter ?" },
        { type: "p", text: "Tout à fait. Notre équipe réalise un [audit complet](/audit-referencement/) de votre site, que vous recevez ensuite au format PDF avec l'ensemble des corrections et améliorations à apporter. Cela vous permet d'en booster les performances comme la visibilité sur le web." },
      ] },
      { h2: "Quelle technologie ?", blocks: [
        { type: "p", text: "Selon vos besoins, nous déterminons ensemble quelle technologie sera la plus adaptée au développement de votre site internet : **WordPress**, **WooCommerce**, **React** ou **Elementor**." },
      ] },
    ],
  },

  "creation-site-ecommerce": {
    sections: [
      { h2: "Un site e-commerce sur-mesure", blocks: [
        { type: "p", text: "Faites confiance à l'agence web ABCM Performances pour créer un site marchand efficace et rentable. Votre boutique en ligne est belle, bien positionnée sur les moteurs de recherche et **convertit vos visiteurs en acheteurs**. Notre expertise repose autant sur la qualité du site que sur les conseils et l'accompagnement pour booster vos ventes." },
        { type: "p", text: "Internet représente une mine d'opportunités pour qui sait les saisir. Si vous voulez gagner des clients et écouler votre stock, votre boutique doit être optimisée pour la vente et la facilité d'utilisation. Notre équipe construit avec vous le site qui répond à vos objectifs commerciaux : responsive et adapté à tous les supports (tablette, mobile, desktop), mais aussi performant et conforme aux attentes de Google en matière de [référencement naturel (SEO)](/referencement-strasbourg/)." },
        { type: "p", text: "Nos web designers préparent et réalisent une maquette graphique selon vos besoins stratégiques et vos envies. L'ergonomie, le choix du menu, l'arborescence, la fluidité de navigation et le design adapté à tous les supports (tablette, mobile) sont étudiés et définis en amont. La [charte graphique](/trouver-le-style-graphique-de-sa-marque/) de votre site est soigneusement étudiée pour garantir votre succès sur le web." },
      ] },
      { h2: "Pourquoi nous confier la création de votre site internet ?", blocks: [
        { type: "p", text: "Notre équipe conçoit des sites depuis plus de 9 ans. Nos experts en développement vous accompagnent dans la création de votre projet web afin que votre site soit performant. Les sites que nous développons répondent à un ensemble de critères de réussite et de notoriété pour votre entreprise sur le web." },
        { type: "p", text: "Notre spécialité est de concevoir des sites internet qui chargent rapidement. Pourquoi ? Pour les optimiser pour le référencement SEO. Parce que votre position dans les moteurs de recherche est fondamentale, nous perfectionnons votre site pour qu'il soit visible." },
        { type: "columns", cols: [
          { title: "Un site performant", text: "Un site qui fait la différence sur le web : trouvé rapidement, il fournit une réponse claire aux utilisateurs." },
          { title: "Un site responsive", text: "Un site accessible, au design responsive et optimisé pour tous les supports : mobile, tablette, ordinateur." },
        ] },
        { type: "p", text: "**Un site efficace** : un site que vous pouvez facilement prendre en main pour modifier les contenus quand vous le souhaitez, en toute autonomie. Une fois en ligne, nous pouvons en assurer la [maintenance et l'hébergement](/maintenance-site-web/)." },
      ] },
      { h2: "Quelle technologie ?", blocks: [
        { type: "p", text: "Selon vos besoins, nous déterminons ensemble quelle technologie sera la plus adaptée au développement de votre site : **WordPress**, **WooCommerce**, **React** ou **Elementor**." },
      ] },
    ],
  },

  "maintenance-site-web": {
    sections: [
      { h2: "Mises à jour : gardez l'esprit tranquille", blocks: [
        { type: "p", text: "Avoir un site internet, c'est génial. Mais un site qui n'est pas régulièrement mis à jour est dangereux. Vous n'avez peut-être pas le temps ou les compétences nécessaires pour mettre votre site à jour ? Ça tombe bien : notre agence web s'occupe de tout pour vous. Sauvegardes et petites maintenances, confiez-nous votre site internet pour plus de sérénité. Nous proposons également un service d'hébergement à nos clients, pour bénéficier d'un hébergement dédié et sécurisé." },
      ] },
      { h2: "Confiez-nous la maintenance de votre site WordPress", blocks: [
        { type: "p", text: "Internet va vite. Une fois que votre [site web](/agence-web-strasbourg/) est développé et mis en ligne, il ne faut que quelques jours pour que les premières mises à jour pointent le bout de leur nez." },
        { type: "p", text: "Principalement sur WordPress, où les communautés se donnent à fond pour toujours faire évoluer les extensions et les plugins. C'est une bonne chose, car cela permet d'avoir un site qui évolue dans le bon sens." },
        { type: "p", text: "Les thèmes évoluent également et il faut régulièrement les mettre à jour. Seulement voilà : si vous ne faites pas ces mises à jour souvent ou correctement, cela peut vite devenir un casse-tête, l'issue la plus embêtante étant de voir votre site littéralement sauter. Nous avons donc développé un service de maintenance sur-mesure, adapté aux besoins de votre site. Principalement avec WordPress, mais nous intervenons également sous PrestaShop et Drupal." },
      ] },
      { h2: "Pourquoi nous confier votre maintenance et hébergement ?", blocks: [
        { type: "p", text: "Pour garantir la sécurité et la performance de votre site web, nous vous proposons un hébergement sur-mesure, adapté à vos besoins. Un hébergement premium vous garantit la mise à jour régulière de votre base de données, mais également la sécurité de votre site internet. Avec notre solution d'hébergement, votre site charge bien plus rapidement que sur les plateformes d'hébergement grand public auxquelles vous pourriez accéder par vous-même." },
        { type: "p", text: "Que vous soyez sous WordPress, PrestaShop ou Drupal, notre hébergement s'adapte à votre CMS." },
        { type: "p", text: "Notre système sauvegarde votre site quotidiennement : vous ne risquez rien. Nous pouvons restaurer votre site à n'importe quel moment. C'est très pratique, notamment quand on sait que certaines mises à jour peuvent parfois mettre un site à mal. C'est une maintenance permanente pour votre site." },
        { type: "columns", cols: [
          { title: "Un site performant", text: "Votre site doit être à l'image de votre marque : toujours à jour. Ne laissez pas une mise à jour ruiner votre image sur internet." },
          { title: "Un site optimisé", text: "Si votre site n'est pas optimisé pour tous les supports, vous perdez des prospects. Confiez-nous le responsive design de votre site." },
        ] },
        { type: "p", text: "**Un site actualisé** : si votre site ne ressemble pas à ce que les utilisateurs s'attendent à trouver, vous risquez de ne pas les rassurer. Nous retouchons votre site pour l'optimiser." },
      ] },
      { h2: "Comment ça fonctionne ?", blocks: [
        { type: "p", text: "Pour maintenir votre site à jour, nous intervenons sur plusieurs options différentes :" },
        { type: "ul", items: [
          "**Mises à jour** (CMS, thèmes, extensions)",
          "**Hébergement** (serveur sécurisé, dédié)",
          "**Sauvegardes** (base de données)",
          "**Sécurité** (optimisation des options de sécurité)",
          "**Performances** (optimisation du site pour un chargement plus rapide)",
          "**Restauration** (en cas de problème, nous restaurons la sauvegarde de votre site)",
        ] },
        { type: "p", text: "Nous intervenons sous **WordPress**, **PrestaShop**, **Drupal** et **Joomla**." },
      ] },
    ],
  },

  "referencement-strasbourg": {
    sections: [
      { h2: "Votre visibilité sur Google", blocks: [
        { type: "p", text: "Nos experts du référencement naturel (SEO) se chargent de positionner votre site internet dans les pages de résultats de Google. Votre visibilité sur les requêtes stratégiques est améliorée et votre chiffre d'affaires augmente." },
        { type: "p", text: "Grâce à une stratégie de référencement SEO solide, nous vous aidons à trouver de nouveaux clients et à booster vos demandes entrantes et vos ventes. Faites confiance à notre agence web expérimentée pour faire monter votre site dans les résultats de recherche." },
      ] },
      { h2: "Comment référencer naturellement votre activité sur le web ?", blocks: [
        { type: "p", text: "Le positionnement de votre site internet dans les pages de résultats (SERP) des moteurs de recherche garantit votre visibilité sur le web. Les utilisateurs soumettent des requêtes à Google, et si votre site n'est pas correctement positionné, il est invisible sur internet. Notre équipe vous aide à faire progresser le positionnement de votre site sur un certain nombre de requêtes importantes : c'est ce qu'on appelle une stratégie de référencement SEO." },
        { type: "p", text: "**Résultat** : vous apparaissez dans les premiers résultats de recherche, donc vous augmentez vos demandes entrantes. Cela passe par une augmentation nette de votre chiffre d'affaires et de vos ventes. C'est un investissement pérenne sur le long terme, Google étant le lieu où vous devez être présent pour vos cibles." },
      ] },
      { h2: "Pourquoi nous confier votre référencement SEO ?", blocks: [
        { type: "p", text: "Nous travaillons le positionnement de votre site sur les requêtes qui vous amènent du trafic qualifié. Votre site devient visible auprès de vos cibles et vous bénéficiez d'un positionnement qualitatif sur les requêtes stratégiques." },
        { type: "p", text: "Nos experts en référencement travaillent avec vous en amont, sur les axes efficaces du positionnement de votre site. Chaque page trouve ainsi sa place dans les moteurs de recherche. Vous devenez visible là où vous ne l'étiez pas forcément, et là où vos concurrents occupaient peut-être des places de choix : en haut de la SERP. Le référencement SEO est une discipline à part entière, qui nécessite beaucoup d'expérience et de temps." },
        { type: "columns", cols: [
          { title: "Un site visible", text: "Vos clients vous recherchent et vous trouvent dans Google. C'est là que vous devez être visible." },
          { title: "Un site rentable", text: "Mieux vous êtes positionné, plus vous recevez de demandes entrantes, mieux vous vendez." },
        ] },
        { type: "p", text: "**Un site reconnu** : apparaître dans les premiers résultats de recherche est un gage de qualité pour les utilisateurs, qui vous feront confiance." },
      ] },
      { h2: "Quels types de sites ?", blocks: [
        { type: "p", text: "Nous référençons tous types de sites internet, peu importe la technologie utilisée. Un [audit SEO](/audit-referencement/) du site est toujours effectué en amont, afin de nous assurer qu'il dispose de toutes les capacités pour se positionner correctement. Le cas échéant, nous réalisons une liste de préconisations indispensables pour mettre votre site à jour par rapport aux critères de Google." },
        { type: "p", text: "Nos experts du SEO travaillent avec vous sur une stratégie qui se déploie sur le long terme et dont vous pourrez mesurer les premiers effets au bout de quelques mois." },
      ] },
    ],
  },

  "referencement-ia-geo": {
    sections: [
      { h2: "Optimisation AEO + GSO + GEO", blocks: [
        { type: "p", text: "La recherche en ligne connaît une **révolution majeure**. Les moteurs de recherche classiques ([SEO](/referencement-strasbourg/)) ne sont plus les seuls à générer du trafic :" },
        { type: "ul", items: [
          "Les IA génératives (ChatGPT, Perplexity, Gemini, Copilot…) prennent désormais une place centrale en proposant des réponses rédigées directement, souvent sans afficher de liste de liens.",
          "Ces IA s'appuient sur des contenus fiables, structurés et référencés pour générer leurs réponses, et seules les sources optimisées sont citées et mises en avant.",
        ] },
        { type: "p", text: "Notre équipe vous accompagne pour accroître votre visibilité dans les IA." },
      ] },
      { h2: "GEO, SEO, GSO : comprendre les différences", blocks: [
        { type: "ul", items: [
          "**AEO (AI Engine Optimization)** : l'art d'optimiser vos contenus pour qu'ils soient compris et cités par les moteurs d'IA conversationnelles.",
          "**GSO (Generative Search Optimization)** : l'optimisation pour la recherche générative au sein des moteurs de recherche traditionnels (ex. Google SGE, Search Generative Experience), qui mêle IA générative et référencement classique.",
          "**GEO (Generative Engine Optimization)** : une approche plus globale qui vise à optimiser votre présence sur tous les moteurs génératifs (IA conversationnelles, SGE, moteurs hybrides), en structurant et en diffusant vos contenus pour qu'ils soient référencés, cités et recommandés.",
        ] },
        { type: "p", text: "Ensemble, [AEO](/le-aeo-c-est-quoi/), GSO et GEO forment la nouvelle génération du référencement." },
      ] },
      { h2: "Pourquoi le GEO devient incontournable en 2026 ?", blocks: [
        { type: "p", text: "En 2026, la manière dont les internautes accèdent à l'information a profondément changé. Les IA génératives comme ChatGPT, Perplexity, Gemini ou la Search Generative Experience (SGE) de Google deviennent des points d'entrée majeurs. Ces outils privilégient les contenus structurés, fiables et bien contextualisés pour formuler leurs réponses, souvent sans afficher une liste classique de résultats." },
        { type: "p", text: "Le GEO s'impose donc comme une stratégie essentielle pour toute entreprise qui souhaite être visible dans ces réponses automatisées, renforcer son autorité en ligne et devancer ses concurrents. En combinant GEO, [SEO](/referencement-strasbourg/) et AEO, les marques construisent une présence durable et incontournable dans l'écosystème de la recherche de demain." },
        { type: "columns", cols: [
          { title: "Anticipez la transformation de la recherche", text: "La recherche en ligne vit une mutation historique : les IA génératives (ChatGPT, Perplexity, Gemini, Google SGE…) deviennent les nouveaux « moteurs de réponse ». En travaillant votre GEO dès maintenant, vous placez votre marque en position de leader, là où vos concurrents sont encore absents. C'est une opportunité stratégique pour capter de nouveaux canaux de visibilité avant qu'ils ne soient saturés." },
          { title: "Une expertise SEO + IA unique", text: "Notre équipe maîtrise à la fois les fondamentaux du SEO traditionnel et les leviers avancés de l'AEO / GSO / GEO. Nous structurons vos contenus pour qu'ils soient compris, cités et mis en avant par les moteurs génératifs, tout en consolidant votre visibilité sur Google. Cette double approche vous garantit des résultats durables, quelle que soit l'évolution des algorithmes." },
        ] },
        { type: "p", text: "**Maximisez votre retour sur investissement** : le GEO ne se contente pas d'améliorer votre position, il renforce votre crédibilité, génère du trafic qualifié et multiplie vos points de contact avec vos audiences, dans les environnements IA où les décisions se prennent de plus en plus vite. Avec une stratégie GEO sur mesure, vous obtenez plus de visibilité, plus de leads et une longueur d'avance durable." },
      ] },
      { h2: "ABCM, l'expertise GEO qui fait la différence", blocks: [
        { type: "p", text: "Choisir ABCM, c'est faire le pari d'une stratégie d'avance. Notre agence combine expertise technique, vision stratégique et capacité à traduire les évolutions rapides de la recherche en leviers concrets de performance. Nous ne nous contentons pas d'optimiser votre site : nous vous positionnons comme une source incontournable dans les réponses des IA. Ensemble, faisons en sorte que votre marque soit celle que les moteurs génératifs citent, recommandent et mettent en avant." },
      ] },
    ],
  },

  "audit-referencement": {
    sections: [
      { h2: "Performances sur le web", blocks: [
        { type: "p", text: "L'audit SEO de votre site internet vous permet de savoir où il en est en termes de performances techniques pour la [stratégie de référencement SEO](/referencement-strasbourg/). Un site mal conçu, mal optimisé, qui ne dispose pas des caractéristiques techniques indispensables et attendues par les moteurs de recherche, ne pourra pas bénéficier d'une stratégie de SEO." },
        { type: "p", text: "Donc, pour être sûrs que la stratégie de référencement soit efficace, nous proposons toujours en amont un audit de référencement. Nous pouvons également analyser votre positionnement actuel en termes de SEO." },
      ] },
      { h2: "Un audit de référencement pour optimiser votre positionnement", blocks: [
        { type: "p", text: "Votre audit de référencement SEO peut se faire à n'importe quelle étape de la vie de votre site internet. Le but de cette action est de vérifier le positionnement actuel de votre site dans les moteurs de recherche, selon les requêtes principales qui vous concernent." },
        { type: "p", text: "Notre audit met en évidence vos points forts existants et vous montre également les éléments bloquants et problématiques pour un référencement optimal. Nous identifions les axes d'optimisation possibles et ceux sur lesquels vous devez particulièrement être vigilant. Les corrections que nous vous proposons sont des leviers de performance forts qui vous feront gagner en visibilité sur le web." },
      ] },
      { h2: "Pourquoi nous confier votre audit SEO ?", blocks: [
        { type: "p", text: "Notre audit de référencement SEO consiste à analyser et scruter les performances techniques de votre site web. À cette étape, nous nous assurons que votre site est techniquement compatible avec les exigences et les besoins du référencement : qualité du code, vitesse de chargement, architecture, liens et [maillage](/seo-comment-optimiser-votre-netlinking/), redirections en place et brisées, structure des URL, compatibilité mobile, balisages, fichier robots.txt, Google Search Console, optimisation des images, etc. Ces performances sont des prérogatives importantes pour un bon positionnement de votre site." },
        { type: "columns", cols: [
          { title: "Un audit diagnostic", text: "Vous découvrez quelles positions vous occupez sur le web et quelles requêtes les utilisateurs emploient pour vous trouver, afin de mieux vous placer dans les SERP." },
          { title: "Un audit de performances", text: "Parce que c'est le référencement qui vous amène 40 % de trafic sur votre site web, un audit technique et fonctionnel permet d'en tester et d'en optimiser la performance ; vous pouvez ensuite booster votre visibilité." },
        ] },
        { type: "p", text: "**Un audit pour se démarquer** : connaître l'existant et le potentiel de votre site est précieux pour se démarquer de la concurrence. Nous analysons également le positionnement de vos concurrents pour vous aider à vous positionner de manière optimale." },
      ] },
      { h2: "Comment ça fonctionne ?", blocks: [
        { type: "ol", items: [
          "Nous collectons l'ensemble des accès dont nous avons besoin pour passer votre site en revue.",
          "Nous analysons vos positions actuellement occupées sur Google et listons les mots-clés stratégiques qui vous concernent.",
          "S'ensuit un audit détaillé des optimisations SEO à mettre en place : balises, performances, CSS, JS, mots-clés, contenu, images, etc.",
          "Vous pouvez ensuite faire les travaux vous-même ou nous en confier la gestion. Un rapport de positionnement vous est également remis.",
        ] },
      ] },
    ],
  },

  "community-management": {
    sections: [
      { h2: "Experts des réseaux sociaux", blocks: [
        { type: "p", text: "Nos community managers s'occupent du déploiement de votre marque ou entreprise sur les réseaux sociaux. Ils vous aident à développer votre stratégie de communication sur les plateformes des différents médias sociaux, vous aident à faire les bons choix en matière de réseaux sociaux et communiquent activement et efficacement au nom de votre marque." },
      ] },
      { h2: "Faites vivre votre marque sur les réseaux sociaux", blocks: [
        { type: "p", text: "Les réseaux sociaux représentent un vecteur indispensable pour assurer une visibilité optimale sur le web. Leur valeur ajoutée se manifeste principalement par une e-notoriété accrue, le renforcement d'une image de marque robuste et rassurante, ainsi que la création d'une vitrine dynamique pour vos services et produits." },
        { type: "p", text: "La communication sur les réseaux sociaux requiert une part significative de temps, de l'expérience et des compétences spécifiques. Notre équipe se charge de concevoir, pour votre entreprise ou marque, une stratégie de communication personnalisée, accompagnée d'une [ligne éditoriale](/definir-sa-ligne-editoriale-sur-les-reseaux-sociaux/) détaillée et performante. Cela garantit un renforcement optimal de votre visibilité sur les médias sociaux." },
      ] },
      { h2: "Pourquoi nous confier la gestion de vos réseaux sociaux ?", blocks: [
        { type: "p", text: "Le nombre d'utilisateurs des réseaux sociaux connaît une croissance constante, faisant de ce canal une opportunité d'acquisition incontournable. ABCM met à votre disposition un community manager dédié à la communication de votre marque ou entreprise. Il vous accompagne dans le développement d'une stratégie adaptée aux différentes plateformes, vous guide dans le choix judicieux des réseaux sociaux, et communique de manière active et efficace en votre nom." },
        { type: "columns", cols: [
          { title: "Une communication impactante", text: "Gestion de votre communauté et de vos fans, élaboration d'une ligne éditoriale claire, présence efficace sur les réseaux sociaux : notre équipe de community managers est à la disposition de votre marque." },
          { title: "Une communication claire", text: "L'élaboration de la stratégie, en adéquation avec vos besoins marketing et stratégiques, vous permet de toucher les cibles visées avec efficience et rendement." },
        ] },
        { type: "p", text: "**Une communication puissante** : votre communication se dynamise, se diversifie et se renforce pour refléter votre image de marque en B2B comme en B2C, et mettre en avant votre savoir-faire et votre expertise." },
        { type: "p", text: "Nos prestations couvrent la **création de contenu**, la **stratégie**, les **publicités** et la **gestion** quotidienne de vos réseaux sociaux." },
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
          "**Augmentation de l'engagement** : les vidéos génèrent un niveau d'engagement bien supérieur aux autres types de contenus ; elles attirent l'attention et suscitent des émotions.",
          "**Mémorabilité accrue** : les vidéos racontent une histoire de manière visuelle et immersive ; votre message a plus de chances de rester gravé dans l'esprit de votre audience.",
          "**Portée élargie** : les [algorithmes des réseaux sociaux](/algorithmes-2025-meta-google-tiktok/) favorisent le contenu vidéo, le mettant en avant dans les flux d'actualités et les résultats de recherche, pour atteindre un public plus large.",
          "**Humanisation de la marque** : les vidéos montrent le visage humain derrière votre entreprise et créent un lien émotionnel, renforçant la confiance et la fidélité à la marque.",
        ] },
        { type: "p", text: "La vidéo sur les réseaux sociaux est le meilleur moyen de stimuler l'engagement, d'accroître la portée de votre contenu et d'humaniser votre marque. En intégrant des vidéos percutantes dans votre stratégie de marketing digital, vous pouvez véritablement vous démarquer et captiver votre audience de manière efficace." },
        { type: "callout", title: "Quelques chiffres", text: "500 millions d'utilisateurs Instagram regardent des stories chaque jour. Les Français passent en moyenne 1h55 par jour sur les réseaux sociaux, et 42 % d'entre eux ont déjà acheté un produit après avoir visionné une vidéo sur les réseaux." },
      ] },
      { h2: "Pourquoi nous confier votre création vidéo ?", blocks: [
        { type: "p", text: "Dans un monde où la vidéo est devenue le moyen de communication privilégié de 78 % des internautes, l'impact de votre présence vidéo en ligne est essentiel. Découvrez une offre de Social Media Ads et de Snack Content transparente et adaptée à votre besoin : obtenez rapidement des vidéos qualitatives pour vos réseaux sociaux sans faire exploser le budget. Face à cette réalité, faire appel à une expertise digitale devient une nécessité stratégique." },
        { type: "columns", cols: [
          { title: "Équipe dédiée", text: "Chez ABCM, notre équipe dédiée à la création de vidéos pour les réseaux sociaux ne se contente pas de suivre les tendances. Nous comprenons que chaque entreprise a des besoins spécifiques. En choisissant notre expertise, vous bénéficiez d'un partenariat conçu sur-mesure pour votre secteur d'activité, aligné sur vos objectifs commerciaux." },
          { title: "Stratégie personnalisée", text: "Au-delà des normes, nous concevons une stratégie de vidéos pour les réseaux sociaux personnalisée, spécialement élaborée pour mettre en valeur votre singularité et propulser votre présence en ligne vers de nouveaux sommets. Nous nous adaptons avec créativité à l'identité propre de votre entreprise." },
        ] },
        { type: "p", text: "**Innovation** : reconnus pour notre adaptabilité, nous intégrons les dernières innovations en matière de création vidéo pour garantir votre pertinence et votre avantage concurrentiel. Laissez notre expertise en création de vidéos pour les réseaux sociaux propulser votre entreprise vers de nouveaux sommets, en captivant votre public, en renforçant votre crédibilité et en générant des résultats tangibles." },
      ] },
      { h2: "Détails du pack", blocks: [
        { type: "p", text: "Inclus dans cette offre :" },
        { type: "ul", items: [
          "Un RDV de co-création de la vidéo",
          "1 demi-journée de tournage",
          "1 demi-journée de montage avec retours possibles",
          "1 vidéo au format 9:16 (16:9 sur demande), format réseaux sociaux",
          "1 vidéo teaser plus courte en 9:16",
          "Des photos du produit ou service réalisées pendant le tournage",
        ] },
        { type: "p", text: "**Options possibles** : motion design, animation 3D, tournage prolongé, montage avancé, formats supplémentaires, contenu bonus, etc." },
      ] },
    ],
  },

  "videos-marque-employeur": {
    sections: [
      { h2: "Boostez votre marque employeur", blocks: [
        { type: "p", text: "Boostez votre marque employeur avec des contenus adaptés, captivants et professionnels. Disposez d'une présence en ligne plus forte et engageante auprès de vos salariés et de vos futurs candidats. Optez pour des vidéos personnalisées afin de dynamiser votre stratégie de recrutement et de vous démarquer sur des plateformes telles que LinkedIn, Instagram, TikTok ou Facebook." },
      ] },
      { h2: "Qu'est-ce qu'une vidéo marque employeur ?", blocks: [
        { type: "p", text: "La vidéo marque employeur est un outil pour montrer la culture et les valeurs de l'entreprise. Elle présente l'environnement de travail, les témoignages des employés et les opportunités de carrière. Grâce à des images visuelles et attrayantes, elle aide à attirer, engager et retenir les meilleurs talents en mettant en avant ce qui rend l'entreprise unique et attrayante en tant qu'employeur." },
        { type: "p", text: "Voici quelques raisons convaincantes d'en réaliser :" },
        { type: "ul", items: [
          "Les vidéos de marque employeur attirent les talents.",
          "Elles engagent les candidats dès le début.",
          "Elles transmettent l'information de façon efficace.",
          "Elles renforcent la notoriété de l'entreprise.",
          "Elles la différencient sur le marché du recrutement.",
          "Elles facilitent le processus de recrutement.",
        ] },
        { type: "p", text: "La vidéo marque employeur sur les réseaux sociaux est essentielle pour susciter l'engagement, étendre la portée de votre contenu et donner une dimension humaine à votre marque. En intégrant des vidéos percutantes dans votre stratégie marketing, vous pouvez réellement vous démarquer et captiver votre audience de manière efficace." },
        { type: "callout", title: "Quelques chiffres", text: "75 % des internautes sont susceptibles de suivre la page d'une entreprise si elle contient une vidéo. Les vidéos sont deux fois plus partagées que les images et génèrent 30 % d'interaction en plus que les photos." },
      ] },
      { h2: "Pourquoi nous confier votre création de vidéos marque employeur ?", blocks: [
        { type: "p", text: "Dans un monde où la vidéo est le moyen de communication préféré de 78 % des internautes, il est essentiel de saisir l'impact crucial de votre présence vidéo en ligne pour attirer les talents vers votre entreprise. La vidéo de marque employeur contribue également à retenir vos talents. Notre offre de création de contenu vidéo dédiée à la marque employeur vous propose une solution transparente et parfaitement adaptée à vos besoins : vous obtenez rapidement des vidéos de haute qualité pour promouvoir votre culture d'entreprise et vos valeurs." },
        { type: "p", text: "Face à cette réalité incontournable, faire appel à une expertise digitale spécialisée dans la création de vidéos pour la marque employeur devient une nécessité stratégique. Ne manquez pas l'opportunité d'optimiser votre stratégie de recrutement avec des vidéos percutantes et engageantes." },
        { type: "columns", cols: [
          { title: "Équipe dédiée", text: "Chez ABCM, notre équipe dédiée à la création de vidéos pour la marque employeur ne se contente pas de suivre les tendances. Nous comprenons que chaque entreprise a des besoins spécifiques en matière d'attraction de talents. En choisissant notre expertise, vous bénéficiez d'un partenariat conçu sur-mesure pour votre secteur d'activité, aligné sur vos objectifs en matière de recrutement et de communication RH." },
          { title: "Stratégie personnalisée", text: "Au-delà des normes, nous concevons une stratégie de vidéos pour la marque employeur personnalisée, spécialement élaborée pour mettre en valeur l'unicité de votre culture d'entreprise. Nous nous adaptons avec créativité à l'identité propre de votre entreprise et à l'histoire que vous souhaitez raconter aux futurs collaborateurs." },
        ] },
        { type: "p", text: "**Innovation** : reconnus pour notre adaptabilité, nous intégrons les dernières innovations en matière de création vidéo pour garantir votre pertinence et votre avantage concurrentiel. Laissez notre expertise renforcer votre réputation en matière de recrutement et de rétention des talents." },
      ] },
      { h2: "Les étapes", blocks: [
        { type: "ol", items: [
          "Échanges autour de vos besoins et problématiques",
          "Choix de la stratégie adaptée",
          "Choix des formats et de la durée",
          "Proposition de trois idées créatives",
          "Conception et rédaction du script",
          "Séances de tournage",
          "Montage, retours, envoi",
          "Ajout des sous-titres et déclinaisons pour tous les supports",
        ] },
      ] },
    ],
  },

  "agence-sea": {
    sections: [
      { h2: "Publicités en ligne", blocks: [
        { type: "p", text: "Boostez le nombre de visites sur votre site web, augmentez les ventes de votre [boutique e-commerce](/creation-site-ecommerce/) et gagnez en visibilité sur le web grâce à nos campagnes de SEA. Nos experts se chargent de déployer et de piloter vos campagnes sur Google Search, Shopping et le réseau Display, pour augmenter votre chiffre d'affaires rapidement." },
      ] },
      { h2: "Notre expérience du web à votre service", blocks: [
        { type: "p", text: "Le [référencement payant (SEA)](/seo-et-sem-quelle-strategie-choisir-pour-votre-entreprise/) et le [référencement SEO](/referencement-strasbourg/) sont deux techniques complémentaires pour augmenter votre visibilité sur internet. La mise en place de campagnes sur Google Ads vous permet de gagner du temps et d'obtenir un ROI immédiat. À l'inverse, le SEO se déploie sur le long terme et permet de profiter de ses résultats sur une durée plus longue." },
        { type: "p", text: "Grâce à des campagnes efficaces sur Google Search, vous êtes visible quasi immédiatement sur la page de résultats de Google. Grâce à Google Shopping, vous boostez les ventes de votre e-commerce. Et une présence sur le réseau Display de Google vous permet d'être visible sur les sites et plateformes partenaires, d'augmenter le nombre de visites sur votre site et d'améliorer votre notoriété." },
      ] },
      { h2: "Pourquoi travailler avec nous ?", blocks: [
        { type: "p", text: "Notre équipe est spécialisée dans l'acquisition de trafic depuis plusieurs années. Nous aidons nos clients à trouver de nouveaux prospects, à générer de nouvelles vues de leur site web et, surtout, à augmenter leurs ventes. Que ce soit pour un site vitrine ou un site e-commerce, nos solutions sont efficaces et rapides : il nous suffit de quelques jours pour générer du trafic supplémentaire." },
        { type: "p", text: "Nous sommes également spécialisés dans le déploiement d'une stratégie de vente efficace pour les sites e-commerce. Grâce à des campagnes sur Google Shopping, nous vous permettons de générer des ventes rapidement. Ensuite, grâce à notre travail de reporting et d'analyse, nous réajustons les campagnes pour optimiser et rentabiliser au mieux votre investissement : nous revoyons le ciblage, le positionnement, la stratégie d'enchères et le wording, sur toutes les campagnes et de façon quotidienne." },
        { type: "p", text: "Notre agence gère de nombreux budgets d'achat média, sans engagement avec nos clients. Nous nous inscrivons dans une relation de confiance, centrée sur le retour sur investissement (ROI)." },
        { type: "columns", cols: [
          { title: "Google Search", text: "Gagnez en visibilité rapidement dans la page de résultats de Google, sur les requêtes importantes pour vous." },
          { title: "Google Shopping", text: "Faites rapidement de nombreuses nouvelles ventes sur votre site e-commerce." },
        ] },
        { type: "p", text: "**Google Display** : grâce à une présence optimale sur le réseau Display, vous augmentez le nombre de visites sur votre site et améliorez votre notoriété." },
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
        { type: "p", text: "Sans investissement en recrutement ou en formation, notre approche souple vous offre la flexibilité nécessaire pour consacrer vos ressources là où elles sont le plus nécessaires, tout en assurant une gestion marketing experte et réactive. Vivez le marketing en toute liberté, recentrez-vous sur l'essentiel de votre activité, et laissez-nous propulser votre entreprise vers de nouveaux horizons." },
      ] },
      { h2: "Pourquoi externaliser votre direction marketing ?", blocks: [
        { type: "p", text: "Le marketing demeure essentiel, mais la gestion quotidienne peut être un fardeau pour les dirigeants de PME. Notre expertise externalisée vous libère des contraintes de temps et de compétences, en offrant une direction marketing personnalisée, alignée sur vos objectifs et adaptée à votre secteur d'activité." },
        { type: "p", text: "ABCM devient un partenaire engagé dans votre réussite digitale, apportant une vision externe, des compétences spécialisées et une réactivité essentielle pour naviguer dans un environnement marketing en constante évolution. Optez pour la sérénité en confiant votre direction marketing à des experts qui comprennent les défis uniques auxquels votre entreprise est confrontée." },
        { type: "columns", cols: [
          { title: "Sur-mesure", text: "Notre première étape consiste à comprendre en profondeur vos besoins spécifiques, vos objectifs et votre public cible. Nous réalisons une analyse détaillée de votre entreprise, de votre secteur d'activité et de votre concurrence pour identifier les opportunités uniques qui vous permettront de vous démarquer sur le marché." },
          { title: "Stratégie personnalisée", text: "Nous élaborons une stratégie marketing entièrement personnalisée, taillée sur mesure pour répondre à vos défis et capitaliser sur vos avantages concurrentiels. Que ce soit à travers des campagnes publicitaires ciblées, des initiatives de branding créatives ou des stratégies de contenu engageantes, chaque aspect de notre plan est soigneusement conçu pour maximiser l'impact et générer des résultats tangibles." },
        ] },
        { type: "p", text: "**Mesure & ROI** : nous mettons l'accent sur la mesure des performances et l'analyse des données pour optimiser continuellement nos efforts et garantir un retour sur investissement optimal." },
        { type: "columns", cols: [
          { title: "Un marketing expert et souple", text: "Externalisation de la gestion marketing à l'année, sans nécessité d'embauche. Une approche flexible, adaptée aux besoins de votre entreprise." },
          { title: "Vision, stratégie et valeur", text: "Portez un regard externe sur votre entreprise, construisez une vision stratégique et créez une proposition de valeur unique." },
        ] },
        { type: "p", text: "**Innovation et croissance durable** : sortez du cadre traditionnel, imaginez des solutions novatrices, apprenez de l'échec et persévérez. Maintenez toujours la vision de la croissance durable, en accueillant chaque petit progrès avec enthousiasme." },
      ] },
      { h2: "Comment ça fonctionne ?", blocks: [
        { type: "ol", items: [
          "À partir d'une analyse approfondie de votre contexte, ABCM conçoit une recommandation sur-mesure.",
          "Nous tenons compte de vos objectifs, de votre secteur d'activité et de la concurrence.",
          "Notre approche vous permet d'optimiser votre marketing, d'accroître la confiance envers votre entreprise, d'attirer du trafic qualifié, d'améliorer votre visibilité sur internet, de [tirer profit des réseaux sociaux](/limportance-des-reseaux-sociaux-pour-une-pme/) et d'optimiser la relation client.",
        ] },
      ] },
    ],
  },

  "personal-branding": {
    sections: [
      { h2: "Votre image, notre expertise", blocks: [
        { type: "p", text: "Dans un monde complètement connecté, votre image personnelle est votre premier outil pour marquer les esprits et vous démarquer. Que vous soyez entrepreneur, cadre, consultant ou professionnel en quête de visibilité, notre service de personal branding est conçu pour révéler le meilleur de vous-même." },
      ] },
      { h2: "Pourquoi choisir le personal branding ?", blocks: [
        { type: "p", text: "Le [personal branding](/le-personal-branding-c-est-quoi/) génère une visibilité renforcée, affine votre image professionnelle et positionne votre expertise comme une référence dans votre domaine. Ce travail stratégique requiert du temps, des compétences spécifiques et une approche personnalisée." },
        { type: "p", text: "Votre identité professionnelle va bien au-delà d'une simple présence en ligne : elle constitue le pont entre vous et votre audience cible. Grâce à notre expertise en stratégie digitale et en valorisation personnelle, nous façonnons une image cohérente et impactante. Nous créons une présence en ligne engageante et alignée sur vos valeurs, renforçant votre crédibilité et votre attractivité. Chez ABCM, nous co-construisons une stratégie de personal branding sur mesure pour révéler tout votre potentiel et propulser votre visibilité." },
        { type: "columns", cols: [
          { title: "Une identité professionnelle cohérente", text: "Nous structurons votre identité pour qu'elle reflète vos valeurs, vos compétences et vos ambitions, avec une image authentique alignée sur vos objectifs." },
          { title: "Une stratégie de visibilité sur mesure", text: "Du choix des canaux à la création de contenu, chaque étape est pensée pour capter l'attention de votre audience et optimiser votre impact professionnel." },
        ] },
        { type: "p", text: "**Une réputation en ligne maîtrisée** : vous bénéficiez d'une gestion proactive de votre e-réputation, avec des actions ciblées pour renforcer votre crédibilité et bâtir une relation de confiance durable avec vos communautés en ligne." },
      ] },
      { h2: "Pourquoi nous confier votre personal branding ?", blocks: [
        { type: "p", text: "Avec plus de 85 % des professionnels utilisant le digital pour établir leur crédibilité, construire une identité personnelle forte est devenu un élément clé de réussite. S'appuyer sur une expertise en personal branding permet d'assurer une image alignée avec vos valeurs et vos ambitions. Chez ABCM, nous vous aidons à vous démarquer, à attirer les opportunités qui comptent et à renforcer votre positionnement en tant que leader dans votre domaine." },
        { type: "columns", cols: [
          { title: "Une expertise dédiée", text: "Nous maîtrisons les stratégies modernes de personal branding et construisons une identité alignée avec vos valeurs et objectifs, pour vous positionner comme un leader reconnu." },
          { title: "Un accompagnement sur-mesure", text: "Un suivi personnalisé qui s'adapte à vos besoins spécifiques, avec une stratégie unique pour maximiser votre impact auprès de votre audience cible." },
        ] },
        { type: "p", text: "**Des résultats concrets et mesurables** : notre approche intègre des outils d'analyse et des stratégies éprouvées pour garantir une visibilité accrue, une influence renforcée et des opportunités professionnelles adaptées à vos ambitions." },
      ] },
      { h2: "Comment ça fonctionne ?", blocks: [
        { type: "p", text: "À partir d'une analyse approfondie de votre image et de votre présence en ligne actuelle, ABCM élabore une stratégie de personal branding sur-mesure. Nous prenons en compte vos objectifs, vos valeurs, votre secteur d'activité et votre positionnement souhaité. Notre approche vous permet de :" },
        { type: "ul", items: [
          "Structurer une identité professionnelle forte et cohérente, alignée avec vos ambitions.",
          "Renforcer votre crédibilité et votre influence auprès de votre audience cible.",
          "Optimiser votre présence sur les [réseaux sociaux](/community-management/), en mettant en avant votre expertise de manière engageante.",
          "Attirer des opportunités professionnelles clés grâce à un positionnement stratégique.",
          "Développer une relation authentique avec votre communauté, en créant une connexion durable et sincère.",
        ] },
        { type: "p", text: "Chez ABCM, nous mettons à votre disposition les outils et les méthodes nécessaires pour transformer votre image en un levier de succès durable." },
        { type: "p", text: "Notre accompagnement comprend une **stratégie sur-mesure** (personnalisation de votre image pour des résultats concrets), du **coaching** (pour renforcer votre message et gagner en confiance) et des **ateliers d'équipe** (sessions pratiques pour affiner votre communication et votre présence)." },
      ] },
    ],
  },
};

export function serviceContent(slug) {
  return SERVICE_CONTENT[slug] || null;
}
