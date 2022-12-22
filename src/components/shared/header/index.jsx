import './header.scss';

import React, {
  useEffect,
  useState,
} from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';

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
  const [secondaryHeader, setSecondaryHeader] = useState(false);
  const [darkVersion, setDarkVersion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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
    } else {
      htmlEl.setAttribute("data-theme", "dark");
    }
    setDarkVersion(!darkVersion);
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const isMobileFlag = window.innerWidth <= 767;
    setIsMobile(isMobileFlag);
    document.addEventListener("scroll", handelOnScroll);
    return () => {
      document.removeEventListener("scroll", handelOnScroll);
      setShowMenu(false);
    };
  }, []);

  const getBackgroundColor = () => {
    const dataTheme = document.querySelector("html").getAttribute("data-theme");
    if (dataTheme === "dark") {
      return "#1a1315";
    } else {
      return secondaryHeader ? "#eee" : "#fbfbfb";
    }
  };

  return (
    <>
      {!isMobile && (
        <header
          className="app-header"
          style={{ background: getBackgroundColor() }}
        >
          <div className="content">
            <div className="left-side">
              <a className="sk--logo-section" href="/#">
                <div className="sk--square"></div>
                <span
                  className="sk--text"
                  style={{ background: getBackgroundColor() }}
                >
                  SK
                </span>
              </a>
            </div>
            <div className="right-side">
              {isMobile && (
                <div className="menu-icon" onClick={toggleMenu}>
                  <i
                    className={`fa ${!showMenu ? "fa-bars" : "fa-times"}`}
                    style={{
                      WebkitTextStroke: `1.5px ${getBackgroundColor()}`,
                    }}
                  />
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
                            {link === "/projects" && (
                              <Link to={link}>{name}</Link>
                            )}
                            {link !== "/projects" && (
                              <AnchorLink
                                offset={isMobile ? 80 : 40}
                                href={link}
                              >
                                {name}
                              </AnchorLink>
                            )}
                          </li>
                        );
                      })}
                    <li onClick={toggleTheme}>
                      <i
                        className={`fa ${
                          !darkVersion ? "fa-sun-o" : "fa-moon-o"
                        }`}
                      />
                    </li>
                  </Scrollspy>
                </>
              )}
              {isMobile && showMenu && (
                <>
                  <Scrollspy
                    items={appItems}
                    currentClassName="active-link"
                    style={{ background: getBackgroundColor() }}
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
                    <li onClick={toggleTheme}>
                      <i
                        className={`fa ${
                          !darkVersion ? "fa-sun-o" : "fa-moon-o"
                        }`}
                      />
                    </li>
                  </Scrollspy>
                </>
              )}
            </div>
          </div>
        </header>
      )}
      {isMobile && (
        <header
          className="app-secondary-header"
          style={{ background: getBackgroundColor() }}
        >
          <div className="content">
            <div className="left-side">
              <a className="sk--logo-section" href="/#">
                <div className="sk--square"></div>
                <span
                  className="sk--text"
                  style={{ background: getBackgroundColor() }}
                >
                  SK
                </span>
              </a>
            </div>
            <div className="right-side">
              <div className="toggle-them-icon" onClick={toggleTheme}>
                <i
                  className={`fa ${!darkVersion ? "fa-sun-o" : "fa-moon-o"}`}
                />
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

Header.defaultProps = {
  secondary: false,
};

export default Header;
