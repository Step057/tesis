import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <Container>
      <div className="login-light"></div>
      <LoginBox>
        <form onSubmit={handleSubmit}>
          <div className="light"></div>

          <h2>Ingreso al portal</h2>
          <InputBox>
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
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
              required
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
            <p>
              No tienes cuenta aún? <a href="/Registro"> Registrate </a>
            </p>
          </div>
        </form>
      </LoginBox>
    </Container>
  );
};

export default LoginForm;
