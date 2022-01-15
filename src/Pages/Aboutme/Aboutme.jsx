import React from "react";
import "./Aboutme.css";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTopOnMount";
const AboutMe = () => {
  return (
    <div class="about-me-container" id="About">
      <div className="about-me-details">
        <h1>Hello, My Name is Sagun.</h1>
        <p className="about-me-p">
          {" "}
          I am passionate about developing Front-end applications. I have a
          Systems Engineering Degree, recently turned myself into a software
          developer because of my passion in coding. Besides coding, I am an
          avid guitarist and Vocalist who loves classic Rock. During spare time,
          I take my mountainbike to explore new trails in Los Angeles. I am also
          a DJ and a photographer. Below please find my Linkedin and Github.
          
        </p>
        <button className="resume-button">
        <a className="resume" href="https://drive.google.com/file/d/1FhuhO03JxnQdU2uObNG3KNQO716qiGml/view?usp=sharing">Resume</a>
        </button>
       
       
        <p className="about-me-p"></p>

      </div>
    </div>
  );
};

export default AboutMe;
