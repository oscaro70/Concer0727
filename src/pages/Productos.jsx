export default function Productos() {
  return (
    <div className="container my-5">
      {/* Encabezado */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-center text-primary mb-4">Nuestros Productos y Servicios</h1>
        <p className="text-muted">
          Diseñamos y fabricamos guantes de portero de alto rendimiento, junto con servicios que impulsan tu desempeño dentro y fuera del campo.
        </p>
      </div>

      {/* Sección de tarjetas */}
      <div className="row g-4">
        {/* Producto 1 */}
        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
          <iframe 
         src="https://www.youtube.com/embed/lRUgdJ0f8QU" title="TOP 5 MEJORES GUANTES de 2023!!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="card-body text-center">
              <h5 className="card-title fw-bold text-primary">
                <i className="bi bi-shield-check me-2"></i>Guantes Profesionales
              </h5>
              <p className="card-text">
                Guantes diseñados con tecnología alemana de látex, máxima adherencia y resistencia para porteros de élite y amateurs.
              </p>
            </div>
          </div>
        </div>

        {/* Producto 2 */}
        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
          <iframe  src="https://www.youtube.com/embed/f8-TiYBRphU" title="Sorprendí a Courtois con Guantes de Portero Personalizados!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="card-body text-center">
              <h5 className="card-title fw-bold text-primary">
                <i className="bi bi-brush me-2"></i>Personalización de Guantes
              </h5>
              <p className="card-text">
                Personaliza tus guantes con tu nombre, bandera o número. Refleja tu identidad en cada atajada.
              </p>
            </div>
          </div>
        </div>

        {/* Producto 3 */}
        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
          <iframe  src="https://www.youtube.com/embed/gORa0wb82G0" title="VESTIR COMO PORTERO PROFESIONAL🔥⚽️| Tips para Porteros" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="card-body text-center">
              <h5 className="card-title fw-bold text-primary">
                <i className="bi bi-bag-check me-2"></i>Ropa de Entrenamiento
              </h5>
              <p className="card-text">
                Equipamiento diseñado para el máximo rendimiento: jerseys, pantalones, sudaderas y protecciones especializadas.
              </p>
            </div>
          </div>
        </div>

        {/* Producto 4 */}
        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
          <iframe  src="https://www.youtube.com/embed/6YsRc2nglu8" title="Entrenamiento de porteros | INSIDE #SOMOSAMÉRICA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="card-body text-center">
              <h5 className="card-title fw-bold text-primary">
                <i className="bi bi-stopwatch me-2"></i>Entrenamiento para Porteros
              </h5>
              <p className="card-text">
                Clases y asesorías con entrenadores certificados para mejorar reflejos, técnica y posicionamiento.
              </p>
            </div>
          </div>
        </div>

        {/* Producto 5 */}
        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
          <iframe  src="https://www.youtube.com/embed/tenmxh1a1CI" title="LIMPIEZA GUANTES DE PORTERO | RECUPERA EL GRIP Y ALARGA SU VIDA UTIL |" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="card-body text-center">
              <h5 className="card-title fw-bold text-primary">
                <i className="bi bi-tools me-2"></i>Mantenimiento y Cuidado
              </h5>
              <p className="card-text">
                Kits de limpieza y asesoría para prolongar la vida útil de tus guantes y mantener el agarre óptimo.
              </p>
            </div>
          </div>
        </div>

        {/* Producto 6 */}
        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
          <iframe src="https://www.youtube.com/embed/qsufzK7rwng" title="Preparamos el día internacional del portero" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="card-body text-center">
              <h5 className="card-title fw-bold text-primary">
                <i className="bi bi-globe-americas me-2"></i>Distribución Internacional
              </h5>
              <p className="card-text">
                Envíos y distribución global de nuestros productos, con presencia en América Latina, Europa y Asia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA final */}
      <div className="text-center mt-5">
        <a href="/contacto" className="btn btn-primary px-4 py-2">
          Solicita tu catálogo
        </a>
      </div>
    </div>
  );
}
