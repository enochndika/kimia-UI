import { ForwardedRef, forwardRef, ReactNode } from "react";
import Portal from "./portal";

interface Props {
  children: ReactNode;
}

interface ModalProps extends Props {
  isOpen: boolean;
}

interface ModalContentProps extends Props {
  position?: "left" | "right" | "default";
}

const positions = {
  left: `mt-12 mx-8 md:flex md:w-96 md:h-full md:m-0 md:left-0 md:mx-0 md:my-0 md:absolute`,
  right: `mt-12 mx-8 md:flex md:w-96 md:h-full md:m-0 md:right-0 md:mx-0 md:my-0 md:absolute`,
  default: "mt-12 mx-8 md:m-auto md:w-4/12 md:pt-12",
};

const animations = {
  left: "animate-modal-left",
  right: "animate-modal-right",
  default: "animate-modal-top",
};

export const Modal = ({ children, isOpen }: ModalProps) => (
  <>
    {isOpen && (
      <Portal selector="#modal">
        <div className="container">
          <div className="fixed top-0 left-0 z-40 w-screen h-screen bg-black opacity-50" />
          <div className="fixed top-0 left-0 z-40 w-full h-full m-0">
            {children}
          </div>
        </div>
      </Portal>
    )}
  </>
);

Modal.Content = forwardRef(
  (
    { children, position }: ModalContentProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const animation =
      position === "left"
        ? animations.left
        : position === "right"
        ? animations.right
        : animations.default;
    return (
      <div
        className={!position ? positions.default : positions[position]}
        ref={ref}
      >
        <div
          className={`${animation} relative flex flex-col bg-white pointer-events-auto`}
        >
          {children}
        </div>
      </div>
    );
  }
);

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
