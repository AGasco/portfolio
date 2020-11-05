import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import AnimatedSwitch from "./anims/AnimatedSwitch";

const elements = ["/", "/About Me", "/Skills", "/Projects", "/Contact"];

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  //Checking if it's mobile or desktop to render different components
  useEffect(() => {
    setIsMobile(screenWidth <= 600);
  }, [screenWidth]);

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  return (
    <React.Fragment>
      <div className="app">
        <BrowserRouter>
          <AnimatedSwitch isMobile={isMobile} elements={elements} />
          <Footer />
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
