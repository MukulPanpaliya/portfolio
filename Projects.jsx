import React from "react";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";

export default function Projects() {
  const projects = [
    { title: "AI Travel Planner", desc: "Smart itinerary planner using Gen AI" },
    { title: "Hotel Management System", desc: "Hotel Management system using CRUD" },
    { title: "Portfolio Site", desc: "React + Motion-based personal website" },
  ];

  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.heading}>My Projects 🚀</h2>
      <div className={styles.grid}>
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className={styles.card}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
