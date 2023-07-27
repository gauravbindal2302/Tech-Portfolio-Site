import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./PortfolioContainer/Home/Home";
import About from "./PortfolioContainer/About/About";
import Projects from "./PortfolioContainer/Projects/Projects";
import Skills from "./PortfolioContainer/Skills/Skills.jsx";
import Papers from "./PortfolioContainer/Papers/Papers";
import Timeline from "./PortfolioContainer/Timeline/Timeline";
import Contact from "./PortfolioContainer/Contact/Contact";
import FDFMDB from "./FDFMDB";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home title="Shubham Bindal | Portfolio" />}
          />
          <Route
            path="/about"
            element={<About title="Shubham Bindal | About" />}
          />
          <Route
            path="/projects"
            element={<Projects title="Shubham Bindal | Projects" />}
          />
          <Route
            path="/skills"
            element={<Skills title="Shubham Bindal | Skills" />}
          />
          <Route
            path="/papers"
            element={<Papers title="Shubham Bindal | Papers" />}
          />
          <Route
            path="/timeline"
            element={<Timeline title="Shubham Bindal | Timeline" />}
          />
          <Route
            path="/contact"
            element={<Contact title="Shubham Bindal | Contact" />}
          />
          <Route path="/fetchdatafrommongodb" element={<FDFMDB />} />
        </Routes>
      </div>

      {isScrolled && (
        <button
          className="scroll-to-top-button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}
