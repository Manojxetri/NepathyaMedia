import React from "react";
import "./EventHighlights.css";
import EventCard from "./EventCard";
import { Icon } from "@iconify/react";
import Slider from "react-slick";

const EventHighlights = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,   // ✅ ONLY ONE CARD
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
          adaptiveHeight: true
        }
      }
    ]
  };

  const events = [
    {
      icon: <Icon icon="mdi:cricket" />,
      heading: "1st International Hammer Ball",
      msg: "We covered the competition in Gorakhpur with live broadcasting and photography.",
      photo: "/images/EventPhotos/span6.jpg"
    },
    {
      icon: <Icon icon="jam:backward" />,
      heading: "Pabson Dance Competition",
      msg: "Captured performances, energy and creativity.",
      photo: "/images/EventPhotos/span4.png"
    },
    {
      icon: <Icon icon="mdi:cricket" />,
      heading: "Tilottama Cricket League",
      msg: "Live streamed the full league and moments.",
      photo: "/images/EventPhotos/span5.jpg"
    },
    {
      icon: <Icon icon="solar:podcast-bold" />,
      heading: "Our Podcast",
      msg: "Discussion on startups and innovation.",
      photo: "/images/EventPhotos/span.png"
    },
    {
      icon: <Icon icon="cib:hackster" />,
      heading: "Nepathon",
      msg: "Supported innovation with media coverage.",
      photo: "/images/EventPhotos/span2.png"
    },
    {
      icon: <Icon icon="jam:calendar" />,
      heading: "Annual Function",
      msg: "Captured performances and celebrations.",
      photo: "/images/EventPhotos/span3.png"
    }
  ];

  return (
    <div className="event-section">

      <h1 className="eventText">
        Our <span className="eventColor">Event Highlights</span>
      </h1>

      <div className="eventLine"></div>

      <div className="event-container">

        <Slider {...settings}>
          {events.map((item, i) => (
            <div className="slide-wrap" key={i}>
              <EventCard {...item} />
            </div>
          ))}
        </Slider>

      </div>
    </div>
  );
};

export default EventHighlights;