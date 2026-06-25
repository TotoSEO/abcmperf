# Handoff — Site ABCM Performances (Next.js)

Refonte du site **abcmperformances.com** construite sur le design system ABCM, en **Next.js (App Router)**. Tout est prêt et buildé ; il reste juste à pousser sur GitHub depuis une session connectée à `TotoSEO/abcmperf`.

## Ce qu'il y a dans l'archive

- `app/` — pages Next.js : `/` (accueil), `/contact`, `/services/[slug]` (8 fiches en SSG) + le layout, les métadonnées SEO et les 3 CSS globaux (`globals.css`, `ds.css`, `site.css`).
- `components/ds/` — primitives du design system portées en React (Button, Card, Input, Accordion, ServiceCard, etc.).
- `components/site/` — sections du site (Header, Hero, Services, Testimonials, FAQ, Contact, Footer).
- `data/services.js` — données partagées (services, navigation).
- `public/` — logo ABCM.
- `project/` — le design system source (handoff Claude Design) — référence.
- `chats/` — transcript de conception — référence.
- `README.md` — doc du projet.

> `node_modules/` et `.next/` ne sont **pas** inclus (ils se régénèrent avec `npm install`).

## Démarrer en local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de prod (génère 13 pages statiques)
```

## Pousser sur GitHub (dans une session connectée à TotoSEO/abcmperf)

### Option A — à partir de l'archive .zip
1. Décompresse le zip dans le dossier du dépôt `abcmperf` (vide).
2. ```bash
   git checkout -b refonte-design-system
   git add -A
   git commit -m "Refonte du site ABCM Performances sur le design system (Next.js)"
   git push -u origin refonte-design-system
   ```
3. Ouvre une Pull Request.

### Option B — à partir du bundle git (préserve l'historique des commits)
1. ```bash
   git clone abcm-performances.bundle abcmperf-site
   cd abcmperf-site
   git remote set-url origin https://github.com/TotoSEO/abcmperf.git
   git push -u origin refonte-design-system
   ```

## Notes / à finaliser avant prod
- **Polices** : Space Grotesk / Hanken Grotesk / Space Mono (choix validé). Modifiable dans `app/globals.css` + le `<link>` de `app/layout.jsx`.
- **Icônes** : `lucide-react` ; les glyphes sociaux (Instagram/LinkedIn/YouTube) sont inlinés dans `components/ds/Icon.jsx`.
- **Images/logos clients** = placeholders (à remplacer par vos vraies photos + logos).
- **Formulaire de contact** : affiche un succès factice, à brancher (email/CRM).
- **Liens réseaux sociaux** : génériques, à pointer vers vos vrais comptes.

## Périmètre livré
Première passe validée : **Accueil + Contact + 1 service** (parcours vertical complet ; les 8 fiches services sont générées, `site-web`/`community`/`seo` ont une méthode détaillée). À étendre ensuite : Blog, À propos, fiches services enrichies.
