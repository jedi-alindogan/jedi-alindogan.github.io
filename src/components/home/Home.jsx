import React from 'react'
import Header from '../header/Header'
import Nav from '../nav/Nav'
import About from '../about/About'
import Experience from '../experience/Experience'
import Outreach from '../outreach/Outreach'
import Projects from '../projects/Projects'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Outreach />
      <Contact />
      <Footer />
    </>
  )
}

export default Home