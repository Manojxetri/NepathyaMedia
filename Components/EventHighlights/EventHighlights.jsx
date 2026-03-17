import React from "react";
import "./EventHighlights.css";
import EventCard from "./EventCard";
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EventHighlights = () => {

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  pauseOnHover: true,
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
        slidesToShow: 1
      }
    }
  ]
};

  return (
    <div className="event-section">

      <h1 className="eventText">
        Our <span className="eventColor">Event Highlights</span>
      </h1>

      <div className="eventLine"></div>

      <div className="event-container">
        <Slider {...settings}>

          <EventCard
            icon={<Icon icon="mdi:cricket" width="24" />}
            heading="1st International Hammer Ball"
            msg="We successfully covered the 1st International Hammer Ball Competition in Gorakhpur, India. Live broadcasting the event while capturing exciting moments through photography."
            photo="/images/EventPhotos/span6.jpg"
          />

          <EventCard
            icon={<Icon icon="jam:backward" />}
            heading="Pabson Dance Competition"
            msg="We successfully managed media coverage for the Pabson Dance Competition highlighting performances, excitement and memorable moments."
            photo="/images/EventPhotos/span4.png"
          />

          <EventCard
            icon={<Icon icon="mdi:cricket" width="24" />}
            heading="Tilottama Cricket League"
            msg="Our team successfully covered the Tilottama Cricket League with full live streaming and event photography."
            photo="/images/EventPhotos/span5.jpg"
          />

          <EventCard
            icon={<Icon icon="solar:podcast-bold" />}
            heading="Our Podcast"
            msg="An engaging podcast with CTO & Founder Saroj Dahal exploring innovation, startups and leadership."
            photo="/images/EventPhotos/span.png"
          />

          <EventCard
            icon={<Icon icon="cib:hackster" />}
            heading="Nepathon by Fusion Stack"
            msg="Nepathya Media proudly supported Nepathon organized by Fusion Stack with creative coverage and promotion."
            photo="/images/EventPhotos/span2.png"
          />

          <EventCard
            icon={<Icon icon="jam:calendar" />}
            heading="Nepathya Annual Function"
            msg="Nepathya Media captured highlights of the Nepathya Annual Function showcasing performances and awards."
            photo="/images/EventPhotos/span3.png"
          />

        </Slider>
      </div>

    </div>
  );
};

export default EventHighlights;