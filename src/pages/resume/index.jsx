import React from 'react'
import { Footer, Header } from '../../components'
import profileImage from '../../assets/santhosh-korimi.png';
import './resume.scss'

const ResumePage = () => {
  return (
    <>
      <Header secondary />
      <div className="resume--container">
        <div className="resume-header-section">
          <div className="flex-container">
            <div className="left-side-section">
              <div className="name-heading">
                Santhosh Kumar Korimi
              </div>
              <div className="tagline-heading">
                Software Engineer with 7+ years of Experience
              </div>
              <div className="contact-info-flex-container">
                <div className="info-item">
                  <a href="callto:+919948241288">
                    <i className="fa fa-phone"></i>
                    +91 9948241288
                  </a>
                </div>
                <div className="info-item">
                  <a href="mailto:santhoshk.korimi@gmail.com">
                    <i className="fa fa-envelope"></i>
                    santhoshk.korimi@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-info-flex-container">
                <div className="info-item">
                  <a href="https://santhoshkorimi.com/">
                    <i className="fa fa-globe"></i>
                    https://santhoshkorimi.com/
                  </a>
                </div>
                <div className="info-item">
                  <a href="https://maps.app.goo.gl/16h1v7LgP9Wr4KGPA">
                    <i className="fa fa-map-marker"></i>
                    Hyderabad, Telangana
                  </a>
                </div>
              </div>
            </div>
            <div className="right-side-section">
              <div className="profile-image-section">
                <img src={profileImage} alt="Santhosh Kumar Korimi" />
              </div>
            </div>
          </div>
        </div>
        <div className="summary-info-container">
          <div className="heading">
            Summary
          </div>
          <div className="summary-desc">
            Experienced React.JS Frontend Engineer with over 7 years of hands-on expertise in building robust, scalable, and pixel-perfect user interfaces. Proficient in TypeScript, I specialize in crafting high-quality, performant applications that meet both functional and aesthetic requirements. Skilled in translating design mockups into flawless UI implementations, I bring a keen eye for detail and a commitment to delivering exceptional user experiences. With a strong foundation in React.JS, coupled with extensive experience in frontend development, I am adept at optimizing code for efficiency, maintainability, and responsiveness. Passionate about staying updated with the latest technologies and best practices, I thrive in collaborative environments where innovation and problem-solving are encouraged.
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ResumePage
