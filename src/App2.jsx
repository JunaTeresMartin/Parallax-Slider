import React from "react";
import "./App.css";
// Importing the Parallax and ParallaxLayer components from react-spring
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// Importing the images for the parallax effect
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";
import moon from "./assets/moon.jpg";

function App() {
  return (
    <div>
      {/* Parallax component with 3 pages */}
      <Parallax pages={3}>
        {/* 
          First Parallax Layer
          - offset={0} ensures this layer starts at the top of the page.
          - speed={0.5} sets a consistent speed for a smooth scroll.
          - factor={1} ensures this layer takes up exactly one page height.
        */}
        <ParallaxLayer
          offset={0}
          speed={0.5}  //{/* Adjusting speed for a smoother effect */}
          factor={1}
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Centered text for the first section */}
          <div className="content">
            <h1>Welcome to My Website</h1>
          </div>
        </ParallaxLayer>

        {/* 
          Second Parallax Layer
          - offset={1} places this layer below the first one (i.e., on the second page).
          - speed={0.5} ensures the same scroll speed as the first layer to avoid gaps.
          - factor={1} ensures this layer takes up exactly one page height.
        */}
        <ParallaxLayer
          offset={1}
          speed={0.8}  //{/* Matching speed to avoid gaps */}
          factor={1}
          style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Centered text for the second section */}
          <div className="content">
            <h1>React.js is Fun!</h1>
          </div>
        </ParallaxLayer>

        {/* 
          Third Parallax Layer
          - offset={2} places this layer on the third page.
          - speed={0.5} matches the previous layers' speed to ensure smooth transitions.
          - factor={1} ensures this layer takes up exactly one page height.
        */}
        <ParallaxLayer
          offset={2}
          speed={0.5}  //{/* Same speed for consistency */}
          factor={1}
          style={{
            backgroundImage: `url(${img3})`,
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Centered text for the third section */}
          <div className="content">
            <h1>Keep Scrolling for More</h1>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
