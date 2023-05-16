import React, { useState } from "react";
import "./header.css";
import logo from "../pic/logo.png";
import {RiMenu3Line, RiCloseLin, RiCloseLine} from 'react-icons/ri'

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });
  // Toggle Menu
  const [Mobile, setMobile] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <img className="logo_img" src={logo} alt="" />
          </div>

          <div className="navlink">
            <ul className={`link f_flex uppercase ${Mobile ? "nav-links-mobile" : ""}`} onClick={() => setMobile(false)}>
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#Projects">Projects</a>
              </li>
              <li>
                <a href="#resume">resume</a>
              </li>
              <li>
                <a href="#certificates">Certifications</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <button className="home-btn">Download Resume</button>
              </li>
            </ul>
          </div>
          <div className='navbar_menu'>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className="fas fa-times close home-btn"></i> : <i className="fas fa-bars open"></i>}
            </button>
           { toggleMenu ? 
              <RiCloseLine color='#000000' size={40} onClick={()=> setToggleMenu(false)}/>
             : 
              <RiMenu3Line color='#000000' size={40} onClick={()=> setToggleMenu(true)}/>
}

            {toggleMenu && (
               <div className='navbar_menu_container scale_up_center' >
                <div className='navbar_menu_container_links'>
                    <p><a href="#home">Home</a></p>
                    <p><a href="#Projects">Projects</a></p>
                    <p><a href="#resume">Resume</a></p>
                    <p><a href="#certificates">Certifications</a></p>
                    <p><a href="#contact">Contact</a></p>
                </div>
                </div>
            )}
        
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;