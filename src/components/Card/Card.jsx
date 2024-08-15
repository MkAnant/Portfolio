import React from "react";
import "./Card.css";

export default function Card(props) {
  const goToLink = () => {
    window.open(props.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`works-card ${props.blur && "blur"}`} onClick={!props.blur && goToLink}>
      <img src={`Works Images/${props.title}.png`} alt={props.title} />
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
