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
    centerPadding: "0px",
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
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
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
        </div>
        <div className="members">
            <h1>Our Team Members</h1>
        </div>
      </div>

      <div className="team-wrapper">
        <Slider {...settings}>
          {Teamdata.map((item, index) => (
            <div className="slide-item" key={index}>
              <div className="team-card">
                <img src={item.img} alt={item.name} />
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

const Teamdata = [
  {
    name: "Manoj Khanal",
    role: "Frontend Developer & Shorts Video",
    img: "/TeamPhotos/manoj.jpeg",
    msg: "I am Manoj Khanal, a Frontend Developer, Shorts Editor, and Videographer at Nepathya Media Team. I create engaging web experiences, edit dynamic short videos",
  },
  {
    name: "Bardan Karki",
    role: "Frontend Dev, Shorts Video Editor & Photographer",
    img: "/TeamPhotos/bardan.jpeg",
    msg: "I am Bardan Karki, a Frontend Developer, Shorts Editor, and Videographer at Nepathya Media Team. I create engaging web experiences, edit dynamic short videos, and capture visuals that bring stories to life.",
  },
  {
    name: "Rosis Sharma",
    role: "Videography, Video Editor & Frontend Dev",
    img: "/TeamPhotos/rosis.jpeg",
    msg: "I specialize in creating visually compelling content through professional video editing and creative videography. My work focuses on transforming ideas into engaging visuals that communicate clearly and leave a lasting impact..",
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
