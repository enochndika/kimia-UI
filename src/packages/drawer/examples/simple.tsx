import { FC } from 'react';
import Button from '@/packages/button/button';
import useToggle from '@/packages/_utils/useToggle';
import { Drawer } from '../drawer';

const DrawerSimple: FC = () => {
  const { toggle, isOpen } = useToggle();
  return (
    <div className="mb-8">
      <h2 className="mb-3 mt-12 text-gray-600 text-lg font-bold md:text-2xl">
        Simple
      </h2>
      <Button onClick={toggle} color="primary">
        Click to open me
      </Button>
      <Drawer isOpen={isOpen} toggle={toggle} position="left">
        <h2 className="pt-4 px-4 text-2xl font-light md:text-3xl">
          React UI librairies
        </h2>
        <ul className="pl-8 pt-4 text-gray-700 list-disc">
          <li className="mb-2">Chakra-UI</li>
          <li className="mb-2">MDBootstrap</li>
          <li className="mb-2">React-bootstrap</li>
          <li className="mb-2">Material UI</li>
          <li className="mb-2">Supabase UI</li>
          <li className="mb-2">Ant Design</li>
          <li className="mb-2">ReactStrap</li>
          <li>React Suite</li>
        </ul>
      </Drawer>
    </div>
  );
};

export default DrawerSimple;
