import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import "./../styles/Navbar.css";

const Navbar = withRouter(({ history, location, elements }) => {
  const curScreen = elements.indexOf(location.pathname);

  const [hidden, setHidden] = useState(false);

  // window.onscroll = () => {
  //   const scrollY = window.scrollY;
  //   if (scrollY >= 1) {
  //     setHidden(true);
  //     if (scrollY >= 800) {
  //       setInstant(true);
  //     } else setInstant(false);
  //   } else setHidden(false);
  // };

  const handleToggle = () => {
    if (hidden) setHidden(false);
    else setHidden(true);
  };

  return (
    <div className={`navbar ${hidden ? "hidden" : ""}`}>
      <ul>
        {elements.map((elem, i) => {
          if (i >= 1) {
            return (
              <li key={elem} className={`${hidden ? "hidden" : ""}`}>
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
      <div className="navbar__expand" onClick={handleToggle}>
        {hidden ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </div>
    </div>
  );
});

export default Navbar;
