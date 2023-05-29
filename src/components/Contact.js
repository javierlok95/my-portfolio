import React, { useState, useRef } from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_tpixfzc', 'template_kliq7ne', form.current, 'XDqtqtTJG6HZZxBzz')
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });

    setName("");
    setEmail("");
    setMessage("");
    setEmailError(false);
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => { // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailInput = e.target.value;
    setEmail(emailInput);
    setEmailError(!re.test(emailInput));

  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div className="container-contact" id="contact">
      <div className="contact-field" >
        <div className="contact-title">
          <h2>Contact Me</h2>
        </div>
        {isSubmitted ? (
          <p className="submission-message">Your message has been submitted. Thank you!</p>
        ) : (
          <form onSubmit={handleSubmit} ref={form}>
            <fieldset>
              <div className="contact-name">
                <label htmlFor="name">Name:</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  id="emailinput"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                {emailError && (
                  <span id="emailerror">Input not valid! Please input a valid Email!</span>
                )}
                <label>Message:</label>
                <textarea
                  value={message}
                  name="message"
                  onChange={handleMessageChange}
                  placeholder="Enter your text..."
                  rows={4}
                  cols={40}
                />
              </div>
              <button className="submit-button"
                disabled={!name || !email || !message || emailError}
                type="submit">
                Submit
              </button>
            </fieldset>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;