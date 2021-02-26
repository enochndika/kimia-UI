import { Sidenav } from './sidenav';
import { ReactNode, useState } from 'react';
import { Header } from './header';
import Base from './base';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidenav isOpen={isOpen} toggle={toggle} />
      <div
        className={
          isOpen ? 'fixed z-20 w-screen h-screen bg-black opacity-50' : ''
        }
      />
      <div className={isOpen ? 'fixed overflow-y-hidden w-full' : null}>
        <Header toggle={toggle} />
        <Base>{children}</Base>
      </div>
    </>
  );
};

export default Layout;
