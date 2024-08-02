import React from "react";
import Header from "../../Header/Header";
import Link from "./Link";
import "./Contact.css";

export default function Contact() {
  const contactLinks = {
    Gmail: "mailto:anantmk98@gmail.com",
    Leetcode: "https://leetcode.com/u/MkAnant/",
    GitHub: "https://github.com/MkAnant",
    LinkedIn: "https://www.linkedin.com/in/mkanant",
  };
  let i = 0;
  return (
    <div className="contact">
      <Header h2="My Extro" para="Contact Me" />
      <div className="connect">
        <img
          className="contact-pic"
          src="/Link Images/Contact.png"
          alt="contact"
        />
        <div className="message">
          <h3 className="cursive-font">
            Open for some great <br /> conversations, <br />
            connections, <br />
            collaborations and even <br />
            corporations.
          </h3>
          <ul className="contact-links serif-font" type="None">
            {Object.entries(contactLinks).map(([key, value]) => (
              <Link link={value} title={key} key={i++} />
            ))}
          </ul>
        </div>
        <img
          className="contact-pic"
          src="/Link Images/Resume.png"
          alt="resume"
        />
      </div>
    </div>
  );
}
