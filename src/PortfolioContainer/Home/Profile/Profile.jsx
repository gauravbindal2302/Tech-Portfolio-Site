import React from "react";
import "./Profile.css";
import resumePdf from "./Shubham_Bindal_Resume.pdf";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-icons">
            <a href="/#">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="/#">
              <i className="fa-brands fa-square-google-plus"></i>
            </a>
            <a href="/#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="/#">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="/#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Shubham</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                {/*<Typical
                  loop={Infinity}
                  steps={[
                    "Artificial Intelligence",
                    1000,
                    "Deep Learning",
                    1000,
                    "Machine Learning",
                    1000,
                    "Computer Vision",
                    1000,
                    "Data Science",
                    1000,
                  ]}
                />*/}
              </h1>
              <span className="profile-role-tagline">
                Addressing world problems through Artificial Intelligence.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="mailto:bindals610@gmail.com">
              <button className="btn primary-btn">Hire Me</button>
            </a>
            <a href={resumePdf} className="btn highlighted-btn">
              Get Resume
            </a>
          </div>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div>
    </div>
  );
}
