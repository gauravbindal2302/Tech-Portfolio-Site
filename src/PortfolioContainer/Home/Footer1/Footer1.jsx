import React from "react";
import "./Footer1.css";

export default function Footer1() {
  return (
    <div className="footer1-container">
      <div className="footer1-parent">
        <img
          src={require("../../../assets/Images/footer1.png")}
          alt="no internet connection"
        />
      </div>
    </div>
  );
}
