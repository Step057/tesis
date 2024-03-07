import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [myGrade, setMyGrade] = useState();
  const mainUser = localStorage.getItem("myVariableKey");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/student")
      .then((response) => {
        setStudents(response.data);
        setMyGrade(
          response.data.find((item) =>
            item.students.find((grade) => grade.studentId === mainUser)
          )
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  const renderRow = (grade) => (
    <tr>
      <th scope="row">{myGrade?.name}</th>
      <td>{grade?.grade1}</td>
      <td>{grade?.grade2}</td>
      <td>{grade?.grade3}</td>
      <td>{grade?.grade4}</td>
      <td>{grade?.grade5}</td>
      <td>{grade?.grade6}</td>
      <td>{grade?.grade7}</td>
      <td>{grade?.grade8}</td>
      <td>{grade?.total}</td>
    </tr>
  );
  const imprimir = () => {
    window.print();
  };
  console.log(students);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Libreta de calificaciones </h1>
      <table class="table" style={{ width: "80%", margin: "20px auto" }}>
        <thead>
          <tr>
            <th scope="col">Materia</th>
            <th scope="col">Nota 1</th>
            <th scope="col">Nota 2</th>
            <th scope="col">Nota 3</th>
            <th scope="col">Examen 1</th>
            <th scope="col">Nota 1</th>
            <th scope="col">Nota 2</th>
            <th scope="col">Nota 3</th>
            <th scope="col">Examen 2</th>
            <th scope="col">total</th>
          </tr>
        </thead>
        <tbody>
          {myGrade?.students.map((grade) => {
            if (grade.studentId === mainUser) {
              return renderRow(grade);
            }
          })}
        </tbody>
        <button onClick={imprimir} style={{ marginTop: "100px" }}>
          Imprimir
        </button>
      </table>
    </div>
  );
};

export default StudentsTable;
