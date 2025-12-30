import React from "react";
import "./Featured.css";


function Featured({ image }) {
  return (
    <div className="featured__container">
      <figure className="featured__figure">
        <img
          className="click"
          src={image}
          alt=""
        />
      </figure>
     <button className="featured__button click">Read More</button>
    </div>
  );
}

export default Featured;
