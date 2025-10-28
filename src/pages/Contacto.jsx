import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",   // reemplaza con tu Service ID
        "YOUR_TEMPLATE_ID",  // reemplaza con tu Template ID
        form.current,
        "YOUR_USER_ID"       // reemplaza con tu User ID
      )
      .then(
        () => {
          alert("Mensaje enviado correctamente a tu Hotmail!");
        },
        () => {
          alert("Error al enviar el mensaje, intenta de nuevo");
        }
      );

    e.target.reset(); // limpia el formulario
  };

  return (
    <div className="container mt-5">
      <h1 className="display-5 fw-bold text-center mb-4">Contáctanos</h1>
      <hr className="mb-5" />
      <form ref={form} onSubmit={sendEmail} className="mx-auto" style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <label className="form-label">Nombre completo</label>
          <input type="text" name="user_name" className="form-control" placeholder="Tu nombre" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input type="email" name="user_email" className="form-control" placeholder="correo@ejemplo.com" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea name="message" className="form-control" rows="4" placeholder="Escribe tu mensaje aquí" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Enviar mensaje</button>
      </form>
    </div>
  );
}
