import React from 'react'
import './Navbar.css'
import { Icon } from "@iconify/react";





const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src="..\public\images\Nepathya Media Team logo.png" alt="Media Logo" />
        </div>
        <div className="navmenu">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Gallery</li>
        <li>Podcast</li>
        <li>Design</li>
        <li>Contact Us</li>
      </ul>
      </div>
      <div className="contact">
        <button className='number'><Icon className='call-icon' icon="mdi-download" /><a href="/proposal.pdf" download></a>Download Proposal</button>
      </div>
    </div>
  )
}

export default Navbar
