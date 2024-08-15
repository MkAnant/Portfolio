import React from "react";
import Card from "../../Card/Card";
import Header from "../../Header/Header";
import "./IntroWorks.css";

export default function IntroWorks() {
  return (
    <div className="introworks">
      <Header h2="My Intro-works" para="Personalized for self" />
      <div className="works">
        <Card
          title="Console.Blog"
          info="Personal blogging platform where I post all about tough to grasp and
        exceptional concepts of computer science and it’s ever evolving changes."
          tech="Node, Express, Postgres, Bootstrap"
          url={"https://console-blog-cx9l.onrender.com"}
        />
        <Card
          title="Muvi-Gruvi"
          info="Ever thought of collecting the best movie lines or song lyrics which
          give you immense motivation or uplifting your mental vibe? No? Well I did."
          tech="Node, Express, Postgres, Bootstrap"
          blur={true}
        />
        <Card
          title="This Portfolio"
          info="You already know all about it, if not please visit all the pages :)"
          tech="CSS Animations, React, Vite"
          url={"https://mkanant.github.io/Portfolio/"}
        />
      </div>
    </div>
  );
}
