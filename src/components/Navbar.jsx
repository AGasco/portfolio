import React from "react";
import Brand from "./../components/Brand";
import { withRouter } from "react-router-dom";

const Navbar = withRouter(({ history, location, elements }) => {
  const curScreen = elements.indexOf(location.pathname);

  const isActive = (elem) => elem === location.pathname;

  return (
    <div className="navbar">
      <Brand elements={elements} />
      <ul>
        {elements.map((elem, i) => {
          if (i >= 1) {
            return (
              <li key={elem}>
                <div
                  className={`navbar__link ${isActive(elem) && "active"}`}
                  onClick={(e) => {
                    if (!isActive(elem)) {
                      history.push({
                        pathname:
                          elements[
                            elements.indexOf("/" + e.target.textContent)
                          ],
                        state: { prevScreen: curScreen },
                      });
                    }
                  }}
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
