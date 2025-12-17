import React from 'react'
import './HomeImage.css'

const HomeImage = ({src,alt}) => {
  return (
    <div className='HomeImage'>
      <div className="images">
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}

export default HomeImage
