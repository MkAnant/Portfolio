import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <button
      className={props.type + " serif-font"}
      onClick={() => props.OnChangedPage(props.page)}
    >
      {props.value}
    </button>
  );
}
