import { FC, useState } from 'react';
import { Collapse } from '../../collapse';
import { Button } from '@/packages/button';

export const CollapseSecond: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mb-12">
      <Button color="dark" onClick={toggle} className="flex">
        Toggle
        <svg
          className="h-5 w-5 mt-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
      <div className="mr-5">
        <Collapse isOpen={isOpen}>
          <div>Tailwindcss</div>
          <div>Vercel</div>
          <div>Docker</div>
        </Collapse>
      </div>
    </div>
  );
};
