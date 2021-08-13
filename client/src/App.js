import React from 'react'
import './App.css'

import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

const App = () => {
  return (
    <Router>
      <>
      <Navbar />
      <Route exact path="/" component={Landing} />
      
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
     
      </>
    </Router>

  )
}

export default App

