// Clients, Testimonials, FAQ, Contact, Footer — ABCM marketing kit.
const DS = window.ABCMPerformancesDesignSystem_d992a8;

function Clients() {
  const names = ["Würth", "bioMérieux", "Caisse d'Épargne", "AFI", "CRCC", "Welch & Kessler", "Fortal", "Adis"];
  return (
    <section className="clients">
      <div className="container">
        <p className="clients__label">Ils nous font confiance</p>
        <div className="clients__row">
          {names.map((n) => <span key={n} className="clients__logo">{n}</span>)}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { SectionHeading, TestimonialCard } = DS;
  const items = [
    { author: "Kevin Kanel", source: "Google · Avis vérifié", quote: "Professionnalisme & réactivité. Nous avons fait appel à ABCM pour notre site internet et nous sommes extrêmement satisfaits du résultat." },
    { author: "Yann Vignaud", source: "Google · Avis vérifié", quote: "Superbe prestation. ABCM a su m'accompagner pour la création du site web, et il y avait beaucoup à faire…" },
    { author: "Hélène Voisin", source: "Google · Avis vérifié", quote: "Créativité & efficacité. Totale satisfaction pour la réalisation de notre site, de notre logo et de nos cartes de visite." },
  ];
  return (
    <section className="section section--alt" id="references">
      <div className="container">
        <SectionHeading align="center" eyebrow="Avis clients" title="On prend soin de vous"
          description="Une attention de tous les instants : chez nous, vous êtes chouchouté." />
        <div className="testi__grid">
          {items.map((t) => <TestimonialCard key={t.author} {...t} />)}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const { SectionHeading, Accordion } = DS;
  const items = [
    { title: "Combien coûte la création d'un site internet ?", content: "Chaque projet est sur-mesure. Après un échange (autour d'un café !), nous établissons un devis clair selon vos besoins — du site vitrine au e-commerce." },
    { title: "Quels sont les délais de réalisation ?", content: "Comptez en général 4 à 8 semaines entre le lancement et la mise en ligne, selon l'ampleur du projet et la réactivité des échanges." },
    { title: "Proposez-vous un suivi après la livraison ?", content: "Oui. Maintenance, mises à jour, hébergement dédié et accompagnement marketing : nous restons votre partenaire sur la durée." },
    { title: "Travaillez-vous avec des clients hors de Strasbourg ?", content: "Bien sûr. Nous sommes ancrés à Strasbourg mais accompagnons des clients partout en France, en présentiel comme à distance." },
  ];
  return (
    <section className="section" id="faq">
      <div className="container faq">
        <SectionHeading eyebrow="Questions fréquentes" title="Tout ce que vous vous demandez" />
        <Accordion defaultOpen={[0]} items={items} />
      </div>
    </section>
  );
}

function Contact({ onNav }) {
  const { SectionHeading, Input, Textarea, Select, Checkbox, Button, Alert } = DS;
  const [sent, setSent] = React.useState(false);
  return (
    <section className="section section--contact on-dark" data-theme="dark" id="contact">
      <div className="container contact">
        <div className="contact__info">
          <SectionHeading eyebrow="Contact" size="lg" title="Vous avez un projet ?"
            description="Notre équipe vous répond rapidement avec une offre adaptée. Passez nous voir autour d'un café." />
          <ul className="contact__list">
            <li><Icon name="phone" size={18} /> 06 33 07 28 53</li>
            <li><Icon name="mail" size={18} /> info@abcmperformances.com</li>
            <li><Icon name="map-pin" size={18} /> Strasbourg, France</li>
          </ul>
          <div className="contact__social">
            <a href="#" aria-label="Instagram"><Icon name="instagram" size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={20} /></a>
            <a href="#" aria-label="YouTube"><Icon name="youtube" size={20} /></a>
          </div>
        </div>
        <div className="contact__form">
          {sent ? (
            <Alert variant="success" title="Message envoyé !">Merci, notre équipe vous recontacte sous 24h ouvrées.</Alert>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="contact__row">
                <Input label="Prénom" placeholder="Caroline" required />
                <Input label="Nom" placeholder="Meyer" required />
              </div>
              <Input label="Email" type="email" placeholder="vous@entreprise.fr" required />
              <Select label="Votre besoin" placeholder="Choisir un service…"
                options={window.ABCM_SERVICES.map((s) => s.title)} />
              <Textarea label="Votre projet" rows={3} placeholder="Décrivez vos besoins en quelques lignes…" />
              <Checkbox label="J'accepte d'être recontacté au sujet de ma demande." required />
              <Button variant="primary" size="lg" block type="submit" iconRight={<Icon name="send" size={18} />}>Envoyer ma demande</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer({ onNav }) {
  const { LogoMark } = DS;
  const cols = [
    { h: "Expertises", links: ["Site internet", "Stratégie digitale", "Community Management", "Référencement SEO", "Google Ads"] },
    { h: "Consulting", links: ["Marketing digital", "Marketing externalisé", "Marque employeur", "Formations"] },
    { h: "Agence", links: ["Références", "Blog", "Contact", "Mentions légales"] },
  ];
  return (
    <footer className="site-footer on-dark" data-theme="dark">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <LogoMark src="../../assets/logo-abcm-circles.png" />
          <p>Agence de communication &amp; marketing digital à Strasbourg. Depuis 2015.</p>
          <div className="contact__social">
            <a href="#" aria-label="Instagram"><Icon name="instagram" size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={20} /></a>
            <a href="#" aria-label="YouTube"><Icon name="youtube" size={20} /></a>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.h} className="site-footer__col">
            <h4>{c.h}</h4>
            {c.links.map((l) => <a key={l} href="#" onClick={(e) => e.preventDefault()}>{l}</a>)}
          </div>
        ))}
      </div>
      <div className="container site-footer__bottom">
        <span>© 2026 ABCM Performances</span>
        <span>Strasbourg · France</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Clients, Testimonials, FAQ, Contact, Footer });
