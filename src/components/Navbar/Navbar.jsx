import React from "react";
import List from "./List";
import "./Navbar.css";

export default function Navbar(props) {
  const navLinks = ["Origin", "Skills", "Resume", "About", "Contact"];

  return (
    <nav className="navbar">
      <ul className="navbar-links serif-font" type="None">
        {navLinks.map((link, index) => <List key={index} OnChangedPage={props.OnChangedPage} page={link} />)}
      </ul>
    </nav>
  );
}
