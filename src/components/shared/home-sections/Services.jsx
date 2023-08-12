import React from "react";

import mobileImage from "../../../assets/mobile.png";
import suportImage from "../../../assets/support.png";
import webImage from "../../../assets/web.png";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="heading">Bringing your ideas to the App Store</div>
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
          <p className="desc">
            Crafting dynamic web apps with cutting-edge technologies for
            exceptional user experiences.
          </p>
        </div>
        <div className="service--card">
          <img src={mobileImage} alt="Mobile App Services" />
          <h4 className="sc-heading">Mobile Applications</h4>
          <p className="desc">
            Creating innovative mobile apps for a connected world, delivering
            functionality and user satisfaction.
          </p>
        </div>
        <div className="service--card">
          <img src={suportImage} alt="Support Services" />
          <h4 className="sc-heading">Technical Assistance</h4>
          <p className="desc">
            Expert technical assistance for prompt issue resolution and smooth
            workflow optimization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
