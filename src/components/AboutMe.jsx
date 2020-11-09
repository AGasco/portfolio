import React from "react";
import GoHome from "./GoHome";
import Sidebar from "./Sidebar";
import "./../styles/AboutMe.css";

function AboutMe({ elements }) {
  return (
    <div className="aboutMe" id="About Me">
      <GoHome />
      <Sidebar elements={elements} />
      <div className="aboutMe__container">
        <div className="aboutMe__content">
          <div className="aboutMe__left">
            <div className="aboutMe__picture"></div>
          </div>
          <div className="aboutMe__right">
            <h2 className="aboutMe__title">About Me</h2>
            <p className="aboutMe__description">
              I've always been passioned about technology. Computers and games
              are my world. But until 2015, I always lied to myself saying that
              I didn't have the capabilities to become a software developer.
              After 2015 though, my whole life has revolved around technology
              and software development. I didn't imagine coding could be so FUN.
            </p>
            <div className="aboutMe__tags">
              <ul>
                <li className="aboutMe__tag" key="driven">
                  #driven
                </li>
                <li className="aboutMe__tag" key="quickLearner">
                  #quickLearner
                </li>
                <li className="aboutMe__tag" key="ambitious">
                  #ambitious
                </li>
                <li className="aboutMe__tag" key="easyGoing">
                  #easyGoing
                </li>
                <li className="aboutMe__tag" key="passioned">
                  #passioned
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
