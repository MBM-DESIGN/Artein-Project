import React, { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import "./Contact.css";

const CONTACT = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mostrarPopup, setMostrarPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMostrarPopup(true);
  };

  const cerrarPopup = () => {
    setMostrarPopup(false);
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <Layout children="test">
      <form className="contacto-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Name:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Your name"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="mensaje">Message:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Your message"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        ></textarea>

        <button type="submit">Send</button>
      </form>

      {mostrarPopup && (
        <div className="popup">
          <div className="popup-contenido">
            <h2>Submitted Data</h2>
            <p>Name: {nombre}</p>
            <p>Email: {email}</p>
            <p>Message: {mensaje}</p>
            <button onClick={cerrarPopup}>Close</button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export { CONTACT };