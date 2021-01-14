import { MobileNav } from "./mobileNav";
import { ReactNode, useState } from "react";
import { MobileHeader } from "./mobileHeader";
import Base from "../../base";

interface Props {
  children: ReactNode;
}

const MobileLayout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileNav isOpen={isOpen} toggle={toggle} />
      <div
        className={
          isOpen ? "fixed z-20 w-screen h-screen bg-black opacity-50" : ""
        }
      />
      <div className={isOpen ? "fixed overflow-y-hidden" : null}>
        <MobileHeader toggle={toggle} />
        <Base>{children}</Base>
      </div>
    </>
  );
};

export default MobileLayout;
