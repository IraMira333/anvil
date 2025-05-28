"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoopFadeMotionText({ text }: { text: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % text.length);
    }, 200);

    return () => clearInterval(interval);
  }, [text.length]);

  return (
    <p>
      {text.split("").map((char, i) => (
        <motion.span
          key={i + char}
          animate={{
            opacity: i === activeIndex ? 0.5 : 1,
            transition: { duration: 0.2 },
            color: i === activeIndex ? "#63D706" : "#F8F8F8",
          }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
}
