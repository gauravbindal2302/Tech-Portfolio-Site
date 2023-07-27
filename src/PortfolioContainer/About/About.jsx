import React, { useEffect } from "react";
import "./About.css";

export default function About({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <div className="about-container" Id="about">
        <div className="about-heading">
          <h1>About Me</h1>
        </div>
        <div className="about-card">
          <div className="about-picture"></div>
          <div className="about-content">
            <ul>
              <li>
                Currently, I am working as an AI Engineer at Mercer | Mettl.
              </li>
              <li>Before that, I did some internships as follows -</li>
              <p>AI Algorithm Engineer Intern at ViSenze.</p>
              <p>
                Deep Learning (Computer Vision) Intern - AI Research Intern at
                ML Studies.
              </p>
              <p>Data Science Intern at MuseWearables.</p>
              <p>Junior ML Engineer at Omdena.</p>
              <li>
                Education - Indian Institute of Information Technology,
                Vadodara.
              </li>
              <p>
                Bachelor of Technology (B.Tech) in Computer Science and
                Engineering.
              </p>
              <p>Scored [CPI-8.65] in year 2021 of my Academics.</p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
