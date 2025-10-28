export default function Galeria() {
  return (
    <div className="container my-5">
      {/* Encabezado */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Galería de Guantes</h1>
        <p className="text-muted">
          Explora algunos de nuestros modelos más populares utilizados por porteros profesionales alrededor del mundo.
        </p>
      </div>

      {/* Grid de productos */}
      <div className="row g-4">
        {/* Guante 1 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card border-0 shadow-sm h-100 text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI0QiMuW3RkF6yG8wax05ZBWguHJPY-6mU0g&s"
              alt="Guante Pro Grip 2025"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="fw-bold text-primary">Pro Grip 2025</h5>
              <p className="text-muted small">Guante profesional con látex alemán y ajuste ergonómico.</p>
            </div>
          </div>
        </div>

        {/* Guante 2 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card border-0 shadow-sm h-100 text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHciwUs8ICW5xRTZrQL2Hu9o3Fvk3gfSOBg&s"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="fw-bold text-primary">Elite Storm</h5>
              <p className="text-muted small">Diseño moderno con ventilación avanzada y máxima durabilidad.</p>
            </div>
          </div>
        </div>

        {/* Guante 3 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card border-0 shadow-sm h-100 text-center">
          <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDrot6NsHQTQqoZziUN4a23WE27deKTd4oA&s"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="fw-bold text-primary">Hybrid Flex</h5>
              <p className="text-muted small">Combinación perfecta entre comodidad y agarre de alto rendimiento.</p>
            </div>
          </div>
        </div>

        {/* Guante 4 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card border-0 shadow-sm h-100 text-center">
          <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qghjzABFl4CF9eVDznsokrWNGfed3lxigA&s"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="fw-bold text-primary">Aqua Control</h5>
              <p className="text-muted small">Ideal para climas húmedos, con excelente agarre bajo la lluvia.</p>
            </div>
          </div>
        </div>

        {/* Guante 5 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card border-0 shadow-sm h-100 text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30tinJFgr3TWuHPdSwcu0iLj4jd1ELqnOgg&s"
              alt="Guante Classic Pro"
              className="card-img-top"
              
            />
            <div className="card-body">
              <h5 className="fw-bold text-primary">Classic Pro</h5>
              <p className="text-muted small">Inspirado en los modelos tradicionales, con materiales de nueva generación.</p>
            </div>
          </div>
        </div>

        {/* Guante 6 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card border-0 shadow-sm h-100 text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFZgydiKsgZUR8ymdqVoZaTiDwcDKPyQKP_w&s"
              alt="Guante Sport"
              className="card-img-top"
             
            />
            <div className="card-body">
              <h5 className="fw-bold text-primary">Guante Sport</h5>
              <p className="text-muted small">Ligero, transpirable y con ajuste perfecto para máximo control.</p>
            </div>
          </div>
        </div>
        {/* Guante 6 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card border-0 shadow-sm h-100 text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9accKqlMZe9gBZBnXadAoVwtowKt6R1BU7w&s"
              alt="Guante Supreme Air"
              className="card-img-top"
             
            />
            <div className="card-body">
              <h5 className="fw-bold text-primary">Supreme Air</h5>
              <p className="text-muted small">Ligero, transpirable y con ajuste perfecto para máximo control.</p>
            </div>
          </div>
        </div>
        {/* Guante 6 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card border-0 shadow-sm h-100 text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Sg_QwRRKfsyE0YrJTEVohZWXwoUw0skzWg&s"
              alt="Guante Supreme Terra"
              className="card-img-top"
             
            />
            <div className="card-body">
              <h5 className="fw-bold text-primary">Supreme Terra</h5>
              <p className="text-muted small">Ligero, transpirable y con ajuste perfecto para máximo control.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA final */}
      <div className="text-center mt-5">
        <a href="/contacto" className="btn btn-primary px-4 py-2">
          Ver todos los modelos
        </a>
      </div>
    </div>
  );
}
