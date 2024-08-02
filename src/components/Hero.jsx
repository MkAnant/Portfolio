import React from "react";
import Origin from "./Pages/Origin/Origin";
import ExtroWorks from "./Pages/ExtroWorks/ExtroWorks";
import IntroWorks from "./Pages/IntroWorks/IntroWorks";
import Skills from "./Pages/Skills/Skills";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Header from "./Header/Header";

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
          <div className="error">
            <Header
              h2="Let's go back to Origin?"
              para="You're lost at (04 ,04) coordinates."
            />
          </div>
        )}
      </div>
    </section>
  );
}
