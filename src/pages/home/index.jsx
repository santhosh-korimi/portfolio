import "./home.scss";

import React from "react";

import { Link } from "react-router-dom";

import {
  AboutSection,
  Footer,
  Header,
  Services,
  TechStack,
  Testimonials,
} from "../../components";
import { Contact, ProjectsList } from "../../components/shared";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <AboutSection />
      <ProjectsList />
      <Services />
      <div className="projectss-banner">
        <div className="left--side">
          <h4 className="heading">- Recent Projects</h4>
          <p className="desc">
            Explore my work: Visit the projects page for a glimpse of my
            Portfolio
          </p>
        </div>
        <div className="button-section">
          <button>
            <Link to="/projects">
              View Projects
              <i className="fa fa-arrow-right" style={{ marginLeft: 10 }} />
            </Link>
          </button>
          <div className="span-after" />
        </div>
      </div>
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
