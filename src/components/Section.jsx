"use client";

import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Section({ id, title, center, children, showDivider }) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 py-14 ${showDivider ? "relative" : ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={sectionVariants}
    >
      {showDivider && (
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" aria-hidden />
      )}
      <div className={`container ${center ? "flex flex-col items-center text-center" : ""}`}>
        <motion.h2
          variants={itemVariants}
          className="text-xl font-semibold tracking-tight text-zinc-100"
        >
          {title}
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className={`mt-6 ${center ? "w-full" : ""}`}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}
