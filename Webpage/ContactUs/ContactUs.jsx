import React from "react";
import "./ContactUs.css";
import { Icon } from "@iconify/react";
import Footer from "../../Components/Footer/Footer";
const ContactUs = () => {
  return (
    <div className="contactUs">
      <div className="inner-contact">
        <div className="contact-heading">
          <br />
          <h1>Get In Touch</h1>
        </div>
        <div className="heading-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laboriosam, dolorem, deserunt quibusdam voluptates quas optio,
            repellat hic eaque sed eveniet molestias veritatis! Tempore
            accusamus quasi sequi delectus recusandae a porro.
          </p>
        </div>
        <div className="contact-form">
          <div className="contact-left">
            <form action="get">
              <h1>Contact Form</h1>
              <label htmlFor="Name">Name*</label>
              <input type="text" placeholder="Name" required />
              <label htmlFor="Email">Email*</label>
              <input type="email" placeholder="Email" required />
              <label htmlFor="number">Phone Number*</label>
              <input type="text" placeholder="Phone Number" />
              <label htmlFor="Message">Message*</label>
              <textarea name="Message" id="Message" rows={10}></textarea>
              <button className="submit">SEND</button>
            </form>
          </div>
          <div className="contact-right">
            <div className="info">
            <h1>Connect With Us</h1>
           <p> <Icon className="location" icon="mdi:location" /> Tilottama-5, Manigram </p>
           <p>  <Icon className="call" icon="material-symbols:call" />  9802656092, 9846690222 </p>
            <p> <Icon className="mail" icon="material-symbols:mail" />  nepathyamediateam@gmail.com</p>
           <p>  <Icon className="time" icon="mingcute:time-fill" />  Sun-Fri: 7:00 AM - 5:00 PM</p>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.0102083639144!2d83.46796747571402!3d27.628384376227846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39968432be835a0b%3A0x9050d582cdb10658!2sNepathya%20College!5e1!3m2!1sen!2snp!4v1766977790800!5m2!1sen!2snp"
                allowfullscreen=""
                height={"362px"}
                width={"400px"}
                loading="lazy"

                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
       <Footer style/>
      </div>
    </div>
  );
};

export default ContactUs;
