import React from "react";
import "./Future.css";

const Future = () => {
  return (
    <div className="future">
      <div className="watermark">
        <h1 className="media-watermark">MEDIA TEAM</h1>
      </div>
      <div className="future-images">
        <img src="../public/images/drone.png" className="img1" alt="" />
        <img src="../public/images/camera.png" className="img2" alt="" />
      </div>

      <div className="future-heading">
        <h1>
          Growing Together <span>for a Better Future</span>
        </h1>
      </div>
      <div className="future-para">
        At Nepathya Media Team, we believe in growing together through
        creativity, collaboration, and innovation. By sharing ideas and
        supporting one another, we aim to build a stronger community and create
        meaningful content that inspires a better future for everyone.
      </div>
      {/* <div className="future-btn">
        <button>Show More</button>
      </div> */}
    </div>
  );
};

export default Future;
