import Portal from '@reach/portal';
import { ReactNode, useEffect, useRef } from 'react';

interface Props {
  children: ReactNode;
}

interface ModalProps extends Props {
  isOpen: boolean;
  position?: 'left' | 'right' | 'top';
  toggle: (isOpen?: boolean) => void;
  closeOnClickOutside: boolean;
}

const positions = {
  left: `mt-12 mx-8 md:flex md:w-96 md:h-full md:m-0 md:left-0 md:mx-0 md:my-0 md:absolute`,
  right: `mt-12 mx-8 md:flex md:w-96 md:h-full md:m-0 md:right-0 md:mx-0 md:my-0 md:absolute`,
  top: 'mt-12 mx-8 md:m-auto md:w-4/12 md:pt-12',
};

const animations = {
  left: 'animate-modal-left',
  right: 'animate-modal-right',
  top: 'animate-modal-top',
};

/* Modal logic*/
const Modal = ({
  children,
  isOpen,
  toggle,
  closeOnClickOutside,
  position,
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const animation =
    position === 'left'
      ? animations.left
      : position === 'right'
      ? animations.right
      : animations.top;

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (closeOnClickOutside && !ref.current?.contains(event.target)) {
        if (!isOpen) return;
        toggle(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [isOpen, ref]);

  return (
    <Portal>
      {isOpen && (
        <div className="container">
          <div className="fixed top-0 left-0 z-40 w-screen h-screen bg-black opacity-50" />
          <div className="fixed top-0 left-0 z-40 w-full h-full m-0">
            <div
              className={positions[position]}
              ref={closeOnClickOutside ? ref : null}
              role="dialogue"
              aria-modal={true}
            >
              <div
                className={`${animation} relative flex flex-col bg-white pointer-events-auto`}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </Portal>
  );
};

Modal.Header = ({ children }: Props) => (
  <div className="items-start justify-between p-4 border-b border-gray-300">
    <h4 className="text-2xl md:text-3xl font-light">{children}</h4>
  </div>
);

Modal.Body = ({ children }: Props) => (
  <div className="flex-shrink flex-grow p-4">{children}</div>
);

Modal.Footer = ({ children }: Props) => (
  <div className="flex flex-wrap items-center justify-end p-3 border-t border-gray-300">
    {children}
  </div>
);

export default Modal;
