export default function Aviso() {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-center text-primary mb-4">
          <i className="bi bi-shield-lock me-2"></i>Aviso de Privacidad
        </h1>
        <p className="text-muted">
          Protegemos tu información personal con responsabilidad, transparencia y compromiso ético.
        </p>
      </div>

      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body p-5">
          <p className="lead text-justify mb-4">
            En nuestra empresa, la protección de tus datos personales es una prioridad. La información que nos proporciones será tratada con confidencialidad, conforme a la{" "}
            <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong>.
          </p>

          <p className="text-justify mb-4">
            Los datos recabados se utilizarán únicamente para fines relacionados con la prestación de nuestros servicios, el cumplimiento de obligaciones legales y la mejora continua de nuestra atención.
          </p>

          <p className="text-justify mb-4">
            Nos comprometemos a no compartir, vender ni divulgar tu información personal a terceros sin tu consentimiento previo y expreso. Además, puedes ejercer tus derechos de acceso, rectificación, cancelación u oposición (ARCO) en cualquier momento.
          </p>

          <p className="text-justify mb-4">
            Para conocer todos los detalles sobre el uso, tratamiento y resguardo de tus datos personales, te invitamos a revisar nuestro aviso completo o ponerte en contacto con nosotros.
          </p>

          <div className="text-center mt-4">
            <a href="/contacto" className="btn btn-primary px-4 py-2 me-3">
              <i className="bi bi-envelope-fill me-2"></i>Contáctanos
            </a>
            <a
              href="/docs/aviso_privacidad.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary px-4 py-2"
            >
              <i className="bi bi-file-earmark-text me-2"></i>Ver Aviso Completo (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
