import { CSSProperties, ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
}

interface HamburgerMenuProps extends Props {
  textColor?: string;
  color?: string;
}

interface HamburgerCollapseProps extends Props {
  isOpen: boolean;
}
interface HamburgerTogglerProps {
  toggle: () => void;
}
export const HamburgerMenu = ({
  color,
  textColor,
  children,
}: HamburgerMenuProps) => {
  return (
    <nav
      className={`${color ? color : "bg-black"} ${
        textColor ? textColor : "text-white"
      } font-light shadow py-2 px-4`}
    >
      {children}
    </nav>
  );
};

HamburgerMenu.Brand = ({ children }: Props) => (
  <div className="inline-block pt-1.5 pb-1.5 mr-4 cursor-pointer text-2xl font-bold whitespace-nowrap hover:text-gray-400">
    <strong>{children}</strong>
  </div>
);

HamburgerMenu.Toggler = ({ toggle }: HamburgerTogglerProps) => (
  <button
    className="float-right pt-1.5 text-3xl focus:outline-none focus:shadow"
    onClick={toggle}
  >
    &#8801;
  </button>
);

HamburgerMenu.Collapse = ({ children, isOpen }: HamburgerCollapseProps) => {
  const ref = useRef<HTMLDivElement>();
  const style: CSSProperties = isOpen
    ? { height: ref.current?.scrollHeight }
    : { height: 0, visibility: "hidden", opacity: 0 };

  return (
    <div
      className="transition-height ease duration-300"
      style={style}
      ref={ref}
    >
      {children}
    </div>
  );
};

HamburgerMenu.Nav = ({ children }: Props) => (
  <ul className="block pl-0 mb-0">{children}</ul>
);

HamburgerMenu.Item = ({ children }: Props) => <li>{children}</li>;

HamburgerMenu.Link = ({ children }: Props) => (
  <div className="cursor-pointer py-1.5 px-4  hover:text-gray-400 font-medium">
    {children}
  </div>
);
