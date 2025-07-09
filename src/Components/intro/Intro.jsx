import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "./Intro.css";
import Typewriter from "typewriter-effect";
import { RiFacebookFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";

const Intro = () => {
  const imgref = useRef();
  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     const translateX = -(e.clientX * 0.15);
  //     const translateY = -(e.clientY * 0.15);
  //     imgref.current.style.transform = ` translate(-50%, -50%) translate(${translateX}px, ${translateY}px)`;

  //     // imgref.current.style.transform = `translate(${e.clientX * 0.05}px, ${e.clientY * 0.05}px)`;

  //   console.log(translateX, translateY);

  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  const transition = { duration: 2, type: "spring" };
  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I am</span>
          <div className="iiflex">
            <motion.span
              style={{ flexDirections: "row" }}
              initial={{ opacity: 0 }}
              whileInView={{ x: [-100, 0, 0], opacity: 1 }}
              transition={transition}
            >
              Junaid
            </motion.span>
            &nbsp;
            <motion.span
              style={{ flexDirections: "row" }}
              whileInView={{ y: [-100, 0, 0], opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={transition}
            >
              Rana
            </motion.span>
          </div>
          <span>
            A Professional &nbsp;
            <Typewriter
              options={{
                strings: [
                  "Full‑Stack Developer",
                  "Tech Problem Solver",
                  "AWS Enthusiast",
                  "Software Engineer",
                ],
                delay: "40",
                deleteSpeed: "30",
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <div className="mybtn-container i-btn">
          <Link to="contact" spy={true}>
            <span>Contact</span>
          </Link>
          <Link to="about" spy={true}>
            <span>Resume</span>
          </Link>
        </div>
      </div>

      {/* right image side */}

      <div className="introimg i-right">
        <img
          // className="introimg"
          ref={imgref}
          src="https://res.cloudinary.com/dsr70k3to/image/upload/v1687612965/Portfolio/Rana_Junaid_Hashim.jpg"
          style={{
            // height: "100%",
            // maxHeight:"100%",
            // height:"auto",
            objectFit: "cover",
            // right: "65px",
            // top: "60px",
            // zIndex: "10",
          }}
          alt=""
        />
      </div>

      <div className="header-social">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-social-icon">
                <ul>
                  <li>
                    <a
                      title="Facebook | Junaid Rajput"
                      href="https://facebook.com/ranajunaidhashim"
                    >
                      <RiFacebookFill />
                    </a>
                  </li>
                  <li>
                    <a
                      title="GitHub | Rana Junaid Hashim"
                      href="https://github.com/RanaJunaidHashim"
                    >
                      <RiGithubFill />
                    </a>
                  </li>
                  <li>
                    <a
                      title="LinkedIn | Junaid Rana"
                      href="https://www.linkedin.com/in/junaid-rana-40917b141/"
                    >
                      <RiLinkedinFill />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
