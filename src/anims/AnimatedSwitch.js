import React from "react";
import Landing from "./../components/Landing";
import Navbar from "./../components/Navbar";
import AboutMe from "./../components/AboutMe";
import Skills from "./../components/Skills";
import Projects from "./../components/Projects";
import Contact from "./../components/Contact";
import Footer from "./../components/Footer";
import "./animations.css";
import { withRouter, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const AnimatedSwitch = withRouter(({ location, isMobile, elements }) => {
  const curScreen = elements.indexOf(location.pathname);
  const { state } = location;
  const prevScreen = state ? state.prevScreen : 0;
  const animClassNames = curScreen > prevScreen ? "forward" : "backward";
  return (
    <TransitionGroup
      childFactory={(child) =>
        React.cloneElement(child, {
          classNames: animClassNames,
        })
      }
    >
      <CSSTransition
        key={location.key}
        classNames={animClassNames}
        timeout={1000}
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
            {/* <Projects isMobile={isMobile} /> */}
          </Route>
          <Route path="/contact">
            <Contact isMobile={isMobile} />
            {/* <Contact isMobile={isMobile} /> */}
          </Route>
          <Route path="/">
            <div className="app__landing">
              <Landing />
              <Navbar elements={elements} />
            </div>
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
});

export default AnimatedSwitch;
