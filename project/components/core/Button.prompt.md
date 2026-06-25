Pill-shaped call-to-action button — yellow `primary` for the main action; use it whenever the user should take a step.

```jsx
<Button variant="primary" iconRight={<ArrowIcon />}>Nous contacter</Button>
<Button variant="outline" size="sm">En savoir plus</Button>
```

Variants: `primary` (yellow, default), `secondary` (night blue), `outline`, `ghost`, `link`. Sizes: `sm` / `md` / `lg`. Props: `iconLeft`, `iconRight`, `block`, `as`/`href` (renders `<a>` when `href` is set). Works on dark sections — wrap in `.on-dark` / `[data-theme="dark"]`.
