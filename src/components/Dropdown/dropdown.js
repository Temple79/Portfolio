import React, { useState } from "react";
import ArrowUp from "../../assets/Icons/arrow_up.png";
import ArrowDown from "../../assets/Icons/arrow_down.png";


export default function Dropdown({ data }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-title" onClick={toggle}>
          <h3>{data.title}</h3>
          <img
            src={isOpen ? ArrowUp : ArrowDown}
            alt="arrow"
            className="dropdown-arrow"
          />

        </div>
        {isOpen ? (
          <div className="dropdown-text">
            <p>
              <span className="color-change">Projet</span> : {data.task}
            </p>
            <p>
              <span className="color-change">Challenges</span> :{" "}
              {data.issues}
            </p>
            <ul className="techs">
              <span className="color-change-lang">Langues utilisées</span> :{" "}
              {data.lang.map((lang, index) => (
                <li className="lang" key={index}>
                  {lang}
                </li>
              ))}
            </ul>

            <p>
              Lien vers{" "}
              <span className="color-change">
                <a href={data.link} target="blank">
                  {data.website}
                </a>
              </span>
              .
            </p>
          </div>
        ) : (<div>
        <img className="background" src={data.screen} alt="background"></img>
      </div>)
      
      }
      </div>
    </>
  );
}