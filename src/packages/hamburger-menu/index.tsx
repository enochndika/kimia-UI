import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface LinkProps extends Props {
  href: string;
}

interface HamburgerMenuProps extends React.HTMLAttributes<HTMLElement> {
  textColor?: string;
  bgColor?: string;
  children: React.ReactNode;
}

interface HamburgerCollapseProps extends Props {
  open: boolean;
}

interface HamburgerTogglerProps {
  toggle: () => void;
}

const style = {
  nav: `block pl-0 mb-0`,
  hamburger: `font-light shadow py-2 px-4`,
  collapse: `transition-height ease duration-300`,
  toggler: `float-right pt-1.5 text-3xl focus:outline-none focus:shadow`,
  link: `block cursor-pointer py-1.5 px-4  hover:text-gray-300 font-medium`,
  brand: `inline-block pt-1.5 pb-1.5 mr-4 cursor-pointer text-2xl font-bold whitespace-nowrap hover:text-gray-400`,
};

export function HamburgerMenu({
  children,
  bgColor,
  textColor,
}: HamburgerMenuProps) {
  return (
    <nav className={`${bgColor} ${textColor} ${style.hamburger}`}>
      {children}
    </nav>
  );
}

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
export function HamburgerMenuBrand({ children, href }: LinkProps) {
  return (
    <a href={href} className={style.brand}>
      <strong>{children}</strong>
    </a>
  );
}

export function HamburgerMenuToggler({ toggle }: HamburgerTogglerProps) {
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

export function HamburgerMenuCollapse({
  open,
  children,
}: HamburgerCollapseProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const inlineStyle: React.CSSProperties = open
    ? { height: ref.current?.scrollHeight }
    : { height: 0, visibility: 'hidden', opacity: 0 };

  return (
    <div className={style.collapse} style={inlineStyle} ref={ref}>
      {children}
    </div>
  );
}

export function HamburgerMenuNav({ children }: Props) {
  return <ul className={style.nav}>{children}</ul>;
}

export function HamburgerMenuItem({ children }: Props) {
  return <li>{children}</li>;
}

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
export function HamburgerMenuLink({ children, href }: LinkProps) {
  return (
    <a href={href} className={style.link}>
      {children}
    </a>
  );
}
