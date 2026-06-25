// ABCM blog — list + article views.
const B = window.ABCMPerformancesDesignSystem_d992a8;

const POSTS = [
  { id: "marketing-2026", cat: "Stratégie", hue: "magenta", icon: "trending-up", date: "11 Mai 2026", read: 7,
    title: "Marketing digital : ce qui va vraiment compter pour le reste de 2026",
    excerpt: "Le marketing de 2026 ressemble à une course où les règles changent en pleine ligne droite. Tour d'horizon des leviers qui font la différence.", featured: true },
  { id: "no-code", cat: "No Code", hue: "blue", icon: "blocks", date: "11 Mai 2026", read: 6,
    title: "Le No Code en 2026", excerpt: "Créer sans coder, une révolution accessible à tous. Le No Code a profondément transformé la manière de lancer un produit." },
  { id: "woocommerce", cat: "E-commerce", hue: "green", icon: "shopping-cart", date: "11 Mai 2026", read: 9,
    title: "WooCommerce en 2026", excerpt: "Flexible, open-source et puissant : WooCommerce reste l'une des solutions e-commerce les plus utilisées au monde." },
  { id: "claude-ai", cat: "IA", hue: "orange", icon: "sparkles", date: "11 Mai 2026", read: 12,
    title: "Claude.ai en 2026 : le guide complet de l'IA qui redéfinit le travail", excerpt: "D'un simple chatbot à un véritable collaborateur, Claude a transformé notre rapport au travail. Décryptage." },
  { id: "formation-marketing", cat: "Formation", hue: "yellow", icon: "graduation-cap", date: "25 Mar 2026", read: 5,
    title: "Former vos équipes aux enjeux marketing de demain", excerpt: "IA, automatisation, explosion des canaux : le marketing évolue à une vitesse sans précédent. La formation devient stratégique." },
  { id: "overdose-ia", cat: "IA", hue: "orange", icon: "brain", date: "09 Fév 2026", read: 8,
    title: "Une overdose des consommateurs face à l'IA ?", excerpt: "L'IA utile… mais sous tension. Entre fascination et fatigue, comment garder une communication authentique." },
];

function BlogHeader({ onNav }) {
  const { LogoMark, Button } = B;
  return (
    <header className="blog-header">
      <div className="container blog-header__inner">
        <LogoMark src="../../assets/logo-abcm-circles.png" href="#" onClick={(e) => { e.preventDefault(); onNav("list"); }} />
        <nav className="blog-nav">
          <a href="#" onClick={(e) => e.preventDefault()}>Expertises</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNav("list"); }} className="is-active">Blog</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Contact</a>
        </nav>
        <Button variant="primary" size="sm" iconRight={<Icon name="arrow-right" size={16} />}>Démarrer un projet</Button>
      </div>
    </header>
  );
}

function Thumb({ post, big }) {
  return (
    <div className={"thumb thumb--" + post.hue + (big ? " thumb--big" : "")}>
      <span className="thumb__motif"><B.CircleMotif size={big ? 180 : 120} opacity={0.9} /></span>
      <Icon name={post.icon} size={big ? 48 : 34} />
    </div>
  );
}

function BlogList({ onNav }) {
  const { SectionHeading, Tag, Badge } = B;
  const cats = ["Tous", "Stratégie", "IA", "E-commerce", "No Code", "Formation"];
  const [cat, setCat] = React.useState("Tous");
  const featured = POSTS.find((p) => p.featured);
  const rest = POSTS.filter((p) => !p.featured && (cat === "Tous" || p.cat === cat));
  return (
    <main className="blog-scroll">
      <BlogHeader onNav={onNav} />
      <section className="blog-hero">
        <div className="container">
          <SectionHeading eyebrow="Le blog ABCM" size="lg" title="Tendances, guides & coulisses du digital"
            description="Nos analyses sur le marketing, le web, le SEO et l'intelligence artificielle." />
        </div>
      </section>
      <div className="container">
        {featured && cat === "Tous" && (
          <article className="feature" onClick={() => onNav("article", featured)}>
            <Thumb post={featured} big />
            <div className="feature__body">
              <div className="feature__meta"><Badge variant="accent" solid>À la une</Badge><Tag hue={featured.hue}>{featured.cat}</Tag></div>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <span className="feature__date"><Icon name="calendar" size={15} /> {featured.date} · {featured.read} min de lecture</span>
            </div>
          </article>
        )}
        <div className="blog-filters">
          {cats.map((c) => <Tag key={c} active={cat === c} onClick={() => setCat(c)}>{c}</Tag>)}
        </div>
        <div className="post-grid">
          {rest.map((p) => (
            <article key={p.id} className="post-card" onClick={() => onNav("article", p)}>
              <Thumb post={p} />
              <div className="post-card__body">
                <Tag hue={p.hue}>{p.cat}</Tag>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <span className="post-card__date">{p.date} · {p.read} min</span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <BlogFooter />
    </main>
  );
}

function Article({ post, onNav }) {
  const { Tag, Badge, Button, Avatar } = B;
  const p = post || POSTS[0];
  return (
    <main className="blog-scroll">
      <BlogHeader onNav={onNav} />
      <article className="article">
        <div className="container article__head">
          <button className="svc__back" onClick={() => onNav("list")}><Icon name="arrow-left" size={16} /> Tous les articles</button>
          <div className="article__tags"><Tag hue={p.hue}>{p.cat}</Tag></div>
          <h1>{p.title}</h1>
          <div className="article__byline">
            <Avatar name="ABCM Performances" hue />
            <div>
              <strong>Équipe ABCM</strong>
              <span>{p.date} · {p.read} min de lecture</span>
            </div>
          </div>
        </div>
        <div className="container article__hero"><Thumb post={p} big /></div>
        <div className="article__body">
          <p className="article__lead">{p.excerpt}</p>
          <h2>Introduction</h2>
          <p>Le digital ne cesse d'accélérer. Entre l'essor de l'intelligence artificielle, l'automatisation des process et la multiplication des canaux, les entreprises doivent sans cesse réajuster leur stratégie pour rester visibles et pertinentes.</p>
          <p>Chez ABCM, nous accompagnons nos clients depuis 2015 avec une conviction simple : une bonne stratégie digitale n'est pas une affaire de mode, mais de cohérence. Voici notre lecture des tendances et, surtout, des actions concrètes à mettre en place.</p>
          <h2>Ce qui change vraiment</h2>
          <p>Les fondamentaux restent : un site rapide, un contenu utile et une présence régulière sur les bons réseaux. Ce qui évolue, c'est la manière de les orchestrer, et le rôle croissant de l'IA dans la production et la diffusion de contenu.</p>
          <blockquote>« La technologie change vite ; l'attention de votre audience, elle, se mérite toujours de la même façon : avec de la valeur. »</blockquote>
          <h2>Notre recommandation</h2>
          <p>Commencez par auditer l'existant, fixez deux ou trois objectifs mesurables, puis déployez par itérations. C'est exactement la méthode que nous appliquons sur chaque projet, sans jargon, avec des résultats.</p>
        </div>
        <div className="container article__cta">
          <Badge variant="accent" solid>Un projet en tête ?</Badge>
          <h3>Parlons-en autour d'un café.</h3>
          <Button variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Contacter l'équipe</Button>
        </div>
      </article>
      <BlogFooter />
    </main>
  );
}

function BlogFooter() {
  const { LogoMark } = B;
  return (
    <footer className="blog-footer on-dark" data-theme="dark">
      <div className="container blog-footer__inner">
        <LogoMark src="../../assets/logo-abcm-circles.png" />
        <span>© 2026 ABCM Performances · Strasbourg</span>
      </div>
    </footer>
  );
}

function BlogApp() {
  const [route, setRoute] = React.useState({ name: "list", data: null });
  const ref = React.useRef(null);
  const onNav = (name, data) => { setRoute({ name, data }); setTimeout(() => ref.current && ref.current.scrollTo({ top: 0 }), 10); };
  React.useEffect(() => { ref.current = document.querySelector(".blog-scroll"); }, [route]);
  return route.name === "article" ? <Article post={route.data} onNav={onNav} /> : <BlogList onNav={onNav} />;
}

// Exposed for the inline bootstrap in index.html (this file is bundled, so it
// must NOT call render() at module level).
window.BlogApp = BlogApp;
