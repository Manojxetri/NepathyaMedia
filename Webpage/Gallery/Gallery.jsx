import React from 'react'
import './Gallery.css'
import Footer from '../../Components/Footer/Footer'
import { useState } from 'react'

const GalleryPhotos = [
  { name: "media image", img: "/Gallery/img1.jpeg" },
  { name: "media image", img: "/Gallery/img2.jpeg" },
  { name: "media image", img: "/Gallery/img3.jpeg" },
  { name: "media image", img: "/Gallery/img4.jpeg" },
  { name: "media image", img: "/Gallery/img5.jpeg" },
  { name: "media image", img: "/Gallery/img6.jpeg" },
  { name: "media image", img: "/Gallery/img7.jpeg" },
  { name: "media image", img: "/Gallery/img8.jpeg" },
  { name: "media image", img: "/Gallery/img9.jpeg" },
  { name: "media image", img: "/Gallery/img10.jpg" },
  { name: "media image", img: "/Gallery/img11.jpg" },
  { name: "media image", img: "/Gallery/img12.jpg" },
  { name: "media image", img: "/Gallery/img13.jpg" },
  { name: "media image", img: "/Gallery/img14.jpg" },
  { name: "media image", img: "/Gallery/img15.jpg" },
]

const Gallery = () => {

    const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="gallery">
       <div className="text-center mb-4 design-heading">
            <h1 className="podcast-title">Our Gallery</h1>
          </div> 

        <div className="col-lg-12 text-center design-text">
              <p className="podcast-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam, dolorem, deserunt quibusdam voluptates quas optio,
                repellat hic eaque sed eveniet molestias veritatis! Tempore
                accusamus quasi sequi delectus recusandae a porro.
              </p>
            </div>
    <div className="container text-center">
  <div className="row">
    {GalleryPhotos.map((photo, index) => (
      <div className="col-md-4 mb-4" key={index}>
        <img
          src={photo.img}
          alt={photo.name}
          className="img-fluid"
          onClick={() => setSelectedImg(photo.img)}

        />
      </div>
    ))}
  </div>
</div>

  {selectedImg && (
        <div className="image-modal" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="Large view" />
        </div>
      )}


      <div className="gallery-footer">
        <Footer />
      </div>
    </div>
  )
}

export default Gallery
