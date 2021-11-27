import { FC } from 'react';
import Button from '@/packages/button/button';
import useToggle from '@/packages/_utils/useToggle';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader } from '../drawer';

const DrawerBottom: FC = () => {
  const { toggle, isOpen } = useToggle();
  return (
    <div className="mb-8">
      <h2 className="mb-3 mt-12 text-gray-600 text-lg font-bold md:text-2xl">
        Bottom
      </h2>
      <Button onClick={toggle} color="primary">
        Click to open me
      </Button>
      <Drawer isOpen={isOpen} toggle={toggle} position="bottom">
        <DrawerHeader>Drawer title</DrawerHeader>
        <DrawerBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </DrawerBody>
        <DrawerFooter>
          <Button onClick={toggle} color="danger" className="mr-1">
            Close
          </Button>
          <Button onClick={toggle} color="primary">
            Confirm
          </Button>
        </DrawerFooter>
      </Drawer>
    </div>
  );
};

export default DrawerBottom;
