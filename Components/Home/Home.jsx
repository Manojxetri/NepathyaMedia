import React from "react";
import "./Home.css";
import HomeImage from "./HomeImage/HomeImage";

const Home = () => {
  return (
    <div className="Home">
      <div className="home-img">
        <img src="../public/images/Rectangle 99.png" alt="home background" />
      </div>
      <div className="home-content">
        <h4>A Creative Team That Bring Stories To Life</h4>

        <div className="mid-content">
        <h1>Capturing <span>Memories</span>,</h1>
        <h1>Creating <span>Stories...</span></h1>
        </div>
        <div className="home-para">
        <p className="para1">
          We’re a passionate media team turning ideas into powerful visuals —
          </p>
         <p className="para2"> from film and photography to design and digital media.</p>
        </div>
      </div>
      <div className="home-image">
        <HomeImage src="../public/images/HomeImage/laptop.jpeg"  alt="image 1" />
        <HomeImage src="../public/images/HomeImage/setup.jpeg"  alt="image 1" />
        <HomeImage src="../public/images/HomeImage/pc.jpeg"  alt="image 1" />
       
      </div>
    </div>
  );
};

export default Home;
