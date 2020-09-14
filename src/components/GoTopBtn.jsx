import React, { useState, useEffect } from "react";
import "./../styles/GoTopBtn.css";

function GoTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 1400 && !isVisible) setIsVisible(true);
      else setIsVisible(false);
    });
  }, []);

  return (
    <div className={`goTopBtn ${!isVisible && "hidden"}`}>
      <div className="goTopBtn__button">
        <a href="#Landing">Back to Top</a>
      </div>
    </div>
  );
}

export default GoTopBtn;
