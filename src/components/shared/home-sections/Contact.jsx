import React, { useEffect, useState } from "react";

export const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Contact = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };

  const handleOnSubmit = async () => {
    if (name && email && !EMAIL_REGEX.test(email) && message) {
      setShowSpinner(true);
      try {
        const req = await fetch(
          `https://script.google.com/macros/s/AKfycbwFtwboO0yCTbywFUKhTrARFsz5BAI1FR9Sg2pxKmcN2MbZpKKRtW1nl60R3JmjAp-S/exec?name=${name}&email=${email}&message=${message}&date=${new Date().toDateString()}`
        );
        await req.json();
      } catch (error) {
        setShowErrorMessage(true);
      }
      setShowSpinner(false);
      setShowSuccessMessage(true);
    } else {
      setShowError(true);
    }
  };

  useEffect(() => {
    if (showSuccessMessage) {
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    }
  }, [showSuccessMessage]);

  useEffect(() => {
    if (showErrorMessage) {
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 5000);
    }
  }, [showErrorMessage]);

  return (
    <section className="sk--contact-section" id="contact">
      <h2 className="main--heading">- Say Hello!</h2>
      <div className="sk--contact-flex-section">
        <div className="sk--lside">
          <p className="desc">
            I am always open to discuss your project, improve your online
            presence or help with your application challenges.
          </p>
          <div className="email-section">
            <p>Email me at</p>
            <a href="mailto:santhoshk.korimi@gmail.com">
              santhoshk.korimi@gmail.com
            </a>
          </div>
        </div>
        <div className="sk--rside">
          {showSuccessMessage && (
            <div className="thank-you-message">
              <h4 className="thanks">
                Hey, Thanks for reaching out. I'll contact you soon.
              </h4>
            </div>
          )}
          {showErrorMessage && (
            <div className="error-message-section">
              <h4 className="thanks">
                Hey, something went worng while submitting form. Please text me
                at +91 9948241288.
              </h4>
            </div>
          )}
          <div className="form-section">
            <input
              type="text"
              placeholder="Name"
              id="name"
              value={name}
              name="name"
              onChange={handleOnChange}
              autoComplete="off"
              className={showError && !name ? "invalid-input" : ""}
            />
          </div>
          <div className="form-section">
            <input
              type="text"
              placeholder="Email"
              id="email"
              value={email}
              name="email"
              onChange={handleOnChange}
              autoComplete="off"
              className={
                showError && (!email || (email && !EMAIL_REGEX.test(email)))
                  ? "invalid-input"
                  : ""
              }
            />
          </div>
          <div className="form-section">
            <textarea
              id="message"
              placeholder="Message"
              rows="5"
              value={message}
              name="message"
              onChange={handleOnChange}
              autoComplete="off"
              className={showError && !message ? "invalid-input" : ""}
            ></textarea>
          </div>
          <div className="button-section">
            <button
              disabled={showSpinner}
              id="submitButton"
              onClick={handleOnSubmit}
            >
              Get in Touch
              {showSpinner && (
                <span id="spinner">
                  <i className="fa fa-spin fa-spinner" />
                </span>
              )}
            </button>
            <div className="span-after" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
