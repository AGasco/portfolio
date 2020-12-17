import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import "./../styles/Landing.css";
import QuoteGenerator from "./QuoteGenerator";

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
      <QuoteGenerator />
      <div id="scene" className="landing__container">
        <div data-depth="0.2" className="landing__text landing__top">
          <h1 className={`landing__longName ${animate && "anim"}`}>
            ANTONIO F. GASCO
          </h1>
          <h1 className={`landing__shortName ${animate && "anim"}`}>
            A.F. GASCO
          </h1>
        </div>
        <div className="landing__bottom">
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
          <h4 className={`landing__developer  ${animate && "anim"}`}>
            front-end web developer
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Landing;
