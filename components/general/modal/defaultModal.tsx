import { Modal } from "./index";
import { useOpenModal } from "./openModal";
import { FC } from "react";

export const DefaultModal: FC = () => {
  const { toggle, open, ref } = useOpenModal();
  return (
    <>
      <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-12 mb-3">
        Default
      </h2>
      <button
        type="button"
        onClick={toggle}
        className="text-white focus:outline-none shadow m-1.5 rounded px-6 py-2 font-medium transition ease-in duration-200 bg-blue-600"
      >
        Click to open me
      </button>
      <Modal isOpen={open}>
        <Modal.Content ref={ref}>
          <Modal.Header>Modal title</Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={toggle}
              className="text-white focus:outline-none shadow m-1.5 rounded px-6 py-2 font-medium transition ease-in duration-200 bg-red-500"
            >
              Close
            </button>
            <button
              onClick={toggle}
              className="text-white focus:outline-none shadow m-1.5 rounded px-6 py-2 font-medium transition ease-in duration-200 bg-blue-600"
            >
              Confirm
            </button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};
