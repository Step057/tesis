import React, { useEffect, useState, useRef } from "react";
import "./styles.css";

const StudentModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [students, setStudents] = useState([]);
  const modalRef = useRef(null); // reference for the modal container

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showModal]); // add/remove event listener on showModal change

  return (
    <div className="modalContainer">
      <button onClick={handleOpenModal}>Registrate</button>
      {showModal && (
        <div className="modal" ref={modalRef}>
          <div className="modal-content">
            <div className="modal-header">
              <h3>Student ID</h3>
            </div>
            <div
              className="modal-body"
              style={{ paddingTop: "10px", display: "flex" }}
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
