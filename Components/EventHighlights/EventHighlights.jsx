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
  };
  return (
    <div>
      <h1 className="eventText">
        Our <span className="eventColor">Event Highlights</span>
      </h1>
      <div className="eventLine"></div>

      <div className="event-container">
        <Slider {...settings}>
          <EventCard
            className="EventCard1"
            icon={<Icon className="mic" icon="solar:podcast-bold" />}
            heading="Our Podcast"
            msg="An engaging podcast with CTO & Founder Saroj Dahal. Exploring innovation, startups, and technology leadership. A conversation filled with inspiration and practical knowledge."
            photo="../public/images/EventPhotos/span.png"
          />

          <EventCard
            className="EventCard2"
            icon={<Icon className="hackathon" icon="cib:hackster" />}
            heading="Nepathon by Fusion Stack"
            msg="Nepathya Media proudly supported Nepathon organized by Fusion Stack. We contributed through media coverage and creative promotion. The event encouraged innovation and student collaboration."
            photo="../public/images/EventPhotos/span2.png"
          />

          <EventCard
            className="EventCard3"
            icon={<Icon className="calendar" icon="jam:calendar" />}
            heading="Nepathya Annual Function"
            msg="Nepathya Media captured the highlights of the Nepathya Annual Function.Showcasing performances, awards, and memorable moments of the event. Celebrating creativity, talent, and community in one grand program."
            photo="../public/images/EventPhotos/span3.png"
          />

          <EventCard
            className="EventCard4"
            icon={<Icon className="dance" icon="jam:backward" />}
            heading="Pabson Dance Competition"
            msg="We successfully managed media coverage for the Pabson Dance Competition.Highlighting performances, excitement, and memorable moments.Preserving the celebration of creativity and passion in dance."
            photo="../public/images/EventPhotos/span4.png"
          />
        </Slider>
      </div>
    </div>
  );
};

export default EventHighlights;
