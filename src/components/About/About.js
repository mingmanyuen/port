import React from "react";
import styles from "./About.module.css";
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
    <section id={styles.about}>
      <section className={styles.aboutMePart}>
        <span className={styles.aboutMeTitle}>About Me</span>
        <span className={styles.aboutMePara}>
          The experiences of studying Social data science and being an
          e-commerce assistant, I discovered my affinity for front-end
          development and its potential to create impactful user experiences.
          After graduation, I pursued a web development bootcamp to expand my
          knowledge in this field. I am excited to keep learning and perform my
          learnt skill set as well as engage in different projects.
        </span>
      </section>

      <section className={styles.skillsPart}>
        <span className={styles.skillsTitle}> What i can do</span>
        <ul className={styles.skillsList}>
          {skillsData.map((skill, index) => (
            <motion.li
              className={styles.skill}
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
