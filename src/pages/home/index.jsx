import React from "react";
import { Link } from "react-router-dom";
import {
  AboutSection,
  Contact,
  Footer,
  Header,
  LandingSection,
  Services,
  TechStack,
  Testimonials,
} from "../../components";
import { ProjectsList } from "../../components/shared";
import "./home.scss";

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
          <p className="desc">Visit projects page to see glimpse of my work.</p>
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
