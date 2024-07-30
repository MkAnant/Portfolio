import React from "react";
import "./List.css";

export default function Navbar(props) {
  return <li onClick={() => props.OnChangedPage(props.page)}>{props.page}</li>;
}
