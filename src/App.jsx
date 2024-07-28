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
    console.log(page);

    // switch(newPage) {
    //     case 'ExtroWorks':
    //         return <ExtroWorks />

    //     case 'IntroWork':
    //         return <IntroWorks />

    //     case 'Skills':
    //         return <Skills />

    //     case 'About':
    //         return <About />

    //     case 'Contact':
    //         return <Contact />

    //     default:
    //         return <Origin />
    // }
  }

  return (
    <div className="App">
      <Clouds />
      <Navbar OnChangedPage={changePage}/>
      <Header />
      <Hero page={page} OnChangedPage={changePage}/>
    </div>
  );
}

export default App;
