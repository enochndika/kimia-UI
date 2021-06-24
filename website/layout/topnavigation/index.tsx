import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  BookOpenIcon,
  CodeBranchIcon,
  ConfigIcon,
  GithubIcon,
} from '@/website/components/icons';
import { useToggle } from '../helpers/context';

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
}

interface NavbarTogglerProps {
  toggle: () => void;
}

export default function TopNavigation() {
  const { toggle } = useToggle();
  return (
    <header className="lg:px-container absolute top-0 w-full lg:fixed bg-white z-10 ">
      <Navbar>
        <Navbar.Brand>
          <Image
            src="/kimia.png"
            height={110}
            width={110}
            objectFit="cover"
            priority={true}
            alt="kimia-UI"
          />
        </Navbar.Brand>
        <Navbar.Nav position="left">
          <Navbar.Item>
            <Navbar.Link href="/components/accordion" title="Docs">
              <BookOpenIcon className="h-4 lg:h-5 mt-0.5" />
              <span className="pl-1">Docs</span>
            </Navbar.Link>
          </Navbar.Item>
        </Navbar.Nav>
        <Navbar.Nav position="center">
          <Navbar.Item>
            <Navbar.Link href="/contribution-guide" title="Contribute">
              <CodeBranchIcon className="h-4 lg:h-5" />
            </Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link
              href="https://github.com/enochndika/kimia-UI"
              external={true}
              title="Github source"
            >
              <GithubIcon className="h-4 lg:h-5" />
            </Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link href="/configuration" title="Configuration">
              <ConfigIcon className="h-4 lg:h-5" />
            </Navbar.Link>
          </Navbar.Item>
        </Navbar.Nav>
        <Navbar.Nav position="right">
          <Navbar.Item>
            <Navbar.Link href="/contribution-guide" title="Contribute">
              <CodeBranchIcon className="h-4 lg:h-5" />
              <span className="pl-1">Contribute</span>
            </Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link
              href="https://github.com/enochndika/kimia-UI"
              external={true}
              title="Github source"
            >
              <GithubIcon className="h-4 md:h-5" />
              <span className="pl-1">Github</span>
            </Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link href="/configuration" title="Configuration">
              <ConfigIcon className="h-4 md:h-5" />
              <span className="pl-1">Config</span>
            </Navbar.Link>
          </Navbar.Item>
        </Navbar.Nav>
        <Navbar.Toggler toggle={toggle} />
      </Navbar>
    </header>
  );
}

const style = {
  navbar: `font-light h-16 relative flex items-center flex-row justify-start`,
  brand: `inline-block cursor-pointer`,
  link: `cursor-pointer px-4 text-gray-900 hover:text-black font-medium`,
  toggler: `float-right block lg:hidden pr-3 text-5xl -mt-3 focus:outline-none focus:shadow`,
  position: {
    center: `flex pl-0 mb-0 mx-auto pr-8 lg:hidden`,
    left: `hidden lg:pl-0 lg:mb-0 lg:mr-auto md:flex`,
    right: `hidden lg:pl-0 lg:mb-0 lg:ml-auto lg:flex`,
  },
};

function Navbar({ children }: Props) {
  return <nav className={style.navbar}>{children}</nav>;
}

Navbar.Brand = ({ children }: Props) => (
  <div className={style.brand}>
    <Link href="/">
      <a>{children}</a>
    </Link>
  </div>
);

Navbar.Nav = ({ children, position }: NavbarNavProps) => (
  <ul className={style.position[position]}>{children}</ul>
);

Navbar.Item = ({ children }: Props) => <li>{children}</li>;

Navbar.Link = ({ children, href, external, ...props }: NavLinkProps) => (
  <div className={style.link}>
    {external ? (
      <a className="flex" {...props} href={href}>
        {children}
      </a>
    ) : (
      <Link href={href}>
        <a className="flex" {...props}>
          {children}
        </a>
      </Link>
    )}
  </div>
);

Navbar.Toggler = ({ toggle }: NavbarTogglerProps) => (
  <button className={style.toggler} onClick={toggle}>
    &#8801;
  </button>
);
