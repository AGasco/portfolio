import React, { PureComponent } from 'react';
import Navbar from '../Navbar/Navbar.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import QuoteGenerator from '../QuoteGenerator/QuoteGenerator.container';

import './Landing.style.scss';

class Landing extends PureComponent {
  renderNavbar() {
    const { elements } = this.props;

    return <Navbar elements={elements} />;
  }

  renderQuoteGenerator() {
    return <QuoteGenerator />;
  }

  renderName() {
    return (
      <div data-depth="0.2" className="landing__text landing__top">
        <h1 className="landing__longName">ANTONIO F. GASCO</h1>
        <h1 className="landing__shortName">A.F. GASCO</h1>
      </div>
    );
  }

  renderLinkedinIcon() {
    return (
      <a
        className="landing__linkedin"
        href="https://www.linkedin.com/in/antoniofgasco/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    );
  }

  renderGithubIcon() {
    return (
      <a
        className="landing__github"
        href="https://github.com/AGasco"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
    );
  }

  renderIcons() {
    return (
      <div className="landing__icons">
        {this.renderLinkedinIcon()}
        {this.renderGithubIcon()}
      </div>
    );
  }

  renderSubheading() {
    return <h4 className="landing__developer">front-end web developer</h4>;
  }

  renderContent() {
    return (
      <div id="scene" className="landing__container">
        {this.renderName()}
        <div className="landing__bottom">
          {this.renderIcons()}
          {this.renderSubheading()}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="landing" id="Landing">
        {this.renderNavbar()}
        {this.renderQuoteGenerator()}
        {this.renderContent()}
      </div>
    );
  }
}

export default Landing;
