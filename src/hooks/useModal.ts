import { useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"buy" | "sell">("sell");

  return {
    isModalOpen,
    setIsModalOpen,
    modalType,
    setModalType,
  };
};
