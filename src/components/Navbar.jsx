import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./../styles/Navbar.css";

const Navbar = withRouter(({ history, location, elements }) => {
  const curScreen = elements.indexOf(location.pathname);

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
        {elements.map((elem, i) => {
          if (i >= 1) {
            return (
              <li
                key={elem}
                className={`${hidden ? "hidden" : ""} ${
                  instant ? "instant" : ""
                }`}
              >
                <div
                  className="navbar__link"
                  onClick={(e) =>
                    history.push({
                      pathname:
                        elements[elements.indexOf("/" + e.target.textContent)],
                      state: { prevScreen: curScreen },
                    })
                  }
                >
                  {elem.slice(1)}
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
});

export default Navbar;
