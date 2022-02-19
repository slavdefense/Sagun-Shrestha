import React from "react";
// import {Player} from 'video-react'

const MountainBikeTrail = () => {
  return (
    <div>
      <div className="backlog-container">
        <div className="backlog-info">
          <h1>
            Bike Trail
            <p className="italic">A MERN Stack application</p>
          </h1>
          <ul>
            <li>React Js, JavaScript, EJS, CSS, HTML5,</li>
            <li> MongoDB, Express, Passport-google-oauth20</li>
            <li>Multer, Cloudinary, Whimsical Wireframes</li>
          </ul>
          <div className="site-github">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="site-github-atag"
              href="https://mountain-bike-trail-sagun.herokuapp.com/trails"
            >
              {" "}
              Visit Site
            </a>
            <div className="arrimg">
              <img src="/arr1.png" alt="" />
            </div>

            <a
              target="_blank"
              rel="noopener noreferrer"
              className="site-github-atag-octocat"
              href="https://github.com/slavdefense/mountainbike-trail-youlove"
            >
              <img src="/Octocat.png" alt="" />
            </a>
          </div>
        </div>
        <div className="backlog-img">
          <video className="video" autoPlay muted loop>
            <source src="/trailfina.mp4" type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
};

export default MountainBikeTrail;
