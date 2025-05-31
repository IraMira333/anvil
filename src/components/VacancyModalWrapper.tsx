"use client";
import { useState } from "react";

import { VacancyForm } from "@/components/VacancyForm";
import { SubmitFnType } from "@/types/modalProps";

import { ErrorMessage } from "./shared/Modal/ErrorMessage";
import { Modal } from "./shared/Modal/Modal";
import { SuccessMessage } from "./shared/Modal/SuccessMessage";

export const VacancyModalWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const notificationHandler = async (submitFn: SubmitFnType) => {
    try {
      await submitFn();
      setModalContent(<SuccessMessage />);
    } catch (error) {
      console.error(error);
      setModalContent(<ErrorMessage />);
    } finally {
      setIsOpen(true);
    }
  };

  return (
    <>
      <VacancyForm notificationHandler={notificationHandler} />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="w-[90%] min-w-[288px] h-auto max-w-[600px]">
          {modalContent}
        </div>
      </Modal>
    </>
  );
};
