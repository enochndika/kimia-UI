import { useState } from 'react';
import { Button } from '../../button';
import { Menu } from '../../curtain-menu';

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
          className="absolute top-3 right-3 text-5xl text-white cursor-pointer"
          onClick={toggle}
        >
          &times;
        </button>
        <Menu.Container>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Services</Menu.Item>
          <Menu.Item>Components</Menu.Item>
        </Menu.Container>
      </Menu>
    </div>
  );
};

export const CurtainMenuLeft = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-8">
      <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-3">
        Transition from left
      </h2>
      <Button color="dark" onClick={toggle}>
        Open
      </Button>
      <Menu isOpen={isOpen}>
        <button
          className="absolute top-3 right-3 text-5xl text-white cursor-pointer"
          onClick={toggle}
        >
          &times;
        </button>
        <Menu.Container>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Services</Menu.Item>
          <Menu.Item>Components</Menu.Item>
        </Menu.Container>
      </Menu>
    </div>
  );
};
