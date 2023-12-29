import React from "react";
import GitHub from "../../assets/Logos/github-mark-white.png";
import LinkedIn from "../../assets/Logos/LinkedIn.png";

export default function Footer() {
  return (
    <footer>
      <div className="social_links">
        <a href="https://github.com/Temple79" target="blank">
          <img src={GitHub} alt="logo de GitHub" className="github"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/petar-topchiyski-099b8936/"
          target="blank"
        >
          <img src={LinkedIn} alt="logo de LinkedIn" className="linkedIn"></img>
        </a>
      </div>
      <p>Réalisé par Petar Topchiyski</p>
    </footer>
  );
}
