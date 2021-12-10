import { FC, useState } from 'react';
import Collapse from '../collapse';
import Button from '@/packages/button/button';

const CollapseFirst: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="mb-12">
      <Button color="dark" onClick={toggle}>
        Toggle
      </Button>
      <div className="mr-5">
        <Collapse isOpen={isOpen}>
          <div>Next.js</div>
          <div>React</div>
          <div>JavaScript</div>
          <div>Chakra-UI</div>
        </Collapse>
      </div>
    </div>
  );
};

export default CollapseFirst;
