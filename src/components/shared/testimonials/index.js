import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import TestimonialCard from "./card";
import './testimonials.scss'

const AppTestimonials= () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const data = [
    {
      message: `Santhosh is a great combination of high intellect, attention to detail, and has a passion for his work. He converts thoughts to code with ease. He worked closely within the team and outside also to make sure he has a full grasp of the details. <br /><br /> I would definitely love to work with Santhosh again, and would highly recommend him to any company seeking first-class vision, technical ability, intelligence and also if you want to work with a smart developer, hire him without any doubt!!`,
      user: {
        name: 'Kaustubh Sarbhai',
        designation: 'UI Developer at NODE Robotics | MS in Software Technology at HFT Stuttgart'
      }
    },
    {
      message: `Santhosh is an excellent resource, and a master at Web Development has been a real gem to various types/domains of projects. He makes sure all the deadlines meet and that also with the highest standards. He is a hardworking and dedicated person who will complete a project in a given time frame. <br /><br /> Santhosh is a quick learner and can learn and master at various cutting edge technologies easily. I would highly recommend santhosh as senior technical resource (front end developer)`,
      user: {
        name: 'Harish Kashaboina',
        designation: 'Senior Associate Consultant at Infosys'
      }
    },
    {
      message: `Santhosh is a highly skilled at multi tasking.. his hands work in perfect co-ordination with his brain on one task, while he keeps planning about a problem that he's required to solve and come over.. both at the very same minute. This perfection is only achieved by a few people across globe I guess & takes years to practice and master.<br /><br />Through this I mean, this guy can work on 2 problems at the same time.. Any company should be more than happy and beneficial to have an employee to solve their 2 problems at one time, with perfection.. For this you'll need to hire him right away. His designing skills on web page development are awesome`,
      user: {
        name: 'M Indrajeet',
        designation: 'Team Leader Operations at Wipro | IIM Raipur'
      }
    },
    {
      message: `Santhosh is a fantastic coworker, Who has team leadership skills and a knowledge transporter. He is good at communication and we always had good ideation and understanding of the projects to design and develop to meet quick deadlines. <br /><br />He always amazed me with the exact development and not losing functionality to implement what I designed without complaining. He would be a great talent to work with and happy to learn together.`,
      user: {
        name: 'Monica Makka',
        designation: 'UX Designer | HCI | IIIT Jablapur'
      }
    },
  ]

  return (
    <section className='app-testimonials' id='testimonials'>
      <div className="content-section">
        <h2 className="at-heading">
          Recommendations
        </h2>
        <Slider {...settings}>
          {data.map((t) => (
            <TestimonialCard key={t.user.name} data={t} />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default AppTestimonials;