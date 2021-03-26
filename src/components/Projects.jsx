import React, { useState } from "react";
import Project from "./Project";
import UltimateGamesDisplayThumbnail from "./../imgs/thumbnails/ultimate-games-display-thumbnail.JPG";
import ResponsiveCarouselThumbnail from "../imgs/thumbnails/responsive-carousel-thumbnail.PNG";
import NetflixThumbnail from "./../imgs/thumbnails/netflix-thumbnail.png";
import HackReactorThumbnail from "./../imgs/thumbnails/hackreactor-thumbnail.PNG";
import ShoppingCartThumbnail from "./../imgs/thumbnails/shopping-cart-thumbnail.png";
import KikeMindfulnessThumbnail from "./../imgs/thumbnails/kikemindfulness.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import Slider from "react-slick";

const commissionsProjects = [
  {
    name: "KIKE MINDFULNESS",
    picture: KikeMindfulnessThumbnail,
    description:
      "Website built for a mindfulness instructor using React. Design, development and communication with client has been fully managed by me.",
    link: "https://kikemindfulness.com/",
    gitLink: "https://github.com/AGasco/kike-mindfulness",
    usedTech: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Sass",
      "Material-UI",
      "Google Firebase",
    ],
  },
];

const passionProjects = [
  {
    name: "REDUX - THE ULTIMATE GAMES DISPLAY (WIP)",
    picture: UltimateGamesDisplayThumbnail,
    description:
      "App where I grab games data from RAWG api, and display this data in a beautiful and functional way. Data can be filtered, ordered and searched. Currently working on authentication and responsiveness.",
    link: "https://ultimate-games-display.web.app/",
    gitLink: "https://github.com/AGasco/ultimate-react-proyect",
    usedTech: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "Sass",
      "Material-UI",
      "Google Firebase",
      "APIs",
    ],
  },

  {
    name: "RESPONSIVE CAROUSEL",
    picture: ResponsiveCarouselThumbnail,
    description:
      "Fully responsive carousel. Supports all HTML elements, finger-following swipes (mobile and desktop), infinite.",
    link: "https://responsive-carousel.web.app/",
    gitLink: "https://github.com/AGasco/react-responsive-carousel",
    usedTech: ["HTML", "CSS", "Javascript", "React", "Sass", "Google Firebase"],
  },

  //REDUX SHOPPING CART
  {
    name: "REDUX SHOPPING CART",
    picture: ShoppingCartThumbnail,
    description:
      "Fully functional shopping cart app built from scratch. State handling was done using redux and react-redux packages",
    link: "https://redux-shopping-cart-fa4e7.firebaseapp.com/",
    gitLink: "https://github.com/AGasco/full-shopping-cart",
    usedTech: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "Google Firebase",
    ],
  },

  //HACKREACTOR Clone
  {
    name: "HACKREACTOR CLONE",
    picture: HackReactorThumbnail,
    description:
      "Clone of the HackReactor website. I built this project to train my front-end skills. I wanted to see if I could build a website based on a given design. Just 1 html file and 1 css file",
    link: "https://hackreactor-clone.netlify.app/",
    gitLink: "https://github.com/AGasco/hackreactor-clone",
    usedTech: ["HTML", "CSS", "Netlify"],
  },

  //Netflix Clone
  {
    name: "NETFLIX CLONE",
    picture: NetflixThumbnail,
    description:
      "Clone of the popular streaming platform, Netflix. It uses Netflix API to obtain movies' data sorted by genres, or to show which movies are trending right now. Each movie can be clicked to watch a Youtube embed showing the trailer of that movie",
    link: "https://netflix-clone-adb5c.web.app/",
    gitLink: "https://github.com/AGasco/netflix-clone",
    usedTech: ["HTML", "CSS", "Javascript", "React", "Google Firebase", "APIs"],
  },
];

const categories = ["COMMISSIONS", "PASSION"];

function Projects({ elements }) {
  const [category, setCategory] = useState("");

  const handleClick = (e) => {
    const newCategory = e.target.textContent;
    setCategory(newCategory);
  };

  const selectCategory = (category) => setCategory(category);

  const selectProjects = (category) =>
    category === "COMMISSIONS"
      ? commissionsProjects
      : category === "PASSION"
      ? passionProjects
      : console.error("WRONG CATEGORY INPUTTED");

  return (
    <div className="projects" id="Projects">
      <div className="projects__left"></div>
      <div className="projects__right">
        <Navbar elements={elements} />
        <div className="projects__container">
          {categories.map((c) => (
            <div
              className={`projects__category ${c.toLowerCase()} ${
                category === ""
                  ? "default"
                  : category === c
                  ? "selected"
                  : "unselected"
              }`}
            >
              <h3 className="projects__title" onClick={() => selectCategory(c)}>
                {c[0] + c.slice(1).toLowerCase()}
              </h3>
              <div className="projects__reel">
                <Slider
                  accessibility={true}
                  infinite={true}
                  arrows={true}
                  dots={true}
                  infinite={false}
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                >
                  {selectProjects(c).map((p) => (
                    <Project
                      mini={true}
                      name={p.name}
                      picture={p.picture}
                      link={p.link}
                      gitLink={p.gitLink}
                      description={p.description}
                      usedTech={p.usedTech}
                    />
                  ))}
                </Slider>
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
      </div>
    </div>
  );
}

export default Projects;
