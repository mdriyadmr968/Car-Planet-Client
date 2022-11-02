import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

import image1 from "../../../Images/hero-bg.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel fade={true} pause={false} className="Carousel-container">
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel-image"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption className="captions-styles">
            <h1>Welcome to CarPlanet</h1>
            <p>
              Buy your dream car from CarPlanet
            </p>
            <div class="banner-button">View All Cars</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
