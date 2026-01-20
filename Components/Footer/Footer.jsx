import React from 'react'
import './Footer.css'
import { Icon } from "@iconify/react";


const Footer = () => {
  return (
     <footer className="footer">
      <div className="footer-overlay">
        <div className="footer-container">

          <div className="footer-col">
            <img
              src="/images/logo.png"
              alt="Nepathya Media"
              className="footer-logo"
            />
        <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61579613000474" target='_blank'> <Icon icon="ic:outline-facebook" /> </a>
             <a href="https://www.instagram.com/ncm_talks/" target='_blank'> <Icon icon="mdi:instagram" /> </a>
             <a href="https://www.youtube.com/@NCMTALKS/videos" target='_blank'>  <Icon icon="mdi:youtube" /> </a> 
             <a href="https://www.tiktok.com/@nepathyamediateam" target='_blank'>  <Icon icon="ic:outline-tiktok" /> </a> 
            </div>
          </div>

          <div className="footer-col">
            <h3>About Us</h3>
            <p>
              <Icon icon="mdi:email-outline" /> nepathyamediateam@gmail.com
            </p>
            <p>
              <Icon icon="mdi:map-marker-outline" /> Manigram, Tilottama-05
            </p>
            <p>
              <Icon icon="mdi:phone-outline" /> 9749782312,9746374579
            </p>
          </div>

          <div className="footer-col">
            <h3>Our Services</h3>
            <ul>
              <li>Podcast Studio for Rent</li>
              <li>Event Handling</li>
              <li>Social Media Handling</li>
              <li>Photography & Videography</li>
              <li>Live Stream</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Get the latest information</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="newsletter">
              <input type="email" placeholder="Please enter your email" />
              <button>
                <Icon icon="mdi:send" />
              </button>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2025 Nepathya Media Team. All Rights Reserved. Website by: Nepathya
          </p>
          <span>Terms & Condition Policy</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
