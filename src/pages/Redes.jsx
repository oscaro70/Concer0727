export default function Redes() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="display-5 fw-bold text-primary mb-4">Síguenos en Redes Sociales</h1>
      <p className="lead text-muted mb-5">
        Únete a nuestra comunidad mundial de porteros. Comparte tus atajadas, entrena con nosotros y descubre nuestros lanzamientos exclusivos.
      </p>
      <hr className="mb-5" />

      <div className="d-flex justify-content-center flex-wrap gap-4">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary d-flex align-items-center px-4 py-2 shadow-sm hover-scale"
        >
          <i className="bi bi-facebook me-2 fs-4"></i> Facebook
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-danger d-flex align-items-center px-4 py-2 shadow-sm hover-scale"
        >
          <i className="bi bi-instagram me-2 fs-4"></i> Instagram
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark d-flex align-items-center px-4 py-2 shadow-sm hover-scale"
        >
          <i className="bi bi-tiktok me-2 fs-4"></i> TikTok
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-danger d-flex align-items-center px-4 py-2 shadow-sm hover-scale"
        >
          <i className="bi bi-youtube me-2 fs-4"></i> YouTube
        </a>

        {/* Sitio oficial */}
        <a
          href="https://www.tuguantespro.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-success d-flex align-items-center px-4 py-2 shadow-sm hover-scale"
        >
          <i className="bi bi-globe me-2 fs-4"></i> Sitio Oficial
        </a>
      </div>

      <style jsx>{`
        .hover-scale {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hover-scale:hover {
          transform: scale(1.05);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
}
