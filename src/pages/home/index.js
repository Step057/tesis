import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [myGrade, setMyGrade] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const mainUser = localStorage.getItem("myVariableKey");
  let data = [];
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/subject")
      .then((response) => {
        setStudents(response.data);
        let data = [];

        response.data
          .filter((item, index) =>
            item.students.find((grade) => grade.studentId === mainUser)
          )
          ?.forEach((course) => {
            course?.students?.forEach((student) => {
              if (student?.studentId === mainUser) {
                console.log("dataFiltered", data);
                setFilteredData({ ...filteredData, student: student });
                data?.push({ student, name: course?.name });
              }
            });
          });
        setFilteredData(data);

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
      <th scope="row">{grade?.name}</th>
      <td>{grade?.student?.grade1}</td>
      <td>{grade?.student?.grade2}</td>
      <td>{grade?.student?.grade3}</td>
      <td>{grade?.student?.grade4}</td>
      <td>{grade?.student?.grade5}</td>
      <td>{grade?.student?.grade6}</td>
      <td>{grade?.student?.grade7}</td>
      <td>{grade?.student?.grade8}</td>
      <td>{grade?.student?.total}</td>
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
          {filteredData?.map((item) => {
            return renderRow(item);
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
