import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

const Testimonial = () => {
  const testimonials = [
    {
      img: "https://avatar.iran.liara.run/public/90",
      name: "Alice Thompson",
      role: "Product Manager",
      review: "“Outstanding attention to detail and timely delivery—truly exceptional work.”",
    },
    {
      img: "https://avatar.iran.liara.run/public/21",
      name: "Bob Martinez",
      role: "Software Engineer",
      review: "“Innovative and reliable—his technical skills transformed our project.”",
    },
    {
      img: "https://avatar.iran.liara.run/public/62",
      name: "Clara Lee",
      role: "UX Designer",
      review: "“Creative solutions and seamless collaboration throughout the design process.”",
    },
    {
      img: "https://avatar.iran.liara.run/public/13",
      name: "David Kim",
      role: "Marketing Strategist",
      review: "“Professional, responsive, and delivered exactly what we needed for our campaign.”",
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
        className="t-slider"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              initial={{ opacity: 0.6 }}
              whileTap={{ scale: 0.9 }}
              whileInView={{ opacity: 1 }}
              className="testimonial"
            >
              <img src={item.img} alt={item.name} />
              <span className="t-name">{item.name}</span>
              <span className="t-role">{item.role}</span>
              <span className="t-desc">{item.review}</span>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
