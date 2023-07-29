import React from "react";

import mobileImage from "../../../assets/mobile.png";
import suportImage from "../../../assets/support.png";
import webImage from "../../../assets/web.png";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="heading">- Services</div>
      <p className="desc">
        I am always fueled by enthusiasm when it comes to application
        development. The ever-evolving nature of this field provides me with the
        opportunity to continually upgrade my skills to meet new and diverse
        requirements. Here is a list of services that I am more than happy to
        assist you with:
      </p>
      <div className="services-flex">
        <div className="service--card">
          <img src={webImage} alt="Website Services" />
          <h4 className="sc-heading">Web Applications</h4>
        </div>
        <div className="service--card">
          <img src={mobileImage} alt="Mobile App Services" />
          <h4 className="sc-heading">Mobile Applications</h4>
        </div>
        <div className="service--card">
          <img src={suportImage} alt="Support Services" />
          <h4 className="sc-heading">Technical Support</h4>
        </div>
      </div>
    </section>
  );
};

export default Services;
