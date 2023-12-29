import React from "react";
import Picture from "../../assets/Images/Petar Topchiyski.webp";


export default function Banner() {
  return (
    <>
      <div className="banner">
        <p className="intro">
          Bonjour ! 
          <br />
          Je suis Petar Topchiyski,
          <br />
          développeur web junior !
        </p>
        <img
          src={Picture}
          alt="Portrait de Petar Topchiyski"
          className="photo-banner"
        />
      </div>
    </>
  );
}
