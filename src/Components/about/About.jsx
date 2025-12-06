import "./About.css";
import { motion } from "framer-motion";
import { HiAcademicCap, HiBriefcase, HiCode, HiLocationMarker } from "react-icons/hi";
import { FaAws, FaReact, FaNodeJs, FaAngular, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiMysql } from "react-icons/si";

const About = () => {
  const transition = { duration: 2, type: "spring" };

  const skills = [
    { name: "React / Next.js", level: 95, icon: <FaReact /> },
    { name: "Angular", level: 85, icon: <FaAngular /> },
    { name: "Node.js / Express", level: 90, icon: <FaNodeJs /> },
    { name: "TypeScript", level: 88, icon: <SiTypescript /> },
    { name: "AWS Services", level: 82, icon: <FaAws /> },
    { name: "MongoDB / MySQL", level: 85, icon: <FaDatabase /> },
  ];

  const highlights = [
    { icon: <HiBriefcase />, title: "Current Role", value: "Software Engineer" },
    { icon: <HiAcademicCap />, title: "Education", value: "MCS - BZU Multan" },
    { icon: <HiLocationMarker />, title: "Location", value: "Multan, Pakistan" },
    { icon: <HiCode />, title: "Experience", value: "3+ Years in Web Development" },
  ];

  return (
    <div className="about" id="about">
      <motion.div
        initial={{ opacity: 0.2 }}
        whileInView={{ x: [-50, 0, 0], opacity: 1 }}
        transition={transition}
        className="a-left"
      >
        <span className="section-tag">About Me</span>
        <h2>Passionate Software Engineer & Problem Solver</h2>
        
        <p className="a-description">
          Software engineer with experience in web app and website development 
          with a focus on <strong>motion design</strong>, <strong>experience design</strong>, 
          and <strong>accessibility</strong>. Proven ability to improve system performance 
          and reliability while collaborating across teams to accelerate feature delivery.
        </p>

        <p className="a-description">
          I specialize in building scalable applications using <strong>React.js</strong>, 
          <strong> Angular</strong>, <strong>Node.js</strong>, and <strong>AWS services</strong>. 
          Committed to clean code, reusability, and continuous improvement.
        </p>

        {/* Highlights Grid */}
        <div className="a-highlights">
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              className="highlight-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="highlight-icon">{item.icon}</div>
              <div className="highlight-content">
                <span className="highlight-title">{item.title}</span>
                <span className="highlight-value">{item.value}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="a-buttons">
            <a
              href="https://drive.google.com/file/d/1LT6TWeP7T08malsIT0-xx05zB20aGjcX/view"
              className="a-abtn"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="a-btn primary">Download CV</button>
            </a>
          <a
            href="https://github.com/ranajunaidhashim"
            target="_blank"
            rel="noopener noreferrer"
            className="a-abtn"
            style={{ textDecoration: "none" }}
          >
            <button className="a-btn secondary">View GitHub</button>
          </a>
        </div>
      </motion.div>

      <div className="a-right">
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ x: [45, 0, 0], opacity: 1 }}
          transition={transition}
          className="skills-container"
        >
          <h3>Technical Expertise</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-item"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <div className="tech-stack">
            <span className="tech-label">Tech Stack:</span>
            <div className="tech-icons">
              <FaReact title="React" />
              <FaAngular title="Angular" />
              <FaNodeJs title="Node.js" />
              <SiTypescript title="TypeScript" />
              <FaAws title="AWS" />
              <SiMongodb title="MongoDB" />
              <SiMysql title="MySQL" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
