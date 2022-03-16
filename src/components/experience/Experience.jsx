import React from "react";
import "./experience.css";

import { BsPatchCheckFill } from "react-icons/bs";

const dataExperience = [
  {
    id: 1,
    experienceName: "HTML",
    experienceLevel: "Experienced",
    icon: BsPatchCheckFill,
  },

  {
    id: 2,
    experienceName: "CSS",
    experienceLevel: "Intermediate",
    icon: BsPatchCheckFill,
  },
  {
    id: 3,
    experienceName: "JavaScript",
    experienceLevel: "Intermediate",
    icon: BsPatchCheckFill,
  },
  {
    id: 4,
    experienceName: "React Js",
    experienceLevel: "Intermediate",
    icon: BsPatchCheckFill,
  },
  {
    id: 5,
    experienceName: "Tailwind",
    experienceLevel: "Intermediate",
    icon: BsPatchCheckFill,
  },
  // {
  //   id: 6,
  //   experienceName: "",
  //   experienceLevel: "Experienced",
  //   icon: BsPatchCheckFill,
  // },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Fronend Development</h3>
          <div className="experience__content">
            {dataExperience.map((item) => {
              return (
                <article className="experience__details" key={item.id}>
                  <item.icon />
                  <h4>{item.experienceName}</h4>
                  <small className="text-light">{item.experienceLevel}</small>
                </article>
              );
            })}
          </div>
        </div>

        <div className="experience__uiux-designer"></div>
      </div>
    </section>
  );
};

export default Experience;
