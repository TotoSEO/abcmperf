# ABCM Performances — Site web

Refonte du site de **ABCM Performances**, agence de communication & marketing digital à Strasbourg (depuis 2015), construite avec **Next.js (App Router)** sur le **design system ABCM**.

Direction artistique : base claire premium ancrée sur le **bleu nuit** `#00001b`, accent unique **jaune** `#fad646` pour l'action, et la **palette des 5 couleurs du logo** (jaune / orange / magenta / bleu / vert) comme système expressif/catégoriel. Typo : Space Grotesk (titres) · Hanken Grotesk (texte) · Space Mono (labels).

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production (SSG)
npm run start    # sert le build
```

## Pages livrées (première passe)

| Route | Description |
|-------|-------------|
| `/` | Accueil — hero, bandeau clients, grille d'expertises filtrable, avis clients, FAQ, section contact |
| `/contact` | Page contact dédiée (formulaire + coordonnées) |
| `/services/[slug]` | Fiche expertise (8 services pré-générés en SSG ; `site-web`, `community`, `seo` ont une méthode détaillée) |

Périmètre validé avec le client : **Accueil + Contact + 1 service** (un parcours vertical complet). Les autres pages (À propos, Blog, fiches services détaillées) sont à étendre.

## Structure

```
app/
  layout.jsx            # chrome (Header/Footer), métadonnées SEO, fonts
  page.jsx              # accueil
  contact/page.jsx      # /contact
  services/[slug]/page.jsx  # fiches services (generateStaticParams + metadata)
  globals.css           # tokens du design system + base
  ds.css                # styles des composants du design system
  site.css              # mise en page des sections
components/
  ds/                   # primitives du design system portées en React/Next
                        #   (Button, Card, Input, Accordion, ServiceCard, …)
  site/                 # sections du site (Header, Hero, Services, Contact, …)
data/services.js        # données partagées (services, navigation, étapes méthode)
public/                 # logo ABCM
project/                # design system source (handoff Claude Design) — référence
chats/                  # transcript de conception — référence
```

## Design system

Le dossier `project/` contient le design system d'origine (tokens, composants, UI kits, specimens) exporté depuis Claude Design. Les primitives `components/ds/*` en sont le portage Next.js : mêmes classes CSS (`abcm-*`) et mêmes tokens, mais sans l'injection de `<style>` au runtime — tout le CSS est global (`app/*.css`) pour un rendu SSR propre. Voir `project/readme.md` pour le guide complet de la marque (fondations, voix, iconographie).

### Notes / substitutions

- **Polices** : Space Grotesk / Hanken Grotesk / Space Mono (choix « moderne » validé), au lieu du Roboto de la charte d'origine. Modifiable dans `app/globals.css` + le `<link>` de `app/layout.jsx`.
- **Icônes** : [Lucide](https://lucide.dev) via `lucide-react`. Les glyphes de marque (Instagram/LinkedIn/YouTube) sont inlinés dans `components/ds/Icon.jsx` (retirés de lucide-react 1.x).
- **Images & logos clients** : placeholders (wordmarks en niveaux de gris, motif des cercles). À remplacer par les vraies photos (équipe, bureau, projets) et logos clients pour la mise en production.
- **Formulaire de contact** : non connecté à un back-end — affiche un état de succès factice. À brancher (email / CRM) avant production.

## Sources

- Charte / tokens : `project/uploads/` (extraits du thème WordPress Flatsome existant)
- Site de référence : https://abcmperformances.com
- Dépôt : https://github.com/TotoSEO/abcmperf
