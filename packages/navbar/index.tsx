import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface NavbarProps extends Props {
  textColor?: string;
  bgColor?: string;
  className?: string;
}

interface NavbarNavProps extends Props {
  left?: boolean;
  right?: boolean;
  center?: boolean;
}

interface NavbarCollapseProps extends Props {
  isOpen: boolean;
}

interface NavbarTogglerProps {
  toggle: () => void;
}

interface LinkProps extends Props {
  href: string;
}

const style = {
  brand: `inline-block pt-1.5 pb-1.5 mr-4 cursor-pointer text-2xl font-bold whitespace-nowrap hover:text-gray-400`,
  collapse: {
    default: `md:flex-grow md:items-center md:flex`,
    open: `visible opacity-1 transition-all ease-out duration-500 md:transition-none`,
    close: `invisible h-0 opacity-0 md:visible md:opacity-100 md:h-auto `,
  },
  link: `block cursor-pointer py-1.5 md:py-1 px-4 md:px-2 hover:text-gray-400 font-medium`,
  navbar: `font-light text-white md:relative md:flex md:items-center shadow py-2 px-4 md:flex md:flex-row md:justify-start`,
  nav: {
    center: `block pl-0 mb-0 ml-auto md:flex md:pl-0 md:mb-0 md:mx-auto`,
    left: `block pl-0 mb-0 mr-auto md:flex md:pl-0 md:mb-0`,
    right: `block pl-0 mb-0 ml-auto md:flex md:pl-0 md:mb-0`,
  },
  toggler: `float-right block md:hidden pt-1.5 text-3xl focus:outline-none focus:shadow`,
};

export const Navbar = ({
  bgColor,
  textColor,
  children,
  className,
}: NavbarProps) => {
  return (
    <nav className={`${bgColor} ${textColor} ${className} ${style.navbar}`}>
      {children}
    </nav>
  );
};

/* You can wrap the a tag with Link if you are using either Create-React-App, Next.js or Gatsby */
Navbar.Brand = ({ children, href }: LinkProps) => (
  <a href={href} className={style.brand}>
    <strong>{children}</strong>
  </a>
);

Navbar.Toggler = ({ toggle }: NavbarTogglerProps) => (
  <button
    type="button"
    aria-expanded="false"
    aria-label="Toggle navigation"
    className={style.toggler}
    onClick={toggle}
  >
    &#8801;
  </button>
);

Navbar.Collapse = ({ children, isOpen }: NavbarCollapseProps) => (
  <div
    className={`${isOpen ? style.collapse.open : style.collapse.close} 
      ${style.collapse.default}`}
  >
    {children}
  </div>
);

Navbar.Nav = ({ children, left, right, center }: NavbarNavProps) => {
  const className = left
    ? style.nav.left
    : right
    ? style.nav.right
    : center
    ? style.nav.center
    : style.nav.left;
  return <ul className={className}>{children}</ul>;
};

Navbar.Item = ({ children }: Props) => <li>{children}</li>;

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
Navbar.Link = ({ children, href }: LinkProps) => (
  <a href={href} className={style.link}>
    {children}
  </a>
);
