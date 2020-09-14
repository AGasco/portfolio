import React from "react";
import "./../styles/SkillCard.css";

function SkillCard({ logo, name, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="skillCard"
    >
      <div className="skillCard__logo">
        <img src={logo} alt={`${name}'s logo`} />
      </div>
      <div className="skillCard__text">{name}</div>
    </a>
  );
}

export default SkillCard;
