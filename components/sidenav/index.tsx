import { ReactNode, useEffect, useRef } from 'react';

interface Props {
  children: ReactNode;
}

interface SidenavProps extends Props {
  isOpen: boolean;
  position?: 'left' | 'right';
  toggle: (value: boolean) => void;
}
const positions = {
  activeLeft: `block h-screen fixed z-20 top-0 left-0 w-7/12 md:w-60 bg-gray-800 text-white overflow-x-hidden transition-all ease duration-200`,
  inactiveLeft: `block h-screen fixed z-20 top-0 left-0 w-0  bg-gray-800 text-white overflow-x-hidden transition-all ease duration-200`,
  activeRight: `block h-screen fixed z-20 top-0 right-0 w-7/12 md:w-60 bg-gray-800 text-white overflow-x-hidden transition-all ease duration-200`,
  inactiveRight: `block h-screen fixed z-20 top-0 right-0 w-0  bg-gray-800 text-white overflow-x-hidden transition-all ease duration-200`,
};

const Sidenav = ({ isOpen, position, toggle, children }: SidenavProps) => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (!isOpen) return;
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
      <div className="mt-12">{children}</div>
    </aside>
  );
};

Sidenav.Item = ({ children }: Props) => (
  <div className=" flex justify-start cursor-pointer font-medium hover:text-gray-400 ml-8 mb-10">
    {children}
  </div>
);

export default Sidenav;
