import { useEffect, useRef, useState } from 'react';
import './Personaje.css';

function Jojochita() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="personaje-section" id="jojochita">
      <div className="personaje-container reverse">
        <div className="personaje-info">
          <h2>Jojochita</h2>
          <p>
            Jojochita es la estrella burbujeante del show. Con ternura, juegos interactivos y burbujas gigantes, encanta a todos y convierte cada presentación en un cuento mágico.
          </p>
        </div>
        <img
          ref={ref}
          src="/ojochita.png"
          alt="Jojochita"
          className={`personaje-img ${visible ? 'slide-in-right' : 'slide-out-right'}`}
        />
      </div>
    </section>
  );
}

export default Jojochita;
