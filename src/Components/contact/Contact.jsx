import React, { useRef, useState } from "react";
import "./Contact.css";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { RiWhatsappFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const form = useRef();

  const contactInfo = [
    {
      icon: <HiPhone />,
      title: "Phone",
      value: "+92 300 737 8823",
      link: "tel:+923007378823"
    },
    {
      icon: <HiMail />,
      title: "Email",
      value: "ranajunaidhashim6@gmail.com",
      link: "mailto:ranajunaidhashim6@gmail.com"
    },
    {
      icon: <HiLocationMarker />,
      title: "Location",
      value: "Multan, Pakistan",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <RiWhatsappFill />,
      name: "WhatsApp",
      link: "https://api.whatsapp.com/send?phone=+923007378823",
      color: "#25d366"
    },
    {
      icon: <RiLinkedinFill />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/junaidrana-dev",
      color: "#0077b5"
    },
    {
      icon: <RiGithubFill />,
      name: "GitHub",
      link: "https://github.com/ranajunaidhashim",
      color: "#333"
    }
  ];

  function sendEmail(e) {
    e.preventDefault();
    setSending(true);
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs
      .sendForm(serviceID, templateID, form.current, userID)
      .then(
        (result) => {
          e.target.reset();
          toast.success("Message sent successfully! I'll get back to you soon.");
        },
        (error) => {
          console.error(error.text);
          toast.error("Error sending message. Please try again.");
        }
      )
      .finally(() => setSending(false));
  }

  return (
    <section className="contact" id="contact">
      <motion.div 
        className="contact-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">Contact</span>
        <h2>Let's Work Together</h2>
        <p>Have a project in mind? Let's discuss how I can help bring your ideas to life.</p>
      </motion.div>

      <div className="contact-container">
        {/* Contact Info Side */}
         <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="info-content">
            <h3>Get in Touch</h3>
            <p>Feel free to reach out through any of the following channels. I typically respond within 24 hours.</p>
            
            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-text">
                    <span className="contact-label">{item.title}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-section">
              <span className="social-label">Connect with me</span>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--hover-color': social.color }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-decoration">
            <div className="decoration-circle"></div>
            <div className="decoration-dots"></div>
          </div>
        </motion.div> 

        {/* Contact Form Side */}
        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="John Doe"
                required
                disabled={sending}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="john@example.com"
                required
                disabled={sending}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Discussion"
                disabled={sending}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows="5"
                required
                disabled={sending}
              />
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              disabled={sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {sending ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
