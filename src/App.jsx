import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/Particle'
import About from './components/About'
import Testimonials from './components/Testimonials'


const App = () => {
  return (
    <>
    
      <ParticleBackground/>
      <Navbar/>
      <Hero/>
     <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>  
    </>
  )
}

export default App
