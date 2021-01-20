import React from "react";
import HTMLLogo from "./../imgs/logos/html-logo.png";
import CSSLogo from "./../imgs/logos/css-logo.png";
import JSLogo from "./../imgs/logos/javascript-logo.png";
import ReactLogo from "./../imgs/logos/react-logo.png";
import ReduxLogo from "./../imgs/logos/redux-logo.png";
import TypescriptLogo from "./../imgs/logos/typescript-logo.png";
import MaterialUILogo from "./../imgs/logos/materialUI-icon.png";
import FirebaseLogo from "./../imgs/logos/firebase-logo.png";
import BootstrapLogo from "./../imgs/logos/bootstrap-logo.png";
import NPMLogo from "./../imgs/logos/npm-logo.svg";
import GitLogo from "./../imgs/logos/git-logo.png";
import PhotoshopLogo from "./../imgs/logos/photoshop-logo.png";
import UnityLogo from "./../imgs/logos/unity-logo.png";
import CSharpLogo from "./../imgs/logos/csharp-logo.svg";
import "./../styles/Project.css";

function Project({
  mini,
  name,
  picture,
  description,
  link,
  gitLink,
  usedTech,
}) {
  const setTechIcon = (name) => {
    switch (name) {
      case "HTML":
        return HTMLLogo;
      case "CSS":
        return CSSLogo;
      case "Javascript":
        return JSLogo;
      case "React":
        return ReactLogo;
      case "Redux":
        return ReduxLogo;
      case "Typescript":
        return TypescriptLogo;
      case "Bootstrap":
        return BootstrapLogo;
      case "Material-UI":
        return MaterialUILogo;
      case "Google Firebase":
        return FirebaseLogo;
      case "npm":
        return NPMLogo;
      case "Git":
        return GitLogo;
      case "Photoshop":
        return PhotoshopLogo;
      case "Unity":
        return UnityLogo;
      case "C#":
        return CSharpLogo;
      default:
        return "";
    }
  };

  return (
    <div className={`project ${mini && "mini"}`}>
      <img className="project__picture" src={picture} alt="Project thumbnail" />
      <div className="project__info">
        <div className="project__info">
          {/* <h4 className="project__name">{name}</h4> */}
          <p className="project__description">{description}</p>
          <div className="project__buttonsContainer">
            <a
              className="project__anchor"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project__linkButton project__button">
                {name === "NARCOS PLEASE" ? "View Trailer" : "Demo"}
              </div>
            </a>

            {gitLink ? (
              <a
                className="project__anchor"
                href={gitLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project__gitButton project__button">
                  {name === "NARCOS PLEASE" ? "Steam Page" : "GitHub"}
                </div>
              </a>
            ) : (
              ""
            )}
          </div>
          <div className="project__tech">
            <h5>Technologies Used in this Project:</h5>
            <div className="project__icons">
              {usedTech?.map((t) => (
                <img
                  className="project__techIcon"
                  src={setTechIcon(t)}
                  alt={t + " icon"}
                ></img>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
