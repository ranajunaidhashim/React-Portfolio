import { motion } from "framer-motion";
import "./Experience.css";
import { HiBriefcase, HiCalendar, HiLocationMarker } from "react-icons/hi";

const Experience = () => {
  const experiences = [
    {
      company: "Speridian Technologies",
      role: "Software Engineer",
      period: "September 2024 – Present",
      location: "Pakistan",
      type: "Full-time",
      description: [
        "Collaborated with cross-functional teams to accelerate feature delivery, improve reusability, and enhance code maintainability.",
        "Built and maintained Angular UIs for consumer and web-center portals for ASSA ABLOY HALO project.",
        "Developed and optimized Node.js microservices and AWS Lambdas for secure IoT-door-lock control.",
        "Implemented automated CI/CD & infrastructure with CodePipeline, CloudFormation, and CloudFront.",
        "Prioritized and resolved defects to improve system stability and user experience."
      ],
      technologies: ["Angular", "Node.js", "AWS", "DynamoDB", "Lambda", "GraphQL", "CloudFormation"]
    },
    {
      company: "Intelligent Software Solution",
      role: "Web Developer",
      period: "July 2023 – October 2023",
      location: "Multan, Pakistan",
      type: "Full-time",
      description: [
        "Collaborated with senior developers to update the website and create new features.",
        "Built salon appointment system (Groome) with Angular and Mantine UI.",
        "Developed Angular components from Figma designs.",
        "Enhanced website with new features alongside senior developers."
      ],
      technologies: ["Angular", "Mantine UI", "REST APIs", "Figma"]
    },
    {
      company: "Multan Institute of IT",
      role: "Frontend Developer Intern",
      period: "2022",
      location: "Multan, Pakistan",
      type: "Internship",
      description: [
        "Actively engaged in web creative design and development.",
        "Learned fundamentals of HTML5, CSS3, JavaScript, and React.",
        "Worked on responsive design and cross-browser compatibility.",
        "Collaborated with team members on various web projects."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"]
    }
  ];

  return (
    <div className="experience" id="experience">
      <motion.div
        className="exp-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">Experience</span>
        <h2>Professional Journey</h2>
        <p>Building digital solutions that make a difference</p>
      </motion.div>

      <div className="exp-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`exp-card ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="exp-card-content">
              <div className="exp-card-header">
                <div className="exp-company-info">
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                </div>
                <span className={`exp-type ${exp.type.toLowerCase()}`}>{exp.type}</span>
              </div>
              
              <div className="exp-meta">
                <span><HiCalendar /> {exp.period}</span>
                <span><HiLocationMarker /> {exp.location}</span>
              </div>

              <ul className="exp-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="exp-technologies">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="exp-marker">
              <HiBriefcase />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
