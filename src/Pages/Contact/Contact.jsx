import React from "react";
import "./Contact.css";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTopOnMount";

const Contact = () => {
  return (
    <div id="Contact" className="contact-container">
      <div className="form-input-contact">
        <h2 className="question">Have a question or want to work together?</h2>

        <form action="">
          <input className="input-name" type="text" placeholder="Name" />
          <input placeholder="Email" className="input-email" type="text" />
          <textarea
            placeholder="Your message"
            className="input-message"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>

          <button className="submit-button">Submit</button>
        </form>

        <div className="links-div">
          <div className="github-linkedin-div">
            {" "}
            <a href="https://github.com/slavdefense">
              <img className="github-octo" src="/Octocat.png" alt="" />
            </a>
          </div>

          <div className="github-linkedin-div">
            <a href="https://www.linkedin.com/in/sagun-shrestha-9a67b49a/">
              <img className="linkedin-bug" src="/logl1.png" alt="" />
            </a>
          </div>
        </div>

        <div className="copyright">
          {" "}
          <p className="about-me-p">SAGUN SHRESTHA©️2021</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
