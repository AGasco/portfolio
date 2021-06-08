import React, { PureComponent } from 'react';
import Navbar from '../Navbar';
import SkillCard from '../SkillCard';
import Arrow from '../../imgs/arrow.png';

import { logos, links } from './Skills.config';

import './Skills.style.scss';

class Skills extends PureComponent {
  renderNavbar() {
    const { elements } = this.props;
    return <Navbar elements={elements} />;
  }

  renderTitle() {
    return (
      <div className="skills__titleContainer">
        <h4 className="skills__title">I can help you with these </h4>
        <img className="skills__arrow" src={Arrow} alt="Hand-drawn arrow" />
      </div>
    );
  }

  // TODO: Transform into a real grid
  renderGrid() {
    return (
      <div className="skills__gridContainer">
        <div className="skills__gridRow">
          <SkillCard name="HTML 5" logo={logos.html} link={links.html} />
          <SkillCard name="CSS 3" logo={logos.css} link={links.css} />
          <SkillCard
            name="Javascript"
            logo={logos.javascript}
            link={links.javascript}
          />
        </div>
        <div className="skills__gridRow">
          <SkillCard name="React" logo={logos.react} link={links.react} />
          <SkillCard name="Redux" logo={logos.redux} link={links.redux} />
          <SkillCard name="Sass" logo={logos.sass} link={links.sass} />
        </div>
        <div className="skills__gridRow">
          <SkillCard name="npm" logo={logos.npm} link={links.npm} />
          <SkillCard name="git" logo={logos.git} link={links.git} />
          <SkillCard
            name="Bootstrap 4"
            logo={logos.bootstrap}
            link={links.bootstrap}
          />
        </div>
      </div>
    );
  }

  renderContent() {
    return (
      <div className="skills__content">
        {this.renderTitle()}
        {this.renderGrid()}
      </div>
    );
  }

  render() {
    return (
      <div className="skills" id="Skills">
        <div className="skills__left"></div>
        <div className="skills__right">
          {this.renderNavbar()}
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default Skills;
