import React from "react";
// import {Player} from 'video-react'

const MountainBikeTrail = () => {
  return (
    <div>
      <div className="backlog-container">
        <div className="backlog-info">
          <h1>
            Bike Trail
            <p className="italic">A MEN Stack application</p>
          </h1>
          <ul>
            <li>JavaScript, EJS, CSS, HTML5,</li>
            <li>Mongoose, mongoDB, Express, Passport-google-oauth20</li>
            <li>Multer, Cloudinary, Whimsical</li>
          </ul>
          <div className="site-github">
            <a
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
              className="site-github-atag-octocat"
              href="https://github.com/slavdefense/mountainbike-trail-youlove"
            >
              <img src="/Octocat.png" alt="" />
            </a>
          </div>
        </div>
        <div className="backlog-img">
          <video className="video" autoPlay muted loop>
            <source src="/" type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
};

export default MountainBikeTrail;