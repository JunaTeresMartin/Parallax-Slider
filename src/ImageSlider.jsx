import React from "react";
import Slider from "react-slick";
import img1 from "./assets/img1.jpeg";  
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";
import "./app.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={img1} alt="Slide 1" />
      </div>
      <div>
        <img src={img2} alt="Slide 2" />
      </div>
      <div>
        <img src={img3} alt="Slide 3" />
      </div>
    </Slider>
  );
};

export default ImageSlider;
