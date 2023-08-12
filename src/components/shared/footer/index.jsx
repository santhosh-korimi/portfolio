import "./footer.scss";

import React from "react";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="content">
        <p className="desc">
          &copy;{new Date().getFullYear()} Designed and Developed by Santhosh
          Korimi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
