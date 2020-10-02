import React from "react";
import "./../styles/Project.css";
import "./../styles/ProjectMobile.css";

function Project({
  isMobile,
  name,
  picture,
  description,
  link,
  gitLink,
  usedTech,
}) {
  console.log("isMobile inside Project.jsx", isMobile);
  return (
    <div className={`project${isMobile ? "Mobi" : ""}`}>
      <h4>{name}</h4>
      <img
        src={picture}
        alt={`A screenshot of project: ${name}`}
        draggable="false"
      />
      <p className={`project${isMobile ? "Mobi" : ""}__description`}>
        {description}
      </p>
      <div className={`project${isMobile ? "Mobi" : ""}__buttonsContainer`}>
        <div className={`project${isMobile ? "Mobi" : ""}__linkButton`}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {name === "NARCOS PLEASE" ? "View Trailer" : "Live Demo"}
          </a>
        </div>

        {gitLink ? (
          <div className={`project${isMobile ? "Mobi" : ""}__gitButton`}>
            <a href={gitLink} target="_blank" rel="noopener noreferrer">
              {name === "NARCOS PLEASE" ? "Steam Page" : "GitHub"}
            </a>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className={`project${isMobile ? "Mobi" : ""}__tech`}>
        <h5>Technologies Used in this Project:</h5>
        <p>{usedTech}</p>
      </div>
    </div>
  );
}

export default Project;
