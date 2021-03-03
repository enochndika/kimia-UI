import { ReactNode } from 'react';
import { Header } from './default/header';
import { Footer } from './default/footer';
import { Sidenav } from './default/sidenav';
import { useToggle } from './default/toggle';

interface Props {
  children: ReactNode;
}

const CustomLayout = ({ children }: Props) => {
  const { isOpen, toggle } = useToggle();
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
        <div className="pt-28">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default CustomLayout;
