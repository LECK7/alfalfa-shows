import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Shows from './Components/Shows'
import About from './Components/About'
import WhatsappButton from './Components/WhatsappButton'
import Alfalfa from './Components/Alfalfa'
import Jojochita from './Components/Jojochita'

function App() {
  return (
    <>
    <Header />
    <Hero />
    <Alfalfa />
    <Jojochita />
    <Shows />
    <About />
    <Contact />
    <Footer />
    <WhatsappButton />
    </>
  )
}

export default App
