import React from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import "./Services.css";
import { BsCodeSlash } from "react-icons/bs";
import { ImMobile } from "react-icons/im";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { BiCustomize } from "react-icons/bi";
import { MdSettingsSuggest } from "react-icons/md";

const Services = () => {
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      <div className="s-services">
        <span>My Services</span>
        <h2>What I Bring to the Table</h2>
      </div>

      {/* card bootstrap */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="c-cards"
      >
        {/* Full-Stack Development */}
        <motion.div transition={transition} whileHover={{ scale: 1.05 }}>
          <Card className="cardshadow" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Subtitle className="mb-2 s-cardt">
                <BsCodeSlash className="s-cardi" />
              </Card.Subtitle>
              <Card.Title className="s-cardt">Full-Stack Development</Card.Title>
              <Card.Text>
                Building scalable web & cloud solutions with React, Node.js, and AWS services.
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>

        {/* UI/UX & Motion Design */}
        <motion.div transition={transition} whileHover={{ scale: 1.05 }}>
          <Card className="cardshadow" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Subtitle className="mb-2 s-cardt">
                <BiCustomize className="s-cardi" />
              </Card.Subtitle>
              <Card.Title className="s-cardt">UI/UX & Motion Design</Card.Title>
              <Card.Text>
                Crafting engaging interfaces and animations from Figma designs to React components.
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>

        {/* Technical Documentation */}
        <motion.div transition={transition} whileHover={{ scale: 1.05 }}>
          <Card className="cardshadow" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Subtitle className="mb-2 s-cardt">
                <HiOutlinePencilSquare className="s-cardi" />
              </Card.Subtitle>
              <Card.Title className="s-cardt">Technical Documentation</Card.Title>
              <Card.Text>
                Writing clear docs and guides to support maintainability and team collaboration.
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>

        {/* Responsive & Accessibility */}
        <motion.div transition={transition} whileHover={{ scale: 1.05 }}>
          <Card className="cardshadow" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Subtitle className="mb-2 s-cardt">
                <ImMobile className="s-cardi" />
              </Card.Subtitle>
              <Card.Title className="s-cardt">Responsive & Accessible</Card.Title>
              <Card.Text>
                Designing mobile-first, inclusive experiences that meet WCAG standards.
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>

        {/* Performance Optimization */}
        <motion.div transition={transition} whileHover={{ scale: 1.05 }}>
          <Card className="cardshadow" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Subtitle className="mb-2 s-cardt">
                <MdSettingsSuggest className="s-cardi" />
              </Card.Subtitle>
              <Card.Title className="s-cardt">Performance Optimization</Card.Title>
              <Card.Text>
                Improving load times and system reliability for seamless user experiences.
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
