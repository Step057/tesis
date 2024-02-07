import React from "react";

const Clave = () => {
  return (
    <form className="row g-3">
      <div className="col-auto">
        <label htmlFor="staticEmail2" className="visually-hidden">
          Email
        </label>
        <input
          type="text"
          readOnly
          className="form-control-plaintext"
          id="staticEmail2"
          value="Correo electrónico"
        />
      </div>
      <div className="col-auto">
        <label htmlFor="inputPassword2" className="visually-hidden">
          Correo
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword2"
          placeholder="Correo"
        />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-dark mb-3">
          Enviar nueva clave
        </button>
      </div>
    </form>
  );
};

export default Clave;
