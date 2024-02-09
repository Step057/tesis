import React, { useState, useEffect } from "react";

const Vision = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        color: isVisible ? "#000" : "transparent",
        transition: "color 1s ease-in-out",
      }}
    >
      <h1 className="vision text-center" style={{ fontSize: "2.5rem" }}>
        {" "}
        Vision{" "}
      </h1>
      <p
        className="texto text-center text-justify"
        style={{ fontSize: "1.5rem", color: "white" }}
      >
        Ser reconocidos a nivel nacional mediante la excelencia
        académica,cultura investigativa e innovación tecnológica, basada en la
        educación pedagógica, integral, moral y ética, garantizando
        responsabilidad social, conciencia ecológica y competitividad
        profesional.
      </p>
      <h1 className="mision text-center" style={{ fontSize: "2.5rem" }}>
        Mision{" "}
      </h1>
      <p
        className="text text-center text-justify"
        style={{ fontSize: "1.5rem", color: "white" }}
      >
        Brindar una educación de calidad en beneficio de la niñez y juventud a
        través del pensamiento reflexivo, crítico, profesional y excelente
        práctica de valores, formando futuros líderes humanitarios, comunitarios
        e innovadores por medio del conocimiento académico, tecnológico y
        espíritu emprendedor al servicio de la sociedad.
      </p>
    </div>
  );
};
export default Vision;
