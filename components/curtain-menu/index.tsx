import { ReactNode } from 'react';

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

export const Menu = ({ children, isOpen, top }: MenuProps) => {
  const disabled = top ? 'h-0 w-full' : 'w-0 h-full';

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
