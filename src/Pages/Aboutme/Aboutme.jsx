import React from "react";
import "./Aboutme.css";

const AboutMe = () => {
  return (
    <div className="about-me-container" id="About">
      <div className="about-me-details">
        <h1>Hello, My Name is Sagun.</h1>
        <p className="about-me-p">
          {" "}
          I am a full-stack software developer with a creative problem solving
          principle. I solve problems with root cause analysis rather than a
          fire fighting strategy. My troubleshooting strategy is - ‘Erase
          complications as they arise.’’ If a methodical approach doesn’t work,
          I think outside the box when the stumbling block is complex. My
          Background in Manufacturing Engineering for the Aerospace industry has
          given me experiences on managing complex projects in a timely manner
          with extraordinary success rates.
        </p>
        <button className="resume-button">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="resume"
            href="https://docs.google.com/document/d/1FJr4JFqFIzlJPdrUsf8lz5fgQ268vBWo/edit?usp=sharing&ouid=111936704993019860131&rtpof=true&sd=true"
          >
            Resume
          </a>
        </button>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/portfolioResumeGithub.docx"
          download
        >
          <img className="resume-icon" src="/resume-icon.png" alt="" />
        </a>

        <p className="about-me-p"></p>
      </div>
    </div>
  );
};

export default AboutMe;
