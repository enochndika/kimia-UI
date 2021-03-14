import { useState } from 'react';
import { HamburgerMenu } from '../index';

export const HamburgerMenuVariantThree = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HamburgerMenu className="mb-8">
      <HamburgerMenu.Brand href="#">Navigation</HamburgerMenu.Brand>
      <HamburgerMenu.Toggler toggle={toggle} />
      <HamburgerMenu.Collapse isOpen={isOpen}>
        <HamburgerMenu.Nav>
          <HamburgerMenu.Item>
            <HamburgerMenu.Link href="#">Home</HamburgerMenu.Link>
          </HamburgerMenu.Item>
          <HamburgerMenu.Item>
            <HamburgerMenu.Link href="#">Documents</HamburgerMenu.Link>
          </HamburgerMenu.Item>
          <HamburgerMenu.Item>
            <HamburgerMenu.Link href="#">React</HamburgerMenu.Link>
          </HamburgerMenu.Item>
        </HamburgerMenu.Nav>
      </HamburgerMenu.Collapse>
    </HamburgerMenu>
  );
};
