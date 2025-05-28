"use client";
import { useState } from "react";

export default function ScrambleText({
  text,
  locale,
}: {
  text: string;
  locale: string;
}) {
  const [displayed, setDisplayed] = useState(text);
  const LETTERS =
    locale === "en"
      ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      : "АБВГДЕЄЖЗІЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";

  const handleMouseEnter = () => {
    let iteration = 0;
    const original = text;
    const interval = setInterval(() => {
      setDisplayed(prev =>
        prev
          .split("")
          .map((char, i) => {
            if (i < iteration) return original[i];
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join("")
      );

      iteration += 1 / 3;

      if (iteration >= original.length) {
        clearInterval(interval);
        setDisplayed(original);
      }
    }, 30);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      className="cursor-pointer font-bold tracking-wide"
    >
      {displayed}
    </span>
  );
}
