"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};
export const AnimatedCard = ({ children }: PropsWithChildren) => {
  return (
    <motion.li
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className="mx-auto tab:mx-0"
    >
      {children}
    </motion.li>
  );
};
