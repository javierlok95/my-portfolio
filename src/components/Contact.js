import React, { useState } from 'react'
import "./contact.css"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div className="container-contact" id="contact">
      <div className="contact-field" >
        <div className="contact-title">
          <h2>Contact Me</h2>

        </div>
        <form onSubmit={handleSubmit}>
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
                type="text"
                placeholder="Email"
                id="text"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <label htmlFor="message">Message:</label>
              <textarea
                value={message}
                onChange={handleMessageChange}
                placeholder="Enter your text..."
                rows={4}
                cols={40}
              />
            </div>
            <button className="submit-button"
              disabled={!name || !email || !message}
              onClick={() => alert("I'll message you and thank you for your patient!")}
              type="submit">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Contact;