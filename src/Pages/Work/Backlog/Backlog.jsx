import React from "react";
import "./Backlog.css";

const BackLog = () => {
  return (
    <div className="work-div">
      <div className="backlog-container">
        <div className="backlog-info">
          <h1>
            Backlog
            <p className="italic">A MERN Stack Application</p>
          </h1>

          <ul>
            <li>React, ReactRouter, Hooks, Node, Express, Axios</li>
            <li>Bootstrap, HTML5, CSS</li>
            <li>Multer, Cloudinary, Mapbox, JWT</li>
            <li>Git, JavaScript</li>
          </ul>
          <div className="site-github">
            <a
              className="site-github-atag"
              href="https://backlog-bugtracker-app.herokuapp.com/"
            >
              Visit Site{" "}
            </a>
            <div className="arrimg">
              <img src="/arr1.png" alt="" />
            </div>

            <a
              className="site-github-atag-octocat"
              href="https://github.com/slavdefense/Backlog-MERN-Stack"
            >
              <img src="/Octocat.png" alt="" />
            </a>
          </div>
        </div>
        <div className="backlog-img">
          {/* <img src='/backlog-img.png' alt="" /> */}
          <video className="video" autoPlay muted loop>
            <source src="/backlog.mp4" type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
};

export default BackLog;
