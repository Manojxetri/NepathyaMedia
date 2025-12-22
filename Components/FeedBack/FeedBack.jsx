import React from "react";
import "./FeedBack.css";
import { Icon } from "@iconify/react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = ({ onClick }) => (
  <div className="arrow left-arrow" onClick={onClick}>
    <Icon className="icon-left icon" icon="solar:arrow-left-outline" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="arrow right-arrow" onClick={onClick}>
    <Icon className="icon-right icon" icon="mingcute:arrow-right-line" />
  </div>
);

const FeedBack = () => {
  const settings = {
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 1,
    infinite: true,
    speed: 10,
    dots: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="feedback">
      <div className="feedback-left">
        <h1>
          Feedback About Their <span>Experience With Us</span>
            </h1>

        <div className="feedback-line"></div>

        <p className="feedback-text">
          Read testimonials from our satisfied clients. See how our media and
          creative services have made a difference.
        </p>

        {/* <div className="arrow-wrapper">
          <PrevArrow />
          <NextArrow />
        </div> */}
      </div>

      <div className="feedback-slider">
        <Slider {...settings}>
          {FeedBackData.map((item, index) => (
            <div className="feedback-slide" key={index}>
              <div className="feedback-card">
                <img src={item.img} alt={item.name} />

                <div className="feedback-content">
                  <h3>{item.name}</h3>
                  <p className="role">{item.role}</p>
                  <div className="stars">{item.stars}</div>
                  <p className="msg">{item.msg}</p>
                </div>

                <div className="quotation">
                  <img
                    src="/FeedbackPhotos/Quotation.png"
                    alt="quotation"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeedBack;

const FeedBackData = [
  {
    img: "/FeedbackPhotos/sanjeevsir.png",
    name: "Sanjeev Bhandari",
    role: "Principal of Nepathya College",
    stars: "★★★★★",
    msg:
      "The Media Team has shown excellent dedication and creativity in covering events and maintaining the college’s digital presence.",
  },
  {
    img: "/FeedbackPhotos/sanjeevsir.png",
    name: "Shiva Bhattari",
    role: "Principal of Nepathya College",
    stars: "★★★★★",
    msg:
      "Their professionalism and creative vision helped strengthen our institutional brand and outreach.",
  },
  {
    img: "/FeedbackPhotos/sanjeevsir.png",
    name: "Sanjeev Bhandari",
    role: "Principal of Nepathya College",
    stars: "★★★★★",
    msg:
      "Highly impressed with the consistency, quality, and dedication of the media team.",
  },
];
