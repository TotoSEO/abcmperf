// Header, Hero, Services, Stats — ABCM marketing kit.
const { Button, LogoMark, ServiceCard, StatCard, SectionHeading, Badge, CircleMotif, Tag } = window.ABCMPerformancesDesignSystem_d992a8;

function Header({ onNav }) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector(".kit-scroll");
    const onScroll = () => setScrolled((el ? el.scrollTop : window.scrollY) > 12);
    (el || window).addEventListener("scroll", onScroll);
    return () => (el || window).removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={"site-header" + (scrolled ? " is-stuck" : "")}>
      <div className="container site-header__inner">
        <LogoMark src="../../assets/logo-abcm-circles.png" href="#" onClick={(e) => { e.preventDefault(); onNav("home"); }} />
        <nav className="site-nav">
          {window.ABCM_NAV.map((n) => (
            <a key={n.label} href={n.href} className="site-nav__link" onClick={(e) => { e.preventDefault(); onNav(n.label === "Contact" ? "contact" : "home", n.href); }}>{n.label}</a>
          ))}
        </nav>
        <div className="site-header__cta">
          <Button variant="primary" size="sm" iconRight={<Icon name="arrow-right" size={16} />} onClick={() => onNav("contact")}>Démarrer un projet</Button>
        </div>
        <button className="site-header__burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          <Icon name={open ? "x" : "menu"} size={24} />
        </button>
      </div>
      {open && (
        <div className="site-menu">
          {window.ABCM_NAV.map((n) => (
            <a key={n.label} href={n.href} onClick={() => { setOpen(false); onNav(n.label === "Contact" ? "contact" : "home"); }}>{n.label}</a>
          ))}
          <Button variant="primary" block onClick={() => { setOpen(false); onNav("contact"); }}>Démarrer un projet</Button>
        </div>
      )}
    </header>
  );
}

function Hero({ onNav }) {
  return (
    <section className="hero on-dark" data-theme="dark">
      <div className="hero__motif"><CircleMotif size={260} overlap={0.3} opacity={0.85} /></div>
      <div className="container hero__inner">
        <Badge variant="accent" solid dot>Agence à Strasbourg · depuis 2015</Badge>
        <h1 className="hero__title">Boostez votre <span className="hero__hl text-gradient">visibilité</span> sur le web &amp; les réseaux</h1>
        <p className="hero__lead">Agence de communication &amp; marketing digital. Une équipe à taille humaine qui conçoit, déploie et pilote votre présence en ligne, du site web au référencement.</p>
        <div className="hero__actions">
          <Button variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />} onClick={() => onNav("contact")}>Parler de mon projet</Button>
          <Button variant="outline" size="lg" onClick={() => onNav("home", "#services")}>Voir nos expertises</Button>
        </div>
        <div className="hero__stats">
          <StatCard prefix="+" value="150" label="projets livrés" hue="yellow" />
          <StatCard value="9" label="experts dédiés" hue="magenta" />
          <StatCard value="4,9" suffix="/5" label="avis Google" hue="green" />
          <StatCard value="360°" label="accompagnement" hue="blue" />
        </div>
      </div>
    </section>
  );
}

function Services({ onNav }) {
  const cats = ["Tout", "Web", "Réseaux", "Référencement", "Conseil"];
  const [active, setActive] = React.useState("Tout");
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeading align="center" size="lg" eyebrow="Nos expertises"
          title="Une approche 360° de votre communication"
          description="Nos services couvrent tous les aspects de la communication digitale. Choisissez votre terrain de jeu." />
        <div className="services__filters">
          {cats.map((c) => (<Tag key={c} active={active === c} onClick={() => setActive(c)}>{c}</Tag>))}
        </div>
        <div className="services__grid">
          {window.ABCM_SERVICES.map((s) => (
            <ServiceCard key={s.slug} hue={s.hue} icon={<Icon name={s.icon} size={26} />}
              title={s.title} description={s.desc} href="#"
              onClick={(e) => { e.preventDefault(); onNav("service", s); }} />
          ))}
        </div>
        <div className="svc-banner">
          <div>
            <h3>Un besoin sur-mesure&nbsp;?</h3>
            <p>On construit l'accompagnement qui colle à vos objectifs.</p>
          </div>
          <Button variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />} onClick={() => onNav("contact")}>Parler à un expert</Button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Header, Hero, Services });
