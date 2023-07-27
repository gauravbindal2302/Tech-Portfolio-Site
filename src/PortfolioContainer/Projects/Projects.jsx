import React, { useEffect } from "react";
import "./Projects.css";
import data from "../../Data.json";

export default function Projects({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="projects-container" Id="projects">
      <div className="projects-heading">
        <h1>My Projects</h1>
      </div>
      <div className="projects-list">
        {data.projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt="" />
            <div className="layer">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
