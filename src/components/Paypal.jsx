import React from "react";
import PaypalImg from "../assets/eddie-maxwell.jpg";
import "./Paypal.css"; 

function Paypal() {
  return (
    <div className="row">
      <div className="column">
      <figure>
        <img className="paypal__component--img" src={PaypalImg} alt="Eddie-Maxwell" />
      </figure>
      <h4>
        To keep Mudheads out there racing, Eddie Maxwell is an integral part of
        the sailing season. Please consider a contribution to her maintenance
        and help the RC keep running great races!
      </h4>
        </div>
    </div>
  );
}

export default Paypal;
