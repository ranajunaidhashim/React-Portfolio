import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import "./App.css";
import Header, { HeaderPhone } from "./Components/header/Header";
import Services from "./Components/services/Services";
import Portfolio from "./Components/portfolio/Portfolio";
import Testimonial from "./Components/testimonial/Testimonial";
import Contact from "./Components/contact/Contact";
import Footer2 from "./Components/footer/Footer2";
import Intro from "./Components/intro/Intro";
import About from "./Components/about/About";
import { Toaster } from "react-hot-toast";
import ParticlesEffect from "./Components/Particles/ParticlesEffect";

function App() {
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);
  const [menuOpen, setMenuOpen] = useState(false);

  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <ParticlesEffect />
          <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Intro />
          <About />
          <Services />
          <Portfolio />
          <Testimonial />
          <Contact />
          <Footer2 />
          <Toaster />
        </div>
      )}
    </>
  );
}

export default App;