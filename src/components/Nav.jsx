import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Mudhead-logo-wide.png";
// import Module from "./Module";
import "./Nav.css";

function Nav() {
//   const [isOpen, setIsOpen] = React.useState(false);
  
//   const toggleModule = () => {
//       setIsOpen(!isOpen);
//       console.log("Module toggled");
//   };
  
  
  return (
    <nav id="nav">
      <div className="row">
        <div>
          <div className="nav__container">
            <div className="nav__left">
              <Link to="/" className="notflix__logo">
              </Link>
              <img src={logo} alt="Frog Logo" className="nav__logo" />
            </div>
            
            <div className="nav__right">
              <ul className="nav__links">
                <li>
                 <Link className="nav__link link__hover" to="/">Home</Link>
                </li>
                <li className="nav__link link__hover">
                  Racing
                  <ul className="dropdown__menu">
                  <li><Link className="dropdown__link" target="_blank" to="https://theclubspot.com/regatta/HcDbD5AgiF">Donzo WNRS</Link></li>
                  <li><Link className="dropdown__link" target="_blank" to="https://www.yachtscoring.com/emenu/17020">Mudhead Benefit Cup</Link></li>
                  <li><Link className="dropdown__link" target="_blank" to="https://theclubspot.com/regatta/tHvgn1SAyl">Mudnite Madness</Link></li>
                  <li><Link className="dropdown__link" target="_blank" to="https://theclubspot.com/regatta/DWauqomWTL">Mudhead Fall Regetta</Link></li>
                  <li><Link className="dropdown__link" to="/PastRaces">Past Races</Link></li>

                  </ul>
                </li>
                                <li>
                  <Link className="nav__link link__hover" to="/Events">Events</Link>
                </li>
                                <li>
                  <Link className="nav__link link__hover" to="/About">Mudwho?</Link>
                </li>
                <li>
                  {/* <button className="primary-boop click" onClick={() => toggleModule()}> Contact</button> */}
                 <button className="primary-boop click" >Contact</button> 
                </li>
              </ul>
            </div>
            {/* {isOpen && <Module toggleModule={toggleModule} isOpen={isOpen} setIsOpen={setIsOpen} />} */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
