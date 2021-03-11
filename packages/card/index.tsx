import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

const styles = {
  boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
};

export const Card = ({ children, className }: Props) => (
  <div className={`${className} relative flex flex-col`} style={styles}>
    {children}
  </div>
);

Card.Body = ({ children, className }: Props) => (
  <div className={`${className} block flex-grow flex-shrink p-5`}>
    {children}
  </div>
);

Card.Title = ({ children, className }: Props) => (
  <div className={`${className} font-medium text-gray-700 mb-3`}>
    {children}
  </div>
);

Card.Text = ({ children, className }: Props) => (
  <div className={`${className} text-gray-500`}>{children}</div>
);
