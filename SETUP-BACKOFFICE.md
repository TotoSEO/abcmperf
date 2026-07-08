# Mise en ligne du site + back-office (Vercel + Supabase)

**Swap complet vers Vercel + Supabase.** Le site public **et** le back-office
sont désormais servis par Vercel (fini GitHub Pages et l'export statique). Une
fois les 2 comptes gratuits créés et les clés branchées (~**5 minutes**), le
site est **en ligne comme pour le public** sur une URL `…vercel.app` — il ne
restera qu'à **brancher le nom de domaine** (dernière étape).

Tout est transférable à ta supérieure plus tard (Supabase et Vercel permettent
de transférer un projet).

---

## 1. Base de données — Supabase (2 min)

1. Créer un compte sur **https://supabase.com** → **New project**.
2. Choisir une région proche (**Europe / Frankfurt** ou **Paris**), définir un
   mot de passe de base de données (le noter).
3. Aller dans **Project Settings → Database → Connection string → URI**.
4. Copier l'URI. **Important** : prendre la version **« Connection pooler »**
   (port **6543**), adaptée au serverless de Vercel. Elle ressemble à :
   ```
   postgresql://postgres.xxxxx:MOT_DE_PASSE@aws-0-eu-west-3.pooler.supabase.com:6543/postgres
   ```
   → c'est la valeur `DATABASE_URI`.

## 2. Hébergement — Vercel (2 min)

1. Créer un compte sur **https://vercel.com** avec ton compte GitHub.
2. **Add New → Project** → importer le dépôt **TotoSEO/abcmperf**.
3. Sélectionner la branche **`claude/github-pages-vercel-supabase-wc0kei`**.
4. Avant de déployer, ouvrir **Environment Variables** et ajouter :

   | Nom | Valeur |
   |-----|--------|
   | `DATABASE_URI` | l'URI Supabase (étape 1) |
   | `PAYLOAD_SECRET` | une longue chaîne aléatoire (ex. `openssl rand -base64 32`) |

5. **Deploy**. Au bout d'1-2 min, une URL de preview `https://…vercel.app` est
   prête. Le back-office est sur **`/admin-login`**.

## 3. Stockage des images (optionnel mais recommandé) — Vercel Blob (1 min)

Sur Vercel : **Storage → Create → Blob** → créer le store. Vercel ajoute
automatiquement `BLOB_READ_WRITE_TOKEN` au projet (sinon, le copier dans les
Environment Variables). Les images uploadées depuis le back-office y seront
stockées.

## 4. Importer le contenu existant (une fois)

Cette commande crée les 67 articles, les 262 redirections et les pages dans la
base Supabase. À lancer **depuis un checkout du dépôt** (les articles et images
d'origine sont dans le dépôt), en pointant sur la base Supabase :

```bash
# à la racine du projet, sur la branche du back-office
npm install
DATABASE_URI="postgresql://…pooler.supabase.com:6543/postgres" \
  npm run migrate:content
```

Créer ensuite le compte administrateur — soit en ouvrant `/admin-login` la
première fois (Payload propose la création du 1er utilisateur), soit :

```bash
DATABASE_URI="…" ADMIN_EMAIL="toi@exemple.com" ADMIN_PASSWORD="…" \
  npm run seed:admin
```

> La commande est **idempotente** : relançable sans créer de doublon.

---

## Ce que fait déjà le back-office

- **Pages** filtrables par type (classique / service / formation / portfolio).
- **Pages classiques** : édition Title / Meta / H1 (+ contenu).
- **Articles** : Title/Meta/H1, image à la une + **alt**, **En bref**, extrait,
  **contenu riche** (titres H2→H4, listes, tableaux, citations, liens) +
  **blocs** maison : **Astuce**, **Bannière CTA** (texte / libellé / lien /
  couleur éditables), **Colonnes**. Création d'articles avec choix du slug,
  brouillons + autosave.
- **Redirections 301/302** : les 262 existantes déjà chargées, ajout/édition.
- **Médias** : bibliothèque d'images avec alt.

## Prochaine étape (à valider ensemble)

Aujourd'hui le back-office gère le contenu **en base**, mais le **site public**
continue de s'afficher à partir des fichiers d'origine (rendu inchangé, SEO
préservé). L'étape suivante consiste à **brancher les pages publiques sur
Payload** (rendu serveur / ISR) pour que « Publier » dans l'admin mette à jour
le site en direct — sans rien changer aux URLs ni au SEO.
