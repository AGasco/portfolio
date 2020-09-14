import React from "react";
import SkillCard from "./SkillCard";
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
  firebase:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1280px-Firebase_Logo.svg.png",
  bootstrap:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
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
  firebase: "https://firebase.google.com/",
  bootstrap: "https://getbootstrap.com/",
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
            <SkillCard
              name="Bootstrap 4"
              logo={logos.bootstrap}
              link={links.bootstrap}
            />
            <SkillCard
              name="Google Firebase"
              logo={logos.firebase}
              link={links.firebase}
            />
          </div>
          <div className="skills__gridRow">
            <SkillCard
              name="Adobe Photoshop"
              logo={logos.photoshop}
              link={links.photoshop}
            />
            <SkillCard name="Unity" logo={logos.unity} link={links.unity} />
            <SkillCard name="C#" logo={logos.csharp} link={links.csharp} />
          </div>
        </div>
      </div>
      {/** SKILLS TITLE */}

      {/** GRID OR FLEX SHOWING CARDS WITH SKILLS AND LOGOS */}
      {/** SOME KIND OF FOOTER? */}
    </div>
  );
}

export default Skills;
