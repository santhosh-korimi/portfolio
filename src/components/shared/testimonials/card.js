import React from "react";

const TestimonialCard = ({ data }) => {
  const { message, user } = data;
  const { name, designation, image } = user || {
    name: "NA",
    designation: "NA",
    image: "",
  };
  return (
    <div className="testimonial-card">
      <p className="tc-desc" dangerouslySetInnerHTML={{ __html: message }} />
      <div className="user-info-container">
        <div className="image-section">
          <img src={image} alt={name} />
        </div>
        <div className="info-section">
          <p className="tc-name">{name}</p>
          <p className="tc-role">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
