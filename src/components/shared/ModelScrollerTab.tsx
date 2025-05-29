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

      if (startRect.top > 0) {
        setTranslateY(0);
        return;
      }

      if (endRect.top <= 0) {
        const pos = 0 + endRect.top;

        setTranslateY(pos);
        return;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className=" pc:hidden pointer-events-none fixed top-[208px] tab:top-[220px] pc:top-[250px] left-0 w-full z-[5]"
      style={{
        transform: `translateY(${translateY}px)`,
        transition: "transform 0.03s linear",
      }}
    >
      <div className="w-full max-w-[520px] tab:max-w-[700px] pc:max-w-[900px] mx-auto aspect-[288/170] tab:aspect-[258/170] ">
        <ModelViewer />
      </div>
    </div>
  );
}
