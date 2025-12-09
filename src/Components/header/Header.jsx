import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "Intro", label: "Home", href: "/#Intro" },
    { to: "about", label: "About", href: "/#about" },
    { to: "experience", label: "Experience", href: "/#experience" },
    { to: "services", label: "Services", href: "/#services" },
    { to: "portfolio", label: "Projects", href: "/#portfolio" },
    { to: "testimonials", label: "Testimonials", href: "/#testimonials" },
    { to: "contact", label: "Contact", href: "/#contact" },
  ];

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        <motion.a
          href="/"
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Junaid</span>
          <span className="logo-slash">/</span>
          <span className="logo-bracket">&gt;</span>
        </motion.a>

        <nav className="nav-desktop">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={link.to}
                href={link.href}
                spy={true}
                smooth={true}
                offset={-80}
                duration={0}
                className="nav-link"
                activeClass="nav-link-active"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          className="header-actions"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="contact"
            href="/#contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={0}
            className="hire-btn"
          >
            Hire Me
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpened(!menuOpened)}
            aria-label="Toggle menu"
          >
            {menuOpened ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {menuOpened && (
          <motion.nav
            className="nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  to={link.to}
                  href={link.href}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={0}
                  className="nav-link-mobile"
                  onClick={() => setMenuOpened(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
