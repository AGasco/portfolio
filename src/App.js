import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import "./styles/animations.css";

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
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                classNames="fade"
                timeout={300}
              >
                <Switch location={location}>
                  <Route path="/About Me">
                    <AboutMe />
                  </Route>
                  <Route path="/skills">
                    <Skills />
                  </Route>
                  <Route path="/projects">
                    <Projects isMobile={isMobile} />
                  </Route>
                  <Route path="/contact">
                    <Contact isMobile={isMobile} />
                  </Route>
                  <Route path="/">
                    <div className="app__landing">
                      <Landing />
                      <Navbar />
                    </div>
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
