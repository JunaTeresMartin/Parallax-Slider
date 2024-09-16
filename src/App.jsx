import React from "react";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";

function App() {
  return (
    <div>
      {/* Parallax component with 3 pages */}
      <Parallax
        pages={3}
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(85,73,193,1) 100%)",
        }}
      >
        {/* First Parallax Layer (Page 1) */}
        <ParallaxLayer
          offset={0}
          speed={0.5} /* Adding speed for smooth scrolling */
          factor={1} /* Takes up 1 full page */
          className="center"
        >
          <div>
            <h1>Page 1</h1>
          </div>
        </ParallaxLayer>

        {/* Second Parallax Layer (Page 2) */}
        <ParallaxLayer offset={1} speed={0.5} factor={1} className="center">
          <div>
            <h1>Page 2</h1>
          </div>
        </ParallaxLayer>

        {/* Third Parallax Layer (Page 3) */}
        <ParallaxLayer offset={2} speed={0.5} factor={1} className="center">
          <div>
            <h1>Page 3</h1>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
