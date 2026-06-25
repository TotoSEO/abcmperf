Service / offering card — tinted icon tile, title, description, and a hover underline that fills in the category hue. The core of the "Nos services" grid.

```jsx
<ServiceCard hue="magenta" icon={<MegaphoneIcon/>} title="Community Management"
  description="Nous gérons vos réseaux sociaux." href="/community-management/" />
```

Props: `icon`, `title`, `description`, `href` (+`linkLabel`), `hue` (logo-palette key or CSS colour). Assign different hues across a grid for a vivid, on-brand spread.
