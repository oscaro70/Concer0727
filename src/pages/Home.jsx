export default function Home() {
  return (
    <div className="container mt-5">
      <h1 className="display-5 fw-bold text-center text-primary mb-4">
        Bienvenido a CACU STORE
      </h1>
      <hr className="mb-5" />
      <p className="lead text-center">
        Somos líderes en la venta de guantes de portero profesionales, ofreciendo
        calidad, tecnología y estilo a porteros de todo el mundo.
      </p>

      <div className="row text-center mt-5">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
            <i className="bi bi-cpu text-primary fs-1 mb-3"></i>
              <h5 className="card-title">Tecnología y Diseño</h5>
              <p className="card-text">
                Nuestros guantes incorporan materiales de última generación para
                brindar el mejor agarre y comodidad en cualquier clima.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
            <i className="bi bi-trophy text-primary fs-1 mb-3"></i>
              <h5 className="card-title">Calidad Mundial</h5>
              <p className="card-text">
                Exportamos a más de 50 países, garantizando estándares
                internacionales en cada producto.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
            <i className="bi bi-lightning-charge text-primary fs-1 mb-3"></i>
              <h5 className="card-title">Pasión por el Fútbol</h5>
              <p className="card-text">
                Compartimos tu pasión por proteger el arco. Cada par de guantes
                está diseñado para potenciar tu rendimiento en la cancha.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
