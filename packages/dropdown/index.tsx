import {
  AnchorHTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

interface Props {
  children: ReactNode;
}

interface DropdownItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

const useToggle = () => {
  const [show, setShow] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (!show) return;
        setShow(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [show, ref]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (!show) return;

      if (event.key === 'Escape') {
        setShow(false);
      }
    };
    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [show]);

  return {
    show,
    toggle,
    ref,
  };
};

const style = {
  menu: `block z-30 absolute top-0 left-0 bg-white float-left py-2 px-0 text-left border border-gray-300 rounded-sm mt-0.5 mb-0 mx-0 bg-clip-padding`,
  item: `block w-full py-1 px-8 mb-2 text-sm font-normal clear-both whitespace-nowrap border-0 hover:bg-gray-200 cursor-pointer`,
};

const Dropdown = ({ children }: Props) => {
  const { show, toggle } = useToggle();
  /* First child contains the dropdown toggle */
  const dropdownToggle = children[0];

  /* Second child contains the dropdown menu */
  const dropdownMenu = children[1];

  return (
    <>
      <button
        onClick={toggle}
        type="button"
        className="bg-indigo-900 text-white focus:outline-none shadow rounded px-6 py-2 font-medium"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {dropdownToggle}
      </button>
      {show && <>{dropdownMenu}</>}
    </>
  );
};

Dropdown.Toggle = ({ children }: Props) => <>{children}</>;

Dropdown.Menu = ({ children }: Props) => (
  <div className="relative">
    <div
      style={{ transform: 'translate3d(0px, 3px, 0px)' }}
      className={style.menu}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      {children}
    </div>
  </div>
);

/* You can wrap the a tag with Link if you are using either Create-React-App, Next.js or Gatsby */
Dropdown.Item = ({ children }: DropdownItemProps) => (
  <a href="#" className={style.item} role="menuitem">
    {children}
  </a>
);

export default Dropdown;
