import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export const ListGroup = ({ children, className }: Props) => (
  <ul
    className={`${className} list-reset flex flex-col pl-0 mb-0 w-full md:w-4/12`}
  >
    {children}
  </ul>
);

ListGroup.Item = ({ children, className }: Props) => (
  <li
    className={`${className} relative block py-3 px-5 relative -mb-px block border border-grey`}
  >
    {children}
  </li>
);
