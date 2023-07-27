import React, { useEffect } from "react";
import "./Timeline.css";

export default function Timeline({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className="timeline-container" Id="timeline">
      <div className="timeline-heading">
        <h1>Timeline</h1>
      </div>
      <div className="timeline">
        <ul>
          <li>
            <div className="timeline-content">
              <div className="timeline-header">
                <h1>Mercer | Mettl</h1>
                <span>Jul 21 - Present</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt deserunt mollit anim id est laborum.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <div className="timeline-header">
                <h1>ViSenze</h1>
                <span>Jan 21 - June 21</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt deserunt mollit anim id est laborum.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <div className="timeline-header">
                <h1>Omdena</h1>
                <span>Jul 20 - Aug 20</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt deserunt mollit anim id est laborum.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <div className="timeline-header">
                <h1>Muse Wearables</h1>
                <span>Oct 19 - Nov 19</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt deserunt mollit anim id est laborum.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
