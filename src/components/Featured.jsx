import React from "react";
import "./Featured.css";


function Featured({ Link }) {
  return (
    <div className="featured__container">
      <figure className="featured__figure">
        <img
          className="click"
          src="https://mudhead.org/wp-content/uploads/2025/09/MHHolidaypostcard_2025_square.jpg"
          alt=""
        />
      </figure>

      {Link ? (
        <Link to="/posts" className="button__primary">
          Learn More
        </Link>
      ) : null}
    </div>
  );
}

export default Featured;
