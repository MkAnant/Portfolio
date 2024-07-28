import React from "react";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <nav>
      <ul className="navbar-links serif-font" type="None">
        <li onClick={() => props.OnChangedPage("Origin")}>Origin</li>
        <li onClick={() => props.OnChangedPage("Skills")}>Skills</li>
        <li onClick={() => props.OnChangedPage("Contact")}>Resume</li>
        <li onClick={() => props.OnChangedPage("About")}>About</li>
        <li onClick={() => props.OnChangedPage("Contact")}>Contact</li>
      </ul>
    </nav>
  );
}
