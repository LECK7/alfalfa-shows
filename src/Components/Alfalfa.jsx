import { useEffect, useRef, useState } from 'react';
import './Personaje.css';
import imgAlfalfa from '../assets/alfalfa.png';

function Alfalfa() {
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
    <section className="personaje-section" id="alfalfa">
      <div className="personaje-container">
        <img
          ref={ref}
          src={imgAlfalfa}
          alt="Alfalfa"
          className={`personaje-img ${visible ? 'slide-in-left' : 'slide-out-left'}`}
        />
        <div className="personaje-info">
          <h2>Alfalfa</h2>
          <p>
            Alfalfa es el personaje musculoso y carismático que transforma cada evento en una experiencia inolvidable. Con rutinas cómicas de fuerza y magia, hace reír a grandes y chicos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Alfalfa;
