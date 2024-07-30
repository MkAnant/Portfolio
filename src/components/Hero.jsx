import React from "react";
import Origin from "./Pages/Origin/Origin";
import ExtroWorks from "./Pages/ExtroWorks/ExtroWorks";
import IntroWorks from "./Pages/IntroWorks/IntroWorks";
import Skills from "./Pages/Skills/Skills";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

import "./Hero.css";

export default function Hero(props) {
  const pages = {
    Origin: <Origin OnChangedPage={props.OnChangedPage} />,
    ExtroWorks: <ExtroWorks OnChangedPage={props.OnChangedPage} />,
    IntroWorks: <IntroWorks OnChangedPage={props.OnChangedPage} />,
    Skills: <Skills />,
    About: <About />,
    Contact: <Contact />,
  };

  return (
    <section className="hero">
      <div className="pages">
        {pages[props.page] || (
          <div>
            Looks like we don't have the right coordinates. Let's go back to
            Origin?
          </div>
        )}
      </div>
    </section>
  );
}
