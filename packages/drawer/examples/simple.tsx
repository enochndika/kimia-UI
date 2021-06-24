import { FC } from 'react';
import Button from '@/packages/button';
import useDisclosure from '@/website/hooks/useDisclosure';
import Drawer from '../index';

const DrawerSimple: FC = () => {
  const { toggle, isOpen } = useDisclosure();
  return (
    <div className="mb-8">
      <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-12 mb-3">
        Simple
      </h2>
      <Button onClick={toggle} color="primary">
        Click to open me
      </Button>
      <Drawer isOpen={isOpen} toggle={toggle} position="left">
        <h2 className="px-4 pt-4 text-2xl md:text-3xl font-light">
          React UI librairies
        </h2>
        <ul className="list-disc pl-8 pt-4 text-gray-700">
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
