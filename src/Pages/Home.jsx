import React from "react";
import Featured from "../components/Featured";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Post from "./Post";
import Landing from "../components/Landing.jsx";
import Paypal from "../components/Paypal.jsx";
import mudDues from "../assets/mudheaddues-2026.jpg";
import holidayParty from "../assets/holidayParty.jpg";
function Home() {
  return (
    <div>
      <div className="banner__img">
        <img className="banner__img"
          src="https://media.istockphoto.com/id/517484047/photo/sail-boat.jpg?s=612x612&w=0&k=20&c=rcY9rKK65Sw7kj-ZEsjPFehaNnexPZikr_-v6_mEQBM="
          alt=""
        />
      </div>
      <Landing />
        <h2>Featured Items</h2>
        <div className="featured__wrapper">
          <Link to={'/Post'} ><Featured image={holidayParty} /></Link>
          <Link to ={''}><Featured image={mudDues} /></Link>
          {/* <Link to ={''}><Featured /></Link> */}
        </div>
        <Paypal />
       {/* insert weather component and tide tracker here */}
    </div>
  );
}
export default Home;
