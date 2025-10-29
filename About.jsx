import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        I’m a Software Developer with experience in React, Java, Spring Boot, Devops and Kubernetes.
        I specialize in building modern UIs and AI-powered data modernization tools.
      </motion.p>
    </section>
  );
}
