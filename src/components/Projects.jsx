import React, { useState } from "react";
// import Draggable from "react-draggable";
import Project from "./Project";
import UserSettingsFormThumbnail from "./../imgs/thumbnails/user-settings-form-thumbnail2.png";
import NetflixThumbnail from "./../imgs/thumbnails/netflix-thumbnail.png";
import CovidTrackerThumbnail from "./../imgs/thumbnails/covid-tracker-thumbnail.png";
import HackReactorThumbnail from "./../imgs/thumbnails/hackreactor-thumbnail.PNG";
import ShoppingCartThumbnail from "./../imgs/thumbnails/shopping-cart-thumbnail.png";
import KikeMindfulnessThumbnail from "./../imgs/thumbnails/kikemindfulness.JPG";
import "./../styles/Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import GoHome from "./GoHome";
import Sidebar from "./Sidebar";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";

// const projectsData = [
//   //Steam Game
//   // {
//   //   name: "NARCOS PLEASE",
//   //   picture: "https://source.unsplash.com/1600x900",
//   //   description: `I spent the last 3 years of my life designing and building this game. It's a 'Papers Please'-like where you follow the story of a very infamous drug lord from Colombia back in the eighties.

//   //     With 30 levels and 15 different endings, this is a fully fledged product. This was the project that made me a programmer.`,
//   //   link: "https://www.youtube.com/watch?v=kxvOABmXsoM", //Trailer link
//   //   gitLink: "", //Steam Page Link
//   //   usedTech:
//   //     "C#, Unity, JSON, Data Structures, Design Patterns, Art (even though it's not tech, I spent countless hours doing art)",
//   // },

//   //COMPLETE USER SETTINGS FORM
//   {
//     name: "REDUX USER SETTINGS FORM WITH THEME PICKER",
//     picture: UserSettingsFormThumbnail,
//     description:
//       "A fully fledged user settings form, with different sectors. Each sector may have 2 tabs to differentiate between groups of settings. All state management is done using REDUX",
//     link: "https://innoloft-agasco-app.web.app/",
//     gitLink: "https://github.com/AGasco/user-settings-form",
//     usedTech:
//       "HTML, CSS, Javascript, React, Redux, Material-UI, JSON, Google Firebase",
//   },

//   //COVID-19 Tracker
//   {
//     name: "REDUX COVID-19 TRACKER",
//     picture: CovidTrackerThumbnail,
//     description:
//       "Keep daily track of COVID-19 incidence all over the world. The data displayed in this app can be sorted worldwide or by country. Furthermore, data can be filtered by Cases, Recovered or Deaths",
//     link: "https://covid-19-tracker-1b15c.web.app/",
//     gitLink: "https://github.com/AGasco/covid-19-tracker",
//     usedTech:
//       "HTML, CSS, Javascript, React, Redux, JSON, Google Firebase, APIs, Leaflet Maps",
//   },

//   //REDUX SHOPPING CART
//   {
//     name: "REDUX SHOPPING CART",
//     picture: ShoppingCartThumbnail,
//     description:
//       "Fully functional shopping cart app built from scratch. State handling was done using redux and react-redux packages",
//     link: "https://redux-shopping-cart-fa4e7.firebaseapp.com/",
//     gitLink: "https://github.com/AGasco/full-shopping-cart",
//     usedTech: "HTML, CSS, Javascript, React, Redux, Google Firebase, JSON",
//   },

//   //HACKREACTOR Clone
//   {
//     name: "HACKREACTOR CLONE",
//     picture: HackReactorThumbnail,
//     description:
//       "Clone of the HackReactor website. I built this project to train my front-end skills. I wanted to see if I could build a professional looking website. Just 1 html file and 1 css file",
//     link: "https://hackreactor-clone.netlify.app/",
//     gitLink: "https://github.com/AGasco/hackreactor-clone",
//     usedTech: "HTML, CSS, Javascript, Netlify",
//   },

//   //Netflix Clone
//   {
//     name: "NETFLIX CLONE",
//     picture: NetflixThumbnail,
//     description:
//       "Clone of the popular streaming platform, Netflix. It uses Netflix API to obtain movies' data sorted by genres, or to show which movies are trending right now. Each movie can be clicked to watch a Youtube embed showing the trailer of that movie",
//     link: "https://netflix-clone-adb5c.web.app/",
//     gitLink: "https://github.com/AGasco/netflix-clone",
//     usedTech: "HTML, CSS, Javascript, React, Google Firebase, JSON, APIs",
//   },
// ];

const commercialProjects = [
  {
    name: "Commissioned Website",
    picture: KikeMindfulnessThumbnail,
    description:
      "Website built for a mindfulness instructor using React. Design, development and communication with client has been fully managed by me. ",
    link: "https://wikipedia-viewer-4cff5.web.app/",
    gitLink: "https://github.com/AGasco/kike-mindfulness",
    usedTech:
      "HTML, CSS, Javascript, React, Redux, Material-UI, JSON, Google Firebase",
  },
];

const personalProjects = [
  {
    name: "REDUX USER SETTINGS FORM WITH THEME PICKER",
    picture: UserSettingsFormThumbnail,
    description:
      "A fully fledged user settings form, with different sectors. Each sector may have 2 tabs to differentiate between groups of settings. All state management is done using REDUX",
    link: "https://innoloft-agasco-app.web.app/",
    gitLink: "https://github.com/AGasco/user-settings-form",
    usedTech:
      "HTML, CSS, Javascript, React, Redux, Material-UI, JSON, Google Firebase",
  },
];

const categories = ["COMMERCIAL", "PERSONAL"];

function Projects({ isMobile, elements }) {
  const [category, setCategory] = useState("");
  const [projects, setProjects] = useState([]);

  const handleClick = (e) => {
    const newCategory = e.target.textContent;
    setCategory(newCategory);
    console.log(newCategory);
    if (newCategory === "") setProjects([]);
    else if (newCategory === "COMMERCIAL") setProjects(commercialProjects);
    else if (newCategory === "PERSONAL") setProjects(personalProjects);
    else console.error("ERROR: Wrong Category inputted");
  };

  return (
    <div className="projects" id="Projects">
      <div className="projects__top">
        <Navbar elements={elements} />
      </div>
      <div className="projects__bottom">
        {categories.map((c) => (
          <div
            className={`projects__category ${
              category === ""
                ? "default"
                : category === c
                ? "selected"
                : "unselected"
            }`}
            //Forbid click when a category is alredy selected
            onClick={(e) => {
              if (category !== c) handleClick(e);
            }}
          >
            <h2 className="projects__title">{c}</h2>
            <div className="projects__container">
              {projects.map((p) => (
                <Project
                  isMobile={isMobile}
                  name={p.name}
                  picture={p.picture}
                  link={p.link}
                  gitLink={p.gitLink}
                  description={p.description}
                  usedTech={p.usedTech}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        className={`projects__back ${category && "active"}`}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faUndo} />
      </div>

      {/* {!isMobile ? (
        <div>
          <GoHome />
          <Sidebar elements={elements} />
        </div>
      ) : (
        <Hamburger elements={elements} color={"golden"} />
      )}
      <div className="projects__container">
        <h2 className="projects__title">Projects</h2>
        <div className="projects__gridContainer">
          <div className="projects__grid">
            {projectsData.map((project) => (
              <Project
                isMobile={isMobile}
                name={project.name}
                picture={project.picture}
                link={project.link}
                gitLink={project.gitLink}
                description={project.description}
                usedTech={project.usedTech}
              />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Projects;
