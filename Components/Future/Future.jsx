import React from "react";
import "./Future.css";

const Future = () => {
  return (
    <div className="future">
        <div className="watermark">
          <h1 className="media-watermark">MEDIA TEAM</h1>
        </div>
      <div className="future-images">
        <img src="../public/images/left.png" className="img1" alt="" />
        <img src="../public/images/right.png" className="img2" alt="" />
      </div>

      <div className="future-heading">
        <h1>
          Growing Together <span>for a Better Future</span>
        </h1>
      </div>
      <div className="future-para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
      <div className="future-btn">
        <button>Show More</button>
      </div>
    </div>
  );
};

export default Future;
