import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_h6wq2pk",
      "template_ckwujza",
      form.current,
      "YOUR_PUBLIC_KEY"
    )
    .then(() => {
      alert("Message Sent Successfully!");
    })
    .catch(() => {
      alert("Failed to send message");
    });

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">

      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-container">

        {/* Contact Form */}

        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <input type="text" name="user_name" placeholder="Your Name" required />

          <input type="email" name="user_email" placeholder="Your Email" required />

          <textarea name="message" rows="5" placeholder="Your Message" required />

          <button type="submit">Send Message</button>

        </form>


        {/* Social Links */}

        <div className="contact-social">

          <h3>Connect With Me</h3>

          <div className="social-icons">

            <a href="https://github.com/6360949682/Akshay-kumar-b" target="_blank">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/akshaykumar-b-955a6b392/"  target="_blank">
              <FaLinkedin />
            </a>

            <a href="mailto:akshaykumarg481@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;