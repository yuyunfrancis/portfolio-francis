import React from "react";
import "./about.css";
import Me from "../../assets/img/project.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  const data = [
    {
      id: 1,
      name: "Experience",
      small: "1+ years",
      icon: FaAward,
    },
    { id: 2, name: "Clients", small: "8 clients", icon: FiUsers },
    {
      id: 3,
      name: "Projects",
      small: "10 Completed Projects",
      icon: VscFolderLibrary,
    },
  ];

  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="yuyun francis" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {data.map((item) => {
              return (
                <article className="about__card" key={item.id}>
                  <item.icon />
                  <h5>{item.name}</h5>
                  <small>{item.small}</small>
                </article>
              );
            })}
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ipsa
            rem ducimus! Aspernatur non in rerum voluptates iure, illum
            perspiciatis soluta, repudiandae laboriosam laudantium fuga
            cupiditate, ut accusantium quidem aliquid.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
