import React from "react";

const Clave = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <form className="row g-3">
        <div className="col-auto">
          <label htmlFor="staticEmail2" className="visually-hidden">
            Email
          </label>
          <input
            type="text"
            readOnly
            id="staticEmail2"
            value="Contactese con soporte técnico del colegio"
            className="form-control"
            style={{ width: "400px" }} // Establece un ancho fijo para el campo de entrada
          />
        </div>
      </form>
    </div>
  );
};

export default Clave;
