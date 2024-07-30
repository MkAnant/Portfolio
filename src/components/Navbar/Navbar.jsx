import React from "react";
import List from "./List";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <nav>
      <ul className="navbar-links serif-font" type="None">
        <List OnChangedPage={props.OnChangedPage} page="Origin" />
        <List OnChangedPage={props.OnChangedPage} page="Skills" />
        <List OnChangedPage={props.OnChangedPage} page="Resume" />
        <List OnChangedPage={props.OnChangedPage} page="About" />
        <List OnChangedPage={props.OnChangedPage} page="Contact" />
      </ul>
    </nav>
  );
}
