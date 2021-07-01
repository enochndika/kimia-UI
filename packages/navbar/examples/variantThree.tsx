import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarNav,
  NavbarItem,
  NavbarLink,
  NavbarToggler,
} from '../index';

const NavbarVariantThree = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Navbar className="mb-8" bgColor="bg-black" textColor="text-white">
      <NavbarBrand href="#">Navbar</NavbarBrand>
      <NavbarToggler toggle={toggle} />
      <NavbarCollapse open={open}>
        <NavbarNav>
          <NavbarItem>
            <NavbarLink href="#">Home</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">Documents</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">React</NavbarLink>
          </NavbarItem>
        </NavbarNav>
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavbarVariantThree;
