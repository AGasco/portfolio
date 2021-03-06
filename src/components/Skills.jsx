import React from "react";
import Navbar from "./Navbar";
import SkillCard from "./SkillCard";
import HTMLLogo from "./../imgs/logos/html-logo.png";
import CSSLogo from "./../imgs/logos/css-logo.png";
import JSLogo from "./../imgs/logos/javascript-logo.png";
import ReactLogo from "./../imgs/logos/react-logo.png";
import ReduxLogo from "./../imgs/logos/redux-logo.png";
import SassLogo from "../imgs/logos/sass-logo.png";
import BootstrapLogo from "./../imgs/logos/bootstrap-logo.png";
import NPMLogo from "./../imgs/logos/npm-logo.svg";
import GitLogo from "./../imgs/logos/git-logo.png";
import PhotoshopLogo from "./../imgs/logos/photoshop-logo.png";
import UnityLogo from "./../imgs/logos/unity-logo.png";
import CSharpLogo from "./../imgs/logos/csharp-logo.svg";
import Arrow from "./../imgs/arrow.png";

const logos = {
  html: HTMLLogo,
  css: CSSLogo,
  javascript: JSLogo,
  react: ReactLogo,
  redux: ReduxLogo,
  sass: SassLogo,
  bootstrap: BootstrapLogo,
  npm: NPMLogo,
  git: GitLogo,
  photoshop: PhotoshopLogo,
  unity: UnityLogo,
  csharp: CSharpLogo,
};

const links = {
  html: "https://developer.mozilla.org/es/docs/HTML/HTML5",
  css: "https://developer.mozilla.org/es/docs/Web/CSS",
  javascript: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  react: "https://reactjs.org/",
  redux: "https://redux.js.org/",
  sass: "https://sass-lang.com/",
  bootstrap: "https://getbootstrap.com/",
  npm: "https://www.npmjs.com/",
  git: "https://git-scm.com/",
  photoshop: "https://www.adobe.com/es/products/photoshop.html",
  unity: "https://unity.com/",
  csharp: "https://docs.microsoft.com/en-us/dotnet/csharp/",
};

function Skills({ elements }) {
  return (
    <div className="skills" id="Skills">
      <div className="skills__left"></div>
      <div className="skills__right">
        <Navbar elements={elements} />
        <div className="skills__top"></div>
        <div className="skills__bottom">
          <div className="skills__titleContainer">
            <h4 className="skills__title">I can help you with these </h4>
            <img className="skills__arrow" src={Arrow} alt="Hand-drawn arrow" />
          </div>

          <div className="skills__gridContainer">
            <div className="skills__gridRow">
              <SkillCard name="HTML 5" logo={logos.html} link={links.html} />
              <SkillCard name="CSS 3" logo={logos.css} link={links.css} />
              <SkillCard
                name="Javascript"
                logo={logos.javascript}
                link={links.javascript}
              />
            </div>
            <div className="skills__gridRow">
              <SkillCard name="React" logo={logos.react} link={links.react} />
              <SkillCard name="Redux" logo={logos.redux} link={links.redux} />
              <SkillCard name="Sass" logo={logos.sass} link={links.sass} />
            </div>
            <div className="skills__gridRow">
              <SkillCard name="npm" logo={logos.npm} link={links.npm} />
              <SkillCard name="git" logo={logos.git} link={links.git} />
              <SkillCard
                name="Bootstrap 4"
                logo={logos.bootstrap}
                link={links.bootstrap}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
