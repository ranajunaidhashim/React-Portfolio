import React, { useState } from "react";
import "./Portfolio.css";
import { motion, AnimatePresence } from "framer-motion";
import { HiExternalLink, HiCode } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "ASSA ABLOY – HALO",
      category: "enterprise",
      description: "Full-stack IoT door-lock control system with Angular UIs, Node.js microservices, and AWS serverless architecture.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      technologies: ["Angular", "Node.js", "AWS Lambda", "DynamoDB", "GraphQL", "CloudFormation"],
      link: "https://www.assaabloy.com/",
      github: "#",
      featured: true,
      year: "2025"
    },
    {
      id: 2,
      title: "Alumni Management System",
      category: "fullstack",
      description: "MERN stack web app connecting alumni through job boards and profiles with JWT auth, MySQL, and React/Vite dashboards.",
      image: "https://res.cloudinary.com/dsr70k3to/image/upload/v1712812649/Portfolio/Online_Alumni_Management_System_using_MERN_Stack_with_MySQL_Download_Source_Code_1_tnj1g7.jpg",
      technologies: ["React.js", "Node.js", "MySQL", "JWT", "Multer", "Nodemailer"],
      link: "https://youtu.be/i-0N-hek6lo",
      github: "https://github.com/ranajunaidhashim/Alumni-Management-System",
      featured: true,
      year: "2024"
    },
    {
      id: 3,
      title: "Groome - Salon Booking",
      category: "fullstack",
      description: "Salon appointment system with Angular components built from Figma designs and REST API integration.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      technologies: ["Angular", "Mantine UI", "Angular Forms", "REST APIs"],
      link: "#",
      github: "#",
      featured: false,
      year: "2023"
    },
    {
      id: 4,
      title: "Junaid's Diary Blog",
      category: "fullstack",
      description: "Responsive blog platform with user authentication, admin panel, CRUD posts, and Chart.js visualizations.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "Chart.js"],
      link: "#",
      github: "https://github.com/ranajunaidhashim/php-blog-website",
      featured: false,
      year: "2023"
    },
    {
      id: 5,
      title: "FreeSnapScores",
      category: "frontend",
      description: "Modern website on professional Snapchat growth services and responsive design.",
      image: "https://freesnapscores.com/assets/og-image.png",
      technologies: ["Next.js", "Node", "Typescript", "Automation"],
      link: "https://freesnapscores.com",
      github: "https://github.com/ranajunaidhashim/freesnapscores",
      featured: true,
      year: "2026"
    },
    {
      id: 6,
      title: "Portfolio Web",
      category: "frontend",
      description: "Modern SPA portfolio with animations, EmailJS integration, and responsive design.",
      image: "https://res.cloudinary.com/dsr70k3to/image/upload/v1687766926/Portfolio/ReactPortfolio_m2ieek.webp",
      technologies: ["React.js", "Framer Motion", "EmailJS", "CSS3"],
      link: "https://junaidrana.vercel.app",
      github: "https://github.com/ranajunaidhashim/React-Portfolio",
      featured: false,
      year: "2023"
    },
    {
      id: 7,
      title: "Solar Innovatio",
      category: "frontend",
      description: "Figma-to-React conversion for a solar energy company website with modern animations.",
      image: "https://res.cloudinary.com/dsr70k3to/image/upload/v1687764563/Portfolio/solar-innovatio_xe4nsf.webp",
      technologies: ["React.js", "Figma", "CSS3", "Responsive Design"],
      link: "https://solar-innovative.netlify.app/",
      github: "https://github.com/ranajunaidhashim/react-solar-innovative",
      featured: false,
      year: "2023"
    },
    {
      id: 8,
      title: "Weather Mode App",
      category: "frontend",
      description: "Real-time weather application with city search and live weather data integration.",
      image: "https://res.cloudinary.com/dsr70k3to/image/upload/v1687766930/Portfolio/react-weather-mode_lgm0ox.webp",
      technologies: ["React.js", "Weather API", "CSS3"],
      link: "https://weather-mode.vercel.app/",
      github: "#",
      featured: false,
      year: "2023"
    },
    {
      id: 9,
      title: "Hotel Management System",
      category: "fullstack",
      description: "C# WinForms desktop application for booking, billing, and customer management with ADO.NET.",
      image: "https://res.cloudinary.com/dsr70k3to/image/upload/v1687766930/Portfolio/palletfly_ako5ui.webp",
      technologies: ["C#", "WinForms", "ADO.NET", "MySQL", "Repository Pattern"],
      link: "#",
      github: "https://github.com/ranajunaidhashim/Hotel-Management-System",
      featured: false,
      year: "2022"
    },
    //     {
    //   id: 10,
    //   title: "Essendant E-Commerce",
    //   category: "frontend",
    //   description: "E-commerce clone for office supplies with React and Redux state management.",
    //   image: "https://res.cloudinary.com/dsr70k3to/image/upload/v1687766927/Portfolio/essendant_yzkv7i.webp",
    //   technologies: ["React.js", "Redux", "MUI", "REST APIs"],
    //   link: "https://essendant.vercel.app/",
    //   github: "https://github.com/ranajunaidhashim/Essendant-Clone",
    //   featured: false,
    //   year: "2023"
    // },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    // { key: "featured", label: "Featured" },
    // { key: "fullstack", label: "Full-Stack" },
    // { key: "frontend", label: "Frontend" },
    // { key: "enterprise", label: "Enterprise" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : activeFilter === "featured"
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="portfolio" id="portfolio">
      <motion.div 
        className="portfolio-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">Portfolio</span>
        <h2>Recent Projects</h2>
        <p>A showcase of my work and contributions</p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="portfolio-filters">
        {filters.map((filter) => (
          <button
            key={filter.key}
            className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div className="projects-grid" layout>
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        <HiExternalLink />
                      </a>
                    )}
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
                {project.featured && <span className="featured-badge">Featured</span>}
                <span className="year-badge">{project.year}</span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="project-tech">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="project-tech more">+{project.technologies.length - 4}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Portfolio;
