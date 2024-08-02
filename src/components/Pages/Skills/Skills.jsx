import React from "react";
import Header from "../../Header/Header";
import Tech from "./Tech";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="skills">
      <div className="skills-grid">
        <div className="fullstack front">
          <Header h2="Front-End Skills" para="fun-end skills :p" />
        </div>
        <div className="fullstack back">
          <Header h2="Back-End Skills" para="discipli-end skills" />
        </div>

        <Tech tech="HTML" end="front"></Tech>
        <Tech tech="CSS" end="front"></Tech>
        <Tech tech="Javascript" end="front"></Tech>
        <Tech tech="Node" end="back"></Tech>
        <Tech tech="Express" end="back"></Tech>
        <Tech tech="NPM" end="back"></Tech>
        <Tech tech="Bootstrap" end="front"></Tech>
        <Tech tech="jQuery" end="front"></Tech>
        <Tech tech="React" end="front"></Tech>
        <Tech tech="Mongo DB" end="back"></Tech>
        <Tech tech="Postgres" end="back"></Tech>
        <Tech tech="Git" end="back"></Tech>
      </div>
    </div>
  );
}
