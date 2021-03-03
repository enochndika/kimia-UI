import { FC } from 'react';
import { Button } from '../../button';
import { Dropdown } from '../../dropdown';

export const DropdownWithSeparator: FC = () => (
  <div className="mb-8">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-4">
      Dropdown with separator
    </h2>
    <Dropdown>
      <Dropdown.Toggle>
        <Button color="indigo">Click on me</Button>
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
