import React, { useState, useEffect } from "react";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GoTopBtn from "./components/GoTopBtn";
import "./App.css";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  //Checking if it's mobile or desktop to render different components
  useEffect(() => {
    setIsMobile(screenWidth <= 480);
  }, [screenWidth]);

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  return (
    <div className="app">
      <div className="app__landing">
        <Landing />
        <Navbar />
      </div>

      <AboutMe />
      <Skills />
      <Projects isMobile={isMobile} />
      <Contact isMobile={isMobile} />

      <GoTopBtn />
      {/** FOOTER */}
    </div>
  );
}

export default App;
