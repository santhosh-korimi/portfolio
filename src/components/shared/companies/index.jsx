import "./companies.scss";

import React from "react";

import cybereye from "../../../assets/cybereye.png";
import devathon from "../../../assets/devathon.png";
import rentals from "../../../assets/rentals.png";
import strobes from "../../../assets/strobes.png";
import sup from "../../../assets/sup.png";
import Ticketnetwork from "../../../assets/ticketnetwork.png";

const skills = [
  {
    name: "Strobes Security.Inc",
    image: strobes,
  },
  {
    name: "Ticketnetwork",
    image: Ticketnetwork,
  },
  {
    name: "Rentals.com",
    image: rentals,
  },
  {
    name: "Devathon",
    image: devathon,
  },
  {
    name: "SUP",
    image: sup,
  },
  {
    name: "CyberEye",
    image: cybereye,
  },
];
const ProjectsList = () => {
  return (
    <div className="worked-with-container" id="works">
      <div className="content-section">
        <h3 className="heading">My Professional Engagements</h3>
        <div className="flex-section">
          {skills &&
            skills.map((skill) => {
              const { name, image } = skill;
              return (
                <div className="skill-card" key={name}>
                  <div className="image-section">
                    <img src={image} alt={name} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
