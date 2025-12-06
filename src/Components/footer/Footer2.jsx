import React from "react";
import "./Footer2.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  RiLinkedinFill,
  RiGithubFill,
  RiWhatsappFill,
  RiMailFill,
  RiArrowUpLine,
} from "react-icons/ri";

const Footer2 = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <RiLinkedinFill />,
      href: "https://linkedin.com/in/junaidrana-dev",
      label: "LinkedIn",
    },
    {
      icon: <RiGithubFill />,
      href: "https://github.com/ranajunaidhashim",
      label: "GitHub",
    },
    {
      icon: <RiWhatsappFill />,
      href: "https://wa.me/923007378823",
      label: "WhatsApp",
    },
    {
      icon: <RiMailFill />,
      href: "mailto:ranajunaidhashim6@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { to: "Intro", label: "Home" },
    { to: "about", label: "About" },
    { to: "experience", label: "Experience" },
    { to: "services", label: "Services" },
    { to: "portfolio", label: "Portfolio" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="/" className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-text">Junaid</span>
              <span className="logo-slash">/</span>
              <span className="logo-bracket">&gt;</span>
            </a>
            <p className="footer-tagline">
              Software Engineer crafting modern web experiences with
              React, Angular, Node.js, and cloud technologies.
            </p>
            <div className="footer-socials">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <nav>
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={0}
                  className="footer-nav-link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          <motion.div
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Get in Touch</h4>
            <div className="contact-info">
              <p>
                <strong>Email:</strong>
                <a href="mailto:ranajunaidhashim6@gmail.com">
                  ranajunaidhashim6@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>
                <a href="tel:+923007378823">+92 300 7378823</a>
              </p>
              <p>
                <strong>Location:</strong>
                <span>Multan, Pakistan</span>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Rana Junaid Hashim
          </p>

          <Link
            to="Intro"
            spy={true}
            smooth={true}
            offset={-80}
            duration={0}
            className="back-to-top"
          >
            <RiArrowUpLine />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
