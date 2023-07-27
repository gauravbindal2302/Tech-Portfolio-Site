import React, { useState, useEffect } from "react";
import "./Contact.css";
import axios from "axios";

export default function Contact({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!user.name || !user.email || !user.message) {
      alert("Please fill in all fields");
      return;
    }

    axios
      .post("http://localhost:8080/contact", user)
      .then((res) => {
        alert(res.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="contact-container" id="contact">
      <div className="contact-heading">
        <h1>Contact Me</h1>
      </div>
      <div className="contact-box">
        <div className="contact-left">
          <div className="contact-left-content">
            <i className="fa fa-envelope"></i>
            <h2>Email</h2>
            <p>
              <a href="mailto:bindals610@gmail.com">bindals610@gmail.com</a>
            </p>
          </div>
          <div className="contact-left-content">
            <i className="fa fa-phone"></i>
            <h2>Phone</h2>
            <p>+91 9761484560</p>
          </div>
          <div className="contact-left-content">
            <i className="fa fa-link" />
            <h2>Social Links</h2>
          </div>
          <div className="social-icons">
            <a href="/">
              <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-square-google-plus"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </div>{" "}
        </div>
        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={user.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={user.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={user.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="btn btn-2">
              Submit
            </button>
          </form>
          <span id="msg"></span>
        </div>
      </div>
    </div>
  );
}
