import React from "react";
import Clouds from "./components/Animation/Clouds";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import "./Styles.css";
import "./Variables.css";
import "./App.css";

function App() {
  let [page, setPage] = React.useState("Origin");

  function changePage(newPage) {
    setPage(newPage);
    let navbarElement = document.querySelector(".navbar");
    let rootDiv = document.querySelector("#root");
    navbarElement.style.marginBottom = "var(--size-medium)";

    switch (newPage) {
      case "ExtroWorks":
        navbarElement.style.marginBottom = "var(--size-xsmall)";
      case "Contact":
        rootDiv.setAttribute("class", "extro-background");
        break;

      case "IntroWorks":
        navbarElement.style.marginBottom = "var(--size-xsmall)";
      case "About":
        rootDiv.setAttribute("class", "intro-background");
        break;

      case "Skills":
        rootDiv.setAttribute("class", "dark-background");
        break;

      case "Origin":
      default:
        rootDiv.setAttribute("class", "dark-background");
    }
  }

  return (
    <div className="App">
      <Clouds />
      <Navbar OnChangedPage={changePage} />
      <Header h2="Hello there, I'm Anant (: meaning Infinity :)" para="An ambivert with a craving for either being all disciplined or having
          fun, but often it's some tasteful desserts that win over these :p"/>
      <Hero page={page} OnChangedPage={changePage} />
    </div>
  );
}

export default App;
