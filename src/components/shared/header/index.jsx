import "./header.scss";

import React, { useEffect, useState } from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import Scrollspy from "react-scrollspy";

import closeIcon from "../../../assets/close.svg";
import menuIcon from "../../../assets/menu.svg";

const appLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const appItems = appLinks.map((al) => al.link.replace("#", ""));

const Header = ({ secondary }) => {
  const [, setSecondaryHeader] = useState(false);
  const [darkVersion, setDarkVersion] = useState(false);
  const [isMobile] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const handelOnScroll = (e) => {
    if (window.pageYOffset > 100) {
      setSecondaryHeader(true);
    } else {
      setSecondaryHeader(false);
    }
  };

  const toggleTheme = () => {
    const htmlEl = document.querySelector("html");
    const dataTheme = htmlEl.getAttribute("data-theme");
    if (dataTheme === "dark") {
      htmlEl.setAttribute("data-theme", "light");
      localStorage.setItem("appTheme", "light");
    } else {
      htmlEl.setAttribute("data-theme", "dark");
      localStorage.setItem("appTheme", "dark");
    }
    setDarkVersion(!darkVersion);
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  useEffect(() => {
    // const isMobileFlag = window.innerWidth <= 767;
    // setIsMobile(isMobileFlag);
    const theme = localStorage.getItem("appTheme");
    if (["dark", "light"].includes(theme)) {
      const htmlEl = document.querySelector("html");
      htmlEl.setAttribute("data-theme", theme);
    }
    document.addEventListener("scroll", handelOnScroll);
    return () => {
      document.removeEventListener("scroll", handelOnScroll);
      setShowMenu(false);
    };
  }, []);

  return (
    <header className="app-header">
      <div className="content">
        {/* <div className="left-side">
          <a className="sk--logo-section" href="/#">
            <div className="sk--square"></div>
            <span className="sk--text">SK</span>
          </a>
        </div> */}
        <div className="right-side">
          {isMobile && (
            <div className="menu-icon" onClick={toggleMenu}>
              <img src={!showMenu ? menuIcon : closeIcon} alt="Menu Icons" />
            </div>
          )}
          {!isMobile && (
            <>
              <Scrollspy items={appItems} currentClassName="active-link">
                {!secondary &&
                  appLinks &&
                  appLinks.map((al) => {
                    const { name, link } = al;
                    return (
                      <li
                        key={`${name}-app-link`}
                        onClick={() => setShowMenu(false)}
                      >
                        {link === "/projects" && <Link to={link}>{name}</Link>}
                        {link !== "/projects" && (
                          <AnchorLink offset={isMobile ? 80 : 40} href={link}>
                            {name}
                          </AnchorLink>
                        )}
                      </li>
                    );
                  })}
                <li onClick={toggleTheme}>
                  <i
                    className={`fa ${!darkVersion ? "fa-sun-o" : "fa-moon-o"}`}
                  />
                </li>
              </Scrollspy>
            </>
          )}
          {isMobile && showMenu && (
            <>
              <Scrollspy
                className="menu-items"
                items={appItems}
                currentClassName="active-link"
              >
                {!secondary &&
                  appLinks &&
                  appLinks.map((al) => {
                    const { name, link } = al;
                    return (
                      <li
                        key={`${name}-app-link`}
                        onClick={() => setShowMenu(false)}
                      >
                        <AnchorLink offset={isMobile ? 80 : 40} href={link}>
                          {name}
                        </AnchorLink>
                      </li>
                    );
                  })}
                {secondary && (
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                )}
                <li onClick={toggleTheme}>
                  <i
                    className={`fa ${!darkVersion ? "fa-sun-o" : "fa-moon-o"}`}
                  />
                </li>
              </Scrollspy>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  secondary: false,
};

export default Header;
