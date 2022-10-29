import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../../../assets/santhosh-korimi.png";
import SocialLinks from "../social-links";

const AboutSection = () => {
  return (
    <section className="about-me-section" id="about">
      <div className="left-side">
        <img src={profileImage} alt="Santhosh" />
      </div>
      <div className="right-side">
        <div className="app-landing-section">
          <p className="sub-heading">Hey There!, I'm</p>
          <h1 className="heading">Santhosh Korimi</h1>
          <p className="role-heading">Web & Mobile application developer</p>
        </div>
        <p className="desc">
          I’m an independent application developer who is passionate about
          bringing client’s visions to life. Since starting my journey with
          application development in 2015, I have developed a good number of
          projects for a diverse client base, including MNC's and Startups.
        </p>
        <SocialLinks />
        <div className="buttons-container">
          <div className="button-section">
            <button className="secondary">
              <a href="tel:+919948241288">
                Call Me <i className="fa fa-phone" />
              </a>
            </button>
            <div className="span-after" />
          </div>
          <div className="button-section">
            <button id="submitButton">
              <Link to="/resume">
                Resume <i className="fa fa-file-text-o" />
              </Link>
            </button>
            <div className="span-after" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
