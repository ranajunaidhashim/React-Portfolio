import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "./Intro.css";
import Typewriter from "typewriter-effect";
import { RiFacebookFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";

const Intro = () => {
  const imgref = useRef();

  const transition = { duration: 2, type: "spring" };
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="Intro" id="Intro">
      {/* Floating gradient orbs */}
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>

      {/* left name side */}
      <div className="i-left">
        <motion.div 
          className="i-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="badge-dot"></span>
          Available for opportunities
        </motion.div>

        <div className="i-name">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hello, I'm
          </motion.span>
          <div className="iiflex">
            <motion.span
              style={{ flexDirections: "row" }}
              initial={{ opacity: 0 }}
              whileInView={{ x: [-100, 0, 0], opacity: 1 }}
              transition={transition}
            >
              Rana Junaid
            </motion.span>
            &nbsp;
            <motion.span
              style={{ flexDirections: "row" }}
              whileInView={{ y: [-100, 0, 0], opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={transition}
            >
              Hashim
            </motion.span>
          </div>
          <motion.span
            className="i-role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Typewriter
              options={{
                strings: [
                  "Software Engineer",
                  "Full-Stack Developer",
                  "React & Angular Expert",
                  "AWS Cloud Enthusiast",
                  "UI/UX & Motion Designer",
                ],
                delay: 50,
                deleteSpeed: 30,
                autoStart: true,
                loop: true,
              }}
            />
          </motion.span>
        </div>

        <motion.p 
          className="i-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Building scalable web applications with focus on motion design, 
          experience design, and accessibility. Committed to clean code, 
          reusability, and continuous improvement.
        </motion.p>

        <motion.div 
          className="i-location-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span><HiOutlineLocationMarker /> Multan, Pakistan</span>
          <span><HiOutlineMail /> ranajunaidhashim6@gmail.com</span>
        </motion.div>

        <motion.div 
          className="mybtn-container i-btn"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link to="contact" spy={true} smooth={true} duration={0}>
            <span>Let's Talk</span>
          </Link>
          <a 
            href="https://drive.google.com/file/d/1LT6TWeP7T08malsIT0-xx05zB20aGjcX/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cv-link"
          >
            <span>Download CV</span>
          </a>
        </motion.div>

        <motion.div 
          className="i-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">MCS</span>
            <span className="stat-label">Master's Degree</span>
          </div>
        </motion.div>
      </div>

      {/* right image side */}
      <div className="introimg i-right">
        <motion.div 
          className="image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <img
            ref={imgref}
            src="https://res.cloudinary.com/dsr70k3to/image/upload/v1687612965/Portfolio/Rana_Junaid_Hashim.jpg"
            style={{
              objectFit: "cover",
            }}
            alt="Rana Junaid Hashim - Software Engineer"
          />
          <div className="image-decoration"></div>
        </motion.div>

        <motion.div 
          className="floating-badge fb-1"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <span>⚛️</span> React
        </motion.div>
        <motion.div 
          className="floating-badge fb-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3.5 }}
        >
          <span>☁️</span> AWS
        </motion.div>
        <motion.div 
          className="floating-badge fb-3"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2.8 }}
        >
          <span>🅰️</span> Angular
        </motion.div>
      </div>

      <div className="header-social">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-social-icon">
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                  }}
                >
                  <motion.li variants={fadeInUp}>
                    <a
                      title="Facebook | Junaid Rajput"
                      href="https://facebook.com/ranajunaidhashim"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiFacebookFill />
                    </a>
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    <a
                      title="GitHub | ranajunaidhashim"
                      href="https://github.com/ranajunaidhashim"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiGithubFill />
                    </a>
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    <a
                      title="LinkedIn | junaidrana-dev"
                      href="https://www.linkedin.com/in/junaidrana-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiLinkedinFill />
                    </a>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
