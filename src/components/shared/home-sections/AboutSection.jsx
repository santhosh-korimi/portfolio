import React from 'react'
import profileImage from '../../../assets/santhosh.png'
import SocialLinks from '../social-links'

const AboutSection = () => {
  return (
    <section className="about-me-section" id="about">
      <div className="left-side">
        <img src={profileImage} alt="Santhosh" />
      </div>
      <div className="right-side">
        <h3 className="heading">
          Web & Mobile App Developer. <br /> Based in Hyderabad, India.
        </h3>
        <p className="desc">
          I’m an independent application developer who is passionate about bringing client’s visions to life. Since starting my journey with application development in 2015, I have developed a good number of projects for a diverse client base, including MNC's and Startups.
        </p>
        <SocialLinks />
      </div>
    </section>
  )
}

export default AboutSection
