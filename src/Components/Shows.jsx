import { useState } from 'react'
import img_soga from '../assets/soga.jpg'
import img_zapatos from '../assets/zapatos.jpg'
import img_calacunca from '../assets/calacunca.jpg'
import img_cientifico from '../assets/cientifico.jpg'
import img_monociclo from '../assets/monociclo.jpg'
import img_super from '../assets/super-alfalfini.jpg'
import './Shows.css'

function Shows() {
  const shows = [
    { id: 1, title: "Shows Infantiles", desc: "Diversión asegurada con juegos y risas.", img: img_soga },
    { id: 2, title: "Baby Shower", desc: "Ilusiones y trucos que sorprenden a todos.", img: img_zapatos },
    { id: 3, title: "Caritas Pintadas", desc: "Cuentos y personajes para los más pequeños.", img: img_cientifico },
    { id: 4, title: "Glitter Tatto", desc: "Cuentos y personajes para los más pequeños.", img: img_monociclo },
    { id: 5, title: "Gincanas", desc: "Cuentos y personajes para los más pequeños.", img: img_super },
    { id: 6, title: "Cuenta Cuentos", desc: "Cuentos y personajes para los más pequeños.", img: img_calacunca},
  ];

  return (
    <section className="shows" id="shows">
      <h2>Nuestros Shows</h2>
      <div className="shows-grid">
        {shows.map((show) => (
          <div key={show.id} className="card">
            <img src={show.img} alt={show.title} />
            <h3>{show.title}</h3>
            <p>{show.desc}</p>
            <a href="#contact" className="btn">Ver más</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shows;