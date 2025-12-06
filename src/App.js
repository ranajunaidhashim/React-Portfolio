import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import "./App.css";
import Header from "./Components/header/Header";
import Services from "./Components/services/Services";
import Portfolio from "./Components/portfolio/Portfolio";
import Testimonial from "./Components/testimonial/Testimonial";
import Contact from "./Components/contact/Contact";
import Footer2 from "./Components/footer/Footer2";
import Intro from "./Components/intro/Intro";
import About from "./Components/about/About";
import Experience from "./Components/experience/Experience";
import ParticlesEffect from "./Components/Particles/ParticlesEffect";
import { Toaster } from "react-hot-toast";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="app">
          <ParticlesEffect />
          <Header />
          <main>
            <Intro />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonial />
            <Contact />
          </main>
          <Footer2 />
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#0f172a",
                color: "#fff",
                borderRadius: "12px",
                padding: "16px",
              },
              success: {
                iconTheme: {
                  primary: "#ff075b",
                  secondary: "#fff",
                },
              },
            }}
          />
        </div>
      )}
    </>
  );
}

export default App;
