import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contacto from "./pages/Contacto.jsx";
import Redes from "./pages/Redes.jsx";
import Aviso from "./pages/Aviso.jsx";
import MisionVision from "./pages/MisionVision.jsx";
import Testimonios from "./pages/Testimonios.jsx";
import Productos from "./pages/Productos.jsx";
import Clientes from "./pages/Clientes.jsx";
import Galeria from "./pages/Galeria.jsx";
function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Navbar */}
        
        <Navbar />

        {/* Contenido principal que empuja el footer hacia abajo */}
        <div className="flex-grow-1" style={{ padding: "2rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/redes" element={<Redes />} />
            <Route path="/aviso" element={<Aviso />} />
            <Route path="/mision" element={<MisionVision />} />
            <Route path="/testimonios" element={<Testimonios />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/galeria" element={<Galeria />} />
          </Routes>
        </div>

        {/* Footer siempre al final */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
