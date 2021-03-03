import Link from 'next/link';
import Image from 'next/image';
import { HTMLAttributes, ReactNode } from 'react';
import {
  BookOpenIcon,
  CodeBranchIcon,
  ConfigIcon,
  GithubIcon,
} from '../../components/icons';

interface Props {
  children: ReactNode;
}

interface NavbarNavProps extends Props {
  position: 'start' | 'middle' | 'end';
}

interface Props {
  children: ReactNode;
}

interface LinkPropsWithChildren {}

interface NavLinkProps
  extends HTMLAttributes<HTMLElement>,
    LinkPropsWithChildren {
  href: string;
  external?: boolean;
}

interface NavbarTogglerProps {
  toggle: () => void;
}

const orientation = (position: string) => {
  switch (position) {
    case 'start':
      return 'hidden lg:pl-0 lg:mb-0 lg:mr-auto md:flex';
    case 'middle':
      return 'flex pl-0 mb-0 mx-auto pr-8 lg:hidden';
    case 'end':
      return 'hidden lg:pl-0 lg:mb-0 lg:ml-auto lg:flex';
    default:
      return 'hidden lg:pl-0 lg:mb-0 lg:mr-auto lg:flex';
  }
};

const Navbar = ({ children }: Props) => (
  <nav className="font-light h-16 relative flex items-center flex-row justify-start">
    {children}
  </nav>
);

Navbar.Brand = ({ children }: Props) => (
  <div className="inline-block cursor-pointer">
    <Link href="/">
      <a>{children}</a>
    </Link>
  </div>
);

Navbar.Nav = ({ children, position }: NavbarNavProps) => (
  <ul className={orientation(position)}>{children}</ul>
);

Navbar.Item = ({ children }: Props) => <li>{children}</li>;

Navbar.Link = ({ children, href, external, ...props }: NavLinkProps) => (
  <div className="cursor-pointer px-4 text-gray-700 hover:text-black font-medium">
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
  <button
    className="float-right block lg:hidden pr-3 text-3xl focus:outline-none focus:shadow"
    onClick={toggle}
  >
    &#8801;
  </button>
);

export const Header = ({ toggle }: NavbarTogglerProps) => {
  return (
    <header className="lg:px-container overflow-hidden top-0 w-full fixed bg-white z-10">
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
        <Navbar.Nav position="start">
          <Navbar.Item>
            <Navbar.Link href="/components/buttons" title="Docs">
              <BookOpenIcon className="h-4 lg:h-5 mt-0.5" />
              <span className="pl-1">Docs</span>
            </Navbar.Link>
          </Navbar.Item>
        </Navbar.Nav>
        <Navbar.Nav position="middle">
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
        <Navbar.Nav position="end">
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
};
