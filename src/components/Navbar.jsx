import React from "react";
import { withRouter } from "react-router-dom";
import "./../styles/Navbar.css";

const Navbar = withRouter(({ history, location, elements }) => {
  const curScreen = elements.indexOf(location.pathname);

  return (
    <div className="navbar">
      <p className="navbar__brand">antoniofgasco</p>
      <ul>
        {elements.map((elem, i) => {
          if (i >= 1) {
            return (
              <li key={elem}>
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
          return null;
        })}
      </ul>
    </div>
  );
});

export default Navbar;
