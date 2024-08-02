import React from "react";
import "./Clouds.css";

export default function Clouds() {
  const cloudNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="clouds">
      {cloudNumbers.map((num, index) => (
        <div key={index} className={`cloud cloud${num}`}></div>
      ))}
    </div>
  );
}
