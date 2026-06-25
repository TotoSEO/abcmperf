# UI Kit — Marketing site

High-fidelity recreation of the **ABCM Performances** marketing site, modernised onto the new design system. It is an interactive single-page experience.

## Screens & flow
- **Homepage** (`index.html`) — sticky glass header, night-blue hero with the circle motif, client strip, filterable services grid, testimonials, FAQ accordion, and a dark contact section with a working (fake) form that shows a success state on submit.
- **Service detail** — click any service card to open a focused service page (method steps + "why ABCM" aside + related expertises). Back link returns to the grid.
- **Contact** — the header CTA and "Contact" nav scroll to / reveal the contact form.

## Files
- `index.html` — shell: loads React, Babel, Lucide (CDN), the DS bundle, then the JSX below. All page-layout CSS lives here; components style themselves.
- `icons.jsx` — `Icon` (Lucide wrapper) + shared `ABCM_SERVICES` / `ABCM_NAV` data.
- `sections-top.jsx` — `Header`, `Hero`, `Services`.
- `sections-bottom.jsx` — `Clients`, `Testimonials`, `FAQ`, `Contact`, `Footer`.
- `servicedetail.jsx` — `ServiceDetail` screen.
- `app.jsx` — `App` shell + lightweight routing/scroll.

## Components used
`Button`, `LogoMark`, `CircleMotif`, `Badge`, `SectionHeading`, `ServiceCard`, `StatCard`, `Tag`, `TestimonialCard`, `Accordion`, `Input`, `Textarea`, `Select`, `Checkbox`, `Alert`, `Card`.

## Notes
- **Client logos** are rendered as greyscale text wordmarks — the real client logos (Würth, bioMérieux, Caisse d'Épargne…) on the live site are raster assets that should be supplied for production.
- **Hero / blog imagery** uses the brand circle motif and colour blocks; drop in real photography (team, office, project shots) where indicated.
- Icons are **Lucide** (stroke 2) — see the README ICONOGRAPHY section.
