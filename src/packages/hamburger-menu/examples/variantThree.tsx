import { useState } from 'react';
import {
  HamburgerMenu,
  HamburgerMenuBrand,
  HamburgerMenuCollapse,
  HamburgerMenuToggler,
  HamburgerMenuNav,
  HamburgerMenuItem,
  HamburgerMenuLink,
} from '../hamburgerMenu';

const HamburgerMenuVariantThree = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="mb-12">
      <HamburgerMenu className="mb-8" bgColor="bg-black" textColor="text-white">
        <HamburgerMenuBrand href="#">Navigation</HamburgerMenuBrand>
        <HamburgerMenuToggler toggle={toggle} />
        <HamburgerMenuCollapse open={open}>
          <HamburgerMenuNav>
            <HamburgerMenuItem>
              <HamburgerMenuLink href="#">Home</HamburgerMenuLink>
            </HamburgerMenuItem>
            <HamburgerMenuItem>
              <HamburgerMenuLink href="#">Documents</HamburgerMenuLink>
            </HamburgerMenuItem>
            <HamburgerMenuItem>
              <HamburgerMenuLink href="#">React</HamburgerMenuLink>
            </HamburgerMenuItem>
          </HamburgerMenuNav>
        </HamburgerMenuCollapse>
      </HamburgerMenu>
    </div>
  );
};

export default HamburgerMenuVariantThree;
