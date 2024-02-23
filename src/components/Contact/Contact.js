import React, { useRef } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5dj6ysq", "template_chd1lu4", form.current, {
        publicKey: "9c9pHfiMKhUKlE3lX",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("email sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div id={styles.contact}>
      <h1 className={styles.contactMeTitle}>Contact Me</h1>
      <span className={styles.contactDes}>
        Feel free to contact me directly at mingmanyuen1231@gmail.com <br />
        or through the below form.
      </span>
      <form className={styles.contactForm} ref={form} onSubmit={sendEmail}>
        <input
          className={styles.contactFormName}
          type="text"
          name="your_name"
          placeholder="Please enter your name :"
        />
        <input
          className={styles.contactFormEmail}
          type="email"
          name="your_email"
          placeholder="Please enter your email :"
        />
        <textarea
          className={styles.contactFormMsg}
          name="message"
          row="5"
          placeholder="Please enter your message :"
        />
        <button className={styles.submitBtn} type="submit" value="Send">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
