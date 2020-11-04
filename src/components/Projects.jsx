import React, { useEffect } from "react";
// import Draggable from "react-draggable";
import Project from "./Project";
import UserSettingsFormThumbnail from "./../imgs/thumbnails/user-settings-form-thumbnail2.png";
import NetflixThumbnail from "./../imgs/thumbnails/netflix-thumbnail.png";
import CovidTrackerThumbnail from "./../imgs/thumbnails/covid-tracker-thumbnail.png";
import WeatherThumbnail from "./../imgs/thumbnails/weather-thumbnail.png";
import WikipediaThumbnail from "./../imgs/thumbnails/wikipedia-thumbnail.png";
import HackReactorThumbnail from "./../imgs/thumbnails/hackreactor-thumbnail.PNG";
import ShoppingCartThumbnail from "./../imgs/thumbnails/shopping-cart-thumbnail.png";
import Carousel from "react-material-ui-carousel";
import "./../styles/Projects.css";
import "./../styles/ProjectsMobile.css";
import GoHome from "./GoHome";

const projectsData = [
  //Steam Game
  // {
  //   name: "NARCOS PLEASE",
  //   picture: "https://source.unsplash.com/1600x900",
  //   description: `I spent the last 3 years of my life designing and building this game. It's a 'Papers Please'-like where you follow the story of a very infamous drug lord from Colombia back in the eighties.

  //     With 30 levels and 15 different endings, this is a fully fledged product. This was the project that made me a programmer.`,
  //   link: "https://www.youtube.com/watch?v=kxvOABmXsoM", //Trailer link
  //   gitLink: "", //Steam Page Link
  //   usedTech:
  //     "C#, Unity, JSON, Data Structures, Design Patterns, Art (even though it's not tech, I spent countless hours doing art)",
  // },

  //COMPLETE USER SETTINGS FORM
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

  //COVID-19 Tracker
  {
    name: "REDUX COVID-19 TRACKER",
    picture: CovidTrackerThumbnail,
    description:
      "Keep daily track of COVID-19 incidence all over the world. The data displayed in this app can be sorted worldwide or by country. Furthermore, data can be filtered by Cases, Recovered or Deaths",
    link: "https://covid-19-tracker-1b15c.web.app/",
    gitLink: "https://github.com/AGasco/covid-19-tracker",
    usedTech:
      "HTML, CSS, Javascript, React, Redux, JSON, Google Firebase, APIs, Leaflet Maps",
  },

  //REDUX SHOPPING CART
  {
    name: "REDUX SHOPPING CART",
    picture: ShoppingCartThumbnail,
    description:
      "Fully functional shopping cart app built from scratch. State handling was done using redux and react-redux packages",
    link: "https://redux-shopping-cart-fa4e7.web.app/",
    gitLink: "https://github.com/AGasco/full-shopping-cart",
    usedTech: "HTML, CSS, Javascript, React, Redux, Google Firebase, JSON",
  },

  //HACKREACTOR Clone
  {
    name: "HACKREACTOR CLONE",
    picture: HackReactorThumbnail,
    description:
      "Clone of the HackReactor website. I built this project to train my front-end skills. I wanted to see if I could build a professional looking website. Just 1 html file and 1 css file",
    link: "https://hackreactor-clone.netlify.app/",
    gitLink: "https://github.com/AGasco/hackreactor-clone",
    usedTech: "HTML, CSS, Javascript, Netlify",
  },

  //Netflix Clone
  {
    name: "Netflix Clone",
    picture: NetflixThumbnail,
    description:
      "Clone of the popular streaming platform, Netflix. It uses Netflix API to obtain movies' data sorted by genres, or to show which movies are trending right now. Each movie can be clicked to watch a Youtube embed showing the trailer of that movie",
    link: "https://netflix-clone-adb5c.web.app/",
    gitLink: "https://github.com/AGasco/netflix-clone",
    usedTech: "HTML, CSS, Javascript, React, Google Firebase, JSON, APIs",
  },

  //Wikipedia Viewer
  {
    name: "Wikipedia Viewer",
    picture: WikipediaThumbnail,
    description:
      "App that uses Wikipedia API to display a list of clickable articles based on what's inputted in the search bar by the user. As in Wikipedia itself, there is a button to just search for a random article",
    link: "https://wikipedia-viewer-4cff5.web.app/",
    gitLink: "https://github.com/AGasco/wikipedia-viewer",
    usedTech: "HTML, CSS, Javascript, React, Google Firebase, JSON, CORS, APIs",
  },

  //Weather App
  {
    name: "Weather App",
    picture: WeatherThumbnail,
    description:
      "The Weather App shows the user the weather on their location, in text and icon formats, as well as the current local temperature (in Celsius or Farenheit). It first asks for permission to know the user's location using navigator.geolocation()",
    link: "https://weather-app-d6d37.web.app/",
    gitLink: "https://github.com/AGasco/weather-app",
    usedTech:
      "HTML, CSS, Javascript, React, Geolocation, Google Firebase, JSON, APIs",
  },
];

function Projects({ isMobile }) {
  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {};

  return (
    <div className={isMobile ? "projectsMobi" : "projects"} id="Projects">
      <GoHome />
      <div className={`projects${isMobile ? "Mobi" : ""}__container`}>
        <h2 className={`projects${isMobile ? "Mobi" : ""}__title`}>Projects</h2>
        <em className={`projects${isMobile ? "Mobi" : ""}__subtitle`}></em>
        <div className={`projects${isMobile ? "Mobi" : ""}__gridContainer`}>
          <div className={`projects${isMobile ? "Mobi" : ""}__gridRow`}>
            <Carousel
              className="projectsMobi__carousel"
              autoPlay={false}
              navButtonsAlwaysVisible={isMobile ? false : true}
              navButtonsAlwaysInvisible={isMobile ? true : false}
              indicators={isMobile ? true : false}
            >
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
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
