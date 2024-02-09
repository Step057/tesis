import React, { useState, useEffect } from "react";
import SimpleCarousel from "./_components/carousel";

const Inicio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container my-3">
      <div className="row">
        <div
          className="col-md-8"
          style={{
            color: isVisible ? "#000" : "transparent",
            transition: "color 1s ease-in-out",
          }}
        >
          <p>
            La Unidad Educativa "Darío Figueroa Larco" fue fundada el 9 de
            Octubre de 1975 por el Dr. Milton Ubidia. Con el pasar de los años,
            la Institución Educativa ha ido creciendo poco a poco, formando
            grandes líderes al servicio del país y del mundo. Fue bautizada con
            el nombre "Darío Figueroa Larco" ,en honor a su entrañable amigo,
            fallecido, oriundo de Sangolquí, quien fue rector de la Escuela Juan
            Montalvo. Cuando el Ministerio de Educación decretó que cada
            institución debía trabajar en una sola jornada, decidió crear una
            institución particular de jornada matutina, sus funciones educativas
            las desempeñaba en horario nocturno.
          </p>

          {/* <img
            src="https://docplayer.es/docs-images/78/77386390/images/15-0.jpg"
            alt="colegio"
            style={{
              width: "400px",
              display: "block",
              margin: "0 auto",
              borderRadius: "7%",
            }}
          /> */}
        </div>

        <div
          className="col-md-4"
          style={{
            color: isVisible ? "#000" : "transparent",
            transition: "color 1s ease-in-out",
          }}
        >
          <h1> FUNDADORES </h1>
          <p>
            Lcdo. Gerardo Alcocer, Sra.Rosa Black, Sra. Consuelo Sosa, Sra.
            María Eugenia Sosa, Dr.Milton Ubidia,Lcdo. Wilfrido Carrera y el
            Lcdo. Eduardo Haro Veloz.
          </p>
        </div>
      </div>
      <SimpleCarousel />
    </div>
  );
};
export default Inicio;
