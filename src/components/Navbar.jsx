import React, { useState } from "react";
import "./../styles/Navbar.css";

const elements = ["About Me", "Skills", "Projects", "Contact"];

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [instant, setInstant] = useState(false);

  window.onscroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= 1) {
      setHidden(true);
      if (scrollY >= 800) {
        setInstant(true);
      } else setInstant(false);
    } else setHidden(false);
  };

  return (
    <div className={`navbar ${hidden ? "hidden" : ""}`}>
      <ul>
        {elements.map((elem) => (
          <li
            key={elem}
            className={`${hidden ? "hidden" : ""} ${instant ? "instant" : ""}`}
          >
            <a href={`#${elem}`}>{elem}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
