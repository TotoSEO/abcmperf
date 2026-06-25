---
name: abcm-performances-design
description: Use this skill to generate well-branded interfaces and assets for ABCM Performances (agence de communication & marketing digital, Strasbourg), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Brand:** ABCM Performances — French digital marketing/communication agency, Strasbourg, since 2015. Warm + energetic + performance-driven. Copy is in **French**, addresses the reader as **vous**.
- **Entry point:** link `styles.css` (it `@import`s all tokens + fonts). Theme via CSS custom properties; add `[data-theme="dark"]` / `.on-dark` to a section for the night-blue treatment.
- **Components:** React primitives in `components/`, exported on `window.ABCMPerformancesDesignSystem_d992a8`. Each has a `.prompt.md` with usage.
- **Foundations:** `tokens/` (colors, typography, spacing, effects, fonts) + specimen cards in `guidelines/`.
- **Full screens:** `ui_kits/marketing/` and `ui_kits/blog/` — interactive recreations to copy from.

## Brand shorthand
- **Colour:** light neutral base · night blue `#00001b` for dark sections · **yellow `#fad646`** is the only action accent (night-blue text on yellow) · the 5 logo colours (yellow/orange/magenta/blue/green) for categories & the circle motif.
- **Type:** Space Grotesk (display), Hanken Grotesk (body), Space Mono (eyebrows/labels).
- **Shape:** generous rounding (pills, `radius-lg` cards, round avatars); soft cool shadows; hover = lift + category-hue underline.
- **Signature device:** the overlapping translucent circles (`CircleMotif`).
- **Icons:** Lucide (stroke 2). Emoji only the occasional 🚀 on a hero.

Always prefer real photography / supplied logos over the colour-block placeholders used in the kits.
