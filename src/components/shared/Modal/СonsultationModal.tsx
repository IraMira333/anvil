"use client";
import { useState } from "react";

import { SubmitFnType } from "@/types/modalProps";

import { Button } from "../Button";
import { ConsultationForm } from "./ConsultationForm";
import { ErrorMessage } from "./ErrorMessage";
import { Modal } from "./Modal";
import { SuccessMessage } from "./SuccessMessage";

export const ConsultationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setIsSuccess(false);
  };

  const handleErrorModalClose = () => {
    setIsErrorModalOpen(false);
  };

  const notificationHandler = async (submitFn: SubmitFnType) => {
    try {
      await submitFn();
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setIsErrorModalOpen(true);
    }
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} />

      <Modal isOpen={isOpen} onClose={handleClose}>
        {isSuccess ? (
          <SuccessMessage />
        ) : (
          <div className="w-[90%] min-w-[288px] h-auto max-w-[600px] mx-auto mt-[120px] tab:mt-[138px] pc:mt-[140px] pb-[100px]">
            <ConsultationForm notificationHandler={notificationHandler} />
          </div>
        )}
      </Modal>

      <Modal isOpen={isErrorModalOpen} onClose={handleErrorModalClose}>
        <ErrorMessage />
      </Modal>
    </>
  );
};
