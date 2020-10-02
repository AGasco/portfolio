import React from "react";
import "./../styles/AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutMe" id="About Me">
      <div className="aboutMe__container">
        <div className="aboutMe__content">
          <div className="aboutMe__left">
            <div className="aboutMe__picture"></div>
          </div>
          <div className="aboutMe__right">
            <h2 className="aboutMe__title">About Me</h2>
            <p className="aboutMe__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              voluptatem debitis veniam ab repellendus autem. Quod non suscipit
              hic eius quisquam odio dolor provident iusto earum doloribus,
              omnis dolore voluptate? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quibusdam libero error voluptas rem molestiae
              eligendi corrupti reiciendis praesentium. Illo nihil magnam
              doloremque sapiente ducimus blanditiis adipisci vero accusantium
              repellendus sequi.
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
