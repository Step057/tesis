import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image3 from "../../../images/imageDF.webp";

const SimpleCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <Carousel
      style={{
        width: isVisible ? "500px" : 0,
        height: isVisible ? "340px" : 0,
        display: "block",
        margin: "20px auto",
        borderRadius: "7%",
        overflow: "hidden",
        transition: "width 1s, height 1s",
      }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://docplayer.es/docs-images/78/77386390/images/15-0.jpg"
          alt="First slide"
          width={400}
          height={300}
          style={{ borderRadius: "10px" }}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.isu.pub/180712160854-ad07afa4a53299afae4d78ec2351b12e/jpg/page_1.jpg"
          alt="Second slide"
          width={400}
          height={300}
          style={{ borderRadius: "10px" }}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          width={400}
          height={300}
          style={{ borderRadius: "10px" }}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default SimpleCarousel;
