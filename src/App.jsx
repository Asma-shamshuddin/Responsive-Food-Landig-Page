import { useState } from 'react'
import { motion } from 'framer-motion'
import './index.css'
import Navber from './components/Navber.jsx'
import Hero from './components/Hero.jsx'
import Cards from './components/Cards.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { Route, Routes } from 'react-router-dom'





function App() {
   const [ cartCount, setCartCount] = useState(0);
   return (
    <>
    <Navber cartCount={cartCount} />
    <div id="home">
      <Hero setCartCount={setCartCount}  />
    </div>
    <div id="menu">
      <Cards setCartCount={setCartCount}/>
    </div>
    <div id="about">
      <About/>
    </div>
    <div id="contact">
      <Contact/>
    </div>
    <Footer/>
    </>
   );

  
}

export default App
