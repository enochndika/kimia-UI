import { useState } from 'react';

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return { toggle, isOpen };
};
