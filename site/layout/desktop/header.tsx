import Link from "next/link";
import Image from "next/image";
import { FC, HTMLAttributes, ReactNode } from "react";
import {
  CodeBranchIcon,
  ConfigIcon,
  GithubIcon,
  ToolboxIcon,
} from "../../icons";

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
const Navbar = ({ children }: Props) => (
  <nav className="font-light -mt-14 md:-mt-8  relative flex items-center py-3 flex-row justify-start">
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

Navbar.Nav = ({ children }: Props) => (
  <ul className="pl-0 mb-0 ml-auto flex">{children}</ul>
);

Navbar.Item = ({ children }: Props) => <li>{children}</li>;

Navbar.Link = ({ children, href, external, ...props }: NavLinkProps) => {
  return (
    <div className="cursor-pointer md:-mt-6 px-2 text-gray-700 hover:text-black font-medium">
      {external ? (
        <a className="inline-block" {...props} href={href}>
          {children}
        </a>
      ) : (
        <Link href={href}>
          <a className="inline-block" {...props}>
            {children}
          </a>
        </Link>
      )}
    </div>
  );
};

export const Header: FC = () => {
  return (
    <header className="md:px-container">
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
            <Navbar.Link href="/" title="Contribute">
              <CodeBranchIcon className="h-4 md:h-5" />
            </Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link
              href="https://github.com/enochndika/kimia-UI"
              external={true}
              title="Github source"
            >
              <GithubIcon className="h-4 md:h-5" />
            </Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link href="/configuration" title="Configuration">
              <ConfigIcon className="h-4 md:h-5" />
            </Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link href="/components/buttons" title="Components">
              <ToolboxIcon className="h-4 md:h-5" />
            </Navbar.Link>
          </Navbar.Item>
        </Navbar.Nav>
      </Navbar>
    </header>
  );
};
