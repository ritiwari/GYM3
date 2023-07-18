import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import Navbar from './components/Navabr'
import Services from './components/Services'

const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App