import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(!clicked);
  }
  return (
    <>
      <nav id="nav">
        <div className="navbar-container">
          <div className="navbar-heading">
            <NavLink className="a" to="/">
              Shubham Bindal
            </NavLink>
          </div>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li>
              <NavLink className="a" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="a" to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink className="a" to="/skills">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink className="a" to="/papers">
                Papers
              </NavLink>
            </li>
            <li>
              <NavLink className="a" to="/timeline">
                Timeline
              </NavLink>
            </li>
            <li>
              <NavLink className="a" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <a
                className="a"
                href="Shubham_Bindal_Resume.pdf"
                download="Shubham_Bindal_Resume.pdf"
              >
                <i class="fa fa-solid fa-file-pdf"></i> Resume
              </a>
            </li>
          </ul>
          <div id="mobile" onClick={handleClick}>
            <i
              id="bar"
              className={clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </div>
      </nav>
    </>
  );
}
