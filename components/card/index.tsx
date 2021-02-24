import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = ({ children, className }: Props) => (
  <div
    className={`${className} relative flex flex-col border-2 border-gray-200 rounded-lg`}
  >
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
