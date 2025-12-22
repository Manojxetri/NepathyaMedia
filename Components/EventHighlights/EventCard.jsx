import React from 'react';
import "./EventCard.css"

const EventCard = ({ icon, heading, msg, photo }) => {
  return (
    <div className='eventstyle'>
      <div className='iconstyle'>{icon}</div>
      <h1 className='textstyle'>{heading}</h1>
      <p className='loremstyle'>{msg}</p>
      {photo && (
        <img
          src={photo}
          className="event-image"
        />
      )}
    </div>
  );
};

export default EventCard;
