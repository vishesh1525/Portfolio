import React from 'react'
import './index.css'

import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Header from './components/Header/Header'
import Experince from './components/Experince/Experince'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
     <Header/>
     <Nav/>
     <About/>
     <Experince/>
     <Services/>
     <Portfolio/>
     <Contact/>
     <Footer/>
     

    </>
  )
}

export default App

