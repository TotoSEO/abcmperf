Tabbed navigation. Two looks: `pill` (segmented) and `line` (underlined).

```jsx
<Tabs variant="line" tabs={[
  { id: "seo", label: "SEO", content: <p>…</p> },
  { id: "ads", label: "Google Ads", content: <p>…</p> },
]} />
```

Pass `content` per tab to render panels, or omit it and drive your own view via `onChange`. Controlled via `value`/`onChange` or uncontrolled via `defaultValue`.
