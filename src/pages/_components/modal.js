import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FaCopy } from "react-icons/fa";
import * as Clipboard from "clipboard";
import "./modal.css";

const StudentModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [students, setStudents] = useState([]);
  const studentIds = [12345, 54321, 98765];

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/get")
      .then((response) => {
        setStudents(response.data.filter((item) => item.rol !== "profesor"));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const itemIdRef = useRef(null);

  return (
    <div>
      <button onClick={handleOpenModal}>ver ID's</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Student ID</h3>
            </div>
            <div
              className="modal-body"
              style={{ paddingTop: "500px", display: "flex" }}
            >
              <ul>
                {students.map((item, index) => (
                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      flexDirection: "row",
                      gap: "40px",
                    }}
                  >
                    <li style={{ width: "100px" }} key={index}>
                      {item?.nombre || null}
                    </li>
                    <input
                      key={index}
                      ref={itemIdRef}
                      value={item._id}
                      readOnly
                      style={{ width: "250px" }}
                    />
                  </div>
                ))}
              </ul>
            </div>
            <div className="modal-footer">
              <button onClick={handleCloseModal}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentModal;