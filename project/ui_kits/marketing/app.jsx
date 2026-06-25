// App shell — routes between the homepage, a service detail page and contact.
function App() {
  const [route, setRoute] = React.useState({ name: "home", data: null });
  const scrollRef = React.useRef(null);

  const onNav = (name, data) => {
    if (name === "home" && typeof data === "string") {
      // anchor scroll within the homepage
      if (route.name !== "home") setRoute({ name: "home", data: null });
      setTimeout(() => {
        const el = document.querySelector(data);
        const sc = scrollRef.current;
        if (el && sc) sc.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
      }, route.name !== "home" ? 60 : 0);
      return;
    }
    if (name === "service") { setRoute({ name: "service", data }); scrollTop(); return; }
    if (name === "contact") {
      if (route.name !== "home") { setRoute({ name: "home", data: null }); }
      setTimeout(() => {
        const el = document.querySelector("#contact");
        const sc = scrollRef.current;
        if (el && sc) sc.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
      }, route.name !== "home" ? 80 : 0);
      return;
    }
    setRoute({ name: "home", data: null }); scrollTop();
  };
  const scrollTop = () => setTimeout(() => scrollRef.current && scrollRef.current.scrollTo({ top: 0 }), 10);

  return (
    <div className="kit-scroll" ref={scrollRef}>
      <Header onNav={onNav} />
      {route.name === "service" ? (
        <ServiceDetail service={route.data} onNav={onNav} />
      ) : (
        <main>
          <Hero onNav={onNav} />
          <Clients />
          <Services onNav={onNav} />
          <Testimonials />
          <FAQ />
          <Contact onNav={onNav} />
        </main>
      )}
      <Footer onNav={onNav} />
    </div>
  );
}

// Exposed for the inline bootstrap in index.html (this file is bundled, so it
// must NOT call render() at module level).
window.App = App;
