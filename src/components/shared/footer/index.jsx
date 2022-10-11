import React from "react";
import SocialLinks from "../social-links";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="content">
        <SocialLinks />
        <p className="desc">
          &copy;{new Date().getFullYear()} Designed and Developed by Santhosh
          Korimi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
