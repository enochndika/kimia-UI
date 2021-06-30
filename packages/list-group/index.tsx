import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
}

const style = {
  group: `list-reset flex flex-col pl-0 mb-0 `,
  item: `relative block py-3 px-5 relative -mb-px block border border-grey`,
};

export function ListGroup({ children, className }: Props) {
  return <ul className={`${className} ${style.group}`}>{children}</ul>;
}

export function ListGroupItem({ children, className, href }: Props) {
  return (
    <a href={href} className={`${className} ${style.item}`}>
      {children}
    </a>
  );
}
