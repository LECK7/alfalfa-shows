import { useState } from 'react'
import img_hero from '../assets/alfalfasinfondo.png'
import './Hero.css'

function Footer() {
    return (
      <section className="hero">
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Gorditas&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Meow+Script&family=Romanesco&display=swap');
        </style>
        <div className="hero-content">
          <h1>Creando recuerdos para siempre.</h1>
        </div>
        <div className="hero-image">
          <img src={img_hero} alt="alfalfa y jojochita" />
        </div>
      </section>
    )
  }

  export default Footer
