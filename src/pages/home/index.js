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
      <td>{grade?.total}</td>
    </tr>
  );

  return (
    <table class="table" style={{ width: "80%", margin: "20px auto" }}>
      <thead>
        <tr>
          <th scope="col">Materia</th>
          <th scope="col">grade1</th>
          <th scope="col">grade2</th>
          <th scope="col">grade3</th>
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
    </table>
  );
};

export default StudentsTable;
