"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Typewriter({ textDef }: { textDef: string }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < textDef.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + textDef[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, textDef]);

  return (
    <div className="text-base13 tab:text-lg13 pc:text-2xl font-medium uppercase whitespace-pre relative inline-block">
      {text}
      <AnimatePresence>
        <motion.span
          key={index}
          className="inline-block bg-title h-4 mb-[2px] w-2 tab:w-[10px] tab:h-[18px] pc:h-5  ml-2 align-bottom"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        />
      </AnimatePresence>
    </div>
  );
}
