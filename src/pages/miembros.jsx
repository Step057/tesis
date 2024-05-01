import React, { useState, useEffect } from "react";

const Miembros = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="titulo">
        <h1
          className="ubi text-center py-3"
          style={{
            color: isVisible ? "#000" : "transparent",
            transition: "color 1s ease-in-out",
          }}
        >
          Ubicación
        </h1>
        <div className="row">
          <div className="col-md-5">
            <iframe
              title="map"
              src={`https://www.google.com/maps/embed/v1/place?q=Av. Luis Cordero 1378 y Quito&key=AIzaSyDw2YnukEj_BB5DdINKwhlr5qc8Di7Q4R4`}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="col-md-5">
            <h2 style={{ fontSize: "1.5rem", color: "black" }}>
              Nos encontramos ubicados en:
            </h2>
            <p style={{ fontSize: "1.5rem" }}>Av. Luis Cordero 1378 y Quito</p>
            <h2 style={{ fontSize: "1.5rem" }}>Teléfonos:</h2>
            <p style={{ fontSize: "1.5rem" }}>0988096429- 2331331</p>
            <h2 style={{ fontSize: "1.5rem" }}>Correo:</h2>
            <p style={{ fontSize: "1.5rem" }}>uedflmarketing2022@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Miembros;
