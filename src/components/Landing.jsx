import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import "./../styles/Landing.css";

const Landing = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const hasAnimated = window.sessionStorage.getItem("hasAnimated") !== null;
    console.log("hasAnimated", hasAnimated);
    if (hasAnimated) {
      setAnimate(false);
    } else {
      window.sessionStorage.setItem("hasAnimated", 1);
      setAnimate(true);
    }
  }, []);

  return (
    <div className="landing" id="Landing">
      <div id="scene" className="landing__container">
        <div data-depth="0.2" className="landing__text">
          <h1 className={`landing__longName ${animate && "anim"}`}>
            Antonio F. Gasco
          </h1>
          <h1 className={`landing__shortName ${animate && "anim"}`}>
            A.F. Gasco
          </h1>
          <h4 className={`landing__developer  ${animate && "anim"}`}>
            front-end web developer
          </h4>
        </div>
        <div className="landing__icons">
          <a
            className={`landing__linkedin ${animate && "anim"}`}
            href="https://www.linkedin.com/in/antonio-f-gasco-ojeda-b06b2173"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            className={`landing__github ${animate && "anim"}`}
            href="https://github.com/AGasco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>
      </div>
      <a
        className="landing__roque"
        href="https://en.wikipedia.org/wiki/Roque_de_los_Muchachos_Observatory"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="landing__roqueFirst">
          Roque de Los Muchachos Observatory
        </p>
        <p className="landing__roqueLast">La Palma - Canary Islands - Spain</p>
      </a>
    </div>
  );
};

export default Landing;

//    PREVIOUS VERSION

// function Landing() {
//   return (
//     <div className="landing">
//       <div className="landing__left">
//         <div className="landing__leftBlock">
//           <p>Skills</p>
//         </div>
//         <div className="landing__leftBlock">
//           <p>Projects</p>
//         </div>
//         <div className="landing__leftBlock">
//           <p>Contact</p>
//         </div>
//       </div>
//       <div className="landing__right"></div>

//       <div className="landing__text">
//         <p className="landing__greeting">Hi,</p>
//         <p className="landing__name">
//           I'm <span id="myName">Antonio F. Gasco</span>
//         </p>
//         <p className="landing__developer">
//           <em>web developer</em>
//         </p>
//       </div>
//     </div>
//   );
// }
