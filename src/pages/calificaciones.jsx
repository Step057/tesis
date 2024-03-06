import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Modal from "./_components/modal";

const CalificacionesTabla = () => {
  const [notas, setNotas] = useState(Array(5).fill("")); // Estado para almacenar las notas ingresadas
  const [lista, setLista] = useState([]);
  const [subjectID, setSubjectID] = useState();
  const location = useLocation();
  const mainUser = location.state?.mainUser;

  const handleChange = (index, value) => {
    if (
      value === "" ||
      (parseFloat(value) >= 0 && parseFloat(value) <= 10 && index !== 0)
    ) {
      const nuevasNotas = [...notas];
      nuevasNotas[index] = value;
      setNotas(nuevasNotas);
    } else {
      if (index !== 0) {
        alert("Por favor ingrese un número válido entre 0 y 10.");
      } else {
        const nuevasNotas = [...notas];
        nuevasNotas[index] = value;
        setNotas(nuevasNotas);
      }
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/student")
      .then((response) => {
        setLista(response.data);
        setSubjectID(
          response.data.find((subject) => subject.name === mainUser.materia)
            ?._id
        );
        console.log("Response data:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const subirNotas = async () => {
    const formData = {
      studentId: notas[0],
      grade1: notas[1],
      grade2: notas[2],
      grade3: notas[3],
      total: total,
    };
    try {
      console.log("sending", subjectID);
      //TODO: search by userNickname then find id
      const response = await axios.put(
        `http://localhost:3000/api/student/update/${subjectID}`,
        formData
      );
      console.log("response", response);
      if (response.statusText === "Created" || response.statusText === "OK") {
        alert("Notas subidas correctamente");
      } else {
        console.error("Error saving data:", response.statusText);
        // Handle errors (e.g., display error message)
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle unexpected errors
    }
  };

  const imprimir = () => {
    window.print();
  };

  const total = (
    (Number(notas[1]) + Number(notas[2]) + Number(notas[3])) /
    3
  ).toFixed(1);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Libreta de calificaciones </h1>
      <table
        style={{
          border: "1px solid black",
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <thead style={{ backgroundColor: "white", color: "black" }}>
          <tr>
            <th rowSpan="2">Materia</th>
            <th colSpan="6">Mis Notas</th>
          </tr>
          <tr>
            <th>
              <div>studentID</div>
              <Modal />
            </th>

            <th>T1</th>
            <th>T2</th>
            <th>T3</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="1">{mainUser?.materia}</td>
            {notas.map((nota, index) => (
              <td key={index}>
                <input
                  type="text"
                  value={index !== 4 ? nota : total}
                  onChange={(e) => handleChange(index, e.target.value)}
                  readOnly={!esProfesor()}
                  style={{ width: "6rem" }} // Establecer el ancho de donde van las notas
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <button onClick={subirNotas} style={{ marginTop: "100px" }}>
        Subir Nota
      </button>
      <button onClick={imprimir} style={{ marginTop: "100px" }}>
        Imprimir
      </button>
    </div>
  );
};

const esProfesor = () => {
  return true;
};

export default CalificacionesTabla;
