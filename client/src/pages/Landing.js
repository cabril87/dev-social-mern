import React from 'react'
import Contact from '../components/layout/Contact'
import Faq from '../components/layout/Faq'
import Features from '../components/layout/Features'
import Footer from '../components/layout/Footer'
import Hero from '../components/layout/Hero'
import MoreFeatures from '../components/layout/MoreFeatures'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'

const Landing = ({ isAuthenticated }) => {
    if(isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

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

Landing.propTypes = {
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated, 
})

export default connect(mapStateToProps)(Landing)
