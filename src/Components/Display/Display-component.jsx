

import React from "react";
import "./Display-component.css";
const Display = () => {
  return (
    <div className="display-info">
      <div className="intro-vid">
        <div className="video-only-div">
          <video className="video-data" autoPlay muted loop>
            <source src="/backvid.mp4" type="video/mp4"></source>
          </video>
        </div>

        <div className="name-work-div">
          <span className="display-name">Sagun Shrestha</span>
          <span className="display-stack">Full Stack Web Developer</span>
        </div>
      </div>
    </div>
  );
};

export default Display;