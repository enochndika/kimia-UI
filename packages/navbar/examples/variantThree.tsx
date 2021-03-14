import { useState } from 'react';
import { Navbar } from '../index';

export const NavbarVariantThree = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar className="mb-8">
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
      <Navbar.Toggler toggle={toggle} />
      <Navbar.Collapse isOpen={isOpen}>
        <Navbar.Nav>
          <Navbar.Item>
            <Navbar.Link href="#">Home</Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link href="#">Documents</Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link href="#">React</Navbar.Link>
          </Navbar.Item>
        </Navbar.Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
