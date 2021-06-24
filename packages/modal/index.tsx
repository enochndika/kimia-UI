import Portal from '@reach/portal';
import { ReactNode, useEffect, useRef } from 'react';

interface Props {
  children: ReactNode;
}

interface ModalProps extends Props {
  isOpen: boolean;
  position?: 'default' | 'large' | 'extraLarge';
  toggle: (isOpen?: boolean) => void;
  closeOnClickOutside: boolean;
  animate?: boolean;
}

const style = {
  body: `flex-shrink flex-grow p-4`,
  container: `fixed top-0 left-0 z-40 w-full h-full m-0 overflow-y-auto`,
  animate: 'animate-modal',
  content: {
    default: `relative flex flex-col bg-white pointer-events-auto`,
  },
  footer: `flex flex-wrap items-center justify-end p-3 border-t border-gray-300`,
  header: `items-start justify-between p-4 border-b border-gray-300`,
  headerTitle: `text-2xl md:text-3xl font-light`,
  orientation: {
    default:
      'mt-12 mx-8 pb-6 md:m-auto md:w-6/12 lg:w-4/12 md:pt-12 focus:outline-none',
    large:
      'mt-12 mx-8 pb-6 md:m-auto md:w-8/12 lg:w-8/12 md:pt-12 focus:outline-none',
    extraLarge: 'mt-12 mx-8 pb-6 md:w-12/12 md:pt-12 focus:outline-none',
  },
  overlay: `fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-50`,
};

const Modal = ({
  children,
  isOpen,
  toggle,
  closeOnClickOutside,
  position = 'default',
  animate = false,
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // close modal when you click outside the modal dialogue
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (closeOnClickOutside && !ref.current?.contains(event.target)) {
        if (!isOpen) return;
        toggle(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [closeOnClickOutside, isOpen, ref, toggle]);

  // close modal when you click on "ESC" key
  useEffect(() => {
    const handleEscape = (event) => {
      if (!isOpen) return;
      if (event.key === 'Escape') {
        toggle(false);
      }
    };
    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [isOpen, toggle]);

  // Put focus on modal dialogue, hide scrollbar and prevent body from moving when modal is open
  useEffect(() => {
    if (!isOpen) return;
    ref.current?.focus();
    const overflow = document.documentElement.style.overflow;
    const paddingRight = document.documentElement.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.documentElement.style.overflow = overflow;
      document.documentElement.style.paddingRight = paddingRight;
    };
  }, [isOpen]);

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
                className={`${style.content[position]} ${
                  style.content.default
                } ${animate ? style.animate : ''}`}
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
