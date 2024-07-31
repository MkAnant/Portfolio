import React from "react";
import Header from "../../Header/Header";
import Tech from "./Tech";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="skills">
      <div className="fullstack">
        <Header h2="Front-End Skills" para="fun-end skills :p" />
        <Header h2="Back-End Skills" para="discipli-end skills" />
      </div>
      <div className="skills-grid">
        <Tech tech="HTML"></Tech>
        <Tech tech="CSS"></Tech>
        <Tech tech="Javascript"></Tech>
        <Tech tech="Node"></Tech>
        <Tech tech="Express"></Tech>
        <Tech tech="NPM"></Tech>
        <Tech tech="Bootstrap"></Tech>
        <Tech tech="jQuery"></Tech>
        <Tech tech="React"></Tech>
        <Tech tech="Mongo DB"></Tech>
        <Tech tech="Postgres"></Tech>
        <Tech tech="Git"></Tech>
        </div>
    </div>
  );
}
