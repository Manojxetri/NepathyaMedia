import React from "react";
import Slider from "react-slick";
import "./Team.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Icon } from "@iconify/react";

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>
    <Icon icon="mdi:chevron-left" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    <Icon icon="mdi:chevron-right" />
  </div>
);

const Team = () => {
  const settings = {
    centerMode: true,
    centerPadding: "60px",          // reduced for better mobile feel
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    dots: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "40px",
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,        // ← disable center mode on mobile (prevents overflow)
          centerPadding: "0px",
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="TeamCard">
      <div className="team-headings">
        <h4>Faces Behind The Lens</h4>
        <div className="team-line"></div>
        <div className="TeamMembers">
          <h1>Our Team Members</h1>
          <div className="members">
            <h1>Our Team Members</h1>
          </div>
        </div>
      </div>

      <div className="team-wrapper">
        <Slider {...settings}>
          {Teamdata.map((item, index) => (
            <div className="slide-item" key={index}>
              <div className="team-card">
                <img src={item.img} alt={item.name} className="team-avatar" />
                <h3>{item.name}</h3>
                <div className="role">
                  <h5>{item.role}</h5>
                </div>
                <p>{item.msg}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Teamdata remains the same...

const Teamdata = [
  {
    name: "Manoj Khanal",
    role: "Frontend Developer & Shorts Video",
    img: "/TeamPhotos/manoj.jpg",
    msg: "I am Manoj Khanal, a Frontend Developer, Shorts Editor, and Videographer at Nepathya Media Team. I specialize in creating engaging and user-friendly web experiences, along with editing dynamic and visually compelling short videos that effectively communicate ideas and capture audience attention.",
  },
  {
    name: "Bardan Karki",
    role: "Frontend Dev, Shorts Video Editor & Photographer",
    img: "/TeamPhotos/bardan.jpeg",
    msg: "I am Bardan Karki, a Frontend Developer, Shorts Editor, and Videographer at Nepathya Media Team. I specialize in creating engaging and user-friendly web experiences, editing dynamic short videos, and capturing impactful visuals that bring stories to life and connect with audiences.",
  },
  {
    name: "Rosis Sharma",
    role: "Videography, Video Editor & Frontend Dev",
    img: "/TeamPhotos/rosis.jpeg",
    msg:"I am Rosis Sharma, a creative professional specializing in video editing and videography. I focus on producing visually compelling content that transforms ideas into engaging visuals, communicates clearly, and leaves a lasting impact on audiences.",
  },
  {
    name: "Dinesh Tandan",
    role: "Video Editor & Graphic Designer",
    img: "/TeamPhotos/dinesh.jpeg",
    msg: "I specialize in creating visually compelling content through professional video editing and creative graphic design. My work focuses on transforming ideas into engaging visuals that communicate clearly and leave a lasting impact..",
  },
  {
    name: "Aryan Shrestha",
    role: "Full Stack Designer",
    img: "/TeamPhotos/aryan.jpeg",
    msg: "I am a Full Stack Designer and Visual Creator at Nepathya Media Team, passionate about crafting engaging visuals that tell a story. From designing creative digital experiences to capturing moments, I bring ideas to life with creativity and precision.",
  },
  {
    name: "Bebas Pandey",
    role: "Manager",
    img: "/TeamPhotos/bebas.jpeg",
    msg: "I am Bebas Pandey, the Manager at Nepathya Media Team. I lead operations, coordinate projects, and ensure that every initiative is executed smoothly while supporting the team to achieve excellence.",
  },
];

export default Team;
// export default Team;
