export default function Contact() {
  return (
    <div className="container mt-5">
      <h1 className="display-5 fw-bold text-center mb-4">Contáctanos</h1>
      <hr className="mb-5" />
      <form className="mx-auto" style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <label className="form-label">Nombre completo</label>
          <input type="text" className="form-control" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" placeholder="correo@ejemplo.com" />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea className="form-control" rows="4" placeholder="Escribe tu mensaje aquí"></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Enviar mensaje</button>
      </form>
    </div>
  );
}