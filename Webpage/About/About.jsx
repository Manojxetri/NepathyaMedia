import React from "react";
import "./About.css";
import Future from "../../Components/Future/Future";
import Footer from "../../Components/Footer/Footer";
const About = () => {
  return (
    <div className="about">
      <div className="about-image">
        <img src="../public/images/about.png" alt="" />
      </div>
      <div className="about-heading">
        <h1>
          Nepathya <span>Media Team</span>
          <div className="about-line"></div>
        </h1>
      </div>
      <div className="about-para">
        <p>
          Welcome to Nepathya Media Team, your premier partner for professional
          media production services. Based at Nepathya College Building, we are
          a full-service media production company specializing in studio
          production, event coverage, sports streaming, and social media content
          creation. Our state-of-the-art facility and professional equipment
          enable us to deliver broadcast-quality content across all platforms.
          Whether you need podcast recording in our fully-equipped studio,
          dynamic event photography and videography, high-definition sports
          streaming with professional scoring systems, or engaging social media
          content for your brand, our experienced team brings creativity and
          technical excellence to every project.<br></br>
           What sets Nepathya Media Team
          apart is our commitment to delivering exceptional value without
          compromising on quality. We offer comprehensive packages tailored to
          meet diverse needs, from monthly studio recording subscriptions to
          full tournament coverage with live streaming, commentary, and drone
          footage. Contact us today to discuss your project and discover how we
          can help you tell your story with professionalism and impact.
        </p>
      </div>
      <div className="about-future">
      <Future/>
      <div className="about-footer">

      <Footer className="about-footer"/>
      </div>
      </div>
    </div>
  );
};

export default About;
