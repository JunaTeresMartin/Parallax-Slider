import React from "react";
import { Parallax } from "react-parallax";

const ParallaxSection = ({ image, text }) => {
  return (
    <Parallax bgImage={image} strength={500}>
      <div style={{ height: 500 }}>
        <div style={styles.text}>{text}</div>
      </div>
    </Parallax>
  );
};

const styles = {
  text: {
    color: "#fff",
    fontSize: "40px",
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

export default ParallaxSection;
