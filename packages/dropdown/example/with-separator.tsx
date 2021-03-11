import { FC } from 'react';
import Dropdown from '../../dropdown';

export const DropdownWithSeparator: FC = () => (
  <div className="mb-8">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-4">
      Dropdown with separator
    </h2>
    <Dropdown>
      <Dropdown.Toggle>
        <span className="flex">
          Options
          <svg
            className="-mr-1 ml-2 h-5 w-5"
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
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Heroku</Dropdown.Item>
        <Dropdown.Item>Postgres</Dropdown.Item>
        <hr className="my-2" />
        <Dropdown.Item>Digital Ocean</Dropdown.Item>
        <Dropdown.Item>Aws functions</Dropdown.Item>
        <hr className="my-2" />
        <Dropdown.Item>Azure</Dropdown.Item>
        <Dropdown.Item>Strapi</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
);
