import { useState, useEffect } from 'react'
import img_soga from '../assets/soga.jpg'
import img_zapatos from '../assets/zapatos.jpg'
import img_calacunca from '../assets/calacunca.jpg'
import img_cientifico from '../assets/cientifico.jpg'
import img_monociclo from '../assets/monociclo.jpg'
import img_super from '../assets/super-alfalfini.jpg'
import './Shows.css'

function Shows() {
  const shows = [
    { id: 1, title: "SHOW EXPRESS", desc: "Diversión asegurada con juegos y risas.", img: img_soga,
      activities: [
        "Juegos de Competencia",
        "Bailoteo con canciones divertidas",
        "Monociclo 2.0",
        "Malabares imposibles",
        "Mágia purita"
      ]
     },
    { id: 2, title: "CIRCO EN ACCIÓN", desc: "Ilusiones y trucos que sorprenden a todos.", img: img_monociclo,
      activities: [
        "Divertijuegos y cantajuegos interactivos",
        "Rutinas Circences(1 personaje 'Cientifico Loco','Alfalfini Musucloso','Mago pelo de Mango')",
        "Malabares peligrudos con Rola Bola",
        "GloboFlexia",
        "Magia con el conejito Piñata",
        "Explosión de burbujas con Jojochita",
      ]
     },
    { id: 3, title: "Caritas Pintadas", desc: "Cuentos y personajes para los más pequeños.", img: img_cientifico, 
      activities: [
        "Caritas pintadas de diversos personajes para niños y niñas"
      ] },
    { id: 4, title: "Glitter Tatto", desc: "Cuentos y personajes para los más pequeños.", img: img_zapatos,
      activities: [
        "Tatuajes con Glitter",
        "Diversos diseños y colores, para niños y niñas"
      ] },
    { id: 5, title: "PEQUE BABY SHOWER", desc: "Cuentos y personajes para los más pequeños.", img: img_super, 
      activities: [
        "Juegos divertidos y coreografias interactivas",
        "Monociclo",
        "Malabares",
        "Magia especial 'El Secreto del Amor'",
        "Entrega de regalos"
      ]
    },
    { id: 6, title: "Cuenta Cuentos", desc: "Cuentos y personajes para los más pequeños.", img: img_calacunca,
      activities: [
        "Presentación animada con personajes",
        "Juegos interactivos y dinámicas grupales",
        "Rutinas de magia y burbujas gigantes",
        "Malabares y monociclo (según espacio)",
        "Maquillaje artístico o glitter tattoo",
        "Premios y sorpresas para los niños"
      ]
    },
  ];

  const [selectedShow, setSelectedShow] = useState(null);

  const openShowDetail = (show) => setSelectedShow(show);
  const closeShowDetail = () => setSelectedShow(null);
  useEffect(() => {
    document.body.classList.toggle('modal-open', !!selectedShow);
  }, [selectedShow]);

  return (
    <section className="shows" id="shows">
      <h2>Nuestros Shows</h2>
      <div className="shows-grid">
        {shows.map((show) => (
          <div key={show.id} className="card" onClick={() => openShowDetail(show)} >
            <img src={show.img} alt={show.title} />
            <h3>{show.title}</h3>
            <p>{show.desc}</p>
            <button className="btn" onClick={() => openShowDetail(show)}>Ver más</button>
          </div>
        ))}
      </div>
      {selectedShow && (
        <div className="show-detail">
          <div className="detail-content">
            <button className="close-btn" onClick={closeShowDetail}>✖</button>
            <img src={selectedShow.img} alt={selectedShow.title} />
            <h3>{selectedShow.title}</h3>
            <p>{selectedShow.desc}</p>
            <section className="activities">
              <h3>¿QUÉ INCLUYE ESTE SHOW?</h3>
              <ul>
                {selectedShow.activities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
            <section className="request-form">
              <h3>Solicita este show</h3>
              <form>
                <input type="text" name="nombre" placeholder="Tu nombre" required />
                <input type="email" name="correo" placeholder="Correo electrónico" required />
                <input type="text" name="evento" placeholder="Tipo de evento (cumpleaños, baby shower...)" required />
                <input type="date" name="fecha" required />
                <textarea name="mensaje" placeholder="Mensaje adicional o detalles del evento" rows="4"></textarea>
                <button type="submit" className="btn">Enviar solicitud</button>
              </form>
            </section>
            <section className="important-info">
            <h3>INFORMACIÓN IMPORTANTE</h3>
              <ul className="important-info-list">
                <li>Cada espectáculo esta a cargo de Alfalfa y Jojochita, incluye DJe implementos a usar dentro de show.</li>
                <li>El precio de los pasajes esta incluido, siempre y cuando el evento sea dentro del centro de Huancayo, alrededores tiene un costo adicional que varía dependiendo de la distancia.</li>
                <li>Asegurate que el espacio del local sea amplio, teniendo en cuenta la cantidad de invitados</li>
                <li>Todas las rutinas (malabares,monociclo,burbuja) estan sujetas al espacio y ambiente del local.</li>
                <li>Se recomienda citar a los invitados 1 hora a 1:30 horas antes del espectáculo</li>
                <li>Una vez realizado el contrato, no hay opcion a cambio de fecha y horario.</li>
                <li>Nuestra política establece claramente que no realizamos devolución de adelantos</li>
              </ul>
            </section>
          </div>
        </div>
      )}
    </section>
  );
}

export default Shows;