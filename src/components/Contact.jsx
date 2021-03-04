import React, { useState } from "react";
import Navbar from "./Navbar";
import emailjs from "emailjs-com";
import "./../styles/Contact.css";
import GoHome from "./GoHome";
import Sidebar from "./Sidebar";
import Hamburger from "./Hamburger";

function Contact({ isMobile, elements }) {
  const [hasSubmitted, setHasSubmitted] = useState(false);

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

    console.log("submitting");

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
    setHasSubmitted(true);
    setFormInfo({});
  };

  return (
    <div className="contact" id="Contact">
      <div className="contact__left">
        <div className="contact__top">
          <Navbar elements={elements} />
        </div>

        {!hasSubmitted ? (
          <div className="contact__bottom">
            <h1 className="contact__title">Don't forget to say Hi :)</h1>
            <div className="contact__container">
              <div className="contact__formContainer">
                <form onSubmit={onSubmit}>
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

                  <div className="contact__footer">
                    <em>
                      If you'd rather speak to me on the phone, you may contact
                      me on
                    </em>
                    <span className="contact__phone">0034 686043621</span>
                  </div>
                </form>
              </div>{" "}
            </div>
          </div>
        ) : (
          <div className="contact__confirmation">
            <h1>Thank you!</h1>
            <h4>I will come back to you as soon as possible</h4>
          </div>
        )}
      </div>

      <div className="contact__right"></div>
    </div>
  );
}

export default Contact;
