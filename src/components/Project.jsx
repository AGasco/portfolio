import React from "react";
import "./../styles/Project.css";

function Project({
  mini,
  name,
  picture,
  description,
  link,
  gitLink,
  usedTech,
}) {
  return (
    <div className={`project ${mini && "mini"}`}>
      <img className="project__picture" src={picture} alt="Project thumbnail" />
      <div className="project__info">
        <div className="project__info">
          {/* <h4 className="project__name">{name}</h4> */}
          <p className="project__description">{description}</p>
          <div className="project__buttonsContainer">
            <a
              className="project__anchor"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project__linkButton project__button">
                {name === "NARCOS PLEASE" ? "View Trailer" : "Demo"}
              </div>
            </a>

            {gitLink ? (
              <a
                className="project__anchor"
                href={gitLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project__gitButton project__button">
                  {name === "NARCOS PLEASE" ? "Steam Page" : "GitHub"}
                </div>
              </a>
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
