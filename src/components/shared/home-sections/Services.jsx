import React from 'react'
import webImage from '../../../assets/web.png'
import mobileImage from '../../../assets/mobile.png'
import suportImage from '../../../assets/support.png'

const Services = () => {
  return (
    <section id="services" className='services-section'>
      <div className="heading">
        - Services
      </div>
      <p className="desc">
        I always feel enthusiastic about Application development, It gives me the scope of upgrading my skills with new requirements every time. Check the list of services that I am happy to assist with you.
      </p>
      <div className="services-flex">
        <div className="service--card">
          <img src={webImage} alt="Website Services" />
          <h4 className='sc-heading'>Web Applications</h4>
        </div>
        <div className="service--card">
          <img src={mobileImage} alt="Mobile App Services" />
          <h4 className='sc-heading'>Mobile Applications</h4>
        </div>
        <div className="service--card">
          <img src={suportImage} alt="Support Services" />
          <h4 className='sc-heading'>Technical Support</h4>
        </div>
      </div>
    </section>
  )
}

export default Services
