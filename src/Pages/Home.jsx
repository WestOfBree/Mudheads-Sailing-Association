import React from "react";
import Featured from "../components/Featured";

function Home() {
  return (
    <div>
      <div className="banner__img">
        <img className="banner__img"
          src="https://media.istockphoto.com/id/517484047/photo/sail-boat.jpg?s=612x612&w=0&k=20&c=rcY9rKK65Sw7kj-ZEsjPFehaNnexPZikr_-v6_mEQBM="
          alt=""
        />
      </div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our application.</p>
        <h2>Featured Items</h2>
        <div className="featured__wrapper">
        <Featured />
        <Featured />
        <Featured />
        </div>
    </div>
  );
}
export default Home;
