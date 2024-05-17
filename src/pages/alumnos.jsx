import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Modal from "./_components/modalAdmin/modal";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
`;

const LoginBox = styled.div`
  position: relative;
  width: 400px;
  height: 450px;
  background: #191919;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AdminBox = styled.div`
  position: relative;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.div`
  position: relative;
  width: 310px;
  margin: 30px 0;
  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
    color: #999;
  }
  input {
    width: calc(100% - 30px);
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    background: none;
    border: none;
    outline: none;
    border-bottom: 1px solid #999;
  }
  input:focus + label,
  input:valid + label {
    top: -15px;
    font-size: 12px;
    color: #00f7ff;
  }
  label {
    position: absolute;
    top: 10px;
    left: 15px;
    font-size: 16px;
    color: #999;
    transition: 0.5s;
  }
  .input-line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #999;
  }
`;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [emailAdmin, setEmailAdmin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAdmin, setPasswordAdmin] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null); // reference for the modal container
  const navigate = useNavigate();
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    console.log("----");
    setShowModal(true);
    console.log("ss", showModal);
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

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleEmailChangeAdmin = (event) => {
    setEmailAdmin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePasswordChangeAdmin = (event) => {
    setPasswordAdmin(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleAdminPass = () => {
    if (emailAdmin === "admin@admin.com" && passwordAdmin === "admin123") {
      navigate("/Registro");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      users?.find(
        (user) => user.correo === email && user.contraseña === password
      )
    ) {
      localStorage.setItem(
        "myVariableKey",
        users?.find(
          (user) => user.correo === email && user.contraseña === password
        )._id
      );

      navigate("/home");
    } else {
      console.log("userNotFound");
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/get")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <Container>
      <div className="login-light"></div>
      <LoginBox>
        <form onSubmit={handleSubmit}>
          <div className="light"></div>

          <h2>Ingreso al portal</h2>
          <h2>Alumnos</h2>
          <InputBox>
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="email" value={email} onChange={handleEmailChange} />
            <label>Email</label>
            <div className="input-line"></div>
          </InputBox>
          <InputBox>
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <label>Password</label>
            <div className="input-line"></div>
          </InputBox>
          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                onChange={handleRememberMeChange}
                checked={rememberMe}
              />
              {"   "}
              Recordarmelo
            </label>
            <a href="/clave"> Olvidaste la contraseña?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>No tienes cuenta aún?</p>
          </div>
          <button onClick={handleOpenModal}>Registrate</button>
        </form>
      </LoginBox>
      {showModal && (
        <div className="modal" ref={modalRef}>
          <div className="modal-content">
            <div className="modal-header">
              <h3>Se necesita acceso para registrar usuarios:</h3>
            </div>
            <div
              className="modal-body"
              style={{ paddingTop: "10px", display: "flex" }}
            >
              <AdminBox>
                <form>
                  <label style={{ width: "80px" }}>Email</label>
                  <input
                    type="email"
                    value={emailAdmin}
                    onChange={handleEmailChangeAdmin}
                    required
                  />
                  <div className="input-line"></div>
                  <label style={{ width: "80px" }}>Password</label>
                  <input
                    type="password"
                    value={passwordAdmin}
                    onChange={handlePasswordChangeAdmin}
                    required
                  />
                </form>
              </AdminBox>
            </div>
            <div className="modal-footer">
              <button onClick={handleAdminPass}>Ingresar</button>
              <button onClick={handleCloseModal}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default LoginForm;
