import React from "react";
import "./Header.css";
import { Link, animateScroll as scroll } from "react-scroll";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Fade as Hamburger } from "hamburger-react";

const Header = ({ menuOpen, setMenuOpen }) => {
  const handleClick = () => {
    scroll.scrollToTop();
  };

  return (
    <nav>
      <NavContent
        handleClick={handleClick}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </nav>
  );
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  const handleClick = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <div className="n-listPhone">
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link
              onClick={() => {
                setMenuOpen(false);
                handleClick();
              }}
              to="home"
              activeClass="active"
              spy={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              activeClass="active"
              to="services"
              spy={true}
            >
              Serivces
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              activeClass="active"
              to="portfolio"
              spy={true}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              activeClass="active"
              to="testimonial"
              spy={true}
            >
              Testimonial
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="contact"
              activeClass="active"
              spy={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const NavContent = ({ menuOpen, setMenuOpen, handleClick }) => (
  <>
    <div className="n-wrapper" id="navbar">
      <div className="n-left">
        <div className={menuOpen ? "nn-name" : "n-name"}>
          RA<span>NA</span>
        </div>
      </div>

      <div className="n-right">
        <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <Hamburger toggled={menuOpen} toggle={setMenuOpen}  size={20} color="#ff075b" />
          {/* {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />} */}
        </button>
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link
                activeClass="active"
                to="home"
                onClick={handleClick}
                spy={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="services" spy={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="portfolio" spy={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="testimonial" spy={true}>
                Testimonial
              </Link>
            </li>
            <li>
              <Link to="contact" activeClass="active" spy={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default Header;
