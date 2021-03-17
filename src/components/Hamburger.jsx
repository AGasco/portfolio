import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Sidebar from "./Sidebar";

const Hamburger = ({ elements, color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    if (isOpen) setIsOpen(false);
    else setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="hamburger">
      <div className="hamburger__logoContainer">
        <MenuIcon
          className={`hamburger__menuIcon ${isOpen ? "open" : "closed"}`}
          onClick={handleClick}
        />
      </div>
      <div
        className={`hamburger__content ${color} ${
          isOpen ? "hamburger__active" : ""
        }`}
      >
        <Sidebar elements={elements} isMobile={true} onClose={handleClose} />
      </div>
    </div>
  );
};
export default Hamburger;
