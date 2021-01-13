import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

interface MenuProps extends Props {
  isOpen: boolean;
  top?: boolean;
}
const Menu = ({ children, isOpen, top }: MenuProps) => {
  const position = top ? "h-0 w-full" : "w-0 h-full";

  const active = `bg-black h-full w-full fixed z-10 top-0 left-0 overflow-x-hidden md:overflow-hidden transition-all duration-500`;
  const inactive = `bg-black ${position}  fixed z-10 top-0 left-0 overflow-x-hidden md:overflow-hidden transition-all duration-500 `;

  return <div className={isOpen ? active : inactive}>{children}</div>;
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
      <button
        onClick={toggle}
        className="text-white focus:outline-none shadow m-1.5 rounded px-6 py-2 font-medium transition ease-in duration-200 bg-indigo-900"
      >
        Open
      </button>
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
      <button
        onClick={toggle}
        className="text-white focus:outline-none shadow m-1.5 rounded px-6 py-2 font-medium transition ease-in duration-200 bg-indigo-900"
      >
        Open
      </button>
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
