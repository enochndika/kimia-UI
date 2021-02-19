import { useState } from "react";

export const useOpenModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return { toggle, isOpen };
};
