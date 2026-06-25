Expandable FAQ / disclosure list. The plus icon rotates into a yellow × when open; panels animate with a grid-rows transition.

```jsx
<Accordion defaultOpen={[0]} items={[
  { title: "Combien coûte un site ?", content: <p>Chaque projet est sur-mesure…</p> },
  { title: "Quels délais ?", content: <p>Comptez 4 à 8 semaines.</p> },
]} />
```

Props: `items` (`{title, content}`), `allowMultiple`, `defaultOpen` (indices).
