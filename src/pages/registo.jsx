import React from "react";

const Registro = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <form
          className="col-md-8 p-4 bg-dark rounded"
          style={{ border: "2px solid black" }}
        >
          <div className="row justify-content-center">
            <div className="col-md-6">
              <label htmlFor="inputNombre" className="form-label text-white">
                Nombre
              </label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Nombre"
                aria-label="Nombre"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputapeliido" className="form-label text-white">
                Apellido
              </label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Apellido"
                aria-label="Apellido"
              />
            </div>
          </div>

          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label text-white">
                Correo
              </label>
              <input
                type="email"
                className="form-control mb-3"
                id="inputEmail4"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label text-white">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control mb-3"
                id="inputPassword4"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label text-white">
                Dirección
              </label>
              <input
                type="text"
                className="form-control mb-3"
                id="inputAddress"
                placeholder="Sangolqui calle...."
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label text-white">
                Calle #2
              </label>
              <input
                type="text"
                className="form-control mb-3"
                id="calle #2"
                placeholder="Calle N"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label text-white">
                Ciudad
              </label>
              <input type="text" className="form-control mb-3" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label text-white">
                Provincia
              </label>
              <select
                id="inputState"
                className="form-select mb-3 text-white bg-dark"
              >
                <option selected>Escoger...</option>
                <option>Azuay</option>
                <option>Bolívar</option>
                <option>Cañar</option>
                <option>Carchi</option>
                <option>Chimborazo</option>
                <option>Cotopaxi</option>
                <option>El Oro</option>
                <option>Esmeraldas</option>
                <option>Galápagos</option>
                <option>Guayas</option>
                <option>Imbabura</option>
                <option>Loja</option>
                <option>Los Ríos</option>
                <option>Manabí</option>
                <option>Morona Santiago</option>
                <option>Napo</option>
                <option>Orellana</option>
                <option>Pastaza</option>
                <option>Pichincha</option>
                <option>Santa Elena</option>
                <option>Santo Domingo de los Tsáchilas</option>
                <option>Sucumbíos</option>
                <option>Tungurahua</option>
                <option>Zamora Chinchipe</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label text-white">
                Código postal
              </label>
              <input type="text" className="form-control mb-3" id="inputZip" />
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-outline-light mb-3">
                Registrarse
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registro;
