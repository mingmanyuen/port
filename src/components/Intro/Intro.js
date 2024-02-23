import React from "react";
import styles from "./Intro.module.css";
import IntroContentImg from "../../assets/intro_img.png";
import ContactImg from "../../assets/contact.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id={styles.intro}>
      <div className={styles.introContent}>
        <span className={styles.greeting}>Hello, </span>
        <span className="greetingContent">
          I'm{" "}
          <span className={styles.introName}>
            Ming Man,
            <br />a Front-End Developer
          </span>
          <p className={styles.greetingPara}>
            with experience in creating web applications.
          </p>
          <Link to="Contact_contact__BIPvD">
            <button className={styles.hireMeBtn}>
              <img
                src={ContactImg}
                alt="hire-me"
                className={styles.hireMeBtnImg}
              />
              Hire Me
            </button>
          </Link>
        </span>
      </div>
      <img
        src={IntroContentImg}
        className={styles.introContentImg}
        alt="image"
      />
    </section>
  );
};

export default Intro;
