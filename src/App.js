import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
// import AnimatedSwitch from "./anims/AnimatedSwitch";
import AboutMe from "./components/AboutMe";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const elements = ["/", "/About Me", "/Skills", "/Projects", "/Contact"];

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  //Checking if it's mobile or desktop to render different components
  useEffect(() => {
    setIsMobile(screenWidth <= 600);
  }, [screenWidth]);

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  return (
    <React.Fragment>
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Navbar />
              <Landing />
              <AboutMe />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
