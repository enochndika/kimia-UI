import { useState } from 'react';

const useOpenModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return { toggle, isOpen };
};

export default useOpenModal;
