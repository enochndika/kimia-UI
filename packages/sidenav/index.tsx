import { ReactNode, useEffect, useRef } from 'react';

interface Props {
  children: ReactNode;
}

interface LinkProps extends Props {
  href: string;
}
interface SidenavProps extends Props {
  isOpen: boolean;
  position?: 'left' | 'right';
  toggle: (value: any) => void;
  closeOnClickOutside?: boolean;
}
const positions = {
  activeLeft: `block h-screen fixed z-20 top-0 left-0 w-7/12 md:w-60 bg-gray-800 text-white overflow-x-hidden transition-all ease duration-200`,
  inactiveLeft: `block h-screen fixed z-20 top-0 left-0 w-0  bg-gray-800 text-white overflow-x-hidden transition-all ease duration-200`,
  activeRight: `block h-screen fixed z-20 top-0 right-0 w-7/12 md:w-60 bg-gray-800 text-white overflow-x-hidden transition-all ease duration-200`,
  inactiveRight: `block h-screen fixed z-20 top-0 right-0 w-0  bg-gray-800 text-white overflow-x-hidden transition-all ease duration-200`,
};

export const Sidenav = ({
  isOpen,
  position,
  toggle,
  children,
  closeOnClickOutside,
}: SidenavProps) => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (closeOnClickOutside && !ref.current?.contains(event.target)) {
        if (closeOnClickOutside && !isOpen) return;
        toggle(false);
      }
    };
    window.addEventListener('mousedown', handleOutsideClick);
    return () => window.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen, ref]);

  const left = isOpen ? positions.activeLeft : positions.inactiveLeft;
  const right = isOpen ? positions.activeRight : positions.inactiveRight;
  const defaultPosition = isOpen
    ? positions.activeLeft
    : positions.inactiveLeft;

  const className =
    position === 'left' ? left : position === 'right' ? right : defaultPosition;
  return (
    <aside className={className} ref={ref}>
      <button
        aria-label="Close"
        className="absolute top-1 focus:outline-none right-3 text-3xl text-white cursor-pointer"
        onClick={toggle}
      >
        &times;
      </button>
      <div className="mt-12">{children}</div>
    </aside>
  );
};

Sidenav.Item = ({ children, href }: LinkProps) => (
  <a
    href={href}
    className=" flex justify-start cursor-pointer font-medium hover:text-gray-400 ml-8 mb-10"
  >
    {children}
  </a>
);
