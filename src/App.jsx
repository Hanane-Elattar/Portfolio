import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import "./index.css"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      
      <Navbar />
      <Hero />
      <Slider />
      <About />
      <Contact />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
