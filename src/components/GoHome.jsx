import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import "./../styles/GoHome.css";

function GoHome() {
  return (
    <div className="goHome">
      <Link to="/">
        <HomeIcon />
      </Link>
    </div>
  );
}

export default GoHome;
