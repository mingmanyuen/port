import React from "react";
import "./Intro.css";
import IntroContentImg from "../../assets/intro_img.png";
import ContactImg from "../../assets/contact.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="greeting">Hello, </span>
        <span className="greetingContent">
          I'm{" "}
          <span className="introName">
            Ming Man,
            <br />a Front-End Developer
          </span>
          <p className="greetingPara">
            with experience in creating web applications.
          </p>
          <Link to="contact">
            <button className="hireMeBtn">
              <img src={ContactImg} alt="hire-me" className="hireMeBtnImg" />
              Hire Me
            </button>
          </Link>
        </span>
      </div>
      <img src={IntroContentImg} className="introContentImg" alt="image" />
    </section>
  );
};

export default Intro;
