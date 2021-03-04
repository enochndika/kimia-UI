import { Sidenav } from './sidenav';
import { ReactNode } from 'react';
import { Header } from './header';
import Base from './base';
import { useToggle } from '../utils/toggle';
import { useRouter } from 'next/router';
import { useFilterRoutes } from '@/website/utils/filterRoutes';
import { Footer } from '@/website/layout/footer';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { isOpen, toggle } = useToggle();
  const { pathname } = useRouter();
  const routes = useFilterRoutes(pathname);
  return (
    <>
      <Sidenav isOpen={isOpen} toggle={toggle} />
      <div
        className={
          isOpen ? 'fixed z-10 w-screen h-screen bg-black opacity-50' : ''
        }
      />
      <div className={isOpen ? 'fixed overflow-y-hidden w-full' : null}>
        <Header toggle={toggle} />
        <Base>{children}</Base>
        {routes && <Footer />}
      </div>
    </>
  );
};

export default Layout;
