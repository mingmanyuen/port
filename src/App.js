import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
