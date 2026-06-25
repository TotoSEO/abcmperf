// Service detail screen — shown when a service card is opened.
const SD = window.ABCMPerformancesDesignSystem_d992a8;

function ServiceDetail({ service, onNav }) {
  const { Button, Badge, SectionHeading, Card, Tag, CircleMotif } = SD;
  const s = service || window.ABCM_SERVICES[0];
  const points = {
    "site-web": ["Audit & cahier des charges", "Design sur-mesure", "Développement responsive", "SEO technique intégré", "Formation à l'autonomie"],
    "community": ["Ligne éditoriale", "Calendrier de publication", "Création de contenus", "Community management", "Reporting mensuel"],
    "seo": ["Audit SEO complet", "Recherche de mots-clés", "Optimisation on-page", "Netlinking", "Suivi de positions"],
  }[s.slug] || ["Audit de l'existant", "Stratégie sur-mesure", "Déploiement opérationnel", "Suivi & reporting", "Optimisation continue"];

  return (
    <div className="svc">
      <section className="svc__hero on-dark" data-theme="dark">
        <div className="hero__motif"><CircleMotif size={220} opacity={0.8} /></div>
        <div className="container">
          <button className="svc__back" onClick={() => onNav("home", "#services")}><Icon name="arrow-left" size={16} /> Toutes les expertises</button>
          <Badge variant="accent" solid>{s.title}</Badge>
          <h1 className="svc__title">{s.title}</h1>
          <p className="hero__lead">{s.desc} Une prestation pilotée par nos experts, du premier échange jusqu'aux résultats.</p>
          <Button variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />} onClick={() => onNav("contact")}>Demander un devis</Button>
        </div>
      </section>
      <section className="section">
        <div className="container svc__grid">
          <div>
            <SectionHeading eyebrow="Notre méthode" title="Comment on procède" />
            <ol className="svc__steps">
              {points.map((p, i) => (
                <li key={p}><span className="svc__num">{String(i + 1).padStart(2, "0")}</span><span>{p}</span></li>
              ))}
            </ol>
          </div>
          <Card elevated accent padding="lg" className="svc__aside">
            <h3>Pourquoi ABCM ?</h3>
            <ul className="svc__checks">
              <li><Icon name="check" size={18} /> Équipe à taille humaine</li>
              <li><Icon name="check" size={18} /> Réactivité & efficacité</li>
              <li><Icon name="check" size={18} /> Approche 360°</li>
              <li><Icon name="check" size={18} /> Accompagnement depuis 2015</li>
            </ul>
            <Button variant="secondary" block onClick={() => onNav("contact")}>Parler à un expert</Button>
            <p className="svc__related">Autres expertises&nbsp;:</p>
            <div className="svc__tags">
              {window.ABCM_SERVICES.filter((x) => x.slug !== s.slug).slice(0, 4).map((x) => (
                <Tag key={x.slug} hue={x.hue} onClick={() => onNav("service", x)}>{x.title}</Tag>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

window.ServiceDetail = ServiceDetail;
