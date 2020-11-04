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

  //Router and animation state
  const [prevChild, setPrevChild] = useState(null);
  const [curChild, setCurChild] = useState(null);
  const [childPos, setChildPos] = useState(null);
  const [animationCallback, setAnimationCallback] = useState(() => {});

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
    <div className="app">
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames="fade"
              timeout={600}
            >
              <Switch location={location}>
                <Route path="/About Me">
                  <AboutMe />
                </Route>
                {/* <Route path="/About Me" render={() => <AboutMe />} /> */}
                <Route path="/skills">
                  <Skills />
                </Route>
                {/* <Route path="/skills" render={() => <Skills />} /> */}
                <Route path="/projects">
                  <Projects isMobile={isMobile} />
                </Route>
                {/* <Route path="/projects" render={() => <Projects isMobile={isMobile} />} /> */}
                <Route path="/contact">
                  <Contact isMobile={isMobile} />
                </Route>
                {/* <Route path="/contact" render={() => <Contact isMobile={isMobile} />} /> */}
                <Route path="/">
                  <div className="app__landing">
                    <Landing />
                    <Navbar />
                  </div>
                </Route>
                {/* <Route path="/" render={() => ( <div className="app__landing"> <Landing /> <Navbar /> </div>)}/> */}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
      <Footer />
    </div>
  );
}

export default App;
