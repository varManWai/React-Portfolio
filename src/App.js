import React, { useEffect } from "react";
import About from "./components/about";
import Experiences from "./components/experience";
import Footer from "./components/footer";
import Intro from "./components/intro";
import DrawerAppBar from "./components/navbar";
import Projects from "./components/projects";

import "./App.css";

const App = () => {

  return (
    <div className="page">
      <DrawerAppBar />
      <div className="objectCenter">
        <Intro />

        <About />

        <Experiences />

        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default App;
