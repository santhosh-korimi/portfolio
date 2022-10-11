import React from "react";
import "./social-links.scss";

const SocialLinks = () => {
  return (
    <div className="social-icons-section">
      <a
        rel="noreferrer"
        href="https://www.linkedin.com/in/santhosh-korimi/"
        target="_blank"
        className="footer-contact-icons"
      >
        <i className="fa fa-linkedin" aria-hidden="true" />
      </a>
      <a
        rel="noreferrer"
        href="https://github.com/Santhosh1392"
        target="_blank"
        className="footer-contact-icons"
      >
        <i className="fa fa-github" aria-hidden="true" />
      </a>
      <a
        rel="noreferrer"
        href="https://twitter.com/QSanthosh"
        target="_blank"
        className="footer-contact-icons"
      >
        <i className="fa fa-twitter" aria-hidden="true" />
      </a>
      <a
        rel="noreferrer"
        href="https://wa.me/+919948241288"
        target="_blank"
        className="footer-contact-icons"
      >
        <i className="fa fa-whatsapp" aria-hidden="true" />
      </a>
    </div>
  );
};

export default SocialLinks;
