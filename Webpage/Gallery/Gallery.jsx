import React from 'react'
import './Gallery.css'
import Footer from '../../Components/Footer/Footer'
import { useState } from 'react'

const GalleryPhotos = [
  { name: "media image", img: "/Gallery/img1.jpg" },
  { name: "media image", img: "/Gallery/img2.jpg" },
  { name: "media image", img: "/Gallery/img3.jpg" },
  { name: "media image", img: "/Gallery/img4.jpg" },
  { name: "media image", img: "/Gallery/img5.jpg" },
  { name: "media image", img: "/Gallery/img6.jpg" },
  { name: "media image", img: "/Gallery/img7.jpg" },
  { name: "media image", img: "/Gallery/img8.jpg" },
  { name: "media image", img: "/Gallery/img9.jpg" },
  { name: "media image", img: "/Gallery/img10.jpg" },
  { name: "media image", img: "/Gallery/img11.jpg" },
  { name: "media image", img: "/Gallery/img12.jpg" },
]

const Gallery = () => {

    const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="gallery">
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
