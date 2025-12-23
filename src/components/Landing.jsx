import React from "react";
import LandingImage from "../assets/boat.svg";

function Landing() {
  return (
    <div className="row">
      <div className="column">
        <h1>Welcome to Mudheads Racing!</h1>
        <p>
          Your ultimate destination for all things Mudheads Racing. Stay tuned
          for the latest updates, events, and racing news.
        </p>
     
      <div className="button--wrapper">
           <a target="_blank" href="https://myemail.constantcontact.com/Mudhead-News---October-News.html?soid=1101731733474&aid=1zgZXscrpUo">
          <button className="button__newsletter">MudNews</button>
        </a>
      <figure>
        <img className="landing__image" src={LandingImage} alt="Landing" />
      </figure>
      </div>
      </div>
    </div>
  );
}

export default Landing;
