import React from "react"
import Header from "./component/Head/Header"
import Home from "./component/Hero/Home"
import Projects from "./component/Projects/Projects"
import Resume from "./component/Resume/Resume"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer/Footer"
import "./App.css"
import Certificates from "./component/Certificates/Certificates"

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <Resume />
      <Certificates />
      <Contact />
      <Footer />
    </>
  )
}

export default App
