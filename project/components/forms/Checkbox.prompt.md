Checkbox, Radio and Switch — all with the yellow active state and a gentle spring on toggle.

```jsx
<Checkbox label="J'accepte les conditions" defaultChecked />
<Radio name="plan" label="Mensuel" />
<Switch label="Newsletter" defaultChecked />
```

Each takes `label` plus native input attrs (`checked`, `defaultChecked`, `onChange`, `disabled`). Group radios with a shared `name`.
