import { useState } from 'react';
import { Button } from '@/packages/button';
import { Menu } from '../index';

export const CurtainMenuTop = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-8">
      <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-3">
        Transition from top
      </h2>
      <Button color="indigo" onClick={toggle}>
        Open
      </Button>
      <Menu isOpen={isOpen} top={true}>
        <button
          aria-label="Close"
          className="absolute top-3 right-3 text-5xl text-white cursor-pointer"
          onClick={toggle}
        >
          &times;
        </button>
        <Menu.Container>
          <Menu.Item href="#">Home</Menu.Item>
          <Menu.Item href="#">Contact</Menu.Item>
          <Menu.Item href="#">Services</Menu.Item>
          <Menu.Item href="#">Components</Menu.Item>
        </Menu.Container>
      </Menu>
    </div>
  );
};
