import Portal from '@reach/portal';
import { ReactNode, useEffect, useRef } from 'react';

interface Props {
  children: ReactNode;
}

interface DrawerProps extends Props {
  isOpen: boolean;
  position?: 'left' | 'right' | 'top' | 'bottom';
  toggle: (isOpen?: boolean) => void;
}

const style = {
  body: `flex-shrink flex-grow p-4`,
  container: `fixed top-0 left-0 z-40 w-full h-full m-0 overflow-hidden`,
  animation: {
    left: 'animate-drawer-left',
    right: 'animate-drawer-right',
    top: 'animate-drawer-top',
    bottom: 'animate-drawer-bottom',
  },
  content: `relative flex flex-col bg-white pointer-events-auto`,
  footer: `flex flex-wrap items-center justify-end p-3 border-t border-gray-300`,
  header: `items-start justify-between p-4 border-b border-gray-300`,
  headerTitle: `text-2xl md:text-3xl font-light`,
  orientation: {
    left: `flex w-8/12 md:w-80 lg:w-96 h-full left-0 mx-0 my-0 absolute focus:outline-none `,
    right: `flex w-8/12 md:w-80 lg:w-96 h-full right-0 mx-0 my-0 absolute focus:outline-none `,
    top: `flex w-full h-auto absolute top-0 focus:outline-none `,
    bottom: `flex w-full h-auto absolute bottom-0 focus:outline-none `,
  },
  overlay: `fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-50`,
};

const Drawer = ({
  children,
  isOpen,
  toggle,
  position = 'left',
}: DrawerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // close modal when you click outside the dialog
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (!isOpen) return;
        toggle(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [isOpen, ref]);

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
  }, [isOpen]);

  // hide scrollbar and prevent body from moving when modal is open
  useEffect(() => {
    if (!isOpen) return;

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
              aria-modal={true}
              className={style.orientation[position]}
              ref={ref}
              role="dialogue"
              tabIndex={-1}
            >
              <div className={`${style.animation[position]} ${style.content}`}>
                {children}
              </div>
            </div>
          </div>
        </>
      )}
    </Portal>
  );
};

Drawer.Header = ({ children }: Props) => (
  <div className={style.header}>
    <h4 className={style.headerTitle}>{children}</h4>
  </div>
);
Drawer.Body = ({ children }: Props) => (
  <div className={style.body}>{children}</div>
);

Drawer.Footer = ({ children }: Props) => (
  <div className={style.footer}>{children}</div>
);

export default Drawer;
