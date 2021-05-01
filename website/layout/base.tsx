import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from '../components/container';
import { FC, ReactNode } from 'react';
import { useFilterRoutes } from '@/website/utils/filterRoutes';
import { Arrival } from '@/website/components/arrival';

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
    <div className="mb-4">
      <Link href={href ? href : '/'}>
        <a
          onClick={click}
          className={`${className} pl-6 text-sm text-gray-700 cursor-pointer`}
        >
          {children}
        </a>
      </Link>
    </div>
  );
};

const Sidebar: FC = () => (
  <Container>
    <div className="hidden lg:block h-full mt-24 pt-8 pb-32 fixed top-0 lg:w-60 text-white overflow-y-auto">
      <div className="pl-6 pb-2 mb-5 text-gray-500 font-bold">GENERAL</div>
      <Item href="/components/accordion">Accordion</Item>
      <Item href="/components/buttons">Buttons</Item>
      <Item href="/components/card">Card</Item>
      <Item href="/components/code">Code</Item>
      <Item href="/components/collapse">Collapse</Item>
      <Item href="/components/drawer">
        Drawer
        <Arrival />
      </Item>
      <Item href="/components/dropdown">Dropdown</Item>
      <Item href="/components/jumbotron">Jumbotron</Item>
      <Item href="/components/list_group">List Group</Item>
      <Item href="/components/modal">Modal</Item>
      <Item href="/components/spinner">Spinner</Item>
      <Item href="/components/tab">Tab</Item>
      <Item href="/components/tooltip">Tooltip</Item>
      <div className="pl-6 pt-6 pb-2 mb-5 text-gray-500 font-bold">
        NAVIGATION
      </div>
      <Item href="/components/curtain_menu">Curtain Menu</Item>
      <Item href="/components/hamburger_menu">Hamburger Menu</Item>
      <Item href="/components/navbar">Navbar</Item>
      <Item href="/components/sidenav">Sidenav</Item>
      <div className="pl-6 pt-6 pb-2 mb-5 text-gray-500 font-bold">Forms</div>
      <Item href="/components/field/autocomplete">
        Autocomplete <Arrival />
      </Item>
      <Item href="/components/field">Field</Item>
      <Item href="/components/field/with-formik">With Formik</Item>
      <Item href="/components/field/with-react-hook-form">With Hook Form</Item>
      <div className="pl-6 pt-6 pb-2 mb-5 text-gray-500 font-bold">EXTRAS</div>
      <Item href="/components/toast">Toast</Item>
      <Item href="/components/scroll-indicator">Scroll indicator</Item>
      <Item href="/components/pricing-table">E-commerce</Item>
    </div>
  </Container>
);

const Base = ({ children }: Props) => {
  const { pathname } = useRouter();
  const routes = useFilterRoutes(pathname);
  const classNames = routes
    ? 'pt-24'
    : 'lg:pl-64 lg:pr-6 xl:pl-80 xl:pr-12 pt-24';
  return (
    <>
      {!routes && <Sidebar />}
      <div className="" />
      <main className={classNames}>{children}</main>
    </>
  );
};

export default Base;
