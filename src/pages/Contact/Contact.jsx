import { useState } from "react"
import { Layout } from "../../components/Layout/Layout";
import "./Contact.css";

const CONTACT = () => {
  return (
    <Layout children="test">
      <form className="contacto-form">
        <label htmlFor="nombre">Name:</label>
        <input type="text" id="nombre" name="nombre" placeholder="Your name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your email" />

        <label htmlFor="mensaje">Message:</label>
        <textarea id="mensaje" name="mensaje" placeholder="Your message"></textarea>

        <button type="submit">Send</button>
      </form>
    </Layout>
  );
};

export {CONTACT};