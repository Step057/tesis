import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [rol, setRol] = useState("");
  const [formData, setFormData] = useState({});
  const [subject, setSubject] = useState({ name: "", teacher: "" });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Form Data:", formData); // Log the object before sending
    if (Object.values(formData).every((value) => !value)) {
      alert("Please fill out all required fields before submitting.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/save",
        formData
      );
      const responseSubject = await axios.post(
        "http://localhost:3000/api/student/save",
        subject
      );
      if (
        response.statusText === "Created" &&
        responseSubject.statusText === "Created"
      ) {
        console.log("Data saved successfully:");
        if (formData.materia) {
          navigate("/profesores");
        } else {
          navigate("/alumnos");
        }
      } else {
        console.error("Error saving data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRolChange = (event) => {
    setRol(event.target.value);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleChange = (event) => {
    if (event.target.name !== "contraseña_confirmar") {
      setFormData({ ...formData, [event.target.name]: event.target.value });
      if (event.target.name === "nombre") {
        setSubject({ ...subject, teacher: event.target.value });
      }
      if (event.target.name === "materia") {
        setSubject({ ...subject, name: event.target.value });
      }
    }
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
                name="nombre"
                onChange={handleChange}
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
                name="apellido"
                onChange={handleChange}
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
                name="id_usuario"
                onChange={handleChange}
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
                name="correo"
                onChange={handleChange}
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
                name="contraseña"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPasswordConfirm" className="form-label">
                Ingrese de nuevo la contraseña:
              </label>
              <input
                type="password"
                className="form-control mb-3"
                id="inputPasswordConfirm"
                name="contraseña_confirmar"
                onChange={handleChange}
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
                  />
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

            {rol === "profesor" && (
              <div className="col-md-6">
                <label htmlFor="inputNombre" className="form-label">
                  Materia
                </label>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Nombre"
                  aria-label="Materia"
                  name="materia"
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Dirección
              </label>
              <input
                type="text"
                className="form-control mb-3"
                id="inputAddress"
                placeholder="Sangolqui calle...."
                name="direccion"
                onChange={handleChange}
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
                name="calle_2"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">
                Ciudad
              </label>
              <input
                type="text"
                className="form-control mb-3"
                id="inputCity"
                name="ciudad"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                Provincia
              </label>
              <select
                id="inputState"
                className="form-select mb-3"
                name="provincia"
                onChange={handleChange}
              >
                <option selected>Escoger...</option>
                <option value="Azuay">Azuay</option>
                <option value="Bolívar">Bolívar</option>
                <option value="Cañar">Cañar</option>
                <option value="Carchi">Carchi</option>
                <option value="Chimborazo">Chimborazo</option>
                <option value="Cotopaxi">Cotopaxi</option>
                <option value="El Oro">El Oro</option>
                <option value="Esmeraldas">Esmeraldas</option>
                <option value="Galápagos">Galápagos</option>
                <option value="Guayas">Guayas</option>
                <option value="Imbabura">Imbabura</option>
                <option value="Loja">Loja</option>
                <option value="Los Ríos">Los Ríos</option>
                <option value="Manabí">Manabí</option>
                <option value="Morona Santiago">Morona Santiago</option>
                <option value="Napo">Napo</option>
                <option value="Orellana">Orellana</option>
                <option value="Pastaza">Pastaza</option>
                <option value="Pichincha">Pichincha</option>
                <option value="Santa Elena">Santa Elena</option>
                <option value="Santo Domingo de los Tsáchilas">
                  Santo Domingo de los Tsáchilas
                </option>
                <option value="Sucumbíos">Sucumbíos</option>
                <option value="Tungurahua">Tungurahua</option>
                <option value="Zamora Chinchipe">Zamora Chinchipe</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">
                Código postal
              </label>
              <input
                type="text"
                className="form-control mb-3"
                id="inputZip"
                name="codigo_postal"
                onChange={handleChange}
              />
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
