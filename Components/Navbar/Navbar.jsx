import React from "react";
import "./Navbar.css";
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="..\public\images\Nepathya Media Team logo.png"
          alt="Media Logo"
        />
      </div>
      <div className="navmenu">
  <ul>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/gallery">Gallery</NavLink></li>
    <li><NavLink to="/about">About Us</NavLink></li>
    <li><NavLink to="/podcast">Podcast</NavLink></li>
    <li><NavLink to="/design">Design</NavLink></li>
    <li><NavLink to="/contact">Contact Us</NavLink></li>
  </ul>
</div>
      <div className="contact">
        <a href="/proposal.pdf" download className="proposal">
          <Icon className="call-icon" icon="mdi-download" />
          Download Proposal
        </a>
      </div>
    </div>
  );
};

export default Navbar;
