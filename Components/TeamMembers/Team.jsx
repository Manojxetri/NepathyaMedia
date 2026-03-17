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

// ... (imports remain the same)

const Team = () => {
  const settings = {
    centerMode: true,
    centerPadding: "0px", // Changed to 0 to prevent cutting off cards on small screens
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
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
          dots: true // dots are better for mobile UX
        }
      }
    ]
  };

  return (
    <div className="TeamCard">
      <div className="team-headings">
        <h4>Faces Behind The Lens</h4>
        <div className="team-line"></div>
        
        {/* Cleaned up the nested h1's here */}
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
                <img
                  src={item.img}
                  alt={item.name}
                  className="team-avatar"
                />
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

// ... (Teamdata and export remain the same)

const Teamdata = [
  {
    name: "Manoj Khanal",
    role: "Frontend Developer & Shorts Video Editor",
    img: "/TeamPhotos/manoj.jpg",
    msg: "I am Manoj Khanal, a passionate Frontend Developer and creative Shorts Video Editor at Nepathya Media Team. I focus on building responsive and visually engaging web interfaces that provide smooth user experiences. Alongside development, I enjoy crafting short-form video content that captures attention and communicates ideas effectively. My goal is to combine creativity and technology to tell powerful visual stories."
  },
  {
    name: "Bardan Karki",
    role: "Frontend Developer, Photographer & Video Editor",
    img: "/TeamPhotos/bardan.jpeg",
    msg: "I am Bardan Karki, working as a Frontend Developer and Photographer at Nepathya Media Team. I enjoy designing interactive websites while also capturing meaningful moments through photography and videography. My work focuses on blending creativity with technology to produce visually appealing digital experiences. I always aim to create content that connects with audiences and tells a story."
  },
  {
    name: "Rosis Sharma",
    role: "Videographer & Video Editor",
    img: "/TeamPhotos/rosis.jpeg",
    msg: "I am Rosis Sharma, a videographer and video editor passionate about visual storytelling. I specialize in filming and editing engaging videos that transform ideas into powerful visual narratives. From capturing events to producing creative content, I focus on delivering high-quality visuals that leave a lasting impact. My goal is to make every frame meaningful and memorable."
  },
  {
    name: "Dinesh Tandan",
    role: "Video Editor & Graphic Designer",
    img: "/TeamPhotos/dinesh.jpeg",
    msg: "I am Dinesh Tandan, a creative Video Editor and Graphic Designer at Nepathya Media Team. I specialize in transforming ideas into attractive visual content through editing, motion graphics, and design. My work focuses on creating impactful visuals that communicate messages clearly and effectively. I enjoy experimenting with creative styles to bring fresh and engaging designs."
  },
  {
    name: "Aryan Shrestha",
    role: "Full Stack Designer",
    img: "/TeamPhotos/aryan.jpeg",
    msg: "I am Aryan Shrestha, a Full Stack Designer passionate about creating meaningful digital experiences. I work on both design and development to craft visually appealing and functional projects. From UI design to interactive web experiences, I enjoy bringing creative ideas to life. My goal is to design experiences that are both beautiful and user-friendly."
  },
  {
    name: "Bebas Pandey",
    role: "Manager",
    img: "/TeamPhotos/bebas.jpeg",
    msg: "I am Bebas Pandey, the Manager of Nepathya Media Team. My role involves coordinating projects, managing team operations, and ensuring smooth execution of our media initiatives. I focus on supporting the team, encouraging creativity, and maintaining a strong collaborative environment. Together we work to deliver impactful media projects."
  }
];
export default Team;