import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/header";
import Inicio from "./pages/inicio";
import Miembros from "./pages/miembros";
import Vision from "./pages/vision";
import Alumnos from "./pages/alumnos";
import Error404 from "./pages/Error404";
import Registro from "./pages/registo";
import Footer from "./pages/footer";
import Clave from "./pages/clave";

function App() {
  return (
    <div>
      <div className="text-light bg-success" style={{ minHeight: "100vh" }}>
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
            style={{
              minHeight: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="text-light"
              style={{
                backgroundColor: "#FFF8E1",
                minHeight: "5vh",
                flexShrink: "0",
                position: "fixed",
                bottom: "0",
                left: "0",
                width: "100%",
              }}
            >
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
