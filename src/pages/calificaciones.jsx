import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Modal from "./_components/modal";
import "./styles.css";

const CalificacionesTabla = () => {
  const [notas, setNotas] = useState(Array(10).fill("")); // Estado para almacenar las notas ingresadas
  const [bestStudent, setBestStudent] = useState({});
  const [worstStudent, setWorstStudent] = useState({});
  const [bestStudentName, setBestStudentName] = useState();
  const [worstStudentName, setWorstStudentName] = useState();
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
  console.log("mainUser", mainUser);
  console.log("lista", lista);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/subject")
      .then((response) => {
        setLista(response.data);
        setSubjectID(
          response.data.find(
            (subject) =>
              subject.name === mainUser.materia ||
              subject.name === mainUser[0]?.materia
          )?._id
        );
        console.log("Response data:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  console.log(subjectID);

  useEffect(() => {
    //BEST STUDENT
    axios
      .get(`http://localhost:3000/api/subject/${subjectID}`)
      .then((response) => {
        setBestStudent(response.data);
        console.log("resss", response?.data);
      })
      .catch((err) => {
        console.log("error fetching max");
      });
    //WORST STUDENT
    axios
      .get(`http://localhost:3000/api/subject/min/${subjectID}`)
      .then((response) => {
        setWorstStudent(response.data);
        console.log("worstStudentData", response?.data);
      })
      .catch((err) => {
        console.log("error fetching max");
      });
  }, [subjectID]);

  useEffect(() => {
    if (bestStudent) {
      //BESTSTUDENT DATA
      axios
        .get(
          `http://localhost:3000/api/getSingleStudent/${bestStudent?.studentId}`
        )
        .then((response) => {
          setBestStudentName(response.data);
          console.log("bestStudent", response?.data);
        })
        .catch((err) => {
          console.log("error fetching max");
        });
    }
    if (worstStudent) {
      //WORST STUDENT DATA
      axios
        .get(
          `http://localhost:3000/api/getSingleStudent/${worstStudent?.studentId}`
        )
        .then((response) => {
          setWorstStudentName(response.data);
          console.log("worststudent", response?.data);
        })
        .catch((err) => {
          console.log("error fetching max");
        });
    }
  }, [bestStudent, worstStudent]);

  const subirNotas = async () => {
    const formData = {
      studentId: notas[0],
      grade1: notas[1],
      grade2: notas[2],
      grade3: notas[3],
      grade4: notas[4],
      grade5: notas[5],
      grade6: notas[6],
      grade7: notas[7],
      grade8: notas[8],
      total: total,
    };
    try {
      console.log("sending", subjectID);
      //TODO: search by userNickname then find id
      const response = await axios.put(
        `http://localhost:3000/api/subject/update/${subjectID}`,
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
    (Number(notas[1]) +
      Number(notas[2]) +
      Number(notas[3]) +
      Number(notas[4]) +
      Number(notas[5]) +
      Number(notas[6]) +
      Number(notas[7]) +
      Number(notas[8])) /
    8
  ).toFixed(1);
  return (
    <div className="wrapper">
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
            <th colSpan="10">Mis Notas</th>
          </tr>
          <tr>
            <th>
              <div>studentID</div>
              <Modal />
            </th>

            <th scope="col">Nota 1</th>
            <th scope="col">Nota 2</th>
            <th scope="col">Nota 3</th>
            <th scope="col">Examen 1</th>
            <th scope="col">Nota 1</th>
            <th scope="col">Nota 2</th>
            <th scope="col">Nota 3</th>
            <th scope="col">Examen 2</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="1">{mainUser?.materia || mainUser[0]?.materia}</td>
            {notas.map((nota, index) => (
              <td key={index}>
                <input
                  type="text"
                  value={index !== 9 ? nota : total}
                  onChange={(e) => handleChange(index, e.target.value)}
                  readOnly={!esProfesor()}
                  style={{ width: "6rem" }} // Establecer el ancho de donde van las notas
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <div style={{ marginTop: "20px" }}>
        Mejor Estudiante: {bestStudentName?.nombre} {bestStudentName?.apellido}
      </div>
      <div style={{ marginTop: "20px" }}>
        Peor Estudiante: {worstStudentName?.nombre} {worstStudentName?.apellido}
      </div>
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
