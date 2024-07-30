import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className={`works-card ${props.blur && "blur"}`}>
      <img src={`/${props.title}.png`} alt={props.title} />
      <h3 className="serif-font-bold">{props.title}</h3>
      <p className="serif-font">
        {props.info}
        <br />
        <br />
        <b>Tech/Learnings :</b> {props.tech}
      </p>
    </div>
  );
}
