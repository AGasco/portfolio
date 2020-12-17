import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./../styles/Navbar.css";

const sections = ["About Me", "Skills", "Projects", "Contact"];

const Navbar = () => {
  return (
    <div className="navbar">
      <ScrollLink className="navbar__home" to="root">
        antoniofgasco
      </ScrollLink>
      <ul>
        {sections.map((section, i) => (
          <li key={section}>
            <ScrollLink
              className="navbar__link"
              to={section.replace(/\s/g, "")}
              // duration={(i + 1) * 400}
            >
              {section}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
