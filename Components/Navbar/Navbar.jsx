import React, { useState } from "react";
import "./Navbar.css";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
    
      <div className="logo">
        <img
          src="../public/images/Nepathya Media Team logo.png"
          alt="Media Logo"
        />
      </div>

      
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <Icon icon={menuOpen ? "mdi:close" : "mdi:menu"} />
      </div>

      
      <div className={`navmenu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
          <li><NavLink to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</NavLink></li>
          <li><NavLink to="/podcast" onClick={() => setMenuOpen(false)}>Podcast</NavLink></li>
          <li><NavLink to="/design" onClick={() => setMenuOpen(false)}>Design</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink></li>
        </ul>
      </div>

      
      <div className="contact desktop-only">
        <a href="/proposal.pdf" download className="proposal">
          <Icon className="call-icon" icon="mdi-download" />
          Download Proposal
        </a>
      </div>
    </div>
  );
};

export default Navbar;
