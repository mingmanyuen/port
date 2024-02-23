import React, { useRef } from "react";
import "./Projects.css";
import { motion, useScroll } from "framer-motion";
import Gym from "../../assets/gym_ex.png";
import Jojack from "../../assets/Jojack.png";

const projectsData = [
  {
    title: "JoJackHome",
    description:
      "It utilises the crawled data from HK saving cat and dogs, users can find their wanted pets with the website.",
    tags: ["React", "Node.js", "Puppeteer", "MUI", "React router"],
    imageUrl: Jojack,
  },
  {
    title: "Gym",
    description:
      "Web application for searching exercises. It has features like filtering and pagination.",
    tags: ["React", "MUI", "API"],
    imageUrl: Gym,
  },
];
const Projects = () => {
  return (
    <section id="projects">
      <h1 className="projectsPartTitle">My Projects</h1>
      {projectsData.map((item, index) => (
        <React.Fragment>
          <Project {...item} />
        </React.Fragment>
      ))}
    </section>
  );
};

const Project = ({ title, description, tags, imageUrl }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.7", "0.7 1"],
  });
  return (
    <motion.section
      className="projectCards"
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
    >
      <div className="projectContent">
        <h3 className="projectTitle">{title}</h3>
        <p className="projectDes">{description}</p>
        <ul className="projectTagWrapper">
          {tags.map((tag, index) => (
            <li key={index} className="projectTag">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <img src={imageUrl} alt={title} className="projectImg"></img>
    </motion.section>
  );
};

export default Projects;
