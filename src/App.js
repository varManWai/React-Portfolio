import React from "react";
import Intro from "./components/intro";
import About from "./components/about";
import Experiences from "./components/experience";
import Projects from "./components/projects";
import Footer from "./components/footer";
import DrawerAppBar from "./components/navbar";

import "./App.css";
import { Container } from "@mui/material";

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
