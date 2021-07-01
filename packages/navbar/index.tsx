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
  position?: 'left' | 'center' | 'right';
}

interface NavbarCollapseProps extends Props {
  open: boolean;
}

interface NavbarTogglerProps {
  toggle: () => void;
}

interface LinkProps extends Props {
  href: string;
}

const style = {
  toggler: `float-right block md:hidden pt-1.5 text-3xl focus:outline-none focus:shadow`,
  link: `block cursor-pointer py-1.5 md:py-1 px-4 md:px-2 hover:text-gray-400 font-medium`,
  brand: `inline-block pt-1.5 pb-1.5 mr-4 cursor-pointer text-2xl font-bold whitespace-nowrap hover:text-gray-400`,
  navbar: `font-light text-white md:relative md:flex md:items-center shadow py-2 px-4 md:flex md:flex-row md:justify-start`,
  collapse: {
    default: `md:flex-grow md:items-center md:flex`,
    open: `visible opacity-1 transition-all ease-out duration-500 md:transition-none`,
    close: `invisible h-0 opacity-0 md:visible md:opacity-100 md:h-auto `,
  },
  nav: {
    center: `block pl-0 mb-0 ml-auto md:flex md:pl-0 md:mb-0 md:mx-auto`,
    left: `block pl-0 mb-0 mr-auto md:flex md:pl-0 md:mb-0`,
    right: `block pl-0 mb-0 ml-auto md:flex md:pl-0 md:mb-0`,
  },
};

export function Navbar({
  bgColor,
  textColor,
  children,
  className,
}: NavbarProps) {
  return (
    <nav className={`${bgColor} ${textColor} ${className} ${style.navbar}`}>
      {children}
    </nav>
  );
}

/* You can wrap the a tag with Link if you are using either Create-React-App, Next.js or Gatsby */
export function NavbarBrand({ children, href }: LinkProps) {
  return (
    <a href={href} className={style.brand}>
      <strong>{children}</strong>
    </a>
  );
}

export function NavbarToggler({ toggle }: NavbarTogglerProps) {
  return (
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
}

export function NavbarCollapse({ children, open }: NavbarCollapseProps) {
  return (
    <div
      className={`${style.collapse.default} 
        ${open ? style.collapse.open : style.collapse.close}  `}
    >
      {children}
    </div>
  );
}

export function NavbarNav({ children, position = 'left' }: NavbarNavProps) {
  return <ul className={style.nav[position]}>{children}</ul>;
}

export function NavbarItem({ children }: Props) {
  return <li>{children}</li>;
}

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
export function NavbarLink({ children, href }: LinkProps) {
  return (
    <a href={href} className={style.link}>
      {children}
    </a>
  );
}
