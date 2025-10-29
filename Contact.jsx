import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Get in Touch !!
      </motion.h2>
      <div className={styles.links}>
        <motion.a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=panpaliyamukul1234@gmail.com&su=Hello%20Mukul&body=I%20saw%20your%20portfolio!"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
          style={{ textDecoration: "none" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope className={styles.icon} /> Email Me
        </motion.a>


        {/* LinkedIn Button */}
                <motion.a
                  href="https://www.linkedin.com/in/mukul-panpaliya-7b072a213/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cta}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ textDecoration: "none" }}
                >
                  <FaLinkedin className={styles.icon} /> LinkedIn
                </motion.a>
      </div>
    </section>
  );
}
