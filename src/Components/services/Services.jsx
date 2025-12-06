import React from "react";
import { motion } from "framer-motion";
import "./Services.css";
import { 
  HiCode, 
  HiDatabase, 
  HiCloud, 
  HiDeviceMobile, 
  HiColorSwatch,
  HiLightningBolt 
} from "react-icons/hi";

const Services = () => {
  const services = [
    {
      icon: <HiCode />,
      title: "Full-Stack Development",
      description: "Building scalable web applications with React, Angular, Node.js, and modern JavaScript/TypeScript frameworks.",
      technologies: ["React", "Angular", "Node.js", "Next.js"]
    },
    {
      icon: <HiCloud />,
      title: "Cloud & AWS Solutions",
      description: "Developing serverless architectures and cloud-native applications using AWS services like Lambda, DynamoDB, and AppSync.",
      technologies: ["AWS Lambda", "DynamoDB", "S3", "CloudFormation"]
    },
    {
      icon: <HiDatabase />,
      title: "Backend & API Development",
      description: "Designing RESTful and GraphQL APIs with Express.js, ASP.NET Core, and seamless database integrations.",
      technologies: ["REST", "GraphQL", "MongoDB", "MySQL"]
    },
    {
      icon: <HiColorSwatch />,
      title: "UI/UX & Motion Design",
      description: "Crafting engaging interfaces and smooth animations from Figma/PSD designs with focus on accessibility.",
      technologies: ["Framer Motion", "Tailwind", "Material UI", "Figma"]
    },
    {
      icon: <HiDeviceMobile />,
      title: "Responsive & Accessible",
      description: "Creating mobile-first, inclusive experiences that meet WCAG standards across all devices and platforms.",
      technologies: ["Responsive Design", "WCAG", "PWA", "Cross-browser"]
    },
    {
      icon: <HiLightningBolt />,
      title: "Performance Optimization",
      description: "Improving load times, system reliability, and user experience through modern optimization techniques.",
      technologies: ["Web Vitals", "Lazy Loading", "Caching", "CI/CD"]
    }
  ];

  return (
    <section className="services" id="services">
      <motion.div 
        className="services-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">Services</span>
        <h2>What I Bring to the Table</h2>
        <p>Transforming ideas into exceptional digital experiences</p>
      </motion.div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-technologies">
              {service.technologies.map((tech, i) => (
                <span key={i} className="service-tech">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
