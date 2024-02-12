import React from "react";

import { Link } from "react-router-dom";

import profileImage from "../../../assets/santhosh-korimi.png";

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
          <p className="role-heading">
            Frontend Specialist | Full Stack developer
          </p>
        </div>
        <p className="desc">
          As an independent application developer, my utmost passion lies in
          turning my clients' visions into reality. Since embarking on my
          journey in application development back in 2015, I have successfully
          crafted numerous projects for a diverse clientele, encompassing both
          multinational corporations and dynamic startups.
        </p>
        {/* <SocialLinks /> */}
        <div className="cta-main-container">
          <div className="hero-cta">
            <a href="tel:+919948241288">
              Reach out to me <i className="fa fa-phone" />
            </a>
          </div>
          <div className="secondary-cta">
            <Link to="/resume">
              My Resume <i className="fa fa-file-text-o" />
            </Link>
          </div>
        </div>
        {/* <div className="buttons-container">
          <div className="button-section">
            <button id="submitButton">
              <Link to="/resume">
                Resume <i className="fa fa-file-text-o" />
              </Link>
            </button>
            <div className="span-after" />
          </div>
          <div className="button-section">
            <button className="secondary">
              <a href="tel:+919948241288">
                Call Me <i className="fa fa-phone" />
              </a>
            </button>
            <div className="span-after" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
