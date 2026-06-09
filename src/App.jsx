import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0d0d12]">
      <Navbar />
      
      <main>
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;