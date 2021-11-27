import { FC } from 'react';
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  DropdownDivider,
} from '../dropdown';

const DropdownWithDivider: FC = () => (
  <div className="mb-8">
    <h2 className="mb-4 text-gray-600 text-lg font-bold md:text-2xl">
      Dropdown with divider
    </h2>
    <Dropdown>
      <DropdownToggle>
        <span className="flex">
          Options
          <svg
            className="-mr-1 ml-2 w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Heroku</DropdownItem>
        <DropdownItem>Postgres</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Digital Ocean</DropdownItem>
        <DropdownItem>Aws functions</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Azure</DropdownItem>
        <DropdownItem>Strapi</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
);

export default DropdownWithDivider;
