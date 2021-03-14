import { CSSProperties, ReactNode, useRef, HTMLAttributes } from 'react';

interface Props {
  children: ReactNode;
}

interface LinkProps extends Props {
  href: string;
}
interface HamburgerMenuProps extends HTMLAttributes<HTMLElement> {
  textColor?: string;
  bgColor?: string;
  children: ReactNode;
  className?: string;
}

interface HamburgerCollapseProps extends Props {
  isOpen: boolean;
}
interface HamburgerTogglerProps {
  toggle: () => void;
}
export const HamburgerMenu = ({
  bgColor,
  textColor,
  children,
  className,
}: HamburgerMenuProps) => {
  return (
    <nav
      className={`${bgColor ? bgColor : 'bg-black'} 
      ${textColor ? textColor : 'text-white'} 
      ${className} font-light shadow py-2 px-4`}
    >
      {children}
    </nav>
  );
};

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
HamburgerMenu.Brand = ({ children, href }: LinkProps) => (
  <a
    href={href}
    className="inline-block pt-1.5 pb-1.5 mr-4 cursor-pointer text-2xl font-bold whitespace-nowrap hover:text-gray-400"
  >
    <strong>{children}</strong>
  </a>
);

HamburgerMenu.Toggler = ({ toggle }: HamburgerTogglerProps) => (
  <button
    type="button"
    aria-expanded="false"
    aria-label="Toggle navigation"
    className="float-right pt-1.5 text-3xl focus:outline-none focus:shadow"
    onClick={toggle}
  >
    &#8801;
  </button>
);

HamburgerMenu.Collapse = ({ children, isOpen }: HamburgerCollapseProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const style: CSSProperties = isOpen
    ? { height: ref.current?.scrollHeight }
    : { height: 0, visibility: 'hidden', opacity: 0 };

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

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
HamburgerMenu.Link = ({ children, href }: LinkProps) => (
  <a
    href={href}
    className="block cursor-pointer py-1.5 px-4  hover:text-gray-300 font-medium"
  >
    {children}
  </a>
);
