import React from "react"
import "./Certificates.css"
import data from "./Certificates-Api"
import Card from "./Card"

const Certificates = () => {
  return (
    <>
      <section className='certificates top' id='certificates'>
        <div className='container'>
          <div className='heading'>
            <h1>Certificates</h1>
          </div>

          <div className='content grid'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Certificates
