import { useState } from "react";

export const useOpenModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return { toggle, isOpen };
};
