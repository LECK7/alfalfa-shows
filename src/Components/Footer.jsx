import { useState } from 'react'
import './Footer.css'

function Footer() {
    return (
      <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Alfalfa y Jojochita. Todos los derechos reservados.</p>
        <div className="socials">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.instagram.com/alfalfa.shows?utm_source=ig_web_button_share_sheet&igsh=MTMzbW5yOXNjb3kwaQ==" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@alfalfayjojochita" target="_blank" rel="noreferrer">TikTok</a>
          <a href="https://wa.me/51900000000" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
    )
  }
  
  export default Footer
