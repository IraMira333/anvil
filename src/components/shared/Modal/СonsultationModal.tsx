"use client";

import { useState } from "react";

import { VacancyForm } from "@/components/VacancyForm";

import { Button } from "../Button";
import { Modal } from "./Modal";

export const ConsultationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <VacancyForm />
      </Modal>
    </>
  );
};
