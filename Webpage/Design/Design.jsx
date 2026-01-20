import React, { useState } from 'react'
import './Design.css'
import Footer from '../../Components/Footer/Footer'

const Designs = [
  { name: "media design", img: "/Design/img1.jpg" },
  { name: "media design", img: "/Design/img2.jpg" },
  { name: "media design", img: "/Design/img3.jpg" },
  { name: "media design", img: "/Design/img4.jpg" },
  { name: "media design", img: "/Design/img5.jpg" },
  { name: "media design", img: "/Design/img6.jpg" },
  { name: "media design", img: "/Design/img7.jpg" },
  { name: "media design", img: "/Design/img8.jpg" },
  { name: "media design", img: "/Design/img9.jpg" },
  { name: "media design", img: "/Design/img10.jpg" },
  { name: "media design", img: "/Design/img11.jpg" },
  { name: "media design", img: "/Design/img12.jpg" },
]

const Design = () => {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="design">
        <div className="text-center mb-4 design-heading">
            <h1 className="podcast-title">Our Creative Designs</h1>
          </div> 

        <div className="col-lg-12 text-center design-text">
              <p className="podcast-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam, dolorem, deserunt quibusdam voluptates quas optio,
                repellat hic eaque sed eveniet molestias veritatis! Tempore
                accusamus quasi sequi delectus recusandae a porro.
              </p>
            </div>
      
      <div className="design-layout">
        {Designs.map((photo, index) => (
          <div className="design-item" key={index}>
            <img
              src={photo.img}
              alt={photo.name}
              onClick={() => setSelectedImg(photo.img)}
            />
          </div>
        ))}
      </div>

    
      {selectedImg && (
        <div className="image-modal" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="Large view" />
        </div>
      )}

      <Footer />
    </div>
  )
}

export default Design
