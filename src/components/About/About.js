import React from "react";
import "./About.css";
//import skillsData from "../../lib/data";
import { motion } from "framer-motion";

const fadeInVarients = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.04 * index },
  }),
};

const About = () => {
  const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Git",
    "Bootstrap",
    "MUI",
    "Tailwind",
    "Framer Motion",
    "Puppeteer",
    "Python",
    "R Studio",
  ];
  return (
    <section id="about">
      <section className="aboutMePart">
        <span className="aboutMeTitle">About Me</span>
        <span className="aboutMePara">
          The experiences of studying Social data science and being an
          e-commerce assistant, I discovered my affinity for front-end
          development and its potential to create impactful user experiences.
          After graduation, I pursued a web development bootcamp to expand my
          knowledge in this field. I am excited to keep learning and perform my
          learnt skill set as well as engage in different projects.
        </span>
      </section>

      <section className="skillsPart">
        <span className="skillsTitle"> What i can do</span>
        <ul className="skillsList">
          {skillsData.map((skill, index) => (
            <motion.li
              className="skill"
              key={index}
              variants={fadeInVarients}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default About;
