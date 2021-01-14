import style from "../../../styles/global.module.css";
import Link from "next/link";
import Image from "next/image";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface NavLinkProps extends Props {
  href: string;
}
const Navbar = ({ children }: Props) => (
  <nav className="font-light -mt-14 md:-mt-8  relative flex items-center py-3 flex-row justify-start">
    {children}
  </nav>
);

Navbar.Brand = ({ children }: Props) => (
  <div className="inline-block  mr-4 text-3xl text-gray-600 cursor-pointer font-bold whitespace-nowrap">
    <Link href="/">
      <a>
        <strong>{children}</strong>
      </a>
    </Link>
  </div>
);

Navbar.Nav = ({ children }: Props) => (
  <ul className="pl-0 mb-0 ml-auto flex">{children}</ul>
);

Navbar.Item = ({ children }: Props) => <li>{children}</li>;

Navbar.Link = ({ children, href }: NavLinkProps) => (
  <div className="cursor-pointe md:-mt-6  px-4 md:px-2 text-gray-700 hover:text-gray-500 font-medium">
    <Link href={href}>
      <a>{children}</a>
    </Link>
  </div>
);

export const Header: FC = () => {
  return (
    <header className={style.container}>
      <Navbar>
        <Navbar.Brand>
          <Image
            src="/kimia.png"
            height={150}
            width={150}
            objectFit="cover"
            priority={true}
            alt="kimia-UI"
          />
        </Navbar.Brand>
        <Navbar.Nav>
          <Navbar.Item>
            <Navbar.Link href="/components/buttons">Components</Navbar.Link>
          </Navbar.Item>
        </Navbar.Nav>
      </Navbar>
    </header>
  );
};
