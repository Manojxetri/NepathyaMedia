import React from "react";
import "./Future.css";

const Future = () => {
  return (
    <div className="future">
      {/* Watermark */}
      <div className="watermark">
        <h1 className="media-watermark">MEDIA TEAM</h1>
      </div>

      {/* Main content */}
      <div className="future-content">
        {/* Left Image */}
        <div className="future-image left">
          <img src="/images/drone.png" alt="drone" />
        </div>

        {/* Center Text */}
        <div className="future-text">
          <h1>
            Growing Together <span>for a Better Future</span>
          </h1>
          <p>
            At Nepathya Media Team, we believe in growing together through
            creativity, collaboration, and innovation. By sharing ideas and
            supporting one another, we aim to build a stronger community and
            create meaningful content that inspires a better future for everyone.
          </p>
        </div>

        {/* Right Image */}
        <div className="future-image right">
          <img src="/images/camera.png" alt="camera" />
        </div>
      </div>
    </div>
  );
};

export default Future;