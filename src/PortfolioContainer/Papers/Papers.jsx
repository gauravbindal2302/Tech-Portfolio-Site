import React, { useEffect } from "react";
import "./Papers.css";

export default function Papers({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className="papers-container" id="papers">
      <div className="papers-heading">
        <h1>Papers</h1>
      </div>
    </div>
  );
}
