import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [rol, setRol] = useState("");
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({});
  const [subject, setSubject] = useState({ name: "", teacher: "", email: "" });
  const [userExist, setUserExist] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/get")
      .then((response) => {
        setUsers(response.data);
        console.log("Response dataLOG:", response.data);
        console.log("1111", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Form Data:", formData); // Log the object before sending
    if (Object.values(formData).every((value) => !value)) {
      alert(
        "Rellene todos los campos obligatorios antes de enviar el formulario."
      );
      return;
    }

    // if (users?.find((user) => user.correo === formData?.correo)) {
    //   alert("EL correo ya fue registrado");
    //   return;
    // }

    try {
      console.log("trying");
      console.log("subject", subject);
      const response = await axios.post(
        "http://localhost:3000/api/save",
        formData
      );
      const responseSubject = await axios.post(
        "http://localhost:3000/api/subject/save",
        subject
      );
      if (
        response.statusText === "Created" &&
        responseSubject.statusText === "Created"
      ) {
        console.log("Datos guardados correctamente:");
        if (formData.materia) {
          navigate("/profesores");
        } else {
          navigate("/alumnos");
        }
      } else {
        console.error("Error al guardar los datos:", response.statusText);
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
    if (
      event.target.name !== "contraseña" ||
      event.target.name !== "contraseña_confirmar"
    ) {
      setFormData({ ...formData, [event.target.name]: event.target.value });
      if (event.target.name === "nombre") {
        setSubject({ ...subject, teacher: event.target.value });
      }
      if (event.target.name === "materia") {
        setSubject({ ...subject, name: event.target.value });
      }
      if (event.target.name === "correo") {
        setSubject({ ...subject, email: event.target.value });
      }
    }
  };
  console.log("1111", formData?.contraseña?.length);
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
            {!users?.find(
              (user) =>
                user.correo === formData?.correo &&
                user?.correo === formData?.correo &&
                user?.correo
            ) && (
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
            )}
            {!users?.find(
              (user) =>
                user.correo === formData?.correo &&
                user?.correo === formData?.correo &&
                user?.correo
            ) && (
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
            )}
            {!users?.find(
              (user) =>
                user.correo === formData?.correo &&
                user?.correo === formData?.correo &&
                user?.correo
            ) && (
              <div className="col-md-6">
                <label htmlFor="id" className="form-label">
                  ID_usuario (opcional)
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
            )}
            {users?.find(
              (user) =>
                user.correo !== null &&
                user?.correo === formData?.correo &&
                user?.correo
            ) && (
              <div>
                Este correo ya fue registrado,añada materias o cursos, si
                necesita actualizacion de datos contacte al administrador.
              </div>
            )}
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
            {!users?.find(
              (user) =>
                user.correo === formData?.correo &&
                user?.correo === formData?.correo &&
                user?.correo
            ) && (
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
            )}
            {!users?.find(
              (user) =>
                user.correo === formData?.correo &&
                user?.correo === formData?.correo &&
                user?.correo
            ) && (
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
            )}
            {!users?.find(
              (user) =>
                user.correo === formData?.correo &&
                user?.correo === formData?.correo &&
                user?.correo
            ) && (
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
            )}

            {(rol === "profesor" ||
              users?.find(
                (user) =>
                  user.correo === formData?.correo &&
                  user?.correo === formData?.correo &&
                  user?.correo
              )) && (
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
            {rol === "profesor" && <div className="col-md-6"></div>}
            <div className="col-md-6">
              <label htmlFor="inputNombre" className="form-label">
                Curso:
              </label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="curso"
                aria-label="Curso"
                name="curso"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-12">
            <button
              disabled={
                !formData?.contraseña?.length ||
                formData?.contraseña !== formData?.contraseña_confirmar
              }
              type="submit"
              className="btn btn-outline-dark mb-3"
              style={{ width: "200px", height: "50px" }}
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registro;
