import Portal from '@reach/portal';
import { ReactNode, useEffect, useRef } from 'react';

interface Props {
  children: ReactNode;
}

interface ModalProps extends Props {
  isOpen: boolean;
  position?: 'left' | 'right' | 'top' | 'large' | 'extraLarge';
  toggle: (isOpen?: boolean) => void;
  closeOnClickOutside: boolean;
  withoutAnimation?: boolean;
}

const style = {
  body: `flex-shrink flex-grow p-4`,
  container: `fixed top-0 left-0 z-40 w-full h-full m-0`,
  content: {
    default: `relative flex flex-col bg-white pointer-events-auto`,
    left: 'animate-modal-left',
    right: 'animate-modal-right',
    top: 'animate-modal-top',
  },
  footer: `flex flex-wrap items-center justify-end p-3 border-t border-gray-300`,
  header: `items-start justify-between p-4 border-b border-gray-300`,
  headerTitle: `text-2xl md:text-3xl font-light`,
  orientation: {
    left: `mt-12 mx-8 md:flex md:w-96 md:h-full md:m-0 md:left-0 md:mx-0 md:my-0 md:absolute`,
    right: `mt-12 mx-8 md:flex md:w-96 md:h-full md:m-0 md:right-0 md:mx-0 md:my-0 md:absolute`,
    top: 'mt-12 mx-8 md:m-auto md:w-6/12 lg:w-4/12 md:pt-12',
    large: 'mt-12 mx-8 md:m-auto md:w-8/12 lg:w-8/12 md:pt-12',
    extraLarge: 'mt-12 mx-8 md:w-12/12 md:pt-12',
  },
  overlay: `fixed top-0 left-0 z-40 w-screen h-screen bg-black opacity-50`,
};

const Modal = ({
  children,
  isOpen,
  toggle,
  closeOnClickOutside,
  position = 'top',
  withoutAnimation = false,
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

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
        <>
          <div className={style.overlay} />
          <div className={style.container}>
            <div
              className={style.orientation[position]}
              ref={closeOnClickOutside ? ref : null}
              role="dialogue"
              aria-modal={true}
            >
              <div
                className={`${
                  !withoutAnimation ? style.content[position] : null
                } ${style.content.default}`}
              >
                {children}
              </div>
            </div>
          </div>
        </>
      )}
    </Portal>
  );
};

Modal.Header = ({ children }: Props) => (
  <div className={style.header}>
    <h4 className={style.headerTitle}>{children}</h4>
  </div>
);

Modal.Body = ({ children }: Props) => (
  <div className={style.body}>{children}</div>
);

Modal.Footer = ({ children }: Props) => (
  <div className={style.footer}>{children}</div>
);

export default Modal;
