import { FC } from 'react';
import { Button } from '@/components/button';
import { Dropdown } from '@/components/dropdown';

export const DropdownComponent: FC = () => (
  <div className="flex flex-wrap">
    <div className="w-full mb-12 md:w-6/12">
      <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-4">
        Basic Dropdown
      </h2>
      <Dropdown>
        <Dropdown.Toggle>
          <Button color="success" block={false}>
            Click on me
          </Button>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Enoch Ndika</Dropdown.Item>
          <Dropdown.Item>Josue Kazenga</Dropdown.Item>
          <Dropdown.Item>Business</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <div className="w-full mb-12 md:w-6/12">
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
  </div>
);
