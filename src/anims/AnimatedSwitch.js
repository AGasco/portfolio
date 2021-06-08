import React from 'react';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing/Landing.component';
import AboutMe from '../components/AboutMe/AboutMe.component';
import Skills from './../components/Skills';
import Projects from './../components/Projects';
import Contact from './../components/Contact';
import { withRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const AnimatedSwitch = withRouter(({ location, isMobile, elements }) => {
  const curScreen = elements.indexOf(location.pathname);
  const { state } = location;
  const prevScreen = state ? state.prevScreen : 0;
  const animClassNames = curScreen > prevScreen ? 'forward' : 'backward';
  return (
    <TransitionGroup
      childFactory={(child) =>
        React.cloneElement(child, {
          classNames: animClassNames
        })
      }
    >
      <CSSTransition
        key={location.key}
        classNames={animClassNames}
        timeout={1000}
      >
        <Switch location={location}>
          {/* <Navbar elements={elements} /> */}
          <Route path="/About Me">
            <AboutMe elements={elements} isMobile={isMobile} />
          </Route>
          <Route path="/skills">
            <Skills elements={elements} isMobile={isMobile} />
          </Route>
          <Route path="/projects">
            <Projects isMobile={isMobile} elements={elements} />
          </Route>
          <Route path="/contact">
            <Contact elements={elements} />
          </Route>
          <Route path="/">
            <div className="app__landing">
              <Landing elements={elements} />
            </div>
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
});

export default AnimatedSwitch;
