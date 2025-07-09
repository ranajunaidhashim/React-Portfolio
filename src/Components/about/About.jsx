import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import Ripples from "react-ripples";

const About = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="about" id="about">
      <motion.div
        initial={{ opacity: 0.2 }}
        whileInView={{ x: [-50, 0, 0], opacity: 1 }}
        transition={transition}
        className="a-left"
      >
        <span>About Me</span>
        <h2>Learn Something About Me</h2>
        <span>
          I’m a passionate <strong>Software Engineer</strong> with hands-on experience in
          building full-stack web applications, cloud-based systems, and high-performance UIs.
          I specialize in JavaScript, React.js, Node.js, and AWS services, and I enjoy solving complex
          problems through clean, scalable code.
          <br />
          <span style={{ color: "orange" }}>
            "Driven by code, powered by creativity."
          </span>
        </span>

        <Ripples during={1500} color={"rgba(255,255,255,0.5)"}>
          <a
            href="https://drive.google.com/file/d/1LT6TWeP7T08malsIT0-xx05zB20aGjcX/view"
            className="a-abtn"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="a-btn">Download CV</button>
          </a>
        </Ripples>
      </motion.div>

      <div className="a-right">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ x: [45, 0, 0], opacity: 1 }}
          transition={transition}
          src="https://res.cloudinary.com/dsr70k3to/image/upload/v1687766930/Portfolio/about_fcnpfv.webp"
          alt="About"
        />
      </div>
    </div>
  );
};

export default About;
