import React, { useEffect } from "react";
import "./Home.css";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import Footer1 from "./Footer1/Footer1";
import About from "../About/About";
import Footer2 from "../Footer2/Footer2";
import Projects from "../Projects/Projects";
/*import Footer1 from "./Footer1/Footer1";*/
import Skills from "../Skills/Skills";
import Papers from "../Papers/Papers";
import Timeline from "../Timeline/Timeline";
import Contact from "../Contact/Contact";
import Footer3 from "../Footer3/Footer3";

export default function Home({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <div className="home-container">
        <Navbar />
        <Profile />
        <Footer1 />
      </div>
      <About />
      <Footer2 />
      <Projects />
      <Footer1 />
      <Skills />
      <Footer2 />
      <Papers />
      <Footer1 />
      <Timeline />
      <Footer2 />
      <Contact />
      <Footer3 />
    </>
  );
}
