import { FC, ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode;
}

interface DropdownProps extends Props {
  title: string;
  btnClassName: string;
}

const Dropdown = ({ children, btnClassName, title }: DropdownProps) => {
  const [show, setShow] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (!show) return;
        setShow(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [show, ref]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (!show) return;

      if (event.key === "Escape") {
        setShow(false);
      }
    };
    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [show]);

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className={`${btnClassName} text-white focus:outline-none shadow rounded px-6 py-2 font-medium transition ease-in duration-200`}
      >
        {title}
      </button>
      <div className="relative" ref={ref}>
        {show && children}
      </div>
    </>
  );
};

Dropdown.Menu = ({ children }: Props) => (
  <ul className="absolute z-20 mt-2 py-2 px-4 border border-solid text-xs md:text-sm bg-white rounded shadow-md">
    {children}
  </ul>
);

Dropdown.Item = ({ children }: Props) => (
  <li className="block py-2 px-4 hover:bg-gray-200 cursor-pointer">
    {children}
  </li>
);

export const DropdownComponent: FC = () => (
  <div className="row">
    <div className="col-12 mb-12 md:col-6">
      <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-4">
        Basic Dropdown
      </h2>
      <Dropdown title="Click me" btnClassName="bg-indigo-900">
        <Dropdown.Menu>
          <Dropdown.Item>Enoch Ndika</Dropdown.Item>
          <Dropdown.Item>Next.js</Dropdown.Item>
          <Dropdown.Item>Business</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <div className="col-12 mb-6 md:mb-0 md:col-6">
      <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-4">
        Dropdown with separator
      </h2>
      <Dropdown title="Click me" btnClassName="bg-green-700">
        <Dropdown.Menu>
          <Dropdown.Item>Heroku</Dropdown.Item>
          <Dropdown.Item>Postgres</Dropdown.Item>
          <hr className="my-2" />
          <Dropdown.Item>Digital Ocean</Dropdown.Item>
          <Dropdown.Item>Aws functions</Dropdown.Item>
          <hr className="my-2" />
          <Dropdown.Item>Azure</Dropdown.Item>
          <Dropdown.Item>Strapi</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  </div>
);
