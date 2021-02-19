import { ReactNode, useState } from "react";
import { Button } from "../button";

interface Props {
  children: ReactNode;
}

interface MenuProps extends Props {
  isOpen: boolean;
  top?: boolean;
}

const className = {
  default: `bg-black fixed z-10 top-0 left-0 overflow-x-hidden md:overflow-hidden transition-all duration-500`,
  active: `h-full w-full`,
};

const Menu = ({ children, isOpen, top }: MenuProps) => {
  const disabled = top ? "h-0 w-full" : "w-0 h-full";

  return (
    <div
      className={
        isOpen
          ? `${className.default} ${className.active}`
          : `${className.default} ${disabled}`
      }
    >
      {children}
    </div>
  );
};
Menu.Container = ({ children }: Props) => (
  <div className="relative top-1/4 w-full text-center mt-8">{children}</div>
);

Menu.Item = ({ children }: Props) => (
  <div className="p-2 ">
    <a className="text-3xl text-gray-400 cursor-pointer hover:text-white">
      {children}
    </a>
  </div>
);

export const CurtainMenuTop = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-20 mb-3">
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
    </>
  );
};

export const CurtainMenuLeft = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-12 mb-3">
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
    </>
  );
};
