"use client";
import { IconEmpty } from "../Icons/IconEmpty";
import { IconUp } from "../Icons/IconUp";

export const UpToTopStatic = ({ className }: { className?: string }) => {
  return (
    <button
      aria-label="scroll to top button"
      className={`group ${className} bg-transparent hover:bg-radial-green-100 text-text hover:text-hoverAccent`}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <IconEmpty className="w-11 h-11 pc:w-12 pc:h-12" />
      <IconUp className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
    </button>
  );
};
