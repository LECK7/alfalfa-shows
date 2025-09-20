import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const phoneNumber = '+51938164111'
    const text = `*Hola!* 👋\n\n` +
               `Soy *${name}* y te escribo desde el formulario de contacto.\n` +
               `📧 Mi correo es: ${email}\n\n` +
               `📝 Mensaje:\n${message}\n\n` +
               `✨ ¡Espero tu respuesta!`

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contáctanos</h2>
        <p>
          ¿Tienes un evento especial en mente? Escríbenos y 
          haremos que sea inolvidable ✨
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Escribe tu mensaje..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="btn">Enviar por WhatsApp</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
