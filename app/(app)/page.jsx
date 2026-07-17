import { Hero } from "@/components/site/Hero";
import { Clients } from "@/components/site/Clients";
import { TypewriterQuote } from "@/components/site/TypewriterQuote";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { Testimonials } from "@/components/site/Testimonials";
import { Services } from "@/components/site/Services";
import { Team } from "@/components/site/Team";
import { FormationsPromo } from "@/components/site/FormationsPromo";
import { WhyUs } from "@/components/site/WhyUs";
import { LatestArticles } from "@/components/site/LatestArticles";
import { AgencyMap } from "@/components/site/AgencyMap";
import { homeJsonLd } from "@/lib/site-jsonld";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd()) }}
      />
      <ScrollReveal />
      <Hero />
      <Clients />
      <TypewriterQuote />
      <Services />
      <Testimonials />
      <Team />
      <FormationsPromo />
      <WhyUs />
      <LatestArticles />
      <AgencyMap />
    </>
  );
}
