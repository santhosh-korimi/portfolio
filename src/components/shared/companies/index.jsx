import React from "react";
import strobes from "../../../assets/strobes.png";
import Ticketnetwork from "../../../assets/ticketnetwork.png";
import rentals from "../../../assets/rentals.png";
import sup from "../../../assets/sup.png";
import devathon from "../../../assets/devathon.png";
import cybereye from "../../../assets/cybereye.png";
import "./companies.scss";

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
        <h3 className="heading">Projects & Companies I worked</h3>
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
