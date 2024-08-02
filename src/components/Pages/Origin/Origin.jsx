import React from "react";
import Button from "../../Button/Button";
import "./Origin.css";

export default function Origin(props) {
  return (
    <div className="origin">
      <div className="infinite">
        <h1 className="extro-color">1</h1>
        <Button
          type="primary-button"
          value="My Extro Works"
          page="ExtroWorks"
          OnChangedPage={props.OnChangedPage}
        />
      </div>
      <h1 className="divide serif-font-bold">/</h1>
      <div className="infinite">
        <h1 className="intro-color">0</h1>
        <Button
          type="secondary-button"
          value="My Intro Works"
          page="IntroWorks"
          OnChangedPage={props.OnChangedPage}
        />
      </div>
    </div>
  );
}
