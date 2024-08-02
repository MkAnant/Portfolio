import React from "react";
import Card from "../../Card/Card";
import Header from "../../Header/Header";
import "./ExtroWorks.css";

export default function ExtroWorks(props) {
  return (
    <div className="extroworks">
      <Header h2="My Extro works" para="Tools made for everyone" />
      <div className="works">
        <Card
          title="Sun Screener"
          info="A web app to calculate how much sun exposure you need for sufficient
            vitamin D, based on the UV index of your location, time and skin type."
          tech="Node, Express, EJS, Axios(REST API), HTML, CSS, JS"
          blur={false}
        />
        <Card
          title="Coming Soon"
          info="Let me cook - Book-er app !"
          tech="Node, Next, React, Mongo DB, WebRTC"
          blur={true}
        />
        <Card
          title="Coming Soon"
          info="Currently cooking - Hi-pe app !"
          tech="Node, Express, Passport, React, Mongo DB, WebSocket"
          blur={true}
        />
      </div>
    </div>
  );
}
