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
        { type: "p", text: "En plus du référencement naturel (SEO), nous intégrons une stratégie d'AEO (Answer Engine Optimization) pour maximiser votre présence dans les moteurs de recherche et dans les réponses générées par l'IA (comme ChatGPT ou Google SGE). Nous vous aidons à être trouvés, compris et choisis." },
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
          { title: "Une stratégie web rentable", text: "Votre stratégie vous amène du trafic, des prospects et de nouveaux clients, en adéquation avec votre image de marque." },
        ] },
      ] },
      { h2: "Foire aux questions", blocks: [
        { type: "h3", text: "Combien de temps faut-il pour créer un site web ?" },
        { type: "p", text: "Comptez 2 à 3 mois pour un site vitrine simple et 4 à 6 mois pour un site e-commerce, selon la taille de votre site. Dans tous les cas, notre équipe vous annonce une durée avant le démarrage." },
        { type: "h3", text: "Est-ce que je peux avoir accès ensuite au back-office de mon site ?" },
        { type: "p", text: "Vous avez accès à votre site dans son intégralité. Nous vous formons à sa prise en main afin que vous puissiez en modifier le contenu de façon autonome." },
        { type: "h3", text: "Puis-je bénéficier d'un accompagnement stratégique sur le court ou long terme ?" },
        { type: "p", text: "Notre équipe vous accompagne sur toute la partie stratégie web, sur la durée que vous souhaitez. Nous travaillons en partenariat sans engagement, qui vous laisse libre de vos choix : seul le résultat compte chez nous." },
        { type: "h3", text: "Est-ce que vous proposez du community management ?" },
        { type: "p", text: "Tout à fait. Nous avons une équipe de community management dédiée à vos réseaux sociaux, qui s'occupe de toute la [stratégie de contenu](/strategie-de-contenu-2026/) pour vous. Là encore, pas d'engagement : c'est votre satisfaction qui détermine la durée du partenariat." },
        { type: "h3", text: "Est-ce que mon site peut devenir visible sur Google en 2 semaines ?" },
        { type: "p", text: "Nous avons des solutions efficaces pour vous rendre visible dans la page de résultats de Google. Dans ce cas, nous utilisons une stratégie Google Ads. Et si vous misez sur le long terme, nous mettons en place une stratégie de référencement efficace et durable." },
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
          { title: "Un site efficace", text: "Un site que vous pouvez facilement prendre en main pour modifier les contenus quand vous le souhaitez, en toute autonomie. Une fois en ligne, nous pouvons en assurer la [maintenance et l'hébergement](/maintenance-site-web/)." },
        ] },
      ] },
      { h2: "Quelle technologie ?", blocks: [
        { type: "p", text: "Selon vos besoins, nous déterminons ensemble quelle technologie sera la plus adaptée au développement de votre site : **WordPress**, **WooCommerce**, **React** ou **Elementor**." },
      ] },
      { h2: "Questions fréquentes sur la création de site e-commerce", blocks: [
        { type: "h3", text: "Quelle plateforme e-commerce choisir : WooCommerce, Shopify ou PrestaShop ?" },
        { type: "p", text: "Cela dépend de votre catalogue, de vos volumes et de vos besoins de gestion. WooCommerce offre souplesse et maîtrise du SEO, Shopify la simplicité, PrestaShop la robustesse pour de grands catalogues. Nous vous conseillons la solution réellement adaptée à votre projet." },
        { type: "h3", text: "Combien coûte un site e-commerce ?" },
        { type: "p", text: "Nos sites e-commerce démarrent à partir de 3 500 €, selon le nombre de produits, les fonctionnalités et le niveau de personnalisation. Vous recevez un devis détaillé et transparent, sans coûts cachés." },
        { type: "h3", text: "Combien de temps pour créer ma boutique en ligne ?" },
        { type: "p", text: "Comptez généralement 6 à 10 semaines selon la complexité (catalogue, paiement, connexions à vos outils). Nous vous annonçons un planning clair avant de démarrer." },
        { type: "h3", text: "Les paiements sont-ils sécurisés ?" },
        { type: "p", text: "Oui. Nous intégrons des solutions de paiement fiables et sécurisées, conformes aux standards en vigueur, pour rassurer vos clients et protéger vos transactions." },
        { type: "h3", text: "Puis-je gérer mon site et mes produits en autonomie ?" },
        { type: "p", text: "Absolument. Nous vous formons à la prise en main : vous ajoutez et modifiez produits, prix et contenus quand vous le souhaitez. Nous pouvons aussi assurer la maintenance et l'hébergement." },
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
          { title: "Un site actualisé", text: "Si votre site ne ressemble pas à ce que les utilisateurs s'attendent à trouver, vous risquez de ne pas les rassurer. Nous retouchons votre site pour l'optimiser." },
        ] },
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
      { h2: "Questions fréquentes sur la maintenance de site", blocks: [
        { type: "h3", text: "Que comprend un contrat de maintenance ?" },
        { type: "p", text: "Les mises à jour (CMS, thèmes, extensions), les sauvegardes régulières, la surveillance de la sécurité, l'optimisation des performances et la restauration en cas de problème. Nous proposons aussi un hébergement dédié, sécurisé et rapide." },
        { type: "h3", text: "Pourquoi ne pas faire les mises à jour moi-même ?" },
        { type: "p", text: "Vous le pouvez, mais une mise à jour mal maîtrisée peut casser votre site ou ouvrir une faille de sécurité. Nous testons, sauvegardons avant chaque intervention et pouvons restaurer à tout moment : vous gardez l'esprit tranquille." },
        { type: "h3", text: "Sur quels CMS intervenez-vous ?" },
        { type: "p", text: "Principalement WordPress, mais aussi PrestaShop, Drupal et Joomla. Notre hébergement s'adapte à votre CMS." },
        { type: "h3", text: "Que se passe-t-il si mon site tombe en panne ?" },
        { type: "p", text: "Grâce aux sauvegardes quotidiennes, nous restaurons rapidement une version saine de votre site. La maintenance est justement là pour éviter et réparer ce type d'incident." },
        { type: "h3", text: "Suis-je engagé sur la durée ?" },
        { type: "p", text: "Nos formules sont souples et sans engagement rigide : vous restez libre, et c'est la qualité du service qui vous fidélise." },
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
          { title: "Un site reconnu", text: "Apparaître dans les premiers résultats de recherche est un gage de qualité pour les utilisateurs, qui vous feront confiance." },
        ] },
      ] },
      { h2: "Quels types de sites ?", blocks: [
        { type: "p", text: "Nous référençons tous types de sites internet, peu importe la technologie utilisée. Un [audit SEO](/audit-referencement/) du site est toujours effectué en amont, afin de nous assurer qu'il dispose de toutes les capacités pour se positionner correctement. Le cas échéant, nous réalisons une liste de préconisations indispensables pour mettre votre site à jour par rapport aux critères de Google." },
        { type: "p", text: "Nos experts du SEO travaillent avec vous sur une stratégie qui se déploie sur le long terme et dont vous pourrez mesurer les premiers effets au bout de quelques mois." },
      ] },
      { h2: "Notre méthode SEO en 4 étapes", blocks: [
        { type: "p", text: "Le référencement naturel n'a rien de magique : c'est une méthode rigoureuse, transparente, que nous déroulons avec vous." },
        { type: "ol", items: [
          "**Audit & stratégie.** Nous réalisons un audit SEO complet (technique, contenu, concurrence) et définissons ensemble les mots-clés qui vous amènent des clients, pas seulement du trafic.",
          "**Optimisation technique & on-site.** Nous corrigeons les freins techniques (vitesse, indexation, structure, balises, mobile) et optimisons vos pages stratégiques pour Google.",
          "**Contenu & autorité.** Nous produisons ou optimisons vos contenus et renforçons l'autorité de votre site (maillage interne, netlinking de qualité) pour installer votre expertise.",
          "**Suivi & reporting.** Chaque mois, vous recevez un reporting clair (positions, trafic, conversions) et nous ajustons la stratégie en continu.",
        ] },
        { type: "callout", title: "SEO ou Google Ads ?", text: "Le SEO est un investissement durable qui compose sur le long terme ; le [référencement payant (Google Ads)](/agence-sea/) apporte des résultats immédiats. Les deux sont complémentaires : nous vous aidons à trouver le bon dosage selon vos objectifs et votre budget." },
      ] },
      { h2: "Questions fréquentes sur le référencement SEO", blocks: [
        { type: "h3", text: "En combien de temps voit-on les premiers résultats en SEO ?" },
        { type: "p", text: "Comptez généralement 3 à 6 mois pour observer des progressions nettes, et 6 à 12 mois pour installer durablement vos positions sur les requêtes concurrentielles. Le SEO est un travail de fond : les effets s'accumulent et durent dans le temps, contrairement à la publicité qui s'arrête dès que vous coupez le budget." },
        { type: "h3", text: "Combien coûte une prestation de référencement à Strasbourg ?" },
        { type: "p", text: "Le budget dépend de votre secteur, de la concurrence et de vos objectifs. Nous partons toujours d'un audit et d'un devis personnalisé gratuit, sans engagement : vous savez exactement ce que vous payez et pourquoi. Notre priorité, c'est le retour sur investissement, pas les prestations inutiles." },
        { type: "h3", text: "Pouvez-vous garantir la première position sur Google ?" },
        { type: "p", text: "Personne ne peut garantir honnêtement la première position : Google seul décide de son classement, selon des centaines de critères. Ce que nous garantissons, c'est une méthode éprouvée, de la transparence totale et un travail mesurable qui fait progresser durablement votre visibilité." },
        { type: "h3", text: "Travaillez-vous le référencement local à Strasbourg ?" },
        { type: "p", text: "Oui. Nous optimisons votre fiche [Google Business Profile](/comment-utiliser-google-my-business-efficacement/), votre présence sur les requêtes géolocalisées et votre référencement local pour capter les clients de Strasbourg, du Bas-Rhin et de tout le Grand Est." },
        { type: "h3", text: "Faut-il refaire mon site pour améliorer mon référencement ?" },
        { type: "p", text: "Pas nécessairement. L'audit détermine si votre site actuel peut se positionner ou si certains freins techniques justifient une [refonte](/agence-web-strasbourg/). Dans la majorité des cas, nous optimisons l'existant." },
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
        { type: "p", text: "Le GEO s'impose donc comme une stratégie essentielle pour toute entreprise qui souhaite être visible dans ces réponses automatisées, renforcer son autorité en ligne et devancer ses concurrents. En combinant GEO, SEO et AEO, les marques construisent une présence durable et incontournable dans l'écosystème de la recherche de demain." },
        { type: "columns", cols: [
          { title: "Anticipez la transformation de la recherche", text: "La recherche en ligne vit une mutation historique : les IA génératives (ChatGPT, Perplexity, Gemini, Google SGE…) deviennent les nouveaux « moteurs de réponse ». En travaillant votre GEO dès maintenant, vous placez votre marque en position de leader, là où vos concurrents sont encore absents. C'est une opportunité stratégique pour capter de nouveaux canaux de visibilité avant qu'ils ne soient saturés." },
          { title: "Une expertise SEO + IA unique", text: "Notre équipe maîtrise à la fois les fondamentaux du SEO traditionnel et les leviers avancés de l'AEO / GSO / GEO. Nous structurons vos contenus pour qu'ils soient compris, cités et mis en avant par les moteurs génératifs, tout en consolidant votre visibilité sur Google. Cette double approche vous garantit des résultats durables, quelle que soit l'évolution des algorithmes." },
          { title: "Maximisez votre retour sur investissement", text: "Le GEO ne se contente pas d'améliorer votre position, il renforce votre crédibilité, génère du trafic qualifié et multiplie vos points de contact avec vos audiences, dans les environnements IA où les décisions se prennent de plus en plus vite. Avec une stratégie GEO sur mesure, vous obtenez plus de visibilité, plus de leads et une longueur d'avance durable." },
        ] },
      ] },
      { h2: "ABCM, l'expertise GEO qui fait la différence", blocks: [
        { type: "p", text: "Choisir ABCM, c'est faire le pari d'une stratégie d'avance. Notre agence combine expertise technique, vision stratégique et capacité à traduire les évolutions rapides de la recherche en leviers concrets de performance. Nous ne nous contentons pas d'optimiser votre site : nous vous positionnons comme une source incontournable dans les réponses des IA. Ensemble, faisons en sorte que votre marque soit celle que les moteurs génératifs citent, recommandent et mettent en avant." },
      ] },
      { h2: "Notre méthode GEO en 4 étapes", blocks: [
        { type: "ol", items: [
          "**Diagnostic de visibilité IA.** Nous mesurons comment (et si) votre marque est aujourd'hui citée par ChatGPT, Perplexity, Gemini et la recherche générative de Google.",
          "**Structuration des contenus.** Nous rendons vos contenus compréhensibles par les IA : données structurées, réponses claires aux questions clés, entités et sources fiables.",
          "**Autorité & citations.** Nous renforçons les signaux qui poussent les moteurs génératifs à vous citer comme source de référence sur votre thématique.",
          "**Mesure & itération.** Nous suivons votre présence dans les réponses IA et ajustons la stratégie au fil des évolutions rapides de ces moteurs.",
        ] },
      ] },
      { h2: "Questions fréquentes sur le GEO", blocks: [
        { type: "h3", text: "Le GEO remplace-t-il le référencement SEO classique ?" },
        { type: "p", text: "Non, il le prolonge. Le SEO reste indispensable pour Google : les IA génératives s'appuient largement sur des contenus déjà bien référencés. Le GEO ajoute une couche d'optimisation pour être compris et cité par les moteurs de réponse (ChatGPT, Perplexity, Gemini, SGE)." },
        { type: "h3", text: "Comment être cité par ChatGPT ou Perplexity ?" },
        { type: "p", text: "En publiant des contenus fiables, structurés et clairement rattachés à votre expertise, puis en renforçant votre autorité sur le sujet. Les IA privilégient les sources qui répondent précisément à une question et qui sont reconnues ailleurs sur le web. C'est exactement ce que nous travaillons." },
        { type: "h3", text: "Est-ce utile pour une TPE ou une PME locale ?" },
        { type: "p", text: "Oui, et c'est même une opportunité : la plupart de vos concurrents ne travaillent pas encore leur visibilité dans les IA. Vous positionner maintenant vous donne une longueur d'avance sur un canal encore peu saturé." },
        { type: "h3", text: "En combien de temps voit-on des résultats ?" },
        { type: "p", text: "Comme pour le SEO, le GEO est un travail de fond : quelques semaines à quelques mois selon votre point de départ et votre secteur. Nous mesurons régulièrement votre présence dans les réponses générées." },
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
          { title: "Un audit pour se démarquer", text: "Connaître l'existant et le potentiel de votre site est précieux pour se démarquer de la concurrence. Nous analysons également le positionnement de vos concurrents pour vous aider à vous positionner de manière optimale." },
        ] },
      ] },
      { h2: "Comment ça fonctionne ?", blocks: [
        { type: "ol", items: [
          "Nous collectons l'ensemble des accès dont nous avons besoin pour passer votre site en revue.",
          "Nous analysons vos positions actuellement occupées sur Google et listons les mots-clés stratégiques qui vous concernent.",
          "S'ensuit un audit détaillé des optimisations SEO à mettre en place : balises, performances, CSS, JS, mots-clés, contenu, images, etc.",
          "Vous pouvez ensuite faire les travaux vous-même ou nous en confier la gestion. Un rapport de positionnement vous est également remis.",
        ] },
      ] },
      { h2: "Questions fréquentes sur l'audit SEO", blocks: [
        { type: "h3", text: "Que contient exactement votre audit SEO ?" },
        { type: "p", text: "Un audit technique (vitesse, indexation, structure, balises, mobile, erreurs), un audit de contenu et de mots-clés, une analyse de votre positionnement actuel et de celui de vos concurrents, puis une liste priorisée de préconisations concrètes. Vous recevez le tout dans un rapport clair au format PDF." },
        { type: "h3", text: "Combien de temps prend un audit ?" },
        { type: "p", text: "Comptez généralement une à deux semaines entre la collecte des accès et la remise du rapport commenté, selon la taille de votre site." },
        { type: "h3", text: "Dois-je faire l'audit avant de lancer une stratégie SEO ?" },
        { type: "p", text: "C'est vivement recommandé. Un site qui présente des freins techniques ne pourra pas tirer profit d'une stratégie de référencement. L'audit garantit que chaque euro investi ensuite en SEO produit des effets." },
        { type: "h3", text: "Puis-je réaliser les corrections moi-même ?" },
        { type: "p", text: "Absolument. Le rapport est pensé pour être actionnable : vous pouvez appliquer les corrections en interne, ou nous en confier la mise en œuvre. C'est vous qui choisissez." },
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
          { title: "Une communication puissante", text: "Votre communication se dynamise, se diversifie et se renforce pour refléter votre image de marque en B2B comme en B2C, et mettre en avant votre savoir-faire et votre expertise." },
        ] },
        { type: "p", text: "Nos prestations couvrent la **création de contenu**, la **stratégie**, les **publicités** et la **gestion** quotidienne de vos réseaux sociaux." },
      ] },
      { h2: "Comment nous gérons vos réseaux sociaux", blocks: [
        { type: "ol", items: [
          "**Audit & benchmark.** Nous analysons votre présence actuelle, vos concurrents et vos audiences pour repérer les leviers de croissance.",
          "**Stratégie & ligne éditoriale.** Nous définissons vos plateformes prioritaires, vos piliers de contenu et une ligne éditoriale claire.",
          "**Calendrier & création.** Nous produisons visuels, vidéos et textes, planifiés dans un calendrier éditorial validé avec vous.",
          "**Animation & modération.** Nous publions, animons votre communauté et répondons aux messages et commentaires en votre nom.",
          "**Reporting & optimisation.** Chaque mois, un rapport de performance et des recommandations pour progresser.",
        ] },
      ] },
      { h2: "Questions fréquentes sur le community management", blocks: [
        { type: "h3", text: "Sur quels réseaux sociaux intervenez-vous ?" },
        { type: "p", text: "Instagram, Facebook, LinkedIn, TikTok, YouTube, Pinterest, X… Nous vous conseillons les plateformes réellement pertinentes pour votre cible plutôt que d'être partout sans stratégie." },
        { type: "h3", text: "Combien coûte la gestion de mes réseaux sociaux ?" },
        { type: "p", text: "Nous travaillons au forfait mensuel, adapté au nombre de réseaux, à la fréquence de publication et au niveau de contenu souhaité. Le devis est gratuit et sans engagement : c'est votre satisfaction qui détermine la durée du partenariat." },
        { type: "h3", text: "Est-ce que je valide les contenus avant publication ?" },
        { type: "p", text: "Oui. Vous gardez la main : le calendrier éditorial et les contenus vous sont soumis pour validation avant toute publication." },
        { type: "h3", text: "Aurai-je un interlocuteur dédié ?" },
        { type: "p", text: "Oui, un community manager dédié suit votre marque, connaît votre univers et assure une communication cohérente, même quand vos équipes sont débordées." },
        { type: "h3", text: "Produisez-vous aussi des vidéos ?" },
        { type: "p", text: "Bien sûr. Nous réalisons des [vidéos pour les réseaux sociaux](/video-reseaux-sociaux/) (Reels, TikTok, Shorts) qui s'intègrent naturellement à votre stratégie de contenu." },
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
          { title: "Innovation", text: "Reconnus pour notre adaptabilité, nous intégrons les dernières innovations en matière de création vidéo pour garantir votre pertinence et votre avantage concurrentiel. Laissez notre expertise en création de vidéos pour les réseaux sociaux propulser votre entreprise vers de nouveaux sommets, en captivant votre public, en renforçant votre crédibilité et en générant des résultats tangibles." },
        ] },
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
      { h2: "Questions fréquentes sur la vidéo réseaux sociaux", blocks: [
        { type: "h3", text: "Quels formats de vidéos produisez-vous ?" },
        { type: "p", text: "Des formats pensés pour les réseaux : Reels, TikTok, Shorts, stories, formats verticaux 9:16 (16:9 sur demande), avec sous-titres intégrés. Nous adaptons durée et style à chaque plateforme." },
        { type: "h3", text: "Combien de vidéos vais-je recevoir ?" },
        { type: "p", text: "Le pack de base comprend une vidéo principale et un teaser plus court, plus des photos réalisées pendant le tournage. Nous proposons aussi des packs multi-vidéos pour alimenter votre calendrier éditorial sur plusieurs semaines." },
        { type: "h3", text: "Comment se déroule un tournage ?" },
        { type: "p", text: "Un rendez-vous de co-création cadre le message, puis nous tournons (généralement une demi-journée) et montons avec des allers-retours de validation. Simple et sans stress pour vous." },
        { type: "h3", text: "Combien coûte une vidéo pour les réseaux sociaux ?" },
        { type: "p", text: "Nous fonctionnons par packs transparents, adaptés à votre besoin et à votre budget. Le devis est gratuit et détaillé : pas de mauvaise surprise." },
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
          { title: "Innovation", text: "Reconnus pour notre adaptabilité, nous intégrons les dernières innovations en matière de création vidéo pour garantir votre pertinence et votre avantage concurrentiel. Laissez notre expertise renforcer votre réputation en matière de recrutement et de rétention des talents." },
        ] },
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
      { h2: "Questions fréquentes sur la vidéo marque employeur", blocks: [
        { type: "h3", text: "À quoi sert une vidéo marque employeur ?" },
        { type: "p", text: "À montrer la culture, les valeurs et l'ambiance de votre entreprise pour attirer les bons candidats, engager vos équipes et vous différencier sur un marché du recrutement tendu. C'est un atout puissant sur LinkedIn, Instagram ou lors de vos campagnes de recrutement." },
        { type: "h3", text: "Où se déroule le tournage ?" },
        { type: "p", text: "Le plus souvent dans vos locaux, pour capter l'environnement de travail réel et les témoignages de vos collaborateurs. Nous nous adaptons à votre organisation pour limiter l'impact sur votre activité." },
        { type: "h3", text: "Les vidéos sont-elles déclinées pour chaque réseau ?" },
        { type: "p", text: "Oui. Nous livrons des formats adaptés (vertical, horizontal, teaser court) avec sous-titres, prêts à être publiés sur LinkedIn, Instagram, TikTok ou votre site carrière." },
        { type: "h3", text: "Combien coûte une vidéo marque employeur ?" },
        { type: "p", text: "Cela dépend du format, de la durée et du nombre de déclinaisons. Nous établissons un devis clair et adapté à votre budget, sans engagement." },
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
          { title: "Google Display", text: "Grâce à une présence optimale sur le réseau Display, vous augmentez le nombre de visites sur votre site et améliorez votre notoriété." },
        ] },
      ] },
      { h2: "Notre méthode Google Ads en 4 étapes", blocks: [
        { type: "ol", items: [
          "**Audit & stratégie.** Analyse de votre marché, de vos concurrents et de vos objectifs pour définir les campagnes, le ciblage et le budget les plus rentables.",
          "**Création & lancement.** Structuration du compte, rédaction des annonces, choix des mots-clés et des audiences, mise en place du suivi des conversions.",
          "**Optimisation continue.** Nous ajustons quotidiennement enchères, ciblage et annonces pour faire baisser le coût par acquisition et augmenter le retour sur investissement.",
          "**Reporting transparent.** Un tableau de bord clair et un point régulier : vous savez précisément ce que chaque euro investi vous rapporte.",
        ] },
        { type: "callout", title: "Rapide (SEA) ou durable (SEO) ?", text: "Google Ads vous rend visible en quelques jours ; le référencement naturel (SEO) construit une visibilité durable sur le long terme. La combinaison des deux est souvent la stratégie la plus efficace." },
      ] },
      { h2: "Questions fréquentes sur Google Ads", blocks: [
        { type: "h3", text: "Quel budget faut-il pour se lancer sur Google Ads ?" },
        { type: "p", text: "Le budget publicitaire dépend de votre secteur et de vos objectifs, et il reste distinct de nos frais de gestion. Nous définissons ensemble un budget de départ maîtrisé, que nous optimisons ensuite en fonction des résultats. Devis gratuit et sans engagement." },
        { type: "h3", text: "Quelle différence entre Google Ads (SEA) et le référencement naturel (SEO) ?" },
        { type: "p", text: "Le SEA affiche vos annonces en haut de Google contre un budget publicitaire : les résultats sont immédiats mais s'arrêtent quand vous coupez les campagnes. Le SEO fait progresser votre site dans les résultats naturels : plus long à installer, mais durable. Les deux sont complémentaires." },
        { type: "h3", text: "En combien de temps voit-on des résultats ?" },
        { type: "p", text: "Très rapidement : une campagne bien construite génère du trafic qualifié dès les premiers jours. Les semaines suivantes servent à optimiser pour améliorer la rentabilité." },
        { type: "h3", text: "Peut-on cibler uniquement Strasbourg et le Grand Est ?" },
        { type: "p", text: "Oui. Nous ciblons précisément les zones géographiques qui comptent pour vous, de votre quartier à toute la région, pour ne payer que des clics réellement utiles." },
        { type: "h3", text: "Suis-je engagé sur la durée ?" },
        { type: "p", text: "Non. Nous travaillons sans engagement, dans une relation de confiance centrée sur votre retour sur investissement." },
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
          { title: "Mesure & ROI", text: "Nous mettons l'accent sur la mesure des performances et l'analyse des données pour optimiser continuellement nos efforts et garantir un retour sur investissement optimal." },
        ] },
        { type: "columns", cols: [
          { title: "Un marketing expert et souple", text: "Externalisation de la gestion marketing à l'année, sans nécessité d'embauche. Une approche flexible, adaptée aux besoins de votre entreprise." },
          { title: "Vision, stratégie et valeur", text: "Portez un regard externe sur votre entreprise, construisez une vision stratégique et créez une proposition de valeur unique." },
          { title: "Innovation et croissance durable", text: "Sortez du cadre traditionnel, imaginez des solutions novatrices, apprenez de l'échec et persévérez. Maintenez toujours la vision de la croissance durable, en accueillant chaque petit progrès avec enthousiasme." },
        ] },
      ] },
      { h2: "Comment ça fonctionne ?", blocks: [
        { type: "ol", items: [
          "À partir d'une analyse approfondie de votre contexte, ABCM conçoit une recommandation sur-mesure.",
          "Nous tenons compte de vos objectifs, de votre secteur d'activité et de la concurrence.",
          "Notre approche vous permet d'optimiser votre marketing, d'accroître la confiance envers votre entreprise, d'attirer du trafic qualifié, d'améliorer votre visibilité sur internet, de [tirer profit des réseaux sociaux](/limportance-des-reseaux-sociaux-pour-une-pme/) et d'optimiser la relation client.",
        ] },
      ] },
      { h2: "Externaliser ou recruter : le bon calcul", blocks: [
        { type: "p", text: "Recruter un responsable marketing senior en CDI représente un budget lourd et un engagement fort. Le marketing externalisé vous offre la même expertise, sans les contraintes." },
        { type: "table", headers: ["", "Recrutement en CDI", "Marketing externalisé ABCM"], rows: [
          ["Coût", "Salaire chargé à l'année + charges", "Un forfait maîtrisé, ajusté à vos besoins"],
          ["Séniorité", "Selon le profil recruté", "Une équipe expérimentée, immédiatement opérationnelle"],
          ["Délai de démarrage", "Recrutement long (2 à 6 mois)", "Opérationnel en quelques jours"],
          ["Flexibilité", "Poste fixe difficile à ajuster", "Volume d'intervention adaptable, sans engagement"],
          ["Vision", "Regard interne", "Regard externe + veille et bonnes pratiques multi-secteurs"],
        ] },
      ] },
      { h2: "Questions fréquentes sur le marketing externalisé", blocks: [
        { type: "h3", text: "Quelle différence avec une agence classique ou un freelance ?" },
        { type: "p", text: "Nous ne nous contentons pas d'exécuter des tâches : nous pensons la stratégie, la pilotons et coordonnons les actions (y compris vos autres prestataires), comme le ferait un responsable marketing interne, mais en externalisé et flexible." },
        { type: "h3", text: "Est-ce adapté à une TPE ou une PME ?" },
        { type: "p", text: "Oui, c'est même conçu pour elles : vous accédez à une direction marketing senior sans le coût ni l'engagement d'un temps plein, avec un volume d'intervention calibré sur votre taille et vos moyens." },
        { type: "h3", text: "Vais-je garder le contrôle ?" },
        { type: "p", text: "Totalement. Vous restez décideur : nous apportons la vision, les recommandations et l'exécution, mais les arbitrages stratégiques se prennent avec vous, en transparence." },
        { type: "h3", text: "Quel est l'engagement ?" },
        { type: "p", text: "Une relation souple, sans engagement rigide. Nous partons du principe que c'est le résultat qui fidélise, pas le contrat." },
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
          { title: "Une réputation en ligne maîtrisée", text: "Vous bénéficiez d'une gestion proactive de votre e-réputation, avec des actions ciblées pour renforcer votre crédibilité et bâtir une relation de confiance durable avec vos communautés en ligne." },
        ] },
      ] },
      { h2: "Pourquoi nous confier votre personal branding ?", blocks: [
        { type: "p", text: "Avec plus de 85 % des professionnels utilisant le digital pour établir leur crédibilité, construire une identité personnelle forte est devenu un élément clé de réussite. S'appuyer sur une expertise en personal branding permet d'assurer une image alignée avec vos valeurs et vos ambitions. Chez ABCM, nous vous aidons à vous démarquer, à attirer les opportunités qui comptent et à renforcer votre positionnement en tant que leader dans votre domaine." },
        { type: "columns", cols: [
          { title: "Une expertise dédiée", text: "Nous maîtrisons les stratégies modernes de personal branding et construisons une identité alignée avec vos valeurs et objectifs, pour vous positionner comme un leader reconnu." },
          { title: "Un accompagnement sur-mesure", text: "Un suivi personnalisé qui s'adapte à vos besoins spécifiques, avec une stratégie unique pour maximiser votre impact auprès de votre audience cible." },
          { title: "Des résultats concrets et mesurables", text: "Notre approche intègre des outils d'analyse et des stratégies éprouvées pour garantir une visibilité accrue, une influence renforcée et des opportunités professionnelles adaptées à vos ambitions." },
        ] },
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
      { h2: "Questions fréquentes sur le personal branding", blocks: [
        { type: "h3", text: "À qui s'adresse le personal branding ?" },
        { type: "p", text: "Aux dirigeants, entrepreneurs, cadres, consultants et experts qui veulent gagner en visibilité, asseoir leur crédibilité et attirer les bonnes opportunités (clients, talents, partenaires, médias) grâce à une image professionnelle forte, notamment sur LinkedIn." },
        { type: "h3", text: "Écrivez-vous les contenus à ma place ?" },
        { type: "p", text: "Selon votre préférence, nous fonctionnons en accompagnement rédigé pour vous (à partir d'échanges réguliers) ou en coaching, où nous vous aidons à structurer et à publier vous-même. Dans tous les cas, la ligne reste authentique et fidèle à votre voix." },
        { type: "h3", text: "Combien de temps dois-je y consacrer ?" },
        { type: "p", text: "Volontairement peu : quelques échanges par mois suffisent. Notre rôle est de faire gagner du temps à des dirigeants occupés, en prenant en charge la stratégie, la production et le suivi." },
        { type: "h3", text: "En combien de temps voit-on des résultats ?" },
        { type: "p", text: "Les premiers signaux (engagement, visibilité, prises de contact) apparaissent généralement en quelques semaines. Une présence forte et une image de référence se construisent sur plusieurs mois de régularité." },
        { type: "h3", text: "Quelle différence avec la communication de mon entreprise ?" },
        { type: "p", text: "La communication d'entreprise porte votre marque ; le personal branding porte votre voix de dirigeant. Or un message personnel engage bien davantage qu'une page entreprise : les deux se renforcent mutuellement." },
      ] },
    ],
  },
};

export function serviceContent(slug) {
  return SERVICE_CONTENT[slug] || null;
}
