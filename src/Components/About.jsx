import './About.css'
import img_about from '../assets/about.jpg'

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image" id="about">
          <img src={img_about} alt="Sobre Nosotros" />
        </div>
        <div className="about-content">
          <h2>Sobre Nosotros</h2>
          <p>
            Somos un equipo apasionado por llevar alegría y diversión a cada evento. 
            Nuestro objetivo es crear momentos inolvidables con shows dinámicos, 
            actividades llenas de energía y entretenimiento pensado para todas las edades.
          </p>
          <p>
            Con creatividad, profesionalismo y mucho entusiasmo, hacemos que 
            cada celebración sea única y especial.
          </p>
          <a href="#contact" className="btn">Contáctanos</a>
        </div>
      </div>
    </section>
  )
}

export default About