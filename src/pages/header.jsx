import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="Container py-4">
      <div className="row">
        <div className="column">
          <Link to="/">
            <img
              src="data:image/jpeg;base64,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"
              alt="UNIDAD EDUCATIVA DARIO FIGUEROA LARCO"
              width={150}
            />
          </Link>
          <div className=" titulo text-center">
            <h1> UNIDAD EDUCATIVA DARIO FIGUEROA LARCO </h1>
          </div>
        </div>
        <div className="col">
          <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                to="/"
                style={{ backgroundColor: "#FFFDD0", color: "black" }}
              >
                Inicio
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                to="miembros"
                style={{ backgroundColor: "#FFFDD0", color: "black" }}
              >
                Sobre nosotros
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                to="Vision"
                style={{ backgroundColor: "#FFFDD0", color: "black" }}
              >
                Vision
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                to="Alumnos"
                style={{ backgroundColor: "#FFFDD0", color: "black" }}
              >
                Alumnos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
