import React from "react";
import "./Loader.css";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="loader-container">
      <motion.div
        className="loader-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loader-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Junaid</span>
          <span className="logo-slash">/</span>
          <span className="logo-bracket">&gt;</span>
        </div>
        <div className="loader-bar">
          <motion.div
            className="loader-progress"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
        <p className="loader-text">Loading portfolio...</p>
      </motion.div>
    </div>
  );
};

export default Loader;
