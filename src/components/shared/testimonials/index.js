import "./testimonials.scss";

import React, { useState } from "react";

import harish from "../../../assets/harish.jpeg";
import indra from "../../../assets/indra.jpeg";
import kaustubh from "../../../assets/kaustubh.jpeg";
import monica from "../../../assets/monica.jpeg";
import yash from "../../../assets/yash.jpeg";
import TestimonialCard from "./card";

const AppTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = [
    {
      message: `It's very rare to find an amazing talent being humble. We don’t come across such people in life. Santosh is one such amazing person, who has a big heart and superficial tech talent. <br /><br />
      As an earlier team mate, In every conversation of ours, he used to give assurance to me, that He is there to handle things. That affirmation doesn't come as a statement, but in the form of the breaking down things we are supposed to do and detailing things and accomplishing them. As a founder who is paving the path in dark, know what kind of assurance those qualities give. One more special quality to mention is the ability to get things done super fast. The quickness and accuracy are definitely his skills to boast. <br /><br />
      His work ethic, super efficient task completions, ideations to the team regarding the product, voluntary support and more importantly his humble team mate attitude make him stand tall. <strong>We are lucky to have him on our side!</strong>`,
      user: {
        name: "Yash Reddy",
        designation: "Founder, SUP",
        image: yash,
      },
    },
    {
      message: `Santhosh is a great combination of high intellect, attention to detail, and has a passion for his work. He converts thoughts to code with ease. He worked closely within the team and outside also to make sure he has a full grasp of the details. <br /><br /> I would definitely love to work with Santhosh again, and would highly recommend him to any company seeking first-class vision, technical ability, intelligence and also if you want to work with a smart developer, hire him without any doubt!!`,
      user: {
        name: "Kaustubh Sarbhai",
        designation:
          "UI Developer at NODE Robotics | MS in Software Technology at HFT Stuttgart",
        image: kaustubh,
      },
    },
    {
      message: `Santhosh is an excellent resource, and a master at Web Development has been a real gem to various types/domains of projects. He makes sure all the deadlines meet and that also with the highest standards. He is a hardworking and dedicated person who will complete a project in a given time frame. <br /><br /> Santhosh is a quick learner and can learn and master at various cutting edge technologies easily. I would highly recommend santhosh as senior technical resource (front end developer)`,
      user: {
        name: "Harish Kashaboina",
        designation: "Senior Associate Consultant at Infosys",
        image: harish,
      },
    },
    {
      message: `Santhosh is a highly skilled at multi tasking.. his hands work in perfect co-ordination with his brain on one task, while he keeps planning about a problem that he's required to solve and come over.. both at the very same minute. This perfection is only achieved by a few people across globe I guess & takes years to practice and master.<br /><br />Through this I mean, this guy can work on 2 problems at the same time.. Any company should be more than happy and beneficial to have an employee to solve their 2 problems at one time, with perfection.. For this you'll need to hire him right away. His designing skills on web page development are awesome`,
      user: {
        name: "M Indrajeet",
        designation: "Team Leader Operations at Wipro | IIM Raipur",
        image: indra,
      },
    },
    {
      message: `Santhosh is a fantastic coworker, Who has team leadership skills and a knowledge transporter. He is good at communication and we always had good ideation and understanding of the projects to design and develop to meet quick deadlines. <br /><br />He always amazed me with the exact development and not losing functionality to implement what I designed without complaining. He would be a great talent to work with and happy to learn together.`,
      user: {
        name: "Monica Makka",
        designation: "UX Designer | HCI | IIIT Jablapur",
        image: monica,
      },
    },
  ];

  return (
    <section className="app-testimonials" id="testimonials">
      <div className="content-section">
        <h2 className="at-heading">Appreciation Corner</h2>
        <div className="card-main-container">
          <TestimonialCard
            key={`key-card-${activeIndex}`}
            data={data[activeIndex]}
          />
          <div className="arrows-section">
            <div className="left-side">
              {activeIndex !== 0 && (
                <div
                  className="left-arrow"
                  onClick={() => setActiveIndex(activeIndex - 1)}
                >
                  <i className="fa fa-chevron-left" />
                </div>
              )}
            </div>
            <div className="right-side">
              {activeIndex < data.length - 1 && (
                <div
                  className="right-arrow"
                  onClick={() => setActiveIndex(activeIndex + 1)}
                >
                  <i className="fa fa-chevron-right" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="dots-section">
          {data?.map((item, index) => (
            <div
              className={`dot-item ${
                activeIndex === index ? "active-item" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppTestimonials;
