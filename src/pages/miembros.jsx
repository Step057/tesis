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
    <div className="titulo">
      <h1
        className="ubi text-center py-3"
        style={{
          color: isVisible ? "#000" : "transparent",
          transition: "color 1s ease-in-out",
        }}
      >
        {" "}
        Ubicación{" "}
      </h1>
      <div
        className="row
      "
      >
        <div className="col -md-5">
          <img
            src="https://pr0.nicelocal.ec/yN4MUQtDNYkLcBPFSqtPJA/1120x700,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2fmQdBglFIOEHDiuNamWXZlbGwZ4N8_aORGzl8gF_f022MouwS6l6u1VTG6AQPXN9Q"
            alt="direccion"
            style={{
              width: isVisible ? "500px" : 0,
              display: "block",
              margin: "0 auto",
              borderRadius: "7%",
              overflow: "hidden",
              transition: "width 1s, height 1s",
            }}
          />
        </div>

        <div className="col-md-5">
          <h2 style={{ fontSize: "1.5rem", color: "black" }}>
            Nos encontramos ubicados en:
          </h2>
          <p style={{ fontSize: "1.5rem" }}>Av. Luis Cordero 1378 y Quito</p>
          <h2 style={{ fontSize: "1.5rem" }}>Teléfonos:</h2>
          <p style={{ fontSize: "1.5rem" }}> 0988096429- 2331331</p>
          <h2 style={{ fontSize: "1.5rem" }}>Correo:</h2>
          <p style={{ fontSize: "1.5rem" }}>uedflmarketing2022@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default Miembros;
