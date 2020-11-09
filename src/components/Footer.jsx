import React from "react";
import "./../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      Built and designed by
      <span className="footer__name">Antonio F. Gasco</span> with{" "}
      <span className="footer__heart">{`<3`}</span> (and ReactJS of course)
    </div>
  );
}

export default Footer;
