import { Contact } from "@/components/site/Contact";

export const metadata = {
  title: "Contact",
  description:
    "Parlons de votre projet. Contactez ABCM Performances, agence de communication & marketing digital à Strasbourg. Réponse sous 24h ouvrées.",
};

export default function ContactPage() {
  return (
    <Contact
      id="contact"
      eyebrow="Nous contacter"
      title="Parlons de votre projet"
      description="Site web, référencement, réseaux sociaux ou stratégie digitale : décrivez-nous votre besoin, on revient vers vous très vite. Et si vous préférez, passez nous voir autour d'un café à Strasbourg."
    />
  );
}
