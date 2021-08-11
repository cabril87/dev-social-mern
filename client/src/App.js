import React from 'react'
import './App.css'
import Features from './components/layout/Features'
import Hero from './components/layout/Hero'
import Navbar from './components/layout/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
    </>
  )
}

export default App

