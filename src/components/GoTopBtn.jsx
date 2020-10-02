import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./../styles/GoTopBtn.css";

function GoTopBtn({ opacity, hidden }) {
  return (
    <FontAwesomeIcon
      className={`upIcon ${hidden ? "hidden" : ""}`}
      icon={faChevronCircleUp}
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
      style={{ opacity: opacity }}
    />
  );
}

export default GoTopBtn;
