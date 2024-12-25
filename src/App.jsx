import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import "./index.css"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Certif from "./components/Certif";


function App() {
  return (
    <>
      
      <Navbar />
      <Hero />
      <About />
      <Slider />
      <Projects />
      <Certif />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
