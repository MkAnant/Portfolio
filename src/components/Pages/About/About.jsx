import React from "react";
import Header from "../../Header/Header";
import Flip from "./Flip";
import dp from "../../../assets/MkAnant.png";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <Header h2="My Intro" para="About Me" />
      <div className="connect">
        <img className="about-pic" src="About.svg" alt="about" />
        <Flip />
        <img className="dp about-pic" src={dp} alt="dp" />
      </div>
    </div>
  );
}
