import { Hero } from "@/components/site/Hero";
import { Clients } from "@/components/site/Clients";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
