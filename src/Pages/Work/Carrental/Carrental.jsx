import React from "react";
// import {Player} from 'video-react'

const CarRental = () => {
  return (
    <div>
      <div className="backlog-container">
        <div className="backlog-info">
          <h1>
            Air BnB for Cars
            <p className="italic">A Python-Django application</p>
          </h1>
          <ul>
            <li>Python, Django, CSS, HTML5,</li>
            <li>Posgresql, AWS, Django Auth</li>
            <li>Multer, Whimsical</li>
          </ul>
          <div className="site-github">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="site-github-atag"
              href="https://rentorlistcars.herokuapp.com/"
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
              href="https://github.com/slavdefense/Car-rental-made-easy"
            >
              <img src="/Octocat.png" alt="" />
            </a>
          </div>
        </div>
        <div className="backlog-img">
          <video className="video" autoPlay muted loop>
            <source src="/carrent.mp4" type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
};

export default CarRental;
