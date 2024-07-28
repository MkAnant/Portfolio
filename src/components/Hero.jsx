import React from "react";
import Origin from "./Pages/Origin/Origin";
import ExtroWorks from "./Pages/ExtroWorks/ExtroWorks";
import IntroWorks from "./Pages/IntroWorks/IntroWorks";
import Skills from "./Pages/Skills/Skills";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

import "./Hero.css";

export default function Hero(props) {
  return (
    <section className="hero">
      <div className="pages">
        {props.page == "Origin" && <Origin OnChangedPage={props.OnChangedPage}/>}
        {props.page == "ExtroWorks" && <ExtroWorks />}
        {props.page == "IntroWorks" && <IntroWorks />}
        {props.page == "Skills" && <Skills />}
        {props.page == "About" && <About />}
        {props.page == "Contact" && <Contact />}
      </div>
    </section>
  );
}
