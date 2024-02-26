import React, { useState } from "react";

const Registro = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [rol, setRol] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    try {
      const response = await fetch("base.php", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al enviar los datos");
      }
      console.log("Datos enviados correctamente");
    } catch (error) {
      console.error("Error", error);
      setErrorMessage("Error al enviar los datos");
    }
  };
  const handleRolChange = (event) => {
    setRol(event.target.value);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <form
          onSubmit={handleSubmit}
          className="col-md-8 p-4 rounded"
          style={{
            border: "2px solid black",
            backgroundColor: "white",
            color: "black",
          }}
        >
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputNombre" className="form-label">
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
              <label htmlFor="inputapeliido" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Apellido"
                aria-label="Apellido"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="id" className="form-label">
                ID_usuario
              </label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="id_usuario"
                aria-label="id_usuario"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Correo
              </label>
              <input
                type="email"
                className="form-control mb-3"
                id="inputEmail4"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control mb-3"
                id="inputPassword4"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Ingrese de nuevo la contraseña:
              </label>
              <input
                type="password"
                className="form-control mb-3"
                id="inputPasswordConfirm"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Rol:</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="rol"
                    value="estudiante"
                    checked={rol === "estudiante"}
                    onChange={handleRolChange}
                  />{" "}
                  Estudiante
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="rol"
                    value="profesor"
                    checked={rol === "profesor"}
                    onChange={handleRolChange}
                  />{" "}
                  Profesor
                </label>
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
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
              <label htmlFor="inputAddress2" className="form-label">
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
              <label htmlFor="inputCity" className="form-label">
                Ciudad
              </label>
              <input type="text" className="form-control mb-3" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                Provincia
              </label>
              <select id="inputState" className="form-select mb-3">
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
              <label htmlFor="inputZip" className="form-label">
                Código postal
              </label>
              <input type="text" className="form-control mb-3" id="inputZip" />
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-outline-dark mb-3">
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
