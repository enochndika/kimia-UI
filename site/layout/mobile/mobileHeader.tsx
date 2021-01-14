import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface TogglerProps {
  toggle: () => void;
}
const Navbar = ({ children }: Props) => (
  <nav className="font-light -mt-14 -mb-12 md:-mt-8 md:-mb-0 relative flex items-center py-3 flex-row justify-start md:hidden">
    {children}
  </nav>
);

Navbar.Brand = ({ children }: Props) => (
  <div className="cursor-pointer md:hidden">
    <Link href="/">
      <a>
        <strong>{children}</strong>
      </a>
    </Link>
  </div>
);

Navbar.Toggler = ({ toggle }: TogglerProps) => (
  <button
    className="pl-0 mb-0 ml-auto flex md:hidden font-bold pr-2 text-4xl text-gray-600 focus:outline-none focus:shadow"
    onClick={toggle}
  >
    &#8801;
  </button>
);

export const MobileHeader = ({ toggle }: TogglerProps) => {
  return (
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
      <Navbar.Toggler toggle={toggle} />
    </Navbar>
  );
};
