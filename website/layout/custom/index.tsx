import { Header } from './header';
import { Footer } from './footer';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const CustomLayout = ({ children }: Props) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default CustomLayout;
