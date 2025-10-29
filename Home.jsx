import React from "react";
import { motion } from "framer-motion";
import styles from "./Home.module.css";
import myPhoto from "../assets/mukul_portfolio.png"


export default function Home() {
    const handleScrollToProjects = () => {
        const section = document.getElementById("projects");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
    }
  return (
    <section className={styles.hero}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m <span className={styles.name}>Mukul</span> 👋
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Software Developer | React | Java | Gen AI Enthusiast
      </motion.p>
      <motion.button
        className={styles.cta}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const section = document.getElementById("projects");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        View My Work
      </motion.button>

      <motion.div
              className={styles.photoContainer}
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              <motion.img
                src={myPhoto}
                alt="Profile"
                className={styles.photo}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
            </motion.div>


    </section>
  );
}
