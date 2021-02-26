import {
  LiHTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

interface Props {
  children: ReactNode;
}

interface DropdownItemProps extends LiHTMLAttributes<HTMLLIElement> {
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

export const Dropdown = ({ children }: Props) => {
  const firstChild = children[0];
  const secondChild = children[1];
  const { ref, show, toggle } = useToggle();

  return (
    <div>
      <div className="inline" onClick={toggle}>
        {firstChild}
      </div>
      {show && (
        <div className="relative block" ref={ref}>
          {secondChild}
        </div>
      )}
    </div>
  );
};

Dropdown.Toggle = ({ children }: Props) => <>{children}</>;

Dropdown.Menu = ({ children }: Props) => (
  <ul
    style={{ transform: 'translate3d(0px, 3px, 0px)' }}
    className="block z-30 absolute top-0 left-0  bg-white float-left py-2 px-0 text-left border border-gray-300 rounded-sm mt-0.5 mb-0 mx-0 bg-clip-padding"
  >
    {children}
  </ul>
);

Dropdown.Item = ({ children }: DropdownItemProps) => (
  <li className="block w-full py-1 px-8 mb-2 text-sm font-normal clear-both whitespace-nowrap border-0 hover:bg-gray-200 cursor-pointer">
    {children}
  </li>
);
