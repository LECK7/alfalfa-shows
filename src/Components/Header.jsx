import { useState } from 'react'
import img_logo from '../assets/alfalfa-jojochita.jpg'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section id="hero">
      <header className="header">

        <div className="logo">
          <a href="#hero"><img src={img_logo} alt="alfalfa y jojochita" /></a>
        </div>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Gorditas:wght@400;700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Meow+Script&display=swap');
        </style>

        <div className="titulo-container">
          <a className='titulo1' href="#alfalfa">Alfalfa</a>
          <a className='titulo2' href="#hero"> y </a>
          <a className='titulo3' href="#jojochita">Jojochita</a>
        </div>

        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul>
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#shows">Shows</a></li>
            <li><a href="#about">Sobre Nosotros</a></li>
          </ul>
        </nav>

        <div className='cta'>
          <a href="#contact" className='btn'>Contacto</a>
        </div>
      </header>
    </section>
  )
}

export default Header