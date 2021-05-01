import Modal from '../index';
import { FC } from 'react';
import Button from '@/packages/button';
import useDisclosure from '@/website/utils/useDisclosure';

const ModalNotClosedOutside: FC = () => {
  const { toggle, isOpen } = useDisclosure();
  return (
    <div className="mb-8">
      <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-12 mb-3">
        Not closed on Click Outside
      </h2>
      <Button onClick={toggle} color="primary">
        Click to open me
      </Button>
      <Modal isOpen={isOpen} toggle={toggle} closeOnClickOutside={false}>
        <Modal.Header>Modal title</Modal.Header>
        <Modal.Body>
          <span className="font-bold text-lg text-gray-700">
            This modal will not be closed when clicked outside
          </span>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={toggle} color="danger" className="mr-1">
            Close
          </Button>
          <Button onClick={toggle} color="primary">
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalNotClosedOutside;
