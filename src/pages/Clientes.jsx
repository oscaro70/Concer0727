export default function Clientes() {
  return (
    <div className="container my-5">
      {/* Título principal */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-center text-primary mb-4">Clubes y Aliados Internacionales</h1>
        <p className="text-muted">
          Nos enorgullece equipar y colaborar con equipos, marcas y distribuidores que confían en la calidad de nuestros guantes de portero alrededor del mundo.
        </p>
      </div>


{/* Sección de clientes */}
<div className="table-responsive">
  <table className="table  table-borderless align-middle text-center shadow-sm w-100">
    <tbody>
      {/* Fila 1: imágenes */}
      <tr>
        <td>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSOQiFMvsuKoNpBGVtMRfL6l4EhvFr8TBUcA&s"
            alt="Real Madrid CF"
            className="img-fluid"
            style={{ width: "100%", maxWidth: "150px", height: "auto" }}
          />
        </td>
        <td>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdEU2F2re91lNPqy5R1LCohQWm2RQb7wihag&s"
            alt="FC Barcelona"
            className="img-fluid"
            style={{ width: "100%", maxWidth: "150px", height: "auto" }}
          />
        </td>
        <td>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTICQ6Aya0MY_lp-q9XqxuiIKIgmjErChKobw&s"
            alt="Club América"
            className="img-fluid"
            style={{ width: "100%", maxWidth: "150px", height: "auto" }}
          />
        </td>
        <td>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjq2PpRUypQ47GFYZe1PK4QL6GW91RIw5_0A&s"
            alt="Manchester United"
            className="img-fluid"
            style={{ width: "100%", maxWidth: "150px", height: "auto" }}
          />
        </td>
      </tr>

      {/* Fila 2: títulos */}
      <tr>
        <td className="fw-semibold">Real Madrid CF</td>
        <td className="fw-semibold">FC Barcelona</td>
        <td className="fw-semibold">Club América</td>
        <td className="fw-semibold">Manchester United</td>
      </tr>
    </tbody>
  </table>
</div>




      

      {/* Sección de aliados */}
      <div className="mt-5 text-center">
        <h2 className="fw-bold text-primary mb-4">Nuestros Aliados Estratégicos</h2>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-lg p-4 h-100">
              <i className="bi bi-people text-primary fs-1 mb-3"></i>
              <h5 className="fw-bold">Marcas Deportivas</h5>
              <p className="text-muted">
                Colaboramos con marcas de prestigio como Adidas, Nike y Puma para desarrollar guantes
                con la mejor tecnología de agarre, ventilación y confort.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-lg p-4 h-100">
              <i className="bi bi-globe-americas text-primary fs-1 mb-3"></i>
              <h5 className="fw-bold">Distribución Global</h5>
              <p className="text-muted">
                Nuestros aliados logísticos y comerciales nos permiten entregar guantes en más de 40 países
                con tiempos de envío eficientes y soporte personalizado.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA final */}
      <div className="text-center mt-5">
        <a href="/contacto" className="btn btn-primary px-4 py-2">
          ¿Quieres ser nuestro distribuidor?
        </a>
      </div>
    </div>
  );
}
