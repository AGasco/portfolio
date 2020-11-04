import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./../styles/Contact.css";
import GoHome from "./GoHome";

function Contact({ isMobile }) {
  //JSON object containing all the info taken from the form
  //This info is then used to send an email to myself
  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const onChange = (e, field) => {
    setFormInfo({ ...formInfo, [field]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_7j2njg7",
      "template_paenfno",
      {
        from_name: `${formInfo.firstName} ${formInfo.lastName}`,
        from_email: formInfo.email,
        to_name: "Antonio Gasco",
        message: formInfo.message,
      },
      "user_vqapMN2t3KdfleZZ8879Z"
    );
    setFormInfo({});
  };

  return (
    <div className="contact" id="Contact">
      <GoHome />
      <div className="contact__container">
        <h2>Contact</h2>
        <div className="contact__formContainer">
          <form
            action="mailto:antoniofgasco@gmail.com"
            method="POST"
            encType="multipart/form-data"
            onSubmit={(e) => onSubmit(e)}
          >
            <div className="contact__formName">
              <label htmlFor="name">Name</label>
              <div className="contact__formNameInputs">
                <input
                  type="text"
                  id="firstName"
                  name="name"
                  value={formInfo.firstName ? formInfo.firstName : ""}
                  onChange={(e) => onChange(e, "firstName")}
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  id="lastName"
                  name="name"
                  value={formInfo.lastName ? formInfo.lastName : ""}
                  onChange={(e) => onChange(e, "lastName")}
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div className="contact__formEmail">
              <label htmlFor="email">e-mail</label>
              <div className="contact__formEmailInput">
                <input
                  type="email"
                  name="email"
                  value={formInfo.email ? formInfo.email : ""}
                  onChange={(e) => onChange(e, "email")}
                  placeholder="yourawesomename@gmail.com"
                  required
                />
              </div>
            </div>

            <div className="contact__formMessage">
              <label htmlFor="message">Your Message</label>
              <div className="contact__formMessageInput">
                <textarea
                  name="message"
                  value={formInfo.message ? formInfo.message : ""}
                  onChange={(e) => onChange(e, "message")}
                  placeholder="Your enquiries go here..."
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>
            </div>

            <div className="contact__formSubmit">
              <div className="contact__formSubmitInput">
                <input type="submit" value="Contact Me!" />
              </div>
            </div>
            {!isMobile ? (
              <div className="contact__footer">
                <em>
                  If you'd rather speak to me on the phone, you may contact me
                  on
                </em>
                <span className="contact__phone">0034 686043621</span>
              </div>
            ) : (
              <div className="contact__footer">
                <p>
                  <em className="contact__footerText">
                    If you'd rather speak to me on the phone, you may contact me
                    on
                  </em>
                  <span className="contact__phone"> 0034 686043621</span>
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
