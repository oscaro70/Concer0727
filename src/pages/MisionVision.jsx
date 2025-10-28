export default function MisionVision() {
  return (
    <div className="container my-5">
      {/* Encabezado */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-center text-primary mb-4">Misión y Visión</h1>
        <p className="text-muted">
          Descubre lo que nos impulsa a proteger cada portería y a apoyar a los guardametas de todo el mundo.
        </p>
      </div>

      {/* Misión */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvHIlZubv2AQWfs_9cR-XrPmBpV90qr8pnw&s"
            alt="Misión"
            className="img-fluid rounded shadow w-75"
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold text-primary mt-4 mt-md-0">
            <i className="bi bi-bullseye me-2"></i>Misión
          </h2>
          <p className="lead text-justify">
            En <strong>CACU STORE</strong>, nuestra misión es ofrecer guantes de portero de la más alta calidad,
            combinando innovación, tecnología y diseño para mejorar el rendimiento de cada guardameta.
            Buscamos inspirar confianza bajo los tres postes y brindar productos que se adapten a todos
            los estilos de juego, desde el amateur hasta el profesional.
          </p>
        </div>
      </div>

      {/* Visión */}
      <div className="row align-items-center flex-md-row-reverse">
        <div className="col-md-6">
          <img
            src="https://rinatecuador.com/wp-content/uploads/2023/11/acerca-de-rinat-1024x640.webp"
            alt="Visión"
            className="img-fluid rounded shadow w-75"
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold text-primary mt-4 mt-md-0">
            <i className="bi bi-eye me-2"></i>Visión
          </h2>
          <p className="lead text-justify">
            Ser la marca líder mundial en guantes de portero, reconocida por su calidad, innovación
            y pasión por el fútbol. Aspiramos a construir una comunidad global de porteros que compartan
            nuestros valores de esfuerzo, compromiso y superación constante, defendiendo cada meta con orgullo.
          </p>
        </div>
      </div>

      {/* CTA final */}
      <div className="text-center mt-5">
        <a href="/contacto" className="btn btn-primary px-4 py-2">
          Contáctanos
        </a>
      </div>
    </div>
  );
}
