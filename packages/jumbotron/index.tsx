import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const Jumbotron = ({ className, children }: Props) => (
  <div
    className={`${className} shadow-lg border font-light border-solid rounded-sm py-12 px-8 mb-8`}
  >
    {children}
  </div>
);

export default Jumbotron;
