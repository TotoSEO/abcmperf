// Contenu sémantique éditorial par fiche formation (SEO + lecture).
// Structure : { [slug]: { sections: [ { h2, blocks: [...] } ] } }
// Blocs supportés : p, h3, ul, ol, table, columns, callout (cf. RichContent.jsx).
// Rédigé sur-mesure par formation (recherche concurrentielle + plan), puis nettoyé.

export const FORMATION_CONTENT = {
  "formation-savoir-utiliser-chat-gpt-pour-ameliorer-sa-productivite": {
    "sections": [
      {
        "h2": "Pourquoi se former à ChatGPT et à l'IA générative ?",
        "blocks": [
          {
            "type": "p",
            "text": "L'IA générative, ce sont des assistants conversationnels comme **ChatGPT** ou **Claude** capables de produire du texte, des synthèses ou des idées à partir d'une simple consigne formulée en langage naturel. On leur parle comme à un collègue, et ils répondent en quelques secondes. Cette accessibilité explique leur adoption massive : aujourd'hui, presque tout le monde a déjà ouvert un de ces outils."
          },
          {
            "type": "p",
            "text": "Le problème n'est donc plus l'accès, mais la méthode. La grande majorité des utilisateurs avancent à l'instinct, sans cadre ni repères. Les résultats s'en ressentent : ils sont aléatoires, parfois bluffants, souvent décevants, et l'on finit par sous-exploiter un outil pourtant puissant. L'usage spontané plafonne vite, précisément parce qu'il repose sur l'essai-erreur plutôt que sur une démarche."
          },
          {
            "type": "p",
            "text": "Cette absence de méthode a un coût bien réel. Un prompt imprécis génère une réponse hors sujet que l'on retravaille à la main. Une réponse erronée, glissée dans un document sans vérification, peut se retrouver devant un client ou une direction. Et une donnée sensible copiée sans précaution dans un outil grand public pose une vraie question de confidentialité. Au bout du compte, on perd le temps que l'IA était censée faire gagner."
          },
          {
            "type": "p",
            "text": "C'est là qu'une formation change la donne par rapport à un apprentissage autodidacte. Elle apporte une méthode de prompting reproductible, un cadre de confiance pour savoir quand faire confiance à l'outil et quand vérifier, et surtout une intégration durable de l'IA dans vos routines de travail, au-delà de la curiosité des premiers jours."
          },
          {
            "type": "p",
            "text": "ABCM Performances propose cette formation en présentiel à Strasbourg comme en visio, animée par une formatrice expérimentée. Organisme certifié Qualiopi, elle est finançable via votre OPCO ou votre plan de développement des compétences, en format intra comme inter-entreprise."
          }
        ]
      },
      {
        "h2": "Quels gains de productivité concrets selon votre métier ?",
        "blocks": [
          {
            "type": "p",
            "text": "L'intérêt de l'IA générative ne se mesure pas dans l'absolu, mais sur vos tâches réelles. Voici un panorama par fonction des usages où le gain de temps est le plus tangible. Les ordres de grandeur restent qualitatifs : ils dépendent de vos volumes et de votre niveau de maîtrise, ce que la formation aide précisément à faire progresser."
          },
          {
            "type": "table",
            "caption": "Tâches accélérées par l'IA générative selon la fonction",
            "headers": [
              "Métier / fonction",
              "Tâches accélérées par l'IA",
              "Gain observé"
            ],
            "rows": [
              [
                "Communication & marketing",
                "Rédaction de contenus, posts, fiches produits",
                "Temps de rédaction fortement réduit"
              ],
              [
                "Direction & management",
                "Synthèses de réunions, comptes-rendus, notes de cadrage",
                "Plusieurs heures gagnées chaque semaine"
              ],
              [
                "Commercial",
                "E-mails de prospection personnalisés, relances, réponses types",
                "Meilleur taux de réponse, moins de temps de préparation"
              ],
              [
                "Support & relation client",
                "Reformulation, réponses contextualisées, FAQ",
                "Traitement plus rapide des demandes"
              ],
              [
                "Tout profil",
                "Analyse et résumé de documents et données textuelles (avis, rapports, e-mails)",
                "Décisions plus rapides, lecture allégée"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Le fil conducteur est simple : sur l'ensemble des tâches concernées, c'est souvent **plusieurs heures par semaine** qui se libèrent. Ce temps n'est pas une fin en soi, c'est du temps réinvesti là où l'humain fait la différence : la relation, l'arbitrage, la qualité finale. C'est cette rentabilité, mesurée sur vos propres dossiers, qui justifie l'effort d'une montée en compétence structurée."
          }
        ]
      },
      {
        "h2": "ChatGPT ou Claude : quel outil d'IA générative choisir ?",
        "blocks": [
          {
            "type": "p",
            "text": "C'est sans doute la question la plus posée, et elle est mal formulée. Il n'existe pas de \"meilleur\" outil dans l'absolu : il y a celui qui convient le mieux à une tâche donnée. ChatGPT et Claude partagent les mêmes fondations, mais leurs forces respectives orientent naturellement les usages."
          },
          {
            "type": "columns",
            "cols": [
              {
                "title": "ChatGPT",
                "items": [
                  "Écosystème riche : extensions, génération d'images, recherche web intégrée",
                  "Idéal pour la production rapide et les contenus courts",
                  "Très polyvalent pour les tâches du quotidien",
                  "Pratique quand on veut un seul outil couvrant un large spectre"
                ]
              },
              {
                "title": "Claude",
                "items": [
                  "Grande fenêtre de contexte : il digère de longs documents d'un seul tenant",
                  "Raisonnement suivi, adapté à l'analyse approfondie",
                  "Pertinent pour les rédactions exigeantes et nuancées",
                  "À l'aise sur les tâches longues qui demandent de la cohérence"
                ]
              }
            ]
          },
          {
            "type": "p",
            "text": "Le bon réflexe n'est donc pas de trancher une fois pour toutes, mais de choisir selon la tâche. Beaucoup d'organisations combinent les deux : ChatGPT pour aller vite au quotidien, Claude pour les dossiers volumineux et les écrits soignés. Savoir comparer les outils et sélectionner celui qui convient à chaque besoin fait partie des compétences travaillées en formation."
          },
          {
            "type": "callout",
            "title": "Points de vigilance communs aux deux outils",
            "text": "Quel que soit l'outil retenu, trois réflexes restent indispensables : protéger la confidentialité des données que vous saisissez, vérifier systématiquement les réponses avant de les diffuser, et encadrer les usages au sein de l'équipe pour éviter les dérapages. Ce cadre de confiance est abordé tout au long de la journée."
          }
        ]
      },
      {
        "h2": "Questions fréquentes sur la formation ChatGPT et IA générative",
        "blocks": [
          {
            "type": "h3",
            "text": "Faut-il des compétences techniques pour suivre la formation ?"
          },
          {
            "type": "p",
            "text": "Non, aucun prérequis technique n'est demandé. On part de vos usages métier et de vos tâches concrètes, pas de notions informatiques. Si vous savez utiliser une messagerie et un traitement de texte, vous avez tout ce qu'il faut."
          },
          {
            "type": "h3",
            "text": "ChatGPT et Claude sont-ils adaptés à un usage professionnel et confidentiel ?"
          },
          {
            "type": "p",
            "text": "Oui, sous conditions. Tout dépend des données que vous y saisissez et du paramétrage retenu. La formation aborde précisément ce cadre de confiance et les bonnes pratiques à adopter pour travailler sereinement, sans exposer d'informations sensibles."
          },
          {
            "type": "h3",
            "text": "Quelle différence avec une simple prise en main autodidacte ?"
          },
          {
            "type": "p",
            "text": "L'autodidaxie permet de découvrir l'outil, rarement de le maîtriser. La formation apporte une méthode de prompting, des cas d'usage adaptés à votre métier et des modèles de prompts réutilisables que vous repartez avec, prêts à l'emploi sur vos propres tâches."
          },
          {
            "type": "h3",
            "text": "Peut-on se former en intra (équipe) comme en inter-entreprises ?"
          },
          {
            "type": "p",
            "text": "Oui, les deux formats sont possibles, en présentiel à Strasbourg ou à distance en visio. Le format intra permet d'adapter les exemples au contexte précis de votre équipe et de vos outils."
          },
          {
            "type": "h3",
            "text": "Au bout de combien de temps voit-on un retour sur investissement ?"
          },
          {
            "type": "p",
            "text": "Très vite. Les gains de temps apparaissent dès les premières mises en pratique sur vos propres tâches, pendant la journée même. C'est l'un des atouts de l'IA générative : le bénéfice est immédiat et se vérifie sur des cas réels, pas sur des promesses."
          }
        ]
      }
    ]
  },
  "formation-booster-ses-ecrits-professionnels-avec-lia": {
    "sections": [
      {
        "h2": "Écrits professionnels et IA : de quoi parle-t-on et pourquoi se former ?",
        "blocks": [
          {
            "type": "p",
            "text": "Quand on parle de **rédaction assistée par l'IA**, on désigne l'usage d'un assistant rédactionnel reposant sur l'IA générative : un outil qui aide à produire un brouillon, à reformuler une phrase, à structurer un document ou à résumer une masse d'informations. Le mot important reste « aide ». L'IA propose, suggère et accélère, mais elle ne remplace pas l'auteur. C'est vous qui portez l'intention, le contexte et la responsabilité de ce qui est envoyé ou signé."
          },
          {
            "type": "p",
            "text": "Pour bien s'en servir, il faut distinguer ce que ces outils font remarquablement bien de ce qu'ils ne savent pas faire seuls. Ils excellent sur les tâches de forme et de mise en mouvement : rédiger un premier jet, reformuler un message trop sec, condenser un long échange en synthèse, corriger une tournure, changer de ton pour passer d'un registre direct à un registre diplomate. En revanche, ils ne jugent pas la pertinence d'une décision à votre place, ne garantissent pas l'exactitude d'une information et ne connaissent ni vos enjeux internes ni l'intention réelle derrière votre message. Confondre les deux, c'est s'exposer à des textes plausibles mais faux, ou parfaitement écrits mais hors-sujet."
          },
          {
            "type": "p",
            "text": "D'où l'intérêt de se former plutôt que d'utiliser l'IA au hasard. Un prompt lancé sans méthode donne souvent un texte générique, fade, qui ressemble à tout le monde et qu'il faut entièrement réécrire : le temps soi-disant gagné est perdu en relecture. Une pratique structurée, à l'inverse, fait gagner du temps réel sur les tâches répétitives, **homogénéise la qualité** des écrits dans une équipe et réduit les erreurs. On passe d'un usage intuitif et un peu hasardeux à une pratique cadrée et fiable."
          },
          {
            "type": "p",
            "text": "Le contexte explique cet engouement : l'IA s'est invitée très vite dans la production des e-mails, des comptes-rendus et des notes en entreprise, souvent sans cadre ni règles communes. Or un usage professionnel suppose justement une méthode, des repères de fiabilité et une vigilance sur les données. C'est précisément ce que cette formation propose de construire."
          }
        ]
      },
      {
        "h2": "Quels écrits professionnels automatiser avec l'IA ? Cas d'usage concrets",
        "blocks": [
          {
            "type": "p",
            "text": "L'IA n'a pas le même intérêt selon le type de document. Sur certains écrits, elle fait gagner un temps considérable ; sur d'autres, elle sert surtout à clarifier ou à homogénéiser. Voici les usages les plus utiles au quotidien, avec à chaque fois le bénéfice principal et le point de vigilance à garder en tête."
          },
          {
            "type": "table",
            "caption": "Cas d'usage de l'IA par type d'écrit professionnel",
            "headers": [
              "Type d'écrit",
              "Ce que l'IA apporte",
              "Bénéfice principal",
              "Point de vigilance"
            ],
            "rows": [
              [
                "E-mail professionnel",
                "Reformuler un brouillon, adapter le ton (cordial, ferme, diplomate), produire des réponses types",
                "Temps gagné au quotidien",
                "Garder une formulation personnelle, ne pas paraître robotique"
              ],
              [
                "Compte-rendu de réunion",
                "Transformer des notes brutes en CR structuré, dégager décisions et actions",
                "Clarté et structure",
                "Vérifier que rien d'important n'est déformé ou oublié"
              ],
              [
                "Note de synthèse / rapport",
                "Condenser une masse d'informations, structurer un plan, produire un résumé exécutif",
                "Gain de temps sur la mise en forme",
                "Contrôler l'exactitude des données reprises"
              ],
              [
                "Procédure et mode opératoire",
                "Rédiger des étapes claires et homogènes, créer des modèles réutilisables",
                "Homogénéité des documents",
                "Valider chaque étape avec un référent métier"
              ],
              [
                "Contenus et supports",
                "Trames, argumentaires, posts, idées de plan",
                "Démarrage rapide",
                "Conserver le ton et l'identité de l'organisation"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Un constat se dégage de ce tableau : plus le document est répétitif et balisé (e-mail courant, procédure, trame), plus l'IA fait gagner du temps. Plus il engage une décision ou une information sensible (rapport, compte-rendu officiel), plus la relecture humaine reste indispensable. Savoir où placer le curseur fait partie des réflexes travaillés en formation."
          }
        ]
      },
      {
        "h2": "Bien utiliser l'IA pour ses écrits : fiabilité, confidentialité et style",
        "blocks": [
          {
            "type": "p",
            "text": "Utiliser l'IA pour écrire suppose quelques règles simples mais non négociables. Ce sont elles qui font la différence entre un usage amateur et une pratique réellement professionnelle, fiable et conforme."
          },
          {
            "type": "h3",
            "text": "Cinq réflexes pour un usage professionnel"
          },
          {
            "type": "ol",
            "items": [
              "**Vérifier et relire systématiquement.** L'IA peut produire des erreurs ou des affirmations inventées de toutes pièces (ce que l'on appelle des hallucinations). Aucun texte généré ne part sans une relecture humaine.",
              "**Protéger la confidentialité.** On ne saisit pas de données sensibles, personnelles ou stratégiques dans un outil grand public. La vigilance RGPD est de mise : un nom de client, un chiffre confidentiel ou un document interne n'ont rien à faire dans une fenêtre de chat publique.",
              "**Garder sa voix et son exigence.** Le texte généré est un point de départ, pas un produit fini. On le personnalise, on retire le ton générique, on l'ajuste à son style et à son destinataire. L'écrit final reste le vôtre.",
              "**Choisir le bon outil selon la sensibilité du contenu.** Un brouillon d'e-mail anodin peut passer par un outil gratuit ; un document confidentiel appelle une solution maîtrisée par l'entreprise, avec des garanties sur le traitement des données.",
              "**Adopter une posture d'auteur augmenté.** L'IA assiste, l'humain décide, valide et signe. La responsabilité de ce qui est écrit ne se délègue jamais à la machine."
            ]
          },
          {
            "type": "p",
            "text": "Ces bonnes pratiques ne sont pas des freins : ce sont les conditions d'un usage serein et durable. Elles permettent de profiter pleinement de l'IA sans exposer l'organisation à un risque juridique, à une fuite d'information ou à une perte de crédibilité."
          },
          {
            "type": "callout",
            "title": "Se former avec ABCM Performances",
            "text": "Cette formation se déroule en présentiel à Strasbourg ou à distance en visio, en intra ou en inter-entreprise, avec une formatrice expérimentée. Organisme certifié **Qualiopi**, ABCM Performances permet un financement via votre OPCO ou le plan de développement des compétences. L'objectif : repartir avec une méthode et vos propres modèles, pas seulement quelques astuces."
          }
        ]
      }
    ]
  },
  "formation-decouverte-de-lia": {
    "sections": [
      {
        "h2": "L'IA en entreprise : de quoi parle-t-on vraiment ?",
        "blocks": [
          {
            "type": "p",
            "text": "Tout le monde parle d'intelligence artificielle, peu de gens savent vraiment la définir. Dans les faits, l'IA désigne un ensemble de techniques qui permettent à une machine d'accomplir des tâches que l'on associait jusqu'ici à l'intelligence humaine : reconnaître une image, traduire un texte, recommander un produit, répondre à une question. Rien de magique, et surtout rien qui exige un bagage technique pour en saisir le principe."
          },
          {
            "type": "p",
            "text": "Ce que la plupart des gens appellent \"l'IA\" aujourd'hui, c'est en réalité **l'IA générative** : ChatGPT, DALL·E et leurs cousins, capables de produire du texte ou des images à partir d'une simple consigne. C'est une famille parmi d'autres, la plus visible parce que la plus accessible. Confondre l'une avec l'autre, c'est un peu comme confondre \"voiture\" et \"automobile électrique\" : la seconde n'est qu'une déclinaison de la première."
          },
          {
            "type": "callout",
            "title": "Trois idées reçues à déconstruire",
            "text": "**\"L'IA va remplacer les emplois.\"** Elle transforme surtout des tâches, rarement des métiers entiers. Les profils qui savent s'en servir prennent l'avantage sur ceux qui l'ignorent.\n\n**\"L'IA, c'est réservé aux ingénieurs.\"** Les outils grand public se pilotent en langage naturel, sans une ligne de code. La vraie compétence n'est pas technique, elle est méthodologique.\n\n**\"L'IA est toujours fiable.\"** Faux : un modèle peut affirmer une erreur avec aplomb. C'est précisément pourquoi l'esprit critique reste indispensable."
          },
          {
            "type": "p",
            "text": "Il y a une nuance qui change tout : utiliser un outil et comprendre ce qu'il fait sont deux choses différentes. On peut taper une question dans ChatGPT et obtenir une réponse correcte par intuition. Mais sans une vraie acculturation, on ne sait pas pourquoi le résultat est bon ou mauvais, ni quand s'en méfier. C'est cette compréhension partagée que vise une démarche de découverte, pas seulement le réflexe de cliquer."
          },
          {
            "type": "p",
            "text": "Pour s'y retrouver, quelques termes reviennent sans cesse dès qu'on parle d'IA en entreprise. En voici l'essentiel, en clair."
          },
          {
            "type": "table",
            "caption": "Mini-glossaire des termes utiles au quotidien",
            "headers": [
              "Terme",
              "Ce qu'il signifie concrètement"
            ],
            "rows": [
              [
                "IA générative",
                "Une IA qui crée du contenu (texte, image, son) à partir d'une consigne, plutôt que de simplement classer ou prédire."
              ],
              [
                "Prompt",
                "L'instruction que vous donnez à l'outil. Sa qualité conditionne directement celle de la réponse."
              ],
              [
                "Modèle de langage",
                "Le moteur entraîné sur d'immenses volumes de texte qui permet à l'outil de comprendre et de générer du langage."
              ],
              [
                "Hallucination",
                "Une réponse inventée mais présentée comme vraie. Le piège le plus courant, et la première raison de toujours vérifier."
              ],
              [
                "Automatisation",
                "Le fait de déléguer à une machine des tâches répétitives, pour libérer du temps sur ce qui a vraiment de la valeur."
              ]
            ]
          },
          {
            "type": "p",
            "text": "Dernier point, et non des moindres : une vision partagée par toute l'équipe vaut bien mieux que quelques pionniers isolés. Quand seuls deux ou trois passionnés s'emparent du sujet, le reste du collectif décroche, et les usages se fragmentent. Quand tout le monde parle le même langage, l'IA devient un vrai levier commun plutôt qu'un gadget réservé à une poignée d'initiés."
          }
        ]
      },
      {
        "h2": "Pourquoi sensibiliser ses équipes à l'IA dès maintenant ?",
        "blocks": [
          {
            "type": "p",
            "text": "La question n'est plus de savoir si l'IA va entrer dans votre entreprise : elle y est probablement déjà. Le vrai sujet, c'est de savoir si vos équipes l'utilisent de façon éclairée ou à tâtons. Et sur ce point, le décalage est frappant."
          },
          {
            "type": "h3",
            "text": "Un écart d'adoption qui se creuse"
          },
          {
            "type": "p",
            "text": "Beaucoup d'entreprises voient déjà des outils d'IA s'inviter dans le quotidien de leurs collaborateurs. Mais très peu ont réellement formé leurs équipes à ces outils. Résultat : un usage généralisé sur le terrain, sans cadre ni méthode partagée. C'est exactement le type d'écart qu'une sensibilisation collective vient combler."
          },
          {
            "type": "h3",
            "text": "Les risques d'une IA non encadrée"
          },
          {
            "type": "ul",
            "items": [
              "Le **shadow AI** : des outils adoptés en douce, hors de tout cadre, sans que personne ne sache vraiment qui utilise quoi.",
              "Le partage de données sensibles dans des outils grand public, avec les questions de confidentialité que cela soulève.",
              "Une perte de confiance dans les résultats, quand chacun bricole sans savoir vérifier ce que l'IA produit."
            ]
          },
          {
            "type": "h3",
            "text": "Un enjeu de conformité qui monte"
          },
          {
            "type": "p",
            "text": "Avec la montée en charge de l'AI Act au niveau européen et les exigences du RGPD, sensibiliser ses équipes n'est plus seulement une bonne idée : cela devient une bonne pratique attendue. Comprendre ce qu'on peut confier à un outil, et ce qu'on doit en garder, fait désormais partie des réflexes professionnels de base."
          },
          {
            "type": "h3",
            "text": "Le bon moment, et le bon ordre"
          },
          {
            "type": "p",
            "text": "L'erreur classique consiste à déployer des outils d'abord, et à former ensuite, quand les mauvaises habitudes sont déjà prises. L'ordre logique est l'inverse : acculturer avant d'outiller. Une équipe sensibilisée accepte mieux les nouveaux outils, baisse la garde face à ses réticences, et monte en compétence de façon homogène plutôt qu'à deux vitesses. C'est tout l'intérêt d'une formation de découverte menée par un organisme certifié Qualiopi : poser des bases saines, communes, avant de passer à l'échelle."
          }
        ]
      },
      {
        "h2": "Lever les craintes : faire de l'IA une opportunité pour toute l'équipe",
        "blocks": [
          {
            "type": "p",
            "text": "Derrière l'enthousiasme de certains, il y a souvent, chez d'autres, une vraie inquiétude. Et c'est normal. Faire l'impasse sur ces craintes, c'est risquer de braquer une partie de l'équipe avant même d'avoir commencé. Mieux vaut les nommer ouvertement."
          },
          {
            "type": "p",
            "text": "Les trois peurs qui reviennent le plus souvent sont la crainte d'être remplacé par la machine, le sentiment d'être dépassé ou \"pas assez technique\", et la méfiance vis-à-vis de résultats qu'on ne sait pas évaluer. Ces réactions ne sont pas des freins à contourner, ce sont des points de départ. Une fois posées et discutées, elles laissent place à la curiosité."
          },
          {
            "type": "p",
            "text": "C'est précisément là qu'une formation collective change la donne. En réunissant l'équipe autour des mêmes notions, on crée un langage commun et on désamorce le sentiment d'isolement : personne ne se retrouve seul face à ses doutes. Chacun voit que ses collègues se posent les mêmes questions, et la dynamique de groupe transforme l'appréhension en énergie d'apprentissage."
          },
          {
            "type": "p",
            "text": "Au cœur de cette démarche, il y a une posture à cultiver : la posture critique. L'enjeu n'est pas de faire confiance aveuglément à l'outil, mais d'apprendre à vérifier, à recouper, à garder l'humain dans la boucle. Une IA propose, c'est l'utilisateur qui décide. Ce réflexe, une fois acquis, vaut pour n'importe quel outil futur, bien au-delà de ceux d'aujourd'hui."
          },
          {
            "type": "p",
            "text": "Pour que tout cela s'ancre vraiment, le contenu doit coller au quotidien des participants. Adapter le rythme et choisir des cas d'usage tirés du métier réel de l'équipe (marketing, RH, gestion, relation client) fait toute la différence entre une découverte abstraite et un déclic concret. On ne parle plus de l'IA en général, on parle de votre travail."
          },
          {
            "type": "p",
            "text": "Le format intra-entreprise est le meilleur terrain pour cette appropriation partagée. Jusqu'à huit participants, en présentiel à Strasbourg ou en visio, toute l'équipe avance ensemble, au même rythme, sur ses propres exemples. Animée par une formatrice expérimentée et finançable via l'OPCO, la session devient autant un moment d'acculturation qu'un moment d'équipe, et c'est souvent là que naît l'envie d'aller plus loin."
          }
        ]
      }
    ]
  },
  "formation-reseaux-sociaux": {
    "sections": [
      {
        "h2": "Community management et stratégie réseaux sociaux : de quoi parle-t-on ?",
        "blocks": [
          {
            "type": "p",
            "text": "Le **community management** consiste à animer, fédérer et modérer une communauté autour d'une marque sur les réseaux sociaux. Concrètement, c'est répondre aux commentaires, lancer des conversations, publier au bon moment et veiller à ce que l'image de l'entreprise reste cohérente, au quotidien. La stratégie social media, elle, se situe un cran au-dessus : elle décide des objectifs, des cibles, des plateformes prioritaires et du message à porter."
          },
          {
            "type": "p",
            "text": "Dans les faits, deux métiers cohabitent. Le community manager exécute et fait vivre la communauté ; le social media manager arbitre et fixe le cap. Qui décide, qui exécute : la frontière est nette dans les grandes structures, beaucoup plus floue ailleurs. En TPE, en PME et chez les indépendants, la même personne porte souvent les deux casquettes. C'est précisément pour cette raison qu'une formation utile doit couvrir la stratégie ET l'animation, et non l'une sans l'autre."
          },
          {
            "type": "p",
            "text": "Pourquoi se former en 2026 ? Parce qu'une présence amateur se voit immédiatement et qu'elle dessert une marque autant que l'absence de présence. Les algorithmes, les formats et les codes évoluent vite : ce qui fonctionnait hier sur une plateforme peut être pénalisé demain. Se former, c'est gagner du temps, éviter les fausses bonnes idées et viser un vrai retour sur la visibilité et la prospection, plutôt que de publier sans méthode. Notre programme articule justement ces deux dimensions, stratégie et animation, pour que vous repartiez avec un cadre exploitable dès le lundi suivant."
          }
        ]
      },
      {
        "h2": "Les outils du community manager : planifier, publier, veiller, mesurer",
        "blocks": [
          {
            "type": "p",
            "text": "Animer une présence sociale ne se fait pas à la main, onglet par onglet. Un community manager s'appuie sur une boîte à outils qui couvre quatre grands besoins : programmer ses publications, créer des contenus, surveiller ce qui se dit, et mesurer ce qui marche. Voici les familles d'outils que nous abordons et resituons selon vos usages."
          },
          {
            "type": "table",
            "caption": "Les quatre familles d'outils du community manager",
            "headers": [
              "Besoin",
              "Exemples d'outils",
              "Ce que vous y gagnez"
            ],
            "rows": [
              [
                "Planifier et publier sur plusieurs réseaux",
                "Meta Business Suite, Buffer, Later, Swello, Agorapulse",
                "Programmer à l'avance, garder un calendrier cohérent et tenir le rythme sans y passer ses journées"
              ],
              [
                "Créer des visuels et des vidéos",
                "Canva, CapCut, Adobe Express",
                "Produire des contenus propres et au bon format, même sans bagage graphique (voir nos formations dédiées)"
              ],
              [
                "Veiller et surveiller son e-réputation",
                "Feedly, Google Alertes, écoute des mentions",
                "Savoir ce qui se dit de vous et de votre secteur, réagir vite et nourrir vos idées de contenu"
              ],
              [
                "Mesurer et rendre compte",
                "Statistiques natives des plateformes, tableaux de bord",
                "Suivre l'engagement et la portée, identifier ce qui fonctionne et ajuster vos KPIs"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Un point important : la formation est volontairement **outil-agnostique**. Nous ne vous imposons pas une suite logicielle. Si vous utilisez déjà un planificateur ou un outil de design, nous travaillons avec, et nous vous aidons à en tirer le meilleur. L'objectif n'est pas de collectionner les abonnements, mais de bâtir une routine de publication, de veille et de reporting qui tient dans la durée."
          }
        ]
      },
      {
        "h2": "À qui s'adresse cette formation et quels résultats en attendre ?",
        "blocks": [
          {
            "type": "p",
            "text": "Cette formation s'adresse à toute personne qui doit faire vivre une présence sociale sans forcément en avoir fait son métier d'origine."
          },
          {
            "type": "ul",
            "items": [
              "Chargés de communication qui veulent structurer leur approche plutôt que naviguer à vue",
              "Commerciaux et indépendants qui cherchent à transformer leur visibilité en contacts",
              "Dirigeants de TPE et PME qui pilotent eux-mêmes leur communication",
              "Personnes en reconversion qui visent le métier de community manager"
            ]
          },
          {
            "type": "p",
            "text": "Au-delà des profils, ce sont surtout des situations concrètes que nous traitons. Lancer la présence d'une marque qui part de zéro, reprendre en main une communauté existante un peu laissée à elle-même, professionnaliser une page entreprise qui ressemble encore à un compte personnel, ou articuler proprement vos réseaux avec votre site et votre blog pour que tout se renforce."
          },
          {
            "type": "p",
            "text": "Sur le fond, vous repartez avec des compétences durables : tenir une ligne éditoriale claire, installer une régularité de publication, gagner en réactivité dans les échanges, et savoir gérer votre e-réputation, y compris dans les situations de crise où chaque réponse compte."
          },
          {
            "type": "callout",
            "title": "Les modalités ABCM Performances",
            "text": "Formation en présentiel à Strasbourg ou à distance en visio, en intra comme en inter-entreprise. Organisme certifié Qualiopi, finançable via votre OPCO ou le plan de développement des compétences. Vous êtes accompagné par une formatrice expérimentée, sur des cas proches de votre réalité professionnelle."
          },
          {
            "type": "p",
            "text": "Quels résultats viser ? Un gain de visibilité réel sur les plateformes pertinentes pour vous, un engagement de communauté qui s'installe, et à terme une contribution mesurable à la génération de prospects. Pas de promesse magique : une méthode, des outils et une régularité qui, mis bout à bout, font la différence."
          }
        ]
      }
    ]
  },
  "formation-linkedin": {
    "sections": [
      {
        "h2": "Social selling : qu'est-ce que c'est et pourquoi se former en 2026 ?",
        "blocks": [
          {
            "type": "p",
            "text": "Le **social selling** consiste à créer une relation avec un prospect via LinkedIn, plutôt que de chercher à lui vendre quelque chose dès le premier contact. Concrètement, vous nourrissez vos contacts avec du contenu utile, vous participez à des échanges authentiques et vous vous rendez visible auprès des bons interlocuteurs. La vente devient la conséquence d'une confiance installée dans la durée, et non d'une sollicitation isolée."
          },
          {
            "type": "p",
            "text": "C'est là toute la différence avec la prospection classique et le cold calling. L'appel à froid interrompt une personne qui ne vous attend pas et démarre par une demande. Le social selling, lui, repose sur une approche relationnelle : vous existez déjà dans le paysage du prospect, vous avez apporté de la valeur avant de proposer quoi que ce soit. Une logique d'attraction qui remplace une logique d'intrusion."
          },
          {
            "type": "p",
            "text": "Pourquoi se former maintenant ? Parce que la majorité du parcours d'achat B2B se déroule en ligne avant même le premier échange avec un commercial. Vos prospects se renseignent, comparent et se forgent une opinion seuls. Si vous n'êtes pas présent et crédible à ce moment-là, vous n'êtes tout simplement pas dans la course."
          },
          {
            "type": "p",
            "text": "Le contexte réglementaire renforce cette bascule. L'extension de l'interdiction du démarchage téléphonique au B2B, prévue en mars 2026, ferme une porte que beaucoup d'équipes utilisaient encore. Structurer une prospection LinkedIn moderne n'est plus une option de confort, c'est une nécessité pour continuer à générer des rendez-vous."
          },
          {
            "type": "p",
            "text": "Les bénéfices sont concrets et documentés : les social sellers actifs génèrent en moyenne près de 45 % d'opportunités supplémentaires et sont nettement plus susceptibles d'atteindre leurs quotas que ceux qui n'adoptent pas la démarche. Chez ABCM Performances, l'objectif est précisément de vous rendre autonome sur une compétence durable et mesurable, transposable dès votre retour en poste."
          }
        ]
      },
      {
        "h2": "Le Social Selling Index (SSI) : mesurer et piloter sa performance sur LinkedIn",
        "blocks": [
          {
            "type": "p",
            "text": "Le grand atout du social selling, c'est qu'il se mesure. LinkedIn met à disposition un indicateur dédié, le **Social Selling Index (SSI)**, un score sur 100 qui évalue l'efficacité de votre démarche. Il est accessible gratuitement depuis votre propre compte et se met à jour quotidiennement, ce qui en fait un repère idéal pour piloter vos efforts."
          },
          {
            "type": "h3",
            "text": "Les quatre piliers du SSI"
          },
          {
            "type": "p",
            "text": "Le score se décompose en quatre dimensions, chacune notée sur 25 points :"
          },
          {
            "type": "ul",
            "items": [
              "**Construire sa marque professionnelle** : la qualité et la complétude de votre profil, perçu comme celui d'un expert et non d'un CV en ligne",
              "**Trouver les bonnes personnes** : votre capacité à identifier et cibler les bons interlocuteurs grâce aux outils de recherche",
              "**Échanger des informations** : la pertinence du contenu que vous publiez et partagez, et son écho auprès de votre réseau",
              "**Développer des relations** : la solidité de votre réseau, en particulier auprès des décideurs"
            ]
          },
          {
            "type": "p",
            "text": "À quoi sert ce score concrètement ? À trois choses : vous situer face à votre secteur et votre réseau, identifier précisément vos points faibles, et suivre votre progression dans le temps. Un pilier à la traîne vous indique exactement où porter l'effort."
          },
          {
            "type": "h3",
            "text": "Les leviers travaillés en formation"
          },
          {
            "type": "p",
            "text": "Améliorer son SSI ne tient pas du hasard. Cela passe par un profil optimisé, un réseau de décideurs ciblé, une publication régulière et un engagement réel (commentaires pertinents, messages personnalisés). L'apport d'un outil comme **LinkedIn Sales Navigator** prend ici tout son sens pour cibler finement vos prospects et qualifier votre approche. Un score SSI élevé corrèle clairement avec un volume d'opportunités généré plus important : c'est ce lien entre action et résultat que la formation vous apprend à activer."
          }
        ]
      },
      {
        "h2": "Prospection LinkedIn : bonnes pratiques vs erreurs à éviter",
        "blocks": [
          {
            "type": "p",
            "text": "Une bonne prospection LinkedIn tient souvent à des détails de méthode. Voici, point par point, ce qui sépare une approche qui fonctionne d'une approche qui agace et fait fuir."
          },
          {
            "type": "table",
            "caption": "Ce qui fonctionne face à ce qui dessert votre prospection",
            "headers": [
              "Bonne pratique",
              "Erreur fréquente"
            ],
            "rows": [
              [
                "Invitation personnalisée et contextualisée, qui montre pourquoi vous écrivez à cette personne",
                "Invitation de masse non ciblée, identique pour tout le monde"
              ],
              [
                "Apporter de la valeur (contenu, conseil, mise en relation) avant de proposer une offre",
                "Message commercial dès le premier contact, sans relation préalable"
              ],
              [
                "Régularité et engagement authentique : commentaires, réponses, présence dans le fil",
                "Automatisation abusive et messages en série assimilés à du spam"
              ],
              [
                "Ciblage de décideurs qualifiés et segmentation par profil ou secteur",
                "Approche générique adressée « à tout le monde » sans tri"
              ],
              [
                "Suivi et nurturing dans la durée, même après un premier refus",
                "Relance brutale, puis abandon dès qu'un prospect ne répond pas"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Un principe résume bien l'esprit de la démarche : le principe de Pareto. Environ **20 % d'actions bien choisies** (les bons contacts, les bons messages, les bons contenus) produisent l'essentiel des résultats. L'enjeu n'est pas d'en faire plus, mais de concentrer son énergie là où elle compte vraiment, sans s'épuiser dans une activité brouillonne."
          }
        ]
      },
      {
        "h2": "À qui s'adresse la formation et financements possibles",
        "blocks": [
          {
            "type": "p",
            "text": "Cette formation s'adresse à toute personne qui veut transformer LinkedIn en véritable canal d'opportunités, quel que soit son métier. Selon votre fonction, le bénéfice prend une forme différente."
          },
          {
            "type": "columns",
            "cols": [
              {
                "title": "Profils visés",
                "items": [
                  "Commerciaux et ingénieurs commerciaux qui veulent alimenter leur pipeline",
                  "Indépendants et dirigeants en quête de visibilité et de leads",
                  "Recruteurs et fonctions marketing soucieux de sourcing et de marque"
                ]
              },
              {
                "title": "Bénéfice par profil",
                "items": [
                  "Commercial : un pipeline régulier et des prises de contact qualifiées",
                  "Indépendant ou dirigeant : une visibilité accrue qui génère des demandes entrantes",
                  "Recruteur : un sourcing plus efficace et une marque employeur renforcée"
                ]
              }
            ]
          },
          {
            "type": "p",
            "text": "Côté organisation, la formation s'adapte à votre contexte : en présentiel à Strasbourg ou en visio, en inter ou en intra-entreprise, sur une durée modulable de 1 à 2 jours selon votre niveau de départ et vos objectifs."
          },
          {
            "type": "callout",
            "title": "Financement et prochaine étape",
            "text": "ABCM Performances est un organisme certifié **Qualiopi**, ce qui ouvre la prise en charge via votre **OPCO** ou le plan de développement des compétences de votre entreprise. Vous souhaitez un parcours calibré sur votre situation ? Demandez un programme personnalisé ou un devis adapté à votre niveau de départ, et construisons ensemble la formation qui vous fera passer à l'action sur LinkedIn."
          }
        ]
      }
    ]
  },
  "formation-capcut": {
    "sections": [
      {
        "h2": "Pourquoi se former au montage vidéo vertical pour les réseaux sociaux ?",
        "blocks": [
          {
            "type": "p",
            "text": "La vidéo verticale, c'est le format 9:16 qui occupe tout l'écran d'un smartphone tenu droit, sans bandes noires ni rotation. C'est devenu le format roi de Reels, Shorts et TikTok, et ce n'est pas un hasard : nous tenons notre téléphone à la verticale dans la quasi-totalité de nos usages quotidiens. Une vidéo conçue pour cet axe occupe donc le maximum d'espace visuel et capte l'attention là où elle se joue vraiment, dans le pouce qui fait défiler."
          },
          {
            "type": "p",
            "text": "Au-delà du confort de visionnage, ce format est mécaniquement avantagé. Les algorithmes de ces plateformes mettent en avant les contenus natifs verticaux et les vidéos qui retiennent l'attention quelques secondes de plus. Résultat : une portée organique réelle, sans budget publicitaire, là où un visuel statique ou un simple post texte plafonne vite. La vidéo se partage aussi plus spontanément, ce qui démultiplie sa diffusion au-delà de votre audience directe."
          },
          {
            "type": "p",
            "text": "Le vrai enjeu d'une formation, ce n'est pas d'apprendre à manier un logiciel : c'est de gagner en **autonomie**. Produire en interne, c'est publier régulièrement plutôt que d'attendre un prestataire pour chaque vidéo, réagir vite à une actualité ou une tendance, et tenir une cohérence de marque dans la durée. Pour un community manager, un entrepreneur ou un freelance, cette réactivité change tout : la régularité compte souvent davantage que la perfection technique d'une vidéo isolée."
          },
          {
            "type": "p",
            "text": "C'est précisément l'objet de cette formation animée par ABCM Performances, organisme certifié Qualiopi à Strasbourg, en présentiel ou à distance en visio : vous rendre capable de produire seul, vite et bien, des vidéos qui servent votre activité."
          }
        ]
      },
      {
        "h2": "Quels formats et durées pour Reels, Shorts et TikTok ?",
        "blocks": [
          {
            "type": "p",
            "text": "Une bonne vidéo mal calibrée perd la moitié de son potentiel. Chaque plateforme a ses repères de ratio, de résolution et surtout de durée, là où l'attention se joue. Voici les réglages de référence à connaître avant de monter."
          },
          {
            "type": "table",
            "caption": "Repères techniques par plateforme pour la vidéo verticale",
            "headers": [
              "Plateforme",
              "Ratio",
              "Résolution recommandée",
              "Durée la plus performante"
            ],
            "rows": [
              [
                "Instagram Reels",
                "9:16",
                "1080 x 1920 px",
                "15 à 30 s"
              ],
              [
                "TikTok",
                "9:16",
                "1080 x 1920 px",
                "21 à 34 s (jusqu'à 10 min possibles)"
              ],
              [
                "YouTube Shorts",
                "9:16",
                "1080 x 1920 px",
                "15 à 180 s (3 min max)"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Le point à retenir : une même base de production en **1080 x 1920 px, exportée en MP4 / H.264**, fonctionne partout. Vous montez une fois, puis vous adaptez la durée et l'accroche à chaque réseau plutôt que de repartir de zéro. C'est ce socle technique unique que vous mettrez en pratique en atelier, sur vos propres réglages."
          }
        ]
      },
      {
        "h2": "CapCut gratuit, Standard ou Pro : quelle version pour vos vidéos ?",
        "blocks": [
          {
            "type": "p",
            "text": "C'est la question que se pose tout futur stagiaire : faut-il payer pour produire des vidéos correctes ? La réponse courte est non, pas pour débuter. Mais l'offre a évolué, et certaines fonctions autrefois gratuites sont passées derrière un abonnement. Voici comment s'y retrouver."
          },
          {
            "type": "table",
            "caption": "Comparatif des versions CapCut sur les critères qui comptent",
            "headers": [
              "Critère",
              "Gratuit",
              "Standard / Pro"
            ],
            "rows": [
              [
                "Filigrane à l'export",
                "Présent sur certains templates",
                "Export sans filigrane"
              ],
              [
                "Qualité d'export",
                "1080p",
                "Jusqu'à 4K"
              ],
              [
                "Templates et effets",
                "Bibliothèque de base",
                "Templates et effets premium"
              ],
              [
                "Sous-titres automatiques",
                "Non inclus (abonnement requis)",
                "Inclus"
              ],
              [
                "Outils IA avancés",
                "Limités",
                "Upscaling, suppression d'arrière-plan en lot"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Le point d'actualité à connaître : les **sous-titres automatiques** ne font plus partie de la version gratuite et nécessitent désormais un abonnement payant. Cela ne vous empêche pas de sous-titrer vos vidéos, mais c'est un arbitrage à avoir en tête, car les sous-titres sont quasi indispensables sur des contenus regardés sans le son."
          },
          {
            "type": "callout",
            "title": "Notre conseil",
            "text": "Commencez en gratuit : la version de base couvre l'essentiel des besoins vus en formation et suffit largement pour publier régulièrement. Passez à une version payante seulement si trois usages reviennent souvent chez vous : sous-titres automatiques en volume, export en 4K, ou recours intensif aux fonctions IA et aux templates premium. Inutile de vous engager dans un abonnement récurrent avant d'en avoir le besoin réel."
          }
        ]
      },
      {
        "h2": "Quels types de vidéos créer après la formation ?",
        "blocks": [
          {
            "type": "p",
            "text": "Une fois autonome, le plus dur n'est pas de monter, c'est de savoir quoi raconter. Les vidéos courtes qui performent partagent quelques principes simples : une accroche forte dans les trois premières secondes, un rythme soutenu qui ne laisse pas le pouce défiler, et des sous-titres systématiques puisque la majorité des vues se font sans le son."
          },
          {
            "type": "p",
            "text": "À partir de là, plusieurs formats éprouvés s'adaptent à presque tous les profils :"
          },
          {
            "type": "ul",
            "items": [
              "Présentation de produit ou de service : montrer concrètement ce que vous proposez, en situation",
              "Coulisses et behind-the-scenes : humaniser votre marque en montrant l'envers du décor",
              "Témoignage ou avis client (UGC) : la preuve sociale qui rassure et convertit",
              "Tutoriel ou astuce métier : démontrer votre expertise en rendant service",
              "Teaser d'événement : créer l'attente avant un lancement, un salon ou une date clé"
            ]
          },
          {
            "type": "p",
            "text": "Grâce au format 9:16 unique, une même vidéo source se décline en Reel, Short et TikTok sans tout refaire : vous multipliez votre présence sans multiplier le travail. C'est cette logique de production efficace, et le rythme de publication régulier qu'elle rend possible, que vous éprouverez en réalisant une vidéo complète pendant l'atelier pratique de la formation."
          }
        ]
      }
    ]
  },
  "formation-canva": {
    "sections": [
      {
        "h2": "Canva, c'est quoi ? Et pourquoi se former plutôt qu'apprendre seul",
        "blocks": [
          {
            "type": "p",
            "text": "Canva est une plateforme de design graphique en ligne qui permet de créer des visuels sans aucune compétence préalable en graphisme. En 2026, c'est devenu bien plus qu'une banque de modèles : une véritable suite de création qui couvre les réseaux sociaux, le print, la présentation et la vidéo, le tout depuis un simple navigateur. On y travaille à plusieurs, on y stocke ses ressources, on y exporte dans tous les formats. Cette accessibilité est sa grande force, mais c'est aussi ce qui crée un malentendu."
          },
          {
            "type": "p",
            "text": "Savoir cliquer dans Canva et produire un visuel réellement professionnel sont deux choses différentes. La plateforme met des milliers de modèles à portée de main, mais elle ne décide pas à votre place de la **hiérarchie visuelle**, de la lisibilité d'un message, du bon contraste entre un texte et son fond, ni de la cohérence entre deux polices. Un visuel qui fonctionne repose sur des choix typographiques et colorimétriques maîtrisés. C'est précisément ce qui sépare un support qui inspire confiance d'un support qui sent l'amateurisme, alors même que les deux ont été faits avec le même outil."
          },
          {
            "type": "p",
            "text": "C'est là qu'une formation structurée change la donne par rapport aux tutos gratuits. Les vidéos en ligne montrent comment réaliser un effet précis, rarement comment penser un visuel de bout en bout. On y apprend des gestes isolés, pas une méthode. Résultat : on accumule des astuces sans jamais gagner en autonomie réelle, et on tombe dans les pièges classiques, comme reprendre un modèle tel quel sans l'adapter à son identité. Une formation vous fait passer du bricolage à une démarche reproductible, applicable à n'importe quel support."
          },
          {
            "type": "p",
            "text": "Le bénéfice est concret pour votre activité : vous reprenez la main sur votre communication, vous gagnez du temps au quotidien et vous réduisez votre dépendance à un prestataire externe pour les visuels du quotidien. La formation reste accessible sans prérequis, mais sa vraie valeur tient à l'accompagnement : une formatrice expérimentée corrige vos productions, répond à vos questions sur vos propres projets et accélère ce qu'un parcours en solitaire mettrait des mois à consolider. Chez ABCM Performances, organisme certifié Qualiopi à Strasbourg, cet apprentissage se fait en présentiel ou à distance en visio, dans un cadre qui sécurise aussi le financement."
          }
        ]
      },
      {
        "h2": "À quoi sert Canva au quotidien : cas d'usage par métier et par support",
        "blocks": [
          {
            "type": "p",
            "text": "La meilleure façon de comprendre l'intérêt de Canva, c'est de regarder ce qu'il permet de produire, et pour qui. La plateforme couvre une large palette de supports, du web au print, et répond à des besoins très différents selon les services. Le tableau ci-dessous donne un aperçu des usages les plus fréquents."
          },
          {
            "type": "table",
            "caption": "Exemples de supports réalisables avec Canva selon le service concerné.",
            "headers": [
              "Service ou profil",
              "Supports concrets",
              "Objectif"
            ],
            "rows": [
              [
                "Marketing / Communication",
                "Posts et carrousels réseaux sociaux, bannières, infographies",
                "Diffuser des messages cohérents et attractifs"
              ],
              [
                "Ressources humaines",
                "Offres d'emploi, supports d'onboarding, livrets d'accueil",
                "Soigner la marque employeur et l'intégration"
              ],
              [
                "Commerce",
                "Brochures, flyers, propositions et présentations clients",
                "Appuyer la vente avec des documents soignés"
              ],
              [
                "Direction",
                "Présentations stratégiques, pitch decks, rapports illustrés",
                "Convaincre et structurer un propos"
              ],
              [
                "Indépendant / TPE",
                "Identité visuelle, signatures email, affiches, vidéos courtes",
                "Créer soi-même sans budget agence"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Une idée transverse mérite d'être soulignée : avec Canva, un même contenu se décline facilement en plusieurs formats. Un visuel pensé pour un post Instagram peut être redimensionné pour une story, une bannière de site ou une affiche imprimée, sans tout recommencer. Cette logique de déclinaison est ce qui garantit une communication cohérente entre vos canaux web et print, là où beaucoup d'entreprises se retrouvent avec des supports disparates."
          },
          {
            "type": "p",
            "text": "Pour les TPE-PME et les entrepreneurs de la région strasbourgeoise, c'est un levier d'autonomie particulièrement adapté : on internalise la production des supports courants, on réagit vite, et on réserve l'agence aux projets vraiment stratégiques. La formation se cale d'ailleurs sur vos besoins réels, en travaillant sur vos propres supports plutôt que sur des exemples abstraits."
          }
        ]
      },
      {
        "h2": "L'IA et le Brand Kit : ce que Canva sait faire en 2026",
        "blocks": [
          {
            "type": "p",
            "text": "C'est sans doute le domaine où Canva a le plus évolué. La plateforme intègre désormais des fonctions d'intelligence artificielle générative qui changent la vitesse de production, à condition de savoir les piloter. Voici les usages les plus utiles au quotidien."
          },
          {
            "type": "ul",
            "items": [
              "**Génération de mises en page automatiques** : à partir d'une idée ou d'un texte, Canva propose des compositions prêtes à ajuster, pour démarrer sans page blanche.",
              "**Rédaction et reformulation de textes** : générer un accroche, raccourcir un paragraphe ou adapter le ton directement dans le visuel.",
              "**Génération et retouche d'images** : créer une illustration sur mesure, détourer un sujet ou effacer un élément gênant en quelques clics.",
              "**Redimensionnement automatique multi-formats** : transformer un visuel en une dizaine de formats adaptés à chaque canal sans refaire la mise en page."
            ]
          },
          {
            "type": "h3",
            "text": "Le Brand Kit : rester cohérent sur tous les supports"
          },
          {
            "type": "p",
            "text": "L'autre fonction décisive est l'espace marque, ou Brand Kit. Il centralise vos logos, vos couleurs et vos polices au même endroit, pour que chaque création reste fidèle à votre identité visuelle. Concrètement, vous produisez plus vite tout en restant **on brand**, et vous pouvez verrouiller certains éléments afin que vos équipes ne dévient pas de la charte. Fini les nuances de bleu approximatives ou les polices qui changent d'un document à l'autre."
          },
          {
            "type": "h3",
            "text": "Les bonnes pratiques techniques que l'on oublie souvent"
          },
          {
            "type": "p",
            "text": "Produire vite ne suffit pas si le fichier final est inexploitable. Quelques réflexes professionnels font toute la différence : choisir le bon export selon la destination (résolution et DPI pour le print, poids maîtrisé pour le web), comprendre la différence entre les modes colorimétriques RVB et CMJN, gérer la transparence, et veiller à la lisibilité comme à l'accessibilité des visuels. Ce sont des points rarement abordés dans les tutos, et pourtant déterminants pour un rendu vraiment professionnel."
          },
          {
            "type": "p",
            "text": "Notre positionnement sur l'IA est clair : elle est un accélérateur, pas un substitut au sens du message. La formation vous apprend à l'utiliser pour gagner du temps sur l'exécution, tout en gardant la main sur l'intention, le ton et la cohérence de ce que vous communiquez."
          }
        ]
      },
      {
        "h2": "Financer sa formation Canva et faire reconnaître ses compétences",
        "blocks": [
          {
            "type": "p",
            "text": "Le coût et la reconnaissance sont souvent les deux derniers freins avant de se lancer. Sur ces deux points, le cadre est plus simple qu'il n'y paraît."
          },
          {
            "type": "p",
            "text": "Côté financement, plusieurs dispositifs sont mobilisables. Pour les salariés et les entreprises, l'OPCO et le plan de développement des compétences permettent généralement de prendre en charge tout ou partie de la formation. Cet accès aux financements est conditionné par la certification Qualiopi, que détient ABCM Performances. Côté reconnaissance, il existe des certifications Canva officielles, comme la certification professionnelle inscrite au répertoire spécifique, qui constitue une preuve de compétence valorisable sur un CV ou un profil professionnel."
          },
          {
            "type": "callout",
            "title": "Concrètement, comment se former avec ABCM Performances",
            "text": "La formation Canva se déroule en présentiel à Strasbourg ou à distance en visio, au choix. Elle existe en format inter-entreprise (vous rejoignez un groupe) ou en intra-entreprise (une session dédiée à votre équipe, sur vos propres supports). Le programme et le rythme s'adaptent à votre niveau et à vos objectifs. Pour un parcours sur mesure et un devis personnalisé, le plus simple reste de nous contacter : nous calibrons ensemble la formule qui correspond à votre équipe et à vos besoins."
          }
        ]
      }
    ]
  },
  "formation-adobe-express": {
    "sections": [
      {
        "h2": "Adobe Express, c'est quoi et pourquoi se former ?",
        "blocks": [
          {
            "type": "p",
            "text": "Adobe Express est un outil de création graphique en ligne, accessible depuis un navigateur ou une application mobile. Édité par Adobe, il a été pensé pour les personnes qui ne sont **pas graphistes** : on part de modèles prêts à l'emploi, et on les adapte. Pas de logiciel lourd à installer, pas de courbe d'apprentissage décourageante comme avec Photoshop ou Illustrator. L'idée est simple : produire des visuels propres, professionnels et cohérents sans avoir besoin d'un studio de création derrière soi."
          },
          {
            "type": "p",
            "text": "C'est un outil qui parle à beaucoup de profils : community managers, chargés de communication, entrepreneurs et indépendants, équipes marketing ou RH, mais aussi toutes les TPE et PME qui n'ont pas de graphiste dédié et qui doivent quand même alimenter leurs réseaux, leurs supports print et leurs présentations. Si vous vous reconnaissez dans l'une de ces situations, Adobe Express coche la plupart des cases du quotidien."
          },
          {
            "type": "p",
            "text": "Reste une question légitime : pourquoi suivre une formation plutôt que d'apprendre seul, dans son coin, à coups de tutoriels ? Parce qu'apprendre seul mène souvent à deux écueils. Le premier, c'est l'effet « template » : on prend un modèle, on change deux mots, et le résultat ressemble à celui de tout le monde. Le second, c'est de ne jamais sortir des fonctions de base, en ignorant tout ce qui fait vraiment gagner du temps. Se former, c'est gagner une autonomie réelle, structurer une méthode et exploiter les fonctions avancées trop souvent laissées de côté."
          },
          {
            "type": "p",
            "text": "Le bénéfice concret est facile à mesurer dans votre activité : vous créez en interne, plus vite, et vous réduisez le recours à un prestataire pour tous les visuels du quotidien. Vous gardez la main sur votre image, sans dépendre de délais ni d'allers-retours."
          },
          {
            "type": "callout",
            "title": "Côté pratique",
            "text": "Aucun prérequis n'est demandé : la pédagogie est centrée sur la pratique, sur vos propres supports. La formation est dispensée par ABCM Performances, organisme certifié **Qualiopi** à Strasbourg, en présentiel ou à distance (visio), et reste éligible au financement OPCO ou au plan de développement des compétences."
          }
        ]
      },
      {
        "h2": "L'IA générative au cœur d'Adobe Express : ce que change Adobe Firefly",
        "blocks": [
          {
            "type": "p",
            "text": "C'est sans doute l'atout qui distingue le plus Adobe Express aujourd'hui : l'intelligence artificielle générative d'Adobe, baptisée Firefly, est intégrée directement dans l'outil. Concrètement, elle déplace une partie du travail créatif et accélère des tâches qui prenaient autrefois beaucoup de temps."
          },
          {
            "type": "ul",
            "items": [
              "**Génération d'images à partir d'un texte** (text-to-image) : vous décrivez ce que vous voulez, Firefly produit le visuel, sans quitter Adobe Express.",
              "Retouche assistée : suppression d'arrière-plan, remplissage génératif, extension d'image ou nettoyage d'un élément gênant, le tout en quelques clics.",
              "Génération et réécriture de texte pour accompagner vos visuels et trouver le bon angle d'accroche.",
              "Cohérence de marque assistée par l'IA : aide au choix d'une palette, des polices et déclinaison automatique sur plusieurs formats.",
              "Un cadre pensé pour un usage professionnel : des images conçues pour un usage commercial, avec la vigilance qui s'impose sur les droits, la fiabilité et la vérification."
            ]
          },
          {
            "type": "p",
            "text": "L'enjeu, en formation, n'est pas d'apprendre à « cliquer sur générer ». C'est d'intégrer l'IA dans un **workflow de création réel** : savoir quand l'utiliser, comment rédiger une consigne efficace, comment retravailler ce que la machine propose et, surtout, comment garder un œil critique sur le résultat. L'IA est un accélérateur, pas un pilote automatique, et c'est précisément cette nuance que la pratique permet d'acquérir."
          }
        ]
      },
      {
        "h2": "Cas d'usage : quels visuels créer avec Adobe Express ?",
        "blocks": [
          {
            "type": "p",
            "text": "Au-delà des fonctionnalités, la vraie question est souvent : « concrètement, qu'est-ce que je vais pouvoir produire ? » La polyvalence d'Adobe Express tient à sa capacité à couvrir des supports très différents, du web au papier, avec un même outil."
          },
          {
            "type": "ul",
            "items": [
              "**Réseaux sociaux** : posts, stories, carrousels, visuels animés et formats adaptés aux contraintes de chaque plateforme.",
              "**Print** : flyers, affiches, cartes de visite, menus et tous les supports destinés à l'impression.",
              "**Vidéo courte** : intros, sous-titres et animations simples pour vos Reels, Shorts et TikTok.",
              "**Communication interne et commerciale** : présentations, infographies, newsletters et signatures d'e-mail.",
              "**Identité de marque** : décliner un même visuel sur plusieurs formats en conservant la cohérence du logo, des couleurs et des polices."
            ]
          },
          {
            "type": "p",
            "text": "C'est aussi tout l'intérêt de se former sur ses propres besoins : pendant la session, chaque participant travaille sur ses supports réels. On ne repart pas avec des exercices abstraits, mais avec des visuels directement réutilisables dans son activité."
          }
        ]
      },
      {
        "h2": "Adobe Express ou Canva : comment choisir ?",
        "blocks": [
          {
            "type": "p",
            "text": "C'est la comparaison qui revient le plus souvent, et c'est une bonne question. Les deux outils visent le même objectif, créer des visuels sans être designer, mais ils n'ont pas tout à fait le même tempérament."
          },
          {
            "type": "p",
            "text": "Adobe Express s'intègre naturellement à l'écosystème Adobe : Creative Cloud, polices et banque d'images Adobe, et bien sûr l'IA Firefly. C'est un atout évident si vous utilisez déjà des outils Adobe. Canva, de son côté, mise sur un catalogue de modèles plus large, une collaboration très poussée et une prise en main idéale pour débuter."
          },
          {
            "type": "table",
            "caption": "Adobe Express et Canva : les principaux points de comparaison.",
            "headers": [
              "Critère",
              "Adobe Express",
              "Canva"
            ],
            "rows": [
              [
                "Modèles",
                "Bibliothèque solide et qualitative",
                "Catalogue plus large et varié"
              ],
              [
                "IA générative",
                "Firefly intégré (images, texte, retouche)",
                "Fonctions IA présentes, écosystème distinct"
              ],
              [
                "Écosystème",
                "Connecté à Adobe (Creative Cloud, polices, stock)",
                "Univers Canva autonome"
              ],
              [
                "Collaboration",
                "Partage et retours en équipe",
                "Collaboration très aboutie"
              ],
              [
                "Export",
                "Print, réseaux, présentations, vidéo",
                "Print, réseaux, présentations, vidéo"
              ],
              [
                "Prise en main",
                "Accessible, atout pour les habitués d'Adobe",
                "Très intuitive pour débuter"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Pour choisir, regardez d'abord ce qui est déjà en place : les outils utilisés dans votre entreprise, vos besoins en IA, le volume de modèles dont vous avez besoin, votre façon de travailler en équipe et votre budget. Dans bien des cas, c'est l'écosystème déjà installé qui tranche."
          },
          {
            "type": "callout",
            "title": "Notre conseil",
            "text": "En pédagogie, les deux outils se valent : chez ABCM Performances, le contenu et la qualité de formation sont équivalents, encadrés par une formatrice expérimentée. Choisissez l'outil qui colle à votre environnement, pas l'inverse. Si Canva correspond mieux à votre contexte, notre formation Canva couvre exactement la même exigence de qualité."
          }
        ]
      }
    ]
  },
  "formation-marketing-digital-webmarketing-strasbourg": {
    "sections": [
      {
        "h2": "Marketing digital et webmarketing : de quoi parle-t-on ?",
        "blocks": [
          {
            "type": "p",
            "text": "Avant de bâtir une stratégie, il faut s'entendre sur les mots. Le **marketing digital** désigne l'ensemble des techniques qui servent à promouvoir une marque, un produit ou un service à travers les canaux numériques. C'est une définition large, qui englobe le web bien sûr, mais aussi le mobile, l'e-mailing, l'automation, la donnée et, de plus en plus, les objets connectés."
          },
          {
            "type": "p",
            "text": "Le **webmarketing**, lui, est plus resserré : il se concentre sur le web au sens strict, c'est-à-dire votre site, le référencement naturel, les réseaux sociaux et la publicité en ligne. On peut donc voir le webmarketing comme une composante du marketing digital, et non comme un synonyme parfait. Dans la pratique, les deux termes se recoupent largement et sont souvent employés l'un pour l'autre, ce qui n'a rien de gênant tant qu'on sait de quel périmètre on parle."
          },
          {
            "type": "p",
            "text": "Une idée reçue mérite d'être levée tout de suite : le marketing digital n'est pas une rupture avec le marketing traditionnel, mais son prolongement connecté. Les fondamentaux restent les mêmes (connaître sa cible, construire une offre claire, choisir le bon message au bon moment). Ce qui change, ce sont les canaux, la rapidité du feedback et la finesse de mesure."
          },
          {
            "type": "p",
            "text": "Concrètement, à qui cela s'adresse-t-il ? Aux TPE et PME qui veulent développer leur visibilité, aux indépendants qui gèrent eux-mêmes leur présence en ligne, et aux services marketing et communication qui pilotent un site, des campagnes ou des réseaux sociaux. Dès lors que votre activité a un point de contact numérique avec ses clients, le sujet vous concerne."
          }
        ]
      },
      {
        "h2": "Pourquoi se former au marketing digital aujourd'hui ?",
        "blocks": [
          {
            "type": "p",
            "text": "La question revient souvent : pourquoi consacrer deux journées à se former quand l'information circule partout en ligne ? Parce que le vrai enjeu n'est pas de connaître des outils isolés, mais de savoir les articuler dans une démarche cohérente et rentable. Voici ce qu'une montée en compétences structurée vous apporte concrètement."
          },
          {
            "type": "ul",
            "items": [
              "**Rester à jour dans un domaine mouvant** : les plateformes, les algorithmes et les bonnes pratiques évoluent en permanence. Se former, c'est se donner une grille de lecture stable pour ne pas courir derrière chaque nouveauté.",
              "**Des bénéfices business tangibles** : une audience élargie, des coûts mieux maîtrisés que la publicité traditionnelle, un trafic plus qualifié et, au bout du compte, des campagnes plus rentables.",
              "**Gagner en autonomie** : comprendre les leviers vous permet de piloter votre stratégie et vos prestataires en connaissance de cause, plutôt que de subir des choix techniques que vous ne maîtrisez pas.",
              "**Mesurer et prouver le retour sur investissement** : on passe d'actions dispersées et difficiles à justifier à une démarche pilotée par les données, où chaque euro investi peut être suivi.",
              "**Valoriser son profil** : les compétences digitales sont recherchées dans tous les secteurs, et leur maîtrise renforce nettement l'employabilité."
            ]
          },
          {
            "type": "p",
            "text": "Chez ABCM Performances, organisme certifié **Qualiopi** à Strasbourg, cette formation se suit en présentiel ou à distance en visio, en format intra ou inter-entreprise, et reste finançable via votre OPCO. L'accompagnement par une formatrice expérimentée permet d'ancrer ces bénéfices dans votre propre contexte plutôt que sur des cas théoriques."
          }
        ]
      },
      {
        "h2": "Bien choisir et combiner ses leviers d'acquisition",
        "blocks": [
          {
            "type": "p",
            "text": "Une fois la stratégie posée, vient le moment de choisir ses leviers. C'est souvent là que les arbitrages se compliquent, car chaque canal a sa logique. L'erreur classique consiste à les opposer (SEO contre publicité, par exemple) alors qu'ils répondent à des besoins différents et se complètent. Le tableau ci-dessous donne des repères de décision avant d'entrer dans le détail technique de chaque canal."
          },
          {
            "type": "table",
            "caption": "Repères de comparaison des principaux leviers d'acquisition",
            "headers": [
              "Levier",
              "Délai de résultats",
              "Budget type",
              "Nature du trafic",
              "Durabilité"
            ],
            "rows": [
              [
                "SEO (référencement naturel)",
                "Long terme",
                "Temps et contenu",
                "Très qualifié, intentionniste",
                "Durable, capitalise dans le temps"
              ],
              [
                "SEA (Google Ads)",
                "Rapide",
                "Coût par clic, récurrent",
                "Qualifié, ciblé sur la requête",
                "S'arrête avec le budget"
              ],
              [
                "Réseaux sociaux (organique)",
                "Moyen terme",
                "Temps et création",
                "Engagé, communautaire",
                "Variable selon la régularité"
              ],
              [
                "Social Ads (Meta, LinkedIn)",
                "Rapide",
                "Budget média récurrent",
                "Ciblé sur des audiences",
                "S'arrête avec le budget"
              ],
              [
                "E-mailing",
                "Rapide",
                "Faible à modéré",
                "Audience déjà connue",
                "Durable si la base est entretenue"
              ],
              [
                "Content marketing",
                "Long terme",
                "Temps et production",
                "Qualifié, en confiance",
                "Très durable"
              ],
              [
                "Influence",
                "Moyen terme",
                "Variable",
                "Notoriété, recommandation",
                "Ponctuel à moyen terme"
              ]
            ]
          },
          {
            "type": "p",
            "text": "La lecture clé tient en quelques lignes. Le **SEO et le content marketing** produisent un effet durable mais demandent de la patience : ils construisent un capital qui continue de travailler pour vous. À l'inverse, le **SEA et les social ads** donnent des résultats rapides, mais restent dépendants du budget : le jour où vous coupez, le flux s'arrête."
          },
          {
            "type": "p",
            "text": "L'idée n'est donc pas de désigner un meilleur levier dans l'absolu, mais de les combiner selon vos objectifs : la notoriété, l'acquisition, la conversion ou la fidélisation n'appellent pas le même dosage. Si vous souhaitez approfondir un levier en particulier, nos formations dédiées au SEO et à Google Ads prennent le relais sur le « comment » de chaque canal."
          }
        ]
      },
      {
        "h2": "D'une intuition à un plan marketing digital piloté",
        "blocks": [
          {
            "type": "p",
            "text": "Beaucoup d'actions digitales démarrent sur une intuition : ouvrir un compte, publier régulièrement, lancer une campagne « pour voir ». Cela peut fonctionner un temps, mais sans cadre, il devient impossible de savoir ce qui marche et pourquoi. Élaborer et piloter un plan marketing digital, c'est justement transformer ces initiatives éparses en une démarche structurée et mesurable. Voici les cinq étapes qui en forment l'ossature."
          },
          {
            "type": "ol",
            "items": [
              "**Clarifier ses objectifs et ses cibles** : fixer des objectifs SMART (spécifiques, mesurables, atteignables, réalistes, temporels) et définir précisément à qui l'on s'adresse, sous forme de personas.",
              "**Choisir ses canaux et ses leviers** : retenir ceux qui servent réellement ces objectifs et qui sont compatibles avec vos moyens, en temps comme en budget, plutôt que de vouloir être présent partout.",
              "**Produire et planifier** : organiser les contenus et les campagnes sur un calendrier éditorial réaliste, qui tient compte de vos ressources et de votre rythme de publication.",
              "**Définir ses KPI et installer le suivi** : choisir les indicateurs qui comptent vraiment pour vos objectifs et mettre en place les outils d'analyse pour les suivre.",
              "**Analyser et ajuster en continu** : lire les résultats, comprendre les écarts et corriger le tir dans une logique d'amélioration permanente, plutôt que de tout figer une fois pour toutes."
            ]
          },
          {
            "type": "callout",
            "title": "L'essentiel à retenir",
            "text": "Un plan marketing digital n'est pas un document que l'on range une fois écrit : c'est un cycle qui se nourrit des résultats pour s'affiner. C'est cette boucle entre action, mesure et ajustement qui fait la différence entre des actions subies et une stratégie réellement pilotée."
          }
        ]
      }
    ]
  },
  "formation-referencement-strasbourg": {
    "sections": [
      {
        "h2": "Qu'est-ce que le référencement naturel (SEO) et pourquoi se former ?",
        "blocks": [
          {
            "type": "p",
            "text": "Le **référencement naturel**, ou SEO (Search Engine Optimization), désigne l'ensemble des techniques qui permettent de positionner durablement un site dans les résultats naturels de Google, c'est-à-dire les liens que l'on n'achète pas, par opposition aux annonces payantes signalées comme sponsorisées. Concrètement, il s'agit de rendre votre site compréhensible par le moteur de recherche et utile pour les internautes, afin d'apparaître au bon moment sur les bonnes requêtes."
          },
          {
            "type": "p",
            "text": "On résume souvent le SEO à trois grands piliers : la **technique** (un site rapide, bien structuré et lisible par Google), le **contenu** (des pages qui répondent vraiment aux questions de vos visiteurs) et la **popularité** (la reconnaissance que votre site obtient depuis d'autres sites). Inutile d'entrer ici dans le détail de chacun : ce qui compte, c'est de comprendre que la visibilité naturelle se construit sur ces trois fronts à la fois."
          },
          {
            "type": "p",
            "text": "Pourquoi se former plutôt que tout déléguer ? Parce que la compétence change la relation que vous avez avec votre propre visibilité. En comprenant les mécanismes, vous gagnez en autonomie : vous ne dépendez plus entièrement d'un prestataire ni de votre budget publicitaire pour exister sur Google. Vous savez quoi prioriser, vous pouvez agir vous-même sur vos contenus, et si vous travaillez avec une agence, vous êtes en mesure de piloter et de challenger ses recommandations plutôt que de les subir."
          },
          {
            "type": "p",
            "text": "Cette montée en compétence s'adresse en priorité aux TPE et PME, aux indépendants et aux équipes communication ou marketing qui veulent reprendre la main sur leur présence en ligne. Le SEO est une discipline à la fois stratégique (savoir où l'on va, sur quels mots-clés se battre) et technique (savoir comment y parvenir). C'est précisément cette double dimension qui justifie un format de formation accompagnée plutôt qu'un simple tutoriel : chez ABCM Performances, organisme certifié Qualiopi à Strasbourg, la formation se fait en présentiel ou à distance en visio, avec une formatrice expérimentée qui adapte le rythme à votre niveau."
          }
        ]
      },
      {
        "h2": "Les bénéfices durables d'une stratégie SEO pour votre entreprise",
        "blocks": [
          {
            "type": "p",
            "text": "Investir dans le référencement naturel, ce n'est pas chercher un coup d'éclat ponctuel, c'est construire un actif qui travaille pour vous dans le temps. Voici les bénéfices concrets sur lesquels une stratégie SEO bien menée vous permet de capitaliser."
          },
          {
            "type": "ul",
            "items": [
              "**Un trafic organique qualifié et continu** : un site bien optimisé attire des visiteurs intéressés 24 heures sur 24 et 7 jours sur 7, sans coût au clic, tant qu'il reste à jour.",
              "**Une visibilité durable** : contrairement à la publicité qui s'arrête net dès que le budget est consommé, le SEO continue de produire des résultats longtemps après l'effort initial.",
              "**Plus de crédibilité et de confiance** : les internautes accordent spontanément plus de confiance aux résultats naturels qu'aux annonces, ce qui renforce votre image.",
              "**Une couverture large de mots-clés** : vous pouvez être présent sur tout le parcours d'achat, de la phase de découverte à la comparaison, jusqu'à la décision.",
              "**Un atout pour votre visibilité locale** : sur les recherches géolocalisées, le SEO aide une entreprise ancrée sur son territoire à se démarquer auprès d'une clientèle de proximité.",
              "**Un retour sur investissement de long terme** : former vos équipes, c'est acquérir une compétence interne qui continue de rapporter bien après la formation."
            ]
          },
          {
            "type": "p",
            "text": "La logique est celle de l'intérêt composé : chaque page optimisée, chaque mot-clé gagné s'ajoute aux précédents. Là où la publicité repart de zéro à chaque campagne, le SEO accumule. C'est ce qui en fait l'un des leviers les plus rentables sur la durée pour une entreprise qui souhaite construire sa visibilité sans dépendre en permanence d'un budget média."
          }
        ]
      },
      {
        "h2": "SEO ou SEA : référencement naturel et payant, quelle différence ?",
        "blocks": [
          {
            "type": "p",
            "text": "C'est l'une des confusions les plus fréquentes. Le SEO (référencement naturel) et le SEA (référencement payant, type Google Ads) visent le même objectif, être visible sur Google, mais ils reposent sur des logiques très différentes. Comprendre cette distinction vous évite d'opposer deux leviers qui, en réalité, se complètent."
          },
          {
            "type": "table",
            "caption": "Comparaison du référencement naturel (SEO) et payant (SEA)",
            "headers": [
              "Critère",
              "SEO (naturel)",
              "SEA (payant)"
            ],
            "rows": [
              [
                "Délai des résultats",
                "Progressif, se construit dans le temps",
                "Immédiat, dès le lancement de la campagne"
              ],
              [
                "Modèle de coût",
                "Pas de coût au clic, investissement en compétences et en contenu",
                "Budget publicitaire continu, paiement au clic"
              ],
              [
                "Pérennité",
                "Visibilité durable qui perdure après l'effort",
                "Visibilité qui s'arrête dès que le budget est coupé"
              ],
              [
                "Crédibilité perçue",
                "Résultats naturels, perçus comme plus fiables",
                "Annonces signalées comme sponsorisées"
              ]
            ]
          },
          {
            "type": "p",
            "text": "En clair, le SEA achète une visibilité rapide mais temporaire, tandis que le SEO construit une visibilité plus lente à obtenir mais bien plus pérenne. L'un n'exclut pas l'autre : on peut activer le SEA pour générer du trafic immédiat sur une offre ou un lancement, pendant que le SEO installe progressivement vos positions durables."
          },
          {
            "type": "callout",
            "title": "À retenir",
            "text": "SEO et SEA sont **complémentaires**, pas concurrents. La meilleure stratégie combine souvent les deux. Pour aller plus loin sur le volet payant, ABCM Performances propose une formation SEA dédiée, pensée pour articuler les deux leviers."
          }
        ]
      },
      {
        "h2": "Les outils SEO que vous apprendrez à exploiter",
        "blocks": [
          {
            "type": "p",
            "text": "Le référencement naturel n'a rien d'une discipline abstraite : il s'appuie sur des outils concrets qui transforment les intuitions en décisions guidées par les données. Pendant la formation, vous apprenez à les manipuler pour savoir où vous en êtes et quoi faire ensuite."
          },
          {
            "type": "columns",
            "cols": [
              {
                "title": "Mesurer et piloter",
                "items": [
                  "**Google Search Console** : l'outil officiel de Google pour suivre vos mots-clés, vos impressions, vos clics et votre position moyenne à partir des données réelles du moteur.",
                  "**Croiser les sources de données** : apprendre à recouper les différents outils pour prioriser intelligemment vos actions plutôt que de vous disperser.",
                  "**Mise en pratique** : les outils sont utilisés directement sur le site du participant, pour des résultats immédiatement exploitables."
                ]
              },
              {
                "title": "Rechercher et analyser",
                "items": [
                  "**Outils de recherche de mots-clés et d'analyse sémantique** (de type Semrush) : volumes de recherche, niveau de difficulté, intention derrière chaque requête et analyse de la concurrence.",
                  "**Outils gratuits pour démarrer** : suggestions de mots-clés et audit on-page de base, pour avancer sans budget dédié au départ.",
                  "**Lecture concurrentielle** : comprendre sur quels termes se positionnent vos concurrents et identifier vos propres opportunités."
                ]
              }
            ]
          },
          {
            "type": "p",
            "text": "L'objectif n'est pas de vous noyer sous les logiciels, mais de vous donner une boîte à outils raisonnée : quelques outils bien maîtrisés, appliqués à votre cas réel. C'est cette approche opérationnelle, sur vos propres contenus, qui distingue une formation utile d'un simple exposé théorique."
          }
        ]
      }
    ]
  },
  "formation-sea": {
    "sections": [
      {
        "h2": "SEA : qu'est-ce que le référencement payant et pourquoi se former en 2026 ?",
        "blocks": [
          {
            "type": "p",
            "text": "Le **SEA** (Search Engine Advertising, ou référencement payant) consiste à acheter une visibilité immédiate tout en haut des résultats de recherche. Concrètement, vous ne payez pas pour apparaître : vous participez à un système d'enchères sur des mots-clés, et c'est seulement lorsqu'un internaute clique sur votre annonce que le coût se déclenche. Quelques minutes après la mise en ligne, votre offre peut déjà s'afficher devant des personnes qui cherchent activement ce que vous proposez."
          },
          {
            "type": "p",
            "text": "Sur une page de résultats Google, trois zones cohabitent. Les liens sponsorisés (signalés par la mention \"Annonce\") occupent le haut et parfois le bas de la page : c'est le SEA. Entre les deux, les résultats organiques sont positionnés \"naturellement\" par l'algorithme, sans paiement direct : c'est le SEO. Savoir les distinguer d'un coup d'oeil est le premier réflexe d'un annonceur, car ces deux espaces ne se pilotent pas du tout de la même façon."
          },
          {
            "type": "p",
            "text": "Si le référencement payant séduit autant, c'est pour quatre bénéfices très concrets. Des résultats immédiats, sans attendre des mois de montée en visibilité. Un ciblage précis : vous choisissez votre audience, votre zone géographique, l'appareil utilisé et même le moment de la journée. Un budget réellement maîtrisé, que vous pouvez plafonner et ajuster au quotidien. Et surtout des campagnes 100 % mesurables, où chaque euro dépensé peut être rattaché à un clic, puis à une vente ou à un contact."
          },
          {
            "type": "p",
            "text": "Alors pourquoi se former plutôt qu'apprendre sur le tas ? Parce que l'interface de Google Ads donne une fausse impression de simplicité. Sans méthode sur les enchères, la sémantique et le paramétrage, lancer une campagne revient très vite à dépenser son budget à perte : clics non pertinents, mots-clés trop larges, suivi inexistant. La bonne nouvelle, c'est que le SEA s'apprend sans prérequis technique, des tout premiers fondamentaux jusqu'au pilotage fin des performances."
          },
          {
            "type": "p",
            "text": "En 2026, ce levier reste incontournable pour les TPE et PME, les e-commerçants et les indépendants : c'est souvent le moyen le plus rapide d'aller chercher des clients qualifiés sur des requêtes à forte intention d'achat. Chez ABCM Performances, organisme certifié **Qualiopi** basé à Strasbourg, cette formation se suit en présentiel ou à distance en visio, avec une formatrice expérimentée et un financement possible via votre OPCO."
          }
        ]
      },
      {
        "h2": "SEA ou SEO : quelle différence et pourquoi les combiner ?",
        "blocks": [
          {
            "type": "p",
            "text": "C'est la question que se posent presque tous les débutants : faut-il investir dans le payant ou dans le naturel ? La réponse honnête, c'est que les deux ne répondent pas au même besoin. Le SEA repose sur une logique d'enchères, le SEO sur l'optimisation du contenu et de la technique de votre site. Le tableau ci-dessous résume ce qui les oppose, et explique pourquoi les opposer est justement une erreur."
          },
          {
            "type": "table",
            "caption": "SEA (référencement payant) et SEO (référencement naturel) : ce qui les distingue",
            "headers": [
              "Critère",
              "SEA (payant)",
              "SEO (naturel)"
            ],
            "rows": [
              [
                "Logique",
                "Système d'enchères sur des mots-clés",
                "Optimisation du contenu et de la technique"
              ],
              [
                "Horizon de temps",
                "Visibilité immédiate",
                "Construction durable, sur plusieurs mois"
              ],
              [
                "Modèle de coût",
                "Paiement au clic, en continu",
                "Trafic \"gratuit\" une fois les positions acquises"
              ],
              [
                "Effet à l'arrêt",
                "Les annonces disparaissent aussitôt",
                "Les positions organiques se maintiennent"
              ],
              [
                "Point fort",
                "Maîtrise du message, tests rapides",
                "Crédibilité et rentabilité sur le long terme"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Vu ainsi, les faiblesses de l'un sont presque toujours les forces de l'autre. Le SEA coûte à chaque clic mais vous donne un contrôle total sur le message et la capacité de tester une offre en quelques jours. Le SEO demande de la patience et du contenu, mais une fois les positions gagnées, le trafic continue d'arriver sans budget media. Les combiner permet d'occuper le terrain immédiatement avec le payant, pendant que le naturel construit une présence solide et rentable dans la durée."
          },
          {
            "type": "p",
            "text": "Si vous souhaitez développer le second volet, notre formation SEO : maîtriser le référencement naturel est le prolongement logique de celle-ci, pour bâtir une stratégie d'acquisition qui ne dépend pas uniquement de votre budget publicitaire."
          }
        ]
      },
      {
        "h2": "Le vocabulaire et les indicateurs clés du SEA à connaître",
        "blocks": [
          {
            "type": "p",
            "text": "Piloter une campagne, c'est d'abord parler la même langue que la plateforme. Voici les termes que vous manipulerez au quotidien et que la formation rend immédiatement opérationnels, sans vous noyer dans le jargon."
          },
          {
            "type": "ul",
            "items": [
              "**CPC (coût par clic)** : ce que vous coûte chaque visite. Il varie selon votre enchère, la concurrence sur le mot-clé et la qualité de votre annonce.",
              "**CTR (taux de clic)** : la part d'internautes qui cliquent après avoir vu votre annonce. C'est le premier signal de sa pertinence et de son attractivité.",
              "**Quality Score** : la note attribuée par Google à vos mots-clés et annonces. Un bon score fait baisser vos coûts et améliore votre position, à budget égal.",
              "**Taux de conversion et CPA (coût par acquisition)** : on passe ici du clic à l'action concrète (achat, devis, formulaire) et à ce qu'elle vous a réellement coûté.",
              "**ROAS et ROI** : les indicateurs de rentabilité. Ils répondent à la seule question qui compte vraiment : chaque euro investi en a-t-il rapporté davantage ?",
              "**Structure de compte** : campagne, groupe d'annonces, mots-clés et mots-clés négatifs. Une organisation propre est ce qui sépare une campagne maîtrisée d'un budget qui fuit."
            ]
          }
        ]
      },
      {
        "h2": "Pour qui, pour quels débouchés et quelles erreurs éviter ?",
        "blocks": [
          {
            "type": "p",
            "text": "Le référencement payant n'est pas réservé aux grandes équipes marketing. Cette formation s'adresse aussi bien à celui qui veut comprendre ses campagnes qu'à celui qui veut les internaliser pour gagner en autonomie."
          },
          {
            "type": "columns",
            "cols": [
              {
                "title": "Profils concernés",
                "items": [
                  "Responsables marketing, e-commerce et communication",
                  "Indépendants et freelances",
                  "Chefs d'entreprise souhaitant internaliser leurs campagnes",
                  "Toute personne curieuse, sans prérequis technique"
                ]
              },
              {
                "title": "Débouchés et montée en compétence",
                "items": [
                  "Traffic manager",
                  "Consultant SEA",
                  "Responsable acquisition",
                  "Freelance Google Ads"
                ]
              }
            ]
          },
          {
            "type": "p",
            "text": "Côté cas d'usage, le SEA s'illustre particulièrement sur un lancement de produit, la génération de leads, les campagnes saisonnières (soldes, fêtes, périodes fortes de votre activité) ou encore l'e-commerce avec les annonces Shopping. Autant de situations où il faut de la visibilité tout de suite, sur les bonnes requêtes."
          },
          {
            "type": "h3",
            "text": "Les trois erreurs qui font fuir le budget"
          },
          {
            "type": "ol",
            "items": [
              "Oublier les mots-clés négatifs. Sans cette liste d'exclusions, vos annonces s'affichent sur des recherches hors sujet et brûlent le budget en clics qui ne convertiront jamais.",
              "Négliger le suivi des conversions. Piloter sans tracking fiable, c'est avancer à l'aveugle : impossible de savoir quelle campagne rapporte et laquelle vous coûte de l'argent pour rien.",
              "Mal gérer le budget et les enchères. Sur-ciblage, sous-ciblage ou dispersion sur trop de campagnes : la conséquence est toujours la même, un investissement dilué et des performances décevantes."
            ]
          },
          {
            "type": "callout",
            "title": "Financement et organisation",
            "text": "Cette formation peut être prise en charge par votre **OPCO** ou via le plan de développement des compétences. ABCM Performances est un organisme certifié **Qualiopi**, à Strasbourg ou en visio, en format intra ou inter-entreprise, ce qui ouvre l'accès aux dispositifs de financement de la formation professionnelle."
          }
        ]
      }
    ]
  },
  "formation-publicite-google-ads": {
    "sections": [
      {
        "h2": "Google Ads et SEA : de quoi parle-t-on et pourquoi se former ?",
        "blocks": [
          {
            "type": "p",
            "text": "Le **SEA** (Search Engine Advertising) désigne la publicité diffusée sur les moteurs de recherche : ces annonces qui apparaissent en tête des résultats lorsqu'un internaute tape une requête. Google Ads en est la principale régie, et c'est facile à comprendre quand on sait que Google capte la quasi-totalité des recherches effectuées en France. Se positionner sur Google Ads, c'est donc aller chercher la demande là où elle s'exprime, au moment précis où un prospect cherche votre produit ou votre service."
          },
          {
            "type": "p",
            "text": "On entend parfois qu'une formation Google Ads sert à \"savoir où cliquer\". C'est une vision réductrice. L'interface s'apprend en quelques heures ; ce qui se travaille vraiment, c'est le pilotage d'un budget média rentable. Car la mécanique de Google Ads repose sur le **coût par clic** (CPC) : chaque visite se paie. Un compte mal structuré dépense sans discernement, finance la plateforme et génère du trafic qui ne convertit pas. La différence entre une campagne qui rapporte et une campagne qui brûle du budget ne tient pas à l'outil, mais à la méthode."
          },
          {
            "type": "p",
            "text": "Une formation vous donne précisément cette méthode : comprendre la logique d'enchères, soigner le **Quality Score** pour payer moins cher à position égale, lire l'intention de recherche derrière chaque mot-clé et structurer son compte pour garder le contrôle. Ce sont ces fondamentaux qui transforment une dépense publicitaire en investissement mesurable."
          },
          {
            "type": "p",
            "text": "Le contexte de 2026 renforce ce besoin plutôt qu'il ne l'efface. Les campagnes automatisées, Performance Max et les fonctions pilotées par l'IA prennent en charge une part croissante des arbitrages techniques. Mais l'algorithme optimise vers les objectifs et les données qu'on lui fournit : sans cadrage humain, sans bons signaux de conversion et sans garde-fous, il optimise dans le vide. Le rôle de l'annonceur devient plus stratégique, pas moins. Savoir quoi déléguer à la machine et quoi garder sous contrôle est aujourd'hui une compétence à part entière."
          },
          {
            "type": "p",
            "text": "Cette page éclaire les enjeux et le vocabulaire du SEA. Pour le détail des modules, des objectifs et du déroulé pédagogique, reportez-vous au programme de la fiche : la formation est dispensée par ABCM Performances, organisme certifié Qualiopi à Strasbourg, en présentiel ou à distance en visio, et finançable via votre OPCO."
          }
        ]
      },
      {
        "h2": "SEA et SEO : deux leviers complémentaires, pas concurrents",
        "blocks": [
          {
            "type": "p",
            "text": "Opposer le SEA et le SEO est une fausse question. Ce sont deux leviers d'acquisition aux temporalités et aux logiques différentes, qui se renforcent quand on les pense ensemble. Le SEA achète une visibilité immédiate ; le SEO la construit dans la durée. L'un permet de tester et de réagir vite, l'autre installe un actif pérenne."
          },
          {
            "type": "table",
            "caption": "SEA et SEO : ce qui les distingue, ce qui les complète",
            "headers": [
              "Critère",
              "SEA (Google Ads)",
              "SEO (référencement naturel)"
            ],
            "rows": [
              [
                "Délai de visibilité",
                "Immédiat, dès la mise en ligne des annonces",
                "Progressif, montée en puissance sur plusieurs mois"
              ],
              [
                "Coût du trafic",
                "Coût par clic à chaque visite",
                "Pas de coût au clic, mais un effort de production et d'optimisation"
              ],
              [
                "Durée de l'effet",
                "S'arrête quand le budget s'arrête",
                "Durable, le trafic se maintient dans le temps"
              ],
              [
                "Finesse du ciblage",
                "Géographique, démographique, comportemental, par appareil",
                "Indirect, via les mots-clés et l'intention des requêtes"
              ],
              [
                "Usage idéal",
                "Lancements, temps forts, tests rapides, demande ponctuelle",
                "Notoriété de fond, requêtes informationnelles, rentabilité long terme"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Comment choisir ? Le SEA s'impose quand il faut des résultats rapides : une promotion, un lancement de produit, une zone géographique à conquérir ou simplement valider qu'un marché répond avant d'y investir plus lourdement. Le SEO prend le relais sur la durée, quand l'objectif est de réduire sa dépendance au budget média et de capter un trafic récurrent. Dans la plupart des cas, la bonne réponse combine les deux selon l'objectif, la maturité du site et le budget disponible."
          },
          {
            "type": "p",
            "text": "La vraie valeur naît de leur articulation. Les mots-clés qui convertissent en SEA orientent la stratégie éditoriale SEO. Les données de conversion remontées par les campagnes payantes révèlent ce qui intéresse réellement l'audience. Et pendant que le référencement naturel se construit, le SEA assure une présence immédiate sur les requêtes stratégiques. C'est cette logique d'écosystème qu'ABCM Performances aborde aussi dans ses formations dédiées au référencement et au marketing digital."
          }
        ]
      },
      {
        "h2": "Les erreurs qui font exploser le budget Google Ads",
        "blocks": [
          {
            "type": "p",
            "text": "La plupart des budgets gaspillés sur Google Ads ne le sont pas à cause d'un manque de moyens, mais d'erreurs de pilotage qui se répètent. Les repérer, c'est déjà récupérer une bonne part de sa rentabilité. Voici les plus fréquentes."
          },
          {
            "type": "ul",
            "items": [
              "**Un ciblage trop large et l'absence de mots-clés négatifs.** Sans liste d'exclusions, vos annonces se déclenchent sur des recherches hors sujet et vous payez des clics qui ne convertiront jamais. C'est la première source de dilution du budget.",
              "**Un tracking des conversions absent ou mal configuré.** Sans Google Tag et balises de conversion correctement posés, vous pilotez à l'aveugle : impossible de savoir quelles campagnes rapportent, et l'algorithme lui-même optimise vers de mauvais signaux.",
              "**Des annonces et des landing pages désalignées.** Si la promesse de l'annonce ne se retrouve pas sur la page de destination, l'internaute repart. Ce décalage dégrade le Quality Score et fait mécaniquement monter le CPC.",
              "**Le pilotage à l'aveugle des enchères automatiques.** Confier ses enchères à l'IA sans fixer d'objectif de ROAS ou de CPA, ni poser de garde-fous, revient à laisser la machine dépenser sans cap. L'automatisation est utile, à condition d'être cadrée.",
              "**L'optimisation ponctuelle plutôt que continue.** Une campagne n'est jamais \"réglée une fois pour toutes\". Sans suivi régulier ni tests A/B, les performances s'érodent et les gisements d'amélioration restent inexploités."
            ]
          },
          {
            "type": "p",
            "text": "Le point commun de ces erreurs : elles sont invisibles tant qu'on ne sait pas où regarder. Un compte peut sembler fonctionner alors qu'il laisse filer la moitié de son budget. C'est exactement ce qu'un regard formé permet de corriger."
          }
        ]
      },
      {
        "h2": "Les indicateurs à maîtriser pour piloter ses campagnes",
        "blocks": [
          {
            "type": "p",
            "text": "Piloter Google Ads, c'est savoir lire quelques indicateurs clés et comprendre comment ils s'enchaînent. Inutile de tout surveiller : ce sont la rentabilité finale et les signaux qui y mènent qui comptent. Voici le mini-glossaire utile pour suivre une campagne et arbitrer un budget."
          },
          {
            "type": "table",
            "caption": "Les indicateurs clés du pilotage Google Ads",
            "headers": [
              "Indicateur",
              "Ce qu'il mesure",
              "Pourquoi il compte"
            ],
            "rows": [
              [
                "CPC",
                "Le coût payé pour chaque clic",
                "C'est le prix d'entrée de chaque visite : à surveiller, mais jamais à juger seul"
              ],
              [
                "CTR",
                "Le taux de clics sur vos annonces",
                "Révèle l'attractivité et la pertinence de l'annonce face à la requête"
              ],
              [
                "Quality Score",
                "La qualité perçue de l'annonce, des mots-clés et de la landing page",
                "Un bon score fait baisser le CPC et améliore la position : un levier d'économie direct"
              ],
              [
                "Taux de conversion",
                "La part des visiteurs qui passent à l'action",
                "Mesure le passage d'une audience qualifiée à un résultat concret"
              ],
              [
                "CPA",
                "Le coût pour obtenir une conversion",
                "Indique combien vous coûte réellement un client ou un prospect"
              ],
              [
                "ROAS",
                "Le retour généré pour chaque euro dépensé",
                "Le juge de paix de la rentabilité d'une campagne"
              ]
            ]
          },
          {
            "type": "p",
            "text": "L'erreur classique consiste à se focaliser sur le CPC et à chercher le clic le moins cher. Or un clic bon marché qui ne convertit jamais coûte plus cher qu'un clic onéreux qui génère une vente. Ce sont le **CPA** et le **ROAS** qui disent la vérité sur la rentabilité, pas le prix du clic."
          },
          {
            "type": "p",
            "text": "Pour arbitrer vraiment son budget, il faut même monter d'un cran et raisonner en **valeur client** (CLV, la valeur générée par un client sur toute sa relation avec l'entreprise) plutôt qu'en simple coût d'acquisition. Un CPA qui paraît élevé devient parfaitement rentable si le client revient et achète à nouveau. Savoir lire ses campagnes à cette échelle, c'est passer du statut d'annonceur à celui de pilote, et c'est tout l'objet de cette formation animée par une formatrice expérimentée, en intra ou en inter-entreprise."
          }
        ]
      }
    ]
  },
  "formation-inbound-marketing": {
    "sections": [
      {
        "h2": "Inbound marketing et social selling : définitions et différences",
        "blocks": [
          {
            "type": "p",
            "text": "On confond souvent ces deux termes parce qu'ils poursuivent le même but, mais ils n'agissent pas au même niveau. L'**inbound marketing** consiste à attirer des prospects vers vous grâce à du contenu utile (articles, guides, vidéos, livres blancs) plutôt qu'en les sollicitant par de la publicité intrusive. On parle alors d'un parcours en trois temps : on capte une audience large en haut de tunnel (TOFU), on l'éduque au milieu (MOFU), puis on accompagne la décision en bas de tunnel (BOFU)."
          },
          {
            "type": "p",
            "text": "Le **social selling**, lui, est une démarche individuelle et relationnelle portée par les commerciaux. Il s'agit d'utiliser les réseaux sociaux professionnels, LinkedIn en tête, pour identifier les bons interlocuteurs, engager la conversation et faire mûrir une relation jusqu'à la vente. Là où l'inbound raisonne en logique de marque et de contenu, le social selling raisonne en logique de personne : c'est le prolongement humain et B2B de l'inbound."
          },
          {
            "type": "p",
            "text": "Le tableau ci-dessous résume ce qui les distingue et ce qui les relie."
          },
          {
            "type": "table",
            "caption": "Inbound marketing et social selling : deux leviers complémentaires",
            "headers": [
              "",
              "Inbound marketing",
              "Social selling"
            ],
            "rows": [
              [
                "Porté par",
                "Le marketing et la marque",
                "Le commercial, à titre individuel"
              ],
              [
                "Logique",
                "Contenu et audience",
                "Relation et conversation"
              ],
              [
                "Canal principal",
                "Site, blog, SEO, réseaux sociaux de marque",
                "LinkedIn et profils personnels"
              ],
              [
                "Mécanique clé",
                "Lead nurturing et parcours d'achat",
                "Personal branding et mise en relation"
              ],
              [
                "Finalité commune",
                "Attirer, convertir, fidéliser",
                "Attirer, convertir, fidéliser"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Les deux s'opposent à l'**outbound** et à la prospection à froid, qui interrompent un public qui n'a rien demandé. Ici, c'est la valeur apportée (un contenu pertinent, un échange utile) qui amène le prospect à venir vers vous, à son rythme et au bon moment de son parcours d'achat."
          }
        ]
      },
      {
        "h2": "Pourquoi se former à l'inbound marketing et au social selling ?",
        "blocks": [
          {
            "type": "p",
            "text": "Parce que la façon d'acheter a changé. Avant même de parler à un commercial, vos prospects se renseignent seuls : ils lisent, comparent, consultent les avis et se forgent une opinion. Une bonne partie de la décision se joue donc en amont du premier contact. Si vous n'êtes pas présent, utile et crédible à ce moment-là, vous arrivez trop tard dans la conversation."
          },
          {
            "type": "p",
            "text": "Se former permet d'agir sur plusieurs leviers à la fois. Voici les bénéfices concrets que vous en retirez."
          },
          {
            "type": "ul",
            "items": [
              "**Capter les prospects au bon moment** de leur réflexion, quand ils cherchent activement des réponses, plutôt que de les interrompre.",
              "**Construire un actif durable** : un contenu bien pensé continue d'attirer des visiteurs mois après mois et réduit votre dépendance à la publicité payante.",
              "**Aligner marketing et commercial** (le smarketing) autour d'un même tunnel et d'une même définition du bon prospect, pour arrêter de travailler en silos.",
              "**Gagner en visibilité et en crédibilité** grâce au personal branding sur LinkedIn, qui transforme vos commerciaux en interlocuteurs reconnus dans leur domaine.",
              "**Améliorer votre performance commerciale** en générant des opportunités plus qualifiées et plus engagées."
            ]
          },
          {
            "type": "p",
            "text": "Le bénéfice le plus concret reste pédagogique : vous repartez avec une stratégie applicable à votre activité, pas seulement avec de la théorie. Chez ABCM Performances, organisme certifié Qualiopi à Strasbourg, la formation se suit en présentiel ou à distance en visio, en intra ou en inter-entreprise, et peut être financée via votre OPCO."
          }
        ]
      },
      {
        "h2": "Mesurer sa performance : le Social Selling Index et les KPIs à suivre",
        "blocks": [
          {
            "type": "p",
            "text": "Une démarche d'inbound et de social selling ne se pilote pas au ressenti. Sans indicateurs, impossible de savoir ce qui fonctionne, ni d'ajuster. La bonne nouvelle, c'est qu'il existe des repères simples pour mesurer vos progrès."
          },
          {
            "type": "h3",
            "text": "Le Social Selling Index (SSI) de LinkedIn"
          },
          {
            "type": "p",
            "text": "LinkedIn propose un score gratuit, le **Social Selling Index**, qui évalue votre maturité sur quatre piliers : construire une marque professionnelle, identifier les bons prospects, partager des informations pertinentes et entretenir des relations. C'est un excellent point de départ pour situer chaque commercial et suivre sa montée en compétence dans le temps."
          },
          {
            "type": "h3",
            "text": "Les indicateurs à garder sous les yeux"
          },
          {
            "type": "columns",
            "cols": [
              {
                "title": "KPIs inbound",
                "items": [
                  "Trafic organique sur le site et le blog",
                  "Taux de conversion visiteur vers lead",
                  "Volume de MQL et de SQL générés",
                  "Coût par lead"
                ]
              },
              {
                "title": "KPIs social selling",
                "items": [
                  "Taux d'acceptation des invitations",
                  "Taux de réponse aux messages",
                  "Taux d'engagement des publications",
                  "Opportunités commerciales générées"
                ]
              }
            ]
          },
          {
            "type": "p",
            "text": "Pour suivre tout cela, on s'appuie sur quelques outils : LinkedIn Sales Navigator pour la prospection ciblée, une solution de marketing automation pour le suivi des leads, et des tableaux de bord pour consolider l'ensemble. L'enjeu n'est pas d'accumuler les chiffres, mais de les lire pour ajuster vos contenus et votre cadence de publication. Un taux d'engagement en baisse, par exemple, est souvent le signal qu'il faut revoir le sujet ou le format de vos posts."
          }
        ]
      },
      {
        "h2": "Les erreurs fréquentes à éviter en inbound et en social selling",
        "blocks": [
          {
            "type": "p",
            "text": "Beaucoup de démarches échouent non par manque d'outils, mais à cause de quelques réflexes contre-productifs. Les voici, pour vous éviter de les reproduire."
          },
          {
            "type": "callout",
            "title": "Les pièges les plus courants",
            "text": "Confondre social selling et prospection de masse automatisée et impersonnelle, qui agace plus qu'elle ne convertit. Publier sans stratégie de contenu ni régularité, en espérant que la visibilité vienne seule. Négliger l'optimisation de son profil LinkedIn, qui est pourtant votre première vitrine commerciale. Vouloir vendre trop vite, au lieu de créer d'abord de la valeur et de la confiance. Laisser marketing et commercial travailler chacun de leur côté, sans alignement sur les objectifs. Et enfin, ne jamais mesurer ni itérer, faute d'avoir défini ses KPIs au départ."
          },
          {
            "type": "p",
            "text": "Le fil rouge de ces erreurs est toujours le même : privilégier la quantité et la précipitation au détriment de la pertinence et de la relation. Une formation bien menée, encadrée par une formatrice expérimentée, vous aide précisément à éviter ces écueils et à installer les bons réflexes dès le départ."
          }
        ]
      }
    ]
  },
  "formation-wordpress": {
    "sections": [
      {
        "h2": "WordPress, c'est quoi ? Comprendre le CMS n°1 du web",
        "blocks": [
          {
            "type": "p",
            "text": "Avant de parler d'installation ou de thèmes, posons les mots. Un **CMS** (de l'anglais Content Management System, soit système de gestion de contenu) est un logiciel qui vous permet de créer et de mettre à jour un site internet sans toucher au code. Vous écrivez vos textes, ajoutez vos images et organisez vos pages depuis une interface visuelle, un peu comme dans un traitement de texte. La technique reste en coulisses."
          },
          {
            "type": "p",
            "text": "WordPress est tout simplement le CMS le plus utilisé au monde. Il fait tourner une très large part des sites en ligne, du blog personnel au site d'entreprise, en passant par des médias et des boutiques. Cette popularité n'est pas un hasard : c'est une solution **open source et gratuite**, soutenue par une communauté mondiale qui développe en permanence des thèmes (l'apparence), des extensions (les fonctionnalités) et des ressources d'aide. Concrètement, quel que soit votre besoin, il existe presque toujours une réponse documentée."
          },
          {
            "type": "p",
            "text": "Une nuance utile à connaître : il existe deux WordPress. WordPress.com est une plateforme hébergée où l'on s'inscrit comme sur un service en ligne, avec des limites. WordPress.org, c'est le logiciel libre que l'on installe sur son propre hébergement : vous êtes pleinement propriétaire de votre site et libre de tout personnaliser. C'est cette version auto-hébergée, la plus puissante et la plus répandue chez les professionnels, qui est au cœur de notre approche."
          },
          {
            "type": "p",
            "text": "L'objectif est donc clair : vous donner les clés pour **créer et gérer son site WordPress** en toute autonomie, sans dépendre d'un tiers pour la moindre modification."
          }
        ]
      },
      {
        "h2": "Pourquoi se former à WordPress plutôt qu'apprendre sur le tas",
        "blocks": [
          {
            "type": "p",
            "text": "On peut apprendre WordPress seul, à coups de tutoriels et d'essais-erreurs. Beaucoup s'y essaient, et beaucoup s'y perdent : interface mal paramétrée, extensions qui se télescopent, site fragile dès qu'il faut le faire évoluer. Se former, c'est gagner en méthode et éviter les impasses. Voici ce que cela change concrètement."
          },
          {
            "type": "ul",
            "items": [
              "**Devenir autonome** : publier une page, corriger un texte, ajouter un article ou changer une photo deviennent des gestes simples que vous faites quand vous le voulez, sans attendre un prestataire et sans devis à chaque virgule.",
              "**Faire des économies réelles** : en internalisant les modifications courantes, vous réduisez les coûts récurrents de maintenance et d'interventions externes. Le budget de la formation se rentabilise vite face à des factures d'agence répétées.",
              "**Gagner du temps et éviter les erreurs** : sauvegardes, mises à jour, sécurité, ces sujets sensibles deviennent des réflexes encadrés plutôt que des sources d'angoisse ou de pannes.",
              "**Couvrir des projets variés** : la même base sert pour un site vitrine, un blog, une stratégie de génération de leads ou une boutique en ligne avec WooCommerce. Vous apprenez un outil, vous ouvrez plusieurs possibilités.",
              "**Acquérir une compétence durable et valorisante** : savoir piloter un site WordPress reste utile dans le temps et pèse positivement sur votre employabilité comme sur l'agilité de votre entreprise."
            ]
          },
          {
            "type": "p",
            "text": "Chez ABCM Performances, organisme certifié Qualiopi à Strasbourg, cette formation se vit en présentiel ou à distance en visio, avec une formatrice expérimentée et beaucoup de mise en pratique sur votre propre projet. Les formats intra et inter-entreprise permettent d'adapter le rythme à votre équipe comme à votre planning."
          }
        ]
      },
      {
        "h2": "WordPress face à Wix, Webflow et Shopify : comment choisir",
        "blocks": [
          {
            "type": "p",
            "text": "Si vous hésitez encore, c'est sain : tous les outils de création de site ne se valent pas selon le projet. WordPress n'est pas toujours le plus simple à prendre en main au premier jour, mais c'est souvent le plus solide sur la durée. Voici une comparaison honnête sur les critères qui comptent vraiment."
          },
          {
            "type": "table",
            "caption": "WordPress comparé aux principales alternatives, critère par critère.",
            "headers": [
              "Critère",
              "WordPress",
              "Wix",
              "Webflow",
              "Shopify"
            ],
            "rows": [
              [
                "Facilité de prise en main",
                "Demande un temps d'apprentissage (d'où l'intérêt d'une formation)",
                "Le plus simple pour débuter",
                "Visuel mais technique",
                "Simple sur le périmètre e-commerce"
              ],
              [
                "Personnalisation et contrôle du design",
                "Très étendue, contrôle total",
                "Encadrée par la plateforme",
                "Excellente maîtrise visuelle",
                "Centrée sur la boutique"
              ],
              [
                "E-commerce",
                "WooCommerce : flexible et évolutif",
                "Fonctions limitées",
                "Possible mais secondaire",
                "Solution clé en main"
              ],
              [
                "Évolutivité dans le temps",
                "Forte, le site grandit avec vous",
                "Limitée à la plateforme",
                "Bonne pour les sites soignés",
                "Bonne en boutique pure"
              ],
              [
                "SEO et propriété des données",
                "Contrôle total (Yoast, Rank Math)",
                "Dépendant de la plateforme",
                "Bon mais cadré",
                "Bon, orienté produit"
              ]
            ]
          },
          {
            "type": "p",
            "text": "La lecture est nuancée : Wix séduit pour aller vite sur un petit site, Shopify excelle sur une boutique standardisée, Webflow attire les profils sensibles au design. Le point commun de ces solutions, c'est que vous restez dans leur cadre et que vous payez pour en sortir."
          },
          {
            "type": "callout",
            "title": "Pour qui WordPress est-il le meilleur choix ?",
            "text": "Si vous voulez un site qui vous appartient vraiment, que vous pouvez personnaliser, faire évoluer et étendre à l'e-commerce sans tout reconstruire, WordPress est le pari le plus rentable. La contrepartie, le temps d'apprentissage, se règle précisément par une formation : c'est exactement ce que nous vous proposons, pour démarrer du bon pied et garder la main ensuite."
          }
        ]
      }
    ]
  },
  "formation-no-code": {
    "sections": [
      {
        "h2": "Le No Code, c'est quoi et pourquoi s'y former en 2026 ?",
        "blocks": [
          {
            "type": "p",
            "text": "Le **No Code** désigne une famille d'outils qui permettent de construire des sites, des applications et des automatisations à partir d'interfaces visuelles : on glisse-dépose des blocs, on relie des éléments, on définit des règles logiques, sans jamais écrire de syntaxe. Là où il fallait autrefois un développeur pour chaque page ou chaque fonctionnalité, vous assemblez vous-même les briques à l'écran. Le **Low Code** est la nuance voisine : il fonctionne sur le même principe visuel, mais laisse la porte ouverte à quelques lignes de code pour les besoins plus pointus. Pour un profil non-technique, la distinction reste anecdotique au départ : l'idée commune est de produire un résultat en ligne sans dépendre du langage informatique."
          },
          {
            "type": "p",
            "text": "Pourquoi s'y intéresser maintenant ? Parce que les plateformes no code et low code connaissent une croissance soutenue et s'imposent progressivement comme une réponse à deux réalités du marché : la difficulté à recruter des développeurs et le besoin d'autonomie digitale des TPE et PME. Beaucoup d'entreprises n'ont ni le budget ni le temps de confier chaque modification de site ou chaque petit outil interne à un prestataire. Le No Code rend cette autonomie accessible."
          },
          {
            "type": "p",
            "text": "On peut bien sûr apprendre seul, à coups de tutoriels. Le risque, c'est de se tromper d'outil, de mal structurer ses données dès le départ et de devoir tout reconstruire quelques mois plus tard. Se former permet d'éviter ces impasses : vous repartez avec une méthode, des repères de choix et les bons réflexes pour sécuriser vos projets plutôt que d'accumuler des bricolages fragiles."
          },
          {
            "type": "p",
            "text": "Le bénéfice concret est immédiat pour un profil non-technique : passer de l'idée au projet en ligne en quelques jours, et surtout pouvoir modifier soi-même une page, un formulaire ou une automatisation sans solliciter un tiers à chaque fois. Chez ABCM Performances, cette formation se suit à Strasbourg en présentiel ou à distance en visio. Organisme certifié Qualiopi, nos parcours sont finançables via votre OPCO, en format intra ou inter-entreprise."
          }
        ]
      },
      {
        "h2": "Quels outils No Code pour quel projet ?",
        "blocks": [
          {
            "type": "p",
            "text": "Le paysage No Code peut sembler dense au premier abord. La bonne nouvelle, c'est qu'il s'organise autour de quelques grandes familles d'usage. Plutôt que de partir d'un outil à la mode, le bon réflexe consiste à partir de votre besoin : voulez-vous **montrer** quelque chose, **gérer** des données ou **automatiser** des tâches ? La réponse oriente naturellement vers le type d'outil pertinent."
          },
          {
            "type": "table",
            "caption": "Trois questions simples pour identifier la bonne famille d'outils No Code.",
            "headers": [
              "Besoin",
              "Type d'outil",
              "Exemples"
            ],
            "rows": [
              [
                "Créer un site ou des pages (vitrine, landing page, blog)",
                "Éditeurs de sites visuels, design soigné et responsive",
                "Webflow, Wix"
              ],
              [
                "Construire une application ou un outil métier (espace client, outil interne)",
                "Plateformes d'applications web et mobiles",
                "Bubble, Glide, Softr"
              ],
              [
                "Structurer et suivre ses données (projets, contacts, stocks)",
                "Bases de données et espaces de travail",
                "Airtable, Notion"
              ],
              [
                "Relier ses outils et automatiser (déclencher des actions, supprimer les tâches répétitives)",
                "Plateformes d'automatisation",
                "Make, Zapier"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Au-delà du tableau, trois critères doivent guider votre choix : le coût (gratuit au départ, mais souvent croissant avec l'usage), la scalabilité (l'outil tiendra-t-il quand votre projet grandira ?) et la courbe d'apprentissage (un éditeur de site se prend en main plus vite qu'une plateforme applicative complète). Un projet réel combine souvent plusieurs familles : un site vitrine relié à une base de données, elle-même connectée à une automatisation. Savoir les faire dialoguer est justement ce qui fait la différence."
          }
        ]
      },
      {
        "h2": "Cas d'usage concrets du No Code selon votre profil",
        "blocks": [
          {
            "type": "p",
            "text": "Le No Code n'a de valeur que rapporté à un usage précis. Voici comment il se traduit concrètement selon votre rôle, pour que vous puissiez vous projeter sur un premier projet utile."
          },
          {
            "type": "h3",
            "text": "Entrepreneur ou indépendant"
          },
          {
            "type": "p",
            "text": "Mettre en ligne un site vitrine ou un MVP (produit minimum viable) pour tester une idée avant d'y investir lourdement. Vous validez l'intérêt du marché et publiez une offre rapidement, sans avancer des frais de développement importants."
          },
          {
            "type": "h3",
            "text": "Équipe marketing et communication"
          },
          {
            "type": "p",
            "text": "Produire des landing pages de campagne, créer des formulaires de collecte de leads et automatiser l'envoi des contacts collectés directement vers votre CRM. Les opérations gagnent en réactivité, sans dépendre d'un calendrier technique externe."
          },
          {
            "type": "h3",
            "text": "Équipe opérationnelle ou RH"
          },
          {
            "type": "p",
            "text": "Construire une application interne de suivi (demandes, stocks, projets), partager un tableau de bord avec l'équipe et mettre en place des relances automatiques. Des outils sur mesure pour vos process, sans cahier des charges interminable."
          },
          {
            "type": "p",
            "text": "Et quel que soit votre profil, un usage transversal revient toujours : **automatiser les tâches répétitives**, saisie manuelle, copier-coller entre deux logiciels, notifications à envoyer. Sur une semaine, ces micro-tâches représentent souvent plusieurs heures récupérables."
          },
          {
            "type": "callout",
            "title": "Le bon réflexe pour démarrer",
            "text": "Commencez petit, sur un cas réel et limité, plutôt que de viser l'outil parfait du premier coup. Une fois ce premier projet en ligne et maîtrisé, vous l'étendez progressivement. C'est cette logique d'autonomie pas à pas qui ancre durablement les compétences."
          }
        ]
      },
      {
        "h2": "No Code : ce qu'il permet vraiment (et ses limites)",
        "blocks": [
          {
            "type": "p",
            "text": "Pour faire les bons choix, il faut connaître autant les forces du No Code que ses limites. C'est précisément cette lucidité qui sépare un projet qui dure d'un projet qui s'effondre à la première montée en charge."
          },
          {
            "type": "columns",
            "cols": [
              {
                "title": "Ce que le No Code fait très bien",
                "items": [
                  "Prototyper et publier vite, en quelques jours",
                  "Réduire fortement les coûts de démarrage",
                  "Donner de l'autonomie aux équipes non-techniques",
                  "Valider une idée sans mobiliser de développeur"
                ]
              },
              {
                "title": "Les limites à garder en tête",
                "items": [
                  "La montée en charge (scalabilité) sur de gros volumes",
                  "La dépendance à la plateforme (vendor lock-in)",
                  "Les logiques métier très complexes",
                  "Les besoins de personnalisation poussée"
                ]
              }
            ]
          },
          {
            "type": "p",
            "text": "L'enjeu n'est donc pas d'opposer No Code et développement sur-mesure, mais de savoir quand chacun est pertinent. Pour beaucoup de projets, le No Code suffit largement et le restera. Pour d'autres, il sert d'excellent point de départ avant de basculer, le moment venu, vers une solution plus robuste ou une approche hybride qui combine les deux. La formation vous donne justement les critères pour trancher en connaissance de cause, plutôt qu'au feeling."
          },
          {
            "type": "callout",
            "text": "Rassurez-vous : aucune ligne de code n'est requise pour démarrer. Ce que vous apprenez ici, ce n'est pas seulement à manipuler des outils, mais à éviter les pièges classiques et à garder le contrôle de vos projets sur la durée. Cette formation est animée par une formatrice expérimentée, en présentiel à Strasbourg ou à distance, pour avancer à votre rythme sur des cas concrets."
          }
        ]
      }
    ]
  },
  "formation-gamma": {
    "sections": [
      {
        "h2": "Gamma, c'est quoi et pourquoi se former à la création assistée par l'IA ?",
        "blocks": [
          {
            "type": "p",
            "text": "**Gamma** est une plateforme d'intelligence artificielle générative qui produit des présentations, des documents et des pages web à partir d'un simple texte. Vous décrivez votre idée, vous collez quelques notes ou un plan, et l'outil construit un support mis en forme. Son éditeur fonctionne par blocs, à la manière d'un document moderne plutôt que d'un logiciel de diapositives classique : pas besoin de gérer des marges, des alignements ou une palette de couleurs à la main. C'est précisément ce qui rend Gamma accessible à une personne qui n'a aucune compétence en design."
          },
          {
            "type": "p",
            "text": "Ce qui change concrètement, c'est le rapport au temps et à l'effort. Une présentation qui demandait habituellement plusieurs heures de mise en page se monte en quelques minutes. La mise en forme se fait automatiquement, le support reste interactif (liens, intégrations, contenu déroulant) et il s'exporte ensuite en PDF ou se publie directement sur le web. Vous passez ainsi moins de temps sur la forme et davantage sur ce qui compte vraiment : la clarté et la pertinence de votre message."
          },
          {
            "type": "p",
            "text": "Reste une question légitime : pourquoi suivre une formation plutôt que de tester l'outil seul un dimanche soir ? Parce que la difficulté n'est pas de cliquer, mais d'obtenir un résultat qui ne ressemble pas à tous les autres. Sans méthode, on récupère vite des rendus génériques, une structure bancale et un contenu lisse que l'IA a deviné à votre place. Se former, c'est apprendre à structurer son message **avant** de générer, à écrire des prompts qui orientent réellement le résultat, et à garder la main sur son identité de marque au lieu de la subir."
          },
          {
            "type": "p",
            "text": "C'est tout l'intérêt d'un accompagnement encadré. ABCM Performances est un organisme certifié Qualiopi basé à Strasbourg, qui anime cette formation en présentiel ou à distance en visio, avec une formatrice expérimentée. La montée en compétence est rapide parce que les exercices s'appuient sur vos propres supports : vous repartez avec des présentations et des documents directement réutilisables, pas avec des cas d'école."
          }
        ]
      },
      {
        "h2": "À quoi sert Gamma ? Cas d'usage par métier et par besoin",
        "blocks": [
          {
            "type": "p",
            "text": "La force de Gamma, c'est sa polyvalence : un même outil couvre des besoins très différents selon votre métier. Voici les usages les plus parlants, qui montrent comment l'adapter à votre quotidien plutôt que de partir d'une page blanche."
          },
          {
            "type": "ul",
            "items": [
              "**Pitch deck et présentation commerciale** : convaincre un investisseur ou un prospect avec un support professionnel généré rapidement, que l'on peut ajuster juste avant un rendez-vous.",
              "**Support de formation et pédagogique** : transformer un cours, un PDF ou de simples notes en diapositives claires et interactives, idéal pour les formateurs et les enseignants.",
              "**Rapport et document professionnel** : produire un compte rendu, un livre blanc ou une proposition commerciale structurés sans repartir de zéro à chaque fois.",
              "**Page web, mini-site et landing page** : créer une page de présentation publiable en ligne sans écrire une ligne de code.",
              "**Communication interne et marketing** : monter des newsletters, des supports d'événement ou des présentations d'équipe cohérents avec la charte graphique de l'entreprise."
            ]
          },
          {
            "type": "p",
            "text": "Que vous soyez entrepreneur, commercial, formateur, en charge des RH ou du marketing, le point commun est le même : Gamma vous fait gagner du temps sur la production des supports, à condition de savoir quoi lui demander et comment reprendre la main ensuite. C'est exactement ce que la formation vous apprend à faire pour vos propres contextes."
          }
        ]
      },
      {
        "h2": "Gamma face à PowerPoint, Google Slides et Canva : que choisir ?",
        "blocks": [
          {
            "type": "p",
            "text": "Gamma ne remplace pas forcément les outils que vous utilisez déjà : il s'y ajoute, avec une logique différente. Pour décider quand l'employer, le plus simple est de comparer ces solutions sur les critères qui font vraiment la différence au quotidien : la rapidité de création, l'automatisation du design, la courbe d'apprentissage, l'interactivité et le format web, le contrôle créatif et la collaboration."
          },
          {
            "type": "table",
            "caption": "Comparaison de Gamma avec PowerPoint, Google Slides et Canva",
            "headers": [
              "Critère",
              "Gamma",
              "PowerPoint / Google Slides",
              "Canva"
            ],
            "rows": [
              [
                "Rapidité de création",
                "Très rapide, génération par IA en quelques minutes",
                "Lente, tout se construit manuellement",
                "Moyenne, à partir de modèles à remplir"
              ],
              [
                "Automatisation du design",
                "Forte : mise en forme prise en charge automatiquement",
                "Faible : mise en page à la main",
                "Modérée : templates graphiques riches"
              ],
              [
                "Courbe d'apprentissage",
                "Douce, peu de notions techniques",
                "Modérée, standards bureautiques connus",
                "Douce à modérée selon l'ambition visuelle"
              ],
              [
                "Interactivité et format web",
                "Présentation, document et page web publiable",
                "Surtout diaporama, web limité",
                "Visuels et quelques formats web"
              ],
              [
                "Contrôle créatif",
                "Bon, mais cadré par l'IA et les thèmes",
                "Très fin, maîtrise totale du détail",
                "Très visuel, fort contrôle graphique"
              ],
              [
                "Collaboration",
                "Partage et travail en ligne",
                "Solide, surtout côté Google Slides",
                "Collaboration en ligne intégrée"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Dans les faits, **PowerPoint et Google Slides** restent imbattables quand vous avez besoin d'un contrôle fin, du respect de standards bureautiques précis ou d'un travail au pixel près, au prix d'une mise en forme manuelle et chronophage. **Canva** brille sur le terrain du design graphique et de la richesse visuelle, mais il vous demande de composer vous-même plutôt que de générer du contenu par l'IA."
          },
          {
            "type": "p",
            "text": "Voyez donc Gamma comme un **accélérateur**, complémentaire de vos outils actuels : on l'utilise pour aller vite, dégrossir un support ou produire une première version solide, puis on bascule sur un autre outil quand on recherche une maîtrise fine. Le bon réflexe n'est pas de choisir un camp, mais de savoir lequel sortir selon le besoin du moment, entre vitesse et précision. C'est ce discernement, plus que la simple prise en main de l'outil, que vous développez en formation."
          }
        ]
      }
    ]
  },
  "formation-marketing-rh-marque-employeur": {
    "sections": [
      {
        "h2": "Marketing RH, marque employeur, EVP : de quoi parle-t-on et pourquoi se former ?",
        "blocks": [
          {
            "type": "p",
            "text": "Ces trois expressions reviennent partout dès qu'on parle d'attractivité, et elles sont souvent employées l'une pour l'autre. Pourtant elles ne désignent pas la même chose. Poser ce vocabulaire est la première condition pour bâtir une démarche solide plutôt que d'empiler des actions sans fil conducteur."
          },
          {
            "type": "ul",
            "items": [
              "**Le marketing RH** consiste à appliquer les techniques du marketing (segmentation, ciblage, message, canaux) à l'attraction et à la fidélisation des talents. C'est une boîte à outils et une posture, on s'adresse aux candidats et aux collaborateurs comme à un public dont il faut comprendre les attentes.",
              "**La marque employeur** est l'image et la réputation perçues de l'entreprise en tant qu'employeur. Elle existe que vous la pilotiez ou non, puisqu'elle se construit aussi dans les avis en ligne, le bouche-à-oreille et l'expérience vécue par ceux qui passent par vos process.",
              "**L'EVP (Employee Value Proposition), ou proposition de valeur employeur,** est ce que l'entreprise offre concrètement en échange de l'engagement : rémunération, conditions de travail, sens, perspectives d'évolution, qualité du management, équilibre de vie."
            ]
          },
          {
            "type": "p",
            "text": "L'articulation est simple à mémoriser : l'EVP est le fond (ce que vous offrez vraiment), la marque employeur est la perception (ce que les autres en retiennent), et le marketing RH est le moteur qui diffuse l'un pour nourrir l'autre. Une marque employeur convaincante sans EVP réelle derrière ne tient pas longtemps, le décalage finit toujours par se voir."
          },
          {
            "type": "h3",
            "text": "Pourquoi monter en compétence sur le sujet en 2026 ?"
          },
          {
            "type": "p",
            "text": "Le rapport de force a changé. Sur de nombreux métiers, ce sont les candidats qui choisissent, et ils consultent les avis, les profils des équipes et la présence en ligne de l'entreprise bien avant d'envoyer une candidature. L'alignement entre la promesse affichée et la réalité du quotidien est devenu un prérequis, plus un argument différenciant que l'on peut se permettre de négliger."
          },
          {
            "type": "p",
            "text": "Pour une fonction RH (DRH, RRH, talent manager, responsable formation), maîtriser ces leviers produit des effets très concrets : des candidatures mieux ciblées et plus qualifiées, un turnover qui se réduit, une e-réputation que l'on pilote au lieu de la subir, et une cohérence enfin établie entre la communication interne et le discours externe. Se former, c'est passer d'actions ponctuelles à une démarche structurée et mesurable."
          }
        ]
      },
      {
        "h2": "Construire sa marque employeur : la méthode en 7 étapes",
        "blocks": [
          {
            "type": "p",
            "text": "Une marque employeur crédible ne se décrète pas, elle se construit dans un ordre logique. Voici la démarche que nous déroulons en formation, transposable directement à votre organisation, quelle que soit sa taille."
          },
          {
            "type": "ol",
            "items": [
              "**Auditer.** Mesurez la perception actuelle, en interne auprès des collaborateurs et en externe auprès des candidats et sur les plateformes d'avis. On ne corrige bien que ce que l'on a d'abord regardé en face.",
              "**Révéler les valeurs et la culture réelles.** La fondation doit être authentique : on s'appuie sur ce qui existe vraiment dans l'entreprise, pas sur une culture rêvée.",
              "**Formaliser l'EVP.** Mettez des mots sur ce qui rend l'entreprise unique et désirable, ce que l'on y trouve et qu'on ne trouve pas ailleurs.",
              "**Définir le positionnement et les messages clés.** Choisissez les axes que vous voulez incarner et formulez des messages cohérents entre le discours et le vécu.",
              "**Déployer un plan de communication multicanal.** Site carrière, LinkedIn, réseaux sociaux, prise de parole des collaborateurs ambassadeurs : chaque canal sert le même fil.",
              "**Soigner l'expérience candidat et collaborateur.** De la première interaction à l'intégration, chaque point de contact confirme (ou contredit) votre promesse.",
              "**Mesurer, ajuster et faire vivre la marque dans le temps.** Une marque employeur n'est pas un projet à boucler mais une pratique à entretenir."
            ]
          },
          {
            "type": "p",
            "text": "Ces étapes ne sont pas figées : on les adapte au contexte, aux moyens et au niveau de maturité de chaque structure. C'est précisément le travail mené en intra ou en inter-entreprise, pour repartir avec un plan applicable et non une théorie."
          }
        ]
      },
      {
        "h2": "Mesurer l'efficacité de sa marque employeur : les indicateurs clés",
        "blocks": [
          {
            "type": "p",
            "text": "C'est souvent l'angle mort : on investit dans l'attractivité sans savoir si cela fonctionne. Pour piloter, mieux vaut suivre quelques indicateurs répartis sur trois axes complémentaires, l'attractivité (est-ce qu'on attire ?), la conversion (est-ce qu'on transforme ?) et la rétention (est-ce qu'on garde et qu'on engage ?)."
          },
          {
            "type": "table",
            "caption": "Indicateurs de pilotage de la marque employeur, par axe",
            "headers": [
              "Axe",
              "Indicateurs à suivre",
              "Ce qu'une variation signale"
            ],
            "rows": [
              [
                "Attractivité",
                "Volume et qualité des candidatures, trafic et candidatures issues du site carrière, notoriété employeur, note et avis sur les plateformes (Glassdoor, Indeed)",
                "Une hausse des candidatures qualifiées indique une EVP plus différenciante et mieux diffusée ; une note d'avis qui baisse alerte sur l'expérience vécue."
              ],
              [
                "Conversion",
                "Taux de transformation candidature vers entretien puis embauche, coût et délai de recrutement, taux d'acceptation des offres",
                "Un faible taux d'acceptation des offres révèle souvent un décalage entre la promesse et ce qui est confirmé pendant le process."
              ],
              [
                "Rétention / engagement",
                "Taux de turnover, taux de rétention, score d'engagement et eNPS, taux de cooptation par les collaborateurs",
                "Une cooptation qui progresse est un bon signe : les collaborateurs deviennent prescripteurs, donc la promesse tient en interne."
              ]
            ]
          },
          {
            "type": "p",
            "text": "Le réflexe utile n'est pas de tout mesurer, mais de choisir 3 à 5 KPI prioritaires, ceux qui parlent à votre direction et à vos enjeux du moment. Un suivi trimestriel suffit pour repérer les tendances, et une révision de l'EVP tous les 12 à 18 mois permet de rester aligné sur la réalité de l'entreprise, qui évolue elle aussi."
          }
        ]
      },
      {
        "h2": "Enjeux 2026 et erreurs à éviter en marketing RH",
        "blocks": [
          {
            "type": "callout",
            "title": "Les trois erreurs qui font le plus de dégâts",
            "text": "**Le décalage promesse / réalité :** une marque employeur idéalisée attire, puis déçoit, et la déception nourrit le désengagement et le turnover. C'est l'erreur la plus coûteuse car elle abîme la réputation de l'intérieur. **L'absence de mesure :** mener des actions sans jamais en évaluer l'effet revient à naviguer sans instruments, on ne sait ni ce qui marche ni quoi corriger. **La négligence de l'expérience candidat :** process interminables, absence de retour après un entretien, avis en ligne ignorés : autant de signaux qui pèsent lourd dans la décision d'un candidat."
          },
          {
            "type": "h3",
            "text": "Deux tendances à intégrer"
          },
          {
            "type": "p",
            "text": "L'IA et le matching s'installent dans le recrutement. Bien utilisés, ils ne remplacent pas le jugement RH mais libèrent du temps sur les tâches répétitives, du temps que l'on peut réinvestir dans les missions à plus forte valeur : la relation candidat, la qualité de l'intégration, la stratégie d'attractivité."
          },
          {
            "type": "p",
            "text": "L'autre mouvement de fond est l'exigence de transparence. Engagements RSE assumés, témoignages de collaborateurs plutôt que discours corporate, communication interne forte qui rejaillit naturellement à l'extérieur : ces leviers d'attractivité ont en commun de reposer sur le vrai. C'est aussi ce qui les rend efficaces et durables."
          },
          {
            "type": "p",
            "text": "Éviter ces écueils tient surtout à la méthode et à la pratique. C'est ce que vise notre formation Marque employeur & Marketing RH, organisme certifié Qualiopi à Strasbourg, en présentiel ou à distance en visio, finançable via votre OPCO : repartir avec les bons réflexes et une démarche que vous saurez tenir dans la durée."
          }
        ]
      }
    ]
  },
  "formation-personal-branding": {
    "sections": [
      {
        "h2": "Personal branding : qu'est-ce que c'est et pourquoi se former ?",
        "blocks": [
          {
            "type": "p",
            "text": "Le **personal branding**, c'est gérer son image professionnelle comme on gère une marque. Vous ne décidez pas seul de la façon dont les autres vous perçoivent, mais vous pouvez orienter cette perception en rendant visibles vos valeurs, votre expertise et ce qui vous distingue. Il ne s'agit pas de se construire un personnage, plutôt de donner une forme claire et cohérente à ce que vous êtes déjà, pour que les bonnes personnes le comprennent rapidement."
          },
          {
            "type": "p",
            "text": "On confond souvent quatre notions voisines. Votre marque personnelle est l'identité que vous émettez volontairement : votre positionnement, votre discours, vos prises de parole. Votre e-réputation est la perception reçue, ce que l'on dit de vous et ce que l'on trouve à votre sujet en ligne. L'image de marque concerne une entreprise dans sa globalité, et la marque employeur sa capacité à attirer et fidéliser des talents. Le personal branding se situe à l'articulation de tout cela : c'est le levier individuel qui nourrit, ou fragilise, l'ensemble."
          },
          {
            "type": "p",
            "text": "Pourquoi cette discipline est-elle devenue un véritable actif ? Parce que la première rencontre avec un prospect, un recruteur ou un partenaire se fait de plus en plus en ligne, avant tout échange direct. Dans un marché concurrentiel, une présence maîtrisée installe de la légitimité et permet de se différencier de profils aux compétences pourtant comparables. La visibilité n'est plus un bonus réservé aux extravertis : c'est une condition pour être considéré."
          },
          {
            "type": "p",
            "text": "Les bénéfices attendus sont concrets et mesurables dans la durée. Côté business, une marque personnelle solide ouvre des opportunités d'affaires et facilite la prospection, car les contacts arrivent déjà convaincus. Côté carrière, elle renforce l'employabilité et la qualité du réseau. Dans tous les cas, elle installe une confiance et une crédibilité qui raccourcissent les cycles de décision : on vous accorde plus vite le bénéfice du doute."
          },
          {
            "type": "p",
            "text": "Reste la question du format. On peut apprendre seul, à coups de tutoriels et d'essais-erreurs, mais cela demande beaucoup de temps et laisse souvent des angles morts. Une formation apporte une méthode structurée, un regard extérieur sur votre positionnement et une mise en pratique encadrée. Chez ABCM Performances, organisme certifié Qualiopi à Strasbourg, ce travail se fait en présentiel ou à distance en visio, avec une formatrice expérimentée et un financement possible via votre OPCO."
          }
        ]
      },
      {
        "h2": "À qui s'adresse le personal branding ? Profils et cas d'usage",
        "blocks": [
          {
            "type": "p",
            "text": "Le personal branding n'est pas réservé à une catégorie de professionnels. Ce qui change d'un profil à l'autre, c'est l'objectif visé et donc le premier levier à activer. Voici les situations les plus fréquentes et le bénéfice principal associé à chacune."
          },
          {
            "type": "table",
            "caption": "Profils, bénéfice principal et premier levier d'action",
            "headers": [
              "Profil",
              "Bénéfice principal",
              "Premier levier d'action"
            ],
            "rows": [
              [
                "Dirigeant ou chef d'entreprise",
                "Incarner sa société et crédibiliser la marque, attirer partenaires et talents",
                "Clarifier le lien entre sa parole personnelle et la vision de l'entreprise"
              ],
              [
                "Indépendant, freelance, consultant",
                "Se faire connaître, justifier son expertise et son tarif, générer des prospects",
                "Affirmer un positionnement de spécialiste plutôt que de généraliste"
              ],
              [
                "Salarié et collaborateur ambassadeur",
                "Gagner en influence interne et devenir relais de la marque employeur",
                "Prendre la parole sur son métier sans se substituer à la communication officielle"
              ],
              [
                "Personne en évolution ou recherche d'emploi",
                "Renforcer l'attractivité de son profil et activer son réseau",
                "Rendre visibles ses réalisations et son intention professionnelle"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Si vous vous reconnaissez dans plusieurs lignes à la fois, c'est normal : un dirigeant indépendant cumule les enjeux. L'intérêt d'un accompagnement, en intra comme en inter-entreprise, est justement de hiérarchiser ces objectifs pour ne pas se disperser et concentrer l'effort là où il produira le plus d'effet."
          }
        ]
      },
      {
        "h2": "Les erreurs de personal branding à éviter",
        "blocks": [
          {
            "type": "p",
            "text": "Une marque personnelle abîmée se répare beaucoup plus lentement qu'elle ne se construit. Avant de vous lancer, voici les pièges qui font perdre en crédibilité, et que l'on apprend à contourner dès les fondations."
          },
          {
            "type": "callout",
            "title": "Les cinq pièges les plus courants",
            "text": "Confondre visibilité et sur-exposition : l'objectif est la cohérence, pas le bruit permanent. Mieux vaut peu de prises de parole justes qu'un flux continu sans valeur. Manquer d'authenticité ou copier le style d'une référence admirée : le mimétisme se repère vite et fait perdre la confiance que l'on cherchait à gagner. Négliger la cohérence entre image, discours et supports d'un canal à l'autre : un profil, une bio et un ton qui se contredisent brouillent le message. Publier sans ligne éditoriale ni régularité, puis tout abandonner aux premières critiques : la constance compte davantage que l'intensité des débuts. Oublier sa cible et son objectif : un personal branding efficace sert une stratégie, pas un ego. Si une publication ne dit rien à personne en particulier, elle ne sert sans doute à personne."
          },
          {
            "type": "p",
            "text": "Ces réflexes ne s'improvisent pas : ils se travaillent avec une méthode et un regard extérieur honnête. C'est précisément ce que vous mettez en place pendant les deux journées de formation, pour construire une présence qui vous ressemble et qui tient dans le temps."
          }
        ]
      }
    ]
  }
};

export function formationContent(slug) {
  return FORMATION_CONTENT[slug] || null;
}
