import MagneticWrapper from "../Magnetic_wrapper/magnetic_wrapper";
import CVDownload from "../CV/cv";

export default function About() {
  return (
    <div className="about">
      <div id="intro"></div>
      <h2>À propos</h2>
      <div className="about_presentation">
        <p>
          Après avoir obtenu mon M1 en Tourisme et mon M2 en Affaires et
          management internationale, j'ai travaillé pendant plusieurs années
          dans le domaine de l'hôtellerie. Cette expérience m'a permis
          d'enrichir mes compétences et de mieux comprendre les envies et les
          besoins des gens par rapport à leur statut sociale et démographique.
        </p>
        J'ai toujours eu une passion forte pour le IT et j'ai décidé de me
        lancer dans une reconversion professionnelle. Après des recherches
        approfondis, j'ai décidé de suivre la formation de Développeur Web chez
        Open Classrooms. Grace à cette expérience j'ai pu développer mes
        connaissances de HTML, CSS, JavaScript, React, Node.js, MongoDB et
        autres.
        <p>
          Sur ce site portfolio vous pouvez trouver une partie de mes projets
          réalisés jusqu'à maintenant.
        </p>
        Je vous remercie de votre visite et n'hésitez pas à me contacter pour
        une collaboration ou une opportunité professionnelle !
      </div>
      <MagneticWrapper>
      <CVDownload />
    </MagneticWrapper>
    </div>
  );
}
