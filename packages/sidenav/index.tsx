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
  toggle: (value?: unknown) => void;
  closeOnClickOutside?: boolean;
}

const style = {
  position: {
    left: {
      open: `w-7/12 md:w-60 bg-gray-800 text-white overflow-x-hidden`,
      close: `w-0 bg-gray-800 text-white overflow-x-hidden`,
      default: `h-screen fixed z-20 top-0 left-0 transition-all ease duration-200`,
    },
    right: {
      open: `w-7/12 md:w-60 bg-gray-800 text-white overflow-x-hidden`,
      close: `w-0 bg-gray-800 text-white overflow-x-hidden`,
      default: `right-0 h-screen fixed z-20 top-0 transition-all ease duration-200`,
    },
  },
  item: `flex justify-start cursor-pointer font-medium hover:text-gray-400 ml-8 mb-10`,
  closeIcon: `absolute top-1 focus:outline-none right-3 text-3xl text-white cursor-pointer`,
};

const Sidenav = ({
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

  return (
    <aside
      className={`${style.position[position].default} ${
        isOpen ? style.position[position].open : style.position[position].close
      }`}
      ref={ref}
    >
      <button aria-label="Close" className={style.closeIcon} onClick={toggle}>
        &times;
      </button>
      <div className="mt-12">{children}</div>
    </aside>
  );
};

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
Sidenav.Item = ({ children, href }: LinkProps) => (
  <a href={href} className={style.item}>
    {children}
  </a>
);

export default Sidenav;
