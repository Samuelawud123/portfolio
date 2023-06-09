import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow'>
        <div className='title_content d_flex'>
          <div className='title'>
            <h2>{props.title}</h2>
            <span>{props.company}</span><br></br>
            <span>{props.location}</span>
          </div>
        </div>
        <div>
            {props.year}
        </div>
        <hr />
        <p>{props.desc}</p>
      </div>
    </>
  )
}

export default Card
