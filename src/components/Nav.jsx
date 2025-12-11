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
        <div className="column">
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
                <li>
                  <Link className="nav__link link__hover" to="/Results">Racing</Link>
                </li>
                                <li>
                  <Link className="nav__link link__hover" to="/Results">Events</Link>
                </li>
                                <li>
                  <Link className="nav__link link__hover" to="/Results">Mudwho?</Link>
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
