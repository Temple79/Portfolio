import CV from "../../assets/Images/CV_Petar_Topchiyski.pdf";

const CVDownload = () => {
  return (
    <div className="cv_wrapper">
      <a className="cv" href={CV} download>
        Télécharger mon CV
      </a>
    </div>
  );
};

export default CVDownload;