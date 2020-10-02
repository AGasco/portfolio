import React from "react";
import "./../styles/AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutMe" id="About Me">
      <div className="aboutMe__filler"></div>
      <div className="aboutMe__container">
        {" "}
        <h2 className="aboutMe__title">Who am I?</h2>
        <div className="aboutMe__content">
          <div className="aboutMe__left">
            <div className="aboutMe__picture"></div>
          </div>
          <div className="aboutMe__right">
            <p className="aboutMe__description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              quo eligendi delectus vitae assumenda amet sit modi doloremque.
              Dolor ad, totam saepe sed beatae enim non neque aut! Accusantium
              architecto quidem sint fugit tenetur? Distinctio voluptatem
              laborum aliquid autem in nihil enim dolorem consequatur excepturi?
              Sunt ullam dolorem reprehenderit veniam? Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Est, facilis! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Saepe, numquam mollitia.
              Corporis odio ratione voluptatem, tempora eius voluptas harum
              dolore labore, placeat in exercitationem doloremque modi
              cupiditate eos? Inventore nulla adipisci sit accusamus sint beatae
              nam ullam dolor assumenda in!
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
