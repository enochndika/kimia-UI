import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import Base from './base';
import { Sidenav } from './sidenav';
import { Header } from './header';
import { useFilterRoutes } from '../utils/filterRoutes';
import { Footer } from '../layout/footer';
import useDisclosure from '../utils/useDisclosure';

interface Props {
  children: ReactNode;
}

const style = {
  overlay: 'fixed z-10 w-screen h-screen bg-black opacity-50',
  container: 'fixed overflow-y-hidden w-full',
};

const Layout = ({ children }: Props) => {
  const { isOpen, toggle } = useDisclosure();
  const { pathname } = useRouter();
  const routes = useFilterRoutes(pathname);

  return (
    <>
      <Sidenav isOpen={isOpen} toggle={toggle} />
      <div className={isOpen ? style.overlay : ''} />
      <div className={isOpen ? style.container : ''}>
        <Header toggle={toggle} />
        <Base>{children}</Base>
        {routes && <Footer />}
      </div>
    </>
  );
};

export default Layout;
