import React from "react";
import { Link, withRouter } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import "./../styles/GoHome.css";

const elements = ["/", "/About Me", "/Skills", "/Projects", "/Contact"];

const GoHome = withRouter(({ location, history }) => {
  const curScreen = elements.indexOf(location.pathname);
  return (
    <div className="goHome">
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
