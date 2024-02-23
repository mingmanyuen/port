import React, { useRef } from "react";
import "./Contact.css";
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
    <div id="contact">
      <h1 className="contactMeTitle">Contact Me</h1>
      <span className="contactDes">
        Feel free to contact me directly at mingmanyuen1231@gmail.com <br />
        or through the below form.
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          className="contactFormName"
          type="text"
          name="your_name"
          placeholder="Please enter your name :"
        />
        <input
          className="contactFormEmail"
          type="email"
          name="your_email"
          placeholder="Please enter your email :"
        />
        <textarea
          className="contactFormMsg"
          name="message"
          row="5"
          placeholder="Please enter your message :"
        />
        <button className="submitBtn" type="submit" value="Send">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
