import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-light py-2">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* Logo / Nombre */}
        <div className="mb-2 mb-md-0">
          <h6 className="fw-bold mb-0">CACU STORE</h6>
        </div>

        {/* Redes sociales */}
        <div className="d-flex gap-3 mb-2 mb-md-0">
          <a href="#" className="text-light fs-5 social-icon"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-light fs-5 social-icon"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-light fs-5 social-icon"><i className="bi bi-linkedin"></i></a>
          <a href="#" className="text-light fs-5 social-icon"><i className="bi bi-twitter"></i></a>
        </div>

        {/* Aviso de privacidad */}
        <div className="text-center text-md-end">
          <Link to="/aviso" className="text-light text-decoration-none footer-link small">
            Aviso de privacidad
          </Link>
        </div>
      </div>

      {/* Estilos hover */}
      <style jsx>{`
        .footer-link:hover {
          color: #ffdd57;
          text-decoration: underline;
        }
        .social-icon:hover {
          color: #ffdd57;
          transform: scale(1.2);
          transition: all 0.3s ease;
        }
      `}</style>
    </footer>
  );
}
