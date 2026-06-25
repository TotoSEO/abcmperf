# UI Kit — Blog

Recreation of the **ABCM Performances** blog, modernised onto the new design system. Interactive list ⇄ article.

## Screens & flow
- **List** (`index.html`) — sticky header, hero heading, a featured "À la une" post, category filter chips (Stratégie / IA / E-commerce / No Code / Formation), and a responsive 3-up post grid. Click any card to open it.
- **Article** — back link, category tag, title, author byline, hero thumbnail, prose body (lead, headings, pull-quote) and a closing CTA block.

## Files
- `index.html` — shell + all blog CSS; loads React, Babel, Lucide, DS bundle, then `icons.jsx` (shared from the marketing kit) and `blog.jsx`.
- `blog.jsx` — `POSTS` data, `BlogHeader`, `Thumb`, `BlogList`, `Article`, `BlogFooter`, `BlogApp`.

## Components used
`LogoMark`, `Button`, `SectionHeading`, `Tag`, `Badge`, `Avatar`, `CircleMotif`.

## Notes
- Post **thumbnails** are brand-motif colour blocks with a category icon — the live site uses real article visuals (711×400 PNGs) that should replace these placeholders in production.
- Article **body copy** is representative sample prose, not the live articles.
