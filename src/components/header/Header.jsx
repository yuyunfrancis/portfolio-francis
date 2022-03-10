import React from "react";
import "./header.css";
import ME from "../../assets/img/me.png";
import CTA from "./CTA";
import Socials from "./Socials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Francis Beri</h1>
        <h5 className="text-light">Frontend Developer || UI/UX Designer</h5>
        <CTA />
        <Socials />

        <div className="me">
          <img src={ME} alt="yuyun francis" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
