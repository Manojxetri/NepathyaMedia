import React from "react";
import "./AboutUs.css";
import Card from "./Card";

const AboutUs = () => {
  return (
    <div className="background">
      <h1 className="text">
        Nepathya <span id="color">Media Team</span>
      </h1>

      <div className="line"></div>
      <div className="aboutus-description-container">
        <div className="image">
          <img src="../public/images/icons2.png" alt="" />
        </div>
        <div className="card-right-container">
          <div className="card1">
            <Card
              heading="Digital Arts"
              msg=" We design creative digital artworks that visually communicate ideas with modern artistic expression."
            />
          </div>

          <div className="card2">
            <Card
              heading="Creative Visuals"
              msg="We create impactful visuals that capture attention and strengthen storytelling across digital platforms."
            />
          </div>

          <div className="card3">
            <Card
              heading="Podcast"
              msg="We produce engaging podcasts that share stories, ideas, and conversations from our college community."
            />
          </div>

          <div className="card4">
            <Card
              heading="Event Handling"
              msg="We handle complete media coverage of events with creative documentation and smooth coordination."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
