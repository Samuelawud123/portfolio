import React from "react"
import "./Projects.css"
import Card from "./Card"
import Projects_data from "./Projects_data"

const Projects = () => {
  return (
    <>
      <section className='Projects top' id='Projects'>
        <div className='container'>
          <div className='heading text-center '>
            <h1>My Projects</h1>
          </div>

          <div className='content grid'>
            {Projects_data.map((value, index) => {
              return <Card key={index} image={value.image} disc={value.disc} title={value.title} />
            })}

            {/*<div className='box btn_shadow '>
              <div className='img'>F
                  <img src='https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Development</span>
                  <label>
                    <i className='far fa-heart'></i> 360
                  </label>
              </div>
              <div className='title'>
                  <h2>Mobile app landing design & Services</h2>
                <a href='' className='arrow'>
                  <i class='fas fa-arrow-right'></i>
                </a>
              </div>
            </div>*/}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
