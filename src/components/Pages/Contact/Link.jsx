import React from "react";
import "./Link.css";

export default function Link(props) {
  return (
    <a className="link" href={props.link}>
      <img
        className="logo-image"
        src={`Link Images/${props.title}.png`}
        alt={props.title}
      />
    </a>
  );
}
