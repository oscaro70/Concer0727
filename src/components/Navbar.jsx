import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  shadow-sm sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmnYz6e1lW7dBiqdN3fAYiB6XT7OSwY9j6SA&s"
            alt="Logo"
            width="40"
            height="40"
            className="me-2 rounded-circle"
          />
          <span className="fw-bold">CACU STORE</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">Sobre nosotros</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/mision">Misión y visión</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/productos">Productos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/clientes">Clientes</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/galeria">Galería</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/testimonios">Testimonios</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/redes">Redes sociales</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/aviso">Aviso de privacidad</Link></li>
            <li className="nav-item"><a href="https://django-back-7m5v.onrender.com/" className="nav-link"
                target="_blank" rel="noopener noreferrer">CRUD</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
