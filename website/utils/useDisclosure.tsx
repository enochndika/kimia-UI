import { useState } from 'react';

const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return { toggle, isOpen };
};

export default useDisclosure;
