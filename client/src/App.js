import React from 'react'
import './App.css'
import Contact from './components/layout/Contact'
import Faq from './components/layout/Faq'
import Features from './components/layout/Features'
import Footer from './components/layout/Footer'
import Hero from './components/layout/Hero'
import MoreFeatures from './components/layout/MoreFeatures'
import Navbar from './components/layout/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <MoreFeatures />
      <Faq />
      <Contact />
      {/* <Footer /> */}
    </>
  )
}

export default App

