import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface LinkProps extends Props {
  href: string;
}
interface MenuProps extends Props {
  open: boolean;
  transition: 'left' | 'top';
}

const style = {
  menu: {
    default: `overflow-x-hidden md:overflow-hidden transition-all duration-700 fixed z-10 top-0 left-0 bg-black`,
    transition: {
      left: {
        open: `h-full w-full `,
        close: `w-0 h-full`,
      },
      top: {
        open: `h-full w-full `,
        close: `w-full h-0`,
      },
    },
  },
  container: `relative top-1/4 w-full text-center mt-8`,
  item: `text-3xl text-gray-400 cursor-pointer hover:text-white`,
};

export function Menu({ children, open, transition }: MenuProps) {
  return (
    <div
      className={`${style.menu.default} ${
        open
          ? style.menu.transition[transition].open
          : style.menu.transition[transition].close
      }`}
    >
      {children}
    </div>
  );
}

export function MenuContainer({ children }: Props) {
  return <div className={style.container}>{children}</div>;
}

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
export function MenuItem({ children, href }: LinkProps) {
  return (
    <div className="p-2">
      <a className={style.item} href={href}>
        {children}
      </a>
    </div>
  );
}
