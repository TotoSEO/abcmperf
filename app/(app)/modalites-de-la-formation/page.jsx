import Link from "next/link";
import { Icon } from "@/components/ds";
import { HUB_URL } from "@/data/formations";
import { QualiopiBlock } from "@/components/site/QualiopiBlock";

export const metadata = {
  title: "Modalités de formation",
  description:
    "Modalités, moyens pédagogiques, techniques et d'encadrement des formations ABCM Performances, organisme certifié Qualiopi à Strasbourg.",
  alternates: { canonical: "/modalites-de-la-formation/" },
};

export default function ModalitesPage() {
  return (
    <article className="modalites">
      <section className="fmt-hero on-dark" data-theme="dark">
        <div className="container fmt-hero__inner">
          <span className="fmt-hero__eyebrow"><span className="fmt-hero__dot" aria-hidden="true" />Organisme certifié Qualiopi</span>
          <h1 className="fmt-hero__title">Modalités, moyens pédagogiques, techniques et d'encadrement</h1>
          <p className="fmt-hero__lead">
            ABCM performances s'engage à adapter chaque formation aux besoins réels du stagiaire. Les formations
            sont effectuées par Audrey BRAUN, seule formatrice de notre organisme.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container-narrow prose">
          <QualiopiBlock />

          <p>Voici nos modalités et moyens pédagogiques :</p>

          <h2>Lieu des formations</h2>
          <p>Nous proposons différents modules pouvant être répartis en journées complètes ou en demi-journées.</p>
          <ul>
            <li>En intra dans vos locaux.</li>
            <li>En distanciel synchrone (FOAD). Le formateur et le stagiaire se connectent via une plateforme de visioconférence (Skype, Hangout, Meet, Zoom…) et un partage d'écran est mis en place. Cela permet d'effectuer la formation dans les mêmes conditions qu'une formation en présentiel mais s'avère moins éprouvant pour le stagiaire qui peut évoluer dans un environnement connu avec son matériel habituel de travail. Attention le formateur ne prend jamais la main sur votre ordinateur, il ne fera que vous guider à travers votre écran pour que vous restiez toujours actif !</li>
          </ul>

          <h2>Matériel et moyens pédagogiques</h2>
          <p>Lors des formations en présentiel, le formateur a à disposition tout le matériel de formation nécessaire :</p>
          <ul>
            <li>Supports de formation,</li>
            <li>La connexion extranet à la plateforme Digiforma ou Drive Google pour accéder au documents.</li>
            <li>Les supports papiers si besoin.</li>
          </ul>
          <p>Les ordinateurs ne sont pas mis à disposition.</p>

          <h2>Déroulement des formations</h2>
          <p>Nos formations étant souvent effectuées en individuel ou en petit nombre (maximum 8 personnes). Une projection écran n'est alors pas nécessaire puisque le formateur peut directement visionner les travaux du stagiaire.</p>

          <h2>Accessibilité</h2>
          <p>Nous accueillons tout type de public et sans distinction.</p>
          <p>Cependant, si vous êtes en situation de handicap, vous pouvez être amené à avoir besoin d'un accompagnement spécifique ou d'une aide adaptée.</p>
          <p>Afin d'organiser votre venue dans les meilleures conditions et de nous assurer que les moyens de la prestation de formation peuvent être adaptés à vos besoins spécifiques, vous pouvez nous contacter au 09 83 53 20 25 ou par mail info@abcmperformances.com</p>

          <h2>Le déroulé d'une formation</h2>
          <h3>En amont de la formation</h3>
          <p>Pour certaines formations, des petits tests, Quizs ou analyses des besoins sont transmis aux stagiaires afin que le formateur puisse construire une formation en adéquation avec son public. Dans tous les cas, un audit téléphonique préalable nous permet de déterminer et fixer la meilleure approche pédagogique pour atteindre une qualité de formation optimale.</p>
          <h3>En début de journée</h3>
          <p>Chaque stagiaire reçoit :</p>
          <ul>
            <li>Le programme de la journée et du module</li>
            <li>Un support durant toute la formation : liens vers des sites Internet relatifs au sujet, sources à récupérer, sitographie et/ou bibliographie, annexes des cours</li>
            <li>Un suivi de formation et des échanges entre le formateur et les participants sont proposés.</li>
          </ul>
          <h3>En fin de journée</h3>
          <p>Un point est effectué sur ce qui a été vu et en fonction des retours stagiaires le prochain cours est adapté.</p>
          <h3>En fin de formation</h3>
          <ul>
            <li>Un questionnaire de satisfaction afin de nous faire part des conditions de formation</li>
            <li>Un accès à un document partagé comprenant des ressources autour de la formation</li>
            <li>Une évaluation à chaud mois après la formation est effectuée.</li>
          </ul>
          <h3>Trois mois après la formation</h3>
          <p>Une évaluation à froid 3 mois après la formation est effectuée. Un appel téléphonique afin de faire le point sur ce qui a été transmis durant la formation, afin de voir l'intégration dans leur pratique et recueillir leur retour de terrain, si le besoin est comblé et savoir si d'autres besoins sont apparus.</p>

          <h2>Technique et moyens pédagogiques</h2>
          <ul>
            <li>Des apports théoriques appuyés par des études de cas, jeux de rôles, mise en situation, explications imagées</li>
            <li>Des exercices progressifs selon la formation</li>
            <li>Simulations avec débriefing</li>
          </ul>

          <h2>Moyens d'encadrement</h2>
          <h3>Vis-à-vis du participant</h3>
          <ul>
            <li>Livret d'accueil ABCM</li>
            <li>Charte de la bonne pratique du participant et règlement intérieur</li>
            <li>Évaluation à chaud en fin de formation avec et sans le formateur pour laisser la possibilité de dire les écarts et les difficultés rencontrées</li>
          </ul>
          <h3>Vis-à-vis des formateurs</h3>
          <ul>
            <li>Point en amont de la formation avec restitution du besoin client</li>
            <li>Point en fin de journée de formation, recueil des impressions, régulation sur les autres journées en fonction de l'évolution pédagogique</li>
            <li>Évaluation à chaud en fin de formation, dans le cas d'un formateur extérieur, débriefing sur l'écart éventuel, formalisation d'une régulation sur les points soulevés</li>
            <li>Évaluation à froid effectuée auprès du stagiaire avec transmission au formateur pour analyse et dans un but d'évolution continue</li>
            <li>Débriefing sur l'analyse et proposition de modification si nécessaire</li>
          </ul>

          <p className="prose__updated">Modalités mises à jour le 03/06/2024</p>
          <p className="prose__back"><Link href={HUB_URL}><Icon name="arrow-left" size={16} /> Retour aux formations</Link></p>
        </div>
      </section>
    </article>
  );
}
