import React from "react";
import GoHome from "./GoHome";
import CloseIcon from "@material-ui/icons/Close";
import { withRouter } from "react-router-dom";

const Sidebar = withRouter(
  ({ history, location, elements, isMobile, onClose }) => {
    const curScreen = elements.indexOf(location.pathname);

    return (
      <div className={isMobile ? "sidebarMobi" : "sidebar"}>
        <ul className={isMobile ? "sidebarMobi__list" : "sidebar__list"}>
          {isMobile && <GoHome isMobile={isMobile} />}
          {elements.map((elem, i) => {
            {
              /* First element is "/" so we ignore it*/
            }
            if (i >= 1) {
              if (i === curScreen) {
                return (
                  <li key={elem}>
                    <div
                      className={
                        isMobile
                          ? "sidebarMobi__link sidebarMobi__active"
                          : "sidebar__link sidebar__active"
                      }
                    >
                      {elem.slice(1)}
                    </div>
                  </li>
                );
              }
              return (
                <li key={elem}>
                  <div
                    className={isMobile ? "sidebarMobi__link" : "sidebar__link"}
                    onClick={(e) =>
                      history.push({
                        pathname:
                          elements[
                            elements.indexOf("/" + e.target.textContent)
                          ],
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
          {isMobile && (
            <CloseIcon className="hamburger__closeIcon" onClick={onClose} />
          )}
        </ul>
      </div>
    );
  }
);

export default Sidebar;
