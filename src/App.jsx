import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Crousel from './components/Crousel'
import Android from './components/Android'
import Journey from './components/Journey'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Intro/>
      <Crousel/>
      <Skills/>
      <Android/>
      <Journey/>
      <Contact/>
      
    </>
  )
}

export default App