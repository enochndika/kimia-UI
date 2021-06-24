import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => (
  <div className="px-3.5 max-w-full md:px-0 lg:px-container">{children}</div>
);
