import React from "react"
import logo from "../pic/logo.png"
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img className = "logo_img" src={logo} alt='' />
          </div>
          <p>© 2021. All rights reserved by Samuel Awud.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
