import React from "react";
import Featured from "../components/Featured";
import eventDates from "../assets/eventDates.jpg";

function Events() {
  return (
    <div className="row">
      <div className="column">
        <h2>Upcoming Events</h2>
        <Featured />
        <figure className="featured__figure">
          <img className="click" src={eventDates} alt="Event Dates" />
        </figure>
      </div>
    </div>
  );
}

export default Events;
