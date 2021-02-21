import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from './container';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface ItemProps extends Props {
  href: string;
  onClick?: () => void;
}

export const Item = ({ children, href, onClick }: ItemProps) => {
  const click = onClick ? onClick : null;

  const router = useRouter();
  const { pathname } = router;
  const className =
    pathname === href
      ? 'text-purple-800 font-bold hover:text-purple-800'
      : 'text-gray-700 font-medium hover:text-black';

  return (
    <div className="mb-2">
      <Link href={href ? href : '/'}>
        <a
          onClick={click}
          className={`${className} pl-6 pb-3 text-sm text-gray-700 cursor-pointer`}
        >
          {children}
        </a>
      </Link>
    </div>
  );
};

const Sidenav: FC = () => (
  <div>
    <div className="pl-3">
      <Link href="/">
        <a>
          <Image
            src="/kimia.png"
            width={100}
            height={100}
            priority={true}
            alt="kimia-ui"
          />
        </a>
      </Link>
    </div>
    <div className="pl-6 pb-2 mb-2 text-gray-800 font-bold">General</div>
    <Item href="/components/buttons">Buttons</Item>
    <Item href="/components/card">Card</Item>
    <Item href="/components/collapse">Collapse</Item>
    <Item href="/components/dropdown">Dropdown</Item>
    <Item href="/components/jumbotron">Jumbotron</Item>
    <Item href="/components/list_group">List Group</Item>
    <Item href="/components/modal">Modal</Item>
    <Item href="/components/spinner">Spinner</Item>
    <Item href="/components/tab">Tab</Item>
    <Item href="/components/tooltip">Tooltip</Item>
    <div className="pl-6 pt-6 pb-2 mb-2 text-gray-800 font-bold">
      Navigation
    </div>
    <Item href="/components/curtain_menu">Curtain Menu</Item>
    <Item href="/components/hamburger_menu">Hamburger Menu</Item>
    <Item href="/components/navbar">Navbar</Item>
    <Item href="/components/sidenav">Sidenav</Item>
    <div className="pl-6 pt-6 pb-2 mb-2 text-gray-800 font-bold">Extras</div>
    <Item href="/components/toast">Toast</Item>
    <Item href="/components/scroll-indicator">Scroll indicator</Item>
    <Item href="/components/pricing-table">E-commerce</Item>
  </div>
);

const Base = ({ children }: Props) => {
  return (
    <>
      <Container>
        <div className="hidden md:block h-screen fixed top-0 md:w-60 border-r border-gray-200 hover:border-r-0 text-white overflow-hidden hover:overflow-y-auto">
          <Sidenav />
        </div>
      </Container>
      <div className="pl-0 md:pl-80">{children}</div>
    </>
  );
};

export default Base;
