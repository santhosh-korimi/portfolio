import React from 'react'
import InlineEditor from '../inline-editor'

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <InlineEditor
        text=""
        styles={{
          fontSize: 14,
          color: '#83aff0',
          textAlign: 'right'
        }}
        defaultText="Phone Number"
      />
      <InlineEditor
        text=""
        styles={{
          fontSize: 14,
          color: '#83aff0',
          textAlign: 'right'
        }}
        defaultText="Email Address"
      />
    </div>
  )
}

export default ContactInfo