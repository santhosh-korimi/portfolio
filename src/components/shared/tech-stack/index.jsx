import React from "react";
import htmlImage from "../../../assets/html.png";
import jsImage from "../../../assets/js.png";
import reactJsImage from "../../../assets/reactjs.png";
import tsImage from "../../../assets/ts.png";
import nextJsImage from "../../../assets/nextjs.png";
import npmImage from "../../../assets/npm.png";
import docker from "../../../assets/docker.webp";
import aws from "../../../assets/aws.png";
import nodejs from "../../../assets/node.png";
import mongodb from "../../../assets/mongo.png";
import jquery from "../../../assets/jquery.png";
import sass from "../../../assets/sass.png";

import "./tech-stack.scss";

const skills = [
  {
    name: "HTML & CSS",
    image: htmlImage,
  },
  {
    name: "SCSS",
    image: sass,
  },
  {
    name: "JavaScript",
    image: jsImage,
  },
  {
    name: "TypeScript",
    image: tsImage,
  },
  {
    name: "jQuery",
    image: jquery,
  },
  {
    name: "React JS",
    image: reactJsImage,
  },
  {
    name: "Next.JS",
    image: nextJsImage,
  },
  {
    name: "Node.JS",
    image: nodejs,
  },
  {
    name: "React Native",
    image: reactJsImage,
  },
  {
    name: "MongoDB",
    image: mongodb,
  },
  {
    name: "Docker",
    image: docker,
  },
  {
    name: "AWS",
    image: aws,
  },
  {
    name: "NPM Packages",
    image: npmImage,
  },
];
const TechStack = () => {
  return (
    <div className="tech-stack-container" id="skills">
      <div className="content-section">
        <h3 className="heading">Technical Skills</h3>
        <div className="flex-section">
          {skills &&
            skills.map((skill) => {
              const { name, image } = skill;
              return (
                <div className="skill-card" key={name}>
                  <div className="image-section">
                    <img src={image} alt={name} />
                  </div>
                  <span>{name}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
