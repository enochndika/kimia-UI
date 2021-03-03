import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => (
  <div className="px-container container-fluid">{children}</div>
);
