import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "./../styles/Landing.css";

const Landing = () => {
  return (
    <div className="landing" id="Landing">
      <div className="landing__container">
        <div className="landing__text">
          <h1 className="landing__longName">Antonio F. Gasco</h1>
          <h1 className="landing__shortName">A.F. Gasco</h1>
          <h4 className="landing__developer">front-end web developer</h4>
        </div>
        <div className="landing__icons">
          <a
            href="https://github.com/AGasco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>

          <a
            href="https://github.com/AGasco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
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
