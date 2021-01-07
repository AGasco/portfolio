import React from "react";
import GoHome from "./GoHome";
import Sidebar from "./Sidebar";
import Hamburger from "./Hamburger";
import Brand from "./../components/Brand";
import "./../styles/AboutMe.css";

function AboutMe({ elements, isMobile }) {
  return (
    <div className="aboutMe" id="About Me">
      <div className="aboutMe__left">
        <Brand />
        <div className="aboutMe__container">
          <div className="aboutMe__text">
            <h1 className="aboutMe__title">Hey, it's me</h1>
            <h3 className="aboutMe__subtitle">
              a front-end web developer from Spain
            </h3>
          </div>
          <div className="aboutMe__pictureContainer">
            <div className="aboutMe__picture"></div>
            <p className="aboutMe__quote">
              "I've always been passioned about technology. Computers and games
              are my world. But until 2015, I always lied to myself saying that
              I didn't have the capabilities to become a software developer.
              That year though, I began studying programming in my spare time
              and I fell in love with it. In 2020, I finally decided to drop my
              previous job and switch careers to become a professional web
              developer"
            </p>
          </div>
          <em className="aboutMe__footer">
            * During my "past life", I used to organize huge conferences with
            participants from all over the world :D
          </em>
        </div>
      </div>
      <div className="aboutMe__right"></div>
      {/* {!isMobile ? (
        <div>
          <GoHome />
          <Sidebar elements={elements} />
        </div>
      ) : (
        <Hamburger elements={elements} color={"golden"} />
      )}
      <div className="aboutMe__container">
        <div className="aboutMe__content">
          <div className="aboutMe__left">
            <div className="aboutMe__picture"></div>
          </div>
          <div
            className={`aboutMe__right ${isMobile ? "aboutMe__noBorder" : ""}`}
          >
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
      </div> */}
    </div>
  );
}

export default AboutMe;
