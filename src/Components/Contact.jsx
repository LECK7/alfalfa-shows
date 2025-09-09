import { useState } from 'react'
import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contáctanos</h2>
        <p>
          ¿Tienes un evento especial en mente? Escríbenos y 
          haremos que sea inolvidable ✨
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <textarea placeholder="Escribe tu mensaje..." required></textarea>
          <button type="submit" className="btn">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact