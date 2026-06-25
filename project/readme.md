# ABCM Performances — Design System

A modern, original design system for **ABCM Performances**, a digital communication & marketing agency in Strasbourg (France), active since 2015. It is built to seed an entirely new website (and related assets) with Claude Code, while staying faithful to ABCM's existing brand charte.

> **Direction chosen:** *Hybride* — a calm, premium light base anchored on the brand **night blue** (`#00001b`) with a single **yellow accent** (`#fad646`) for action, and the **5-colour logo palette** reserved as a vivid categorical / expressive system. (The source tokens proposed Direction A "sober" vs Direction B "multicolour"; this system blends both.)

---

## The company

ABCM Performances ("Agence de communication & marketing digital à Strasbourg") is a ~9-person agency offering an end-to-end ("360°") set of digital services:

- **Web** — création de site internet (vitrine, e-commerce, one-page), maintenance & hébergement, audit.
- **Référencement** — SEO, **GEO (référencement IA)**, Google Ads (SEA / Display / Shopping).
- **Réseaux & contenu** — Community Management, vidéos réseaux sociaux, vidéos marque employeur.
- **Conseil** — stratégie digitale, marketing externalisé, personal branding, marque employeur.
- **Formations** — montée en compétences digital & IA.

Positioning is warm and human-scale ("équipe à taille humaine", "chez nous vous êtes chouchouté"), performance-driven, and increasingly AI-forward.

### Sources used to build this system
- **Brand charte / tokens:** `uploads/abcm-design-tokens.css` + `uploads/abcm-design-tokens-1.txt` (extracted from the live Flatsome WordPress theme).
- **Logo:** `uploads/logo-abcm.png` → `assets/logo-abcm-circles.png` (5 overlapping translucent circles).
- **Live site (reference for products & copy):** https://abcmperformances.com
- **GitHub repo provided:** https://github.com/TotoSEO/abcmperf — *empty at build time (no commits)*. If/when populated, explore it for real component code, page templates and asset paths to raise fidelity further.

> The reader is encouraged to explore the live site and the GitHub repo to design more accurately against the real product.

---

## Content fundamentals

How ABCM writes — match this voice in any copy you generate.

- **Language:** French (France). The live site is entirely in French.
- **Address:** **vous** (formal-but-warm "you"). Speaks directly to the client and their goals.
- **Tone:** energetic, reassuring, concrete. Performance and visibility are the recurring promise ("Boostez votre visibilité", "augmenter votre trafic"). Human warmth balances the sales energy ("autour d'un café", "chouchouté", "à taille humaine").
- **Casing:** Section labels and CTAs are frequently **ALL-CAPS** on the legacy site ("NOUS CONTACTER", "NOS SERVICES"). In this modernised system we keep all-caps only for **mono eyebrows / micro-labels**; titles use sentence case or Title Case for a cleaner, modern read.
- **Sentence style:** short, punchy. Heavy use of **bold** to spotlight keywords (services, benefits). Lists of benefits are common.
- **Emoji:** the live site uses the 🚀 rocket on hero/section headers. Use **sparingly** (a single 🚀 on a hero is on-brand); never pepper UI with emoji.
- **Vocabulary:** "visibilité", "stratégie digitale", "sur-mesure", "accompagnement", "réactivité & efficacité", "360°", "notoriété", "leads qualifiés".
- **Examples (real):**
  - Hero: *"AGENCE DE COMMUNICATION & MARKETING DIGITAL 🚀"*
  - Promise: *"Boostez votre visibilité sur le Web & les réseaux sociaux."*
  - Reassurance: *"chez nous vous êtes chouchouté et vous ne serez pas déçu !"*
  - CTA: *"NOUS CONTACTER"*, *"En savoir plus"*, *"VOIR NOS RÉFÉRENCES"*.

---

## Visual foundations

**Colour**
- Base is a **cool neutral ramp** biased toward the night blue (`--neutral-50…950`, `--night #00001b`). Light theme default; `[data-theme="dark"]` / `.on-dark` flips any section to night blue.
- **One action accent:** brand **yellow `#fad646`** (`--accent-400`) with a full tint/shade ramp. Text on yellow is always the night blue, never white.
- The **5 logo colours** (`--logo-yellow/orange/magenta/blue/green`) are a *categorical / expressive* layer — used for service categories, blog tags, the circle motif, and avatar tints. They are never the primary UI colour.
- **Semantic states** map onto the logo palette for cohesion: success = logo green, info = logo blue, warning = amber, danger = logo magenta (each with a soft tint).

**Type**
- **Display / headings:** *Space Grotesk* — geometric, characterful, echoing the circular logo geometry. Bold (700), tight tracking, balanced wrapping.
- **Body / UI:** *Hanken Grotesk* — clean, warm, highly legible.
- **Mono / labels:** *Space Mono* — eyebrows, overlines, stats, technical accents (uppercase, wide tracking).
- Scale is a 1.250 major-third; display sizes are fluid `clamp()`. *(Original charte used Roboto / Roboto Condensed 900/400 — kept as fallbacks; see Caveats.)*

**Backgrounds & imagery**
- Mostly **flat** surfaces (white / very-light neutral) with **night-blue full-bleed sections** for hero, stats, contact and footer — creating rhythm. No noisy gradients.
- The **signature device** is the **overlapping translucent circles** from the logo (`CircleMotif`): screen-blend on dark, multiply on light. Used decoratively in hero corners, blog thumbnails, dividers.
- Imagery should be **warm, human, real** (team, office, Strasbourg, projects). Placeholders here use brand-colour blocks + the motif; swap in real photography.

**Shape & elevation**
- **Generous rounding** echoes the circular logo: cards `--radius-lg (20px)`, pills for buttons/badges/tags, fully-round avatars & icon tiles.
- **Soft, cool-tinted shadows** (toward night blue), never harsh black. Cards: subtle `--shadow-sm` at rest, lifting to `--shadow-lg` on hover. The primary button has a yellow **glow** (`--shadow-accent`).
- **Borders:** hairline `--border` (neutral-200) on light cards; translucent white borders on dark.

**Motion & interaction**
- Default easing `--ease-out` (smooth decel); a gentle spring `--ease-spring` for toggles/check marks. Durations 120/220/420ms.
- **Hover:** cards lift (`translateY(-4–6px)`) + shadow; service cards reveal a bottom **underline in their category hue**; links shift to `--accent-600`. Primary buttons lift + glow.
- **Press:** subtle scale-down (`scale(0.985–0.92)`).
- **Focus:** 2px yellow outline / 4px soft yellow ring. All respects `prefers-reduced-motion`.

**Layout**
- 4px spacing grid (`--space-*`). Containers: `1200px` default, `760px` for prose, fluid `--gutter`. Section rhythm via `--section-y` clamp.
- Sticky **glass header** (blur + translucent surface) that gains a border/shadow on scroll.

---

## Iconography

- **System:** **Lucide** (https://lucide.dev), stroke width 2, rounded caps/joins — clean, modern, consistent. Loaded via CDN in the UI kits and rendered through a small `Icon` React wrapper (`ui_kits/marketing/icons.jsx`).
- **Why a substitution:** the legacy ABCM site uses **bespoke raster PNG illustrations** for each service (colourful, hand-made) plus standard social glyphs. Those PNGs are not available to this build (the GitHub repo is empty and site media is external). Lucide is a deliberate, documented stand-in for **UI chrome** icons (menu, arrow, mail, phone, search, social, etc.).
- **For production:** supply the real service illustrations / brand spot-icons as SVG or PNG into `assets/` and swap them into `ServiceCard` where richer, on-brand illustration is wanted. Keep Lucide for functional UI icons.
- **Emoji:** only the occasional 🚀 on a hero, matching the live site. Not used as UI iconography.
- **No hand-drawn brand icons** were invented — the one brand graphic reproduced is the official **circle motif** (the logo's own geometry), provided as the `CircleMotif` component.

---

## Index / manifest

**Root**
- `styles.css` — single entry point (consumers link this). `@import`s everything below.
- `readme.md` — this guide. · `SKILL.md` — Agent-Skill front-matter for Claude Code.

**`tokens/`** (all reachable from `styles.css`)
- `fonts.css` — Google Fonts import (Space Grotesk, Hanken Grotesk, Space Mono).
- `colors.css` — neutrals, accent ramp, logo palette, semantic states, light + dark aliases.
- `typography.css` — families, weights, fluid scale, tracking, leading.
- `spacing.css` — 4px grid, section rhythm, containers.
- `effects.css` — radii, borders, shadows, blur, motion, z-index.
- `base.css` — light resets + element defaults + `.eyebrow` / `.lead` utilities.

**`assets/`**
- `logo-abcm-circles.png` — primary mark (5 circles).

**`components/`** (React primitives — `window.ABCMPerformancesDesignSystem_d992a8.*`)
- `core/` — **Button**, **IconButton**, **Badge**, **Tag**, **Avatar**, **Card**.
- `forms/` — **Input**, **Textarea**, **Select**, **Checkbox**, **Radio**, **Switch**.
- `feedback/` — **Tabs**, **Accordion**, **Alert**.
- `marketing/` — **LogoMark**, **SectionHeading**, **ServiceCard**, **StatCard**, **TestimonialCard**, **CircleMotif**.
- Each directory has a `*.card.html` specimen for the Design System tab; each component has `.d.ts` + `.prompt.md`.

**`ui_kits/`**
- `marketing/` — interactive homepage + service detail + contact (`index.html`). See its README.
- `blog/` — article list + article view (`index.html`). See its README.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) rendered on the Design System tab.

---

## Using it

In a card / kit HTML, link the stylesheet and read components off the namespace:

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, ServiceCard, SectionHeading } = window.ABCMPerformancesDesignSystem_d992a8;
</script>
```

All styling flows from CSS custom properties — theme by overriding tokens or adding `[data-theme="dark"]` / `.on-dark` to a section.

---

## Caveats

- **Fonts modernised (flag):** the brand charte specifies **Roboto / Roboto Condensed**. To meet the "modern & original" brief this system leads with **Space Grotesk + Hanken Grotesk + Space Mono** (Roboto kept as fallback). Easy to revert by editing `tokens/fonts.css` + `--font-*` in `tokens/typography.css` — tell me if you'd rather stay on Roboto.
- **GitHub repo empty:** `TotoSEO/abcmperf` had no commits, so all fidelity comes from the tokens + live site. Push the codebase and I can lift exact components/pages.
- **Imagery & client logos:** real photography, service illustrations and client logos couldn't be fetched — placeholders (brand colour blocks, the circle motif, greyscale text wordmarks) stand in. Provide assets for production polish.
- **No slide template** was provided, so none was built — I can add a branded deck (title / content / quote / comparison) on request.
