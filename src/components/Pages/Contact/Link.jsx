import React from "react";
import "./Link.css";

export default function Link(props) {
  return (
    <a href={props.link}>
      <img className="logo-image" src={`/${props.title}.png`} alt={props.title} />
    </a>
  );
}
