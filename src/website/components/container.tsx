import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => (
  <div className={`${className} px-3 md:px-0 max-w-full`}>{children}</div>
);
