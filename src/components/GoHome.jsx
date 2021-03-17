import React from "react";
import { withRouter } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

//I rather have a duplicated elements array (the other copy is in App.js)
//than having to prop-drill every single component for GoHome to have access to the elements array
const elements = ["/", "/About Me", "/Skills", "/Projects", "/Contact"];

const GoHome = withRouter(({ location, history, isMobile }) => {
  const curScreen = elements.indexOf(location.pathname);
  return (
    <div className={`goHome${isMobile ? "Mobi" : ""}`}>
      <div
        className="goHome__link"
        onClick={() =>
          history.push({
            pathname: "/",
            state: { prevScreen: curScreen },
          })
        }
      >
        <HomeIcon />
      </div>
    </div>
  );
});

export default GoHome;
