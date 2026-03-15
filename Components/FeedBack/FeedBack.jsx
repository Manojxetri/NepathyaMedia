import React from "react";
import "./FeedBack.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Keep your PrevArrow & NextArrow definitions if you want — we just won't use them

const FeedBack = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // ← no arrows
    autoplay: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="feedback-section">
      <div className="feedback-container">
        <div className="feedback-left">
          <h1>
            Feedback About Their <span>Experience With Us</span>
          </h1>
          <div className="feedback-line"></div>
          <p className="feedback-text">
            Read testimonials from our satisfied clients. See how our media and
            creative services have made a difference.
          </p>
        </div>

        <div className="feedback-slider">
          <Slider {...settings}>
            {FeedBackData.map((item, index) => (
              <div className="feedback-slide" key={index}>
                <div className="feedback-card">
                  <div className="card-header">
                    <img src={item.img} alt={item.name} className="avatar" />
                    <div className="author-info">
                      <h3>{item.name}</h3>
                      <p className="role">{item.role}</p>
                      <div className="stars">{item.stars}</div>
                    </div>
                  </div>
                  <p className="msg">{item.msg}</p>
                  <div className="quotation">
                    <img src="/FeedbackPhotos/Quotation.png" alt="quote" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;

const FeedBackData = [
  {
    img: "/FeedbackPhotos/PES Logo.png",
    name: "Paschimanchal English School",
    role: "Siddhartha Nagar Municipality - 6, Bhairahawa",
    stars: "★★★★★",
    msg: "We appreciate the Nepathya Media Team for their creative work. Their coverage of every event at Paschimanchal English School was impressive, highlighting all the special moments beautifully.",
  },
  {
    img: "/FeedbackPhotos/TCDC.png",
    name: "Tilottama Cricket Development Commitie",
    role: "Tilottama,Butwal",
    stars: "★★★★★",
    msg: "We sincerely appreciate the Nepathya Media Team. The live broadcast of Tilottama Cricket League (TCL) Season 1 was professional, and the photos showcased the excitement and energy of the tournament perfectly.",
  },
  {
    img: "/FeedbackPhotos/hammerball.jpeg",
    name: "Hammer Ball Association Of India",
    role: "Lucknow,Uttar Pardesh",
    stars: "★★★★★",
    msg: "We truly appreciate the Nepathya Media Team. The live broadcast of the First International Hammer Ball Tournament was well executed, and the images highlighted the intensity and excitement of the event.",
  },
   {
    img: "/FeedbackPhotos/Jharana.jpeg",
    name: "Jharana Sports Club",
    role: "Kunjalapur,Tilottama",
    stars: "★★★★★",
    msg: "We appreciate the Nepathya Media Team. The live streaming of our football match was engaging and presented all the thrilling moments of the game to viewers.",
  },
];
