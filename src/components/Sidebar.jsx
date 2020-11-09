import React from "react";
import { withRouter } from "react-router-dom";
import "./../styles/Sidebar.css";

const Sidebar = withRouter(({ history, location, elements }) => {
  const curScreen = elements.indexOf(location.pathname);

  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        {elements.map((elem, i) => {
          {
            /* First element is "/" so we ignore it*/
          }
          if (i >= 1) {
            if (i === curScreen) {
              return (
                <li key={elem}>
                  <div className="sidebar__link sidebar__active">
                    {elem.slice(1)}
                  </div>
                </li>
              );
            }
            return (
              <li key={elem}>
                <div
                  className="sidebar__link"
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

export default Sidebar;
