import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface INavbarContextProps {
  open?: boolean;
  toggle?: any;
}

interface INavbarProps extends Props {
  className?: string;
}

interface INavbarBrandProps extends Props {
  href: string;
}

interface INavbarNavProps extends Props {
  orientation?: 'start' | 'middle' | 'end';
}

interface INavbarLinkProps extends INavbarBrandProps {
  active?: boolean;
  activeClass?: string;
}

const style = {
  navbar: `relative px-4 py-2 shadow top-0 w-full lg:flex lg:flex-row lg:items-center lg:justify-start lg:relative`,
  brand: `cursor-pointer font-bold inline-block mr-4 py-1.5 text-2xl whitespace-nowrap hover:text-gray-200`,
  toggler: `block float-right text-4xl lg:hidden focus:outline-none focus:shadow`,
  item: `whitespace-pre cursor-pointer px-4 py-3 hover:text-gray-200`,
  collapse: {
    default: `border-t border-gray-500 fixed left-0 mt-2 shadow py-2 text-center lg:border-none lg:flex lg:flex-grow lg:items-center lg:mt-0 lg:py-0 lg:relative lg:shadow-none`,
    open: `h-auto visible transition-all duration-500 ease-out w-full opacity-100 lg:transition-none`,
    close: `h-auto invisible w-0 transition-all duration-300 ease-in lg:opacity-100 lg:transition-none lg:visible`,
  },
  nav: {
    start: `block mb-0 mr-auto pl-0 lg:flex lg:mb-0 lg:pl-0`,
    middle: `block mb-0 ml-auto pl-0 lg:flex lg:pl-0 lg:mb-0 lg:mx-auto`,
    end: `block pl-0 mb-0 ml-auto lg:flex lg:pl-0 lg:mb-0`,
  },
};

const Context = React.createContext<INavbarContextProps>({});

function Navbar({ children, className }: INavbarProps) {
  const [open, setOpen] = React.useState(false);
  const navbarRef = React.useRef(null);

  // this is done intentionally to prevent nav-items to show up.
  // when viewport is less than 1024px, the navbar will be fixed and be positioned to the top
  // because of that, we can't show navbar toggle on website to prevent all navbar examples to be display on the same position.
  const toggle = React.useCallback(() => {
    if (window.innerWidth > 1024) {
      setOpen((prevState) => !prevState);
    }
  }, []);

  // close navbar on click outside when viewport is less than 1024px
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (window.innerWidth < 1024) {
        if (!navbarRef.current?.contains(event.target)) {
          if (!open) return;
          setOpen(false);
        }
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [open, navbarRef]);

  return (
    <Context.Provider value={{ open, toggle }}>
      <nav ref={navbarRef} className={`${className} ${style.navbar}`}>
        {children}
      </nav>
    </Context.Provider>
  );
}

const useToggle = () => React.useContext(Context);

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
function NavbarBrand({ children, href }: INavbarBrandProps) {
  return (
    <a href={href} className={style.brand}>
      <strong>{children}</strong>
    </a>
  );
}

function NavbarToggler() {
  const { toggle } = useToggle();
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

function NavbarCollapse({ children }: Props) {
  const { open } = useToggle();
  return (
    <div
      style={{ backgroundColor: 'inherit' }}
      className={`${style.collapse.default}
        ${open ? style.collapse.open : style.collapse.close}`}
    >
      {children}
    </div>
  );
}

function NavbarNav({ children, orientation }: INavbarNavProps) {
  return <ul className={style.nav[orientation]}>{children}</ul>;
}

function NavbarItem({ children }: Props) {
  return <li className={style.item}>{children}</li>;
}

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
function NavbarLink({ children, href, active, activeClass }: INavbarLinkProps) {
  return (
    <a href={href} className={active ? activeClass : ''}>
      {children}
    </a>
  );
}

export {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarNav,
  NavbarItem,
  NavbarLink,
  NavbarToggler,
};
