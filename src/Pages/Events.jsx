import React from "react";
import Featured from "../components/Featured";
import eventDates from "../assets/eventDates.jpg";

function Events({ link: Link }) {
  return (
    <div className="row events__row">
      <div className="column events__column">
        <h2>Upcoming Events</h2>
        <div className="events__wrapper">
        <Link to= "/Post"><Featured /></Link>
        <figure className="event-dates__wrapper">
          <img className="event-dates__image" src={eventDates} alt="Event Dates" />
        </figure>
        </div>
      </div>
    </div>
  );
}

export default Events;
