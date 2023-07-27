import React, { useState, useEffect } from "react";
import "./Skills.css";
import data from "../../Data.json";
import pythonImage from "../Skills/python.png";
import rImage from "../Skills/r.png";
import matlabImage from "../Skills/matlab.png";
import cImage from "../Skills/c.png";
import deepLearningImage from "../Skills/deep-learning.png";
import machineLearningImage from "../Skills/machine-learning.png";
import computerVisionImage from "../Skills/computer-vision.png";
import dataScienceImage from "../Skills/data-science.png";
import nlpImage from "../Skills/nlp.png";

export default function Skills({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  const [isPLVisible, setPLVisible] = useState(true);

  const getImage = (imageName) => {
    const imageStyle = {
      width: "60px",
      height: "60px",
    };
    switch (imageName) {
      case "python.png":
        return <img src={pythonImage} alt="" style={imageStyle} />;
      case "r.png":
        return <img src={rImage} alt="" style={imageStyle} />;
      case "matlab.png":
        return <img src={matlabImage} alt="" style={imageStyle} />;
      case "c.png":
        return <img src={cImage} alt="" style={imageStyle} />;
      case "deep-learning.png":
        return <img src={deepLearningImage} alt="" style={imageStyle} />;
      case "machine-learning.png":
        return <img src={machineLearningImage} alt="" style={imageStyle} />;
      case "computer-vision.png":
        return <img src={computerVisionImage} alt="" style={imageStyle} />;
      case "data-science.png":
        return <img src={dataScienceImage} alt="" style={imageStyle} />;
      case "nlp.png":
        return <img src={nlpImage} alt="" style={imageStyle} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="skills-container" id="skills">
        <div className="skills-heading">
          <h1>Skills</h1>
        </div>
        <div className="content-container">
          <div className="content-btn">
            <span
              onClick={() => {
                setPLVisible(true);
              }}
            >
              Programming Languages
            </span>
            <span
              onClick={() => {
                setPLVisible(false);
              }}
            >
              Areas of Interest
            </span>
            <hr
              className="Indicator"
              style={{
                transform: "translateX(" + (isPLVisible ? 0 : 38) + "vw)",
              }}
            />
          </div>
          {isPLVisible ? (
            <>
              <div className="skills-content">
                {data.skills.map((skill, index) => (
                  <div className="PL-box" key={index}>
                    <div className="PL-title">
                      <div className="PL-icon">
                        <div>{getImage(skill.image)}</div>
                      </div>
                      <h3>{skill.title}</h3>
                    </div>
                    <p>{skill.description}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="skills-AOI">
                {data.AOI.map((AOI, index) => (
                  <div className="AOI-box" key={index}>
                    <div className="AOI-title">
                      <div className="AOI-icon">
                        <div>{getImage(AOI.image)}</div>
                      </div>
                      <h3>{AOI.title}</h3>
                    </div>
                    <p>{AOI.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="skills-containers">
            <div className="db-container-heading">Databases</div>
            <h2>PostgreSQL</h2>
          </div>
          <div className="skills-containers">
            <div className="frameworks-container-heading">
              Frameworks and Libraries
            </div>
            <div className="frameworks-and-libraries">
              <span>Tensorflow</span>
              <span>Keras</span>
              <span>Matplotlib</span>
              <span>Pandas</span>
              <span>Scikit-learn</span>
              <span>Numpy</span>
              <span>Pillow</span>
              <span>OpenCV</span>
              <span>Detectron2</span>
              <span>PyTorch</span>
              <span>Apex</span>
              <span>Apex</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
