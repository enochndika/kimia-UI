import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => (
  <div className="px-3 md:px-0 max-w-full ">{children}</div>
);
