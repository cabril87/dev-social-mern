import React from 'react'
import './App.css'
import Faq from './components/layout/Faq'
import Features from './components/layout/Features'
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
    </>
  )
}

export default App

