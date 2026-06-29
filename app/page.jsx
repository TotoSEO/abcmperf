import { Hero } from "@/components/site/Hero";
import { Testimonials } from "@/components/site/Testimonials";
import { Services } from "@/components/site/Services";
import { FormationsPromo } from "@/components/site/FormationsPromo";
import { WhyUs } from "@/components/site/WhyUs";
import { LatestArticles } from "@/components/site/LatestArticles";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Services />
      <FormationsPromo />
      <WhyUs />
      <LatestArticles />
    </>
  );
}
