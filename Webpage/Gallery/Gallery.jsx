import React from "react";
import "./Gallery.css";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";

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
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="gallery">
      
      <div className="container text-center">
        <div className="row">
          <div className="text-center mb-4 design-heading">
        <h1 className="podcast-title gallery-title">Our Gallery</h1>
      </div>

      <div className="col-lg-12 text-center design-text">
        <p className="podcast-text gallery-text">
          Our gallery captures the moments, creativity, and teamwork of the
          Nepathya Media Team. Each photo reflects our journey, events, and the
          memories we create while working together.
        </p>
      </div>
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
  );
};

export default Gallery;
