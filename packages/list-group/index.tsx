import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
}

const style = {
  group: `list-reset flex flex-col pl-0 mb-0 w-full md:w-4/12`,
  item: `relative block py-3 px-5 relative -mb-px block border border-grey`,
};

const ListGroup = ({ children, className }: Props) => (
  <ul className={`${className} ${style.group}`}>{children}</ul>
);

ListGroup.Item = ({ children, className, href }: Props) => (
  <a href={href} className={`${className} ${style.item}`}>
    {children}
  </a>
);

export default ListGroup;
