import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
// import shehzad from "../../img/tshahzad.jpg";
// import adnan from "../../img/testadnan.jpg";
// import saftain from "../../img/saftaincpy.jpg";
// import yasir from "../../img/yasircpy.jpg";
import { motion } from "framer-motion";

const Testimonial = () => {
  const clients = [
    {
      img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1681752141/Portfolio/tshahzad_hvy1zu.jpg",
      // img: shehzad,
      cname: "Muhammad Shehzad",
      dsg: "MIT Director, Mentor",
      desc: "“Dedicated, skilled, and a pleasure to work with. Rana consistently delivers exceptional results.”",
    },
    {
      img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1681752141/Portfolio/testadnan_ojrzq8.jpg",
      // img: adnan,
      cname: "Muhammad Adnan",
      dsg: "Web Developer",
      desc: "“Excellent job! I'm glad I decided to work with Rana. He exceeded my expectations.”",
    },
    {
      img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1681752141/Portfolio/saftaincpy_rg0hwo.jpg",
      // img: saftain,
      cname: "Saftain Noor",
      dsg: "Client",
      desc: "“Highly recommended! Junaid delivered a top-notch, SEO-friendly website and collaborated exceptionally.”",
    },
    {
      img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1681752141/Portfolio/yasircpy_kopisj.jpg",
      cname: "Yasir M.",
      dsg: "Cyber Security Expert",
      desc: "“Flawless implementation of website changes and timely delivery. Rana ensured our satisfaction.”",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients & Mentors </span>
        <span>Love </span>
        <span>My Work</span>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={true}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0.6 }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}
                className="testimonial"
              >
                <img src={client.img} alt="" />
                <span>{client.cname}</span>
                <span>{client.dsg}</span>
                <span>{client.desc}</span>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
