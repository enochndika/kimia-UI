import { useState } from 'react';
import { HamburgerMenu } from '../index';

export const HamburgerMenuVariantThree = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HamburgerMenu className="mb-8">
      <HamburgerMenu.Brand>Navigation</HamburgerMenu.Brand>
      <HamburgerMenu.Toggler toggle={toggle} />
      <HamburgerMenu.Collapse isOpen={isOpen}>
        <HamburgerMenu.Nav>
          <HamburgerMenu.Item>
            <HamburgerMenu.Link>Home</HamburgerMenu.Link>
          </HamburgerMenu.Item>
          <HamburgerMenu.Item>
            <HamburgerMenu.Link>Documents</HamburgerMenu.Link>
          </HamburgerMenu.Item>
          <HamburgerMenu.Item>
            <HamburgerMenu.Link>React</HamburgerMenu.Link>
          </HamburgerMenu.Item>
        </HamburgerMenu.Nav>
      </HamburgerMenu.Collapse>
    </HamburgerMenu>
  );
};
