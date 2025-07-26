import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./pages/navbar";





function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;