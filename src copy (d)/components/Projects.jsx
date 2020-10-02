import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import Project from "./Project";
import ArrowBack from "@material-ui/icons/ArrowBackIos";
import ArrowForward from "@material-ui/icons/ArrowForwardIos";
import NetflixThumbnail from "./../imgs/netflix-thumbnail.png";
import CovidTrackerThumbnail from "./../imgs/covid-tracker-thumbnail.png";
import WhatsappThumbnail from "./../imgs/whatsapp-thumbnail.png";
import "./../styles/Projects.css";
import "./../styles/ProjectsMobile.css";

const projectsData = [
  //Steam Game
  {
    name: "NARCOS PLEASE",
    picture: "https://source.unsplash.com/1600x900",
    description: `I spent the last 3 years of my life designing and building this game. It's a 'Papers Please'-like where you follow the story of a very infamous drug lord from Colombia back in the eighties.
      
      With 30 levels and 15 different endings, this is a fully fledged product. This was the project that made me a programmer.`,
    link: "https://www.youtube.com/watch?v=kxvOABmXsoM", //Trailer link
    gitLink: "", //Steam Page Link
    usedTech:
      "C#, Unity, JSON, Data Structures, Design Patterns, Art (even though it's not tech, I spent countless hours doing art)",
  },

  //COVID-19 Tracker
  {
    name: "COVID-19 TRACKER",
    picture: CovidTrackerThumbnail,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur nulla est omnis amet, nam beatae saepe? Eos, ipsum! Aperiam minus minima provident perspiciatis possimus unde, ipsa temporibus nihil quasi quam?",
    link: "https://covid-19-tracker-1b15c.web.app/",
    gitLink: "https://github.com/AGasco/covid-19-tracker",
    usedTech:
      "HTML, CSS, Javascript, React, JSON, Google Firebase, APIs, Leaflet Maps",
  },

  //Netflix Clone
  {
    name: "Netflix Clone",
    picture: NetflixThumbnail,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore mollitia sed suscipit iste. Deleniti harum nobis assumenda excepturi, est incidunt praesentium explicabo voluptatibus optio veniam sit earum voluptatem inventore?",
    link: "https://netflix-clone-adb5c.web.app/",
    gitLink: "https://github.com/AGasco/netflix-clone",
    usedTech: "HTML, CSS, Javascript, React, Google Firebase, JSON, APIs",
  },

  //Whatsapp Clone
  {
    name: "WhatsApp Clone",
    picture: WhatsappThumbnail,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae beatae doloremque quo officiis, placeat dolor voluptas molestias saepe at veritatis eum porro iure et soluta iusto earum consequuntur. Sequi, veniam?",
    link: "https://whatsapp-clone-28266.web.app/",
    gitLink: "https://github.com/AGasco/whatsapp-clone",
    usedTech:
      "HTML, CSS, Javascript, React, Google Authentification, Google Firebase, JSON, APis",
  },
];

const scrollMultiplier = window.innerWidth * 2.2;

function Projects({ isMobile }) {
  const [isDragging, setIsDragging] = useState(false);
  const [scrollX, setScrollX] = useState(0);

  //Adding event listeners
  useEffect(() => {
    const gridRow = document.getElementsByClassName("projects__gridRow")[0];
    if (gridRow) {
      gridRow.addEventListener("mousedown", () => {
        setIsDragging(true);
      });

      gridRow.addEventListener("mouseup", () => {
        setIsDragging(false);
      });
    }
  }, []);

  const previousProject = () => {
    if (scrollX >= scrollMultiplier) {
      setScrollX(scrollX - scrollMultiplier);
    }
  };

  const nextProject = () => {
    if (scrollX < (projectsData.length - 1) * scrollMultiplier) {
      setScrollX(scrollX + scrollMultiplier);
    }
  };

  /** TODO -> POPULATE PROJECTS DATA */

  return (
    <div className={isMobile ? "projectsMobi" : "projects"} id="Projects">
      {!isMobile ? (
        <div className="projects__container">
          <h2 className="projects__title">Projects</h2>
          <em className="projects__subtitle">(Click & Drag)</em>
          <div className="projects__gridContainer">
            <Draggable
              defaultPosition={{ x: 0, y: 0 }}
              axis="x"
              bounds={{ left: -1500, top: 0, bottom: 0, right: 1500 }}
            >
              <div className={`projects__gridRow ${isDragging && "dragging"}`}>
                {projectsData.map((project) => (
                  <Project
                    name={project.name}
                    picture={project.picture}
                    link={project.link}
                    gitLink={project.gitLink}
                    description={project.description}
                    usedTech={project.usedTech}
                    isDragging={isDragging}
                  />
                ))}
              </div>
            </Draggable>
          </div>
        </div>
      ) : (
        <div className="projectsMobi__container">
          <h2 className="projectsMobi__title">Projects</h2>
          <div
            className="projectsMobi__gridContainer"
            style={{ transform: `translate(${-scrollX}px)` }}
          >
            {projectsData.map((project) => (
              <Project
                isMobile={true}
                name={project.name}
                picture={project.picture}
                link={project.link}
                gitLink={project.gitLink}
                description={project.description}
                usedTech={project.usedTech}
              />
            ))}
          </div>
          <div className="projectsMobi__buttons">
            <div className="projectsMobi__leftBtn">
              <ArrowBack onClick={previousProject} />
            </div>
            <div className="projectsMobi__rightBtn">
              <ArrowForward onClick={nextProject} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
