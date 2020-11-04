import React from "react";
import SkillCard from "./SkillCard";
import GoTopBtn from "./GoTopBtn";
import "./../styles/Skills.css";
import HTMLLogo from "./../imgs/logos/html-logo.png";
import CSSLogo from "./../imgs/logos/css-logo.png";
import JSLogo from "./../imgs/logos/javascript-logo.png";
import ReactLogo from "./../imgs/logos/react-logo.png";
import ReduxLogo from "./../imgs/logos/redux-logo.png";
import TypescriptLogo from "./../imgs/logos/typescript-logo.png";
import BootstrapLogo from "./../imgs/logos/bootstrap-logo.png";
import NPMLogo from "./../imgs/logos/npm-logo.svg";
import GitLogo from "./../imgs/logos/git-logo.png";
import PhotoshopLogo from "./../imgs/logos/photoshop-logo.png";
import UnityLogo from "./../imgs/logos/unity-logo.png";
import CSharpLogo from "./../imgs/logos/csharp-logo.svg";

const logos = {
  html: HTMLLogo,
  css: CSSLogo,
  javascript: JSLogo,
  react: ReactLogo,
  redux: ReduxLogo,
  typescript: TypescriptLogo,
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
  typescript: "https://www.typescriptlang.org/",
  bootstrap: "https://getbootstrap.com/",
  npm: "https://www.npmjs.com/",
  git: "https://git-scm.com/",
  photoshop: "https://www.adobe.com/es/products/photoshop.html",
  unity: "https://unity.com/",
  csharp: "https://docs.microsoft.com/en-us/dotnet/csharp/",
};

function Skills() {
  return (
    <div className="skills" id="Skills">
      <div className="skills__container">
        <h2>My Skills</h2>

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
            <SkillCard
              name="TypeScript"
              logo={logos.typescript}
              link={links.typescript}
            />
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
          <div className="skills__gridRow">
            <SkillCard name="C#" logo={logos.csharp} link={links.csharp} />
            <SkillCard name="Unity" logo={logos.unity} link={links.unity} />
            <SkillCard
              name="Adobe Photoshop"
              logo={logos.photoshop}
              link={links.photoshop}
            />
          </div>
        </div>
      </div>
      <GoTopBtn hidden />
    </div>
  );
}

export default Skills;
