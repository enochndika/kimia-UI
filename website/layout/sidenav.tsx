import Link from 'next/link';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Item } from './base';
import { Arrival } from '@/website/components/arrival';

interface SidenavProps {
  isOpen: boolean;
  toggle: (event?: any) => void;
}

const classNames = {
  default: `block h-full absolute z-20 top-0 right-0 bg-white overflow-x-hidden `,
  active: `w-7/12 md:w-4/12 text-gray-700 transition-all ease duration-300`,
  inactive: `w-0 transition-all ease duration-300`,
};

export const Sidenav = ({ isOpen, toggle }: SidenavProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (!isOpen) return;
        toggle(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [isOpen, ref]);

  return (
    <aside
      className={
        isOpen
          ? `${classNames.default} ${classNames.active}`
          : `${classNames.default} ${classNames.inactive}`
      }
      ref={ref}
    >
      <div className="pl-6 transition-all ease duration-400">
        <Link href="/">
          <a>
            <Image
              src="/kimia.png"
              width={100}
              height={100}
              priority={true}
              alt="kimia-UI"
            />
          </a>
        </Link>
      </div>
      <div className="pl-6 pb-6 text-gray-800 font-bold">General</div>
      <Item href="/components/accordion" onClick={toggle}>
        Accordion
      </Item>
      <Item href="/components/buttons" onClick={toggle}>
        Buttons
      </Item>
      <Item href="/components/card" onClick={toggle}>
        Card
      </Item>
      <Item href="/components/code" onClick={toggle}>
        Code
      </Item>
      <Item href="/components/copy-to-clipboard">
        Copy to clipboard <Arrival />
      </Item>
      <Item href="/components/collapse" onClick={toggle}>
        Collapse
      </Item>
      <Item href="/components/drawer" onClick={toggle}>
        Drawer <Arrival />
      </Item>
      <Item href="/components/dropdown" onClick={toggle}>
        Dropdown
      </Item>
      <Item href="/components/jumbotron" onClick={toggle}>
        Jumbotron
      </Item>
      <Item href="/components/list_group" onClick={toggle}>
        List Group
      </Item>
      <Item href="/components/modal" onClick={toggle}>
        Modal
      </Item>
      <Item href="/components/spinner" onClick={toggle}>
        Spinner
      </Item>
      <Item href="/components/tab" onClick={toggle}>
        Tab
      </Item>
      <Item href="/components/tooltip" onClick={toggle}>
        Tooltip
      </Item>
      <div className="pl-6 py-6 text-gray-800 font-bold" onClick={toggle}>
        Navigation
      </div>
      <Item href="/components/curtain_menu" onClick={toggle}>
        Curtain Menu
      </Item>
      <Item href="/components/hamburger_menu" onClick={toggle}>
        Hamburger Menu
      </Item>
      <Item href="/components/navbar" onClick={toggle}>
        Navbar
      </Item>
      <Item href="/components/sidenav" onClick={toggle}>
        Sidenav
      </Item>
      <div className="pl-6 py-6 text-gray-800 font-bold" onClick={toggle}>
        Forms
      </div>
      <Item href="/components/field/autocomplete" onClick={toggle}>
        Autocomplete
        <Arrival />
      </Item>
      <Item href="/components/field" onClick={toggle}>
        Field
      </Item>
      <Item href="/components/field/with-formik" onClick={toggle}>
        With Formik
      </Item>
      <Item href="/components/field/with-react-hook-form" onClick={toggle}>
        With Hook Form
      </Item>
      <div className="pl-6 py-6 text-gray-800 font-bold">Extras</div>
      <Item href="/components/toast" onClick={toggle}>
        Toast
      </Item>
      <Item href="/components/scroll-indicator" onClick={toggle}>
        Scroll indicator
      </Item>
      <Item href="/components/pricing-table" onClick={toggle}>
        E-commerce
      </Item>
    </aside>
  );
};
