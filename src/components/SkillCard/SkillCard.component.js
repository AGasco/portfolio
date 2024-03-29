import React, { PureComponent } from 'react';

import './SkillCard.style.scss';

class SkillCard extends PureComponent {
  render() {
    const { logo, name, link } = this.props;

    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="skillCard"
      >
        <div className="skillCard__logo">
          <img src={logo} alt={`${name}'s logo`} />
          <div className="overlay"></div>
        </div>
        <div className="skillCard__text">{name}</div>
      </a>
    );
  }
}

export default SkillCard;
