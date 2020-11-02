import React from "react";
import SkillCard from "./SkillCard";
import GoTopBtn from "./GoTopBtn";
import "./../styles/Skills.css";

const logos = {
  html:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png",
  css:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png",
  javascript:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
  react:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
  redux:
    "data:image/png;base64,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",
  typescript:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
  bootstrap:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
  npm: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
  git:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1024px-Git-logo.svg.png",
  photoshop:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png",
  unity:
    "https://cdn.freebiesupply.com/logos/large/2x/unity-69-logo-black-and-white.png",
  csharp:
    "https://upload.wikimedia.org/wikipedia/commons/7/7a/C_Sharp_logo.svg",
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
