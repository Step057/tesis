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
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>This is the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent-bog2-1.xx.fbcdn.net/v/t39.30808-6/279085681_2839313973041794_2689074611823802260_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9534ce&_nc_ohc=YGJlN_F0mBEAX-bgYO2&_nc_ht=scontent-bog2-1.xx&oh=00_AfCxQQZ8kZ9wZ8RNxiHKCOCpg-sDlgjNJ8sh72UXmWLmQw&oe=65C87AD0"
          alt="Second slide"
          width={400}
          height={300}
          style={{ borderRadius: "10px" }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>This is the second slide.</p>
        </Carousel.Caption>
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
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>This is the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default SimpleCarousel;
