export default function Contacto() {
  return (
    <div className="container mt-5">
      <h1 className="display-5 fw-bold text-center text-primary mb-4">Contáctanos</h1>
      <hr className="mb-5" />
      <p className="lead text-center mb-5">
        ¿Tienes dudas sobre nuestros guantes, envíos internacionales o deseas ser distribuidor oficial?
        Escríbenos y un asesor de <strong>Global Keeper</strong> se pondrá en contacto contigo.
      </p>

      <form
        className="mx-auto"
        style={{ maxWidth: "600px" }}
        action="mailto:oscar_o_a@hotmail.com"
        method="post"
        encType="text/plain"
      >
        <div className="mb-3">
          <label className="form-label">Nombre completo</label>
          <input
            type="text"
            name="Nombre"
            className="form-control"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            name="Correo"
            className="form-control"
            placeholder="correo@ejemplo.com"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">País</label>
          <input
            type="text"
            name="País"
            className="form-control"
            placeholder="Ejemplo: México, España, Argentina..."
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            name="Mensaje"
            className="form-control"
            rows="4"
            placeholder="Cuéntanos en qué podemos ayudarte"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Enviar mensaje
        </button>
      </form>

      <div className="text-center mt-5">
        <p className="text-muted">
          También puedes escribirnos directamente a{" "}
          <a href="mailto:oscar_o_a@hotmail.com" className="text-decoration-none">
            oscar_o_a@hotmail.com
          </a>
        </p>
        <p className="text-muted">
          Síguenos en redes sociales para conocer nuestras últimas colecciones.
        </p>
        <div>
          <a href="#" className="me-3 text-primary fs-4">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="me-3 text-danger fs-4">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="text-info fs-4">
            <i className="bi bi-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
