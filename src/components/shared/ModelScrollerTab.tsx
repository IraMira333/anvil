"use client";

import { useEffect, useState } from "react";

import ModelViewer from "./ModelViewer";

export default function ModelScrollerTab() {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const anchorStart = document.getElementById("hero-model-anchor");
      const anchorEnd = document.getElementById("tab-about");

      if (!anchorStart || !anchorEnd) return;

      const startRect = anchorStart.getBoundingClientRect();
      const endRect = anchorEnd.getBoundingClientRect();

      //   const maxTranslate = 900;

      // Якщо модель ще не досягла зони — не рухати
      if (startRect.top > 0) {
        setTranslateY(0);
        return;
      }

      // Якщо модель пішла за межі кінцевого блоку — зафіксувати
      if (endRect.top <= 0) {
        const pos = 0 + endRect.top;
        console.log("🚀 ~ handleScroll ~ pos:", pos);

        setTranslateY(pos);
        return;
      }

      // Обраховуємо прогрес між цими точками
      //   const totalDistance = anchorEnd.offsetTop - anchorStart.offsetTop;
      //   const scrollPassed = window.scrollY - anchorStart.offsetTop;

      //   const clamped = Math.max(0, Math.min(scrollPassed / totalDistance, 1));
      //   setTranslateY(clamped * maxTranslate);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial run

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="hidden tab:block pc:hidden pointer-events-none fixed top-[232px] tab:top-[230px] pc:top-[260px] left-0 w-full z-50"
      style={{
        transform: `translateY(${translateY}px)`,
        transition: "transform 0.03s linear",
      }}
    >
      <div className="w-full max-w-[520px] tab:max-w-[700px] pc:max-w-[900px] mx-auto aspect-[288/170] tab:aspect-[258/170]">
        <ModelViewer />
      </div>
    </div>
  );
}
