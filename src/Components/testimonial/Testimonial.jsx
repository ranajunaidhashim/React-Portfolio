import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Senior Developer",
      role: "Speridian Technologies",
      review: "Junaid demonstrates exceptional technical skills and a keen eye for detail. His contributions to our Angular and AWS projects have been invaluable.",
      rating: 5,
    },
    {
      name: "Project Lead",
      role: "ASSA ABLOY HALO Project",
      review: "Outstanding work on the IoT door-lock system. His ability to handle complex microservices architecture and AWS Lambda functions is impressive.",
      rating: 5,
    },
    {
      name: "Team Lead",
      role: "Intelligent Software Solution",
      review: "Creative solutions and seamless collaboration throughout the Groome project. Excellent at converting Figma designs to pixel-perfect Angular components.",
      rating: 5,
    },
    {
      name: "Academic Supervisor",
      role: "BZU Multan - FYP",
      review: "The Alumni Management System showcased his full-stack capabilities. Strong understanding of database design and secure authentication.",
      rating: 5,
    },
  ];

  const avatarUrl = (name) => {
    const encoded = encodeURIComponent(name);
    return `https://ui-avatars.com/api/?name=${encoded}&background=ff075b&color=fff&bold=true`;
  };

  return (
    <section className="testimonials" id="testimonials">
      <motion.div 
        className="testimonials-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">Testimonials</span>
        <h2>What People Say</h2>
        <p>Feedback from colleagues and mentors who I've worked with</p>
      </motion.div>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1100: { slidesPerView: 3 }
        }}
        className="testimonials-slider"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="testimonial-rating">
                {[...Array(item.rating)].map((_, i) => (
                  <HiStar key={i} />
                ))}
              </div>
              <p className="testimonial-text">"{item.review}"</p>
              <div className="testimonial-author">
                <img src={avatarUrl(item.name)} alt={item.name} />
                <div className="author-info">
                  <span className="author-name">{item.name}</span>
                  <span className="author-role">{item.role}</span>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
