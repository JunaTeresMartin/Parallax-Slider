import React from "react";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpeg";
import gif1 from "./assets/jump-hello-transparent.gif"; // Importing the GIF
import ImageSlider from "./ImageSlider";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      {/* Adding Navbar component */}
      <Navbar />

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
          id="home"
          offset={0}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
          }}
          className="center"
        >
          <div>
            <h1 className="text-center font-weight-bold">WELCOME</h1>
          </div>
        </ParallaxLayer>

        {/* Second Parallax Layer (Page 2) */}
        <ParallaxLayer offset={1} speed={0.2} factor={1}>
          <div
            id="parallax-section"
            className="d-flex justify-content-between align-items-center content"
          >
            <p>PARALLAX EFFECT</p>
            <img
              src={gif1}
              className="img-fluid gif-right"
              alt="This is a gif"
            />
          </div>
        </ParallaxLayer>

        {/* Third Parallax Layer (Page 3) */}
        <ParallaxLayer className="slider" offset={2} speed={1} factor={1}>
          <div id="slider">
            <ImageSlider />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
