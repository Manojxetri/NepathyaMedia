import React from 'react'
import "./Card.css" 

const Card = ({heading,msg}) => {
  return (
    <div className='card-container'>
        <h1 >{heading}</h1>
        <p>{msg}</p>
    </div>
  )
}

export default Card