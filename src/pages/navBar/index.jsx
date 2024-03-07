import React from "react";
import Logo from "../../images/logo.jpg";
import { Link, NavLink } from "react-router-dom";

const Index = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={Logo}
            alt="Logo"
            width="50"
            style={{ borderRadius: "50%" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/miembros"
              >
                Sobre Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/Vision"
              >
                Vision
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Portal
              </NavLink>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <NavLink
                  className="dropdown-item"
                  activeClassName="active"
                  to="/Alumnos"
                >
                  Alumnos
                </NavLink>

                <NavLink
                  className="dropdown-item"
                  activeClassName="active"
                  to="/Profesores"
                >
                  Profesores
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Index;
