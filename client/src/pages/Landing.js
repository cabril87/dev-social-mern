import React from 'react'
import Contact from '../components/layout/Contact'
import Faq from '../components/layout/Faq'
import Features from '../components/layout/Features'
import Footer from '../components/layout/Footer'
import Hero from '../components/layout/Hero'
import MoreFeatures from '../components/layout/MoreFeatures'

const Landing = () => {
    return (
        <>
            <Hero />
            <Features />
            <MoreFeatures />
            <Faq />
            <Contact />
            <Footer />
        </>
    )
}

export default Landing
