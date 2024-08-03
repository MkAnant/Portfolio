import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <header className="headings">
        <h2 className="cursive-font">{props.h2}</h2>
        <p className="cursive-font">{props.para}</p>
    </header>
  );
}
