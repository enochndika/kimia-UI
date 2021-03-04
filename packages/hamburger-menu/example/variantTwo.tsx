import { useState } from 'react';
import { HamburgerMenu } from '../index';

export const HamburgerMenuVariantTwo = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HamburgerMenu color="bg-green-700" className="mb-8">
      <HamburgerMenu.Brand>
        <svg
          width="25"
          height="23"
          viewBox="0 0 256 236"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin meet"
        >
          <path
            d="M128.075 236.075l47.104-144.97H80.97l47.104 144.97z"
            fill="#E24329"
          />
          <path
            d="M128.075 236.074L80.97 91.104H14.956l113.119 144.97z"
            fill="#FC6D26"
          />
          <path
            d="M14.956 91.104L.642 135.16a9.752 9.752 0 0 0 3.542 10.903l123.891 90.012-113.12-144.97z"
            fill="#FCA326"
          />
          <path
            d="M14.956 91.105H80.97L52.601 3.79c-1.46-4.493-7.816-4.492-9.275 0l-28.37 87.315z"
            fill="#E24329"
          />
          <path
            d="M128.075 236.074l47.104-144.97h66.015l-113.12 144.97z"
            fill="#FC6D26"
          />
          <path
            d="M241.194 91.104l14.314 44.056a9.752 9.752 0 0 1-3.543 10.903l-123.89 90.012 113.119-144.97z"
            fill="#FCA326"
          />
          <path
            d="M241.194 91.105h-66.015l28.37-87.315c1.46-4.493 7.816-4.492 9.275 0l28.37 87.315z"
            fill="#E24329"
          />
        </svg>
      </HamburgerMenu.Brand>
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