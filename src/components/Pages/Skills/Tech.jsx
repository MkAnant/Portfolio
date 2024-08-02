import React from "react";
import "./Tech.css";

export default function Tech(props) {
  return (
    <div className={`tech ${props.end}`}>
      <img
        className="round-pic"
        src={`Tech Images/${props.tech}.png`}
        alt={props.tech}
      />
      <p className="cursive-font">{props.tech}</p>
    </div>
  );
}
