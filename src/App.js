import React from 'react';
import Intro from './components/intro';
import About from './components/about';
import Experiences from './components/experience';
import Projects from './components/projects';
import Footer from './components/footer';
import NavBar from './components/navbar';

const App = () => {
  return (
    <div>

      <NavBar />

      <Intro />

      <About />

      <Experiences />

      <Projects />

      <Footer />

    </div >
  )
}

export default App


