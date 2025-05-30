"use client";
import { useEffect, useState } from "react";

import { IconUp } from "../Icons/IconUp";

export const UpToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;

      if (scrolled > 800) {
        setIsVisible(true);
      } else if (scrolled <= 800) {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <button
        aria-label="scroll to top button"
        className={`${isVisible ? "block" : "hidden"} fixed z-20 bottom-[60px] tab:bottom-[164px] right-[8px] tab:right-[28px] pc:right-[60px] 
                w-[48px] h-[48px] tab:w-[64px] tab:h-[64px] p-1 tab:p-3 rounded-full after:content-[''] after:absolute after:top-0 after:left-0 
                after:z-[-10] after:w-[48px] after:h-[48px] tab:after:w-[64px] tab:after:h-[64px] after:rounded-full after:bg-purple-100 
                after:bg-opacity-40 after:blur-[2px] outline-none`}
        onClick={scrollToTop}
      >
        <IconUp />
      </button>
    </>
  );
};
