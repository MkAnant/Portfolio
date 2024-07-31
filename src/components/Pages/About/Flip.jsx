import React from "react";
import "./Flip.css";

export default function Flip() {
  return (
    <div className="flip">
      <div className="flip-card">
        <div className="flip-front">
          <h3 className="cursive-font">
            Obviously, I love to code you must have known by now. <br />
            <br />
            Other than that, I love watching movies and sports. <br />
            <br />
            And who doesn’t love playing video games... :)
          </h3>
        </div>
        <div className="flip-back">
          <h3 className="cursive-font">
            When not in front of a screen, you can find me either reading books,
            working out or meditating <br />
            <br />
            Or maybe I'm out in search of a bakery with some delicious desserts
            :p
          </h3>
        </div>
      </div>
    </div>
  );
}
