import React, { useState } from "react";
import Navbar from "./Navbar";
import Input from "./../common/Input";
import emailjs from "emailjs-com";
import "./../styles/Contact.css";

function Contact({ elements }) {
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

  const renderInput = (type, id, name, placeholder) => {
    return (
      <Input
        type={type}
        id={id}
        name={name}
        value={formInfo[id] ? formInfo[id] : ""}
        onChange={(e) => onChange(e, id)}
        placeholder={placeholder}
        required
      />
    );
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
                      {renderInput("text", "firstName", "name", "First Name")}
                      {renderInput("text", "lastName", "name", "Last Name")}
                    </div>
                  </div>

                  <div className="contact__formEmail">
                    <label htmlFor="email">e-mail</label>
                    <div className="contact__formEmailInput">
                      {renderInput(
                        "email",
                        "email",
                        "email",
                        "e-mail",
                        "yourawesomename@gmail.com"
                      )}
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
