"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

import { IconClose } from "@/components/Icons/IconClose";
import { IconEmpty } from "@/components/Icons/IconEmpty";
import { IconLogo } from "@/components/Icons/IconLogo";

import { Portal } from "./Portal";
type AnimationPhase = "enter" | "exit";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export const Modal = ({ children, onClose, isOpen }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <Portal id="modal">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[55] flex items-center justify-center"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Ліва шторка */}
            <motion.div
              className="absolute left-0 top-0 h-full w-1/2 bg-blackCustom origin-left"
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1 },
              }}
              transition={({ custom }: { custom: AnimationPhase }) =>
                custom === "exit"
                  ? { delay: 2, duration: 3, ease: "easeInOut" }
                  : { duration: 3, ease: "easeInOut" }
              }
              onClick={onClose}
            />

            {/* Права шторка */}
            <motion.div
              className="absolute right-0 top-0 h-full w-1/2 bg-blackCustom origin-right"
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1 },
              }}
              transition={({ custom }: { custom: AnimationPhase }) =>
                custom === "exit"
                  ? { delay: 2, duration: 3, ease: "easeInOut" }
                  : { duration: 3, ease: "easeInOut" }
              }
              onClick={onClose}
            />

            {/* Модальне вікно */}
            <motion.div
              className="relative z-10 w-screen bg-transparent flex justify-center items-center p-6 overflow-y-auto h-screen"
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={({ custom }: { custom: AnimationPhase }) =>
                custom === "exit"
                  ? { duration: 1, ease: "easeIn" }
                  : { delay: 4, duration: 1, ease: "easeIn" }
              }
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-11 h-11 p-1 flex justify-center items-center text-title"
                aria-label="Close modal"
              >
                <IconEmpty className="w-11 h-11" />
                <IconClose className="absolute" />
              </button>
              <IconLogo className="absolute top-4 left-4" />
              <div className="w-[90%] min-w-[288px] h-auto max-w-[600px]">
                {children}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
