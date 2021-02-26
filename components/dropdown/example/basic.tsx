import { FC } from 'react';
import { Button } from '@/components/button';
import { Dropdown } from '@/components/dropdown';

export const BasicDropdown: FC = () => (
  <div className="mb-8">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-4">
      Basic Dropdown
    </h2>
    <Dropdown>
      <Dropdown.Toggle>
        <Button>Click on me</Button>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Enoch Ndika</Dropdown.Item>
        <Dropdown.Item>Josue Kazenga</Dropdown.Item>
        <Dropdown.Item>Business</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
);
