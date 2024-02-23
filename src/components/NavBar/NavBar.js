import React, { useState } from "react";
import styles from "./NavBar.module.css";
import LogoBulb from "../../assets/logo_bulb.png";
import ContactImg from "../../assets/contact.png";
import MobMenu from "../../assets/mobMenu.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className={styles.navbar}>
      <Link
        activeClass="active"
        to="intro"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={styles.desktopMenuListItem}
      >
        <img src={LogoBulb} className={styles.desktopMenuLogo} alt="logo" />
      </Link>
      <div className={styles.desktopMenu}>
        <Link
          activeClass={styles.active}
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={styles.desktopMenuListItem}
        >
          Home
        </Link>
        <Link
          activeClass={styles.active}
          to="about"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}
          className={styles.desktopMenuListItem}
        >
          About
        </Link>
        <Link
          activeClass={styles.active}
          to="projects"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className={styles.desktopMenuListItem}
        >
          Projects
        </Link>
        <Link
          activeClass={styles.active}
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className={styles.desktopMenuListItem}
        >
          Contact
        </Link>
      </div>
      <button
        className={styles.desktopMenuBtn}
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={ContactImg} className={styles.desktopMenuImg} alt="logo" />
        Contact Me
      </button>
      <img
        src={MobMenu}
        className={styles.mobMenuLogo}
        alt="logo"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div
        className={styles.mobMenu}
        style={{ display: showMenu ? "flex" : "none" }}
      >
        <Link
          activeClass={styles.active}
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={styles.mobMenuListItem}
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass={styles.active}
          to="about"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}
          className={styles.mobMenuListItem}
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass={styles.active}
          to="projects"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className={styles.mobMenuListItem}
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
        <Link
          activeClass={styles.active}
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className={styles.mobMenuListItem}
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
