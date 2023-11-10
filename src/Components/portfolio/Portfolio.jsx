import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";

const images = [
  {
    img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1687766926/Portfolio/ReactPortfolio_m2ieek.webp",
    description: "React Portfolio - portfolio website built with React",
    link: "/",
  },
  {
    img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1687766928/Portfolio/smmarketing_gxkcwv.webp",
    description: "SM Marketing - Social Media services Platform web app.",
    link: "https://sm-marketing.vercel.app/",
  },
  {
    img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1687766930/Portfolio/react-weather-mode_lgm0ox.webp",
    description:
      "Weather Mode - a simple real-time weather website to check any city live weather",
    link: "https://weather-mode.vercel.app/",
  },
  {
    img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1687764563/Portfolio/AshleyDelBello_clone_ekipgf.webp",
    description:
      "Life + Business coach - Ashley website converted from Wordpress to ReactJs.",
    link: "https://ashley-react.netlify.app/",
  },
  {
    img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1687764563/Portfolio/solar-innovatio_xe4nsf.webp",
    description:
      "Solar Energy Company- converted Figma design into a ReactJs website",
    link: "https://solar-innovative.netlify.app/",
  },
  {
    img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1687766927/Portfolio/essendant_yzkv7i.webp",
    description: "Essendant - Clone of E-commerce website for office supplies",
    link: "https://essendant.vercel.app/",
  },
  {
    img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1687766928/Portfolio/MouseMove_p7nvxv.webp",
    description:
      "React Mouse Move - Interactive animation that follows mouse movement to use in projects.",
    link: "https://react-mouse-move.vercel.app/",
  },
  {
    img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1687766930/Portfolio/darazshop_yt4e2x.webp",
    description:
      "Daraz Shop - E-commerce platform for clothing. An e-commerce website built with React and Redux.",
    link: "https://shoppingcart-daraz.vercel.app/",
  },
  {
    img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1687766930/Portfolio/palletfly_ako5ui.webp",
    description:
      "PalletFly - Ecom Logistic Company Website Clone. An e-commerce website for wholesale merchandise",
    link: "/",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <span>Recent Projects</span>
      <p className="pclick">Click to view</p>
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={30}
        autoplay
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
        navigation
        className="portfolio-slider"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="pcontainer">
              <motion.img
                className="pimg"
                src={item.img}
                alt="Loading Project"
                whileTap={{ scale: 0.95 }}
              />
              <div className="poverlay">
                <div className="ptext">
                  <h4>Description</h4>
                  <p style={{ fontSize: "18px" }}>{item.description}</p>
                  <a href={item.link} rel="noopener noreferrer" target="_blank">
                    <button className="pdtn">
                      <HiExternalLink />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
