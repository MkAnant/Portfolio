import React from "react";
import Card from "../../Card/Card";
import "./ExtroWorks.css";

export default function ExtroWorks(props) {
  return (
    <div className="extroworks">
      <div className="works-heading">
        <h2 className="cursive-font">My Extro works</h2>
        <p className="cursive-font">Tools made for everyone</p>
      </div>

      <div className="works">
        <Card
          title="Sun Screener"
          info="A web app to calculate how much sun exposure you need for sufficient
            vitamin D based on the UV index of your location, time and skin type."
          tech="Node, Express + API, HTML, CSS, JS"
          blur={false}
        />
        <Card
          title="Coming Soon"
          info="Let me cook !"
          tech="Node, Express, Passport, Mongo DB"
          blur={true}
        />
        <Card
          title="Coming Soon"
          info="Let me cook !"
          tech="Node, Next, React, Redux, Mongo DB"
          blur={true}
        />
      </div>
    </div>
  );
}
