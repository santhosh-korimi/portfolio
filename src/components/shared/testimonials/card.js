import React from 'react'

const TestimonialCard = ({data}) => {
  const { message, user} = data;
  const {name, designation} = user || {name: 'NA', designation: 'NA'}
  return (
    <div className="testimonial-card">
      <p className='tc-desc' dangerouslySetInnerHTML={{__html: message}} />
      <p className='tc-name'>{name}</p>
      <p className='tc-role'>{designation}</p>
    </div>
  )
}

export default TestimonialCard;
