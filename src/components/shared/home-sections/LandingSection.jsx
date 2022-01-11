import React from 'react'
import { Link } from 'react-router-dom'

const LandingSection = () => {
  return (
    <div className="app-landing-section" id='home'>
      <p className='sub-heading'>Hey There!, I'm</p>
      <h1 className='heading'>Santhosh Korimi</h1>
      <p className='desc'>Web & Mobile application developer</p>
      <div className='buttons-container'>
        <div className="button-section">
          <button className='secondary'>
            <a href="tel:+919948241288">
              Call Me <i className="fa fa-phone" />
            </a>
          </button>
          <div className="span-after" />
        </div>
        <div className="button-section">
          <button id="submitButton">
            <Link to='/resume'>Resume <i className="fa fa-file-text-o" /></Link>
          </button>
          <div className="span-after" />
        </div>
      </div>
    </div>
  )
}

export default LandingSection