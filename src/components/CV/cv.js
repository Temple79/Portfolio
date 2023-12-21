import CV from "../../assets/Images/CV_Petar_Topchiyski.pdf";

const CVDownload = () => {
  return (
    <div>
      <a className="cv" href={CV} download>
        Télécharger mon CV
      </a>
    </div>
  );
};

export default CVDownload;