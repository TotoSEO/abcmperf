Labelled text field with hint / error states and optional leading icon. `Textarea` shares the contract for multi-line input.

```jsx
<Input label="Email" type="email" required placeholder="vous@entreprise.fr" icon={<MailIcon/>} />
<Textarea label="Votre projet" hint="Décrivez vos besoins en quelques lignes." rows={4} />
<Input label="Téléphone" error="Numéro invalide" />
```

Props: `label`, `hint`, `error` (red state), `required`, `icon` (Input only). Forwards all native input/textarea attrs.
