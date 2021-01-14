import React from "react";
import "./../styles/Project.css";

function Project({
  isMobile,
  name,
  picture,
  description,
  link,
  gitLink,
  usedTech,
}) {
  console.log("project " + name + " has picture " + picture);
  return (
    <div className="project" style={{ backgroundImage: `url(${picture})` }}>
      <div className="project__container">
        <div className="project__info">
          <h4 className="project__name">{name}</h4>
          <p className="project__description">{description}</p>
          <div className="project__buttonsContainer">
            <div className="project__linkButton project__button">
              <a href={link} target="_blank" rel="noopener noreferrer">
                {name === "NARCOS PLEASE" ? "View Trailer" : "Demo"}
              </a>
            </div>

            {gitLink ? (
              <div className="project__gitButton project__button">
                <a href={gitLink} target="_blank" rel="noopener noreferrer">
                  {name === "NARCOS PLEASE" ? "Steam Page" : "GitHub"}
                </a>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="project__tech">
            <h5>Technologies Used in this Project:</h5>
            <p>{usedTech}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
