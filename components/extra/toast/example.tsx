import { Toast } from "./index";
import { useState } from "react";

export const ToastContainer = () => (
  <>
    <ToastTopLeft />
    <ToastTopRight />
    <ToastBottomLeft />
    <ToastBottomRight />
  </>
);

const useSwitchToast = () => {
  const [show, setShow] = useState<boolean>(false);
  const open = () => {
    setShow(true);
  };
  const hideToast = () => {
    setShow(false);
  };

  return { show, hideToast, open };
};

const ToastTopLeft = () => {
  const { open, show, hideToast } = useSwitchToast();
  return (
    <div className="m-5">
      <button
        onClick={open}
        className="bg-green-700 text-white focus:outline-none rounded px-6 py-2 font-medium"
      >
        Success
      </button>
      <Toast
        show={show}
        position="topLeft"
        hideToast={hideToast}
        variant="success"
      >
        Your message ...
      </Toast>
    </div>
  );
};

const ToastTopRight = () => {
  const { open, show, hideToast } = useSwitchToast();
  return (
    <div className="m-5">
      <button
        className="bg-blue-700 text-white focus:outline-none rounded px-6 py-2 font-medium"
        onClick={open}
      >
        Info
      </button>
      <Toast
        show={show}
        position="topRight"
        hideToast={hideToast}
        variant="info"
      >
        Your message ...
      </Toast>
    </div>
  );
};

export const ToastBottomLeft = () => {
  const { open, show, hideToast } = useSwitchToast();
  return (
    <div className="m-5">
      <button
        className="bg-yellow-500 text-white focus:outline-none rounded px-6 py-2 font-medium"
        onClick={open}
      >
        Warning
      </button>
      <Toast
        show={show}
        position="bottomLeft"
        hideToast={hideToast}
        variant="warning"
      >
        Your message ...
      </Toast>
    </div>
  );
};

export const ToastBottomRight = () => {
  const { open, show, hideToast } = useSwitchToast();
  return (
    <div className="m-5">
      <button
        className="bg-red-600 text-white focus:outline-none rounded px-6 py-2 font-medium"
        onClick={open}
      >
        Danger
      </button>
      <Toast
        show={show}
        position="bottomRight"
        hideToast={hideToast}
        variant="danger"
      >
        Your message ...
      </Toast>
    </div>
  );
};
