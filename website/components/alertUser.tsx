import React from 'react';

import Modal from '@/packages/modal';
import Button from '@/packages/button';
import useMounted from '../hooks/useMounted';
import useDisclosure from '../hooks/useDisclosure';

export const useAlertUser = () => {
  const isMounted = useMounted();
  const alertUser = isMounted && localStorage.getItem('alertUser');
  const userAlerted = isMounted && localStorage.getItem('userAlerted');

  React.useEffect(() => {
    localStorage.setItem(
      'alertUser',
      'Alert user to update the tailwind config',
    );
  }, []);

  if (isMounted) {
    return alertUser && !userAlerted;
  }
};

const ModalAlert = () => {
  const { toggle, isOpen } = useDisclosure();

  const onClose = () => {
    toggle();
    localStorage.setItem('userAlerted', 'User has been alerted');
  };

  return (
    <div className="mb-8">
      <Modal
        isOpen={!isOpen}
        toggle={toggle}
        animate={true}
        closeOnClickOutside={false}
      >
        <Modal.Body>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-12 w-12"
            >
              <path
                fill="#1d4ed8"
                d="M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z"
              />
              <path
                fill="#FFF"
                d="M323.2 367.5c-1.4-2-4-2.8-6.3-1.7-24.6 11.6-52.5 23.9-58 25-.1-.1-.4-.3-.6-.7-.7-1-1.1-2.3-1.1-4 0-13.9 10.5-56.2 31.2-125.7 17.5-58.4 19.5-70.5 19.5-74.5 0-6.2-2.4-11.4-6.9-15.1-4.3-3.5-10.2-5.3-17.7-5.3-12.5 0-26.9 4.7-44.1 14.5-16.7 9.4-35.4 25.4-55.4 47.5-1.6 1.7-1.7 4.3-.4 6.2 1.3 1.9 3.8 2.6 6 1.8 7-2.9 42.4-17.4 47.6-20.6 4.2-2.6 7.9-4 10.9-4 .1 0 .2 0 .3 0 0 .2.1.5.1.9 0 3-.6 6.7-1.9 10.7-30.1 97.6-44.8 157.5-44.8 183 0 9 2.5 16.2 7.4 21.5 5 5.4 11.8 8.1 20.1 8.1 8.9 0 19.7-3.7 33.1-11.4 12.9-7.4 32.7-23.7 60.4-49.7C324.3 372.2 324.6 369.5 323.2 367.5zM322.2 84.6c-4.9-5-11.2-7.6-18.7-7.6-9.3 0-17.5 3.7-24.2 11-6.6 7.2-9.9 15.9-9.9 26.1 0 8 2.5 14.7 7.3 19.8 4.9 5.2 11.1 7.8 18.5 7.8 9 0 17-3.9 24-11.6 6.9-7.6 10.4-16.4 10.4-26.4C329.6 96 327.1 89.6 322.2 84.6z"
              />
            </svg>
          </div>
          <div className="mt-8 mb-4 px-4 leading-8">
            <span className="md:pr-4" /> If you are already using Kimia-UI,
            please update your{' '}
            <strong className="text-indigo-900 pl-1">
              {' '}
              tailwind.config.js{' '}
            </strong>{' '}
            file by copying the new config in the configuration page. some major
            changes have been made
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClose} color="primary" block={true}>
            I get it!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default function Alert() {
  const showAlert = useAlertUser();

  return <>{showAlert && <ModalAlert />}</>;
}
