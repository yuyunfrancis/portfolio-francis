import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const Socials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/yuyunfrancis/" target="_blank">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/yuyunfrancis" target="_blank">
        <FaGithub />
      </a>
      <a href="https://dribbble.com/yuyunfrancis" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default Socials;
