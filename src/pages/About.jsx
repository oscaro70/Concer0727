export default function About() {
  return (
    <div className="container mt-5">
      <h1 className="display-5 fw-bold text-center text-primary mb-4">Sobre Nosotros</h1>
      <hr className="mb-5" />
      <p className="lead text-center">
En <strong>CACU Store</strong> somos una empresa internacional especializada en la venta de guantes de portero de alta calidad, comprometida con la innovación, el rendimiento y la satisfacción de nuestros clientes en todo el mundo.
</p>
      <div className="row align-items-center mt-4">
        <div className="col-md-6">
        <iframe width="550" height="360" src="https://www.youtube.com/embed/26bIlfviRkA" title="Cómo se fabrica un guante de portero de fútbol" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="col-md-6">
          <p>
            Nuestro equipo está formado por profesionales con experiencia en desarrollo, diseño y gestión empresarial.
          </p>
          <p>
            Trabajamos con pasión para transformar ideas en resultados tangibles y duraderos.
          </p>
        </div>
      </div>
    </div>
  );
}

  