import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarNav,
  NavbarItem,
  NavbarLink,
  NavbarToggler,
} from '../navbar';

const NavbarVariantThree = () => (
  <div className="mb-8">
    <Navbar className="text-gray-600 bg-white">
      <NavbarBrand href="#">
        <img
          src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
          alt="Next.js"
          className="w-9 h-9"
        />
      </NavbarBrand>
      <NavbarToggler />
      <NavbarCollapse>
        <NavbarNav orientation="start">
          <NavbarItem>
            <NavbarLink href="#">Documentation</NavbarLink>
          </NavbarItem>
        </NavbarNav>
        <NavbarNav orientation="end">
          <NavbarItem>
            <NavbarLink href="#">Deployment</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">Basic Features</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">Advanced Features</NavbarLink>
          </NavbarItem>
        </NavbarNav>
      </NavbarCollapse>
    </Navbar>
  </div>
);

export default NavbarVariantThree;
