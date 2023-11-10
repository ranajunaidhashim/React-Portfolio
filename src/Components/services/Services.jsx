import React from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import "./Services.css";
import { BsCodeSlash } from "react-icons/bs";
import { ImMobile } from "react-icons/im";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import {BiCustomize} from "react-icons/bi"
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
        <h2>what can you expect from me?</h2>
      </div>

      {/* card bootstrap */}
      <motion.div  initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        // delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}  className="c-cards">

        <motion.div    transition={transition} whileHover={{scale:1.05 }}>

          <Card className="cardshadow"  style={{ width: "18rem"}}>
            <Card.Body>
              <Card.Subtitle className="mb-2  s-cardt">
                <BiCustomize className=" s-cardi " />
              </Card.Subtitle>
              <Card.Title  className="s-cardt ">Web Design</Card.Title>
              <Card.Text  >
              I like to craft solid and scalable front-end products with great user experiences.
              {/* I'm committed to creating fluent user experiences while staying fashionable. */}
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
        <motion.div  transition={transition} whileHover={{scale:1.05 }}>
          <Card className="cardshadow"   style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Subtitle className="mb-2  s-cardt ">
                <BsCodeSlash  className=" s-cardi "/>
              </Card.Subtitle>

              <Card.Title className="s-cardt">Development</Card.Title>
              <Card.Text>
              I like to code things from scratch, and enjoy bringing ideas to life in the browser.
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
       
        <motion.div  transition={transition} whileHover={{scale:1.05 }}>
          <Card className="cardshadow" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Subtitle className="mb-2  s-cardt ">
                <HiOutlinePencilSquare  className="s-cardi"/>
              </Card.Subtitle>

              <Card.Title className="s-cardt">Visual Designs</Card.Title>
              <Card.Text>
              I value simple content structure, clean design patterns, and thoughtful interactions.
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
        <motion.div  transition={transition} whileHover={{scale:1.05 }}>
          <Card className="cardshadow" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Subtitle className="mb-2  s-cardt  ">
                <ImMobile className=" s-cardi "  />
              </Card.Subtitle>

              <Card.Title className="s-cardt">Responsive Design</Card.Title>
              <Card.Text>
              A responsive design makes your website accessible to all users, regardless of their device.
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
        <motion.div  transition={transition} whileHover={{scale:1.05 }}>
          <Card className="cardshadow"  style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Subtitle className="mb-2  s-cardt ">
                <MdSettingsSuggest className=" s-cardi "  />
              </Card.Subtitle>

              <Card.Title className="s-cardt">Customization</Card.Title>
              <Card.Text>
              I'll create a custom-designed website that perfectly meets your web design requirements.
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
