import About from "./components/about";
import Skills from "./components/skills";
import Experiences from "./components/experience";
import Contact from "./components/contact";
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

        <Skills />

        <Experiences />

        <Projects />

        <Contact />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
