import React from 'react'
import { Footer, Header } from '../../components'
import resumeImage from '../../assets/resume.png'
import './resume.scss'

const ResumePage = () => {
  return (
    <>
      <Header secondary />
      <div className="resume--container">
        <p className="note-text">
          Note: This is an image. So everything is static. I am working on HTML version of this, Will update here soon. Stay Tuned!
        </p>
        <img src={resumeImage} alt="Resume of Santhosh Kumar Korimi" />
      </div>
      <Footer />
    </>
  )
}

export default ResumePage
