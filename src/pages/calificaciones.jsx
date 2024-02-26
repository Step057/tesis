import React, { useState } from "react";

const CalificacionesTabla = () => {
  const [notas, setNotas] = useState(Array(12).fill("")); // Estado para almacenar las notas ingresadas

  const handleChange = (index, value) => {
    if (value === "" || (parseFloat(value) >= 0 && parseFloat(value) <= 10)) {
      const nuevasNotas = [...notas];
      nuevasNotas[index] = value;
      setNotas(nuevasNotas);
    } else {
      alert("Por favor ingrese un número válido entre 0 y 10.");
    }
  };

  const subirNotas = () => {
    alert("Notas subidas correctamente");
  };

  const imprimir = () => {
    window.print();
  };

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
            <th colSpan="6">Primer Quimestre</th>
            <th colSpan="6">Segundo Quimestre</th>
          </tr>
          <tr>
            <th>T1</th>
            <th>T2</th>
            <th>T3</th>
            <th>TG1</th>
            <th>PP1</th>
            <th>Ex1</th>
            <th>T4</th>
            <th>T5</th>
            <th>T6</th>
            <th>TG2</th>
            <th>PP2</th>
            <th>Ex2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="1">Matemáticas</td>
            {notas.map((nota, index) => (
              <td key={index}>
                <input
                  type="text"
                  value={nota}
                  onChange={(e) => handleChange(index, e.target.value)}
                  readOnly={!esProfesor()}
                  style={{ width: "6rem" }} // Establecer el ancho de donde van las notas
                />
              </td>
            ))}
          </tr>

          <tr>
            <td rowSpan="1">Química</td>
            {notas.map((nota, index) => (
              <td key={index}>
                <input
                  type="text"
                  value={nota}
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
