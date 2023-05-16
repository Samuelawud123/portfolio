import React from "react"
import "./Home.css"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h1>
              Hi, I’m <span>Samuel Awud</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Frontend Engineer.", " Web Developer. ", " React Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p> I specializes in React front-end development, with extensive knowledge of JavaScript, HTML5, CSS3, and related technologies. Adept at creating intuitive and dynamic user interfaces that provide seamless user experiences</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
