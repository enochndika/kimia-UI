import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { useToggle } from '../helpers/context';
import kimiaImg from '@/public/images/kimia.png';
import {
  BookOpenIcon,
  CodeBranchIcon,
  ConfigIcon,
  GithubIcon,
} from '@/website/components/icons';

interface Props {
  children: React.ReactNode;
}

interface NavbarNavProps extends Props {
  position: 'left' | 'center' | 'right';
}

interface LinkPropsWithChildren {}

interface NavLinkProps
  extends React.HTMLAttributes<HTMLElement>,
    LinkPropsWithChildren {
  href: string;
  external?: boolean;
  active?: boolean;
}

interface NavbarTogglerProps {
  toggle: () => void;
}

const Alert = dynamic(() => import('../alert'), {
  ssr: false,
});

export default function TopNavigation() {
  const { toggle } = useToggle();
  return (
    <header className="z absolute z-10 top-0 w-full font-inter bg-white lg:fixed lg:px-container">
      <Alert />
      <Navbar>
        <NavbarBrand>
          <Image
            src={kimiaImg}
            height={110}
            width={110}
            placeholder="blur"
            objectFit="cover"
            priority={true}
            alt="kimia-UI"
          />
        </NavbarBrand>
        <NavbarNav position="left">
          <NavbarItem>
            <NavbarLink href="/components/accordion" title="Docs">
              <BookOpenIcon className="mt-0.5 h-4 lg:h-5" />
              <span className="pl-1">Docs</span>
            </NavbarLink>
          </NavbarItem>
        </NavbarNav>
        <NavbarNav position="center">
          <NavbarItem>
            <NavbarLink
              href="/contribution-guide"
              title="Contribute"
              active={true}
            >
              <CodeBranchIcon className="h-4 lg:h-5" />
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink
              href="https://github.com/enochndika/kimia-UI"
              external={true}
              title="Github source"
            >
              <GithubIcon className="h-4 lg:h-5" />
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink
              href="/configuration"
              title="Configuration"
              active={true}
            >
              <ConfigIcon className="h-4 lg:h-5" />
            </NavbarLink>
          </NavbarItem>
        </NavbarNav>
        <NavbarNav position="right">
          <NavbarItem>
            <NavbarLink
              href="/contribution-guide"
              title="Contribute"
              active={true}
            >
              <CodeBranchIcon className="h-4 lg:h-5" />
              <span className="pl-1">Contribute</span>
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink
              href="https://github.com/enochndika/kimia-UI"
              external={true}
              title="Github source"
            >
              <GithubIcon className="h-4 md:h-5" />
              <span className="pl-1">Github</span>
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink
              href="/configuration"
              title="Configuration"
              active={true}
            >
              <ConfigIcon className="h-4 md:h-5" />
              <span className="pl-1">Config</span>
            </NavbarLink>
          </NavbarItem>
        </NavbarNav>
        <NavbarToggler toggle={toggle} />
      </Navbar>
    </header>
  );
}

const style = {
  position: {
    center: `flex pl-0 mb-0 mx-auto pr-8 lg:hidden`,
    left: `hidden lg:pl-0 lg:mb-0 lg:mr-auto md:flex`,
    right: `hidden lg:pl-0 lg:mb-0 lg:ml-auto lg:flex`,
  },
  active: `text-purple-800`,
  brand: `inline-block cursor-pointer`,
  link: `cursor-pointer px-4 text-gray-900 hover:text-black font-medium`,
  navbar: `font-light h-16 relative flex items-center flex-row justify-start`,
  toggler: `float-right block lg:hidden pr-3 text-5xl -mt-3 focus:outline-none focus:shadow`,
};

function Navbar({ children }: Props) {
  return <nav className={style.navbar}>{children}</nav>;
}

function NavbarBrand({ children }: Props) {
  return (
    <div className={style.brand}>
      <Link href="/">
        <a>{children}</a>
      </Link>
    </div>
  );
}

function NavbarNav({ children, position }: NavbarNavProps) {
  return <ul className={style.position[position]}>{children}</ul>;
}

function NavbarItem({ children }: Props) {
  return <li>{children}</li>;
}

function NavbarLink({
  children,
  href,
  external,
  active,
  ...props
}: NavLinkProps) {
  const { asPath } = useRouter();
  return (
    <div className={style.link}>
      {external ? (
        <a className="flex" {...props} href={href}>
          {children}
        </a>
      ) : (
        <Link href={href}>
          <a
            className={`flex ${active && asPath === href && style.active}`}
            {...props}
          >
            {children}
          </a>
        </Link>
      )}
    </div>
  );
}

function NavbarToggler({ toggle }: NavbarTogglerProps) {
  return (
    <button className={style.toggler} onClick={toggle}>
      &#8801;
    </button>
  );
}
