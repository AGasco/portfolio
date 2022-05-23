import React, { PureComponent } from 'react';
import Navbar from '../Navbar';

import './AboutMe.style.scss';

class AboutMe extends PureComponent {
  renderNavbar() {
    const { elements } = this.props;

    return <Navbar elements={elements} />;
  }

  renderText() {
    return (
      <div className="aboutMe__text">
        <h1 className="aboutMe__title">Hey, it's me</h1>
        <h3 className="aboutMe__subtitle">
          a front-end web developer from Spain
        </h3>
      </div>
    );
  }

  renderPicture() {
    return <div className="aboutMe__picture"></div>;
  }

  renderPictureQuote() {
    return (
      <p className="aboutMe__quote">
        "I've always been passioned about technology. Computers and games are my
        world. But until 2018, I always lied to myself saying that I didn't have
        the capabilities to become a software developer. That year though, I
        began studying programming in my spare time and I fell in love with it.
        In 2020, I finally decided to drop my previous job and switch careers to
        become a professional web developer"
      </p>
    );
  }

  renderPictureContainer() {
    return (
      <div className="aboutMe__pictureContainer">
        {this.renderPicture()}
        {this.renderPictureQuote()}
      </div>
    );
  }

  renderFooter() {
    return (
      <em className="aboutMe__footer">
        * During my "past life", I used to organize huge conferences with
        participants from all over the world :D
      </em>
    );
  }

  renderContent() {
    return (
      <div className="aboutMe__container">
        {this.renderText()}
        {this.renderPictureContainer()}
        {this.renderFooter()}
      </div>
    );
  }

  render() {
    return (
      <div className="aboutMe" id="About Me">
        <div className="aboutMe__left">
          {this.renderNavbar()}
          {this.renderContent()}
        </div>
        <div className="aboutMe__right"></div>
      </div>
    );
  }
}

export default AboutMe;
