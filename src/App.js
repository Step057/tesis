import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/header";
import Inicio from "./pages/inicio";
import Footer from "./pages/footer";
import Miembros from "./pages/miembros";
import Vision from "./pages/vision";
import Alumnos from "./pages/alumnos";
import Error404 from "./pages/Error404";
import styled from "styled-components";
import Registro from "./pages/registo";

import Clave from "./pages/clave";

function App() {
  return (
    <div>
      <div className="text-light bg-success" style={{ minHeight: "30vh" }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/miembros" element={<Miembros />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/alumnos" element={<Alumnos />} />
            <Route path="/" element={<Error404 />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/clave" element={<Clave />} />
          </Routes>
          <div
            className="text-light"
            style={{ backgroundColor: "#FFF8E1", minHeight: "5vh" }}
          >
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
