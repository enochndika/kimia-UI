import { FC } from 'react';
import Button from '@/packages/button/button';
import useToggle from '@/packages/_utils/useToggle';
import { Modal, ModalBody, ModalHeader, ModalFooter } from '../modal';

const ModalNotClosedOutside: FC = () => {
  const { toggle, isOpen } = useToggle();
  return (
    <div className="mb-8">
      <h2 className="mb-3 mt-12 text-gray-600 text-lg font-bold md:text-2xl">
        Not closed on Click Outside
      </h2>
      <Button onClick={toggle} color="primary">
        Click to open me
      </Button>
      <Modal isOpen={isOpen} toggle={toggle} closeOnClickOutside={false}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          <span className="text-gray-700 text-lg font-bold">
            This modal will not be closed when clicked outside
          </span>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggle} color="danger" className="mr-1">
            Close
          </Button>
          <Button onClick={toggle} color="primary">
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalNotClosedOutside;
