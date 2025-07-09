import React, { useRef, useState } from "react";
import "./Contact.css";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const transition = { duration: 2, type: "spring" };
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    setSending(true);
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs
      .sendForm(serviceID, templateID, form.current, userID)
      .then(
        (result) => {
          e.target.reset();
          toast.success("Message Sent");
        },
        (error) => {
          console.error(error.text);
          toast.error("Error sending message");
        }
      )
      .finally(() => setSending(false));
  }

  return (
    <div className="contact-form" id="contact">
      <div className="c-contactt">
        <span>Contact me</span>
        <span>
          Let's talk about your website or project. Send a message and get in touch.
        </span>
      </div>

      <div className="c-form">
        <div className="c-right">
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={variants}
            initial="hidden"
            whileInView="show"
          >
            <motion.input
              variants={item}
              type="text"
              name="user_name"
              className="user"
              placeholder="Name"
              required
              disabled={sending}
            />
            <motion.input
              variants={item}
              type="email"
              name="user_email"
              className="user"
              placeholder="Email"
              required
              disabled={sending}
            />
            <motion.textarea
              variants={item}
              name="message"
              className="user"
              placeholder="Your Message"
              required
              disabled={sending}
            />
            <motion.input
              variants={item}
              type="submit"
              value={sending ? "Sending..." : "Send Message"}
              className="a-btn"
              disabled={sending}
            />
          </motion.form>
        </div>

        <div className="c-left">
          <span>My Phone</span>
          <div className="c-phone">
            <ImPhone className="c-icon" />
            <a href="tel:+923007378823">+923007378823</a>
            <motion.a
              title="Contact via Whatsapp"
              className="whatsapp"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=+923007378823"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <RiWhatsappFill />
            </motion.a>
          </div>

          <span>Email Address</span>
          <div className="c-phone">
            <MdEmail className="c-icon" />
            <a href="mailto:ranajunaidhashim6@gmail.com">ranajunaidhashim6@gmail.com</a>
          </div>
          <motion.img
            alt="HELLO"
            title="🤝"
            src="https://res.cloudinary.com/dsr70k3to/image/upload/v1687765749/Portfolio/Hello-img_pjzksy.webp"
            initial={{ opacity: 0 }}
            whileInView={{ x: [100, 0, 0], opacity: 1 }}
            transition={transition}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
