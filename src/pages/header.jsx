import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
const Header = () => {
  return (
    <div className="containerNavBar">
      <div className="row">
        <div
          className="col"
          style={{ marginTop: "0px", backgroundColor: "white" }}
        >
          <ul class="nav nav-fill">
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                to="/"
                style={{ color: "black" }}
              >
                Inicio
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                to="miembros"
                style={{ color: "black" }}
              >
                Sobre nosotros
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                to="Vision"
                style={{ color: "black" }}
              >
                Vision
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                to="Alumnos"
                style={{ color: "black" }}
              >
                Alumnos
              </Link>
            </li>
            <div class="nav-item">
              <li>
                <Link>
                  <FaInstagram color="green" size={20} />
                </Link>
              </li>
              <li>
                <Link>
                  <FaFacebook color="green" size={20} />
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="column">
          <Link to="/">
            <img
              src={logo}
              alt="UNIDAD EDUCATIVA DARIO FIGUEROA LARCO"
              width={100}
              style={{ borderRadius: "50%", position: "absolute", top: "0px" }}
            />
          </Link>
          <div className=" titulo text-center pt-4">
            <h1> UNIDAD EDUCATIVA DARIO FIGUEROA LARCO </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
