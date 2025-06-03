"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

import { IconClose } from "@/components/Icons/IconClose";
import { IconEmpty } from "@/components/Icons/IconEmpty";
import { IconLogo } from "@/components/Icons/IconLogo";

import { Portal } from "./Portal";
// type AnimationPhase = "enter" | "exit";

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
            key={isOpen ? "modal-enter" : "modal-exit"}
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
              transition={{ duration: 1.5, ease: "easeInOut" }}
              onClick={onClose}
            />

            {/* Права шторка */}
            <motion.div
              className="absolute right-0 top-0 h-full w-1/2 bg-blackCustom origin-right"
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1 },
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              onClick={onClose}
            />

            {/* Модальне вікно */}
            <motion.div
              className="relative z-10 w-screen bg-transparent overflow-y-auto h-screen"
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.95,
                  transition: {
                    delay: 0, // без затримки на зникнення
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 1.5, // затримка лише на появу
                    duration: 1,
                    ease: "easeInOut",
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-11 tab:top-[46px] pc:top-[60px] right-4 tab:right-12 pc:right-[56px] w-11 h-11 tab:w-12 tab:h-12 flex justify-center items-center text-title hover:bg-radial-green-50 hover:text-hoverAccent"
                aria-label="Close modal"
              >
                <IconEmpty className="w-11 h-11 tab:w-12 tab:h-12" />
                <IconClose className="absolute" />
              </button>
              <IconLogo className="absolute top-12 tab:top-[56px] pc:top-[70px] left-4 tab:left-12 pc:left-[60px] w-[72px] tab:w-[92px]" />
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
